const express = require("express");
const multer = require("multer");
const cors = require("cors");
const docxToPDF = require("docx-pdf");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(cors());

// Ensure upload & files directories exist
const uploadDir = path.join(__dirname, "uploads");
const filesDir = path.join(__dirname, "files");

[uploadDir, filesDir].forEach((dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
});

// Multer storage config
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

// Convert API
app.post("/convertFile", upload.single("file"), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        // Clean output file name (remove original extension)
        const baseName = path.parse(req.file.originalname).name;
        const outputPath = path.join(filesDir, `${baseName}.pdf`);

        docxToPDF(req.file.path, outputPath, (err) => {
            if (err) {
                console.error("Conversion Error:", err);
                return res.status(500).json({
                    message: "Error converting DOCX to PDF",
                });
            }

            // Send file for download
            res.download(outputPath, () => {
                console.log("File downloaded successfully");
            });
        });
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.listen(port, () => {
    console.log(`✅ Server is listening on port ${port}`);
});
