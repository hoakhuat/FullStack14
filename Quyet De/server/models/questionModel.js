const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const QuestionSchema = new mongoose.Schema({
    //trong mongoose có sẵn id
    content: { type: String, required: true },
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 }

    //đọc thêm child schema
}, {
        //bỏ id tự tạo
        // _id: false,
        //lấy thời gian lúc cập nhật
        timestamps: true
    }
);

//dùng bên ngoài file
module.exports = mongoose.model('question', QuestionSchema);