const fs = require("fs");

const resourceDir = "../spring-boot-backend/src/main/resources";
const oldDir = `${resourceDir}/static/templates`;
const oldFile = `${resourceDir}/static/templates/production.html`;
const newFile = `${resourceDir}/templates/production.html`;

const catchErr = (err, msg) => {
    if (err) {
        console.error(err);
    } else {
        console.log(msg);
    }
};

// ファイルをコピー
fs.copyFile(oldFile, newFile, (err) => {
    catchErr(err, "templateをコピーしました");
    // ファイル削除
    fs.unlink(oldFile, (err) => catchErr(err, "コピー元を削除しました"));
});
