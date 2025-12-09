// Dữ liệu câu hỏi và đáp án
const questions = [
    {
        id: 1,
        question: "Chủ nghĩa xã hội khoa học là một trong ba bộ phận cấu thành của…",
        options: [
            "chủ nghĩa Mác - Lênin",
            "triết học Mác – Lênin",
            "kinh tế chính trị Mác – Lênin",
            "chủ nghĩa xã hội không tưởng"
        ],
        correct: 0
    },
    {
        id: 2,
        question: "Học thuyết giá trị thặng dư là phát kiến vĩ đại của C.Mác và của Ph.Ăngghen trong?",
        options: [
            "triết học Mác — Lênin",
            "kinh tế chính trị Mác - Lênin",
            "chủ nghĩa xã hội khoa học",
            "chủ nghĩa xã hội hiện thực"
        ],
        correct: 1
    },
    {
        id: 3,
        question: "Trong phương thức sản xuất TBCN, mâu thuẫn về phương diện chính trị - xã hội là mâu thuẫn giữa giai cấp...",
        options: [
            "Vô sản với tư sản",
            "Chủ nô với nô lệ",
            "Nông dân với địa chủ",
            "Trí thức với công nhân"
        ],
        correct: 0
    },
    {
        id: 4,
        question: "Nội dung nào dưới đây là phát kiến vĩ đại của C. Mác và Ph. Ăngghen trong chủ nghĩa xã hội khoa học?",
        options: [
            "Chủ nghĩa duy vật lịch sử",
            "Học thuyết giá trị thặng dư",
            "Phép biện chứng duy vật",
            "Học thuyết về sứ mệnh lịch sử thế giới của giai cấp công nhân"
        ],
        correct: 3
    },
    {
        id: 5,
        question: "Chủ nghĩa Mác - Lênin gồm ba bộ phận cấu thành là: triết học Mác - Lênin, kinh tế chính trị Mác - Lênin và",
        options: [
            "mĩ học Mác - Lênin",
            "đạo đức học Mác - Lênin",
            "chủ nghĩa xã hội khoa học",
            "chủ nghĩa xã hội không tưởng"
        ],
        correct: 2
    },
    {
        id: 6,
        question: "Thành phần nào dưới đây KHÔNG phải là một trong ba bộ phận cấu thành của chủ nghĩa Mác - Lênin?",
        options: [
            "Triết học Mác – Lênin",
            "Kinh tế chính trị Mác - Lênin",
            "Chủ nghĩa xã hội khoa học",
            "Chủ nghĩa xã hội không tưởng"
        ],
        correct: 3
    },
    {
        id: 7,
        question: "Trong phương thức sản xuất tư bản chủ nghĩa, mâu thuẫn trong lĩnh vực kinh tế là mâu thuẫn giữa...",
        options: [
            "LLSX mang tính xã hội hóa với QHSX mang tính xã hội tư bản chủ nghĩa",
            "LLSX mang tính cá nhân với QHSX mang tính xã hội tư bản chủ nghĩa",
            "LLSX mang tính xã hội hóa với QHSX mang tính tư nhân tư bản chủ nghĩa",
            "LLSX mang tính cá nhân với QHSX mang tính tư nhân tư bản chủ nghĩa"
        ],
        correct: 2
    },
    {
        id: 8,
        question: "Chủ nghĩa xã hội khoa học là gì?",
        options: [
            "Là hệ thống lý luận luận giải từ góc độ chính trị - xã hội bước chuyển từ HTKT-XH TBCN sang HTKT-XH CSCN",
            "Là hệ thống lý luận luận giải từ góc độ chính trị - xã hội bước chuyển từ XHPK sang XHTBCN",
            "Là hệ thống lý luận luận giải từ góc độ kinh tế sự ra đời của HTKT-XH tư bản chủ nghĩa",
            "Là hệ thống lý luận luận giải từ góc độ kinh tế sự ra đời của HTKT-XH cộng sản chủ nghĩa"
        ],
        correct: 0
    },
    {
        id: 9,
        question: "Những nhà chủ nghĩa xã hội không tưởng nào đã KHÔNG luận chứng được một cách khoa học về bản chất và quy luật phát triển của chủ nghĩa tư bản?",
        options: [
            "A.Xmit và Đ. Ricácđô",
            "H.Xanh Ximông, S. Phuriê và R. Ôoen",
            "C. Mác và Ph. Ăngghen",
            "V.I. Lênin"
        ],
        correct: 1
    },
    {
        id: 10,
        question: "Chỉ ra luận điểm đúng sau đây?",
        options: [
            "Chủ nghĩa xã hội khoa học là một trong ba bộ phận cấu thành của chủ nghĩa Mác",
            "Chủ nghĩa xã hội khoa học là một trong ba xu hướng của chủ nghĩa Mác",
            "Chủ nghĩa xã hội khoa học là một trong ba tiền đề tư tưởng của chủ nghĩa Mác",
            "Chủ nghĩa xã hội khoa học là một trong ba nguồn gốc hình thành chủ nghĩa Mác"
        ],
        correct: 0
    },
    {
        id: 11,
        question: "Trong phương thức sản xuất tư bản chủ nghĩa, mâu thuẫn sâu sắc giữa lực lượng sản xuất với quan hệ sản xuất bộc lộ qua cuộc khủng hoảng kinh tế lần thứ nhất vào năm...",
        options: ["1824", "1825", "1826", "1827"],
        correct: 1
    },
    {
        id: 12,
        question: "Thành phần nào dưới đây KHÔNG phải là một trong ba phát kiến vĩ đại của chủ nghĩa Mác — Lênin?",
        options: [
            "Chủ nghĩa duy vật lịch sử",
            "Học thuyết giá trị thặng dư",
            "Chủ nghĩa duy vật biện chứng",
            "Học thuyết về sứ mệnh lịch sử của giai cấp công nhân"
        ],
        correct: 2
    },
    {
        id: 13,
        question: "Nội dung nào dưới đây là phát kiến vĩ đại của C. Mác và Ph. Ăngghen trong triết học Mác - Lênin?",
        options: [
            "Chủ nghĩa duy vật lịch sử",
            "Học thuyết giá trị thặng dư",
            "Chủ nghĩa duy vật biện chứng",
            "Học thuyết về sứ mệnh lịch sử thế giới của giai cấp công nhân"
        ],
        correct: 0
    },
    {
        id: 14,
        question: "Một trong những hạn chế của chủ nghĩa xã hội không tưởng Anh và Pháp là:",
        options: [
            "Không thấy được tính lịch sử của giá trị",
            "Không phân tích được một cách chính xác những biểu hiện của giá trị trong phương thức sản xuất tư bản chủ nghĩa",
            "Không luận chứng được một cách khoa học về bản chất của CNTB và quy luật phát triển của CNTB",
            "Tìm ra sứ mệnh lịch sử của giai cấp công nhân"
        ],
        correct: 2
    },
    {
        id: 15,
        question: "Phong trào đấu tranh của giai cấp vô sản vào những năm 30, 40 của thế kỷ XIX chứng tỏ rằng...",
        options: [
            "Giai cấp tư sản là một lực lượng chính trị độc lập",
            "Giai cấp vô sản là một lực lượng chính trị - xã hội độc lập",
            "Phong trào vô sản là một phong trào tự giác",
            "Giai cấp vô sản cần liên minh với địa chủ, phong kiến chống tư sản"
        ],
        correct: 1
    },
    {
        id: 16,
        question: "Ba nguồn gốc lý luận trực tiếp hình thành chủ nghĩa Mác là?",
        options: [
            "Học thuyết giá trị thặng dư, chủ nghĩa duy vật lịch sử, sứ mệnh lịch sử của giai cấp công nhân.",
            "Triết học cổ điển Đức, kinh tế chính trị học Anh và chủ nghĩa xã hội không tưởng Pháp",
            "Thuyết tiến hóa, Định luật bảo toàn và chuyển hóa năng lượng và Thuyết tế bào",
            "Triết học, kinh tế chính trị học và chủ nghĩa xã hội khoa học"
        ],
        correct: 1
    },
    {
        id: 17,
        question: "Chọn cụm từ dưới đây điền vào chỗ trống (...) để hoàn thiện luận điểm sau: Đối tượng nghiên cứu của chủ nghĩa xã hội khoa học là những quy luật (...) của quá trình hình thành, phát triển hình thái kinh tế - xã hội cộng sản chủ nghĩa?",
        options: [
            "Chính trị - xã hội",
            "Kinh tế - xã hội",
            "Văn hóa - xã hội",
            "Tư tưởng - xã hội"
        ],
        correct: 0
    },
    {
        id: 18,
        question: "Nội dung nào dưới đây là phát kiến vĩ đại của C. Mác và Ph. Ăngghen trong kinh tế chính trị Mác - Lênin?",
        options: [
            "Chủ nghĩa duy vật lịch sử",
            "Học thuyết giá trị thặng dư",
            "Chủ nghĩa duy vật biện chứng",
            "Học thuyết về sứ mệnh lịch sử thế giới của giai cấp công nhân"
        ],
        correct: 1
    },
    {
        id: 19,
        question: "Nội dung nào dưới đây là phát kiến vĩ đại của C. Mác và Ph. Ăngghen trong CNXHKH?",
        options: [
            "Chủ nghĩa duy vật lịch sử",
            "Học thuyết giá trị thặng dư",
            "Chủ nghĩa duy vật biện chứng",
            "Học thuyết về sứ mệnh lịch sử thế giới của giai cấp công nhân"
        ],
        correct: 3
    },
    {
        id: 20,
        question: "Quy luật chính trị - xã hội phản ánh quan hệ nào sau đây?",
        options: [
            "Quan hệ giữa các thiết chế văn hóa",
            "Quan hệ giữa các giai cấp, tầng lớp trong xã hội",
            "Quan hệ giữa các cộng đồng dân cư trong xã hội",
            "Quan hệ giữa các tổ chức trong xã hội"
        ],
        correct: 1
    },
    {
        id: 21,
        question: "Điền vào chỗ trống để hoàn thiện luận điểm của V.I. Lênin: \"Điểm chủ yếu trong học thuyết của Mác là ở chỗ nó làm sáng rõ vai trò lịch sử thế giới của (...) là người xây dựng xã hội xã hội chủ nghĩa\".",
        options: [
            "Giai cấp vô sản",
            "Giai cấp tư sản",
            "Tầng lớp trí thức",
            "Tầng lớp doanh nhân"
        ],
        correct: 0
    },
    {
        id: 22,
        question: "CNDV lịch sử là phát kiến vĩ đại của C. Mác và Ph. Ăngghen trong …?",
        options: [
            "Triết học Mác – Lênin",
            "Kinh tế chính trị Mác - Lênin",
            "Chủ nghĩa xã hội khoa học",
            "Chủ nghĩa xã hội hiện thực"
        ],
        correct: 0
    },
    {
        id: 23,
        question: "Học thuyết giá trị thặng dư là phát kiến vĩ đại của C. Mác và Ph. Ăngghen trong …?",
        options: [
            "Triết học Mác – Lênin",
            "Kinh tế chính trị Mác - Lênin",
            "Chủ nghĩa xã hội khoa học",
            "Chủ nghĩa xã hội hiện thực"
        ],
        correct: 1
    },
    {
        id: 24,
        question: "Phong trào đấu tranh nào sau đây là một trong những điều kiện ra đời của chủ nghĩa Mác?",
        options: [
            "Phong trào Hiến chương ở Anh",
            "Công xã Pari",
            "Cách mạng Tháng Mười Nga",
            "Cách mạng Tháng Tám ở Việt Nam"
        ],
        correct: 0
    },
    {
        id: 25,
        question: "Mảnh đất hiện thực để chủ nghĩa xã hội khoa học ra đời là gì?",
        options: [
            "Sự phát triển kinh tế - xã hội, khoa học - kỹ thuật, văn hóa - tư tưởng ở châu Âu những năm 40 của thế kỷ XVIII",
            "Sự phát triển kinh tế - xã hội, khoa học - kỹ thuật, văn hóa - tư tưởng ở châu Âu những năm 40 của thế kỷ XIX",
            "Sự phát triển kinh tế - xã hội, khoa học - kỹ thuật, văn hóa - tư tưởng ở châu Âu những năm 40 của thế kỷ XX",
            "Sự phát triển kinh tế - xã hội, khoa học - kỹ thuật, văn hóa - tư tưởng ở châu Âu những năm cuối của thế kỷ XX"
        ],
        correct: 1
    },
    {
        id: 26,
        question: "Tiền đề lý luận trực tiếp ra đời chủ nghĩa xã hội khoa học là gì?",
        options: [
            "Chủ nghĩa duy vật lịch sử và chủ nghĩa duy vật biện chứng",
            "Chủ nghĩa duy tâm khách quan và chủ nghĩa duy tâm chủ quan",
            "Chủ nghĩa duy vật siêu hình",
            "Chủ nghĩa xã hội không tưởng Pháp"
        ],
        correct: 3
    },
    {
        id: 27,
        question: "Vai trò của C. Mác và Ph. Ăngghen đối với chủ nghĩa xã hội được biểu hiện như thế nào?",
        options: [
            "Đưa chủ nghĩa xã hội từ không tưởng trở thành khoa học",
            "Đưa chủ nghĩa xã hội từ lý luận thành hiện thực",
            "Đưa chủ nghĩa xã hội hiện thực từ một nước trở thành hệ thống",
            "Đưa chủ nghĩa xã hội từ Đức sang Anh"
        ],
        correct: 0
    },
    {
        id: 28,
        question: "Hạn chế lớn nhất của chủ nghĩa xã hội không tưởng Anh và Pháp cuối thế kỷ XVIII đầu thế kỷ XIX là không phát hiện ra sứ mệnh lịch sử của giai cấp…",
        options: ["Nông dân", "Công nhân", "Tư sản", "Địa chủ"],
        correct: 1
    },
    {
        id: 29,
        question: "Học thuyết sứ mệnh lịch sử của GCCN là phát kiến vĩ đại của C. Mác và Ph. Ăngghen trong …?",
        options: [
            "Triết học Mác – Lênin",
            "Kinh tế chính trị Mác - Lênin",
            "Chủ nghĩa xã hội khoa học",
            "Chủ nghĩa xã hội hiện thực"
        ],
        correct: 2
    },
    {
        id: 30,
        question: "Vai trò của V.I. Lênin đối với chủ nghĩa xã hội biểu hiện như thế nào?",
        options: [
            "Đưa chủ nghĩa xã hội từ lý luận thành hiện thực",
            "Đưa chủ nghĩa xã hội từ một nước trở thành hệ thống",
            "Đưa chủ nghĩa xã hội từ không tưởng thành khoa học",
            "Đưa chủ nghĩa xã hội từ phương Tây sang phương Đông"
        ],
        correct: 0
    },
    {
        id: 31,
        question: "Phạm trù trung tâm và xuất phát của chủ nghĩa xã hội khoa học là gì?",
        options: [
            "Phạm trù sứ mệnh lịch sử của giai cấp công nhân",
            "Phạm trù sứ mệnh lịch sử của giai cấp nông dân",
            "Phạm trù sứ mệnh lịch sử của giai cấp tư sản",
            "Phạm trù sứ mệnh lịch sử của giai cấp chủ nô"
        ],
        correct: 0
    },
    {
        id: 32,
        question: "Vai trò của C. Mác gắn liền với tổ chức nào?",
        options: [
            "Tổ chức Quốc tế 1",
            "Tổ chức Quốc tế 2",
            "Tổ chức Quốc tế 3",
            "Tổ chức Quốc tế 4"
        ],
        correct: 0
    },
    {
        id: 33,
        question: "Nội dung nào dưới đây KHÔNG phải là điều kiện kinh tế - xã hội cho sự ra đời của chủ nghĩa xã hội khoa học?",
        options: [
            "Cách mạng công nghiệp tạo ra sự phát triển mạnh mẽ cho nền đại công nghiệp",
            "Mâu thuẫn giữa LLSX mang tính XHH với QHSX dựa trên chế độ chiếm hữu tư nhân TBCN",
            "Mâu thuẫn giữa GCCN và GCTS",
            "Triết học cổ điển Đức"
        ],
        correct: 3
    },
    {
        id: 34,
        question: "Phong trào đấu tranh nào dưới đây KHÔNG phải là điều kiện kinh tế - xã hội cho sự ra đời của chủ nghĩa xã hội khoa học?",
        options: [
            "Phong trào công nhân dệt ở thành phố Lion",
            "Phong trào công nhân ở Nga",
            "Phong trào Hiến chương của người lao động ở Anh",
            "Phong trào công nhân dệt ở thành phố Lyon"
        ],
        correct: 1
    },
    {
        id: 35,
        question: "Tác phẩm nào đánh dấu sự ra đời của chủ nghĩa xã hội khoa học?",
        options: [
            "Hệ tư tưởng Đức",
            "Tuyên ngôn của Đảng Cộng sản",
            "Phê phán Cương lĩnh Gôta",
            "Tình cảnh giai cấp lao động Anh"
        ],
        correct: 1
    },
    {
        id: 36,
        question: "Nội dung nào dưới đây là tiền đề khoa học tự nhiên cho sự ra đời của chủ nghĩa xã hội khoa học?",
        options: [
            "Định luật chuyển động Newton",
            "Thuyết Hoài nghi",
            "Học thuyết Tiến hóa",
            "Học thuyết Tế bào"
        ],
        correct: 3
    },
    {
        id: 37,
        question: "Tác phẩm nào là cương lĩnh chính trị đầu tiên của giai cấp công nhân?",
        options: [
            "Tuyên ngôn của Đảng Cộng sản",
            "Phê phán Cương lĩnh Gôta",
            "Hệ tư tưởng Đức",
            "Tư Bản"
        ],
        correct: 0
    },
    {
        id: 38,
        question: "Điền vào chỗ trống để hoàn thiện luận điểm của V.I. Lênin: \"Học thuyết của Mác là học thuyết (...) vì nó là một học thuyết chính xác\".",
        options: ["Vạn năng", "Khoa học", "Cách mạng", "Tiến bộ"],
        correct: 0
    },
    {
        id: 39,
        question: "Nội dung nào dưới đây là tiền đề khoa học tự nhiên cho sự ra đời của chủ nghĩa xã hội khoa học?",
        options: [
            "Định luật chuyển động Newton",
            "Định luật quán tính",
            "Định luật bảo toàn và chuyển hoá năng lượng",
            "Định luật hấp dẫn"
        ],
        correct: 2
    },
    {
        id: 40,
        question: "Chọn phương án đúng nhất: Chủ nghĩa Mác - Lênin được cấu thành từ ba bộ phận lý luận cơ bản là:",
        options: [
            "Chủ nghĩa xã hội không tưởng, Triết học Mác - Lênin, Kinh tế chính trị học Mác - Lênin",
            "Triết học Mác - Lênin, Kinh tế chính trị học Mác - Lênin, Chủ nghĩa xã hội khoa học",
            "Kinh tế chính trị học, Chủ nghĩa xã hội không tưởng, Triết học Mác – Lênin",
            "Triết học cổ điển Đức, Kinh tế học chính trị cổ điển Anh, Chủ nghĩa xã hội không tưởng Pháp"
        ],
        correct: 1
    },
    {
        id: 41,
        question: "Một trong những đóng góp của V.I. Lênin đối với chủ nghĩa xã hội khoa học là…",
        options: [
            "Xây dựng lý luận về đảng kiểu mới của giai cấp công nhân",
            "Xây dựng lý luận về đảng kiểu mới của giai cấp nông dân",
            "Xây dựng lý luận về đảng của nhiều giai cấp, tầng lớp trong xã hội",
            "Xây dựng lý luận về đảng của các dân tộc thuộc địa và phụ thuộc"
        ],
        correct: 0
    },
    {
        id: 42,
        question: "Nội dung nào dưới đây là tiền đề khoa học tự nhiên cho sự ra đời của chủ nghĩa xã hội khoa học?",
        options: [
            "Học thuyết tiến hoá của Darwin",
            "Triết học cổ điển Đức",
            "Kinh tế chính trị cổ điển Anh",
            "Chủ nghĩa xã hội không tưởng Pháp"
        ],
        correct: 0
    },
    {
        id: 43,
        question: "Một trong những đóng góp của V.I. Lênin đối với chủ nghĩa xã hội khoa học là gì?",
        options: [
            "Xây dựng lý luận về cách mạng dân chủ kiểu mới",
            "Xây dựng lý luận về cách mạng dân tộc kiểu mới",
            "Xây dựng lý luận về cách mạng phong kiến kiểu mới",
            "Xây dựng lý luận về cách mạng công nghệ"
        ],
        correct: 0
    },
    {
        id: 44,
        question: "Chọn phương án đúng nhất: Giai đoạn hình thành và phát triển chủ nghĩa Mác do ai thực hiện?",
        options: [
            "C. Mác",
            "C. Mác và Ph. Ăngghen",
            "V.I. Lênin",
            "C. Mác, Ph. Ăngghen và V.I. Lênin"
        ],
        correct: 1
    },
    {
        id: 45,
        question: "Chọn phương án đúng nhất: Giai đoạn bảo vệ và phát triển chủ nghĩa Mác thành chủ nghĩa Mác - Lênin do ai thực hiện?",
        options: [
            "C. Mác",
            "C. Mác và Ph. Ăngghen",
            "V.I. Lênin",
            "C. Mác, Ph. Ăngghen và V.I. Lênin"
        ],
        correct: 2
    },
    {
        id: 46,
        question: "Nội dung nào dưới đây KHÔNG phải là tiền đề khoa học tự nhiên cho sự ra đời của chủ nghĩa xã hội khoa học?",
        options: [
            "Định luật bảo toàn và chuyến hoá năng lượng",
            "Thuyết tương đối",
            "Học thuyết tiến hoá",
            "Học thuyết tế bào"
        ],
        correct: 1
    },
    {
        id: 47,
        question: "V.I. Lênin là người sáng lập tổ chức nào?",
        options: [
            "Đồng minh những người cộng sản",
            "Quốc tế 1",
            "Quốc tế 2",
            "Quốc tế 3 (Quốc tế cộng sản)"
        ],
        correct: 3
    },
    {
        id: 48,
        question: "Điền vào chỗ trống để hoàn thiện khẩu hiệu của V.I. Lênin: \"Vô sản tất cả các nước, các (...) bị áp bức đoàn kết lại\".",
        options: ["Dân tộc", "Giai cấp", "Tổ chức", "Tầng lớp"],
        correct: 0
    },
    {
        id: 49,
        question: "Nội dung nào dưới đây KHÔNG phải là tiền đề khoa học tự nhiên cho sự ra đời của chủ nghĩa xã hội khoa học?",
        options: [
            "Triết học hiện sinh",
            "Học thuyết tiến hoá của Darwin",
            "Phật giáo",
            "Kinh tế chính trị cổ điển Anh"
        ],
        correct: 3
    },
    {
        id: 50,
        question: "Cuộc cách mạng công nghiệp lần thứ nhất trong phương thức sản xuất TBCN diễn ra đầu tiên ở quốc gia nào?",
        options: ["Anh", "Pháp", "Đức", "Nga"],
        correct: 0
    },
    {
        id: 51,
        question: "Nội dung nào dưới đây là một tiền đề tư tưởng lí luận cho sự ra đời của chủ nghĩa xã hội khoa học?",
        options: [
            "Triết học Hy lạp",
            "Học thuyết tiến hoá của Darwin",
            "Chủ nghĩa xã hội không tưởng Pháp",
            "Chủ nghĩa duy vật chất phác"
        ],
        correct: 2
    },
    {
        id: 52,
        question: "Đối tượng nghiên cứu của chủ nghĩa xã hội khoa học là…",
        options: [
            "Những quy luật kinh tế của sự ra đời phương thức sản xuất cộng sản chủ nghĩa",
            "Những quy luật tự nhiên của quá trình cách mạng xã hội chủ nghĩa",
            "Những quy luật vận động, phát triển chung nhất của tự nhiên, xã hội và tư duy",
            "Cả A, B, C đều sai"
        ],
        correct: 3
    },
    {
        id: 53,
        question: "Tác phẩm nào dưới đây thể hiện rõ sự chuyển biến tư tưởng của Ph. Ăngghen từ thế giới quan duy tâm sang thế giới quan duy vật, từ lập trường dân chủ cách mạng sang lập trường cộng sản chủ nghĩa?",
        options: [
            "Bộ Tư bản",
            "Góp phần phê phán Triết học pháp quyền của Hêghen - Lời nói đầu",
            "Bản thảo kinh tế triết học năm 1844",
            "Lược khảo khoa kinh tế - chính trị"
        ],
        correct: 3
    },
    {
        id: 54,
        question: "Một trong những đóng góp quan trọng của Đảng Cộng sản Việt Nam vào lý luận của chủ nghĩa xã hội khoa học là…",
        options: [
            "Tư tưởng độc lập dân tộc gắn liền với chủ nghĩa xã hội",
            "Tư tưởng dân chủ",
            "Tư tưởng nhân văn",
            "Tư tưởng tự do"
        ],
        correct: 0
    },
    {
        id: 55,
        question: "Điền từ vào chỗ trống: Cách mạng Tháng Mười Nga năm 1917 thành công đã mở ra một thời đại mới - thời kỳ quá độ từ [...] trên phạm vi quốc tế.",
        options: [
            "Chủ nghĩa tư bản lên chủ nghĩa xã hội",
            "Phong kiến lên chủ nghĩa tư bản",
            "Thực dân, phong kiến lên chủ nghĩa xã hội",
            "Chủ nghĩa xã hội lên chủ nghĩa cộng sản"
        ],
        correct: 0
    },
    {
        id: 56,
        question: "Nội dung nào dưới đây là một tiền đề tư tưởng lí luận cho sự ra đời của chủ nghĩa xã hội khoa học?",
        options: [
            "Triết học cổ điển Đức",
            "Triết học Tây Âu trung cổ",
            "Triết học hiện sinh",
            "Triết học phương Tây hiện đại"
        ],
        correct: 0
    },
    {
        id: 57,
        question: "Nội dung nào dưới đây KHÔNG phải là tiền đề tư tưởng lí luận cho sự ra đời của chủ nghĩa xã hội khoa học?",
        options: [
            "Chủ nghĩa xã hội không tưởng Pháp",
            "Triết học cổ điển Đức",
            "Thuyết tương đối",
            "Kinh tế chính trị cổ điển Anh"
        ],
        correct: 2
    },
    {
        id: 58,
        question: "Phong trào đấu tranh nào sau đây là một trong những điều kiện ra đời của chủ nghĩa Mác?",
        options: [
            "Cách mạng tư sản Anh",
            "Công xã Pari",
            "Cách mạng Tháng Mười Nga",
            "Cuộc khởi nghĩa của công nhân dệt Lion (Pháp)"
        ],
        correct: 3
    },
    {
        id: 59,
        question: "Nội dung nào dưới đây KHÔNG phải là tiền đề tư tưởng lí luận cho sự ra đời của chủ nghĩa xã hội khoa học?",
        options: [
            "Định luật chuyển động Newton",
            "Triết học cổ điển Đức",
            "Chủ nghĩa xã hội không tưởng Pháp",
            "Kinh tế chính trị cổ điển Anh"
        ],
        correct: 0
    },
    {
        id: 60,
        question: "Một trong những tiền đề quan trọng cho bước chuyển biến tư tưởng của C. Mác và Ph. Ăngghen từ thế giới quan duy tâm sang thế giới quan duy vật là…",
        options: [
            "Phép biện chứng của G.W.Ph. Hêghen",
            "Chủ nghĩa duy vật vô thần của L. Phoiơbắc",
            "Tư tưởng kinh tế của A. Xmít",
            "Tư tưởng xã hội chủ nghĩa của H. Xanh Ximông"
        ],
        correct: 1
    },
    {
        id: 61,
        question: "Tác phẩm nào dưới đây thể hiện rõ sự chuyển biến tư tưởng của C. Mác từ thế giới quan duy tâm sang thế giới quan duy vật, từ lập trường dân chủ cách mạng sang lập trường cộng sản chủ nghĩa?",
        options: [
            "Tình cảnh nước Anh",
            "Góp phần phê phán triết học pháp quyền của Hêghen — Lời nói đầu",
            "Lược khảo khoa kinh tế - chính trị",
            "Bộ Tư bản"
        ],
        correct: 1
    },
    {
        id: 62,
        question: "Tác phẩm nào dưới đây thể hiện rõ sự chuyển biến tư tưởng của Ph. Ăngghen từ thế giới quan duy tâm sang thế giới quan duy vật, từ lập trường dân chủ cách mạng sang lập trường cộng sản chủ nghĩa?",
        options: [
            "Tình cảnh nước Anh",
            "Góp phần phê phán Triết học pháp quyền của Hêghen — Lời nói đầu",
            "Bản thảo kinh tế triết học năm 1844",
            "Bộ Tư bản"
        ],
        correct: 0
    },
    {
        id: 63,
        question: "Từ 1843 đến 1848, C. Mác và Ph. Ăngghen cho ra đời nhiều tác phẩm lớn, đánh dấu sự chuyển biến tư tưởng…",
        options: [
            "từ thế giới quan duy vật sang thế giới quan duy tâm, từ lập trường dân chủ cách mạng sang lập trường cộng sản chủ nghĩa",
            "từ thế giới quan duy vật sang thế giới quan duy tâm, từ lập trường cộng sản chủ nghĩa sang lập trường dân chủ cách mạng",
            "từ thế giới quan duy tâm sang thế giới quan duy vật, từ lập trường dân chủ cách mạng sang lập trường cộng sản chủ nghĩa",
            "từ thế giới quan duy tâm sang thế giới quan duy vật, từ lập trường cộng sản chủ nghĩa sang lập trường dân chủ cách mạng"
        ],
        correct: 2
    },
    {
        id: 64,
        question: "Học thuyết nào dưới đây của C. Mác và Ph. Ăngghen có nội dung cơ bản là lí luận về hình thái kinh tế - xã hội, là cơ sở về mặt triết học để nghiên cứu xã hội tư bản chủ nghĩa, khẳng định sự sụp đổ của chủ nghĩa tư bản và thắng lợi của chủ nghĩa xã hội, chủ nghĩa cộng sản là tất yếu như nhau?",
        options: [
            "Học thuyết duy vật biện chứng",
            "Học thuyết duy vật lịch sử",
            "Học thuyết giá trị thặng dư",
            "Học thuyết về sứ mệnh lịch sử thế giới của giai cấp công nhân"
        ],
        correct: 1
    },
    {
        id: 65,
        question: "Học thuyết nào dưới đây của C. Mác và Ph. Ăngghen, thông qua việc phân tích quan hệ bóc lột tư bản chủ nghĩa, quan hệ giữa tư bản và lao động làm thuê trong chế độ tư bản, đã chứng minh một cách khoa học về loại \"hàng hoá đặc biệt\", hàng hoá sức lao động của công nhân mà nhà tư bản đã mua và có những thủ đoạn tinh vi để chiếm đoạt giá trị mới do nó sinh ra?",
        options: [
            "Học thuyết duy vật biện chứng",
            "Học thuyết duy vật lịch sử",
            "Học thuyết giá trị thặng dư",
            "Học thuyết về sứ mệnh lịch sử thế giới của giai cấp công nhân"
        ],
        correct: 2
    },
    {
        id: 66,
        question: "Học thuyết nào dưới đây của C. Mác và Ph. Ăngghen đã khắc phục được một cách triệt để những hạn chế có tính lịch sử của chủ nghĩa xã hội không tưởng; luận chứng sâu sắc về bản chất trên phương diện chính trị - xã hội của sự diệt vong không tránh khỏi của chủ nghĩa tư bản và sự ra đời tất yếu của chủ nghĩa xã hội?",
        options: [
            "Học thuyết duy vật biện chứng",
            "Học thuyết duy vật lịch sử",
            "Học thuyết giá trị thặng dư",
            "Học thuyết về sứ mệnh lịch sử thế giới của giai cấp công nhân"
        ],
        correct: 3
    },
    {
        id: 67,
        question: "Tác phẩm nào dưới đây đánh dấu sự ra đời của chủ nghĩa Mác với tư cách là chủ nghĩa xã hội khoa học theo nghĩa rộng?",
        options: [
            "Tình cảnh giai cấp lao động ở Anh",
            "Những nguyên lí của chủ nghĩa cộng sản",
            "Tuyên ngôn của Đảng Cộng sản",
            "Điều lệ của Đồng minh những người cộng sản"
        ],
        correct: 2
    },
    {
        id: 68,
        question: "Tác phẩm Tuyên ngôn của Đảng Cộng sản ra đời vào…",
        options: [
            "tháng 2 năm 1842",
            "tháng 2 năm 1848",
            "tháng 8 năm 1842",
            "tháng 8 năm 1848"
        ],
        correct: 1
    },
    {
        id: 69,
        question: "Một trong những tiền đề quan trọng cho bước chuyển biến tư tưởng của C. Mác và Ph. Ăngghen từ thế giới quan duy tâm sang thế giới quan duy vật là…",
        options: [
            "Phép biện chứng của G.W.Ph. Hêghen",
            "Chủ nghĩa duy vật vô thần của L. Phoiơbắc",
            "Tư tưởng kinh tế của A. Xmít",
            "Tư tưởng xã hội chủ nghĩa của H. Xanh Ximông"
        ],
        correct: 1
    },
    {
        id: 70,
        question: "Tác phẩm nào dưới đây là cương lĩnh chính trị, là kim chi nam hành động của toàn bộ phong trào cộng sản và công nhân quốc tế trong cuộc đấu tranh chống chủ nghĩa tư bản, xây dựng xã hội mới - xã hội xã hội chủ nghĩa và cộng sản chủ nghĩa, nơi mọi người có cuộc sống ấm no, tự do, hạnh phúc, được phát triển toàn diện?",
        options: [
            "Tình cảnh giai cấp lao động ở Anh",
            "Những nguyên lí của chủ nghĩa cộng sản",
            "Tuyên ngôn của Đảng Cộng sản",
            "Điều lệ của Đồng minh những người cộng sản"
        ],
        correct: 2
    },
    {
        id: 71,
        question: "Tác phẩm nào dưới đây KHÔNG được C. Mác và Ph. Ăngghen viết trong giai đoạn từ năm 1848 đến Công xã Pari (1871)?",
        options: [
            "Ngày mười tám tháng Sương mù cùa Lui Bônapactơ",
            "Chiến tranh nông dân ở Đức",
            "Cách mạng và phản cách mạng ở Đức",
            "Chống Đuyrinh"
        ],
        correct: 3
    },
    {
        id: 72,
        question: "Tác phẩm nào dưới đây KHÔNG được C. Mác và Ph. Ăngghen viết trong giai đoạn sau từ Công xã Pari đến năm 1895?",
        options: [
            "Ngày mười tám tháng Sương mù của Lui Bônapactơ",
            "Nội chiến ở Pháp",
            "Nguồn gốc của gia đình, của chế độ tư hữu và của nhà nước",
            "Sự phát triển của chủ nghĩa xã hội từ không tưởng đến khoa học"
        ],
        correct: 0
    },
    {
        id: 73,
        question: "Tác phẩm nào dưới đây không được V.I. Lênin viết trong giai đoạn trước Cách mạng tháng Mười Nga?",
        options: [
            "Làm gì?",
            "Một bước tiến, hai bước lùi",
            "Bàn về nhà nước",
            "Nhà nước và cách mạng"
        ],
        correct: 2
    },
    {
        id: 74,
        question: "Tác phẩm nào dưới đây KHÔNG được V.I. Lênin viết trong giai đoạn sau Cách mạng Tháng Mười Nga?",
        options: [
            "Cách mạng vô sản và tên phản bội Causky",
            "Những người bạn dân là thế nào và họ đấu tranh chống những người dân chủ ra sao?",
            "Những nhiệm vụ trước mắt của chính quyền Xô viết",
            "Bàn về nhà nước"
        ],
        correct: 3
    },
    {
        id: 75,
        question: "Tác phẩm nào dưới đây đã phân tích một cách có hệ thống lịch sử và logic hoàn chỉnh về những vấn đề cơ bản nhất, đầy đủ, xúc tích và chặt chẽ nhất, thâu tóm gần như toàn bộ những luận điểm của chủ nghĩa xã hội?",
        options: [
            "Tình cảnh giai cấp lao động ở Anh",
            "Những nguyên lí của chủ nghĩa cộng sản",
            "Tuyên ngôn của Đảng Cộng sản",
            "Điều lệ của Đồng minh những người cộng sản"
        ],
        correct: 2
    },
    {
        id: 76,
        question: "Phát triển chủ nghĩa xã hội từ không tưởng đến khoa học là công lao của…?",
        options: [
            "G.W.F. Hegel",
            "C.Mác và Ph. Ăngghen",
            "V.I. Lênin",
            "S. Phuriê"
        ],
        correct: 1
    },
    {
        id: 77,
        question: "Những nhà kinh tế nào đã KHÔNG thấy được tính hai mặt của lao động sản xuất hàng hóa và chưa phân biệt được sự khác nhau giữa sản xuất hàng hóa giản đơn với sản xuất hàng hóa tư bản chủ nghĩa?",
        options: [
            "A. Xmít và Đ. Ricácđô",
            "H. Xanh Ximông, S. Phuriê và R. Ôoen",
            "C. Mác và Ph. Ăngghen",
            "G.W.Ph. Hêghen và L. Phoiơbắc"
        ],
        correct: 0
    },
    {
        id: 78,
        question: "Một trong những hạn chế của chủ nghĩa xã hội không tưởng Anh và Pháp là…",
        options: [
            "Không thấy được tính lịch sử của giá trị",
            "Không phân tích được một cách chính xác những biểu hiện của giá trị trong PTSXTBCN",
            "Không luận chứng được một cách khoa học về bản chất của CNTB và quy luật phát triển của CNTB",
            "Tất cả các phương án đều sai"
        ],
        correct: 2
    },
    {
        id: 79,
        question: "Biến chủ nghĩa xã hội khoa học từ lí luận thành hiện thực là công lao của…",
        options: [
            "G.W.F. Hegel",
            "Mác và Ph. Ăngghen",
            "V.I. Lênin",
            "I.V. Stalin"
        ],
        correct: 2
    },
    {
        id: 80,
        question: "Người trực tiếp lãnh đạo Đảng của giai cấp công nhân Nga tập hợp lực lượng đấu tranh chống chế độ chuyên chế Nga Hoàng, tiến tới giành chính quyền về tay giai cấp công nhân và nhân dân lao động Nga là…",
        options: [
            "C. Mác và Ph. Ăngghen",
            "I.V. Stalin",
            "V.I. Lênin",
            "G. Dimitrov"
        ],
        correct: 2
    },
    {
        id: 81,
        question: "Bằng con đường nào để thực hiện bước chuyển biến thay thế chủ nghĩa tư bản bằng chủ nghĩa xã hội thì đó là nhiệm vụ của…?",
        options: [
            "triết học Mác – Lênin",
            "chủ nghĩa xã hội khoa học",
            "kinh tế chính trị Mác – Lênin",
            "chủ nghĩa xã hội hiện thực"
        ],
        correct: 1
    },
    {
        id: 82,
        question: "Chủ nghĩa Mác - Lênin là vũ khí lí luận của giai cấp nào?",
        options: ["Tư sản", "Vô sản", "Chủ nô", "Nô lệ"],
        correct: 1
    },
    {
        id: 83,
        question: "Phê phán, đấu tranh bác bỏ những trào lưu tư tưởng chống cộng, chống chủ nghĩa xã hội, bảo vệ sự trong sáng của chủ nghĩa Mác - Lênin và những thành quả của cách mạng xã hội chủ nghĩa là một nhiệm vụ vô cùng quan trọng của…",
        options: [
            "chủ nghĩa xã hội không tưởng",
            "chủ nghĩa xã hội không tưởng - phê phán",
            "kinh tế chính trị cổ điển Anh",
            "chủ nghĩa xã hội khoa học"
        ],
        correct: 3
    },
    {
        id: 84,
        question: "Thời kỳ C. Mác và Ph. Ăngghen tiếp tục bổ sung và phát triển học thuyết của mình là…",
        options: ["1838 - 1841", "1841 - 1843", "1844 - 1848", "1848 - 1895"],
        correct: 3
    },
    {
        id: 85,
        question: "Thời kỳ đánh dấu bước chuyển biến tư tưởng của C. Mác và Ph. Ăngghen từ chủ nghĩa duy tâm và dân chủ cách mạng sang chủ nghĩa duy vật và chủ nghĩa cộng sản là…",
        options: ["1838 - 1841", "1841 - 1843", "1844 - 1848", "1848 - 1895"],
        correct: 1
    },
    {
        id: 86,
        question: "Những quy luật, tính quy luật chính trị - xã hội của quá trình phát sinh và phát triển của hình thái kinh tế - xã hội cộng sản chủ nghĩa mà giai đoạn thấp là chủ nghĩa xã hội; những nguyên tắc cơ bản, những điều kiện, những con đường và hình thức, phương pháp đấu tranh cách mạng của giai cấp công nhân và nhân dân lao động nhằm hiện thực hoá sự chuyển biến từ chủ nghĩa tư bản lên chủ nghĩa xã hội và chủ nghĩa cộng sản là đối tượng nghiên cứu của…",
        options: [
            "triết học Mác — Lênin",
            "kinh tế chính trị Mác — Lênin",
            "chủ nghĩa xã hội khoa học",
            "chủ nghĩa xã hội hiện thực"
        ],
        correct: 2
    },
    {
        id: 87,
        question: "Luận chứng một cách khoa học tính tất yếu về mặt lịch sử sự thay thế của chủ nghĩa tư bản bằng chủ nghĩa xã hội gắn liền với sứ mệnh lịch sử thế giới của giai cấp công nhân là nhiệm vụ của…",
        options: [
            "chủ nghĩa xã hội không tưởng",
            "chủ nghĩa xã hội không tưởng phê phán",
            "triết học Mác - Lênin",
            "chủ nghĩa xã hội khoa học"
        ],
        correct: 3
    },
    {
        id: 88,
        question: "Phong trào đấu tranh của giai cấp vô sản vào những năm 30, 40 của thế kỷ XIX chứng tỏ rằng...",
        options: [
            "Giai cấp tư sản là một lực lượng chính trị độc lập",
            "Giai cấp vô sản là một lực lượng chính trị - xã hội độc lập",
            "Phong trào vô sản là một phong trào tự giác",
            "Giai cấp vô sản cần liên minh với địa chủ, phong kiến chống tư sản"
        ],
        correct: 1
    },
    {
        id: 89,
        question: "Nội dung nào dưới đây được coi là phương pháp luận chung nhất cho việc nghiên cứu chủ nghĩa xã hội khoa học?",
        options: [
            "Phương pháp luận duy vật biện chứng và phương pháp luận duy vật lịch sử của triết học Mác - Lênin",
            "Phương pháp luận duy tâm biện chứng của Hegel và phương pháp luận duy vật nhân bản của Feuerbach",
            "Phương pháp trừu tượng hoá khoa học",
            "Phương pháp logic và lịch sử"
        ],
        correct: 0
    },
    {
        id: 90,
        question: "Chọn phương án đúng nhất: Ba nguồn gốc lí luận trực tiếp cho sự ra đời của chủ nghĩa Mác là…",
        options: [
            "Chủ nghĩa duy vật vô thần của L. Phoiơbắc; Lí luận về giá trị lao động của Xmít và Ricácđô; Phép biện chứng của G.W. Ph. Hêghen",
            "Định luật Bảo toàn và Chuyển hóa năng lượng; Triết học cổ điển Đức; Kinh tế chính trị học cổ điển Anh",
            "Triết học cổ điển Đức; Kinh tế chính trị học cổ điển Anh; Chủ nghĩa xã hội không tưởng Anh và Pháp",
            "Triết học cổ điển Đức; Kinh tế chính trị học cổ điển Anh; Học thuyết Tiến hóa của Đácuyn"
        ],
        correct: 2
    },
    {
        id: 91,
        question: "Nội dung nào dưới đây KHÔNG phải là phương pháp nghiên cứu cụ thể của chủ nghĩa xã hội khoa học?",
        options: [
            "Phương pháp logic và lịch sử",
            "Phương pháp phân tích và tổng hợp",
            "Các phương pháp có tính liên ngành",
            "Phương pháp trừu tượng hoá khoa học"
        ],
        correct: 3
    },
    {
        id: 92,
        question: "Góp phần quan trọng việc giáo dục niềm tin khoa học cho nhân dân vào mục tiêu, lí tưởng xã hội chủ nghĩa và con đường đi lên chủ nghĩa xã hội là nội dung thể hiện…",
        options: [
            "ý nghĩa của việc nghiên cứu chủ nghĩa xã hội khoa học",
            "nội dung của chủ nghĩa xã hội khoa học",
            "sứ mệnh của giai cấp công nhân Việt Nam",
            "sứ mệnh của giai cấp công nhân quốc tế"
        ],
        correct: 0
    },
    // Chương 2 - Task 1 (câu 1-50)
    {
        id: 93,
        question: "Nội dung nào dưới đây là phạm trù trung tâm, là nguyên lí xuất phát của chủ nghĩa xã hội khoa học?",
        options: [
            "Sứ mệnh lịch sử thế giới của giai cấp công nhân",
            "Chủ nghĩa xã hội và thời kì quá độ lên chủ nghĩa xã hội",
            "Dân chủ xã hội chủ nghĩa và nhà nước xã hội chủ nghĩa",
            "Vấn đề dân tộc trong thời kì quá độ lên chủ nghĩa xã hội"
        ],
        correct: 0
    },
    {
        id: 94,
        question: "Giai cấp nào dưới đây là con đẻ của nền đại công nghiệp tư bản chủ nghĩa?",
        options: [
            "Giai cấp tư sản",
            "Giai cấp địa chủ",
            "Giai cấp công nhân",
            "Giai cấp nông dân"
        ],
        correct: 2
    },
    {
        id: 95,
        question: "Chọn phương án đúng nhất: Sự ra đời và phát triển của giai cấp công nhân hiện đại gắn liền với sự ra đời và phát triển của [...].",
        options: [
            "Sản xuất thủ công",
            "Công trường thủ công",
            "Nền đại công nghiệp tư bản chủ nghĩa",
            "Cả A, B, C đều sai"
        ],
        correct: 2
    },
    {
        id: 96,
        question: "Nội dung sứ mệnh lịch sử của giai cấp công nhân là [...].",
        options: [
            "Xóa bỏ chế độ chiếm hữu nô lệ, xây dựng chế độ phong kiến",
            "Xóa bỏ chế độ phong kiến, xây dựng chế độ tư bản chủ nghĩa",
            "Xóa bỏ chế độ tư bản chủ nghĩa, xây dựng chủ nghĩa xã hội, chủ nghĩa cộng sản",
            "Cả A, B, C đều sai"
        ],
        correct: 2
    },
    {
        id: 97,
        question: "Trong chủ nghĩa tư bản, giai cấp công nhân đại biểu cho phương thức sản xuất [...].",
        options: [
            "Tiên tiến",
            "Lạc hậu",
            "Manh mún",
            "Cả A, B, C"
        ],
        correct: 0
    },
    {
        id: 98,
        question: "Trong chủ nghĩa tư bản, giai cấp công nhân có mấy đặc trưng cơ bản?",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        correct: 0
    },
    {
        id: 99,
        question: "“Kết quả lao động của công nhân là sản phẩm của trí tuệ con người kết tinh trong máy móc” là muốn đề cập đến giai cấp nào?",
        options: [
            "Giai cấp công nhân hiện đại",
            "Giai cấp nông dân",
            "Giai cấp tư sản",
            "Tầng lớp trí thức"
        ],
        correct: 1
    },
    {
        id: 100,
        question: "Về vị trí trong quan hệ sản xuất tư bản chủ nghĩa, công nhân là những người lao động […].",
        options: [
            "có sở hữu tư liệu sản xuất là sức lao động",
            "có sở hữu tư liệu sản xuất là kinh nghiệm cá nhân",
            "không sở hữu tư liệu sản xuất chủ yếu của xã hội",
            "không sở hữu bất cứ tư liệu sản xuất nào của xã hội"
        ],
        correct: 2
    },
    {
        id: 101,
        question: "“Các giai cấp khác đều suy tàn và tiêu vong cùng với sự phát triển của đại công nghiệp, còn giai cấp vô sản là sản phẩm của bản thân nền đại công nghiệp” là luận điểm của […].",
        options: [
            "C. Mác và Ph.Ăngghen",
            "C. Mác",
            "Ph. Ăngghen",
            "V.I. Lênin"
        ],
        correct: 0
    },
    {
        id: 102,
        question: "Giai cấp, tầng lớp nào dưới đây không sở hữu tư liệu sản xuất chủ yếu phải bán sức lao động cho nhà tư bản và bị nhà tư bản bóc lột giá trị thặng dư?",
        options: [
            "Trí thức",
            "Doanh nhân",
            "Tiểu tư sản",
            "Công nhân"
        ],
        correct: 0
    },
    {
        id: 103,
        question: "Một số thuật ngữ khác nhau được C. Mác và Ph. Ănghen sử dụng có nghĩa tương đồng với khái niệm giai cấp công nhân là [...].",
        options: [
            "Giai cấp vô sản",
            "Giai cấp công nhân hiện đại",
            "Giai cấp công nhân đại công nghiệp",
            "Cả A, B, C"
        ],
        correct: 3
    },
    {
        id: 104,
        question: "Giai cấp công nhân là tập đoàn người lao động sử dụng công cụ sản xuất có tính [...].",
        options: [
            "Thủ công",
            "Công nghiệp",
            "Thô sơ",
            "Cả A, B, C"
        ],
        correct: 1
    },
    {
        id: 105,
        question: "Chọn phương án đúng nhất: Trong chủ nghĩa tư bản, giai cấp công nhân hiện đại có nguồn gốc từ [...].",
        options: [
            "Giai cấp nông dân",
            "Thợ thủ công",
            "Tiểu chủ",
            "Cả A, B, C"
        ],
        correct: 3
    },
    {
        id: 106,
        question: "Trong chế độ tư bản chủ nghĩa, “không có tư liệu sản xuất, phải bán sức lao động và bị bóc lột giá trị thặng dư” là đặc trưng cơ bản của giai cấp nào?",
        options: [
            "Giai cấp tư sản",
            "Giai cấp công nhân",
            "Giai cấp nông dân",
            "Tầng lớp trí thức"
        ],
        correct: 1
    },
    {
        id: 107,
        question: "Trong chế độ tư bản chủ nghĩa, “không có tư liệu sản xuất, phải bán sức lao động và bị bóc lột giá trị thặng dư” là đặc trưng cơ bản để phân biệt giai cấp công nhân với [...].",
        options: [
            "Tầng lớp trí thức",
            "Giai cấp nông dân",
            "Giai cấp tư sản",
            "Cả A, B, C"
        ],
        correct: 2
    },
    {
        id: 108,
        question: "Giai cấp, tầng lớp nào dưới đây chỉ có thể sống với điều kiện là kiếm được việc làm, và chỉ kiếm được việc làm, nếu lao động của họ làm tăng thêm tư bản?",
        options: [
            "Nông dân",
            "Địa chủ",
            "Công nhân",
            "Tư sản"
        ],
        correct: 2
    },
    {
        id: 109,
        question: "Lực lượng nào dưới đây buộc phải tự bán mình đế kiếm ăn từng bữa, là một hàng hoá, tức là một món hàng đem bán như bất cứ món hàng nào khác, vì thế, họ phải chịu hết mọi sự may rủi của cạnh tranh, mọi sự lên xuống của thị trường?",
        options: [
            "Nông dân",
            "Người làm nghề tự do",
            "Tiểu tư sản",
            "Công nhân"
        ],
        correct: 0
    },
    {
        id: 110,
        question: "Nội dung nào dưới đây là nguồn gốc cơ bản của giá trị thặng dư và sự giàu có của giai cấp tư sản?",
        options: [
            "Lao động sống của giai cấp công nhân",
            "Quá trình trao đổi, mua bán",
            "Hoạt động thương mại",
            "Kinh tế thị trường"
        ],
        correct: 0
    },
    {
        id: 111,
        question: "Giai cấp công nhân lao động bằng phương thức công nghiệp với đặc trưng công cụ lao động là […].",
        options: [
            "ruộng đất",
            "con trâu, cái cày",
            "trí óc",
            "máy móc có tính chất công nghiệp"
        ],
        correct: 3
    },
    {
        id: 112,
        question: "Giai cấp nào dưới đây là sản phẩm của bản thân nền đại công nghiệp, là chủ thể của quá trình sản xuất vật chất hiện đại?",
        options: [
            "Giai cấp chủ nô",
            "Giai cấp địa chủ",
            "Giai cấp công nhân",
            "Giai cấp tư sản"
        ],
        correct: 2
    },
    {
        id: 113,
        question: "Lực lượng nào dưới đây là đại biểu cho lực lượng sản xuất tiên tiên, cho phương thức sản xuất tiên tiến, quyết định sự tồn tại và phát triển của xã hội hiện đại?",
        options: [
            "Giai cấp nông dân",
            "Đội ngũ trí thức",
            "Giai cấp công nhân",
            "Giai cấp tư sản"
        ],
        correct: 2
    },
    {
        id: 114,
        question: "Chọn phương án đúng nhất: Trong chế độ tư bản chủ nghĩa, mâu thuẫn giữa giai cấp công nhân và giai cấp tư sản là mâu thuẫn đối kháng […].",
        options: [
            "Trực tiếp",
            "Gián tiếp",
            "Trực tiếp và gián tiếp",
            "Cả A, B, C đều sai"
        ],
        correct: 0
    },
    {
        id: 115,
        question: "Chọn phương án đúng nhất: Theo chủ nghĩa Mác - Lênin, trong chế độ tư bản chủ nghĩa, giai cấp công nhân là giai cấp […].",
        options: [
            "Có tư liệu sản xuất",
            "Lao động trong nền đại công nghiệp",
            "Không có tư liệu sản xuất",
            "D. Cả A, B, C"
        ],
        correct: 2
    },
    {
        id: 116,
        question: "Dựa vào khái niệm giai cấp công nhân, trong chủ nghĩa tư bản hiện nay, giai cấp công nhân là giai cấp […].",
        options: [
            "Không bị bóc lột giá trị thặng dư",
            "Bị bóc lột giá trị thặng dư",
            "Bị bóc lột một phần giá trị thặng dư",
            "Cả A, B, C đều sai"
        ],
        correct: 1
    },
    {
        id: 117,
        question: "Trong chế độ tư bản chủ nghĩa, một trong những đặc điểm chính trị - xã hội của giai cấp công nhân là […].",
        options: [
            "Giai cấp có tư liệu sản xuất",
            "Bộ phận quan trọng nhất của lực lượng sản xuất",
            "Giai cấp tiên phong cách mạng",
            "Cả A, B, C"
        ],
        correct: 1
    },
    {
        id: 118,
        question: "Ai đã khẳng định: “Lực lượng sản xuất hàng đầu của toàn nhân loại là công nhân, là người lao động”?",
        options: [
            "C. Mác",
            "Ph. Ănghen",
            "Hồ Chí Minh",
            "V. I. Lênin"
        ],
        correct: 3
    },
    {
        id: 119,
        question: "Chọn phương án đúng nhất: Tìm ý đúng cho luận điểm sau: Cùng với sự phát triển của khoa học và công nghệ, giai cấp công nhân [...].",
        options: [
            "Giảm về số lượng và nâng cao về chất lượng",
            "Tăng về số lượng và nâng cao về chất lượng",
            "Giảm về số lượng và giảm về chất lượng",
            "Cả A, B, C đều sai"
        ],
        correct: 1
    },
    {
        id: 120,
        question: "Nền sản xuất đại công nghiệp và phương thức sản xuất tiên tiến đã rèn luyện cho giai cấp công nhân những phẩm chất đặc biệt về tính tổ chức, kỉ luật lao động, tinh thần hợp tác và […].",
        options: [
            "tâm lí lao động công nghiệp",
            "tác phong nông nghiệp",
            "tâm lí lao động nông nghiệp",
            "tâm lí lao động tự do"
        ],
        correct: 0
    },
    {
        id: 121,
        question: "Lực lượng sản xuất dựa trên chế độ chiếm hữu tư nhân tư bản chủ nghĩa về tư liệu sản xuất chủ yếu là mâu thuẫn cơ bản của phương thức sản xuất nào dưới đây?",
        options: [
            "Chiếm hữu nô lệ",
            "Phong kiến",
            "Tư bản chủ nghĩa",
            "Cộng sản chủ nghĩa"
        ],
        correct: 0
    },
    {
        id: 122,
        question: "Biểu hiện về mặt xã hội của mâu thuẫn cơ bản trong phương thức sản xuất tư bản chủ nghĩa là mâu thuẫn giữa […].",
        options: [
            "tư bản và lao động",
            "giai cấp công nhân và giai cấp tư sản",
            "lực lượng sản xuất và quan hệ sản xuất",
            "các tập đoàn tư bản"
        ],
        correct: 1
    },
    {
        id: 123,
        question: "Chọn phương án đúng nhất: Trong quan hệ sản xuất tư bản chủ nghĩa, giai cấp công nhân là giai cấp […].",
        options: [
            "Không có tư liệu sản xuất",
            "Phải bán sức lao động",
            "Bị bóc lột giá trị thặng dư",
            "Cả A, B, C"
        ],
        correct: 3
    },
    {
        id: 124,
        question: "Chọn phương án đúng nhất: Trong chế độ tư bản chủ nghĩa, giai cấp công nhân là giai cấp bị giai cấp tư sản bóc lột […].",
        options: [
            "Trực tiếp",
            "Gián tiếp",
            "Trực tiếp và gián tiếp",
            "Cả A, B, C đều sai"
        ],
        correct: 0
    },
    {
        id: 125,
        question: "Trong quan hệ sản xuất tư bản chủ nghĩa, giai cấp công nhân là giai cấp […].",
        options: [
            "Không có tư liệu sản xuất, phải bán sức lao động cho giai cấp chủ nô và bị bóc lột",
            "Không có tư liệu sản xuất, phải bán sức lao động cho giai cấp địa chủ và bị bóc lột",
            "Không có tư liệu sản xuất, phải bán sức lao động cho giai cấp tư sản và bị bóc lột",
            "Cả A, B, C đều sai"
        ],
        correct: 2
    },
    {
        id: 126,
        question: "Trong chế độ tư bản chủ nghĩa, giai cấp công nhân là những người sản xuất ra […].",
        options: [
            "Một phần của cải cho chế độ tư bản chủ nghĩa",
            "Đại đa số của cải cho chế độ tư bản chủ nghĩa",
            "Toàn bộ của cải cho mọi chế độ xã hội",
            "Cả A, B, C"
        ],
        correct: 1
    },
    {
        id: 127,
        question: "Tinh thần cách mạng triệt để nhất trong các lực lượng dưới đây thuộc về giai cấp nào?",
        options: [
            "Tinh thần cách mạng nửa vời",
            "Tinh thần cách mạng triệt để nhất",
            "Tinh thần cách mạng cải lương",
            "Cả A, B, C đều sai"
        ],
        correct: 1
    },
    {
        id: 128,
        question: "Một trong những đặc điểm chính trị - xã hội của giai cấp công nhân là giai cấp có […].",
        options: [
            "Ý thức tổ chức kỷ luật kém",
            "Ý thức tổ chức kỷ luật trung bình",
            "Ý thức tổ chức kỷ luật cao",
            "Cả A, B, C đều sai"
        ],
        correct: 2
    },
    {
        id: 129,
        question: "Mâu thuẫn giữa giai cấp công nhân và giai cấp tư sản là mâu thuẫn […].",
        options: [
            "không đối kháng về lợi ích",
            "về lợi ích không cơ bản",
            "đối kháng gián tiếp về lợi ích",
            "đối kháng trực tiếp về lợi ích"
        ],
        correct: 3
    },
    {
        id: 130,
        question: "Giữa giai cấp công nhân và giai cấp nông dân có […].",
        options: [
            "toàn bộ lợi ích thống nhất với nhau",
            "nhiều lợi ích cơ bản thống nhất với nhau",
            "lợi ích hoàn toàn khác nhau",
            "lợi ích hoàn toàn đối lập nhau"
        ],
        correct: 1
    },
    {
        id: 131,
        question: "Trong chế độ tư bản chủ nghĩa, giai cấp công nhân là giai cấp bị giai cấp tư sản bóc lột […].",
        options: [
            "Giá trị thặng dư",
            "Giá trị sử dụng",
            "Giá trị trao đổi",
            "Cả A, B, C"
        ],
        correct: 0
    },
    {
        id: 132,
        question: "Giai cấp công nhân là giai cấp có mâu thuẫn đối kháng với […].",
        options: [
            "Giai cấp nông dân",
            "Giai cấp địa chủ",
            "Giai cấp tư sản",
            "Tầng lớp trí thức"
        ],
        correct: 2
    },
    {
        id: 133,
        question: "Một trong những nội dung sứ mệnh lịch sử của giai cấp công nhân là […].",
        options: [
            "Xóa bỏ chế độ tư bản chủ nghĩa",
            "Xóa bỏ chế độ phong kiến",
            "Xóa bỏ chế độ chiếm hữu nô lệ",
            "Xóa bỏ chế độ cộng sản chủ nghĩa"
        ],
        correct: 0
    },
    {
        id: 134,
        question: "Một trong những nội dung sứ mệnh lịch sử của giai cấp công nhân là […].",
        options: [
            "Xây dựng chế độ chiếm hữu nô lệ",
            "Xây dựng chế độ phong kiến",
            "Xây dựng chế độ tư bản chủ nghĩa",
            "Xây dựng xã hội xã hội chủ nghĩa và cộng sản chủ nghĩa"
        ],
        correct: 3
    },
    {
        id: 135,
        question: "Trong chế độ tư bản chủ nghĩa, có mấy điều kiện khách quan quy định sứ mệnh lịch sử của giai cấp công nhân?",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        correct: 1
    },
    {
        id: 136,
        question: "Quan điểm nào dưới đây không đúng về giai cấp công nhân?",
        options: [
            "Giai cấp công nhân là một tập đoàn xã hội ổn định, hình thành và phát triển cùng với quá trình phát triển của nền công nghiệp hiện đại",
            "Giai cấp công nhân là giai cấp không đại diện cho quan hệ sản xuất tiên tiến",
            "Giai cấp công nhân là lực lượng chủ yếu của tiến trình lịch sử quá độ từ chủ nghĩa tư bản lên chủ nghĩa xã hội",
            "Giai cấp công nhân là chủ thể của quá trình sản xuất vật chất hiện đại"
        ],
        correct: 1
    },
    {
        id: 137,
        question: "Phát biểu nào dưới đây không đúng về giai cấp công nhân?",
        options: [
            "Giai cấp công nhân là người làm thuê do không có tư liệu sản xuất, buộc phải bán sức lao động để sống và bị giai cấp tư sản bóc lột giá trị thặng dư",
            "Giai cấp công nhân là người làm thuê do không có tư liệu sản xuất, buộc phải bán sức lao động để sống, không bị giai cấp tư sản bóc lột giá trị thặng dư",
            "Lợi ích cơ bản của giai cấp công nhân đối lập với lợi ích cơ bản của giai cấp tư sản",
            "Giai cấp công nhân là giai cấp có sứ mệnh phủ định chế độ tư bản chủ nghĩa, xây dựng thành công chủ nghĩa xã hội và chủ nghĩa cộng sản trên toàn thế giới"
        ],
        correct: 1
    },
    {
        id: 138,
        question: "Một trong những điều kiện khách quan quy định sứ mệnh lịch sử của giai cấp công nhân trong chế độ tư bản chủ nghĩa là […].",
        options: [
            "Tư tưởng",
            "Chính trị",
            "Địa vị kinh tế - xã hội",
            "Văn hóa"
        ],
        correct: 2
    },
    {
        id: 139,
        question: "Một trong những điều kiện khách quan quy định sứ mệnh lịch sử của giai cấp công nhân trong chế độ tư bản chủ nghĩa là […].",
        options: [
            "Tư tưởng",
            "Đặc điểm chính trị - xã hội",
            "Địa vị kinh tế - xã hội",
            "Cả A, B, C đều sai"
        ],
        correct: 1
    },
    {
        id: 140,
        question: "Chọn phương án đúng nhất: Điều kiện khách quan quy định sứ mệnh lịch sử của giai cấp công nhân trong chế độ tư bản chủ nghĩa là […].",
        options: [
            "Giai cấp công nhân là con đẻ của nền đại công nghiệp",
            "Địa vị kinh tế - xã hội và đặc điểm chính trị - xã hội của giai cấp công nhân",
            "Sự phát triển của lực lượng sản xuất",
            "Cả A, B, C"
        ],
        correct: 0
    },
    {
        id: 141,
        question: "Chọn phương án đúng nhất: Trong chế độ tư bản chủ nghĩa, giai cấp công nhân là giai cấp tiên phong cách mạng vì họ là giai cấp […].",
        options: [
            "Đại biểu cho phương thức sản xuất tiên tiến",
            "Được trang bị lý luận khoa học cách mạng",
            "Luôn đi đầu trong mọi phong trào cách mạng",
            "Cả A, B, C"
        ],
        correct: 2
    },
    {
        id: 142,
        question: "Phát biểu nào dưới đây không phải là đặc điểm của giai cấp công nhân mang sứ mệnh lịch sử thế giới?",
        options: [
            "Giai cấp công nhân là giai cấp đại diện cho lực lượng sản xuất tiến bộ của thời đại",
            "Giai cấp công nhân là lực lượng đông đảo và tiên phong",
            "Giai cấp công nhân là lực lượng tiến bộ nhưng chỉ bảo vệ lợi ích cho giai cấp mình",
            "Giai cấp công nhân là lực lượng đại diện cho khuynh hướng tiến bộ của nhân loại"
        ],
        correct: 2
    },
    // Chương 2 - Task 2 (câu 51-100)
    {
        id: 143,
        question: "Nội dung nào dưới đây không phải là sứ mệnh lịch sử thế giới của giai cấp công nhân?",
        options: [
            "Giải phóng cho giai cấp công nhân và toàn thể nhân loại bị áp bức",
            "Xoá bỏ tận gốc chế độ người bóc lột người, xoá bỏ chủ nghĩa tư bản",
            "Xây dựng xã hội cộng sản chủ nghĩa văn minh",
            "Xoá bỏ tận gốc chế độ người bóc lột người, giải phóng cho giai cấp tư sản"
        ],
        correct: 3
    },
    {
        id: 144,
        question: "Mục tiêu nào dưới đây là mục tiêu lớn nhất mà giai cấp công nhân thực hiện?",
        options: [
            "Xoá bỏ tận gốc chế độ người bóc lột người",
            "Xoá bỏ tận gốc chế độ tư bản chủ nghĩa",
            "Xoá bỏ tận gốc chế độ phong kiến",
            "Xoá bỏ tận gốc chế độ nô lệ làm thuê"
        ],
        correct: 0
    },
    {
        id: 145,
        question: "Quan điểm nào sau đây phản ánh đúng về việc xoá bỏ hình thái kinh tế — xã hội tư bản chủ nghĩa?",
        options: [
            "Xoá bỏ cả quan hệ sản xuất bóc lột và lực lượng sản xuất trong chủ nghĩa tư bản",
            "Xoá bỏ quan hệ sản xuất bóc lột dựa trên chế độ chiếm hữu tư nhân tư bản chủ nghĩa về tư liệu sản xuất chủ yếu của giai cấp tư bản",
            "Xoá bỏ lực lượng sản xuất và kế thừa thành tựu tiến bộ về quan hệ sản xuất trong chủ nghĩa tư bản",
            "Xoá bỏ văn hoá và tư tưởng bóc lột trong chủ nghĩa tư bản"
        ],
        correct: 1
    },
    {
        id: 146,
        question: "Trong chế độ tư bản chủ nghĩa, giai cấp công nhân là giai cấp có tinh thần cách mạng triệt để nhất vì họ là giai cấp […].",
        options: [
            "Xóa bỏ tận gốc chế độ tư hữu về tư liệu sản xuất",
            "Xóa bỏ chế độ công hữu về tư liệu sản xuất",
            "Xóa bỏ mọi hình thức sở hữu về tư liệu sản xuất",
            "Cả A, B, C"
        ],
        correct: 0
    },
    {
        id: 147,
        question: "Chọn phương án đúng nhất: Trong chế độ tư bản chủ nghĩa, giai cấp công nhân có thể đoàn kết nội bộ giai cấp vì họ có chung […].",
        options: [
            "Địa vị kinh tế - xã hội",
            "Điều kiện làm việc",
            "Điều kiện sống",
            "Cả A, B, C"
        ],
        correct: 3
    },
    {
        id: 148,
        question: "Chọn phương án đúng nhất: Trong chế độ tư bản chủ nghĩa, giai cấp công nhân có thể đoàn kết với các giai cấp, tầng lớp lao động khác vì họ […].",
        options: [
            "Có chung lợi ích kinh tế",
            "Đều bị giai cấp tư sản bóc lột",
            "Có chung nguyện vọng được giải phóng",
            "Cả A, B, C"
        ],
        correct: 3
    },
    {
        id: 149,
        question: "Trong chế độ tư bản chủ nghĩa, giai cấp công nhân có bao nhiêu đặc điểm chính trị - xã hội?",
        options: [
            "4",
            "5",
            "6",
            "7"
        ],
        correct: 0
    },
    {
        id: 150,
        question: "Trong chủ nghĩa tư bản, mục tiêu của công nhân là xoá bỏ quan hệ sản xuất dựa trên chế độ […].",
        options: [
            "công hữu về tư liệu sản xuất chủ yếu",
            "sở hữu chung về tư liệu sản xuất chủ yếu",
            "sở hữu công cộng về tư liệu sản xuất chủ yếu",
            "sở hữu tư nhân tư bản chủ nghĩa về tư liệu sản xuất chủ yếu"
        ],
        correct: 3
    },
    {
        id: 151,
        question: "Muốn thực hiện sứ mệnh lịch sử thế giới của mình, giai cấp công nhân phải […].",
        options: [
            "lật đổ sự thống trị của giai cấp tư sản, giành chính quyền về tay giai cấp mình, thiết lập nhà nước chuyên chính vô sản, cải tạo xã hội cũ, xây dựng xã hội mới",
            "lật đổ sự thống trị của giai cấp vô sản, giành chính quyền về tay giai cấp mình, thiết lập nhà nước, cải tạo xã hội cũ, xây dựng xã hội mới",
            "lật đổ sự thống trị của giai cấp tiểu tư sản, giành chính quyền về tay giai cấp mình, cải tạo xã hội cũ, xây dựng xã hội mới",
            "lật đổ sự thống trị của bộ phận đại tư sản, giành chính quyền về tay giai cấp mình, cải tạo xã hội cũ, xây dựng xã hội mới"
        ],
        correct: 0
    },
    {
        id: 152,
        question: "Để thực hiện sứ mệnh lịch sử của mình, bước đầu tiên giai cấp công nhân phải làm là […].",
        options: [
            "giành chính quyền, thiết lập được nhà nước của giai cấp mình",
            "xoá bỏ sự bóc lột đem lại hạnh phúc, ấm no cho nhân dân",
            "cải tạo xã hội cũ, xây dựng thành công xã hội mới - xã hội cộng sản chủ nghĩa",
            "liên minh với nông dân, giải phóng cho loài người"
        ],
        correct: 0
    },
    {
        id: 153,
        question: "Xoá bỏ quan hệ sản xuất dựa trên chế độ chiếm hữu tư nhân tư bản về tư liệu sản xuất chủ yếu, xây dựng quan hệ sản xuất mới, phù hợp với tính chất xã hội hoá cao của lực lượng sản xuất, với chế độ công hữu về tư liệu sản xuất chủ yếu của xã hội là nhiệm vụ của giai cấp công nhân trên lĩnh vực […].",
        options: [
            "kinh tế",
            "văn hoá",
            "chính trị - xã hội",
            "tư tưởng"
        ],
        correct: 0
    },
    {
        id: 154,
        question: "Chủ thể chiếm hữu tư liệu sản xuất chủ yếu trong chế độ tư bản chủ nghĩa là […].",
        options: [
            "Giai cấp công nhân",
            "Giai cấp tư sản",
            "Giai cấp địa chủ",
            "Giai cấp nông dân"
        ],
        correct: 1
    },
    {
        id: 155,
        question: "Đại biểu cho lực lượng sản xuất tiên tiến trong chế độ tư bản chủ nghĩa là […].",
        options: [
            "Giai cấp nông dân",
            "Giai cấp tư sản",
            "Giai cấp công nhân",
            "Tầng lớp trí thức"
        ],
        correct: 2
    },
    {
        id: 156,
        question: "Đại biểu cho quan hệ sản xuất chiếm hữu tư nhân tư bản chủ nghĩa về tư liệu sản xuất trong chế độ tư bản chủ nghĩa là […].",
        options: [
            "Giai cấp công nhân",
            "Giai cấp nông dân",
            "Giai cấp tư sản",
            "Cả A, B, C"
        ],
        correct: 2
    },
    {
        id: 157,
        question: "Quy luật ra đời của Đảng cộng sản ở các nước tư bản chủ nghĩa phát triển là sự kết hợp […].",
        options: [
            "Chủ nghĩa Mác với phong trào công nhân",
            "Chủ nghĩa Mác với phong trào công nhân và phong trào yêu nước",
            "Chủ nghĩa Mác với phong trào công nhân và phong trào nông dân",
            "Cả A, B, C đều sai"
        ],
        correct: 0
    },
    {
        id: 158,
        question: "Tổ chức chính trị cao nhất để lãnh đạo giai cấp công nhân thực hiện sứ mệnh lịch sử là […].",
        options: [
            "Công đoàn",
            "Nghiệp đoàn",
            "Đảng cộng sản",
            "Cả A, B, C"
        ],
        correct: 2
    },
    {
        id: 159,
        question: "Phong trào đấu tranh của giai cấp công nhân chỉ trở thành phong trào chính trị khi có sự lãnh đạo của tổ chức nào?",
        options: [
            "Đảng cộng sản",
            "Công đoàn",
            "Nghiệp đoàn",
            "Cả A, B, C"
        ],
        correct: 0
    },
    {
        id: 160,
        question: "Thực hiện công nghiệp hoá, gắn liền công nghiệp hoá với hiện đại hoá, đẩy mạnh công nghiệp hoá gắn với phát triển kinh tế tri thức, bảo vệ tài nguyên, môi trường là nhiệm vụ của giai cấp công nhân trên lĩnh vực […].",
        options: [
            "kinh tế",
            "tư tưởng",
            "chính trị - xã hội",
            "văn hoá"
        ],
        correct: 0
    },
    {
        id: 161,
        question: "Lật đổ quyền thống trị của giai cấp tư sản, giành quyền lực về tay giai cấp công nhân và nhân dân lao động, thiết lập nhà nước mang bản chất giai cấp công nhân, xây dựng nền dân chủ xã hội chủ nghĩa, thực hiện quyền lực của nhân dân, quyền dân chủ và làm chủ xã hội của tuyệt đại đa số nhân dân lao động là nhiệm vụ của giai cấp công nhân trên lĩnh vực […].",
        options: [
            "chính trị - xã hội",
            "kinh tế",
            "văn hoá",
            "tư tưởng"
        ],
        correct: 0
    },
    {
        id: 162,
        question: "Sử dụng nhà nước của mình để cải tạo xã hội cũ và tổ chức xây dựng xã hội mới, phục vụ quyền và lợi ích của nhân dân lao động theo lí tưởng và mục tiêu của chủ nghĩa xã hội là nhiệm vụ của giai cấp công nhân trên lĩnh vực […].",
        options: [
            "kinh tế",
            "chính trị - xã hội",
            "văn hoá",
            "tư tưởng"
        ],
        correct: 1
    },
    {
        id: 163,
        question: "Chọn phương án đúng nhất: Trong chế độ tư bản chủ nghĩa, thông qua sự lãnh đạo của Đảng cộng sản, giai cấp công nhân […].",
        options: [
            "Nhận thức được vị trí, vai trò của mình trong xã hội",
            "Hiểu được con đường, biện pháp đấu tranh cách mạng",
            "Tập hợp được đông đảo quần chúng nhân dân lao động",
            "Cả A, B, C"
        ],
        correct: 3
    },
    {
        id: 164,
        question: "Chọn phương án đúng nhất: Trong mối quan hệ với giai cấp công nhân và nhân dân lao động, Đảng cộng sản là […].",
        options: [
            "Đội tiên phong chiến đấu",
            "Lãnh tụ chính trị",
            "Bộ tham mưu chiến đấu",
            "Cả A, B, C"
        ],
        correct: 3
    },
    {
        id: 165,
        question: "Chọn phương án đúng nhất: Trong mối quan hệ với Đảng cộng sản, giai cấp công nhân là […].",
        options: [
            "Cơ sở kinh tế của Đảng cộng sản",
            "Cơ sở xã hội của Đảng cộng sản",
            "Cơ sở văn hóa của Đảng cộng sản",
            "Cơ sở chính trị của Đảng cộng sản"
        ],
        correct: 1
    },
    {
        id: 166,
        question: "Xây dựng hệ giá trị mới: lao động; công bằng; dân chủ; bình đẳng và tự do là nhiệm vụ của giai cấp công nhân trên lĩnh vực […].",
        options: [
            "kinh tế",
            "chính trị",
            "xã hội",
            "văn hoá, tư tưởng"
        ],
        correct: 3
    },
    {
        id: 167,
        question: "Xây dựng và củng cố ý thức hệ tiên tiến của giai cấp công nhân, đấu tranh để khắc phục ý thức hệ tư sản và các tàn dư còn sót lại của các hệ tư tưởng cũ là nhiệm vụ của giai cấp công nhân trên lĩnh vực […].",
        options: [
            "kinh tế",
            "chính trị",
            "văn hoá, tư tưởng",
            "xã hội"
        ],
        correct: 2
    },
    {
        id: 168,
        question: "Tiếp thu có chọn lọc, trên tinh thần phê phán những tinh hoa giá trị, những thành tựu văn hoá tư tưởng của mọi thời đại, kể cả thời đại tư sản trong lịch sử văn hóa và văn minh của nhân loại là điều mà giai cấp công nhân cần chú ý khi thực hiện sứ mệnh của mình trong lĩnh vực nào dưới đây?",
        options: [
            "Kinh tế",
            "Chính trị",
            "Văn hoá, tư tưởng",
            "Xã hội"
        ],
        correct: 2
    },
    {
        id: 169,
        question: "Cải tạo cái cũ, lỗi thời, lạc hậu, xây dựng cái mới, tiến bộ trong lĩnh vực ý thức tư tưởng, trong tâm lí, lối sống và trong đời sống tinh thần xã hội là nhiệm vụ của giai cấp công nhân trong lĩnh vực […].",
        options: [
            "Tâm lí, ý thức",
            "Chính trị",
            "Văn hóa, tư tưởng",
            "Xã hội"
        ],
        correct: 2
    },
    {
        id: 170,
        question: "Xây dựng con người mới, đạo đức và lối sống mới xã hội chủ nghĩa là một trong những nhiệm vụ đặt ra đối với sứ mệnh lịch sử của giai cấp công nhân trong lĩnh vực nào dưới đây?",
        options: [
            "Tâm lý, ý thức",
            "Đạo đức",
            "Văn hoá, tư tưởng",
            "Xã hội"
        ],
        correct: 2
    },
    {
        id: 171,
        question: "Sứ mệnh lịch sử của giai cấp công nhân không phải là thay thế chế độ sở hữu tư nhân này bằng một chế độ sở hữu tư nhân khác mà là […].",
        options: [
            "xoá bỏ một phần chế độ tư hữu về tư liệu sản xuất chủ yếu",
            "xóa bỏ triệt để tư hữu về tư liệu sản xuất chủ yếu",
            "xoá bỏ hoàn toàn chế độ công hữu về tư liệu sản xuất chủ yếu",
            "xoá bỏ phần lớn chế độ tư hữu về tư liệu sản xuất chủ yếu"
        ],
        correct: 1
    },
    {
        id: 172,
        question: "Mục tiêu cao nhất trong việc thực hiện sứ mệnh lịch sử thế giới của giai cấp công nhân là […].",
        options: [
            "giải phóng dân tộc khỏi ách áp bức của chủ nghĩa thực dân",
            "giải phóng nông dân khỏi chế độ phong kiến",
            "giành chính quyền, thiết lập nhà nước mới",
            "giải phóng giai cấp công nhân và nhân dân lao động, giải phóng xã hội khỏi áp bức, bóc lột"
        ],
        correct: 2
    },
    {
        id: 173,
        question: "Chọn phương án đúng nhất: Trong mối quan hệ với Đảng cộng sản, giai cấp công nhân là nguồn bổ sung lực lượng cho […].",
        options: [
            "Đảng cộng sản",
            "Nhà nước xã hội chủ nghĩa",
            "Các tổ chức chính trị - xã hội",
            "Cả A, B, C đều sai"
        ],
        correct: 0
    },
    {
        id: 174,
        question: "Cách mạng xã hội chủ nghĩa là cuộc cách mạng nhằm […].",
        options: [
            "Thay chế độ chiếm hữu nô lệ bằng chế độ phong kiến",
            "Thay chế độ phong kiến bằng chế độ tư bản chủ nghĩa",
            "Thay chế độ tư bản chủ nghĩa bằng chế độ xã hội chủ nghĩa",
            "Cả A, B, C đều sai"
        ],
        correct: 2
    },
    {
        id: 175,
        question: "Theo quan điểm của chủ nghĩa Mác - Lênin, cách mạng xã hội chủ nghĩa được hiểu theo mấy nghĩa?",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        correct: 0
    },
    {
        id: 176,
        question: "Theo quan điểm của chủ nghĩa Mác - Lênin, cách mạng xã hội chủ nghĩa được hiểu theo nghĩa hẹp là cuộc cách mạng […].",
        options: [
            "Kinh tế",
            "Chính trị",
            "Văn hóa",
            "Cả A, B, C"
        ],
        correct: 1
    },
    {
        id: 177,
        question: "Chọn phương án đúng nhất: Theo quan điểm của chủ nghĩa Mác - Lênin, cách mạng xã hội chủ nghĩa được hiểu theo nghĩa rộng là cuộc cách mạng […].",
        options: [
            "Giành chính quyền nhà nước",
            "Cải tạo xã hội cũ",
            "Xây dựng chế độ xã hội chủ nghĩa và cộng sản chủ nghĩa",
            "Cả A, B, C"
        ],
        correct: 3
    },
    {
        id: 178,
        question: "“Cùng với sự phát triển của đại công nghiệp (...) giai cấp tư sản sản sinh ra người đào huyệt chôn chính nó. Sự sụp đổ của giai cấp tư sản và thắng lợi của giai cấp vô sản đều là tất yếu như nhau\" phản ánh nội dung nào dưới đây?",
        options: [
            "Khẳng định tính tất yếu khách quan quy định sứ mệnh lịch sử của giai cấp công nhân",
            "Khẳng định nguyện vọng được giải phóng mình của nhân dân lao động",
            "Nhấn mạnh vai trò của Đảng Cộng sản trong việc thực hiện sứ mệnh lịch sử thế giới của giai cấp công nhân",
            "Cả A, B, C đều sai"
        ],
        correct: 0
    },
    {
        id: 179,
        question: "Sứ mệnh lịch sử thế giới của giai cấp công nhân được quy định bởi […].",
        options: [
            "địa vị kinh tế, chính trị — xã hội của giai cấp công nhân",
            "nguyện vọng của giai cấp công nhân",
            "sự lãnh đạo của Đảng Cộng sản đối với giai cấp công nhân",
            "nguyện vọng của nhân dân lao động"
        ],
        correct: 0
    },
    {
        id: 180,
        question: "Giai cấp công nhân là sản phẩm của nền đại công nghiệp trong phương thức sản xuất tư bản chủ nghĩa, là chủ thể của quá trình sản xuất vật chất hiện đại, vì thế, giai cấp công nhân đại diện cho […].",
        options: [
            "phương thức sản xuất lỗi thời và lực lượng sản xuất hiện đại",
            "phương thức sản xuất tiên tiến và lực lượng sản xuất lạc hậu",
            "phương thức sản xuất tiên tiến và lực lượng sản xuất hiện đại",
            "phương thức sản xuất lỗi thời và lực lượng sản xuất lạc hậu"
        ],
        correct: 2
    },
    {
        id: 181,
        question: "Giai cấp công nhân là sản phẩm của nền đại công nghiệp trong phương thức sản xuất tư bản chủ nghĩa, là chủ thể của quá trình sản xuất vật chất hiện đại, vì thế, giai cấp công nhân là lực lượng […].",
        options: [
            "phá vỡ quan hệ sản xuất phong kiến, giành chính quyền về tay giai cấp mình",
            "phá vỡ quan hệ sản xuất xã hội chủ nghĩa, giành chính quyền về tay giai cấp mình",
            "phá vỡ quan hệ sản xuất tư bản chủ nghĩa, giành chính quyền cho giai cấp nông dân",
            "phá vỡ quan hệ sản xuất tư bản chủ nghĩa, giành chính quyền về tay giai cấp mình"
        ],
        correct: 3
    },
    {
        id: 182,
        question: "Tinh thần đoàn kết, ý thức tổ chức kỉ luật cao là nội dung thể hiện […].",
        options: [
            "đặc điểm chính trị - xã hội của giai cấp công nhân",
            "địa vị kinh tế — xã hội của giai cấp công nhân",
            "thói quen của giai cấp công nhân",
            "đặc điểm vốn có của con người nói chung"
        ],
        correct: 0
    },
    {
        id: 183,
        question: "Phát biểu nào dưới đây không đúng về điều kiện khách quan quy định sứ mệnh lịch sử thế giới của giai cấp công nhân?",
        options: [
            "Giai cấp công nhân đại diện cho lực lượng sản xuất hiện đại",
            "Giai cấp công nhân đại diện cho phương thức sản xuất tiên tiến",
            "Giai cấp công nhân là giai cấp đại biểu cho tương lai, cho xu thế đi lên của tiến trình phát triển lịch sử",
            "Giai cấp công nhân là giai cấp vô cùng nghèo khổ"
        ],
        correct: 3
    },
    {
        id: 184,
        question: "Hành động phá vỡ nhằm làm suy yếu chủ nghĩa tư bản được hiểu là phá vỡ […].",
        options: [
            "máy móc trong các nhà máy xí nghiệp của các nhà tư sản",
            "quan hệ sản xuất tư bản chủ nghĩa",
            "quan hệ giữa tư sản và các giai tầng khác trong xã hội tư bản chủ nghĩa",
            "chủ nghĩa tư bản độc quyền"
        ],
        correct: 1
    },
    {
        id: 185,
        question: "Giai cấp nông dân không thể là giai cấp có sứ mệnh lịch sử thế giới xoá bỏ chế độ tư bản chủ nghĩa, xây dựng chế độ xã hội mới - cộng sản chủ nghĩa bởi […].",
        options: [
            "họ không đại diện cho phương thức sản xuất tiên tiến",
            "họ có tư tưởng sở hữu lớn",
            "họ có số lượng không đông đảo",
            "họ có hệ tư tưởng riêng nhưng thiếu tinh thần đoàn kết"
        ],
        correct: 0
    },
    {
        id: 186,
        question: "Chọn phương án đúng nhất: Theo quan điểm của chủ nghĩa Mác - Lênin, mục tiêu chung của cách mạng xã hội chủ nghĩa là […].",
        options: [
            "Giải phóng giai cấp nông dân",
            "Giải phóng giai cấp công nhân",
            "Giải phóng dân tộc",
            "Giải phóng xã hội, giải phóng con người"
        ],
        correct: 3
    },
    {
        id: 187,
        question: "Theo quan điểm của chủ nghĩa Mác - Lênin, mục tiêu giai đoạn thứ nhất của cách mạng xã hội chủ nghĩa là […].",
        options: [
            "Giành chính quyền nhà nước",
            "Giải phóng xã hội",
            "Giải phóng con người",
            "Cả A, B, C"
        ],
        correct: 0
    },
    {
        id: 188,
        question: "Theo quan điểm của chủ nghĩa Mác - Lênin, mục tiêu giai đoạn thứ hai của cách mạng xã hội chủ nghĩa là […].",
        options: [
            "Lật đổ sự thống trị của giai cấp tư sản",
            "Giành chính quyền",
            "Tổ chức và xây dựng xã hội mới về mọi mặt",
            "Cả A, B, C đều sai"
        ],
        correct: 2
    },
    {
        id: 189,
        question: "Theo quan điểm của chủ nghĩa Mác - Lênin, nguyên nhân sâu xa của mọi cuộc cách mạng xã hội trong lịch sử là mâu thuẫn giữa […].",
        options: [
            "Giai cấp công nhân và giai cấp tư sản",
            "Giai cấp nông dân và giai cấp địa chủ",
            "Giai cấp nô lệ và giai cấp chủ nô",
            "Lực lượng sản xuất và quan hệ sản xuất"
        ],
        correct: 3
    },
    {
        id: 190,
        question: "Nội dung nào dưới đây không phải là đặc điểm chính trị - xã hội của giai cấp công nhân?",
        options: [
            "Tiên phong cách mạng và có tinh thần cách mạng triệt để nhất",
            "Có bản chất quốc tế",
            "Có ý thức, kỉ luật cao",
            "Đại diện cho lực lượng sản xuất hiện đại"
        ],
        correct: 3
    },
    {
        id: 191,
        question: "Nội dung nào dưới đây không phải là nguyên nhân của việc giai cấp công nhân có tính tổ chức kỉ luật cao?",
        options: [
            "Đặc thù môi trường làm việc là dây chuyền sản xuất công nghiệp",
            "Sự quản lí chặt chẽ của giai cấp tư sản",
            "Bản chất sẵn có của công nhân",
            "Yêu cầu của đấu tranh cách mạng"
        ],
        correct: 2
    },
    {
        id: 192,
        question: "Nội dung nào dưới đây không phải là điều kiện chủ quan quy định sứ mệnh lịch sử thế giới của giai cấp công nhân?",
        options: [
            "Giai cấp công nhân đại diện cho phương thức sản xuất tiên tiến",
            "Sự lớn mạnh về số lượng của giai cấp công nhân",
            "Sự ra đời của Đảng Cộng sản - đội tiên phong của giai cấp công nhân",
            "Giai cấp công nhân đã nhận thức được vai trò và trọng trách của giai cấp mình đối với lịch sử"
        ],
        correct: 0
    },
    // Chương 2 - Task 3 (câu 101-150)
    {
        id: 193,
        question: "Lực lượng ngày càng đông đảo, tỉ lệ và cơ cấu của giai cấp công nhân phù hợp với yêu cầu của sản xuất công nghiệp hiện đại và cơ cấu kinh tế là nội dung thể hiện sự phát triển của giai cấp công nhân về […].",
        options: [
            "số lượng",
            "chất lượng",
            "cơ cấu",
            "tổ chức"
        ],
        correct: 0
    },
    {
        id: 194,
        question: "Nguyên nhân của cách mạng xã hội chủ nghĩa là mâu thuẫn giữa […].",
        options: [
            "Lực lượng sản xuất mang tính chất tư nhân với quan hệ sản xuất mang tính chất xã hội",
            "Lực lượng sản xuất mang tính chất xã hội với quan hệ sản xuất mang tính chất xã hội",
            "Lực lượng sản xuất mang tính chất xã hội hóa cao với quan hệ sản xuất mang tính chất tư nhân tư bản chủ nghĩa về tư liệu sản xuất",
            "Cả A, B, C đều sai"
        ],
        correct: 2
    },
    {
        id: 195,
        question: "Chọn phương án đúng nhất: Lực lượng sản xuất dưới chủ nghĩa tư bản có tính chất […].",
        options: [
            "Xã hội hóa ngày càng cao",
            "Tư nhân hóa ngày càng cao",
            "Xã hội hóa và tư nhân hóa ngày càng cao",
            "Cả A, B, C đều sai"
        ],
        correct: 0
    },
    {
        id: 196,
        question: "Chọn phương án đúng nhất: Chế độ sở hữu về tư liệu sản xuất dưới chủ nghĩa tư bản là [...].",
        options: [
            "Công hữu",
            "Tư hữu",
            "Công hữu và tư hữu",
            "Cả A, B, C đều sai"
        ],
        correct: 1
    },
    {
        id: 197,
        question: "Chọn phương án đúng nhất: Biểu hiện về mặt xã hội của mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất trong chủ nghĩa tư bản là mâu thuẫn giữa […].",
        options: [
            "Giai cấp tư sản và tầng lớp trí thức",
            "Giai cấp công nhân và giai cấp tư sản",
            "Giai cấp công nhân và giai cấp nông dân",
            "Cả A, B, C đều sai"
        ],
        correct: 1
    },
    {
        id: 198,
        question: "Tự giác nhận thức được vai trò và trọng trách của giai cấp mình đối với lịch sử, năng lực, trình độ làm chủ khoa học kĩ thuật và công nghệ hiện đại là nội dung thể hiện sự phát triển của giai cấp công nhân về […].",
        options: [
            "số lượng",
            "chất lượng",
            "cơ cấu",
            "tổ chức"
        ],
        correct: 1
    },
    {
        id: 199,
        question: "Tổ chức nào dưới đây là đội tiên phong của giai cấp công nhân, đảm nhận vai trò lãnh đạo giai cấp công nhân và quần chúng nhân dân lao động tiến hành cuộc cách mạng nhằm xoá bỏ chế độ tư bản chủ nghĩa, chế độ người bóc lột người, xây dựng chế độ xã hội mới - cộng sản chủ nghĩa?",
        options: [
            "Nhà nước",
            "Mặt trận Tổ quốc",
            "Đảng Cộng sản",
            "Công đoàn"
        ],
        correct: 2
    },
    {
        id: 200,
        question: "Theo quan điểm của chủ nghĩa Mác — Lênin, quy luật chung, phổ biến cho sự ra đời của Đảng Cộng sản là sự kết hợp giữa chủ nghĩa Mác - Lênin với […].",
        options: [
            "phong trào công nhân",
            "phong trào yêu nước",
            "phong trào giải phóng dân tộc",
            "phong trào nông dân"
        ],
        correct: 0
    },
    {
        id: 201,
        question: "Ai tạo ra lợi ích cho giai cấp công nhân thông qua sự lãnh đạo của Đảng, làm cho Đảng mang bản chất giai cấp công nhân, trở thành đội tiên phong, bộ tham mưu chiến đấu của lực lượng này?",
        options: [
            "Giai cấp nông dân",
            "Giai cấp công nhân",
            "Đội ngũ trí thức",
            "Tầng lớp doanh nhân"
        ],
        correct: 1
    },
    {
        id: 202,
        question: "Biểu hiện của mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất trong chủ nghĩa tư bản trên lĩnh vực kinh tế là […].",
        options: [
            "Tính tổ chức, tính kế hoạch cao trong từng doanh nghiệp với tính vô tổ chức của sản xuất toàn xã hội tư bản",
            "Tính tập trung của nền kinh tế tư bản chủ nghĩa với tính vô tổ chức của từng doanh nghiệp",
            "Tính tổ chức, kế hoạch cao của nền sản xuất tư bản chủ nghĩa với tính vô tổ chức của các doanh nghiệp",
            "Cả A, B, C đều sai"
        ],
        correct: 0
    },
    {
        id: 203,
        question: "Chọn phương án đúng nhất: Theo quan điểm của chủ nghĩa Mác - Lênin, động lực của cách mạng xã hội chủ nghĩa là […].",
        options: [
            "Giai cấp nông dân và giai cấp tư sản",
            "Giai cấp công nhân và giai cấp tư sản",
            "Giai cấp công nhân và tầng lớp trí thức",
            "Giai cấp công nhân và giai cấp nông dân"
        ],
        correct: 3
    },
    {
        id: 204,
        question: "Tổ chức nào dưới đây là đại biểu trung thành cho lợi ích của giai cấp công nhân, của dân tộc và xã hội?",
        options: [
            "Công đoàn",
            "Đoàn Thanh niên",
            "Mặt trận Tổ quốc",
            "Đảng Cộng sản"
        ],
        correct: 3
    },
    {
        id: 205,
        question: "C. Mác và Ph. Ăngghen đã nhấn mạnh rằng: Giai cấp vô sản chỉ có thể hành động với tư cách là một giai cấp được khi giai cấp vô sản […].",
        options: [
            "liên minh được với giai cấp nông dân",
            "tự mình tổ chức thành một chính đảng độc lập của mình",
            "liên minh được với giai cấp vô sản ở các nước khác",
            "thành lập được tổ chức công đoàn ở các nhà máy xí nghiệp"
        ],
        correct: 1
    },
    {
        id: 206,
        question: "Điều kiện có ý nghĩa quyết định đối với việc hoàn thành sứ mệnh lịch sử của giai cấp công nhân là […].",
        options: [
            "phải có Đảng tiên phong lãnh đạo",
            "phải thực hiện liên minh giai cấp",
            "phải đoàn kết với giai cấp vô sản quốc tế",
            "phải có tổ chức đoàn thể trong mỗi nhà máy xí nghiệp"
        ],
        correct: 0
    },
    {
        id: 207,
        question: "Trong quá trình thực hiện sứ mệnh lịch sử thế giới của mình, liên minh giai cấp giữa giai cấp công nhân với giai cấp nông dân và các tầng lớp nhân dân lao động khác trong xã hội là một tất yếu, do […].",
        options: [
            "giai cấp nông dân lãnh đạo",
            "giai cấp công nhân lãnh đạo",
            "đội ngũ trí thức lãnh đạo",
            "tầng lớp doanh nhân lãnh đạo"
        ],
        correct: 1
    },
    {
        id: 208,
        question: "Trong chế độ tư bản chủ nghĩa, giai cấp công nhân là giai cấp bị giai cấp tư sản bóc lột […].",
        options: [
            "Giá trị thặng dư",
            "Giá trị sử dụng",
            "Giá trị trao đổi",
            "Giá trị"
        ],
        correct: 0
    },
    {
        id: 209,
        question: "Trong chế độ tư bản chủ nghĩa, giai cấp công nhân là giai cấp có mâu thuẫn đối kháng với […].",
        options: [
            "Giai cấp nông dân",
            "Giai cấp địa chủ",
            "Giai cấp tư sản",
            "Tầng lớp trí thức"
        ],
        correct: 2
    },
    {
        id: 210,
        question: "Điều kiện chủ quan có vai trò quyết định nhất trong việc thực hiện sứ mệnh lịch sử thế giới của giai cấp công nhân là […].",
        options: [
            "sự tăng nhanh về số lượng",
            "sự trưởng thành của giai cấp công nhân, đặc biệt là khi có Đảng tiên phong lãnh đạo",
            "giai cấp công nhân liên minh được với giai cấp nông dân",
            "sự phát triển cao về trình độ tay nghề"
        ],
        correct: 1
    },
    {
        id: 211,
        question: "Đảng Cộng sản là […].",
        options: [
            "tổ chức quản lí kinh tế - xã hội",
            "tổ chức chính trị cao nhất của giai cấp công nhân",
            "tổ chức chính trị cao nhất của toàn dân tộc",
            "tổ chức chính trị cao nhất của giai cấp nông dân"
        ],
        correct: 1
    },
    {
        id: 212,
        question: "Đảng Cộng sản Việt Nam ra đời là sự kết hợp giữa […].",
        options: [
            "chủ nghĩa Mác - Lênin với phong trào nông dân",
            "chủ nghĩa Mác - Lênin với phong trào công nhân",
            "chủ nghĩa Mác - Lênin với phong trào công nhân và phong trào yêu nước",
            "chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh với phong trào công nhân"
        ],
        correct: 2
    },
    {
        id: 213,
        question: "Giai cấp công nhân Việt Nam ra đời trong hoàn cảnh lịch sử nào?",
        options: [
            "Trong kháng chiến chống thực dân Pháp giai đoạn 1946 - 1954",
            "Trong kháng chiến chống Mỹ giai đoạn 1954 - 1975",
            "Trong thời kỳ quá độ lên chủ nghĩa xã hội",
            "Trong cuộc khai thác thuộc địa của Pháp cuối thế kỷ XIX, đầu thế kỷ XX"
        ],
        correct: 3
    },
    {
        id: 214,
        question: "Đảng Cộng sản Việt Nam ra đời là sản phẩm của sự kết hợp giữa chủ nghĩa Mác - Lênin với phong trào công nhân và yếu tố nào?",
        options: [
            "Tư tưởng đoàn kết cộng đồng",
            "Tư tưởng Hồ Chí Minh",
            "Phong trào nông dân",
            "Phong trào yêu nước"
        ],
        correct: 3
    },
    {
        id: 215,
        question: "Đối với Đảng Cộng sản, giai cấp công nhân là cơ sở xã hội và là […].",
        options: [
            "lực lượng lãnh đạo Đảng",
            "nguồn bổ sung lực lượng cho Đảng",
            "đồng minh vững chắc của Đảng",
            "lực lượng cổ vũ phong trào đấu tranh của Đảng"
        ],
        correct: 1
    },
    {
        id: 216,
        question: "Điền từ ngữ thích hợp vào chỗ trống: […] là cơ sở xã hội của Đảng Cộng sản, [...] là của Đảng cộng sản.",
        options: [
            "Giai cấp công nhân; lực lượng lãnh đạo",
            "Giai cấp công nhân; nguồn bổ sung lực lượng",
            "Giai cấp nông dân; đồng minh vững chắc",
            "Giai cấp nông dân; lực lượng cổ vũ phong trào đấu tranh"
        ],
        correct: 1
    },
    {
        id: 217,
        question: "Điền từ ngừ thích hợp vào chỗ trống: Đảng Cộng sản Việt Nam ra đời là sản phẩm của sự kết hợp giữa chủ nghĩa Mác — Lênin với phong trào công nhân và […].",
        options: [
            "chủ nghĩa yêu nước",
            "phong trào yêu nước",
            "truyền thống yêu nước",
            "lòng yêu nước"
        ],
        correct: 1
    },
    {
        id: 218,
        question: "Quan điểm nào sau đây không đúng về Đảng Cộng sản?",
        options: [
            "Đảng Cộng sản là nơi tập trung những người ưu tú nhất trong giai cấp công nhân",
            "Đảng cộng sản là nơi tập trung những người giác ngộ cao nhất lí luận của chủ nghĩa Mác - Lênin",
            "Đảng Cộng sản là nơi tập trung những quần chúng nhân dân ưu tú nhất",
            "Đảng Cộng sản là nơi tập trung những người tiên phong của giai cấp công nhân"
        ],
        correct: 2
    },
    {
        id: 219,
        question: "Cải cách, đổi mới để xây dựng chủ nghĩa xã hội ở các nước xã hội chủ nghĩa, nơi giai cấp công nhân thông qua đội tiên phong của mình là Đảng Cộng sản đang cầm quyền, đây là sứ mệnh của giai cấp công nhân hiện nay trong lĩnh vực nào dưới đây?",
        options: [
            "Kinh tế",
            "Chính trị - xã hội",
            "Văn hóa",
            "Tư tưởng"
        ],
        correct: 1
    },
    {
        id: 220,
        question: "Mục tiêu đấu tranh trực tiếp của giai cấp công nhân và phong trào công nhân ở các nước tư bản hiện nay là […].",
        options: [
            "chống bất công và bất bình đẳng xã hội",
            "giành chính quyền, thiết lập nhà nước",
            "xoá bỏ chế độ tư bản chủ nghĩa",
            "xây dựng chế độ xã hội mới công bằng, bình đẳng"
        ],
        correct: 0
    },
    {
        id: 221,
        question: "Mục tiêu đấu tranh lâu dài của giai cấp công nhân và phong trào công nhân ở các nước tư bản hiện nay là […].",
        options: [
            "chống bất công và bất bình đẳng xã hội",
            "nâng cao vị thế của giai cấp công nhân",
            "chống áp bức giai cấp, chống bóc lột giá trị thặng dư",
            "giành chính quyền về tay giai cấp công nhân và nhân dân lao động"
        ],
        correct: 3
    },
    {
        id: 222,
        question: "Trong quan hệ sản xuất tư bản chủ nghĩa, giai cấp công nhân là giai cấp […].",
        options: [
            "Không có tư liệu sản xuất, phải bán sức lao động cho giai cấp chủ nô và bị bóc lột",
            "Không có tư liệu sản xuất, phải bán sức lao động cho giai cấp địa chủ và bị bóc lột",
            "Không có tư liệu sản xuất, phải bán sức lao động cho giai cấp tư sản và bị bóc lột",
            "Cả A, B, C đều sai"
        ],
        correct: 2
    },
    {
        id: 223,
        question: "Trong chế độ tư bản chủ nghĩa, giai cấp công nhân là những người sản xuất ra […].",
        options: [
            "Một phần của cải cho chế độ tư bản chủ nghĩa",
            "Đại đa số của cải cho chế độ tư bản chủ nghĩa",
            "Toàn bộ của cải cho mọi chế độ xã hội",
            "Cả A, B, C"
        ],
        correct: 1
    },
    {
        id: 224,
        question: "Ở các nước xã hội chủ nghĩa, lãnh đạo thành công sự nghiệp đổi mới, giải quyết thành công các nhiệm vụ trong thời kì quá độ lên chủ nghĩa xã hội, thực hiện thành công sự nghiệp công nghiệp hoá, hiện đại hoá, đưa đất nước phát triển nhanh và bền vững là nhiệm vụ hiện nay của giai cấp công nhân trong lĩnh vực nào dưới đây?",
        options: [
            "Kinh tế",
            "Chính trị - xã hội",
            "Văn hoá",
            "Tư tưởng"
        ],
        correct: 1
    },
    {
        id: 225,
        question: "Đấu tranh để bảo vệ nền tảng tư tưởng của Đảng Cộng sản, giáo dục nhận thức và củng cố niềm tin khoa học đối với lí tưởng, mục tiêu của chủ nghĩa xã hội cho giai cấp công nhân và nhân dân lao động,... là nhiệm vụ hiện nay của giai cấp công nhân trong lĩnh vực nào dưới đây?",
        options: [
            "Kinh tế",
            "Chính trị - xã hội",
            "Văn hoá, tư tưởng",
            "Nhận thức"
        ],
        correct: 2
    },
    {
        id: 226,
        question: "Cũng giống như thế kỉ XIX, ở các nước tư bản chủ nghĩa hiện nay, công nhân vẫn bị giai cấp tư sản và chủ nghĩa tư bản […].",
        options: [
            "bóc lột giá trị thặng dư",
            "bắt lao động trong điều kiện vô cùng khắc nghiệt",
            "trả lương không đủ để chi trả cho nhu cầu tối thiểu của cuộc sống hằng ngày",
            "ép buộc lao động 14 tiếng, thậm chí 16 tiếng/ngày"
        ],
        correct: 0
    },
    {
        id: 227,
        question: "Nội dung nào dưới đây không đúng khi nói về sự tương đồng giữa công nhân hiện nay và công nhân thế kỉ XIX?",
        options: [
            "Giai cấp công nhân vẫn là lực lượng sản xuất hàng đầu trong xã hội hiện đại",
            "Ở các nước tư bản, giai cấp công nhân vẫn bị giai cấp tư sản và chủ nghĩa tư bản bóc lột về giá trị thặng dư",
            "Ở các nước tư bản, giai cấp công nhân hiện nay đã được trung lưu hóa nên họ không còn sứ mệnh lịch sử thế giới nữa",
            "Phong trào cộng sản và công nhân ở nhiều nước vẫn là lực lượng đi đầu trong cuộc đấu tranh vì hoà bình, hợp tác và phát triển"
        ],
        correct: 2
    },
    {
        id: 228,
        question: "Xét về địa vị kinh tế - xã hội, vì sao giai cấp công nhân là giai cấp tiên tiến nhất?",
        options: [
            "Giai cấp công nhân bị giai cấp tư sản áp bức, bóc lột nặng nề",
            "Giai cấp công nhân có số lượng đông đảo trong dân cư và lực lượng lao động xã hội",
            "Giai cấp công nhân đại biểu cho lực lượng sản xuất hiện đại, cho phương thức sản xuất tiên tiến",
            "Giai cấp công nhân có hệ tư tưởng độc lập, tiên tiến và có đảng cộng sản lãnh đạo"
        ],
        correct: 2
    },
    {
        id: 229,
        question: "Giai cấp nào đại biểu cho quan hệ sản xuất tư nhân tư bản chủ nghĩa?",
        options: [
            "Giai cấp công nhân",
            "Giai cấp tư sản",
            "Giai cấp nông dân",
            "Tầng lớp trí thức"
        ],
        correct: 1
    },
    {
        id: 230,
        question: "Gắn liền với cách mạng khoa học và công nghệ hiện đại, với sự phát triển kinh tế tri thức, công nhân hiện đại có xu hướng […].",
        options: [
            "bần cùng hoá",
            "tha hoá",
            "trí tuệ hoá",
            "nông dân hoá"
        ],
        correct: 2
    },
    {
        id: 231,
        question: "Ngày nay, công nhân được đào tạo chuẩn mực và thường xuyên được đào tạo lại, đáp ứng sự thay đổi nhanh chóng của công nghệ trong nền sản xuất, điều này đã làm xuất hiện xu hướng […].",
        options: [
            "bần cùng hoá giai cấp công nhân",
            "tha hoá giai cấp công nhân",
            "trí tuệ hoá giai cấp công nhân",
            "nông dân hoá giai cấp công nhân"
        ],
        correct: 2
    },
    {
        id: 232,
        question: "Ở các nước xã hội chủ nghĩa, giai cấp công nhân đã trở thành […].",
        options: [
            "giai cấp có vai trò tương đối quan trọng đối với sự phát triển của xã hội",
            "giai cấp lãnh đạo thông qua tổ chức tiên phong của nó là Đảng Cộng sản",
            "giai cấp có vai trò ngày càng mờ nhạt đối với sự phát triển của xã hội",
            "giai cấp không còn vai trò lãnh đạo cách mạng"
        ],
        correct: 1
    },
    {
        id: 233,
        question: "Đại biểu cho giai cấp công nhân ngày nay là đội ngũ…",
        options: [
            "công nhân nông nghiệp",
            "công nhân làm việc trong các công xưởng thủ công",
            "công nhân tri thức",
            "công nhân cơ khí"
        ],
        correct: 2
    },
    {
        id: 234,
        question: "Mục tiêu cao nhất trong sự nghiệp cách mạng của giai cấp công nhân là gì?",
        options: [
            "Giành chính quyền về tay giai cấp công nhân và nhân dân lao động, trên cơ sở lật đổ chính quyền của giai cấp bóc lột",
            "Đánh đổ chế độ tư bản, xóa bỏ áp bức, bóc lột, bất công trong xã hội tư bản chủ nghĩa",
            "Giải phóng giai cấp công nhân và nhân dân lao động, đồng thời giải phóng xã hội thoát khỏi áp bức, bóc lột, bất công, xây dựng chủ nghĩa xã hội, chủ nghĩa cộng sản",
            "Giành quyền làm chủ tư liệu sản xuất về tay giai cấp công nhân và nhân dân lao động"
        ],
        correct: 2
    },
    {
        id: 235,
        question: "Hoàn thành luận điểm sau: Đảng cộng sản ra đời là sản phẩm của sự kết hợp giữa chủ nghĩa Mác với (...).",
        options: [
            "Phong trào công nhân",
            "Phong trào nông dân",
            "Truyền thống yêu nước",
            "Truyền thống dân tộc"
        ],
        correct: 0
    },
    {
        id: 236,
        question: "Chọn phương án đúng nhất: Điều kiện khách quan quy định sứ mệnh lịch sử của giai cấp công nhân trong chế độ tư bản chủ nghĩa là…",
        options: [
            "Do chủ nghĩa Mác quy định",
            "Địa vị kinh tế - xã hội và đặc điểm chính trị - xã hội của giai cấp công nhân",
            "Sự phát triển của lực lượng sản xuất",
            "Cả A, B, C"
        ],
        correct: 1
    },
    {
        id: 237,
        question: "Xét về địa vị chính trị - xã hội, trong chế độ tư bản chủ nghĩa, giai cấp công nhân là giai cấp tiên phong cách mạng vì họ là giai cấp…",
        options: [
            "Có Đảng cộng sản cách mạng",
            "Có vũ khí lý luận đó là chủ nghĩa Mác",
            "Luôn đi đầu trong mọi phong trào cách mạng",
            "Cả A, B, C"
        ],
        correct: 3
    },
    {
        id: 238,
        question: "Hiện nay ở các nước tư bản, một bộ phận công nhân đã tham gia sở hữu một lượng tư liệu sản xuất của xã hội thông qua chế độ cổ phần hoá, từ đó làm xuất hiện xu hướng…",
        options: [
            "bần cùng hoá giai cấp công nhân",
            "trí tuệ hoá giai cấp công nhân",
            "hiện đại hoá giai cấp công nhân",
            "trung lưu hoá giai cấp công nhân"
        ],
        correct: 3
    },
    {
        id: 239,
        question: "Sứ mệnh lịch sử của giai cấp công nhân là gì?",
        options: [
            "Ủng hộ nhân dân lao động xóa bỏ chủ nghĩa tư bản, xây dựng chủ nghĩa xã hội",
            "Ủng hộ giai cấp tư sản xóa bỏ chế độ phong kiến, xây dựng chế độ tư bản chủ nghĩa",
            "Lãnh đạo nhân dân lao động xóa bỏ chế độ chiếm hữu nô lệ, xây dựng chế độ phong kiến",
            "Lãnh đạo cuộc đấu tranh của nhân dân lao động xóa bỏ chế độ tư bản chủ nghĩa, xóa bỏ mọi chế độ áp bức bóc lột và xây dựng thành công chủ nghĩa xã hội và chủ nghĩa cộng sản"
        ],
        correct: 3
    },
    {
        id: 240,
        question: "Điều kiện khách quan quy định sứ mệnh lịch sử của giai cấp công nhân là gì?",
        options: [
            "Địa vị kinh tế - xã hội của giai cấp công nhân và đặc điểm chính trị - xã hội của giai cấp công nhân",
            "Tinh thần cách mạng triệt để của giai cấp công nhân và nhân dân lao động",
            "Tinh thần đoàn kết quốc tế của giai cấp công nhân và nhân dân lao động",
            "Tổ chức chính trị vững mạnh của giai cấp công nhân và sự đồng tình của nhân dân lao động"
        ],
        correct: 0
    },
    {
        id: 241,
        question: "Quan điểm nào dưới đây là đúng khi nói về số lượng của giai cấp công nhân hiện nay?",
        options: [
            "Số lượng lao động trực tiếp tăng, lao động gián tiếp giảm",
            "Số lượng lao động trực tiếp giảm, lao động gián tiếp tăng",
            "Số lượng lao động trực tiếp và gián tiếp cùng tăng",
            "Số lượng lao động trực tiếp và gián tiếp cùng giảm"
        ],
        correct: 1
    },
    {
        id: 242,
        question: "Những người công nhân Việt Nam đầu tiên ra đời tiếp xúc với…",
        options: [
            "tư sản Việt Nam",
            "thực dân Pháp",
            "bè lũ tay sai của thực dân Pháp",
            "địa chủ Việt Nam"
        ],
        correct: 1
    },
    // Chương 2 - Tiếp (câu 151-169)
    {
        id: 243,
        question: "Có người cho rằng: Ở các nước tư bản phát triển hiện nay, đời sống của một bộ phận công nhân đã được nâng cao, như vậy, giai cấp công nhân ở các nước này không còn bị bóc lột nữa. Bạn đồng ý với quan điểm nào sau đây?",
        options: [
            "Đúng, vì họ bắt đầu có sở hữu giống như các nhà tư bản",
            "Đúng, vì họ đã giàu và không còn là những người vô sản như trước",
            "Sai, vì cái mà họ được hưởng ít hơn các nhà tư bản",
            "Sai, vì họ vẫn phải bán sức lao động cho nhà tư bản để kiếm sống và bị bóc lột tinh vi hơn"
        ],
        correct: 3
    },
    {
        id: 244,
        question: "Quan điểm nào dưới đây không đúng về giai cấp công nhân hiện nay?",
        options: [
            "Làm việc trong môi trường kinh tế tri thức",
            "Đòi hỏi năng lực sáng tạo nhiều hơn",
            "Bị bóc lột ít hơn công nhân truyền thống",
            "Phải huy động trí tuệ vào sản xuất nhiều hơn là sức lao động cơ bắp"
        ],
        correct: 2
    },
    {
        id: 245,
        question: "Nội dung nào sau đây không phải là biện pháp điều hoà mâu thuẫn và xung đột xã hội của giai cấp tư sản?",
        options: [
            "Áp dụng phương thức quản lí mới",
            "Thực hiện chế độ cổ phần hoá",
            "Trợ cấp thất nghiệp cho công nhân",
            "Dừng bóc lột giá trị thặng dư"
        ],
        correct: 3
    },
    {
        id: 246,
        question: "Điền từ ngữ thích hợp vào chỗ trống: “Giai cấp công nhân Việt Nam là một lực lượng […] to lớn, đang phát triển, bao gồm những người lao động […] và […] làm công hưởng lương trong các loại hình sản xuất kinh doanh và dịch vụ công nghiệp hoặc sản xuất, kinh doanh, dịch vụ có tính chất công nghiệp”.",
        options: [
            "chính trị, chân tay, trí óc",
            "xã hội, chân tay, trí óc",
            "chính trị, cơ bắp, trí tuệ",
            "xã hội, cơ bắp, trí tuệ"
        ],
        correct: 1
    },
    {
        id: 247,
        question: "Giai cấp công nhân Việt Nam ra đời gắn liền với…",
        options: [
            "chính sách khai thác thuộc địa của thực dân Pháp",
            "chính sách ngu dân của thực dân Pháp",
            "chính sách chia để trị của thực dân Pháp",
            "chính sách khai hóa văn minh của thực dân Pháp"
        ],
        correct: 0
    },
    {
        id: 248,
        question: "Những người công nhân Việt Nam đầu tiên ra đời tiếp xúc với…",
        options: [
            "tư sản Việt Nam",
            "thực dân Pháp",
            "bè lũ tay sai của thực dân Pháp",
            "địa chủ Việt Nam"
        ],
        correct: 1
    },
    {
        id: 249,
        question: "Sinh ra và lớn lên ở một nước thuộc địa nửa phong kiến, dưới ách thống trị của thực dân Pháp, giai cấp công nhân Việt Nam…",
        options: [
            "phát triển nhanh",
            "có trình độ cao",
            "phát triển chậm",
            "có lực lượng vô cùng đông đảo"
        ],
        correct: 2
    },
    {
        id: 250,
        question: "Giai cấp, tầng lớp nào đại diện cho lực lượng sản xuất tiên tiến trong chủ nghĩa tư bản?",
        options: [
            "Giai cấp công nhân",
            "Giai cấp tư sản",
            "Giai cấp nông dân",
            "Tầng lớp trí thức"
        ],
        correct: 0
    },
    {
        id: 251,
        question: "Chọn cụm từ dưới đây để hoàn thành luận điểm của C. Mác và Ph. Ăngghen: “Trong tất cả các giai cấp hiện đang đối lập với giai cấp tư sản thì chỉ có (...) là giai cấp thực sự cách mạng”.",
        options: [
            "Giai cấp vô sản",
            "Tầng lớp tiểu tư sản",
            "Tầng lớp trí thức",
            "Giai cấp nông dân"
        ],
        correct: 0
    },
    {
        id: 252,
        question: "Đặc trưng chính trị ưu trội của công nhân Việt Nam không chỉ thể hiện ở ý thức giai cấp và lập trường chính trị mà còn thể hiện…",
        options: [
            "tinh thần giai cấp",
            "tinh thần dân tộc",
            "tinh thần lao động",
            "ý thức tổ chức kỉ luật"
        ],
        correct: 1
    },
    {
        id: 253,
        question: "Nguyên nhân nào dưới đây tạo thành động lực thúc đẩy đoàn kết giai cấp gắn liền với đoàn kết dân tộc trong mọi thời kì đấu tranh cách mạng ở Việt Nam?",
        options: [
            "Lợi ích dân tộc tách rời lợi ích giai cấp công nhân",
            "Lợi ích giai cấp công nhân cao hơn lợi ích dân tộc",
            "Lợi ích giai cấp công nhân và lợi ích dân tộc thống nhất với nhau",
            "Toàn thể dân tộc tập trung giải quyết vấn đề lợi ích của giai cấp công nhân"
        ],
        correct: 2
    },
    {
        id: 254,
        question: "Chọn cụm từ dưới đây để hoàn thành luận điểm sau: Trong chế độ tư bản chủ nghĩa, giai cấp công nhân có lợi ích cơ bản [...] với lợi ích của giai cấp tư sản.",
        options: [
            "Thống nhất",
            "Phù hợp",
            "Đối lập trực tiếp",
            "Đối lập gián tiếp"
        ],
        correct: 2
    },
    {
        id: 255,
        question: "Sự khác nhau căn bản giữa giai cấp công nhân ở các nước tư bản chủ nghĩa và xã hội chủ nghĩa biểu hiện ở điều gì?",
        options: [
            "Phương thức lao động, phương thức sản xuất",
            "Quan hệ sở hữu đối với tư liệu sản xuất chủ yếu của xã hội",
            "Nguồn gốc xuất thân của giai cấp công nhân",
            "Sản phẩm lao động của giai cấp công nhân"
        ],
        correct: 1
    },
    {
        id: 256,
        question: "Nội dung nào dưới đây là lí do quyết định giai cấp công nhân Việt Nam sớm trở thành lực lượng chính trị độc lập và giữ vai trò lãnh đạo cách mạng?",
        options: [
            "Có mối quan hệ gắn bó với nông dân",
            "Kế thừa truyền thống yêu nước bất khuất của dân tộc",
            "Hình thành được chính đảng thực sự cách mạng",
            "Có số lượng đông và đi đầu trong các cuộc đấu tranh"
        ],
        correct: 2
    },
    {
        id: 257,
        question: "Tham gia phát triển nền kinh tế thị trường hiện đại, định hướng xã hội chủ nghĩa, lấy khoa học - công nghệ làm động lực quan trọng, quyết định tăng năng suất lao động, chất lượng và hiệu quả là nội dung sứ mệnh của giai cấp công nhân Việt Nam hiện nay trên phương diện…",
        options: [
            "kinh tế",
            "chính trị - xã hội",
            "tư tưởng",
            "văn hoá"
        ],
        correct: 0
    },
    {
        id: 258,
        question: "Giữ vững bản chất giai cấp công nhân của Đảng, vai trò tiên phong gương mẫu của cán bộ đảng viên, tăng cường xây dựng, chỉnh đốn Đảng là những nội dung chính yếu, nổi bật, thể hiện sứ mệnh lịch sử giai cấp công nhân trên phương diện…",
        options: [
            "chính trị - xã hội",
            "kinh tế",
            "văn hoá",
            "tư tưởng"
        ],
        correct: 0
    },
    {
        id: 259,
        question: "Xây dựng xã hội, giải quyết hài hoà các quan hệ lợi ích, từng bước thực hiện tiến bộ và công bằng xã hội là nội dung thể hiện sứ mệnh lịch sử hiện nay của giai cấp công nhân Việt Nam trên phương diện […].",
        options: [
            "chính trị",
            "xã hội",
            "kinh tế",
            "văn hoá, tư tưởng"
        ],
        correct: 1
    },
    {
        id: 260,
        question: "Hoàn thành luận điểm của C. Mác và Ph. Ăngghen: “Tất cả các giai cấp khác đều suy tàn và tiêu vong cùng với sự phát triển của đại công nghiệp, còn giai cấp vô sản lại là [...] của bản thân nền đại công nghiệp”.",
        options: [
            "Sản phẩm",
            "Thành tựu",
            "Kết quả",
            "Chủ thể"
        ],
        correct: 0
    },
    {
        id: 261,
        question: "Trong xã hội tư bản chủ nghĩa, địa vị xã hội của giai cấp công nhân biểu hiện như thế nào?",
        options: [
            "Là giai cấp thống trị và chiếm đoạt giá trị thặng dư",
            "Giai cấp không có tư liệu sản xuất chủ yếu, phải bán sức lao động cho nhà tư bản và bị nhà tư bản bóc lột giá trị thặng dư",
            "Giai cấp có tư liệu sản xuất nên làm chủ giá trị thặng dư",
            "Giai cấp có lợi ích cơ bản thống nhất với lợi ích của giai cấp tư sản"
        ],
        correct: 1
    },
    // Chương 3 - 50 câu đầu
    {
        id: 262,
        question: "Nguyên nhân sâu xa dẫn đến sự thay thế hình thái kinh tế - xã hội tư bản chủ nghĩa bằng hình thái kinh tế - xã hội cộng sản chủ nghĩa là gì?",
        options: [
            "Mâu thuẫn giữa tư liệu lao động với đối tượng lao động trong nền sản xuất hàng hóa tư bản chủ nghĩa",
            "Mâu thuẫn giữa lực lượng sản xuất mang tính xã hội hóa ngày càng cao với quan hệ sản xuất tư bản chủ nghĩa dựa trên chế độ chiếm hữu tư nhân tư bản chủ nghĩa về tư liệu sản xuất chủ yếu",
            "Mâu thuẫn giữa phương thức sản xuất cộng sản chủ nghĩa với phương thức sản xuất tư bản chủ nghĩa",
            "Mâu thuẫn giữa các giai cấp, tầng lớp lao động trong xã hội"
        ],
        correct: 1
    },
    {
        id: 263,
        question: "Tiêu chí nào là quan trọng nhất để C. Mác phân chia hai giai đoạn phát triển của hình thái kinh tế - xã hội cộng sản chủ nghĩa?",
        options: [
            "Ý thức giác ngộ của nhân dân lao động",
            "Trình độ quản lý của Nhà nước",
            "Trình độ xã hội hóa của lực lượng sản xuất",
            "Trình độ dân trí của xã hội"
        ],
        correct: 2
    },
    {
        id: 264,
        question: "Trong các dự báo sau đây của C. Mác và Ph. Ăngghen, dự báo nào thuộc giai đoạn thấp của hình thái kinh tế - xã hội cộng sản chủ nghĩa?",
        options: [
            "Sự đối lập giữa lao động trí óc và lao động chân tay không còn",
            "Không còn sự phân chia giai cấp",
            "Mọi người làm hết năng lực, hưởng theo nhu cầu",
            "Mọi người làm theo năng lực, hưởng theo lao động, vẫn còn pháp quyền tư sản"
        ],
        correct: 3
    },
    {
        id: 265,
        question: "Trong các dự báo của C. Mác, dự báo nào thuộc giai đoạn cao của hình thái kinh tế - xã hội cộng sản chủ nghĩa?",
        options: [
            "Xã hội chưa thoát khỏi tàn tích của chủ nghĩa tư bản",
            "Xã hội vẫn còn sự phân chia giai cấp đối kháng, trong đó giai cấp công nhân là giai cấp thống trị xã hội",
            "Sự phát triển tự do của mỗi người là điều kiện cho sự phát triển tự do của mọi người",
            "Vẫn còn sự tồn tại kết cấu kinh tế của chủ nghĩa tư bản bên cạnh kết cấu kinh tế của chủ nghĩa xã hội"
        ],
        correct: 2
    },
    {
        id: 266,
        question: "Tiền đề vật chất cho sự ra đời của chủ nghĩa xã hội là gì?",
        options: [
            "Là cơ khí hóa nền sản xuất",
            "Là tự động hóa nền sản xuất",
            "Là tin học hóa nền sản xuất",
            "Là xã hội hóa lực lượng sản xuất"
        ],
        correct: 3
    },
    {
        id: 267,
        question: "Chỉ ra luận điểm chính xác nhất?",
        options: [
            "Xã hội xã hội chủ nghĩa thực hiện xóa bỏ chế độ tư hữu phong kiến",
            "Xã hội xã hội chủ nghĩa thực hiện xóa bỏ sản xuất hàng hóa",
            "Xã hội xã hội chủ nghĩa thực hiện xóa bỏ sản xuất tự cấp tự túc",
            "Xã hội xã hội chủ nghĩa thực hiện xóa bỏ chế độ tư hữu tư bản chủ nghĩa"
        ],
        correct: 3
    },
    {
        id: 268,
        question: "Chỉ ra luận điểm KHÔNG chính xác?",
        options: [
            "Giữa xã hội tư bản chủ nghĩa và xã hội xã hội chủ nghĩa là thời kỳ cải biến cách mạng lâu dài và phức tạp",
            "Nhà nước trong thời kỳ quá độ lên chủ nghĩa xã hội là nền chuyên chính cách mạng của giai cấp công nhân",
            "Trong thời kỳ quá độ có thể và cần thủ tiêu mọi tàn tích của chủ nghĩa tư bản",
            "Thời kỳ quá độ lên chủ nghĩa xã hội còn tồn tại nhiều tư tưởng - văn hóa cũ và mới đan xen, đấu tranh lẫn nhau"
        ],
        correct: 2
    },
    {
        id: 269,
        question: "Đặc điểm chủ yếu của thời kỳ quá độ lên chủ nghĩa xã hội là gì?",
        options: [
            "Chính quyền của giai cấp lao động được thành lập, nhân dân lao động hoàn toàn làm chủ xã hội",
            "Hệ tư tưởng chính trị của giai cấp công nhân là hệ tư tưởng duy nhất tồn tại trong xã hội. Giai cấp công nhân là chủ thể toàn bộ giá trị văn hóa tinh thần của xã hội",
            "Tồn tại đan xen và đấu tranh lẫn nhau giữa những nhân tố của xã hội mới và những tàn dư của xã hội cũ trên mọi lĩnh vực của đời sống xã hội",
            "Tồn tại kinh tế thị trường định hướng xã hội chủ nghĩa, ở đó, các chủ thể kinh tế đều chịu sự chi phối của quy luật thị trường"
        ],
        correct: 2
    },
    {
        id: 270,
        question: "Thời kỳ quá độ từ chủ nghĩa tư bản lên chủ nghĩa xã hội nằm trong hình thái kinh tế - xã hội nào?",
        options: [
            "Chiếm hữu nô lệ",
            "Phong kiến",
            "Tư bản chủ nghĩa",
            "Cộng sản chủ nghĩa"
        ],
        correct: 3
    },
    {
        id: 271,
        question: "Chọn phương án đúng nhất: Chủ nghĩa xã hội dựa trên chế độ sở hữu nào về tư liệu sản xuất chủ yếu?",
        options: [
            "Tư hữu",
            "Tập thể",
            "Hỗn hợp",
            "Công hữu"
        ],
        correct: 3
    },
    {
        id: 272,
        question: "Đặc điểm của thời kỳ quá độ lên chủ nghĩa xã hội trên lĩnh vực kinh tế là gì?",
        options: [
            "Còn tồn tại nhiều hệ tư tưởng khác nhau",
            "Còn tồn tại nhiều thành phần kinh tế khác nhau",
            "Còn tồn tại giai cấp đối kháng và đấu tranh giai cấp",
            "Còn tồn tại nhiều tàn dư của chế độ cũ để lại"
        ],
        correct: 1
    },
    {
        id: 273,
        question: "Đặc điểm của thời kỳ quá độ lên chủ nghĩa xã hội trên lĩnh vực chính trị là gì?",
        options: [
            "Còn tồn tại nhiều hình thức sở hữu khác nhau",
            "Còn tồn tại nhiều thành phần kinh tế khác nhau",
            "Còn tồn tại giai cấp đối kháng và đấu tranh giai cấp",
            "Còn tồn tại tàn dư tư tưởng và văn hóa của chế độ cũ để lại"
        ],
        correct: 2
    },
    {
        id: 274,
        question: "Thời kì quá độ lên CNXH ở Việt Nam còn những hình thức sở hữu nào về tư liệu sản xuất?",
        options: [
            "Tư nhân",
            "Tập thể, công hữu",
            "Hỗn hợp",
            "Cả A, B, C"
        ],
        correct: 3
    },
    {
        id: 275,
        question: "Cơ sở kinh tế của chủ nghĩa xã hội khác về bản chất so với chủ nghĩa tư bản là:",
        options: [
            "Chế độ sở hữu về tư liệu sản xuất",
            "Chế độ tư hữu về tư liệu sản xuất",
            "Chế độ công hữu về những tư liệu sản xuất chủ yếu",
            "Cả A, B, C đều sai"
        ],
        correct: 2
    },
    {
        id: 276,
        question: "Đặc điểm của thời kỳ quá độ lên chủ nghĩa xã hội trên lĩnh vực tư tưởng - văn hóa là gì?",
        options: [
            "Còn tồn tại nhiều hình thức sở hữu khác nhau",
            "Còn tồn tại nhiều thành phần kinh tế khác nhau",
            "Còn tồn tại giai cấp đối kháng và đấu tranh giai cấp",
            "Còn tồn tại nhiều tư tưởng - văn hóa cũ và mới đan xen, đấu tranh lẫn nhau"
        ],
        correct: 3
    },
    {
        id: 277,
        question: "Thực chất của thời kỳ quá độ lên chủ nghĩa xã hội là gì?",
        options: [
            "Là tiếp tục cuộc đấu tranh giai cấp giữa giai cấp công nhân, nhân dân lao động chống lại giai cấp tư sản và các thế lực đi ngược lại lợi ích của giai cấp công nhân và nhân dân lao động",
            "Là phát triển kinh tế hàng hóa nhiều thành phần theo định hướng xã hội chủ nghĩa",
            "Là duy trì nhiều hình thức phân phối khác nhau, trong đó phân phối theo lao động là cơ bản",
            "Là phát triển văn hóa mang tính xã hội chủ nghĩa"
        ],
        correct: 0
    },
    {
        id: 278,
        question: "Chọn cụm từ dưới đây để hoàn thành luận điểm của C. Mác: “Giữa xã hội tư bản chủ nghĩa và xã hội cộng sản chủ nghĩa là một thời kỳ cải biến cách mạng từ xã hội nọ sang xã hội kia. Thích ứng với thời kỳ ấy là một (...), và nhà nước của thời kỳ ấy không thể là cái gì khác hơn là nền chuyên chính cách mạng của giai cấp vô sản”.",
        options: [
            "Thời kỳ khó khăn, phức tạp và lâu dài",
            "Thời kỳ phát triển kinh tế thị trường",
            "Thời kỳ quá độ chính trị",
            "Thời kỳ cải biến nền văn hóa cũ"
        ],
        correct: 2
    },
    {
        id: 279,
        question: "Chỉ ra luận điểm KHÔNG chính xác?",
        options: [
            "Chủ nghĩa xã hội là một xã hội tốt đẹp, xóa bỏ mọi hình thức sở hữu",
            "Chủ nghĩa xã hội là giai đoạn đầu của hình thái kinh tế-xã hội cộng sản chủ nghĩa",
            "Thời kỳ quá độ là thời kỳ tồn tại đan xen những yếu tố của xã hội cũ và những nhân tố của xã hội mới",
            "Xã hội hóa lực lượng sản xuất là cơ sở vật chất chủ yếu cho sự ra đời của chủ nghĩa xã hội"
        ],
        correct: 0
    },
    {
        id: 280,
        question: "Đối với những nước chưa trải qua quá trình công nghiệp hóa tư bản chủ nghĩa, thời kỳ quá độ có thể phải kéo dài với nhiệm vụ trọng tâm là:",
        options: [
            "Xây dựng quan hệ sản xuất xã hội chủ nghĩa",
            "Xây dựng nền văn hóa xã hội chủ nghĩa",
            "Công nghiệp hóa tư bản chủ nghĩa",
            "Công nghiệp hóa xã hội chủ nghĩa"
        ],
        correct: 3
    },
    {
        id: 281,
        question: "Đặc điểm nổi bật của thời kỳ quá độ lên chủ nghĩa xã hội là:",
        options: [
            "Chỉ tồn tại những yếu tố của xã hội cũ",
            "Chỉ tồn tại những nhân tố mới của chủ nghĩa xã hội",
            "Những yếu tố của xã hội cũ đan xen với những nhân tố mới của chủ nghĩa xã hội",
            "Cả A, B, C đều sai"
        ],
        correct: 2
    },
    {
        id: 282,
        question: "Điền vào chỗ trống để hoàn thiện luận điểm của C. Mác và Ph. Ăngghen: “Đặc trưng của (...) không phải là xóa bỏ chế độ sở hữu nói chung, mà là xóa bỏ chế độ sở hữu tư sản”.",
        options: [
            "Chủ nghĩa xã hội",
            "Chủ nghĩa tư bản",
            "Chủ nghĩa cộng sản",
            "Thời kỳ quá độ lên chủ nghĩa xã hội"
        ],
        correct: 2
    },
    {
        id: 283,
        question: "Thực chất của con đường quá độ lên chủ nghĩa xã hội ở Việt Nam là gì?",
        options: [
            "Là bỏ qua cả những thành tựu và hạn chế của chủ nghĩa tư bản",
            "Là bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa",
            "Là bỏ qua việc phát triển sản xuất hàng hóa, xác lập nền kinh tế kế hoạch hóa, tập trung",
            "Là bỏ qua sự phát triển của nền đại công nghiệp tiến thẳng lên kinh tế tri thức"
        ],
        correct: 1
    },
    {
        id: 284,
        question: "Đặc điểm của con đường quá độ lên chủ nghĩa xã hội ở Việt Nam là gì?",
        options: [
            "Quá độ trực tiếp từ chủ nghĩa tư bản lên chủ nghĩa xã hội",
            "Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa",
            "Quá độ lên chủ nghĩa xã hội bỏ qua hình thái kinh tế - xã hội tư bản chủ nghĩa",
            "Quá độ lên chủ nghĩa xã hội từ chủ nghĩa tư bản phát triển ở mức độ trung bình"
        ],
        correct: 1
    },
    {
        id: 285,
        question: "Chọn phương án đúng nhất: Đặc điểm về mặt kinh tế trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam hiện nay là tồn tại:",
        options: [
            "Các thành phần kinh tế phong kiến",
            "Các thành phần kinh tế tư bản chủ nghĩa",
            "Các thành phần kinh tế xã hội chủ nghĩa",
            "Nền kinh tế nhiều thành phần"
        ],
        correct: 3
    },
    {
        id: 286,
        question: "Đặc điểm về mặt chính trị trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam là tồn tại:",
        options: [
            "Kết cấu xã hội - giai cấp đa dạng, phức tạp",
            "Kết cấu xã hội - giai cấp đơn nhất",
            "Kết cấu xã hội - giai cấp thuần nhất",
            "Chỉ còn giai cấp công nhân"
        ],
        correct: 0
    },
    {
        id: 287,
        question: "Trong Đại hội XIII, Đảng ta xác định đến năm 2045, Việt Nam sẽ là…",
        options: [
            "Là nước đang phát triển, có công nghiệp theo hướng hiện đại, vượt qua mức thu nhập trung bình thấp",
            "Là nước đang phát triển, có công nghiệp hiện đại, thu nhập trung bình cao.",
            "Là nước phát triển, có thu nhập cao",
            "Cả A, B, C đều sai"
        ],
        correct: 2
    },
    {
        id: 288,
        question: "Chọn câu trả lời đúng nhất: Cơ sở vật chất - kỹ thuật của chủ nghĩa xã hội là…",
        options: [
            "Nền sản xuất nông nghiệp có trình độ cao",
            "Nền sản xuất đại công nghiệp có trình độ cao",
            "Nền sản xuất thủ công nghiệp",
            "Có kiến trúc thượng tầng hiện đại"
        ],
        correct: 1
    },
    {
        id: 289,
        question: "Sự khác nhau giữa giai đoạn thấp và cao của hình thái kinh tế - xã hội cộng sản chủ nghĩa là gì?",
        options: [
            "Giai đoạn thấp còn sự phân chia giai cấp, giai đoạn cao còn một giai cấp",
            "Giai đoạn thấp làm theo nhu cầu, giai đoạn cao làm theo lao động",
            "Giai đoạn thấp làm theo năng lực, hưởng theo lao động, giai đoạn cao làm theo năng lực, hưởng theo nhu cầu",
            "Giai đoạn thấp thực hiện phân phối theo nhu cầu, giai đoạn cao thực hiện phân phối theo lao động"
        ],
        correct: 2
    },
    {
        id: 290,
        question: "C. Mác đã dựa vào nhân tố nào trong sự vận động của chủ nghĩa tư bản để kết luận rằng xã hội tư bản sẽ chuyển sang xã hội xã hội chủ nghĩa?",
        options: [
            "C. Mác đã phân tích những áp bức về tinh thần trong xã hội tư bản",
            "C. Mác đã phân tích sự phân hóa giàu nghèo trong xã hội tư bản",
            "C. Mác đã phân tích những tiến bộ trong chủ nghĩa tư bản",
            "C. Mác đã phân tích những quy luật kinh tế trong chủ nghĩa tư bản"
        ],
        correct: 2
    },
    {
        id: 291,
        question: "Theo quan điểm của chủ nghĩa Mác - Lênin, nguyên nhân sâu xa của mọi cuộc cách mạng xã hội trong lịch sử là mâu thuẫn giữa:",
        options: [
            "Giai cấp công nhân và giai cấp tư sản",
            "Giai cấp nông dân và giai cấp địa chủ",
            "Giai cấp nô lệ và giai cấp chủ nô",
            "Lực lượng sản xuất tiên tiến và quan hệ sản xuất lỗi thời, lạc hậu"
        ],
        correct: 3
    },
    {
        id: 292,
        question: "Cách hiểu nào dưới đây không đúng về chủ nghĩa xã hội?",
        options: [
            "Là một phong trào thực tiễn, phong trào đấu tranh của nhân dân lao động chống các giai cấp thống trị",
            "Là trào lưu tư tưởng, lí luận phản ánh lí tưởng giải phóng nhân dân lao động khỏi áp bức, bóc lột, bất công.",
            "Là một khoa học nghiên cứu về những quy luật chung nhất của tự nhiên, xã hội và tư duy.",
            "Là một chế độ xã hội hiện thực tốt đẹp, giai đoạn đầu của hình thái kinh tế - xã hội cộng sản chủ nghĩa."
        ],
        correct: 2
    },
    {
        id: 293,
        question: "Tác phẩm Phê phán cương lĩnh Gôta là của….",
        options: [
            "C. Mác",
            "Ph. Ăngghen",
            "C. Mác và Ph. Ăngghen",
            "V.I. Lênin"
        ],
        correct: 0
    },
    {
        id: 294,
        question: "Điền từ ngữ thích hợp vào chỗ trống: “Giữa xã hội tư bản chủ nghĩa và xã hội cộng sản chủ nghĩa là một thời kì cải biến cách mạng từ xã hội nọ sang xã hội kia. Thích ứng với thời kì ấy là một […] chính trị, và nhà nước của thời kì ấy không thể là cái gì khác hơn là nền chuyên chính cách mạng của giai cấp vô sản” (C. Mác).",
        options: [
            "thời kì quá độ",
            "giai đoạn",
            "hình thái",
            "thể chế"
        ],
        correct: 0
    },
    {
        id: 295,
        question: "Hoàn thiện luận điểm của V.I. Lênin: “Không thể nghi ngờ gì được rằng giữa chủ nghĩa tư bản và chủ nghĩa cộng sản, có một …. nhất định”.",
        options: [
            "thời kì cách mạng",
            "thời kì chuyển giao",
            "thời kì quá độ",
            "thời kì cải biến"
        ],
        correct: 2
    },
    {
        id: 296,
        question: "Từ thực tiễn nước Nga, V.I. Lênin cho rằng: Đối với những nước chưa có chủ nghĩa tư bản phát triển cao, cần phải có một thời kì quá độ…",
        options: [
            "khá lâu dài từ chủ nghĩa tư bản lên chủ nghĩa xã hội.",
            "khá nhanh chóng từ chủ nghĩa tư bản lên chủ nghĩa xã hội.",
            "rất nhanh từ chủ nghĩa tư bản lên chủ nghĩa xã hội.",
            "rất lâu dài và gian khổ từ chủ nghĩa tư bản lên chủ nghĩa xã hội."
        ],
        correct: 0
    },
    {
        id: 297,
        question: "Theo các nhà sáng lập chủ nghĩa xã hội khoa học, quá độ lên chủ nghĩa xã hội có hai hình thức là…",
        options: [
            "nhanh và chậm.",
            "đơn giản và phức tạp.",
            "trực tiếp và gián tiếp.",
            "sớm và muộn."
        ],
        correct: 2
    },
    {
        id: 298,
        question: "V.I.Lênin viết: “Với sự giúp đỡ của giai cấp vô sản các nước tiên tiến, các nước lạc hậu có thể tiến tới chế độ Xô viết, và qua những giai đoạn phát triển nhất định, tiến tới chủ nghĩa cộng sản, không phải trải qua…. phát triển tư bản chủ nghĩa”.",
        options: [
            "chế độ",
            "giai đoạn",
            "quá trình",
            "hình thức"
        ],
        correct: 1
    },
    {
        id: 299,
        question: "Nội dung nào dưới đây không phải là điều kiện dẫn tới sự ra đời của chủ nghĩa xã hội?",
        options: [
            "Sự phát triển của lực lượng sản xuất",
            "Sự trưởng thành của giai cấp công nhân",
            "Quan hệ sản xuất tư bản chủ nghĩa trở nên lỗi thời",
            "Mong muốn chủ quan của giai cấp công nhân"
        ],
        correct: 3
    },
    {
        id: 300,
        question: "Giải phóng giai cấp, giải phóng dân tộc, giải phóng xã hội, giải phóng con người, tạo điều kiện để con người phát triển toàn diện là đặc trưng của…",
        options: [
            "chủ nghĩa xã hội",
            "chủ nghĩa tư bản",
            "xã hội phong kiến",
            "xã hội chiếm hữu nô lệ"
        ],
        correct: 0
    },
    {
        id: 301,
        question: "Đặc trưng nào dưới đây thể hiện sự khác biệt về chất giữa chủ nghĩa xã hội với các chế độ xã hội khác?",
        options: [
            "Có quan hệ sản xuất phù hợp với lực lượng sản xuất.",
            "Là chế độ giải phóng giai cấp, giải phóng dân tộc, giải phóng xã hội, giải phóng con người.",
            "Có nền văn hoá phát triển cao, kế thừa và phát huy những giá trị của văn hoá dân tộc và tinh hoa văn hoá nhân loại.",
            "Bảo đảm, đoàn kết giữa các dân tộc."
        ],
        correct: 1
    },
    {
        id: 302,
        question: "Nội dung nào dưới đây là đặc trưng về phương diện kinh tế của chủ nghĩa xã hội?",
        options: [
            "Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu sản xuất chủ yếu.",
            "Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu sản xuất.",
            "Phát triển lực lượng sản xuất, đẩy mạnh công nghiệp hoá, hiện đại hoá.",
            "Xác lập chế độ công hữu về tư liệu sản xuất, tổ chức lao động theo trình độ cao hơn."
        ],
        correct: 0
    },
    {
        id: 303,
        question: "Khi phân tích về thời kì quá độ lên chủ nghĩa xã hội, người đầu tiên đặt vấn đề phải học tập các kinh nghiệm tổ chức, quản lí kinh tế của chủ nghĩa tư bản để cải tạo nền kinh tế tiểu nông lạc hậu là …",
        options: [
            "C. Mác.",
            "Ph. Ăngghen.",
            "V.I. Lênin.",
            "Hồ Chí Minh."
        ],
        correct: 2
    },
    {
        id: 304,
        question: "Ai là người đưa ra quan điểm: “Trong một nước tiểu nông, trước hết các đồng chí phải bắc những chiếc cầu nhỏ vững chắc, đi xuyên qua chủ nghĩa tư bản nhà nước, tiến lên chủ nghĩa xã hội”?",
        options: [
            "C. Mác.",
            "Ph. Ăngghen.",
            "V.I. Lênin.",
            "Hồ Chí Minh."
        ],
        correct: 2
    },
    {
        id: 305,
        question: "Ai cho rằng: “Dùng cả hai tay mà lấy những cái tốt của nước ngoài: Chính quyền Xô viết + trật tự ở đường sắt Phổ + kĩ thuật và cách tổ chức các tơ-rớt ở Mỹ + ngành giáo dục quốc dân Mỹ etc. etc.++ = (tổng số) = chủ nghĩa xã hội”?",
        options: [
            "C. Mác.",
            "Ph. Ăngghen.",
            "V.I. Lênin.",
            "Hồ Chí Minh."
        ],
        correct: 2
    },
    {
        id: 306,
        question: "Trong chế độ xã hội chủ nghĩa, nhà nước mang bản chất của giai cấp, tầng lớp nào dưới đây?",
        options: [
            "Giai cấp công nhân.",
            "Nhân dân lao động.",
            "Tầng lớp trí thức.",
            "Giai cấp tư sản."
        ],
        correct: 0
    },
    {
        id: 307,
        question: "Nhà nước kiểu mới thực hiện dân chủ cho tuyệt đại đa số nhân dân và trấn áp bọn bóc lột, bọn áp bức nhân dân bằng vũ lực là…",
        options: [
            "nhà nước chiếm hữu nô lệ.",
            "nhà nước phong kiến,",
            "nhà nước tư sản.",
            "nhà nước vô sản."
        ],
        correct: 3
    },
    {
        id: 308,
        question: "“Người ta chỉ có thể trở thành người cộng sản khi biết làm giàu trí óc của mình bằng sự hiểu biết tất cả những kho tàng tri thức mà nhân loại đã tạo ra” là câu nói của…",
        options: [
            "C. Mác.",
            "Ph. Ăngghen.",
            "V.I. Lênin.",
            "Hồ Chí Minh."
        ],
        correct: 2
    },
    {
        id: 309,
        question: "Người đầu tiên đưa chủ nghĩa xã hội từ lí thuyết thành thực tiễn sinh động là…",
        options: [
            "C. Mác.",
            "V.I. Lênin.",
            "I.V. Stalin.",
            "Hồ Chí Minh."
        ],
        correct: 1
    },
    {
        id: 310,
        question: "Ai là người đưa ra tư tưởng độc lập dân tộc gắn liền với chủ nghĩa xã hội?",
        options: [
            "V.I. Lênin.",
            "Hồ Chí Minh.",
            "Đặng Tiểu Bình.",
            "Phạm Văn Đồng."
        ],
        correct: 1
    },
    {
        id: 311,
        question: "Câu nói: “Chủ nghĩa xã hội hay là chết” là của…",
        options: [
            "V.I. Lênin.",
            "Fidel Castro.",
            "Hồ Chí Minh.",
            "Đặng Tiểu Bình."
        ],
        correct: 1
    },
    // Chương 3 - Tiếp (câu 51-80)
    {
        id: 312,
        question: "C.Mác: “Đối với chúng ta, chủ nghĩa cộng sản không phải là một…. cần phải sáng tạo ra, không phải là một…. mà hiện thực phải khuôn theo. Chúng ta gọi chủ nghĩa cộng sản là một phong trào… nó xoá bỏ trạng thái hiện nay”.",
        options: [
            "lý tưởng, trạng thái, hiện thực",
            "trạng thái, lý tưởng, hiện thực",
            "trạng thái, hiện thực, lý tưởng",
            "hiện thực, lý tưởng, trạng thái"
        ],
        correct: 1
    },
    {
        id: 313,
        question: "Điền từ thích hợp vào chỗ trống: “Vậy thì danh từ ……. có nghĩa là gì? Vận dụng vào kinh tế, có phải nó có nghĩa là trong chế độ hiện nay có những thành phần, những bộ phận, những mảnh của cả chủ nghĩa tư bản lẫn chủ nghĩa xã hội? Bất cứ ai cũng đều thừa nhận là có” (V.I. Lênin).",
        options: [
            "quá độ",
            "nhảy vọt",
            "phát triển",
            "đan xen"
        ],
        correct: 3
    },
    {
        id: 314,
        question: "Nội dung nào dưới đây là đặc điểm nổi bật của thời kì quá độ lên chủ nghĩa xã hội?",
        options: [
            "Sự đan xen vừa thống nhất vừa đấu tranh giữa những yếu tố của xã hội cũ và những nhân tố mới của chủ nghĩa xã hội.",
            "Sự xác lập vai trò thống trị của giai cấp công nhân thông qua đội tiên phong là Đảng Cộng sản.",
            "Xây dựng thành công chủ nghĩa xã hội.",
            "Tiến hành công nghiệp hoá, hiện đại hoá đất nước, xây dựng cơ sở vật chất - kĩ thuật cho chủ nghĩa xã hội."
        ],
        correct: 0
    },
    {
        id: 315,
        question: "Nội dung nào dưới đây là thực chất của thời kì quá độ?",
        options: [
            "Thời kì cải biến cách mạng từ xã hội tiền tư bản và tư bản chủ nghĩa sang xã hội xã hội chủ nghĩa.",
            "Thời kì tiếp tục cuộc đấu tranh của giai cấp công nhân chống giai cấp tư sản.",
            "Thời kì giai cấp công nhân phát triển kinh tế, xây dựng cơ sở vật chất - kĩ thuật cho chủ nghĩa xã hội.",
            "Thời kì giai cấp công nhân tiến hành công nghiệp hoá, hiện đại hoá đất nước."
        ],
        correct: 0
    },
    {
        id: 316,
        question: "Nội dung nào dưới đây là đặc điểm kinh tế của thời kì quá độ lên chủ nghĩa xã hội?",
        options: [
            "Tiến hành công nghiệp hoá, hiện đại hoá đất nước.",
            "Tồn tại nền kinh tế nhiều thành phần.",
            "Tồn tại duy nhất thành phần kinh tế tập thể.",
            "Phát triển lực lượng sản xuất."
        ],
        correct: 1
    },
    {
        id: 317,
        question: "Đặc điểm chính trị của thời kỳ quá độ lên chủ nghĩa xã hội?",
        options: [
            "Thiết lập, tăng cường chuyên chính vô sản.",
            "Tồn tại nhiều tư tưởng khác nhau.",
            "Giai cấp công nhân nắm và sử dụng quyền lực nhà nước trấn áp giai cấp tư sản.",
            "Giai cấp công nhân tổ chức xây dựng và bảo vệ chế độ mới."
        ],
        correct: 1
    },
    {
        id: 318,
        question: "Tiếp tục cuộc đấu tranh giai cấp giữa giai cấp vô sản đã chiến thắng nhưng chưa hoàn toàn chiến thắng với giai cấp tư sản đã thất bại nhưng chưa phải thất bại hoàn toàn là đặc điểm của thời kì quá độ trên phương diện…",
        options: [
            "chính trị",
            "kinh tế",
            "tư tưởng, văn hoá",
            "xã hội"
        ],
        correct: 0
    },
    {
        id: 319,
        question: "Nội dung nào dưới đây là đặc điểm trên lĩnh vực tư tưởng, văn hoá của thời kì quá độ lên chủ nghĩa xã hội?",
        options: [
            "Tồn tại nhiều giai cấp, tầng lớp.",
            "Tồn tại nhiều tư tưởng khác nhau.",
            "Tồn tại sự khác biệt giữa lao động trí óc và lao động chân tay.",
            "Tồn tại nhiều thành phần kinh tế đối lập"
        ],
        correct: 1
    },
    {
        id: 320,
        question: "Giai cấp công nhân từng bước xây dựng văn hoá vô sản, nền văn hoá mới xã hội chủ nghĩa, tiếp thu giá trị văn hoá dân tộc và tinh hoa văn hoá nhân loại, bảo đảm đáp ứng nhu cầu văn hoá tinh thần ngày càng tăng của nhân dân là đặc điểm của thời kì quá độ trên phương diện…",
        options: [
            "chính trị",
            "kinh tế",
            "tư tưởng, văn hoá",
            "xã hội"
        ],
        correct: 2
    },
    {
        id: 321,
        question: "Nội dung nào dưới đây không phải là đặc điểm trên lĩnh vực xã hội của thời kì quá độ lên chủ nghĩa xã hội?",
        options: [
            "Tồn tại sự khác biệt giữa thành thị, nông thôn.",
            "Tồn tại sự khác biệt giữa lao động trí óc và lao động chân tay.",
            "Tồn tại nhiều hủ tục, tệ nạn xã hội.",
            "Tồn tại nhiều tư tưởng khác nhau."
        ],
        correct: 3
    },
    {
        id: 322,
        question: "Nội dung nào dưới đây là con đường phát triển của cách mạng Việt Nam được Chủ tịch Hồ Chí Minh nêu ra trong Chánh cương vắn tắt của Đảng?",
        options: [
            "Làm tư sản dân quyền cách mạng để đi tới xã hội xã hội chủ nghĩa.",
            "Làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản.",
            "Làm thổ địa cách mạng và tư sản dân quyền cách mạng để đi tới xã hội cộng sản.",
            "Làm tư sản dân quyền và thổ địa cách mạng để đi thẳng tới xã hội xã hội chủ nghĩa và cộng sản chủ nghĩa."
        ],
        correct: 1
    },
    {
        id: 323,
        question: "Con đường quá độ bỏ qua chế độ tư bản chủ nghĩa ở Việt Nam được đề cập lần đầu tiên ở văn kiện nào dưới đây của Đảng?",
        options: [
            "Cương lĩnh chính trị đầu tiên của Đảng tháng 2 năm 1930.",
            "Luận cương chính trị tháng 10 năm 1930.",
            "Chính cương của Đảng Lao động tháng 2 năm 1951.",
            "Cương lĩnh xây dựng đất nước trong thời kì quá độ lên chủ nghĩa xã hội tháng 6 năm 1991."
        ],
        correct: 0
    },
    {
        id: 324,
        question: "Con đường cách mạng Việt Nam là quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa là một tất yếu vì…",
        options: [
            "Đảng Cộng sản Việt Nam đã có đường lối đúng đắn.",
            "sự phát triển của lực lượng sản xuất.",
            "phù hợp với đặc điểm của đất nước và xu thế phát triển của thời đại.",
            "đáp ứng được nguyện vọng và mong ước của nhân dân ta."
        ],
        correct: 2
    },
    {
        id: 325,
        question: "Thời kì quá độ lên chủ nghĩa xã hội trên phạm vi cả nước ta bắt đầu từ năm…",
        options: [
            "1945",
            "1954",
            "1975",
            "1986"
        ],
        correct: 2
    },
    {
        id: 326,
        question: "Quan điểm: Lấy nông nghiệp làm mặt trận hàng đầu trong chặng đường đầu tiên của thời kì quá độ, được Đảng ta nêu tại….",
        options: [
            "Đại hội IV",
            "Đại hội V",
            "Đại hội VI",
            "Đại hội VII"
        ],
        correct: 1
    },
    {
        id: 327,
        question: "Cương lĩnh xây dựng đất nước trong thời kì quá độ lên chủ nghĩa xã hội (1991) đã xác định mô hình chủ nghĩa xã hội ở nước ta có sáu đặc trưng, được Đảng Cộng sản Việt Nam thông qua tại",
        options: [
            "Đại hội VI",
            "Đại hội VII",
            "Đại hội VIII",
            "Đại hội IX"
        ],
        correct: 1
    },
    {
        id: 328,
        question: "Nội dung nào dưới đây là một trong những đặc trưng của xã hội xã hội chủ nghĩa mà nhân dân ta đang xây dựng được Đảng Cộng sản Việt Nam xác định trong Cương lĩnh xây dựng đất nước trong thời kì quá độ lên chủ nghĩa xã hội (1991)?",
        options: [
            "Do nhân dân lao động làm chủ.",
            "Có một nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về các tư liệu sản xuất chủ yếu.",
            "Có nền văn hoá tiên tiến, đậm đà bản sắc dân tộc.",
            "Có Nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân do Đảng Cộng sản lãnh đạo."
        ],
        correct: 3
    },
    {
        id: 329,
        question: "Nhận thức của Đảng Cộng sản Việt Nam về chủ nghĩa xã hội và con đường đi lên chủ nghĩa xã hội không chỉ dừng ở nhận thức định hướng, định tính mà từng bước đạt tới trình độ định hình, định lượng tại…",
        options: [
            "Đại hội VI",
            "Đại hội VII",
            "Đại hội VIII",
            "Đại hội IX"
        ],
        correct: 1
    },
    {
        id: 330,
        question: "Tại Đại hội Đảng nào dưới đây, Đảng Cộng sản Việt Nam xác định: thời kì phát triển mới - đẩy mạnh công nghiệp hoá, hiện đại hoá đất nước”?",
        options: [
            "Đại hội VI (1986)",
            "Đại hội VII (1991)",
            "Đại hội VIII (1996)",
            "Đại hội IX (2001)"
        ],
        correct: 0
    },
    {
        id: 331,
        question: "Quá độ lên chủ nghĩa xã hội, bỏ qua chế độ tư bản chủ nghĩa là bỏ qua yếu tố nào dưới đây của chủ nghĩa tư bản?",
        options: [
            "Bỏ qua nhà nước của giai cấp tư sản và bỏ qua việc xác lập vị trí thống trị của kiến trúc thượng tầng tư bản chủ nghĩa.",
            "Bỏ qua cơ sở kinh tế và kiến trúc thượng tầng tư bản chủ nghĩa.",
            "Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa.",
            "Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất tư bản chủ nghĩa."
        ],
        correct: 2
    },
    {
        id: 332,
        question: "Đẩy mạnh công nghiệp hoá, hiện đại hoá đất nước gắn với phát triển kinh tế tri thức, bảo vệ tài nguyên, môi trường là phương hướng xây dựng chủ nghĩa xã hội được Đảng Cộng sản Việt Nam đề ra tại…",
        options: [
            "Đại hội VI",
            "Đại hội VII",
            "Đại hội VIII",
            "Đại hội IX"
        ],
        correct: 3
    },
    {
        id: 333,
        question: "Tám đặc trưng của xã hội xã hội chủ nghĩa mà nhân dân ta đang xây dựng được thể hiện trong văn kiện nào dưới đây của Đảng Cộng sản Việt Nam?",
        options: [
            "Văn kiện Đại hội Đảng toàn quốc lần thứ VI (12/1986).",
            "Văn kiện Đại hội Đảng toàn quốc lần thứ VII (6/1991).",
            "Văn kiện Đại hội Đảng toàn quốc lần thứ IX (4/2001).",
            "Văn kiện Đại hội Đảng toàn quốc lần thứ XI (2011)."
        ],
        correct: 3
    },
    {
        id: 334,
        question: "Điền từ ngữ thích hợp vào chỗ trống: Tại Đại hội Đại biểu toàn quốc lần thứ XI, Đảng Cộng sản Việt Nam đã khẳng định: Xã hội xã hội chủ nghĩa là xã hội “dân giàu, nước mạnh, …. công bằng, văn minh”.",
        options: [
            "dân chủ",
            "bình đẳng",
            "hạnh phúc",
            "tự do"
        ],
        correct: 0
    },
    {
        id: 335,
        question: "Nguyên tắc phân phối cơ bản của thời kì quá độ lên chủ nghĩa xã hội là…",
        options: [
            "theo lao động",
            "theo nhu cầu",
            "theo cổ phần",
            "theo nguyên tắc bình quân chủ nghĩa"
        ],
        correct: 0
    },
    {
        id: 336,
        question: "Tại Đại hội Đại biểu toàn quốc nào dưới đây của Đảng Cộng sản Việt Nam được gọi là Đại hội Đổi mới đất nước?",
        options: [
            "Đại hội IV",
            "Đại hội V",
            "Đại hội VI",
            "Đại hội VIII"
        ],
        correct: 2
    },
    {
        id: 337,
        question: "Nội dung nào dưới đây không phải là đặc điểm cơ bản của thời kì quá độ bỏ qua chế độ tư bản chủ nghĩa lên chủ nghĩa xã hội ở Việt Nam?",
        options: [
            "Xuất phát từ một xã hội thuộc địa nửa phong kiến, với lực lượng sản xuất thấp.",
            "Thời đại ngày nay vẫn là thời đại quá độ từ chủ nghĩa tư bản lên chủ nghĩa xã hội.",
            "Cuộc cách mạng khoa học và công nghệ hiện đại đang diễn ra mạnh mẽ.",
            "Giao thoa, tiếp biến văn hoá đang diễn ra mạnh mẽ."
        ],
        correct: 3
    },
    {
        id: 338,
        question: "Nội dung nào dưới đây không phải là phương hướng xây dựng chủ nghĩa xã hội ở Việt Nam hiện nay được xác định trong Cương lĩnh xây dựng đất nước trong thời kì quá độ lên chủ nghĩa xã hội (bổ sung và phát triển năm 2011)?",
        options: [
            "Phát triển nền kinh tế thị trường định hướng xã hội chủ nghĩa.",
            "Tăng cường quốc phòng, an ninh, bảo vệ vững chắc Tổ quốc Việt Nam xã hội chủ nghĩa.",
            "Có quan hệ hữu nghị và hợp tác với các nước trên thế giới.",
            "Xây dựng Đảng trong sạch, vững mạnh."
        ],
        correct: 2
    },
    {
        id: 339,
        question: "Nội dung nào dưới đây là đặc trưng thể hiện mục tiêu của xã hội xã hội chủ nghĩa mà nhân dân ta đang xây dựng?",
        options: [
            "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh.",
            "Do nhân dân làm chủ.",
            "Có nền văn hoá tiên tiến đậm đà bản sắc dân tộc.",
            "Có nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân và vì nhân dân."
        ],
        correct: 0
    },
    {
        id: 340,
        question: "Nội dung nào dưới đây không phải là phương hướng xây dựng chủ nghĩa xã hội ở nước ta hiện nay?",
        options: [
            "Đẩy mạnh công nghiệp hoá, hiện đại hoá đất nước gắn với phát triển kinh tế tri thức, bảo vệ tài nguyên, môi trường.",
            "Phát triển nền kinh tế thị trường định hướng xã hội chủ nghĩa",
            "Đổi mới căn bản, toàn diện nền giáo dục.",
            "Xây dựng Đảng trong sạch, vững mạnh."
        ],
        correct: 2
    },
    {
        id: 341,
        question: "Nội dung nào dưới đây không phải là mối quan hệ lớn được Đại hội XII xác định cần nhận thức và giải quyết?",
        options: [
            "Giữa đổi mới kinh tế và đổi mới chính trị.",
            "Giữa đổi mới, ổn định và phát triển,",
            "Giữa Đảng lãnh đạo, Nhà nước quản lí và nhân dân làm chủ.",
            "Giữa giữ gìn bản sắc và tiếp thu tinh hoa văn hoá nhân loại."
        ],
        correct: 3
    },
    // Chương 4 - 50 câu đầu
    {
        id: 342,
        question: "So với các nền dân chủ trước đây, nền dân chủ xã hội chủ nghĩa có điểm khác biệt nào?",
        options: [
            "Không còn mang tính giai cấp",
            "Là nền dân chủ cho mọi giai cấp",
            "Là nền dân chủ rộng rãi nhất nhưng vẫn là nền dân chủ mang tính giai cấp",
            "Là nền dân chủ thực hiện dân chủ với riêng giai cấp công nhân"
        ],
        correct: 2
    },
    {
        id: 343,
        question: "Nền dân chủ xã hội chủ nghĩa thực hiện ... rộng rãi với đông đảo quần chúng nhân dân.",
        options: [
            "Dân chủ",
            "Chuyên chính",
            "Thống trị",
            "Quản lý"
        ],
        correct: 0
    },
    {
        id: 344,
        question: "Nhà nước xã hội chủ nghĩa là yếu tố cơ bản của...",
        options: [
            "Nền dân chủ chủ nô",
            "Nền dân chủ tư sản",
            "Nền dân chủ xã hội chủ nghĩa",
            "Nền văn hóa XHCN"
        ],
        correct: 0
    },
    {
        id: 345,
        question: "Đặc trưng cơ bản của nhà nước xã hội chủ nghĩa đó là:",
        options: [
            "Một kiểu nhà nước đặc biệt",
            "“Nửa nhà nước”",
            "“Nhà nước không còn nguyên nghĩa”",
            "Cả A, B, C"
        ],
        correct: 3
    },
    {
        id: 346,
        question: "Đặc trưng chính trị của nền dân chủ xã hội chủ nghĩa mang bản chất của...",
        options: [
            "Giai cấp nông dân",
            "Giai cấp công nhân",
            "Đội ngũ trí thức",
            "Đội ngũ doanh nhân"
        ],
        correct: 1
    },
    {
        id: 347,
        question: "Trong chế độ phong kiến tồn tại nền dân chủ phong kiến.",
        options: [
            "Đúng",
            "Sai"
        ],
        correct: 1
    },
    {
        id: 348,
        question: "Nền dân chủ xã hội chủ nghĩa là nền dân chủ cho tất cả mọi người.",
        options: [
            "Đúng",
            "Sai"
        ],
        correct: 1
    },
    {
        id: 349,
        question: "Dân chủ là gì?",
        options: [
            "Là công bằng trong xã hội và thực thi công bằng trong xã hội",
            "Là quyền lực thuộc về nhân dân và thực thi quyền làm chủ của nhân dân",
            "Là bình đẳng của công dân và thực thi bình đẳng cho công dân",
            "Là tự do trong xã hội và thực thi tự do"
        ],
        correct: 1
    },
    {
        id: 350,
        question: "Cơ sở kinh tế của nền dân chủ xã hội chủ nghĩa là gì?",
        options: [
            "Lực lượng sản xuất hiện đại và quan hệ sản xuất xã hội chủ nghĩa",
            "Quan hệ sản xuất tư bản chủ nghĩa",
            "Nền sản xuất thủ công",
            "Nền sản xuất đại công nghiệp"
        ],
        correct: 0
    },
    {
        id: 351,
        question: "Bản chất của nhà nước xã hội chủ nghĩa là gì?",
        options: [
            "Nhà nước xã hội chủ nghĩa là sự liên hiệp tự nguyện của các giai cấp, tầng lớp trong xã hội",
            "Nhà nước xã hội chủ nghĩa là sự liên hiệp tự nguyện của các dân tộc, tôn giáo và các cộng đồng khác trong xã hội",
            "Nhà nước xã hội chủ nghĩa mang bản chất của giai cấp công nhân, tính nhân dân rộng rãi và tính dân tộc sâu sắc",
            "Nhà nước xã hội chủ nghĩa mang bản chất chính trị của các giai cấp, tầng lớp trong lịch sử"
        ],
        correct: 2
    },
    {
        id: 352,
        question: "Kiểu nhà nước nào sau đây được V.I. Lênin gọi là “nửa nhà nước”?",
        options: [
            "Nhà nước chủ nô",
            "Nhà nước tư sản",
            "Nhà nước phong kiến",
            "Nhà nước xã hội chủ nghĩa"
        ],
        correct: 3
    },
    {
        id: 353,
        question: "Dân chủ là một phạm trù vĩnh viễn trong trường hợp nào?",
        options: [
            "Khi dân chủ là một giá trị xã hội",
            "Khi dân chủ là một hình thái nhà nước",
            "Khi dân chủ mang tính giai cấp",
            "Khi dân chủ mang tính chính trị"
        ],
        correct: 0
    },
    {
        id: 354,
        question: "Dân chủ là một phạm trù lịch sử trong trường hợp nào?",
        options: [
            "Dân chủ là một giá trị xã hội",
            "Dân chủ là một giá trị nhân loại",
            "Khi dân chủ là một hình thức tổ chức thiết chế chính trị",
            "Khi dân chủ là quyền con người"
        ],
        correct: 2
    },
    {
        id: 355,
        question: "Dân chủ xã hội chủ nghĩa ra đời gắn với sự kiện nào?",
        options: [
            "Giai cấp công nhân giành được chính quyền, thiết lập nhà nước",
            "Giai cấp công nhân bắt đầu đấu tranh chống áp bức, bóc lột",
            "Giai cấp công nhân xây dựng xong CNXH",
            "Giai cấp công nhân có Đảng cộng sản"
        ],
        correct: 0
    },
    {
        id: 356,
        question: "Dân chủ xã hội chủ nghĩa mang bản chất của giai cấp nào?",
        options: [
            "Giai cấp tư sản",
            "Giai cấp nông dân",
            "Nhân dân lao động",
            "Giai cấp công nhân"
        ],
        correct: 3
    },
    {
        id: 357,
        question: "Nền dân chủ xã hội chủ nghĩa đầu tiên ra đời gắn với sự kiện lịch sử nào?",
        options: [
            "Khởi nghĩa của công nhân dệt Lion Pháp",
            "Cách mạng tư sản Pháp năm 1789",
            "Cách mạng Tháng Mười Nga năm 1917",
            "Cách mạng Tháng Tám ở Việt Nam năm 1945"
        ],
        correct: 2
    },
    {
        id: 358,
        question: "Chức năng của nhà nước xã hội chủ nghĩa là gì?",
        options: [
            "Đoàn kết các giai cấp, tầng lớp trong xã hội để xây dựng chủ nghĩa xã hội",
            "Đoàn kết các dân tộc, tôn giáo, gia đình để xây dựng chủ nghĩa xã hội",
            "Tổ chức xây dựng chủ nghĩa xã hội và trấn áp những lực lượng chống phá sự nghiệp xây dựng chủ nghĩa xã hội của nhân dân",
            "Tổ chức xây dựng, quản lý nền sản xuất lớn xã hội tư bản chủ nghĩa"
        ],
        correct: 2
    },
    {
        id: 359,
        question: "Tổ chức nào là quan trọng nhất để thực thi quyền lực của nhân dân?",
        options: [
            "Nhà nước xã hội chủ nghĩa",
            "Đảng cộng sản",
            "Mặt trận Tổ quốc",
            "Các tổ chức chính trị - xã hội và đoàn thể của nhân dân"
        ],
        correct: 0
    },
    {
        id: 360,
        question: "Sự ra đời của nhà nước xã hội chủ nghĩa gắn với sự kiện nào?",
        options: [
            "Giai cấp công nhân lật đổ nhà nước của giai cấp bóc lột, giành được chính quyền",
            "Giai cấp công nhân xây dựng xong CNXH",
            "Giai cấp công nhân đấu tranh phản đối tình trạng áp bức bóc lột của giai cấp tư sản",
            "Giai cấp công nhân đấu tranh đòi tăng lương, giảm giờ làm, cải thiện điều kiện lao động"
        ],
        correct: 0
    },
    {
        id: 361,
        question: "Dân chủ xã hội chủ nghĩa có sự khác biệt về chất so với dân chủ tư sản.",
        options: [
            "Đúng",
            "Sai"
        ],
        correct: 0
    },
    {
        id: 362,
        question: "Điền từ vào chỗ trống (...) trong luận điểm sau: Dân chủ xã hội chủ nghĩa vừa mang bản chất giai cấp công nhân, vừa có tính nhân dân rộng rãi, tính (...) sâu sắc.",
        options: [
            "Giai cấp",
            "Nhân văn",
            "Dân tộc",
            "Xã hội"
        ],
        correct: 2
    },
    {
        id: 363,
        question: "Công cụ hữu hiệu nhất để Nhà nước pháp quyền xã hội chủ nghĩa quản lý xã hội là gì?",
        options: [
            "Kế hoạch",
            "Chủ trương",
            "Pháp luật",
            "Đạo đức"
        ],
        correct: 2
    },
    {
        id: 364,
        question: "Đặc điểm của Nhà nước pháp quyền xã hội chủ nghĩa là gì?",
        options: [
            "Quản lý xã hội bằng pháp luật",
            "Quản lý xã hội bằng mệnh lệnh hành chính",
            "Quản lý xã hội bằng dư luận",
            "Quản lý xã hội bằng niềm tin"
        ],
        correct: 0
    },
    {
        id: 365,
        question: "Điền từ vào chỗ trống (...) trong câu nói của Chủ tịch Hồ Chí Minh: “Nước ta là nước dân chủ, nghĩa là nước nhà do nhân dân làm chủ. Nhân dân có quyền lợi làm chủ, thì phải có (...) làm tròn bổn phận công dân”.",
        options: [
            "Khả năng",
            "Nghĩa vụ",
            "Quyết tâm",
            "Nguyện vọng"
        ],
        correct: 1
    },
    {
        id: 366,
        question: "Sự khác biệt của nền dân chủ xã hội chủ nghĩa so với các nền dân chủ trước là gì?",
        options: [
            "Dân chủ xã hội chủ nghĩa không mang tính giai cấp",
            "Dân chủ xã hội chủ nghĩa chỉ mang lại lợi ích cho giai cấp công nhân",
            "Dân chủ xã hội chủ nghĩa là nền dân chủ cho mọi giai cấp",
            "Dân chủ xã hội chủ nghĩa là nền dân chủ rộng rãi cho nhân dân lao động"
        ],
        correct: 3
    },
    {
        id: 367,
        question: "Ở Việt Nam, Nhà nước Việt Nam dân chủ cộng hòa ra đời sau thắng lợi của cuộc Cách mạng Tháng Tám năm 1945.",
        options: [
            "Đúng",
            "Sai"
        ],
        correct: 0
    },
    {
        id: 368,
        question: "Đối với lực lượng chống đối, phá hoại sự nghiệp cách mạng xã hội chủ nghĩa, nhà nước xã hội chủ nghĩa thực hiện…",
        options: [
            "Sự trấn áp",
            "Sự tổ chức",
            "Sự điều hành",
            "Quản lý"
        ],
        correct: 0
    },
    {
        id: 369,
        question: "Tổ chức nào thực hiện sự trấn áp đối với lực lượng chống đối, phá hoại sự nghiệp cách mạng xã hội chủ nghĩa?",
        options: [
            "Đảng cộng sản",
            "Nhà nước xã hội chủ nghĩa",
            "Nghiệp đoàn",
            "Công đoàn"
        ],
        correct: 1
    },
    {
        id: 370,
        question: "Nhà nước đầu tiên của xã hội có giai cấp ra đời trong hình thái kinh tế - xã hội nào?",
        options: [
            "Cộng sản nguyên thủy",
            "Chiếm hữu nô lệ",
            "Phong kiến",
            "Tư bản chủ nghĩa"
        ],
        correct: 1
    },
    {
        id: 371,
        question: "Dân chủ đại diện được thực hiện như thế nào?",
        options: [
            "Nhân dân trực tiếp thực hiện quyền làm chủ nhà nước và xã hội",
            "Thực hiện thông qua trưng cầu dân ý",
            "Nhân dân giao quyền lực của mình cho hệ thống cơ quan dân cử",
            "Nhân dân tham gia vào các công việc của nhà nước và cộng đồng dân cư"
        ],
        correct: 2
    },
    {
        id: 372,
        question: "“Dân chủ là dân là chủ và dân làm chủ” là quan điểm của…",
        options: [
            "C. Mác.",
            "Ph. Ăngghen.",
            "V.I. Lênin.",
            "Hồ Chí Minh"
        ],
        correct: 3
    },
    {
        id: 373,
        question: "Theo quan niệm từ thời cổ đại, dân chủ là",
        options: [
            "quyền bình đẳng tuyệt đối của con người.",
            "quyền lực thuộc về thiểu số người trong xã hội.",
            "quyền tự do không giới hạn của mỗi người.",
            "quyền lực thuộc về nhân dân."
        ],
        correct: 3
    },
    {
        id: 374,
        question: "Quan niệm nào sau đây không đúng về dân chủ?",
        options: [
            "Dân chủ là một trong những nguyên tắc tổ chức quản lí nhà nước.",
            "Dân chủ là quyền tự do tuyệt đối của con người.",
            "Dân chủ là một giá trị chung của nhân loại.",
            "Dân chủ là một hình thái nhà nước."
        ],
        correct: 1
    },
    {
        id: 375,
        question: "Theo quan niệm của chủ nghĩa Mác — Lênin, dân chủ phản ánh cuộc đấu tranh của nhân dân lao động chống lại áp bức, cường quyền, vì thế dân chủ được coi là một…",
        options: [
            "giá trị xã hội.",
            "yếu tố xã hội.",
            "tổ chức xã hội.",
            "thành phần xã hội."
        ],
        correct: 0
    },
    {
        id: 376,
        question: "“Quyền lực thuộc về nhân dân, nhân dân tự tổ chức và thực hiện trước hết và chủ yếu là thông qua nhà nước của mình” là nội dung của khái niệm nào dưới đây?",
        options: [
            "Dân chủ.",
            "Bình đẳng",
            "Tự do",
            "Pháp quyền"
        ],
        correct: 0
    },
    {
        id: 377,
        question: "Nền dân chủ xuất hiện khi…",
        options: [
            "có xã hội loài người.",
            "có nhà nước vô sản.",
            "có nhà nước.",
            "có công cụ lao động."
        ],
        correct: 2
    },
    {
        id: 378,
        question: "Mức độ, phạm vi tham gia thật sự của quần chúng nhân dân vào công việc quản lí nhà nước phản ánh…",
        options: [
            "cấu trúc của nền dân chủ",
            "trình độ phát triển của nền dân chủ.",
            "quá trình đấu tranh giành dân chủ.",
            "sự ra đời của nền dân chủ."
        ],
        correct: 1
    },
    {
        id: 379,
        question: "Dân chủ có sự ra đời, tồn tại và phát triển trong một giai đoạn nhất định và sẽ mất đi khi trong xã hội không còn giai cấp, vì thế, dân chủ là một…",
        options: [
            "yếu tố văn hoá.",
            "thành phần của xã hội.",
            "phạm trù lịch sử.",
            "phạm trù giai cấp."
        ],
        correct: 2
    },
    {
        id: 380,
        question: "Trên phương diện quyền lực, dân chủ là…",
        options: [
            "quyền lực thuộc về nhân dân.",
            "một hình thức hay hình thái nhà nước.",
            "một nguyên tắc - nguyên tắc dân chủ.",
            "một quan niệm - quan niệm về dân chủ, về tinh thần dân chủ."
        ],
        correct: 0
    },
    {
        id: 381,
        question: "Trên phương diện chế độ xã hội và trong lĩnh vực chính trị, dân chủ là",
        options: [
            "quyền lực thuộc về nhân dân.",
            "một hình thức hay hình thái nhà nước",
            "một nguyên tắc - nguyên tắc dân chủ.",
            "một quan niệm - quan niệm về dân chủ, về tinh thần dân chủ."
        ],
        correct: 1
    },
    {
        id: 382,
        question: "Trên phương diện tư tưởng, dân chủ là…",
        options: [
            "quyền lực thuộc về nhân dân.",
            "một hình thức hay hình thái nhà nước.",
            "một nguyên tắc - nguyên tắc dân chủ.",
            "một quan niệm - quan niệm về dân chủ, về tinh thần dân chủ."
        ],
        correct: 3
    },
    {
        id: 383,
        question: "Trên phương diện tổ chức và quản lí xã hội, dân chủ là…",
        options: [
            "quyền lực thuộc về nhân dân.",
            "một hình thức hay hình thái nhà nước.",
            "một nguyên tắc - nguyên tắc dân chủ.",
            "một quan niệm - quan niệm về dân chủ, về tinh thần dân chủ."
        ],
        correct: 2
    },
    {
        id: 384,
        question: "Câu nói: “Chế độ ta là chế độ dân chủ, tức là nhân dân là người chủ, mà chính phủ là người đầy tớ trung thành của nhân dân” là của ai?",
        options: [
            "Hồ Chí Minh.",
            "Võ Nguyên Giáp",
            "Phạm Văn Đồng.",
            "Nguyễn Phú Trọng."
        ],
        correct: 0
    },
    {
        id: 385,
        question: "Điền từ ngữ thích hợp vào chỗ trống để hoàn thiện khẳng định sau của Đảng Cộng sản Việt Nam: “Trong toàn bộ hoạt động của mình, Đảng phải quán triệt tư tưởng lấy dân làm gốc, xây dựng và phát huy quyền làm chủ của nhân dân lao động”.",
        options: [
            "lấy dân làm nền tảng.",
            "lấy dân làm gốc.",
            "lấy dân làm đích.",
            "lấy dân làm chỗ dựa."
        ],
        correct: 1
    },
    {
        id: 386,
        question: "Trong chế độ cộng sản nguyên thuỷ đã xuất hiện hình thức manh nha của dân chủ mà Ph. Ăngghen gọi là…",
        options: [
            "dân chủ công xã.",
            "dân chủ sơ khai.",
            "dân chủ nguyên thuỷ.",
            "dân chủ cộng sản."
        ],
        correct: 2
    },
    {
        id: 387,
        question: "Với tư cách là một hình thái nhà nước, một chế độ chính trị, lịch sử nhân loại có ba nền dân chủ là…",
        options: [
            "dân chủ chủ nô, dân chủ phong kiến và dân chủ tư sản.",
            "dân chủ chủ nô, dân chủ tư sản và dân chủ xã hội chủ nghĩa.",
            "dân chủ nguyên thuỷ, dân chủ phong kiến và dân chủ tư sản.",
            "dân chủ nguyên thuỷ, dân chủ tư sản và dân chủ xã hội chủ nghĩa."
        ],
        correct: 1
    },
    {
        id: 388,
        question: "Hình thái kinh tế - xã hội nào dưới đây không có nền dân chủ?",
        options: [
            "Chiếm hữu nô lệ.",
            "Phong kiến.",
            "Tư bản chủ nghĩa.",
            "Cộng sản chủ nghĩa."
        ],
        correct: 3
    },
    {
        id: 389,
        question: "Nền dân chủ nào dưới đây là nền dân chủ rộng rãi nhất trong lịch sử?",
        options: [
            "Dân chủ chủ nô.",
            "Dân chủ phong kiến.",
            "Dân chủ tư sản.",
            "Dân chủ xã hội chủ nghĩa."
        ],
        correct: 3
    },
    {
        id: 390,
        question: "Dân chủ xã hội chủ nghĩa là nền dân chủ mang bản chất của…",
        options: [
            "giai cấp công nhân.",
            "giai cấp công nhân và đội ngũ trí thức",
            "giai cấp công nhân và giai cấp nông dân.",
            "giai cấp tư sản và giai cấp tiểu tư sản."
        ],
        correct: 0
    },
    {
        id: 391,
        question: "Dân chủ xã hội chủ nghĩa là nền dân chủ do…",
        options: [
            "Đảng của giai cấp công nhân lãnh đạo.",
            "Đảng cầm quyền lãnh đạo.",
            "Đảng của nhân dân lãnh đạo.",
            "Đảng của trí thức lãnh đạo."
        ],
        correct: 0
    },
    // Chương 4 - Tiếp (câu 51-99)
    {
        id: 392,
        question: "Nền dân chủ xã hội chủ nghĩa dựa trên hệ tư tưởng của giai cấp, tầng lớp nào sau đây?",
        options: [
            "Giai cấp công nhân.",
            "Giai cấp nông dân.",
            "Giai cấp tư sản.",
            "Tầng lớp trí thức."
        ],
        correct: 0
    },
    {
        id: 393,
        question: "Nền dân chủ cao hơn về chất so với nền dân chủ tư sản, ở đó mọi quyền lực thuộc về nhân dân, dân là chủ và dân làm chủ, dân chủ và pháp luật nằm trong sự thống nhất biện chứng; được thực hiện bằng nhà nước pháp quyền xã hội chủ nghĩa, đặt dưới sự lãnh đạo của Đảng Cộng sản là nền dân chủ…",
        options: [
            "nguyên thuỷ.",
            "chủ nô.",
            "phong kiến.",
            "xã hội chủ nghĩa."
        ],
        correct: 3
    },
    {
        id: 394,
        question: "Khái niệm “dân chủ xã hội chủ nghĩa” đồng nghĩa với thuật ngữ nào dưới đây?",
        options: [
            "Dân chủ nguyên thuỷ.",
            "Dân chủ chủ nô.",
            "Dân chủ tư sản.",
            "Dân chủ vô sản."
        ],
        correct: 3
    },
    {
        id: 395,
        question: "Nền dân chủ xã hội chủ nghĩa về cơ bản thống nhất với khái niệm nào dưới đây?",
        options: [
            "Chuyên chính vô sản.",
            "Chủ nghĩa xã hội.",
            "Nhà nước pháp quyền",
            "Chính đảng của giai cấp công nhân."
        ],
        correct: 0
    },
    {
        id: 396,
        question: "Không ngừng mở rộng dân chủ, nâng cao mức độ giải phóng cho những người lao động, thu hút họ tham gia tự giác vào công việc quản lí nhà nước, quản lí xã hội là…",
        options: [
            "nguyên tắc cơ bản của nền dân chủ chủ nô.",
            "nguyên tắc cơ bản của nền dân chủ tư sản.",
            "nguyên tắc cơ bản của nền dân chủ xã hội chủ nghĩa.",
            "nội dung cơ bản của nền dân chủ xã hội chủ nghĩa."
        ],
        correct: 2
    },
    {
        id: 397,
        question: "Nền dân chủ xã hội chủ nghĩa trên thế giới chính thức được xác lập gắn với sự kiện nào sau đây?",
        options: [
            "Công xã Pari ra đời (1871).",
            "Cách mạng tháng Hai Nga (1917).",
            "Cách mạng tháng Mười Nga (1917).",
            "Cách mạng tháng Tám ở Việt Nam (1945)."
        ],
        correct: 2
    },
    {
        id: 398,
        question: "Nội dung nào dưới đây không phải là đặc trưng cơ bản của nền dân chủ xã hội chủ nghĩa?",
        options: [
            "Thực hiện dân chủ với mọi tầng lớp, mọi giai cấp trong xã hội.",
            "Đảm bảo quyền lực thuộc về nhân dân.",
            "Có cơ sở kinh tế là chế độ công hữu về tư liệu sản xuất chủ yếu của xã hội.",
            "Kết hợp hài hoà lợi ích cá nhân, tập thể và xã hội."
        ],
        correct: 0
    },
    {
        id: 399,
        question: "Cơ sở kinh tế của nền dân chủ xã hội chủ nghĩa là…",
        options: [
            "nền kinh tế hàng hoá nhiều thành phần.",
            "chế độ công hữu về những tư liệu sản xuất chủ yếu của xã hội.",
            "chế độ sở hữu tư nhân về tư liệu sản xuất.",
            "nền kinh tế thị trường xã hội chủ nghĩa."
        ],
        correct: 1
    },
    {
        id: 400,
        question: "Điền từ ngữ thích hợp vào chỗ trống: Dân chủ xã hội chủ nghĩa là nền dân chủ ...... so với nền dân chủ tư sản, là nền dân chủ mà ở đó mọi quyền lực thuộc về nhân dân, ……… , dân chủ và pháp luật nằm trong sự thống nhất biện chứng, được thực hiện bằng….. , đặt dưới sự lãnh đạo của Đảng Cộng sản.",
        options: [
            "cao nhất; của dân, do dân, vì dân; quyền lực nhà nước.",
            "tuyệt đối; dân bàn, dân làm, dân kiểm tra; Hiến pháp và pháp luật.",
            "cao hơn về chất; dân là chủ và dân làm chủ; Nhà nước pháp quyền xã hội chủ nghĩa.",
            "tuyệt đối; dân bàn, dân làm, dân kiểm tra; Hiến pháp và pháp luật."
        ],
        correct: 2
    },
    {
        id: 401,
        question: "Đây là luận điểm nổi tiếng của C. Mác trong phê phán cương lĩnh Gôta: “Quyền không bao giờ có thể ở mức độ cao hơn chế độ và sự phát triển văn hoá của xã hội do chế độ đó quyết định”. Luận điểm này nói về cơ sở…",
        options: [
            "chính trị.",
            "kinh tế.",
            "xã hội.",
            "nhà nước."
        ],
        correct: 1
    },
    {
        id: 402,
        question: "Trong việc thực hiện quyền dân chủ trên lĩnh vực chính trị, công dân sẽ không thực hiện hành vi nào sau đây?",
        options: [
            "ứng cử và bầu cử.",
            "Tham gia quản lí nhà nước.",
            "Kiểm tra, thanh tra mọi hoạt động của nhà nước.",
            "Tham gia giám sát mọi hoạt động của nhà nước."
        ],
        correct: 2
    },
    {
        id: 403,
        question: "“Thực hành dân chủ là cái chìa khoá vạn năng có thể giải quyết mọi khó khăn” là câu nói của…",
        options: [
            "V.I. Lênin.",
            "Mao Trạch Đông.",
            "Hồ Chí Minh.",
            "Phạm Văn Đồng."
        ],
        correct: 2
    },
    {
        id: 404,
        question: "Điền từ ngữ thích hợp vào chỗ trống để hoàn thiện khẳng định của Đảng Cộng sản Việt Nam trong Cương lĩnh năm 1991: “Dân chủ gắn liền với...... xã hội phải được thực hiện trong thực tế cuộc sống trên tất cả các lĩnh vực chính trị, kinh tế, văn hoá, xã hội thông qua hoạt động của Nhà nước do nhân dân cử ra và bằng các hình thức dân chủ…”",
        options: [
            "công bằng; trực tiếp",
            "bình đẳng; trực tiếp",
            "công bằng; gián tiếp",
            "bình đẳng; gián tiếp"
        ],
        correct: 0
    },
    {
        id: 405,
        question: "Điền từ ngữ thích hợp vào chỗ trống để hoàn thiện khẳng định của Đảng Cộng sản Việt Nam trong Cương lĩnh năm 1991: “Dân chủ đi đôi với …. kỉ cương, phải được thể chế hoá bằng…. và…….. bảo đảm”.",
        options: [
            "kỉ luật; hiến pháp; hiến pháp",
            "kỉ luật; pháp luật; pháp luật",
            "đảm bảo; pháp luật; pháp luật",
            "đảm bảo; hiến pháp; hiến pháp"
        ],
        correct: 1
    },
    {
        id: 406,
        question: "Nền dân chủ xã hội chủ nghĩa có sự kết hợp hài hoà về …",
        options: [
            "văn hoá giữa cá nhân, tập thể với toàn xã hội.",
            "nhận thức giữa cá nhân, tập thể với toàn xã hội.",
            "lợi ích giữa cá nhân, tập thể với lợi ích của toàn xã hội.",
            "kỷ luật giữa cá nhân, tập thể với toàn xã hội."
        ],
        correct: 2
    },
    {
        id: 407,
        question: "Chế độ dân chủ nhân dân ở nước ta được xác lập…",
        options: [
            "sau khi Đảng Cộng sản Việt Nam ra đời năm 1930.",
            "sau Cách mạng tháng Tám năm 1945.",
            "sau chiến thắng Điện Biên Phủ năm 1954.",
            "sau đại thắng mùa xuân năm 1975."
        ],
        correct: 1
    },
    {
        id: 408,
        question: "Đảng Cộng sản Việt Nam khẳng định: “Trong toàn bộ hoạt động của mình, Đảng phải quán triệt tư tưởng “lấy dân làm gốc”, xây dựng và phát huy quyền làm chủ của nhân dân lao động” trong Đại hội nào dưới đây?",
        options: [
            "Đại hội IV.",
            "Đại hội V.",
            "Đại hội VI.",
            "Đại hội VII."
        ],
        correct: 1
    },
    {
        id: 409,
        question: "Đảng Cộng sản Việt Nam khẳng định: “Chúng ta xác định mối quan hệ Đảng lãnh đạo, nhân dân làm chủ, nhà nước quản lí thành cơ chế chung trong quản lí toàn bộ xã hội” trong Đại hội nào dưới đây?",
        options: [
            "Đại hội VI.",
            "Đại hội VII.",
            "Đại hội VIII.",
            "Đại hội IX."
        ],
        correct: 2
    },
    {
        id: 410,
        question: "Định hướng nào dưới đây không phải là định hướng nhằm phát huy dân chủ xã hội chủ nghĩa ở Việt Nam?",
        options: [
            "Hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa, tạo ra cơ sở kinh tế vững chắc.",
            "Xây dựng Đảng Cộng sản Việt Nam trong sạch, vững mạnh với tư cách là điều kiện tiên quyết để xây dựng nền dân chủ xã hội chủ nghĩa",
            "Xây dựng và từng bước hoàn thiện các hệ thống giám sát, phản biện xã hội, phát huy quyền làm chủ của nhân dân.",
            "Phát huy vai trò của các tổ chức chính trị - xã hội bằng cách tách các tổ chức này ra ngoài hệ thống chính trị nhằm tăng tính độc lập của các tổ chức."
        ],
        correct: 3
    },
    {
        id: 411,
        question: "Nguyên nhân nào dưới đây dẫn tới sự xuất hiện của nhà nước?",
        options: [
            "Sự xuất hiện của chế độ tư hữu và phân chia giai cấp.",
            "Sự xuất hiện chế độ tư bản chủ nghĩa và phân chia giai cấp.",
            "Sự xuất hiện của chế độ xã hội chủ nghĩa và phân chia giai cấp.",
            "Sự xuất hiện của chế độ công hữu và phân chia giai cấp."
        ],
        correct: 0
    },
    {
        id: 412,
        question: "Căn cứ vào tính chất của quyền lực, nhà nước có chức năng nào dưới đây?",
        options: [
            "Chức năng đối nội và chức năng đối ngoại.",
            "Chức năng quản lí kinh tế và quản lí chính trị.",
            "Chức năng giai cấp và chức năng xã hội.",
            "Chức năng lãnh đạo và chức năng giám sát."
        ],
        correct: 2
    },
    {
        id: 413,
        question: "Căn cứ vào phạm vi tác động của quyền lực, nhà nước có chức năng nào dưới đây?",
        options: [
            "Chức năng đối nội và chức năng đối ngoại.",
            "Chức năng quản lí kinh tế và quản lí chính trị.",
            "Chức năng giai cấp và chức năng xã hội.",
            "Chức năng lãnh đạo và chức năng giám sát."
        ],
        correct: 0
    },
    {
        id: 414,
        question: "Căn cứ vào lĩnh vực tác động của quyền lực, nhà nước có…",
        options: [
            "chức năng đối nội và chức năng đối ngoại.",
            "chức năng chính trị, kinh tế, văn hoá.",
            "chức năng giai cấp và chức năng xã hội.",
            "chức năng lãnh đạo và chức năng giám sát."
        ],
        correct: 1
    },
    {
        id: 415,
        question: "Trong xã hội có giai cấp, nhà nước luôn mang bản chất của…",
        options: [
            "giai cấp có lực lượng đông đảo nhất.",
            "giai cấp có trình độ cao nhất.",
            "giai cấp thống trị xã hội.",
            "giai cấp đại diện cho lực lượng sản xuất tiên tiến."
        ],
        correct: 2
    },
    {
        id: 416,
        question: "Nhà nước tư sản mang bản chất của giai cấp…",
        options: [
            "chủ nô.",
            "địa chủ.",
            "tư sản.",
            "công nhân."
        ],
        correct: 2
    },
    {
        id: 417,
        question: "Nhà nước xã hội chủ nghĩa mang bản chất của giai cấp…",
        options: [
            "chủ nô.",
            "địa chủ.",
            "tư sản.",
            "công nhân."
        ],
        correct: 3
    },
    {
        id: 418,
        question: "Nhà nước xã hội chủ nghĩa vừa có tính nhân dân rộng rãi và tính dân tộc sâu sắc, vừa có bản chất của giai cấp…",
        options: [
            "công nhân.",
            "nông dân.",
            "tư sản.",
            "chủ nô."
        ],
        correct: 0
    },
    {
        id: 419,
        question: "Bản chất của nhà nước xã hội chủ nghĩa chịu sự quy định của cơ sở kinh tế - xã hội chủ nghĩa, đó là…",
        options: [
            "quan hệ sở hữu tư nhân về tư liệu sản xuất chủ yếu.",
            "quan hệ sở hữu xã hội về tư liệu sản xuất chủ yếu.",
            "vừa quan hệ sở hữu tư nhân vừa quan hệ sở hữu xã hội về tư liệu sản xuất chủ yếu.",
            "chủ yếu là quan hệ sở hữu xã hội về tư liệu sản xuất."
        ],
        correct: 1
    },
    {
        id: 420,
        question: "Về văn hoá, xã hội, nhà nước xã hội chủ nghĩa được xây dựng trên nền tảng tinh thần là…",
        options: [
            "tư tưởng Hồ Chí Minh về chủ nghĩa xã hội.",
            "tư tưởng Hồ Chí Minh về chủ nghĩa xã hội và những giá trị văn hoá tiên tiến của nhân loại, đồng thời mang bản sắc riêng của dân tộc.",
            "lí luận của chủ nghĩa Mác - Lênin và những giá trị văn hoá tiên tiến của nhân loại.",
            "lí luận của chủ nghĩa Mác - Lênin và những giá trị văn hoá tiên tiến của nhân loại, đồng thời mang bản sắc riêng của dân tộc."
        ],
        correct: 3
    },
    {
        id: 421,
        question: "Nhà nước của giai cấp bóc lột thực hiện chức năng nào dưới đây là chủ yếu?",
        options: [
            "Chức năng đối nội.",
            "Chức năng đối ngoại.",
            "Chức năng bạo lực trấn áp.",
            "Chức năng tổ chức, xây dựng."
        ],
        correct: 2
    },
    {
        id: 422,
        question: "Nhà nước xã hội chủ nghĩa trong thời kì quá độ thực hiện chức năng bạo lực trấn áp, nhưng đó là sự trấn áp của…",
        options: [
            "thiểu số bóc lột với nhân dân lao động.",
            "nhân dân lao động đối với thiểu số bóc lột.",
            "nhân dân lao động với lực lượng chậm tiến.",
            "giai cấp bóc lột đối với thiểu số chậm tiến."
        ],
        correct: 1
    },
    {
        id: 423,
        question: "Câu nói “Bất cứ một nhà nước nào cũng đều có nghĩa là dùng bạo lực; nhưng toàn bộ sự khác nhau là ở chỗ dùng bao lực đối với những người bị bóc lột hay đối với kẻ đi bóc lột” là của….",
        options: [
            "C. Mác.",
            "Ph. Ăngghen.",
            "V.I. Lênin.",
            "Hồ Chí Minh."
        ],
        correct: 2
    },
    {
        id: 424,
        question: "Chức năng trấn áp của Nhà nước xã hội chủ nghĩa thể hiện ở…",
        options: [
            "bạo lực trấn áp đối với thiểu số bóc lột.",
            "bạo lực trấn áp đối với thiểu số bóc lột, cải tạo xã hội cũ.",
            "cải tạo xã hội cũ, đưa giai cấp công nhân lên địa vị làm chủ.",
            "cải tạo xã hội cũ, xây dựng thành công xã hội mới."
        ],
        correct: 1
    },
    {
        id: 425,
        question: "Nhà nước mà ở đó sự thống trị chính trị thuộc về giai cấp công nhân, do cách mạng xã hội chủ nghĩa sản sinh ra và có sứ mệnh xây dựng thành công chủ nghĩa xã hội, đưa nhân dân lao động lên địa vị làm chủ trên tất cả các mặt của đời sống xã hội trong một xã hội phát triển cao là nhà nước…",
        options: [
            "cộng sản chủ nghĩa.",
            "xã hội chủ nghĩa.",
            "tư sản.",
            "phong kiến."
        ],
        correct: 1
    },
    {
        id: 426,
        question: "Nhà nước xã hội chủ nghĩa hiện thực đầu tiên được thành lập ở",
        options: [
            "Liên Xô.",
            "Trung Quốc.",
            "Cu Ba.",
            "Việt Nam."
        ],
        correct: 0
    },
    {
        id: 427,
        question: "Đảng Cộng sản Việt Nam rút ra bốn bài học chủ yếu, trong đó có bài học: “Đổi mới phải dựa vào nhân dân, vì lợi ích của nhân dân, phù hợp với thực tiễn, luôn luôn sáng tạo” tại Đại hội nào dưới đây?",
        options: [
            "Đại hội VI (1986).",
            "Đại hội VII (1991).",
            "Đại hội VIII (1996).",
            "Đại hội IX (2001)."
        ],
        correct: 3
    },
    {
        id: 428,
        question: "Thành tố dân chủ xã hội chủ nghĩa đã được đưa vào tên của chủ đề Đại hội nào của Đảng Cộng sản Việt Nam?",
        options: [
            "Đại hội VII (1996).",
            "Đại hội X (2006).",
            "Đại hội XI (2011).",
            "Đại hội XII (2016)."
        ],
        correct: 3
    },
    {
        id: 429,
        question: "Các quy chế dân chủ từ cơ sở cho đến Trung ương và trong các tổ chức chính trị-xã hội đều thực hiện phương châm…",
        options: [
            "“dân biết, dân bàn, dân làm, dân kiểm tra”.",
            "“dân biết, dân làm, dân kiểm tra”",
            "“dân biết, dân tham gia, dân kiểm tra”.",
            "“dân bàn, dân tham gia, dân kiểm tra”."
        ],
        correct: 0
    },
    {
        id: 430,
        question: "Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam được lãnh đạo bởi tổ chức, cơ quan nào dưới đây?",
        options: [
            "Đảng Cộng sản Việt Nam.",
            "Quốc hội.",
            "Mặt trận Tổ quốc.",
            "Các tổ chức chính trị - xã hội"
        ],
        correct: 0
    },
    {
        id: 431,
        question: "Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam là nhà nước…",
        options: [
            "của dân, do dân, vì dân, do công nhân lãnh đạo.",
            "của dân, do dân, vì dân, do nông dân lãnh đạo.",
            "của dân, do dân, vì dân, do Đảng Cộng sản Việt Nam lãnh đạo.",
            "có lợi ích giữa cá nhân, tập thể và lợi ích của toàn xã hội."
        ],
        correct: 2
    },
    {
        id: 432,
        question: "Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam mang bản chất của giai cấp, tầng lớp nào sau đây?",
        options: [
            "Công nhân.",
            "Công nhân và nông dân.",
            "Nông dân và đội ngũ trí thức.",
            "Tất cả các giai cấp, tầng lớp trong xã hội."
        ],
        correct: 0
    },
    {
        id: 433,
        question: "Tổ chức nào dưới đây đóng vai trò là trụ cột trong hệ thống chính trị ở nước ta hiện nay?",
        options: [
            "Đảng Cộng sản Việt Nam.",
            "Nhà nước cộng hoà xã hội chủ nghĩa Việt Nam.",
            "Mặt trận Tổ quốc.",
            "Các tổ chức chính trị - xã hội."
        ],
        correct: 1
    },
    {
        id: 434,
        question: "Quyền lực Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam là…",
        options: [
            "thống nhất, có sự phân công và phối hợp giữa ba cơ quan: lập pháp, hành pháp và tư pháp.",
            "thống nhất, không có sự phân công và phối hợp giữa ba cơ quan: lập pháp, hành pháp và tư pháp.",
            "không thống nhất nhưng có sự phân công và phối hợp giữa ba cơ quan: lập pháp, hành pháp và tư pháp.",
            "có sự phân chia độc lập, rõ ràng giữa ba cơ quan: lập pháp, hành pháp và tư pháp."
        ],
        correct: 0
    },
    {
        id: 435,
        question: "Nội dung nào dưới đây không phải là định hướng nhằm tiếp tục xây dựng và hoàn thiện Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam?",
        options: [
            "Xây dựng Nhà nước pháp quyền xã hội chủ nghĩa đặt dưới sự lãnh đạo của nhân dân.",
            "Cải cách thể chế và phương thức hoạt động của Nhà nước.",
            "Đấu tranh phòng, chống tham nhũng, lãng phí, thực hành tiết kiệm.",
            "Hoàn thiện hệ thống pháp luật và nâng cao hiệu lực thực thi pháp luật."
        ],
        correct: 0
    },
    {
        id: 436,
        question: "Ở Việt Nam, thuật ngữ “Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam” lần đầu tiên được nêu ra ở…",
        options: [
            "Đại hội đại biểu toàn quốc khoá VI của Đảng (1986).",
            "Hội nghị đại biểu Trung ương 3 khoá VI (1989).",
            "Đại hội đại biểu toàn quốc khoá VII (1991).",
            "Hội nghị đại biểu toàn quốc giữa nhiệm kì khoá VII (1994)."
        ],
        correct: 3
    },
    {
        id: 437,
        question: "Điền từ ngữ thích hợp vào chỗ trống: “Nước ta là nước dân chủ, nghĩa là nước nhà do nhân dân làm chủ. Nhân dân có quyền lợi làm chủ, thì phải có…. làm tròn bổn phận công dân” (Hồ Chí Minh).",
        options: [
            "trách nhiệm.",
            "nghĩa vụ.",
            "trình độ để.",
            "khả năng để."
        ],
        correct: 1
    },
    {
        id: 438,
        question: "Nhà nước pháp quyền xã hội chủ nghĩa quản lí mọi mặt của đời sống xã hội chủ yếu bằng…",
        options: [
            "đường lối, chính sách.",
            "hiến pháp, pháp luật.",
            "tuyên truyền, giáo dục.",
            "báo chí, truyền thông."
        ],
        correct: 1
    },
    {
        id: 439,
        question: "Mục tiêu nào dưới đây không phải là mục tiêu của Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam?",
        options: [
            "Phục vụ nhân dân, lắng nghe ý kiến của nhân dân.",
            "Thực hiện đầy đủ các quyền làm chủ của nhân dân.",
            "Gắn bó mật thiết với nhân dân.",
            "Kiểm soát chặt chẽ mọi mặt đời sống của nhân dân."
        ],
        correct: 3
    },
    {
        id: 440,
        question: "Yếu tố nào dưới đây là quan trọng nhất đối với việc phát huy quyền làm chủ của người dân?",
        options: [
            "Nâng cao đời sống vật chất của người dân.",
            "Nâng cao đời sống văn hoá tinh thần cho người dân.",
            "Nâng cao trình độ dân trí cho người dân.",
            "Nâng cao bản lĩnh làm chủ cho người dân"
        ],
        correct: 2
    },
    // Chương 5 - 50 câu đầu
    {
        id: 441,
        question: "Điền vào chỗ trống (...) để hoàn thành luận điểm của Đảng Cộng sản Việt Nam khi xác định chiến lược của cách mạng Việt Nam: “Tăng cường khối đại đoàn kết toàn dân tộc trên (...) liên minh giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức do Đảng lãnh đạo”.",
        options: [
            "Nền tảng",
            "Cơ sở",
            "Động lực",
            "Mục tiêu"
        ],
        correct: 0
    },
    {
        id: 442,
        question: "Điền vào chỗ trống (...) để hoàn thành quan niệm về cơ cấu xã hội: Cơ cấu xã hội là những (…) cùng toàn bộ những mối (…) do sự tác động lẫn nhau của các cộng đồng đó tạo nên.",
        options: [
            "Giai cấp … kinh tế",
            "Cộng đồng người … quan hệ xã hội",
            "Con người ... liên hệ",
            "Thiết chế … quan hệ"
        ],
        correct: 1
    },
    {
        id: 443,
        question: "Điền vào chỗ trống để hoàn thành quan niệm sau: (…) là hệ thống các giai cấp, tầng lớp xã hội tồn tại khách quan trong một chế độ xã hội nhất định, thông qua những mối quan hệ về sở hữu tư liệu sản xuất, về tổ chức quản lý quá trình sản xuất, về địa vị chính trị - xã hội… giữa các giai cấp, tầng lớp đó.",
        options: [
            "Cơ cấu xã hội – dân cư",
            "Cơ cấu xã hội – nghề nghiệp",
            "Cơ cấu xã hội – giai cấp",
            "Cơ cấu xã hội – dân tộc"
        ],
        correct: 2
    },
    {
        id: 444,
        question: "Xu hướng biến đổi của giai cấp nông dân Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội là gì?",
        options: [
            "Giai cấp nông dân chuyển sang sản xuất hàng hóa",
            "Giai cấp nông dân trở thành giai cấp giữ vai trò lãnh đạo xã hội",
            "Giai cấp nông dân chuyển dịch trở thành một bộ phận của giai cấp công nhân",
            "Giai cấp nông dân trở thành giai cấp thống trị xã hội"
        ],
        correct: 2
    },
    {
        id: 445,
        question: "Điền vào chỗ trống (...) để hoàn thành luận điểm sau: Cơ cấu xã hội – giai cấp biến đổi gắn liền và bị quy định bởi (…) ",
        options: [
            "Cơ cấu kinh tế",
            "Cơ cấu dân số",
            "Cơ cấu chính trị",
            "Cơ cấu văn hóa"
        ],
        correct: 0
    },
    {
        id: 446,
        question: "Ở Việt Nam hiện nay, cơ cấu xã hội giai cấp bao gồm:",
        options: [
            "Giai cấp công nhân",
            "Giai cấp nông dân",
            "Đội ngũ trí thức, đội ngũ doanh nhân",
            "Cả A, B, C"
        ],
        correct: 3
    },
    {
        id: 447,
        question: "Điền vào chỗ trống: Sự biến đổi của (…) tất yếu ảnh hưởng đến sự biến đổi của các cơ cấu xã hội khác và tác động đến sự biến đổi của toàn bộ cơ cấu xã hội.",
        options: [
            "Cơ cấu xã hội – giai cấp",
            "Cơ cấu xã hội - dân số",
            "Cơ cấu xã hội - nghề nghiệp",
            "Cơ cấu xã hội – dân cư"
        ],
        correct: 0
    },
    {
        id: 448,
        question: "(…) là căn cứ để xây dựng chính sách phát triển kinh tế, văn hóa, xã hội của mỗi giai đoạn.",
        options: [
            "Cơ cấu xã hội – giai cấp",
            "Cơ cấu kinh tế",
            "Cơ cấu xã hội - nghề nghiệp",
            "Cơ cấu xã hội – dân cư"
        ],
        correct: 0
    },
    {
        id: 449,
        question: "Một trong các nguyên tắc để tăng cường khối liên minh giữa giai cấp công nhân, giai cấp nông dân và tầng lớp trí thức là gì?",
        options: [
            "Lợi ích của các giai cấp, tầng lớp trong liên minh đó luôn được đảm bảo",
            "Các giai cấp, tầng lớp trong liên minh đó đều là lực lượng lao động trong xã hội",
            "Các giai cấp, tầng lớp trong liên minh đó đều cùng là lực lượng yếu thế trong xã hội",
            "Các giai cấp, tầng lớp trong liên minh đó đều được giáo dục"
        ],
        correct: 0
    },
    {
        id: 450,
        question: "Ở Việt Nam, bộ phận nào trong giai cấp công nhân sẽ ngày càng lớn mạnh cùng với sự phát triển của cuộc cách mạng công nghệ 4.0?",
        options: [
            "Công nhân truyền thống",
            "Công nhân tri thức",
            "Công nhân áo xanh",
            "Cả A, B, C đều sai"
        ],
        correct: 1
    },
    {
        id: 451,
        question: "Chọn phương án đúng nhất quan điểm của Đảng: “Tăng cường khối đại đoàn kết toàn dân tộc trên nền tảng liên minh (…) do Đảng lãnh đạo.",
        options: [
            "Công - nông",
            "Các dân tộc",
            "Công – nông – trí thức",
            "Công – nông – trí và doanh nhân"
        ],
        correct: 2
    },
    {
        id: 452,
        question: "Giai cấp công nhân Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội biến đổi theo xu hướng nào?",
        options: [
            "Xu hướng tri thức hóa",
            "Xu hướng nông dân hóa",
            "Xu hướng dân tộc hóa",
            "Xu hướng khu vực hóa"
        ],
        correct: 0
    },
    {
        id: 453,
        question: "Vì sao các giai cấp, tầng lớp trong thời kỳ quá độ lên chủ nghĩa xã hội vừa có sự đấu tranh vừa có sự liên minh?",
        options: [
            "Vì nền kinh tế trong thời kỳ quá độ lên chủ nghĩa xã hội là kinh tế thị trường",
            "Vì trình độ văn hóa của các giai cấp, tầng lớp trong thời kỳ quá độ lên chủ nghĩa xã hội có khác nhau",
            "Vì lợi ích của các giai cấp và tầng lớp trong thời kỳ quá độ lên chủ nghĩa xã hội vừa có sự đối kháng, vừa có sự thống nhất",
            "Vì hệ tư tưởng của các giai cấp, tầng lớp trong thời kỳ quá độ lên chủ nghĩa xã hội có mâu thuẫn với nhau"
        ],
        correct: 2
    },
    {
        id: 454,
        question: "Liên minh giữa giai cấp công nhân với giai cấp nông dân và tầng lớp trí thức trong thời kỳ quá độ lên chủ nghĩa xã hội biểu hiện trên lĩnh vực chính trị là gì?",
        options: [
            "Đoàn kết, hợp tác để xây dựng hệ thống chính trị xã hội chủ nghĩa, xây dựng nền dân chủ xã hội chủ nghĩa",
            "Đoàn kết, hợp tác để xây dựng nền kinh tế thị trường dưới sự quản lý của nhà nước xã hội chủ nghĩa",
            "Đoàn kết, hợp tác để xây dựng nền văn hóa tiên tiến, đậm đà bản sắc văn hóa dân tộc",
            "Đoàn kết, hợp tác để cùng lao động sản xuất, xây dựng quan hệ sản xuất mới"
        ],
        correct: 0
    },
    {
        id: 455,
        question: "Yếu tố nào có ý nghĩa quyết định tác động đến sự biến đổi của cơ cấu xã hội - giai cấp?",
        options: [
            "Cơ cấu kinh tế",
            "Cơ cấu văn hóa",
            "Cơ cấu chính trị",
            "Cơ cấu xã hội"
        ],
        correct: 0
    },
    {
        id: 456,
        question: "Yếu tố nào quy định sự đa dạng và phức tạp của cơ cấu xã hội - giai cấp trong thời kỳ quá độ lên chủ nghĩa xã hội?",
        options: [
            "Sự đa dạng và phức tạp của đời sống văn hóa tinh thần",
            "Sự đa dạng và phức tạp của tình hình kinh tế, chính trị thế giới",
            "Sự đa dạng và phức tạp của cơ cấu kinh tế",
            "Sự đa dạng và phức tạp của mối quan hệ giữa các cộng đồng xã hội"
        ],
        correct: 2
    },
    {
        id: 457,
        question: "Nguyên nhân cơ bản dẫn đến sự liên minh giữa các giai cấp, tầng lớp trong thời kỳ quá độ lên chủ nghĩa xã hội là gì?",
        options: [
            "Sự thống nhất về lợi ích giữa các giai cấp, tầng lớp trong xã hội",
            "Sự thống nhất về trình độ học vấn và lập trường chính trị của các giai cấp, tầng lớp trong xã hội",
            "Sự thống nhất về cơ cấu tổ chức của mỗi giai cấp, tầng lớp và đường lối của giai cấp cầm quyền",
            "Sự thống nhất về lịch sử hình thành và vai trò của các giai cấp, tầng lớp trong xã hội"
        ],
        correct: 0
    },
    {
        id: 458,
        question: "Vì sao giai cấp công nhân, giai cấp nông dân và các tầng lớp lao động lại liên minh với nhau trong thời kỳ quá độ lên chủ nghĩa xã hội?",
        options: [
            "Vì giai cấp công nhân, giai cấp nông dân và các tầng lớp lao động có sự thống nhất về lợi ích và mục đích",
            "Vì giai cấp công nhân, giai cấp nông dân và các tầng lớp lao động đều có ý thức giác ngộ cách mạng cao",
            "Vì giai cấp công nhân, giai cấp nông dân và các tầng lớp lao động đều có tổ chức đảng của mình",
            "Vì giai cấp công nhân, giai cấp nông dân và các tầng lớp lao động đều có trình độ văn hóa cao"
        ],
        correct: 0
    },
    {
        id: 459,
        question: "Điền vào chỗ trống để hoàn thiện luận điểm sau: Đấu tranh giai cấp và liên minh giai cấp là (...) của quan hệ giai cấp trong một chế độ xã hội nhất định.",
        options: [
            "Hai mặt",
            "Hai giai đoạn",
            "Nguyên nhân",
            "Mục tiêu"
        ],
        correct: 0
    },
    {
        id: 460,
        question: "Cơ cấu xã hội là gì?",
        options: [
            "Là tổng thể các chế độ xã hội trong lịch sử và mối quan hệ giữa các chế độ xã hội đó",
            "Là tổng thể những cộng đồng người cùng toàn bộ các quan hệ xã hội do sự tác động lẫn nhau của các cộng đồng đó tạo nên",
            "Là tổng thể các hình thái kinh tế - xã hội và sự thay thế các hình thái kinh tế - xã hội trong lịch sử",
            "Là tổng thể các lực lượng lao động trong xã hội và mối quan hệ giữa các lực lượng đó trong nền sản xuất của xã hội"
        ],
        correct: 1
    },
    {
        id: 461,
        question: "Cơ cấu xã hội - giai cấp là gì?",
        options: [
            "Là tổng thể các giai cấp, tầng lớp xã hội tồn tại khách quan trong một chế độ xã hội nhất định cùng với mối quan hệ giữa các giai cấp, tầng lớp đó",
            "Là tổng thể các giai cấp và tầng lớp có sự thống nhất về lợi ích và sự liên minh giữa các giai cấp, tầng lớp đó",
            "Là tổng thể các giai cấp và tầng lớp có sự đấu tranh, dẫn đến sự xích lại gần nhau giữa các giai cấp",
            "Là tổng thể các cộng đồng người tồn tại khách quan trong một chế độ xã hội nhất định, cùng với mối quan hệ giữa các cộng đồng đó"
        ],
        correct: 0
    },
    {
        id: 462,
        question: "Vị trí của cơ cấu xã hội - giai cấp trong hệ thống cơ cấu xã hội là gì?",
        options: [
            "Cơ cấu xã hội - giai cấp có vị trí ngang hàng với loại hình cơ cấu xã hội khác trong hệ thống cơ cấu xã hội",
            "Cơ cấu xã hội - giai cấp hoàn toàn độc lập với các loại hình cơ cấu xã hội khác trong hệ thống xã hội",
            "Cơ cấu xã hội - giai cấp giữ vị trí trung tâm trong cơ cấu xã hội",
            "Cơ cấu xã hội - giai cấp đối kháng với các loại hình cơ cấu xã hội khác trong hệ thống cơ cấu xã hội"
        ],
        correct: 2
    },
    {
        id: 463,
        question: "Căn cứ để nhận diện cơ cấu xã hội - giai cấp là gì?",
        options: [
            "Quan hệ sản xuất",
            "Lực lượng sản xuất",
            "Ý thức xã hội",
            "Kiến trúc thượng tầng"
        ],
        correct: 0
    },
    {
        id: 464,
        question: "Ở Việt Nam hiện nay, giai cấp nào là chủ thể của quá trình xây dựng nông thôn mới?",
        options: [
            "Giai cấp nông dân",
            "Giai cấp công nhân",
            "Đội ngũ trí thức",
            "Đội ngũ doanh nhân"
        ],
        correct: 0
    },
    {
        id: 465,
        question: "Điền vào chỗ trống quan điểm của Đảng: “Phát triển (…) lớn mạnh về số lượng và chất lượng, có tinh thần cống hiến cho dân tộc, có chuẩn mực văn hóa, đạo đức tiến bộ và trình độ quản trị, kinh doanh giỏi.”",
        options: [
            "Giai cấp nông dân",
            "Giai cấp công nhân",
            "Đội ngũ trí thức",
            "Đội ngũ doanh nhân"
        ],
        correct: 3
    },
    {
        id: 466,
        question: "Điền vào chỗ trống: Ở Việt Nam hiện nay, giai cấp công nhân có vai trò quan trọng đặc biệt, là giai cấp (…) cách mạng thông qua đội tiền phong là ĐCS Việt Nam.",
        options: [
            "Quản lý",
            "Lãnh đạo",
            "Tiên tiến",
            "Đi đầu"
        ],
        correct: 1
    },
    {
        id: 467,
        question: "Giai cấp nào có vai trò là lực lượng đi đầu trong sự nghiệp CNH, HĐH đất nước?",
        options: [
            "Giai cấp nông dân",
            "Giai cấp công nhân",
            "Đội ngũ trí thức",
            "Đội ngũ doanh nhân"
        ],
        correct: 1
    },
    {
        id: 468,
        question: "“Đẩy mạnh công nghiệp hóa, hiện đại hóa; giải quyết tốt mối quan hệ giữa tăng trưởng kinh tế với đảm bảo tiến bộ, công bằng xã hội tạo môi trường và điều kiện thúc đẩy biến đổi cơ cấu xã hội - giai cấp theo hướng tích cực”, đó là...",
        options: [
            "Phương hướng liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH ở Việt Nam",
            "Nội dung liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH ở Việt Nam",
            "Giải pháp liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH ở Việt Nam",
            "Phương pháp liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH ở Việt Nam"
        ],
        correct: 0
    },
    {
        id: 469,
        question: "“Thực hiện đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước gắn với phát triển kinh tế tri thức theo định hướng xã hội chủ nghĩa”, đó là một…",
        options: [
            "Phương hướng liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH ở Việt Nam",
            "Nội dung kinh tế của liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH ở Việt Nam",
            "Nội dung chính trị của liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH ở Việt Nam",
            "Phương pháp liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH ở Việt Nam"
        ],
        correct: 1
    },
    {
        id: 470,
        question: "“Xây dựng Nhà nước pháp quyền xã hội chủ nghĩa, từng bước hoàn thiện nền dân chủ xã hội chủ nghĩa”, đó là một…",
        options: [
            "Phương hướng liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH ở Việt Nam",
            "Nội dung kinh tế của liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH ở Việt Nam",
            "Nội dung chính trị của liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH ở Việt Nam",
            "Phương pháp liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH ở Việt Nam"
        ],
        correct: 2
    },
    {
        id: 471,
        question: "Những cộng đồng người cùng toàn bộ những mối quan hệ xã hội do sự tác động lẫn nhau của các cộng đồng ấy tạo nên là nội dung thể hiện khái niệm nào dưới đây?",
        options: [
            "Cơ cấu xã hội.",
            "Dân tộc.",
            "Dân cư.",
            "Cộng đồng."
        ],
        correct: 0
    },
    {
        id: 472,
        question: "Tập hợp những cộng đồng người hình thành, phát triển theo các nghề nghiệp khác nhau là kết quả của sự phát triển sản xuất, phân công lao động là nội dung thể hiện khái niệm nào dưới đây?",
        options: [
            "Cơ cấu xã hội - kinh tế.",
            "Cơ cấu xã hội - nghề nghiệp.",
            "Cơ cấu xã hội - nhân khẩu.",
            "Cơ cấu xã hội - dân cư."
        ],
        correct: 1
    },
    {
        id: 473,
        question: "Tập hợp những cộng đồng người có cùng đức tin tôn giáo dựa trên nền tảng giáo lí, giáo luật và thực hành các nghi lễ tôn giáo là…",
        options: [
            "cơ cấu xã hội - kinh tế.",
            "cơ cấu xã hội — tôn giáo.",
            "cơ cấu xã hội - nhân khẩu.",
            "cơ cấu xã hội - dân cư."
        ],
        correct: 1
    },
    {
        id: 474,
        question: "Tập hợp những cộng đồng người được hình thành lâu dài trong lịch sử và tương đối ổn định, gắn kết chặt chẽ với nhau về kinh tế, lãnh thổ, văn hoá, ngôn ngữ là nội dung thể hiện khái niệm nào dưới đây?",
        options: [
            "Cơ cấu xã hội - kinh tế.",
            "Cơ cấu xã hội - nghề nghiệp.",
            "Cơ cấu xã hội - nhân khẩu.",
            "Cơ cấu xã hội — dân tộc."
        ],
        correct: 3
    },
    {
        id: 475,
        question: "Bộ phận cơ bản và quan trọng nhất trong cơ cấu xã hội, liên quan trực tiếp đến các đảng phái chính trị, nhà nước, sở hữu tư liệu sản xuất cũng như địa vị xã hội của con người trong hệ thống sản xuất, tổ chức lao động và phân phối lợi ích xã hội là…",
        options: [
            "cơ cấu xã hội - giai cấp.",
            "cơ cấu xã hội - nghề nghiệp.",
            "cơ cấu xã hội - nhân khẩu.",
            "cơ cấu xã hội - dân tộc."
        ],
        correct: 0
    },
    {
        id: 476,
        question: "Để dự báo xu hướng vận động và phát triển của dân số ở những giai đoạn lịch sử nhất định và tác động của nó đến sự phát triển mọi mặt của một quốc gia, cần nghiên cứu cơ cấu xã hội nào dưới đây?",
        options: [
            "Cơ cấu xã hội - nghề nghiệp.",
            "Cơ cấu xã hội - dân số.",
            "Cơ cấu xã hội - tôn giáo.",
            "Cơ cấu xã hội - dân tộc."
        ],
        correct: 1
    },
    {
        id: 477,
        question: "Trong xã hội có giai cấp, cơ cấu nào dưới đây có vị trí quyết định nhất, chi phối các loại hình cơ cấu xã hội khác?",
        options: [
            "Cơ cấu xã hội - nghề nghiệp.",
            "Cơ cấu xã hội - dân số.",
            "Cơ cấu xã hội - giai cấp.",
            "Cơ cấu xã hội - dân cư."
        ],
        correct: 2
    },
    {
        id: 478,
        question: "Tổng thể các giai cấp, tầng lớp xã hội tồn tại khách quan trong một chế độ xã hội nhất định, thông qua những mối quan hệ về sở hữu tư liệu sản xuất, về tổ chức quản lí quá trình sản xuất, về địa vị chính trị - xã hội,... giữa các giai cấp và tầng lớp, đó là nội dung thể hiện khái niệm nào dưới đây?",
        options: [
            "Cơ cấu xã hội - kinh tế.",
            "Cơ cấu xã hội - nghề nghiệp.",
            "Cơ cấu xã hội - nhân khẩu.",
            "Cơ cấu xã hội - giai cấp."
        ],
        correct: 3
    },
    {
        id: 479,
        question: "Cơ cấu xã hội nào dưới đây đề cập tới mối quan hệ về sở hữu tư liệu sản xuất, về tổ chức quản lí, về địa vị chính trị - xã hội?",
        options: [
            "Cơ cấu xã hội - nghề nghiệp.",
            "Cơ cấu xã hội - dân cư.",
            "Cơ cấu xã hội - tôn giáo.",
            "Cơ cấu xã hội - giai cấp"
        ],
        correct: 3
    },
    {
        id: 480,
        question: "Để xây dựng chính sách phát triển kinh tế, văn hoá, xã hội phù hợp cho từng giai cấp, tầng lớp trong từng giai đoạn lịch sử cụ thể cần căn cứ vào…",
        options: [
            "cơ cấu xã hội - nghề nghiệp.",
            "cơ cấu xã hội - dân cư.",
            "cơ cấu xã hội - tôn giáo.",
            "cơ cấu xã hội - giai cấp."
        ],
        correct: 3
    },
    {
        id: 481,
        question: "Nội dung nào dưới đây không phải là sự biến đổi có tính quy luật của cơ cấu xã hội - giai cấp trong thời kì quá độ lên chủ nghĩa xã hội?",
        options: [
            "Cơ cấu xã hội - giai cấp biến đổi gắn liền và bị quy định bởi cơ cấu kinh tế.",
            "Cơ cấu xã hội - giai cấp biến đổi phức tạp, đa dạng, làm xuất hiện các tầng lớp xã hội mới.",
            "Cơ cấu xã hội - giai cấp biến đổi trong mối quan hệ vừa đấu tranh, vừa liên minh, dẫn đến sự xích lại gần nhau giữa các giai tầng trong xã hội.",
            "Cơ cấu xã hội - giai cấp biến đổi và chịu sự tác động của sự biến đổi dân số, tôn giáo."
        ],
        correct: 3
    },
    {
        id: 482,
        question: "Thời kì quá độ lên chủ nghĩa xã hội có cơ cấu xã hội - giai cấp với nhiều giai cấp, tầng lớp khác nhau vì…",
        options: [
            "tồn tại nhiều hình thức sở hữu và nhiều thành phần kinh tế.",
            "tồn tại nhiều nghề nghiệp và phân công lao động khác nhau.",
            "tồn tại nhiều đức tin tôn giáo.",
            "tồn tại nhiều dân tộc khác nhau."
        ],
        correct: 0
    },
    {
        id: 483,
        question: "Giai cấp nào dưới đây giữ vai trò chủ đạo trong cơ cấu xã hội - giai cấp?",
        options: [
            "Công nhân.",
            "Nông dân.",
            "Trí thức.",
            "Doanh nhân."
        ],
        correct: 0
    },
    {
        id: 484,
        question: "Sự liên kết, hợp tác, hỗ trợ nhau giữa các giai cấp, tầng lớp chủ yếu có lợi ích cơ bản thống nhất và cũng có thể có lợi ích cơ bản đối kháng là nội dung thể hiện khái niệm nào dưới đây?",
        options: [
            "Đấu tranh giai cấp.",
            "Liên minh giai cấp, tầng lớp.",
            "Liên hiệp giai cấp, tầng lớp.",
            "Đoàn kết giai cấp, tầng lớp."
        ],
        correct: 1
    },
    {
        id: 485,
        question: "Sự biến đổi của cơ cấu xã hội - giai cấp gắn liền và được quy định bởi sự biến đổi của cơ cấu nào dưới đây?",
        options: [
            "Cơ cấu dân số.",
            "Cơ cấu kinh tế.",
            "Cơ cấu dân tộc.",
            "Cơ cấu dân cư."
        ],
        correct: 1
    },
    {
        id: 486,
        question: "“Trong thời đại chuyên chính vô sản, các giai cấp vẫn tồn tại, nhưng bộ mặt của mỗi một giai cấp đều có thay đổi, quan hệ qua lại giữa các giai cấp cũng biến đổi. Cuộc đấu tranh giai cấp chưa chấm dứt dưới thời chuyên chính vô sản, nó chỉ diễn biến ra dưới những hình thức khác mà thôi” là câu nói của…",
        options: [
            "C. Mác.",
            "Ph. Ăngghen.",
            "V.I. Lênin.",
            "Hồ Chí Minh."
        ],
        correct: 2
    },
    {
        id: 487,
        question: "Khi khẳng định “một hình thức đặc biệt của liên minh giai cấp giữa giai cấp vô sản, đội tiên phong của người lao động, với đông đảo những tầng lớp lao động không phải vô sản”, V.I. Lênin muốn nói đến khái niệm nào dưới đây?",
        options: [
            "Chuyên chính vô sản.",
            "Nhà nước.",
            "Hiệp hội.",
            "Công đoàn."
        ],
        correct: 0
    },
    {
        id: 488,
        question: "Luận điểm: “Nếu không có một sự ủng hộ của đa số những người lao động đối với những người vô sản, không thể nghĩ được đến việc duy trì chính quyền đó...” là câu nói của ai?",
        options: [
            "C. Mác.",
            "Ph. Ăngghen.",
            "V.I.Lênin.",
            "Hồ Chí Minh."
        ],
        correct: 2
    },
    {
        id: 489,
        question: "Giai cấp, tầng lớp nào dưới đây được coi là “người bạn đồng minh tự nhiên” của giai cấp công nhân?",
        options: [
            "Tư sản.",
            "Nông dân.",
            "Trí thức.",
            "Doanh nhân."
        ],
        correct: 1
    },
    {
        id: 490,
        question: "Trong luận điểm: “Trước sự liên minh của các đại biểu khoa học, giai cấp vô sản và giới kĩ thuật, không một thế lực đen tối nào đứng vững được”, V.I. Lênin đã nhấn mạnh tới vai trò của giai cấp, tầng lớp nào dưới đây trong khối liên minh giai cấp?",
        options: [
            "Trí thức.",
            "Doanh nhân.",
            "Tư sản.",
            "Nông dân."
        ],
        correct: 0
    },
    // Chương 5 - Tiếp (30 câu cuối)
    {
        id: 491,
        question: "Theo V.I. Lênin, để giai cấp vô sản giữ được vai trò lãnh đạo và chính quyền nhà nước, nguyên tắc cao nhất của chuyên chính là duy trì khối liên minh giữa…",
        options: [
            "giai cấp vô sản và tầng lớp doanh nhân.",
            "giai cấp vô sản và nông dân.",
            "giai cấp nông dân và giai cấp tư sản.",
            "tầng lớp doanh nhân và đội ngũ trí thức."
        ],
        correct: 1
    },
    {
        id: 492,
        question: "Trong quá trình xây dựng chủ nghĩa xã hội, liên minh giữa giai cấp công nhân, giai cấp nông dân và tầng lớp trí thức trong lĩnh vực nào dưới đây giữ vai trò quyết định?",
        options: [
            "Chính trị.",
            "Kinh tế.",
            "Văn hoá.",
            "Tư tưởng."
        ],
        correct: 1
    },
    {
        id: 493,
        question: "Yếu tố nào dưới đây quyết định sự liên minh giữa giai cấp công nhân, giai cấp nông dân và tầng lớp trí thức?",
        options: [
            "Mong muốn của giai cấp công nhân.",
            "Cùng một kẻ thù là giai cấp tư sản.",
            "Sự thống nhất về lợi ích căn bản.",
            "Mục tiêu về chính trị của giai cấp công nhân."
        ],
        correct: 2
    },
    {
        id: 494,
        question: "Câu nói “Vô sản tất cả các nước và các dân tộc bị áp bức, đoàn kết lại” là của…",
        options: [
            "C. Mác.",
            "Ph.Ăngghen.",
            "V.I. Lênin.",
            "Hồ Chí Minh."
        ],
        correct: 2
    },
    {
        id: 495,
        question: "Trong thời kì quá độ lên chủ nghĩa xã hội, các giai cấp, tầng lớp liên minh với nhau trên những lĩnh vực nào dưới đây?",
        options: [
            "Kinh tế, chính trị, xã hội.",
            "Kinh tế, chính trị, tôn giáo,",
            "Kinh tế, chính trị, văn hoá - xã hội.",
            "Kinh tế, văn hoá, xã hội."
        ],
        correct: 2
    },
    {
        id: 496,
        question: "Lực lượng nào dưới đây được Đảng ta coi là lực lượng đặc biệt và chủ trương xây dựng thành lực lượng vững mạnh?",
        options: [
            "Trí thức.",
            "Doanh nhân,",
            "Thanh niên.",
            "Công nhân."
        ],
        correct: 1
    },
    {
        id: 497,
        question: "Trong thời kì quá độ lên chủ nghĩa xã hội, giai cấp, tầng lớp nào dưới đây có xu hướng giảm dần về số lượng và tỉ lệ trong cơ cấu xã hội - giai cấp?",
        options: [
            "Nông dân.",
            "Trí thức,",
            "Công nhân.",
            "Doanh nhân."
        ],
        correct: 0
    },
    {
        id: 498,
        question: "Đảng ta xác định xây dựng vững mạnh giai cấp, tầng lớp nào dưới đây là trực tiếp nâng tầm trí tuệ của dân tộc, sức mạnh của đất nước, nâng cao năng lực lãnh đạo của Đảng và chất lượng hoạt động của hệ thống chính trị?",
        options: [
            "Trí thức.",
            "Công nhân.",
            "Doanh nhân.",
            "Thanh niên."
        ],
        correct: 0
    },
    {
        id: 499,
        question: "Giai cấp, tầng lớp nào dưới đây được coi là rường cột của nước nhà, chủ nhân tương lai của đất nước?",
        options: [
            "Thanh niên.",
            "Công nhân.",
            "Trí thức.",
            "Doanh nhân."
        ],
        correct: 0
    },
    {
        id: 500,
        question: "Xét dưới góc độ kinh tế, nội dung nào dưới đây không phải là nguyên nhân của liên minh giai cấp trong thời kì quá độ lên chủ nghĩa xã hội?",
        options: [
            "Yêu cầu khách quan của quá trình công nghiệp hoá, hiện đại hoá.",
            "Sự chuyển dịch cơ cấu kinh tế.",
            "Nhu cầu lợi ích kinh tế của các giai cấp, tầng lớp.",
            "Yêu cầu khách quan của đấu tranh giành chính quyền."
        ],
        correct: 3
    },
    {
        id: 501,
        question: "Sự biến đổi đa dạng, phức tạp của cơ cấu xã hội - giai cấp ở Việt Nam trong thời kì quá độ lên chủ nghĩa xã hội là do…",
        options: [
            "duy trì cơ chế kế hoạch hoá tập trung quan liêu bao cấp.",
            "sự đa dạng của văn hoá, tôn giáo, tín ngưỡng.",
            "sự đa dạng về tộc người.",
            "chuyển đổi cơ chế kinh tế kế hoạch hoá tập trung sang kinh tế thị trường."
        ],
        correct: 3
    },
    {
        id: 502,
        question: "Giai cấp, tầng lớp nào hiện nay không còn trong cơ cấu xã hội - giai cấp ở Việt Nam?",
        options: [
            "Nông dân.",
            "Trí thức.",
            "Địa chủ.",
            "Công nhân."
        ],
        correct: 2
    },
    {
        id: 503,
        question: "Nội dung nào dưới đây không phải là vai trò của giai cấp công nhân trong thời kì quá độ lên chủ nghĩa xã hội ở Việt Nam?",
        options: [
            "Là giai cấp lãnh đạo.",
            "Là giai cấp đại diện cho phương thức sản xuất mới.",
            "Là lực lượng lao động sáng tạo đặc biệt.",
            "Là lực lượng nòng cốt trong khối liên minh giai cấp."
        ],
        correct: 2
    },
    {
        id: 504,
        question: "Trong thời kì quá độ lên chủ nghĩa xã hội ở Việt Nam, giai cấp, tầng lớp nào dưới đây được coi là lực lượng lao động sáng tạo đặc biệt quan trọng?",
        options: [
            "Nông dân.",
            "Doanh nhân.",
            "Trí thức.",
            "Công nhân."
        ],
        correct: 2
    },
    {
        id: 505,
        question: "Vấn đề liên minh giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức, được Đảng ta khẳng định lần đầu tiên tại…",
        options: [
            "Đại hội đại biểu toàn quốc lần thứ II (1951).",
            "Đại hội đại biểu toàn quốc lần thứ III (1960).",
            "Đại hội đại biểu toàn quốc lần thứ IV (1976).",
            "Đại hội đại biểu toàn quốc lần thứ V (1982)."
        ],
        correct: 0
    },
    {
        id: 506,
        question: "Hiện nay ở nước ta, giai cấp, tầng lớp nào dưới đây giữ vai trò lãnh đạo khối liên minh?",
        options: [
            "Công nhân.",
            "Doanh nhân,",
            "Trí thức.",
            "Nông dân."
        ],
        correct: 0
    },
    {
        id: 507,
        question: "Liên minh giữa các giai cấp, tầng lớp trong thời kì quá độ lên chủ nghĩa xã hội phải dựa trên lập trường tư tưởng chính trị của giai cấp, tầng lớp nào dưới đây?",
        options: [
            "Công nhân.",
            "Doanh nhân.",
            "Trí thức.",
            "Nông dân."
        ],
        correct: 0
    },
    {
        id: 508,
        question: "Nội dung nào dưới đây không phải là nội dung chính trị của liên minh giai cấp, tầng lớp trong thời kì quá độ lên chủ nghĩa xã hội ở Việt Nam?",
        options: [
            "Giữ vững vai trò lãnh đạo của Đảng Cộng sản Việt Nam.",
            "Bảo vệ vững chắc chế độ chính trị.",
            "Tăng cường các hình thức giao lưu hợp tác liên kết giữa công nghiệp - nông nghiệp - khoa học công nghệ.",
            "Xây dựng hoàn thiện nền dân chủ xã hội chủ nghĩa."
        ],
        correct: 2
    },
    {
        id: 509,
        question: "Nội dung kinh tế xuyên suốt của thời kì quá độ lên chủ nghĩa xã hội ở Việt Nam là",
        options: [
            "đẩy mạnh công nghiệp hoá, hiện đại hoá đất nước gắn với phát triển kinh tế tri thức theo định hướng xã hội chủ nghĩa.",
            "xác định đúng tiềm lực kinh tế và nhu cầu kinh tế của các giai cấp, tầng lớp và toàn xã hội.",
            "chuyển giao và ứng dụng khoa học kĩ thuật và công nghệ hiện đại vào sản xuất.",
            "xác định đúng cơ cấu kinh tế, phát triển kinh tế thị trường."
        ],
        correct: 0
    },
    {
        id: 510,
        question: "Nội dung nào dưới đây không phải là nội dung kinh tế của liên minh giai cấp, tầng lớp trong thời kì quá độ lên chủ nghĩa xã hội ở Việt Nam?",
        options: [
            "Xác định đúng tiềm lực kinh tế và nhu cầu kinh tế của các giai cấp, tầng lớp.",
            "Xác định đúng cơ cấu kinh tế.",
            "Xây dựng nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân.",
            "Chuyển giao và ứng dụng khoa học kĩ thuật và công nghệ hiện đại vào sản xuất kinh doanh."
        ],
        correct: 2
    },
    {
        id: 511,
        question: "Cần phải giữ vững vai trò lãnh đạo của tổ chức nào dưới đây đối với khối liên minh và toàn xã hội trên lĩnh vực chính trị trong thời kì quá độ lên chủ nghĩa xã hội ở nước ta?",
        options: [
            "Quốc hội.",
            "Đảng Cộng sản Việt Nam.",
            "Mặt trận Tổ quốc Việt Nam.",
            "Chính phủ."
        ],
        correct: 1
    },
    {
        id: 512,
        question: "Nội dung nào dưới đây không phải là nội dung văn hoá - xã hội của liên minh giai cấp, tầng lớp trong thời kì quá độ lên chủ nghĩa xã hội ở Việt Nam?",
        options: [
            "Thực hiện xoá đói giảm nghèo.",
            "Nâng cao dân trí, thực hiện tốt an sinh xã hội.",
            "Chống âm mưu diễn biến hoà bình của các thế lực thù địch và phản động.",
            "Chống các biểu hiện tiêu cực và tệ nạn xã hội."
        ],
        correct: 2
    },
    {
        id: 513,
        question: "Theo quan điểm của chủ nghĩa Mác — Lênin, nội dung nào dưới đây có vai trò quyết định đối với sự biến đổi cơ cấu xã hội?",
        options: [
            "Sản xuất kinh tế.",
            "Sự đa dạng tộc người.",
            "Đời sống văn hoá, tinh thần.",
            "Tôn giáo, tín ngưỡng."
        ],
        correct: 0
    },
    {
        id: 514,
        question: "Nội dung nào dưới đây không phải là mục đích của việc nghiên cứu cơ cấu xã hội - giai cấp?",
        options: [
            "Làm rõ vị trí, vai trò của các giai cấp, tầng lớp trong xã hội.",
            "Nhận diện xu hướng biến đổi, phát triển của các giai cấp, tầng lớp.",
            "Chỉ ra xu hướng biến đổi trong quan hệ các dân tộc trên tất cả các lĩnh vực.",
            "Để xây dựng hệ thống chính sách xã hội phù hợp với từng giai cấp, tầng lớp."
        ],
        correct: 2
    },
    {
        id: 515,
        question: "Nội dung nào dưới đây là nội dung chính trị của liên minh giai cấp, tầng lớp trong thời kì quá độ lên chủ nghĩa xã hội ở Việt Nam?",
        options: [
            "Chuyển giao và ứng dụng khoa học công nghệ hiện đại vào quá trình sản xuất.",
            "Phát triển giáo dục và đào tạo, nâng cao dân trí.",
            "Đảm bảo các quyền dân chủ, quyền con người của công dân.",
            "Nâng cao chất lượng sống cho nhân dân, thực hiện tốt an sinh xã hội."
        ],
        correct: 2
    },
    {
        id: 516,
        question: "Nội dung nào dưới đây không phải là phương hướng cơ bản để xây dựng cơ cấu xã hội - giai cấp và tăng cường liên minh giai cấp, tầng lớp trong thòi kì quá độ lên chủ nghĩa xã hội ở Việt Nam hiện nay?",
        options: [
            "Đẩy mạnh công nghiệp hoá, hiện đại hoá.",
            "Xây dựng và thực hiện hệ thống chính sách xã hội.",
            "Chủ động, tích cực hội nhập kinh tế quốc tế.",
            "Hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa."
        ],
        correct: 2
    },
    {
        id: 517,
        question: "Giai cấp, tầng lớp nào có sự biến đổi cả về cơ cấu và vai trò trong bối cảnh đẩy mạnh công nghiệp hoá, hiện đại hoá gắn với phát triển kinh tế tri thức?",
        options: [
            "Công nhân.",
            "Nông dân.",
            "Doanh nhân.",
            "Trí thức."
        ],
        correct: 2
    },
    {
        id: 518,
        question: "Nước ta hiện nay có sự phát triển nhanh chóng cả về số lượng và quy mô với vai trò không ngừng tăng lên gắn với nền kinh tế thị trường định hướng xã hội chủ nghĩa của lực lượng…",
        options: [
            "công nhân.",
            "nông dân.",
            "doanh nhân.",
            "trí thức."
        ],
        correct: 2
    },
    {
        id: 519,
        question: "Lực lượng nào ở nước ta hiện nay có sự đóng góp tích cực vào việc thực hiện chiến lược phát triển kinh tế - xã hội, giải quyết việc làm cho người lao động và tham gia giải quyết các vấn đề an sinh xã hội, xoá đói, giảm nghèo?",
        options: [
            "Công nhân.",
            "Nông dân.",
            "Doanh nhân.",
            "Trí thức."
        ],
        correct: 2
    },
    {
        id: 520,
        question: "Giữ vững lập trường chính trị - tư tưởng của giai cấp công nhân, vai trò lãnh đạo của Đảng Cộng sản Việt Nam, kiên định mục tiêu, con đường: độc lập dân tộc và chủ nghĩa xã hội là nội dung của liên minh giai cấp trên lĩnh vực…",
        options: [
            "chính trị.",
            "kinh tế.",
            "văn hoá.",
            "xã hội."
        ],
        correct: 0
    },
    {
        id: 521,
        question: "Thực hiện đẩy mạnh công nghiệp hoá, hiện đại hoá đất nước gắn với phát triển kinh tế tri thức theo định hướng xã hội chủ nghĩa là nội dung của liên minh giai cấp ở Việt Nam trên lĩnh vực…",
        options: [
            "chính trị.",
            "kinh tế.",
            "văn hoá.",
            "xã hội."
        ],
        correct: 1
    },
    {
        id: 522,
        question: "Nâng cao đời sống vật chất, tinh thần cho công nhân, nông dân, trí thức và các tầng lớp nhân dân; chăm sóc sức khoẻ và nâng cao chất lượng sống cho nhân dân; nâng cao dân trí, thực hiện tốt an sinh xã hội là nội dung của liên minh giai cấp ở Việt Nam trên lĩnh vực…",
        options: [
            "chính trị.",
            "kinh tế.",
            "văn hoá.",
            "xã hội."
        ],
        correct: 3
    },
    // Chương 6 - 50 câu đầu
    {
        id: 523,
        question: "Chỉ ra luận điểm KHÔNG chính xác?",
        options: [
            "“Liên hiệp giai cấp công nhân các dân tộc” là nội dung quan trọng nhất trong Cương lĩnh dân tộc của chủ nghĩa Mác - Lênin, bởi nó là giải pháp hữu hiệu để thực hiện quyền bình đẳng và quyền tự quyết dân tộc",
            "“Liên hiệp giai cấp công nhân các dân tộc” là nội dung quan trọng nhất trong Cương lĩnh dân tộc của chủ nghĩa Mác - Lênin, bởi nó là hạt nhân đoàn kết các lực lượng cách mạng trong đấu tranh chống áp bức, bóc lột",
            "“Liên hiệp giai cấp công nhân các dân tộc” là nội dung quan trọng nhất trong Cương lĩnh dân tộc của chủ nghĩa Mác - Lênin, bởi nó thể hiện rõ lập trường của giai cấp công nhân trong giải quyết quan hệ dân tộc",
            "“Liên hiệp giai cấp công nhân các dân tộc” là nội dung quan trọng nhất trong Cương lĩnh dân tộc của chủ nghĩa Mác - Lênin, bởi nó thể hiện rõ xu thế toàn cầu hóa và khu vực hóa trong vấn đề dân tộc"
        ],
        correct: 3
    },
    {
        id: 524,
        question: "Theo Chủ tịch Hồ Chí Minh, con đường để đấu tranh cho độc lập, tự do, chủ quyền của dân tộc Việt Nam là gì?",
        options: [
            "Cách mạng phong kiến",
            "Cách mạng tư sản",
            "Cách mạng vô sản",
            "Cách mạng không ngừng"
        ],
        correct: 2
    },
    {
        id: 525,
        question: "Điền vào chỗ trống (...) để chính xác hóa một đặc trưng của mô hình chủ nghĩa xã hội ở Việt Nam: Các (...) trong cộng đồng Việt Nam bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển.",
        options: [
            "Tổ chức",
            "Gia đình",
            "Tôn giáo",
            "Dân tộc"
        ],
        correct: 3
    },
    {
        id: 526,
        question: "Đặc điểm chủ yếu của các dân tộc ở Việt Nam là gì?",
        options: [
            "Mỗi dân tộc có bản sắc văn hóa riêng, góp phần tạo nên sự phong phú, đa dạng của nền văn hóa Việt Nam thống nhất",
            "Mỗi dân tộc đều có khu vực lãnh thổ riêng",
            "Mỗi dân tộc đều có chế độ chính trị riêng",
            "Mỗi dân tộc đều có nhà nước riêng"
        ],
        correct: 0
    },
    {
        id: 527,
        question: "Đoàn kết dân tộc có vị trí như thế nào trong sự nghiệp cách mạng Việt Nam?",
        options: [
            "Vị trí thứ yếu",
            "Vị trí hàng đầu",
            "Vị trí chủ yếu",
            "Vị trí xác định"
        ],
        correct: 1
    },
    {
        id: 528,
        question: "Đoàn kết dân tộc cần được thực hiện gắn liền với điều gì?",
        options: [
            "Chống tư tưởng kỳ thị, chia rẽ dân tộc",
            "Chống tư tưởng độc lập dân tộc",
            "Xóa bỏ sự khác biệt giữa các dân tộc",
            "Xóa bỏ bản sắc riêng của các dân tộc"
        ],
        correct: 0
    },
    {
        id: 529,
        question: "Ở phương Tây sự hình thành dân tộc gắn liền với sự ra đời của chế độ...",
        options: [
            "Nguyên thủy",
            "Chiếm hữu nô lệ",
            "Tư bản chủ nghĩa",
            "Phong kiến"
        ],
        correct: 2
    },
    {
        id: 530,
        question: "Trong chủ nghĩa xã hội, quan hệ dân tộc có xu hướng như thế nào?",
        options: [
            "Ngày càng bình đẳng",
            "Ngày càng bất bình đẳng",
            "Xung đột giữa các dân tộc sâu sắc hơn",
            "Khác biệt giữa các dân tộc sẽ bị triệt tiêu"
        ],
        correct: 0
    },
    {
        id: 531,
        question: "Nội dung nào KHÔNG thuộc Cương lĩnh dân tộc của chủ nghĩa Mác - Lênin?",
        options: [
            "Các dân tộc có quyền bình đẳng",
            "Các dân tộc có quyền tự quyết",
            "Liên hiệp tất cả các dân tộc",
            "Liên hiệp công nhân tất cả các dân tộc"
        ],
        correct: 2
    },
    {
        id: 532,
        question: "Ở Việt Nam hiện nay có bao nhiêu dân tộc?",
        options: [
            "44",
            "54",
            "53",
            "64"
        ],
        correct: 1
    },
    {
        id: 533,
        question: "Chỉ ra luận điểm KHÔNG chính xác?",
        options: [
            "Quyền bình đẳng dân tộc là cơ sở cho quyền tự quyết dân tộc",
            "Quyền tự quyết dân tộc là ảo tưởng đối với các dân tộc kém phát triển",
            "Quyền bình đẳng và quyền tự quyết dân tộc không tự nhiên mà có được",
            "Quyền bình đẳng và quyền tự quyết dân tộc đi liền với nhau"
        ],
        correct: 1
    },
    {
        id: 534,
        question: "Nội dung nào KHÔNG phải là điều kiện để thực hiện quyền bình đẳng dân tộc?",
        options: [
            "Xóa bỏ tình trạng chênh lệch trong sự phát triển kinh tế, văn hóa của các dân tộc",
            "Xóa bỏ tình trạng giai cấp này áp bức giai cấp khác, trên cơ sở xóa bỏ chế độ tư hữu",
            "Các nhà nước dân tộc có chủ trương, chính sách đúng đắn trong giải quyết quan hệ dân tộc",
            "Các đảng chính trị có đường lối đúng đắn định hướng quan hệ dân tộc"
        ],
        correct: 1
    },
    {
        id: 535,
        question: "Trong sự phát triển của chủ nghĩa tư bản, sự phát triển của dân tộc diễn ra theo xu hướng nào?",
        options: [
            "Xu hướng độc lập dân tộc và liên hiệp dân tộc",
            "Xu hướng bình đẳng và đoàn kết tất cả các dân tộc",
            "Xu hướng tôn trọng lợi ích của tất cả các dân tộc",
            "Xu hướng đáp ứng mọi nhu cầu dân tộc"
        ],
        correct: 0
    },
    {
        id: 536,
        question: "Một trong những nguyên nhân dẫn đến xu hướng liên hiệp dân tộc?",
        options: [
            "Sự phát triển của lực lượng sản xuất và khoa học - công nghệ, nhu cầu liên minh về kinh tế, văn hóa, chính trị, quân sự",
            "Nhu cầu giao lưu kinh tế, văn hóa, chính trị giữa giai cấp tư sản và giai cấp vô sản",
            "Nhu cầu giải quyết mâu thuẫn về kinh tế, văn hóa, chính trị, quân sự giữa các giai cấp, tầng lớp trong xã hội",
            "Nhu cầu thống nhất về lợi ích kinh tế, chính trị, văn hóa, xã hội về tay giai cấp tư sản"
        ],
        correct: 0
    },
    {
        id: 537,
        question: "Tiêu chí cơ bản nào để phân biệt sự khác nhau giữa các dân tộc - tộc người?",
        options: [
            "Địa bàn cư trú của dân tộc",
            "Trình độ phát triển của dân tộc",
            "Bản sắc văn hóa của dân tộc",
            "Chế độ chính trị của dân tộc"
        ],
        correct: 2
    },
    {
        id: 538,
        question: "Thị tộc là hình thức cộng đồng người xuất hiện trong thời đại nào?",
        options: [
            "Công xã nguyên thủy",
            "Chiếm hữu nô lệ",
            "Phong kiến",
            "Tư bản chủ nghĩa"
        ],
        correct: 0
    },
    {
        id: 539,
        question: "Đặc trưng nào KHÔNG thuộc về đặc trưng của dân tộc - tộc người?",
        options: [
            "Có lãnh thổ chung",
            "Cộng đồng về ngôn ngữ",
            "Các đặc điểm chung thuộc bản sắc văn hóa",
            "Ý thức tự giác tộc người"
        ],
        correct: 0
    },
    {
        id: 540,
        question: "Dân tộc là gì?",
        options: [
            "Là hình thức cộng đồng người ra đời trên cơ sở quan hệ huyết thống",
            "Là hình thức cộng đồng người ra đời trên cơ sở quan hệ lãnh thổ, kinh tế, văn hóa, chính trị",
            "Là hình thức cộng đồng người ra đời trên cơ sở quan hệ hôn nhân",
            "Là hình thức cộng đồng người ra đời trên cơ sở quan hệ hoà bình hữu nghị giữa người và người"
        ],
        correct: 1
    },
    {
        id: 541,
        question: "“Đấu tranh chống sự áp bức, bóc lột của các nước tư bản phát triển đối với các nước lạc hậu, chậm phát triển về kinh tế” là hành động để thực hiện nguyên tắc nào trong cương lĩnh dân tộc của chủ nghĩa Mác - Lênin?",
        options: [
            "Các dân tộc hoàn toàn bình đẳng",
            "Các dân tộc được quyền tự quyết",
            "Liên hiệp công nhân tất cả các dân tộc",
            "Cả A, B, C đều sai"
        ],
        correct: 1
    },
    {
        id: 542,
        question: "Trong nguyên tắc “Các dân tộc được quyền tự quyết”, quyền dân tộc tự quyết được hiểu là:",
        options: [
            "Quyền bình đẳng trong quan hệ quốc tế",
            "Quyền làm chủ của mỗi dân tộc",
            "Quyền liên hiệp của các dân tộc",
            "Cả A, B, C"
        ],
        correct: 0
    },
    {
        id: 543,
        question: "Nguyên tắc “Các dân tộc được quyền tự quyết” được hiểu là:",
        options: [
            "Quyền can thiệp vào công việc nội bộ của các nước",
            "Quyền đòi ly khai, chia rẽ dân tộc",
            "Quyền tự quyết định con đường phát triển kinh tế, chính trị - xã hội",
            "Cả A, B, C"
        ],
        correct: 2
    },
    {
        id: 544,
        question: "Nguyên tắc “Các dân tộc được quyền tự quyết” được hiểu là...",
        options: [
            "Quyền can thiệp vào công việc nội bộ của các nước",
            "Quyền thực hiện chủ nghĩa bá quyền nước lớn",
            "Quyền tự nguyện liên hiệp lại với các dân tộc khác",
            "Cả A, B, C"
        ],
        correct: 2
    },
    {
        id: 545,
        question: "“Can thiệp vào công việc nội bộ các nước, đòi ly khai chia rẽ dân tộc” là hành động đi ngược lại nguyên tắc nào trong cương lĩnh dân tộc của chủ nghĩa Mác - Lênin?",
        options: [
            "Các dân tộc hoàn toàn bình đẳng",
            "Các dân tộc được quyền tự quyết",
            "Liên hiệp công nhân tất cả các dân tộc",
            "Cả A, B, C đều sai"
        ],
        correct: 1
    },
    {
        id: 546,
        question: "Trong cương lĩnh dân tộc của chủ nghĩa Mác - Lênin, khi xem xét giải quyết quyền tự quyết của dân tộc, cần đứng vững trên lập trường của giai cấp nào?",
        options: [
            "Giai cấp tư sản",
            "Giai cấp công nhân",
            "Giai cấp nông dân",
            "Tầng lớp trí thức"
        ],
        correct: 1
    },
    {
        id: 547,
        question: "Nguyên tắc “Liên hiệp công nhân tất cả các dân tộc” trong cương lĩnh dân tộc của chủ nghĩa Mác - Lênin thể hiện bản chất quốc tế của giai cấp nào?",
        options: [
            "Giai cấp nông dân",
            "Giai cấp tư sản",
            "Giai cấp công nhân",
            "Tầng lớp trí thức"
        ],
        correct: 2
    },
    {
        id: 548,
        question: "Chọn phương án đúng nhất: Nguyên tắc “Liên hiệp công nhân tất cả các dân tộc” trong cương lĩnh dân tộc của chủ nghĩa Mác - Lênin có vai trò quyết định đến việc xem xét, thực hiện...",
        options: [
            "Quyền dân tộc tự quyết và quyền dân tộc liên hiệp",
            "Quyền bình đẳng dân tộc và quyền bình đẳng giai cấp",
            "Quyền bình đẳng dân tộc và quyền dân tộc tự quyết",
            "Cả A, B, C"
        ],
        correct: 2
    },
    {
        id: 549,
        question: "“Khắc phục sự chênh lệch về trình độ phát triển kinh tế, văn hóa giữa các dân tộc” là giải pháp để thực hiện nguyên tắc nào trong cương lĩnh dân tộc của chủ nghĩa Mác - Lênin?",
        options: [
            "Các dân tộc hoàn toàn bình đẳng",
            "Các dân tộc được quyền tự quyết",
            "Liên hiệp công nhân tất cả các dân tộc",
            "Cả A, B, C đều sai"
        ],
        correct: 0
    },
    {
        id: 550,
        question: "“Tất cả các dân tộc, dù đông người hay ít người, có trình độ phát triển cao hay thấp đều có quyền lợi và nghĩa vụ như nhau” là một trong những nội dung của nguyên tắc nào trong cương lĩnh dân tộc của chủ nghĩa Mác - Lênin?",
        options: [
            "Các dân tộc hoàn toàn bình đẳng",
            "Các dân tộc được quyền tự quyết",
            "Liên hiệp công nhân tất cả các dân tộc",
            "Cả A, B, C đều sai"
        ],
        correct: 0
    },
    {
        id: 551,
        question: "“Không có đặc quyền đặc lợi về kinh tế, chính trị, văn hóa, ngôn ngữ cho bất cứ dân tộc nào” là một trong những nội dung của nguyên tắc nào trong cương lĩnh dân tộc của chủ nghĩa Mác - Lênin?",
        options: [
            "Các dân tộc hoàn toàn bình đẳng",
            "Các dân tộc được quyền tự quyết",
            "Liên hiệp công nhân tất cả các dân tộc",
            "Cả A, B, C đều sai"
        ],
        correct: 0
    },
    {
        id: 552,
        question: "“Đấu tranh chống chủ nghĩa phân biệt chủng tộc, chủ nghĩa bá quyền nước lớn” là hành động để thực hiện nguyên tắc nào trong cương lĩnh dân tộc của chủ nghĩa Mác - Lênin?",
        options: [
            "Các dân tộc hoàn toàn bình đẳng",
            "Các dân tộc được quyền tự quyết",
            "Liên hiệp công nhân tất cả các dân tộc",
            "Cả A, B, C đều sai"
        ],
        correct: 0
    },
    {
        id: 553,
        question: "Tôn giáo là gì?",
        options: [
            "Tôn giáo là niềm tin của con người tồn tại với hệ thống quan niệm và hoạt động bao gồm đối tượng tôn thờ, giáo lý, giáo luật, lễ nghi và tổ chức",
            "Tôn giáo là niềm tin của con người được khái quát thành thuyết lý luận khoa học và cách mạng, thể hiện lập trường chính trị của giai cấp công nhân và nhân dân lao động trong đấu tranh giai cấp",
            "Tôn giáo là một tổ chức chính trị - xã hội đặc biệt, ra đời nhằm thực hiện vai trò thống trị chính trị của một giai cấp nhất định trong xã hội",
            "Tôn giáo là một tổ chức xã hội, là đại diện cho quần chúng nhân dân lao động trong công xã nguyên thủy, là tổ chức tiền thân của Nhà nước trong xã hội có sự phân chia giai cấp"
        ],
        correct: 0
    },
    {
        id: 554,
        question: "“Cần phải có quan điểm lịch sử - cụ thể khi xem xét, đánh giá và giải quyết những vấn đề liên quan đến tôn giáo” là nội dung nằm trong...",
        options: [
            "Quan điểm của chủ nghĩa Mác - Lênin",
            "Nguyên nhân tồn tại của tôn giáo",
            "Nguồn gốc của tôn giáo",
            "Cả A, B, C đều sai"
        ],
        correct: 0
    },
    {
        id: 555,
        question: "Hoàn thành luận điểm sau: Tôn giáo là một loại hình thái ý thức xã hội (...) hiện thực khách quan. Qua hình thức phản ánh của tôn giáo, những sức mạnh tự phát trong tự nhiên và xã hội trở thành siêu nhiên, thần bí.",
        options: [
            "Phản ánh một cách đúng đắn",
            "Phản ánh một cách hoang đường, hư ảo",
            "Phản ánh một cách khách quan",
            "Phản ánh niềm tin tuyệt đối"
        ],
        correct: 1
    },
    {
        id: 556,
        question: "Chọn phương án đùng nhất: Tôn giáo ra đời khi nào?",
        options: [
            "Tôn giáo xuất hiện cùng với sự xuất hiện của con người",
            "Tôn giáo xuất hiện khi xã hội có sự phân chia giai cấp và Nhà nước ra đời",
            "Tôn giáo xuất hiện khi trình độ tư duy của con người đạt đến mức độ có khả năng tư duy trừu tượng",
            "Tôn giáo ra đời khi xuất hiện nhu cầu tín ngưỡng"
        ],
        correct: 1
    },
    {
        id: 557,
        question: "Tính lịch sử của tôn giáo biểu hiện như thế nào?",
        options: [
            "Tôn giáo không có sự vận động và phát triển cùng với sự vận động và phát triển của xã hội",
            "Tôn giáo luôn có sự vận động và phát triển cùng với sự vận động và phát triển của xã hội",
            "Tôn giáo sẽ mất đi hoàn toàn trong xã hội xã hội chủ nghĩa",
            "Tôn giáo chỉ tồn tại trong xã hội có áp bức, bóc lột, có sự phân chia giai cấp"
        ],
        correct: 1
    },
    {
        id: 558,
        question: "Chọn phương án đùng nhất: Nguồn gốc tự nhiên của tôn giáo là gì?",
        options: [
            "Từ sự bất lực của con người trước những lực lượng tự nhiên và xã hội",
            "Từ sự phân chia giai cấp trong xã hội",
            "Từ sự xuất hiện các cộng đồng dân tộc",
            "Từ nhu cầu của các lực lượng chính trị"
        ],
        correct: 0
    },
    {
        id: 559,
        question: "Vì sao tôn giáo mang tính quần chúng?",
        options: [
            "Vì tôn giáo đáp ứng nhu cầu tinh thần của một bộ phận quần chúng nhân dân",
            "Vì tôn giáo là phương tiện thống trị của giai cấp cầm quyền",
            "Vì tôn giáo mang tính giai cấp",
            "Vì tôn giáo là sản phẩm của con người"
        ],
        correct: 0
    },
    {
        id: 560,
        question: "Khi nào tôn giáo mang tính chính trị?",
        options: [
            "Ngay từ khi tôn giáo xuất hiện",
            "Trong xã hội có phân chia giai cấp",
            "Trong thời kỳ quá độ lên chủ nghĩa xã hội",
            "Trong xã hội nguyên thủy"
        ],
        correct: 1
    },
    {
        id: 561,
        question: "Tính chính trị của tôn giáo biểu hiện như thế nào?",
        options: [
            "Các thế lực chính trị lợi dụng tôn giáo phục vụ cho mục đích của họ",
            "Tôn giáo là sản phẩm của sự sáng tạo của giai cấp thống trị",
            "Tôn giáo luôn biến đổi cùng với sự biến đổi của lịch sử xã hội",
            "Tôn giáo là phương tiện để giai cấp công nhân đấu tranh chống lại giai cấp tư sản"
        ],
        correct: 0
    },
    {
        id: 562,
        question: "Chỉ ra luận điểm đúng trong các luận điểm sau?",
        options: [
            "Tôn giáo mang tính quần chúng rộng rãi vì nó tồn tại lâu dài trong lịch sử",
            "Tôn giáo mang tính quần chúng rộng rãi vì nó phục lợi ích của giai cấp thống trị",
            "Tôn giáo mang tính quần chúng rộng rãi vì nó phản ánh khát vọng của quần chúng về một xã hội tốt đẹp",
            "Tôn giáo mang tính quần chúng rộng rãi vì nó ra đời sớm, gắn liền với sự xuất hiện của con người"
        ],
        correct: 2
    },
    {
        id: 563,
        question: "Yếu tố nào sau đây KHÔNG thuộc về nguồn gốc của tôn giáo?",
        options: [
            "Kinh tế - xã hội",
            "Nhận thức",
            "Tâm lý",
            "Văn hóa"
        ],
        correct: 3
    },
    {
        id: 564,
        question: "Khoa học chưa lý giải được nhiều hiện tượng tự nhiên, xã hội và của con người là nội dung của nguyên nhân nào lý giải sự tồn tại của tôn giáo trong tiến trình xây dựng chủ nghĩa xã hội?",
        options: [
            "Văn hóa",
            "Tâm lý",
            "Chính trị - xã hội",
            "Nhận thức"
        ],
        correct: 3
    },
    {
        id: 565,
        question: "Sự khác biệt về lợi ích kinh tế giữa các giai cấp, tầng lớp xã hội trong nền kinh tế nhiều thành phần là nội dung của nguyên nhân nào lý giải sự tồn tại của tôn giáo trong tiến trình xây dựng chủ nghĩa xã hội?",
        options: [
            "Nhận thức",
            "Tâm lý",
            "Văn hóa",
            "Kinh tế"
        ],
        correct: 3
    },
    {
        id: 566,
        question: "Tôn giáo trở thành niềm tin, lối sống, phong tục tập quán, tình cảm của một bộ phận đông đảo nhân dân qua nhiều thế hệ là nội dung của nguyên nhân nào lý giải sự tồn tại của tôn giáo trong tiến trình xây dựng chủ nghĩa xã hội?",
        options: [
            "Tâm lý",
            "Chính trị - xã hội",
            "Kinh tế",
            "Văn hóa"
        ],
        correct: 0
    },
    {
        id: 567,
        question: "Nguyên nhân tâm lý giải thích sự tồn tại của tôn giáo trong tiến trình xây dựng chủ nghĩa xã hội là do...",
        options: [
            "Tôn giáo chứa đựng nhiều giá trị chưa phù hợp với đạo lý con người",
            "Tôn giáo đã trở thành niềm tin, phong tục tập quán của một bộ phận nhân dân",
            "Tôn giáo đáp ứng được nhu cầu vật chất của nhân dân",
            "Cả A, B, C"
        ],
        correct: 1
    },
    {
        id: 568,
        question: "Nguyên nhân chính trị - xã hội lý giải sự tồn tại của tôn giáo trong tiến trình xây dựng chủ nghĩa xã hội là do...",
        options: [
            "Trình độ dân trí của nhân dân chưa được nâng cao",
            "Sự tồn tại của nền kinh tế nhiều thành phần với những lợi ích khác nhau",
            "Những giá trị đạo đức, văn hóa của tôn giáo phù hợp với chủ nghĩa xã hội",
            "Tôn giáo đáp ứng được mọi nhu cầu của nhân dân"
        ],
        correct: 1
    },
    {
        id: 569,
        question: "Nguyên nhân văn hóa lý giải sự tồn tại của tôn giáo trong tiến trình xây dựng chủ nghĩa xã hội là do...",
        options: [
            "Tôn giáo chưa đáp ứng được nhu cầu văn hóa tinh thần nào của nhân dân",
            "Tôn giáo đáp ứng được phần nào nhu cầu văn hóa tinh thần của nhân dân",
            "Tôn giáo đã đáp ứng được mọi nhu cầu văn hóa tinh thần của nhân dân",
            "Cả A, B, C"
        ],
        correct: 1
    },
    {
        id: 570,
        question: "Nguyên nhân văn hóa lý giải sự tồn tại của tôn giáo trong tiến trình xây dựng chủ nghĩa xã hội là do...",
        options: [
            "Tôn giáo có ý nghĩa giáo dục ý thức cộng đồng, lối sống của nhân dân",
            "Tôn giáo bị thế lực phản động lợi dụng để chống phá chủ nghĩa xã hội",
            "Những giá trị đạo đức, văn hóa của tôn giáo phù hợp với chủ nghĩa xã hội",
            "Cả A, B, C"
        ],
        correct: 2
    },
    {
        id: 571,
        question: "Nguyên nhân cơ bản nào làm cho tôn giáo mang tính chính trị?",
        options: [
            "Giai cấp thống trị lợi dụng tôn giáo",
            "Niềm tin tôn giáo khác nhau",
            "Tâm lý xã hội khác nhau giữa các dân tộc",
            "Văn hóa đa dạng giữa các giai tầng"
        ],
        correct: 0
    },
    {
        id: 572,
        question: "Hình thức thờ cúng tổ tiên thuộc về...?",
        options: [
            "Tôn giáo",
            "Mê tín",
            "Tín ngưỡng",
            "Dị đoan"
        ],
        correct: 2
    },
    // Chương 6 - tiếp 50 câu
    {
        id: 573,
        question: "Chọn phương án đúng nhất: Một trong những quan điểm cơ bản của chủ nghĩa Mác - Lênin trong việc giải quyết vấn đề tôn giáo là:",
        options: [
            "Thực hiện đoàn kết toàn dân tộc",
            "Thực hiện đoàn kết các tôn giáo",
            "Thực hiện đoàn kết toàn dân tộc, đoàn kết các tôn giáo",
            "Cả A, B, C đều sai"
        ],
        correct: 2
    },
    {
        id: 574,
        question: "Chọn phương án đúng nhất: Một trong những quan điểm cơ bản của chủ nghĩa Mác - Lênin trong việc giải quyết vấn đề tôn giáo là phân biệt rõ hai mặt...",
        options: [
            "Chính trị và tư tưởng",
            "Chính trị và xã hội",
            "Văn hóa và tư tưởng",
            "Cả A, B, C đều sai"
        ],
        correct: 0
    },
    {
        id: 575,
        question: "Một trong những nội dung cơ bản khi nghiên cứu, giải quyết vấn đề tôn giáo là xem xét tôn giáo trong những...",
        options: [
            "Nguồn gốc của tôn giáo",
            "Quan điểm của chủ nghĩa Mác - Lênin",
            "Nguyên nhân tồn tại của tôn giáo",
            "Cả A, B, C đều sai"
        ],
        correct: 1
    },
    {
        id: 576,
        question: "Một trong những quan điểm cơ bản của chủ nghĩa Mác - Lênin trong việc giải quyết vấn đề tôn giáo là:",
        options: [
            "Quan điểm toàn diện",
            "Quan điểm phát triển",
            "Quan điểm lịch sử - cụ thể",
            "Cả A, B, C đều sai"
        ],
        correct: 2
    },
    {
        id: 577,
        question: "Theo chủ nghĩa Mác – Lênin, tôn giáo là một...",
        options: [
            "hình thức chính trị",
            "hình thức mê tín",
            "hình thái ý thức xã hội",
            "hình thái ý thức cá nhân"
        ],
        correct: 2
    },
    {
        id: 578,
        question: "“Nghiêm cấm mọi hành vi vi phạm quyền tự do tín ngưỡng và không tín ngưỡng của công dân” thuộc quan điểm nào của chủ nghĩa Mác - Lênin trong việc giải quyết vấn đề tôn giáo?",
        options: [
            "Tôn trọng tự do tín ngưỡng và không tín ngưỡng của nhân dân",
            "Phân biệt rõ hai mặt chính trị và tư tưởng trong vấn đề tôn giáo",
            "Phải có quan điểm lịch sử - cụ thể khi giải quyết vấn đề tôn giáo",
            "Cả A, B, C đều sai"
        ],
        correct: 0
    },
    {
        id: 579,
        question: "Chính sách tôn giáo của Đảng và Nhà nước ta nhằm mục đích...",
        options: [
            "Hạn chế sự phát triển của tôn giáo",
            "Thực hiện đoàn kết các tôn giáo",
            "Thực hiện đoàn kết toàn dân tộc",
            "Tôn trọng quyền tự do tín ngưỡng và không tín ngưỡng"
        ],
        correct: 3
    },
    {
        id: 580,
        question: "Mặt tư tưởng trong việc giải quyết vấn đề tôn giáo theo quan điểm của chủ nghĩa Mác - Lênin thể hiện...",
        options: [
            "Sự lợi dụng tôn giáo",
            "Sự tín ngưỡng trong tôn giáo",
            "Sự cuồng tín tôn giáo",
            "Cả A, B, C đều sai"
        ],
        correct: 1
    },
    {
        id: 581,
        question: "Mặt chính trị trong việc giải quyết vấn đề tôn giáo theo quan điểm của chủ nghĩa Mác - Lênin thể hiện...",
        options: [
            "Sự cuồng tín tôn giáo",
            "Sự lợi dụng tôn giáo",
            "Sự tín ngưỡng trong tôn giáo",
            "Cả A, B, C đều sai"
        ],
        correct: 1
    },
    {
        id: 582,
        question: "Nguyên nhân cơ bản nào làm cho tôn giáo mang tính chính trị?",
        options: [
            "Giai cấp thống trị lợi dụng tôn giáo",
            "Niềm tin tôn giáo khác nhau",
            "Tâm lý xã hội khác nhau giữa các dân tộc",
            "Văn hóa đa dạng giữa các giai tầng"
        ],
        correct: 0
    },
    {
        id: 583,
        question: "Trình tự nào sau đây thể hiện chính xác quá trình phát triển của các hình thức cộng đồng người trong lịch sử?",
        options: [
            "Bộ lạc - bộ tộc - thị tộc - dân tộc.",
            "Bộ tộc - bộ lạc - dân tộc - thị tộc.",
            "Thị tộc - bộ lạc - bộ tộc - dân tộc.",
            "Thị tộc - bộ tộc - bộ lạc - dân tộc."
        ],
        correct: 2
    },
    {
        id: 584,
        question: "Nội dung nào dưới đây là nguyên nhân dẫn đến việc hình thành dân tộc có sự khác nhau giữa các khu vực trên thế giới?",
        options: [
            "Sự khác nhau về vị trí địa lí, điều kiện tự nhiên.",
            "Sự khác nhau về vị trí địa lí, tài nguyên thiên nhiên.",
            "Sự khác nhau về yếu tố kinh tế, xã hội và ý thức tộc người.",
            "Sự khác nhau về vị trí địa lí, điều kiện tự nhiên và ý thức tộc người."
        ],
        correct: 3
    },
    {
        id: 585,
        question: "Ở các nước phương Tây, dân tộc ra đời vào khoảng...",
        options: [
            "thế kỉ XI.",
            "thế kỉ XII.",
            "thế kỉ XIII.",
            "thế kỉ XV."
        ],
        correct: 3
    },
    {
        id: 586,
        question: "Yếu tố nào dưới đây có ý nghĩa quyết định nhất đến sự ra đời của dân tộc ở phương Tây?",
        options: [
            "Vị trí địa lí, điều kiện tự nhiên.",
            "Sự chín muồi của yếu tố tộc người.",
            "Sự phát triển của lực lượng sản xuất trong sản xuất hàng hoá tư bản chủ nghĩa.",
            "Sự phát triển của quan hệ sản xuất trong sản xuất hàng hoá tư bản chủ nghĩa."
        ],
        correct: 2
    },
    {
        id: 587,
        question: "Nguyên nhân nào sau đây gắn liền với sự ra đời của chủ nghĩa tư bản?",
        options: [
            "Chủ nghĩa tư bản đi chiếm các nước làm thuộc địa, mở rộng lãnh thổ.",
            "Lực lượng sản xuất trong chủ nghĩa tư bản phát triển.",
            "Giữa các địa phương có sự khác biệt về trình độ phát triển kinh tế.",
            "Ý thức tư sản phát triển mạnh mẽ dẫn đến sự hợp nhất các bộ tộc."
        ],
        correct: 1
    },
    {
        id: 588,
        question: "Sự phát triển của phương thức sản xuất châu Á, của chế độ sở hữu công cộng về ruộng đất là yếu tố quyết định nhất dẫn tới sự ra đời của các dân tộc ở...",
        options: [
            "phương Đông.",
            "khu vực Đông Bắc Á.",
            "khu vực Đông Nam Á.",
            "khu vực Tây Á."
        ],
        correct: 0
    },
    {
        id: 589,
        question: "Dân tộc ở phương Tây là loại hình dân tộc...",
        options: [
            "tiền phong kiến.",
            "hậu phong kiến.",
            "tư sản.",
            "hậu tư sản."
        ],
        correct: 2
    },
    {
        id: 590,
        question: "Sự ra đời của dân tộc chủ yếu do tác động của các yếu tố kinh tế, chính trị, văn hoá từ bên ngoài, yếu tố tộc người mờ nhạt là nội dung thể hiện sự ra đời của các dân tộc ở...",
        options: [
            "châu Âu.",
            "châu Á.",
            "châu Phi.",
            "châu Mỹ."
        ],
        correct: 3
    },
    {
        id: 591,
        question: "Sự hình thành của một số dân tộc ở đâu dưới đây có sự tham gia của nhóm người nhập cư từ châu Âu và châu lục khác trong quá trình xâm lược thuộc địa của chủ nghĩa đế quốc, thực dân?",
        options: [
            "Châu Á.",
            "Châu Phi.",
            "Châu Mỹ.",
            "Châu Đại Dương."
        ],
        correct: 2
    },
    {
        id: 592,
        question: "Nội dung nào dưới đây không phải là đặc điểm của dân tộc theo nghĩa rộng?",
        options: [
            "Có chung một vùng lãnh thổ ổn định.",
            "Mỗi vùng miền sử dụng riêng một loại ngôn ngữ.",
            "Có chung một phương thức sinh hoạt kinh tế.",
            "Có chung nền văn hoá và tâm lí."
        ],
        correct: 1
    },
    {
        id: 593,
        question: "Phần đất đai, vùng trời, vùng biển mà mỗi dân tộc được quyền sở hữu là nội dung của khái niệm...",
        options: [
            "lãnh thổ.",
            "địa giới hành chính,",
            "biên giới.",
            "tổ quốc."
        ],
        correct: 0
    },
    {
        id: 594,
        question: "Yếu tố nào dưới đây thể hiện đầy đủ chủ quyền của một dân tộc trong tương quan với các quốc gia dân tộc khác?",
        options: [
            "Biên giới.",
            "Lãnh thổ.",
            "Lãnh hải.",
            "Địa giới hành chính."
        ],
        correct: 1
    },
    {
        id: 595,
        question: "Nhiệm vụ nào dưới đây là nghĩa vụ và trách nhiệm cao nhất của mỗi thành viên dân tộc?",
        options: [
            "Xây dựng nền văn hoá tiên tiến.",
            "Lao động phát triển kinh tế đất nước.",
            "Tham gia giải quyết các vấn đề xã hội.",
            "Bảo vệ chủ quyền quốc gia."
        ],
        correct: 3
    },
    {
        id: 596,
        question: "Đặc trưng nào dưới đây là quan trọng nhất, là cơ sở gắn kết các bộ phận, các thành viên trong dân tộc, tạo nên tính thống nhất, ổn định, bền vững của dân tộc?",
        options: [
            "Chung một vùng lãnh thổ.",
            "Chung một phương thức sinh hoạt kinh tế.",
            "Chung một ngôn ngữ làm công cụ giao tiếp.",
            "Chung một nền văn hoá và tâm lí."
        ],
        correct: 1
    },
    {
        id: 597,
        question: "Trong một quốc gia có nhiều cộng đồng người, với các ngôn ngữ khác nhau, nhưng bao giờ cũng sẽ có một ngôn ngữ chung thống nhất là nội dung thể hiện đặc trưng nào dưới đây của quốc gia dân tộc?",
        options: [
            "Có ngôn ngữ viết chung.",
            "Có ngôn ngữ nói riêng.",
            "Có chung một ngôn ngữ làm công cụ giao tiếp.",
            "Có nhiều ngôn ngữ làm công cụ giao tiếp."
        ],
        correct: 2
    },
    {
        id: 598,
        question: "Biểu hiện thông qua tâm lí, tính cách, phong tục, tập quán, lối sống của dân tộc, tạo nên bản sắc riêng của dân tộc là nội dung thể hiện khái niệm nào dưới đây?",
        options: [
            "Văn hoá dân tộc.",
            "Văn hoá vật chất và văn hoá tinh thần.",
            "Giao lưu văn hoá.",
            "Cả A, B, C đều sai."
        ],
        correct: 0
    },
    {
        id: 599,
        question: "Các thành viên cũng như các cộng đồng tộc người trong một dân tộc đều chịu sự quản lí, điều khiển của...",
        options: [
            "một tổ chức độc lập.",
            "một nhà nước độc lập.",
            "một đảng độc lập.",
            "một xã hội độc lập."
        ],
        correct: 1
    },
    {
        id: 600,
        question: "Tổ chức nào dưới đây là đặc trưng cho thể chế chính trị của dân tộc, là đại diện cho dân tộc trong quan hệ với các quốc gia dân tộc khác trên thế giới?",
        options: [
            "Đảng Cộng sản.",
            "Mặt trận tổ quốc.",
            "Nhà nước.",
            "Các đoàn thể chính trị - xã hội."
        ],
        correct: 2
    },
    {
        id: 601,
        question: "Tiêu chí nào dưới đây là quan trọng nhất để phân định tộc người này với tộc người khác và có vị trí quyết định đối với sự tồn tại, phát triển của mỗi tộc người?",
        options: [
            "Ý thức tự giác tộc người.",
            "Sự phát triển về kinh tế.",
            "Sự tiến bộ trong nhận thức.",
            "Sự nâng cao đời sống vật chất và tinh thần."
        ],
        correct: 0
    },
    {
        id: 602,
        question: "Sự trưởng thành của ý thức dân tộc, sự thức tỉnh về chủ quyền là nguyên nhân dẫn đến việc các cộng đồng dân cư muốn...",
        options: [
            "liên kết lại với nhau.",
            "tách ra để thành dân tộc độc lập.",
            "liên minh với nhau về kinh tế.",
            "thể hiện tính độc lập trong phát triển kinh tế."
        ],
        correct: 1
    },
    {
        id: 603,
        question: "Nội dung nào sau đây phản ánh đúng mục đích cao nhất của xu hướng hình thành quốc gia dân tộc độc lập?",
        options: [
            "Sự trưởng thành của ý thức dân tộc.",
            "Sự khẳng định về chủ quyền.",
            "Sự độc lập về lựa chọn chế độ chính trị.",
            "Sự độc lập về lựa chọn chế độ kinh tế."
        ],
        correct: 2
    },
    {
        id: 604,
        question: "Trong thời đại của chủ nghĩa tư bản, xu hướng hình thành các quốc gia dân tộc độc lập này biểu hiện thành phong trào nào dưới đây?",
        options: [
            "Đấu tranh chống áp bức giai cấp.",
            "Đấu tranh chống cưỡng bức văn hoá.",
            "Đấu tranh chống áp bức dân tộc.",
            "Đấu tranh chống áp bức tôn giáo."
        ],
        correct: 3
    },
    {
        id: 605,
        question: "Sự thống nhất những lợi ích về kinh tế, chính trị, văn hoá, xã hội... là nguyên nhân dẫn tới xu hướng hình thành....",
        options: [
            "liên hiệp các dân tộc.",
            "dân tộc độc lập.",
            "các tổ chức kinh tế.",
            "các tổ chức phi chính phủ."
        ],
        correct: 0
    },
    {
        id: 606,
        question: "Lí do nào dưới đây làm xuất hiện nhu cầu xoá bỏ hàng rào ngăn cách giữa các dân tộc, tạo nên mối quan hệ quốc gia và quốc tế rộng lớn, thúc đẩy các dân tộc xích lại gần nhau?",
        options: [
            "Sự xâm lược của các nước đế quốc thực dân, phong trào đấu tranh của các nước thuộc địa, phụ thuộc.",
            "Chính sách mở của các nhà nước trong hoạt động kinh tế.",
            "Sự phát triển của lực lượng sản xuất, khoa học công nghệ, giao lưu kinh tế và văn hoá.",
            "Sự phát triển của khoa học công nghệ đặc biệt là lĩnh vực giao thông vận tải."
        ],
        correct: 2
    },
    {
        id: 607,
        question: "Điền từ ngữ thích hợp vào chỗ trống: Bàn về hai xu hướng khách quan của sự phát triển dân tộc, V.I. Lênin đã viết: “Trong quá trình phát triển của .... có hai xu hướng .... trong vấn đề..... Cả hai xu hướng đó là quy luật ..... của chủ nghĩa tư bản”.",
        options: [
            "dân tộc, phát triển, dân tộc, khách quan.",
            "chủ nghĩa tư bản, khách quan, dân tộc, phổ biến.",
            "dân tộc, lịch sử, dân tộc, khách quan.",
            "chủ nghĩa tư bản, lịch sử, dân tộc, phổ biến."
        ],
        correct: 3
    },
    {
        id: 608,
        question: "Mục tiêu chính trị chủ yếu của mọi quốc gia trong thời đại ngày nay là...",
        options: [
            "độc lập dân tộc.",
            "liên kết khu vực.",
            "liên minh quốc tế.",
            "chủ nghĩa xã hội."
        ],
        correct: 0
    },
    {
        id: 609,
        question: "Cương lĩnh dân tộc của chủ nghĩa Mác — Lênin thể hiện quan điểm, lập trường của chủ thể nào dưới đây trong giải quyết quan hệ dân tộc?",
        options: [
            "Nhân dân lao động",
            "Giai cấp nông dân.",
            "Đội ngũ trí thức.",
            "Giai cấp công nhân."
        ],
        correct: 3
    },
    {
        id: 610,
        question: "Nguyên tắc đầu tiên trong Cương lĩnh dân tộc của chủ nghĩa Mác - Lênin là...",
        options: [
            "Các dân tộc hoàn toàn bình đẳng.",
            "Các dân tộc có quyền tự quyết.",
            "Liên hiệp công nhân tất cả các dân tộc.",
            "Cả A, B, C đều sai."
        ],
        correct: 1
    },
    {
        id: 611,
        question: "Tất cả mọi dân tộc (kể cả bộ tộc và chủng tộc) dù lớn hay nhỏ, dù đông người hay ít người, dù phát triển ở trình độ cao hay thấp đều có quyền lợi và nghĩa vụ ngang nhau... là nội dung thể hiện quyền nào dưới đây của các dân tộc?",
        options: [
            "Bình đẳng",
            "Hợp tác.",
            "Tự quyết.",
            "Độc lập."
        ],
        correct: 0
    },
    {
        id: 612,
        question: "Quyền bình đẳng của các dân tộc phải được ghi vào...",
        options: [
            "công pháp quốc tế, luật pháp quốc gia.",
            "công pháp khu vực, luật pháp quốc gia.",
            "luật pháp quốc gia, quy định của từng tộc người.",
            "công pháp và công ước quốc tế."
        ],
        correct: 0
    },
    {
        id: 613,
        question: "Khắc phục sự chênh lệch về trình độ phát triển kinh tế, văn hoá, xã hội giữa các dân tộc, tạo điều kiện để các dân tộc còn lạc hậu phát triển nhanh trên con đường tiến bộ là điều kiện để đảm bảo việc thực hiện quyền nào dưới đây của các dân tộc trong một quốc gia đa dân tộc?",
        options: [
            "Hợp tác.",
            "Phát triển.",
            "Bình đẳng.",
            "Giao lưu."
        ],
        correct: 2
    },
    {
        id: 614,
        question: "Đấu tranh chống chủ nghĩa phân biệt chủng tộc, chủ nghĩa bá quyền nước lớn, chống sự áp bức bóc lột, sự vi phạm lợi ích của nước lớn, nước phát triển đối với các nước nhỏ, lạc hậu, chậm phát triển là biểu hiện của quyền...",
        options: [
            "tự do trong quan hệ giữa các quốc gia dân tộc.",
            "tự quyết trong quan hệ giữa các quốc gia dân tộc.",
            "giao lưu trong quan hệ giữa các quốc gia dân tộc.",
            "bình đẳng trong quan hệ giữa các quốc gia dân tộc."
        ],
        correct: 3
    },
    {
        id: 615,
        question: "Các dân tộc được tự do lựa chọn con đường phát triển, lựa chọn chế độ chính trị trong quá trình vận động, phát triển của dân tộc mình là nội dung của quyền...",
        options: [
            "bình đẳng giữa các dân tộc.",
            "dân tộc tự quyết,",
            "hợp tác giữa các dân tộc.",
            "Cả A, B, C đều sai."
        ],
        correct: 1
    },
    {
        id: 616,
        question: "Khi xem xét quyền tự quyết của dân tộc cần đứng vững trên lập trường của...",
        options: [
            "giai cấp công nhân.",
            "giai cấp nông dân.",
            "đội ngũ trí thức.",
            "đội ngũ doanh nhân."
        ],
        correct: 0
    },
    {
        id: 617,
        question: "Ủng hộ các phong trào dân tộc tiến bộ, kiên quyết đấu tranh chống lại những mưu đồ lợi dụng vấn đề dân tộc làm chiêu bài để can thiệp công việc nội bộ của các nước và chia rẽ dân tộc là lưu ý khi xem xét quyền...",
        options: [
            "bình đẳng.",
            "tự quyết,",
            "liên hiệp.",
            "phân tách thành quốc gia độc lập."
        ],
        correct: 1
    },
    {
        id: 618,
        question: "Lợi ích của công nhân ở dân tộc áp bức và dân tộc bị áp bức đều thống nhất là cơ sở khách quan của nguyên tắc nào dưới đây?",
        options: [
            "Các dân tộc có quyền tự do.",
            "Các dân tộc có quyền tự quyết.",
            "Các dân tộc hoàn toàn bình đẳng.",
            "Liên hiệp công nhân tất cả các dân tộc."
        ],
        correct: 3
    },
    {
        id: 619,
        question: "Để thực hiện được quyền bình đẳng và quyền tự quyết một cách đúng đắn thì các dân tộc phải thực hiện nguyên tắc...",
        options: [
            "tôn trọng lẫn nhau trong việc giải quyết các vấn đề chính trị.",
            "không can thiệp vào nội bộ của nhau.",
            "đứng vững trên lập trường của giai cấp công nhân.",
            "thành lập chính đảng vô sản và quốc gia dân tộc."
        ],
        correct: 2
    },
    {
        id: 620,
        question: "Nội dung nào dưới đây trong Cương lĩnh dân tộc của chủ nghĩa Mác - Lênin không chỉ là lời kêu gọi mà còn là giải pháp hữu hiệu đảm bảo việc thực hiện quyền bình đẳng và quyền tự quyết dân tộc?",
        options: [
            "Các dân tộc tách ra thành quốc gia độc lập.",
            "Liên hiệp công nhân tất cả các dân tộc.",
            "Các dân tộc liên hiệp lại với nhau.",
            "Các dân tộc hoàn toàn bình đẳng."
        ],
        correct: 1
    },
    {
        id: 621,
        question: "Nội dung nào sau đây đóng vai trò liên kết các nội dung còn lại trong Cương lĩnh dân tộc của chủ nghĩa Mác - Lênin thành một chỉnh thể?",
        options: [
            "Các dân tộc có quyền tự quyết.",
            "Các dân tộc hoàn toàn bình đẳng.",
            "Liên hiệp công nhân tất cả các dân tộc.",
            "Cả A, B, C đều sai."
        ],
        correct: 3
    },
    {
        id: 622,
        question: "Con đường giải phóng dân tộc của Hồ Chí Minh khác với các phong trào yêu nước ở Việt Nam cuối thế kỉ XIX, đầu thế kỉ XX có nội dung căn bản nào sau đây?",
        options: [
            "Gắn con đường giải phóng dân tộc với duy trì chế độ phong kiến.",
            "Gắn giải phóng dân tộc với liên minh các nước láng giềng.",
            "Gắn con đường giải phóng dân tộc với cách mạng dân chủ tư sản.",
            "Gắn con đường giải phóng dân tộc với cách mạng vô sản thế giới."
        ],
        correct: 3
    },
    // Chương 6 - thêm 50 câu tiếp theo
    {
        id: 623,
        question: "Theo quan điểm của Chủ tịch Hồ Chí Minh, con đường để giành độc lập, tự do, chủ quyền quốc gia là...",
        options: [
            "cách mạng tư sản.",
            "cách mạng vô sản.",
            "vận động cải cách.",
            "nâng cao dân trí."
        ],
        correct: 1
    },
    {
        id: 624,
        question: "Chủ tịch Hồ Chí Minh khẳng định mục tiêu cao nhất của cách mạng dân tộc dân chủ ở Việt Nam là giành độc lập dân tộc, chủ quyền quốc gia. Khẳng định này xuất phát từ cơ sở nào dưới đây?",
        options: [
            "Có độc lập mới có chủ quyền lãnh thổ, nhân dân mới có tự do.",
            "Độc lập tự do là nội dung cốt lõi của vấn đề dân tộc thuộc địa.",
            "Cách mạng Việt Nam cần có sự ủng hộ của dân tộc quốc tế.",
            "Đó là tất cả những gì Chủ tịch Hồ Chí Minh mong muốn cho Tổ quốc, cho đồng bào."
        ],
        correct: 1
    },
    {
        id: 625,
        question: "Theo Chủ tịch Hồ Chí Minh, mục tiêu cao nhất trong cách mạng dân tộc dân chủ ở Việt Nam là...",
        options: [
            "giành độc lập dân tộc.",
            "xoá bỏ chế độ phong kiến.",
            "giành ruộng đất cho nông dân.",
            "xoá bỏ chế độ phong kiến, giải phóng người lao động."
        ],
        correct: 0
    },
    {
        id: 626,
        question: "Điền từ ngữ thích hợp vào chỗ trống trong câu nói sau của Chủ tịch Hồ Chí Minh: ... cho đồng bào tôi, .... cho Tổ quốc tôi, đấy là tất cả những điều tôi muốn; đấy là tất cả những điều tôi hiểu”.",
        options: [
            "Độc lập, tự do.",
            "Tự do, độc lập.",
            "Hạnh phúc, độc lập.",
            "Hạnh phúc, tự do."
        ],
        correct: 1
    },
    {
        id: 627,
        question: "Tháng 5/1946, trước khi sang Pháp, Chủ tịch Hồ Chí Minh đã dặn cụ Huỳnh Thúc Kháng “Dĩ bất biến, ứng vạn biến” - lấy điều không đổi ứng phó với vạn điều thay đổi để thực hiện điều không đổi. Điều không đổi được mà Chủ tịch Hồ Chí Minh nói đến ở đây là...",
        options: [
            "Độc lập dân tộc, duy trì chế độ phong kiến",
            "độc lập dân tộc và chủ nghĩa xã hội.",
            "giữ mối liên hệ giữa dân tộc Việt Nam với dân tộc thế giới.",
            "tinh thần khoan dung và đoàn kết các dân tộc anh em."
        ],
        correct: 1
    },
    {
        id: 628,
        question: "Theo Chủ tịch Hồ Chí Minh, con đường duy nhất để dân tộc Việt Nam giành được độc lập, nhân dân Việt Nam được tự do là...",
        options: [
            "cách mạng vô sản.",
            "cách mạng giải phóng dân tộc.",
            "lật đổ giai cấp phong kiến.",
            "thực hiện đấu tranh giai cấp."
        ],
        correct: 0
    },
    {
        id: 629,
        question: "Theo tư tưởng Hồ Chí Minh, điều kiện tiên quyết để tiến lên chủ nghĩa xã hội ở Việt Nam là....",
        options: [
            "giai cấp công nhân Việt Nam được giải phóng khỏi giai cấp tư sản Việt Nam.",
            "dân tộc Việt Nam được độc lập.",
            "giai cấp nông dân Việt Nam được giải phóng khỏi chế độ phong kiến.",
            "dân tộc Việt Nam nhận được sự ủng hộ của các quốc gia dân tộc trên thế giới."
        ],
        correct: 1
    },
    {
        id: 630,
        question: "Theo quan điểm của Chủ tịch Hồ Chí Minh, sự gắn bó giữa độc lập dân tộc và chủ nghĩa xã hội thống nhất với nhau ở mục đích nào dưới đây?",
        options: [
            "Giải phóng con người khỏi áp bức, bất công.",
            "Phát triển kinh tế đất nước.",
            "Mở rộng giao lưu kinh tế, văn hoá, xã hội.",
            "Các dân tộc có điều kiện phát triển bình đẳng, tiến bộ."
        ],
        correct: 0
    },
    {
        id: 631,
        question: "Theo tư tưởng Hồ Chí Minh, những người ở dân tộc lớn dễ mắc bệnh...",
        options: [
            "quan liêu.",
            "chủ quan.",
            "kiêu ngạo.",
            "hẹp hòi."
        ],
        correct: 2
    },
    {
        id: 632,
        question: "Theo tư tưởng Hồ Chí Minh, những cán bộ địa phương, nhân dân địa phương thường không cố gắng, cái gì cũng cho mình là không làm được, bởi...",
        options: [
            "tự ti rằng mình là dân tộc nhỏ bé.",
            "tự đại dân tộc.",
            "thiếu ý chí vươn lên.",
            "tư tưởng dựa dẫm."
        ],
        correct: 0
    },
    {
        id: 633,
        question: "Dân tộc Việt Nam thuộc loại hình dân tộc....",
        options: [
            "phong kiến.",
            "tiền phong kiến,",
            "tư bản.",
            "tiền tư bản."
        ],
        correct: 1
    },
    {
        id: 634,
        question: "Nội dung nào sau đây không phải là điều kiện đưa đến sự hình thành dân tộc Việt Nam?",
        options: [
            "Nhu cầu trao đổi hàng hoá giữa các vùng miền hình thành thị trường dân tộc.",
            "Sự tác động của chế độ sở hữu công cộng về ruộng đất và công xã nông thôn.",
            "Yêu cầu của cuộc đấu tranh chống thiên tai, phát triển nông nghiệp lúa nước.",
            "Yêu cầu của cuộc đấu tranh chống ngoại xâm."
        ],
        correct: 0
    },
    {
        id: 635,
        question: "Theo Tổng điều tra Dân số và nhà ở năm 2019... các dân tộc thiểu số chiếm khoảng bao nhiêu phần trăm dân số Việt Nam?",
        options: [
            "18 %. ",
            "15,5%.",
            "14,7 %.",
            "12,3 %."
        ],
        correct: 2
    },
    {
        id: 636,
        question: "Theo Tổng điều tra Dân số và nhà ở năm 2019... dân tộc Kinh chiếm khoảng bao nhiêu phần trăm dân số Việt Nam?",
        options: [
            "80%.",
            "81,3%.",
            "82,6%.",
            "85,3%."
        ],
        correct: 3
    },
    {
        id: 637,
        question: "Nội dung nào dưới đây không phản ánh đúng đặc điểm của các dân tộc ở nước ta?",
        options: [
            "Các dân tộc có tinh thần đoàn kết và ý thức cộng đồng sâu sắc.",
            "Mỗi dân tộc đều có tiếng nói và chữ viết riêng.",
            "Các dân tộc có truyền thống yêu nước và tự hào dân tộc.",
            "Mỗi dân tộc đều có bản sắc văn hoá riêng."
        ],
        correct: 1
    },
    {
        id: 638,
        question: "Đặc điểm nào dưới đây của dân tộc Việt Nam vừa tạo cơ sở cho sự đoàn kết, thống nhất hữu cơ giữa các dân tộc, vừa tiềm ẩn nguy cơ của những mâu thuẫn, thậm chí sự kì thị hoặc xung đột trong quan hệ dân tộc?",
        options: [
            "Các dân tộc Việt Nam cư trú đan xen.",
            "Các dân tộc Việt Nam có trình độ phát triển khác nhau.",
            "Các dân tộc Việt Nam có tinh thần yêu nước.",
            "Các dân tộc Việt Nam có ý thức cộng đồng cao."
        ],
        correct: 0
    },
    {
        id: 639,
        question: "Các bản sắc văn hoá đa dạng của các dân tộc thống nhất với nhau ở nội dung cốt lõi nào dưới đây?",
        options: [
            "Lòng yêu chuộng hoà bình.",
            "Lòng yêu nước.",
            "Tinh thần quốc tế.",
            "Tinh thần vượt khó."
        ],
        correct: 1
    },
    {
        id: 640,
        question: "Đối với quốc gia dân tộc Việt Nam, nội dung nào dưới đây được xem là sợi chỉ đỏ xuyên suốt đường lối chính trị của Đảng ta?",
        options: [
            "Độc lập dân tộc.",
            "Chủ nghĩa xã hội.",
            "Thực hiện đoàn kết và bình đẳng giữa các dân tộc trong cộng đồng các dân tộc Việt Nam.",
            "Thực hiện quyền bình đẳng và quyền tự quyết của dân tộc Việt Nam."
        ],
        correct: 3
    },
    {
        id: 641,
        question: "Đối với cộng đồng các dân tộc ở Việt Nam, tư tưởng nhất quán của Đảng là...",
        options: [
            "Bảo đảm sự bình đẳng, đoàn kết và giúp đỡ nhau giữa các dân tộc, nhất là các dân tộc thiểu số.",
            "Tập trung đẩy nhanh sự phát triển của dân tộc đa số, sau đó hỗ trợ phát triển cho các dân tộc thiểu số.",
            "Ưu tiên và tạo điều kiện cho những dân tộc đa số phát triển.",
            "Giảm mức đầu tư cho dân tộc đa số, tập trung đẩy nhanh sự phát triển của dân tộc thiểu số."
        ],
        correct: 0
    },
    {
        id: 642,
        question: "Điền từ ngữ thích hợp vào chỗ trống: Văn kiện Đại hội đại biểu toàn quốc lần thứ XI của Đảng Cộng sản Việt Nam đã khẳng định: “Độc lập dân tộc là điều kiện để thực hiện chủ nghĩa xã hội và chủ nghĩa xã hội là bảo đảm vững chắc cho độc lập dân tộc”.",
        options: [
            "quyết định, cơ sở.",
            "căn bản, nền tảng.",
            "tiên quyết, cơ sở.",
            "tiên quyết, căn bản."
        ],
        correct: 2
    },
    {
        id: 643,
        question: "Một trong những mục tiêu được Đảng ta xác định trong những năm đầu đưa miền Bắc quá độ lên chủ nghĩa xã hội là làm cho...",
        options: [
            "miền núi tiến kịp miền xuôi, cùng nhau tiến lên chủ nghĩa xã hội.",
            "miền núi và miền xuôi cùng phát triển, cùng đi lên chủ nghĩa xã hội.",
            "số lượng cán bộ địa phương tăng lên ngang bằng với cán bộ miền xuôi.",
            "các dân tộc thiểu số nhận thức đúng về con đường đi lên chủ nghĩa xã hội."
        ],
        correct: 0
    },
    {
        id: 644,
        question: "“Vấn đề dân tộc và đoàn kết dân tộc luôn có vị trí chiến lược trong sự nghiệp cách mạng” được khẳng định tại Đại hội nào dưới đây?",
        options: [
            "Đại hội IX.",
            "Đại hội X.",
            "Đại hội XI.",
            "Đại hội XII."
        ],
        correct: 0
    },
    {
        id: 645,
        question: "Quan điểm, chính sách của Đảng, Nhà nước ta đối với vấn đề dân tộc trong giai đoạn hiện nay được khẳng định chủ yếu tại...",
        options: [
            "Nghị quyết số 23-NQ/TW ngày 12/3/2003.",
            "Nghị quyết số 24-NQ/TW ngày 12/3/2003.",
            "Nghị quyết số 23-NQ/TW ngày 12/3/2004.",
            "Nghị quyết số 24-NQ/TW ngày 12/3/2004."
        ],
        correct: 1
    },
    {
        id: 646,
        question: "“Đề án tổng thể phát triển kinh tế - xã hội vùng đồng bào dân tộc thiểu số và miền núi giai đoạn 2021 - 2030” được Chính phủ phê duyệt vào năm...",
        options: [
            "2017.",
            "2018.",
            "2019.",
            "2020."
        ],
        correct: 2
    },
    {
        id: 647,
        question: "Nguyên tắc cơ bản nào dưới đây được Đảng và Nhà nước ta thực hiện nhất quán trong các chủ trương, chính sách về dân tộc?",
        options: [
            "Đoàn kết, tập trung cho phát triển đồng bào thiểu số.",
            "Đoàn kết, tập trung cho phát triển đồng bào đa số.",
            "Bình đẳng, đoàn kết, tôn trọng giúp nhau cùng phát triển.",
            "Bình đẳng, đoàn kết, xây dựng đất nước theo con đường chủ nghĩa xã hội."
        ],
        correct: 2
    },
    {
        id: 648,
        question: "Chính sách dân tộc của Đảng ta phải chú trọng nhất đến lĩnh vực nào dưới đây để thực hiện bình đẳng và đoàn kết giữa các dân tộc?",
        options: [
            "Chính trị.",
            "Kinh tế.",
            "Văn hoá - xã hội.",
            "Giáo dục."
        ],
        correct: 1
    },
    {
        id: 649,
        question: "Nâng cao nhận thức của đồng bào các dân tộc thiểu số về tầm quan trọng của vấn đề dân tộc, đoàn kết các dân tộc là nội dung thực hiện chính sách dân tộc của Đảng ta trong lĩnh vực...",
        options: [
            "chính trị.",
            "kinh tế.",
            "văn hoá - xã hội.",
            "giáo dục."
        ],
        correct: 0
    },
    {
        id: 650,
        question: "Đổi mới cơ cấu kinh tế, thực hiện định canh, định cư, giao đất, giao rừng, phát triển kinh tế trang trại, chuyển giao công nghệ, trao đổi kinh nghiệm và bồi dưỡng nghiệp vụ quản lí là nội dung của chính sách dân tộc trong lĩnh vực...",
        options: [
            "kinh tế.",
            "chính trị.",
            "ngoại giao.",
            "quốc phòng, an ninh."
        ],
        correct: 0
    },
    {
        id: 651,
        question: "Giải quyết tốt vấn đề đoàn kết dân tộc và quan hệ dân tộc trong mối liên hệ tộc người, giữa các tộc người và liên quốc gia trong xu thế toàn cầu hoá là nội dung của chính sách dân tộc trong lĩnh vực....",
        options: [
            "kinh tế.",
            "chính trị.",
            "ngoại giao.",
            "quốc phòng, an ninh."
        ],
        correct: 3
    },
    {
        id: 652,
        question: "Giữ gìn và phát huy giá trị văn hoá truyền thống của các tộc người, phát triển ngôn ngữ, xây dựng đời sống văn hoá ở cơ sở, nâng cao trình độ văn hoá cho nhân dân các dân tộc là nội dung của chính sách dân tộc trong lĩnh vực...",
        options: [
            "xã hội.",
            "chính trị.",
            "giáo dục.",
            "văn hoá."
        ],
        correct: 3
    },
    {
        id: 653,
        question: "Đảm bảo an sinh xã hội, thực hiện bình đẳng, công bằng thông qua việc thực hiện chính sách phát triển kinh tế - xã hội, xoá đói giảm nghèo, dân số, y tế, giáo dục trên cơ sở chú ý đến tính đặc thù mỗi vùng, mỗi dân tộc là nội dung của chính sách dân tộc trong lĩnh vực...",
        options: [
            "xã hội.",
            "chính trị.",
            "giáo dục.",
            "kinh tế."
        ],
        correct: 0
    },
    {
        id: 654,
        question: "Một hình thái ý thức xã hội phản ánh một cách hoang đường hư ảo hiện thực khách quan, thông qua sự phản ánh đó, các lực lượng tự nhiên và xã hội đều trở thành siêu tự nhiên, thần bí là nội dung thể hiện bản chất của khái niệm...",
        options: [
            "tôn giáo.",
            "tín ngưỡng.",
            "văn hoá.",
            "mê tín."
        ],
        correct: 0
    },
    {
        id: 655,
        question: "Theo Luật Tín ngưỡng, Tôn giáo Việt Nam (2016), niềm tin của con người tồn tại với hệ thống quan niệm và hoạt động bao gồm đối tượng tôn thờ, giáo lí, giáo luật, lễ nghi và tổ chức là nội dung thể hiện khái niệm...",
        options: [
            "tín ngưỡng.",
            "tôn giáo.",
            "mê tín dị đoan.",
            "hệ thống giáo lí."
        ],
        correct: 1
    },
    {
        id: 656,
        question: "Niềm tin của con người được thể hiện thông qua những lễ nghi gắn liền với phong tục, tập quán truyền thống để mang lại sự bình an về tinh thần cho cá nhân và cộng đồng là nội dung của khái niệm",
        options: [
            "tôn giáo.",
            "mê tín.",
            "mê tín dị đoan.",
            "tín ngưỡng."
        ],
        correct: 3
    },
    {
        id: 657,
        question: "Trong mối quan hệ với tín ngưỡng, tôn giáo là...",
        options: [
            "một khái niệm rộng hơn, bao trùm tín ngưỡng.",
            "khái niệm nhỏ hơn, là một loại hình (dạng) tín ngưỡng.",
            "một khái niệm tương đương tín ngưỡng.",
            "một khái niệm hoàn toàn độc lập, không có mối liên hệ."
        ],
        correct: 1
    },
    {
        id: 658,
        question: "Tin một cách mê muội, mù quáng vào những điều thiếu cơ sở khoa học là biểu hiện của...",
        options: [
            "tôn giáo.",
            "tín ngưỡng.",
            "mê tín.",
            "dị đoan."
        ],
        correct: 2
    },
    {
        id: 659,
        question: "Sự suy đoán, hành động một cách tuỳ tiện với những hành vi sai lệch quá mức, trái với các giá trị văn hoá, đạo đức, pháp luật, gây tổn hại cho cá nhân và cộng đồng là biểu hiện của...",
        options: [
            "dị đoan.",
            "tín ngưỡng.",
            "tôn giáo.",
            "mê tín."
        ],
        correct: 0
    },
    {
        id: 660,
        question: "Thể hiện niềm tin rằng loài người có quan hệ họ hàng với một số loài vật, cây cỏ, đồ vật, hiện tượng trong đời sống là nội dung của...",
        options: [
            "ma thuật giáo.",
            "sa man giáo.",
            "tô tem giáo.",
            "bái vật giáo."
        ],
        correct: 2
    },
    {
        id: 661,
        question: "Loại hình tôn giáo mà con người thể hiện niềm tin vào khả năng tác động đến các hiện tượng xuất hiện trong tự nhiên, thông qua những hành động như cầu khấn, phù phép, bùa chú là biểu hiện của...",
        options: [
            "tô tem giáo.",
            "sa man giáo.",
            "bái vật giáo.",
            "ma thuật giáo."
        ],
        correct: 3
    },
    {
        id: 662,
        question: "Loại hình tôn giáo mà ở đó người ta tôn thờ và có những hành vi thể hiện niềm tin, sự tôn thờ một số vật như hòn đá, gốc cây, bức tường,... có thể có những thuộc tính siêu nhiên là biểu hiện của...",
        options: [
            "tô tem giáo.",
            "bái vật giáo.",
            "sa man giáo.",
            "vật linh giáo."
        ],
        correct: 1
    },
    {
        id: 663,
        question: "Loại hình tôn giáo mà người ta tin rằng các sự vật, hiện tượng trong tự nhiên cũng giống như con người, đều có linh hồn là biểu hiện của...",
        options: [
            "tô tem giáo.",
            "ma thuật giáo.",
            "vật linh giáo.",
            "sa man giáo."
        ],
        correct: 2
    },
    {
        id: 664,
        question: "Loại hình tôn giáo sùng bái lãnh tụ, thủ lĩnh, thánh thần bộ lạc hay các tổ chức bộ lạc là biểu hiện của...",
        options: [
            "sa man giáo.",
            "tô tem giáo.",
            "vật linh giáo.",
            "ma thuật giáo."
        ],
        correct: 0
    },
    {
        id: 665,
        question: "Nội dung nào dưới đây là đặc điểm của các loại hình tôn giáo trong xã hội nguyên thuỷ?",
        options: [
            "Có hệ thống tổ chức và những người hoạt động tôn giáo chuyên nghiệp.",
            "Đã có hệ thống tổ chức chặt chẽ.",
            "Chưa có hệ thống tổ chức nhưng có những người hoạt động tôn giáo chuyên nghiệp.",
            "Chưa có hệ thống tổ chức và những người hoạt động tôn giáo chuyên nghiệp."
        ],
        correct: 3
    },
    {
        id: 666,
        question: "Tôn giáo nguyên thuỷ phản ánh một thực trạng xã hội mà...",
        options: [
            "mâu thuẫn giai cấp ngày càng sâu sắc.",
            "sự áp bức giai cấp bắt đầu xuất hiện.",
            "nhận thức của con người quá thấp kém, thậm chí mông muội.",
            "đời sống vật chất, tinh thần của con người còn nhiều khó khăn."
        ],
        correct: 2
    },
    {
        id: 667,
        question: "Loại hình tôn giáo mà đối tượng thờ phụng là những vị thần của một dân tộc; ảnh hưởng của vị thần đó chỉ giới hạn chủ yếu trong phạm vi một dân tộc nhất định là nội dung thể hiện khái niệm....",
        options: [
            "tôn giáo vùng miền.",
            "tôn giáo khu vực.",
            "tôn giáo dân tộc.",
            "tôn giáo quốc tế."
        ],
        correct: 2
    },
    {
        id: 668,
        question: "Đặc trưng nổi bật của tôn giáo dân tộc là...",
        options: [
            "tính chất dân tộc.",
            "tính chất giai cấp.",
            "tính chất khu vực.",
            "tính chất vùng miền."
        ],
        correct: 0
    },
    {
        id: 669,
        question: "Vượt ra khỏi phạm vi một dân tộc, một quốc gia, tôn giáo này ảnh hưởng đến nhiều quốc gia, nhiều khu vực khác nhau, thậm chí, toàn thế giới, đây là hình thức...",
        options: [
            "tôn giáo dân tộc.",
            "tôn giáo khu vực.",
            "tôn giáo vùng miền.",
            "tôn giáo khu vực và tôn giáo thế giới."
        ],
        correct: 3
    },
    {
        id: 670,
        question: "Đặc trưng nổi bật của tôn giáo khu vực và tôn giáo thế giới là...",
        options: [
            "tính đa vùng miền, đơn quốc gia.",
            "tính đơn dân tộc, đơn quốc gia.",
            "tính đa dân tộc, đa quốc gia.",
            "tính đơn dân tộc, đa quốc gia."
        ],
        correct: 2
    },
    {
        id: 671,
        question: "Tôn giáo nào dưới đây ra đời ở Việt Nam...",
        options: [
            "Đạo Phật.",
            "Đạo Cao Đài.",
            "Đạo Hồi.",
            "Đạo Thiên Chúa."
        ],
        correct: 1
    },
    {
        id: 672,
        question: "Tôn giáo nào dưới đây không phải là tôn giáo ra đời ở Việt Nam?",
        options: [
            "Tứ Ân Hiếu Nghĩa.",
            "Đạo Phật.",
            "Đạo Cao Đài.",
            "Đạo Hoà Hảo."
        ],
        correct: 1
    },
    // Chương 6 - thêm 50 câu (151-200)
    {
        id: 673,
        question: "Nhận định “Tất cả mọi tôn giáo chẳng qua chỉ là sự phản ánh hư ảo - vào trong đầu óc của con người - những lực lượng ở bên ngoài chi phối cuộc sống hằng ngày của họ, chỉ là sự phản ánh trong đó những lực lượng ở trần thế đang mang hình thức những lực lượng siêu trần thế” là của...",
        options: [
            "C. Mác.",
            "Ph. Ăngghen.",
            "V.I. Lênin.",
            "Hồ Chí Minh."
        ],
        correct: 1
    },
    {
        id: 674,
        question: "Nhận định: “Tôn giáo là sự tự ý thức và sự tự cảm giác của con người chưa tìm được bản thân mình hoặc đã lại để mất bản thân mình một lần nữa” là của...",
        options: [
            "C. Mác.",
            "Ph. Ăngghen.",
            "V.I. Lênin.",
            "Hồ Chí Minh."
        ],
        correct: 0
    },
    {
        id: 675,
        question: "Tôn giáo là một hiện tượng xã hội phản ánh sự bất lực và bế tắc của con người trước tự nhiên và xã hội, tuy nhiên, tôn giáo cũng chứa đựng một số giá trị phù hợp với đạo đức, đạo lí của con người là nội dung thể hiện...",
        options: [
            "nguồn gốc của tôn giáo.",
            "tính chất của tôn giáo.",
            "chức năng của tôn giáo.",
            "bản chất của tôn giáo."
        ],
        correct: 3
    },
    {
        id: 676,
        question: "Tôn giáo mang thế giới quan...",
        options: [
            "duy tâm.",
            "duy vật.",
            "vừa duy vật, vừa duy tâm.",
            "duy vật biện chứng."
        ],
        correct: 0
    },
    {
        id: 677,
        question: "Nội dung nào dưới đây phản ánh đúng nhất lập trường của những người cộng sản về vấn đề tín ngưỡng, tôn giáo?",
        options: [
            "Nhanh chóng xoá bỏ tín ngưỡng, tôn giáo.",
            "Luôn tôn trọng quyền tự do tín ngưỡng, tôn giáo của nhân dân.",
            "Luôn tôn trọng quyền tự do tín ngưỡng, tôn giáo của nhân dân.",
            "Sử dụng bạo lực để giải quyết vấn đề tôn giáo."
        ],
        correct: 2
    },
    {
        id: 678,
        question: "Khi nghiên cứu vấn đề tôn giáo, để tránh quan điểm, tư tưởng, nhận thức có tính cực đoan, ta không được đối lập một cách cực đoan tôn giáo với...",
        options: [
            "giáo dục.",
            "các vấn đề chính trị.",
            "khoa học.",
            "nền kinh tế thị trường."
        ],
        correct: 2
    },
    {
        id: 679,
        question: "Nội dung nào sau đây KHÔNG phải là nguồn gốc dẫn tới sự ra đời của tôn giáo?",
        options: [
            "Tự nhiên, kinh tế - xã hội.",
            "Giáo dục.",
            "Nhận thức.",
            "Tâm lí."
        ],
        correct: 1
    },
    {
        id: 680,
        question: "Sự bất lực của con người trong cuộc đấu tranh với tự nhiên, xã hội để giải quyết các yêu cầu, các mục đích kinh tế — xã hội, cũng như cuộc sống của bản thân họ là nội dung phản ánh nguồn gốc....",
        options: [
            "tự nhiên, kinh tế - xã hội của tôn giáo.",
            "nhận thức của tôn giáo.",
            "tâm lí của tôn giáo.",
            "văn hoá của tôn giáo."
        ],
        correct: 0
    },
    {
        id: 681,
        question: "Sự bần cùng về kinh tế, nạn áp bức về chính trị, sự hiện diện của những bất công xã hội cùng với những thất vọng, bất hạnh trong cuộc đấu tranh của giai cấp bị trị là nội dung phản ánh nguồn gốc...",
        options: [
            "tự nhiên của tôn giáo.",
            "nhận thức của tôn giáo.",
            "kinh tế - xã hội của tôn giáo.",
            "tâm lí của tôn giáo."
        ],
        correct: 2
    },
    {
        id: 682,
        question: "Câu nói: “Sự bất lực của giai cấp bị bóc lột trong cuộc đấu tranh chống bọn bóc lột tất nhiên đẻ ra lòng tin vào cuộc đời đẹp hơn ở thế giới bên kia, cũng giống y như sự bất lực của con người dã man trong cuộc đấu tranh chống thiên nhiên đẻ ra lòng tin vào thần thánh, ma quỷ và những phép màu...” là của...",
        options: [
            "G.W.F. Hegel.",
            "C. Mác.",
            "Ph. Ăngghen.",
            "V.I. Lênin."
        ],
        correct: 3
    },
    {
        id: 683,
        question: "Khi khoảng cách giữa biết và chưa biết vẫn tồn tại, khi những điều mà khoa học chưa giải thích được, thì điều này được giải thích thông qua lăng kính các tôn giáo là nội dung của nguồn gốc...",
        options: [
            "kinh tế - xã hội.",
            "nhận thức.",
            "tâm lí.",
            "văn hoá."
        ],
        correct: 1
    },
    {
        id: 684,
        question: "Con người chỉ sáng tạo ra tôn giáo khi trình độ nhận thức đạt tới khả năng tư duy...",
        options: [
            "logic và trừu tượng.",
            "tổng hợp và phân tích.",
            "trừu tượng hoá, khái quát hoá.",
            "chi tiết hoá, trừu tượng hoá."
        ],
        correct: 2
    },
    {
        id: 685,
        question: "Câu: “Sự sợ hãi sinh ra thần linh” bàn đến nguồn gốc nào dưới đây của tôn giáo?",
        options: [
            "Tự nhiên, kinh tế - xã hội.",
            "Nhận thức.",
            "Tâm lí.",
            "Văn hoá."
        ],
        correct: 2
    },
    {
        id: 686,
        question: "Câu: “Sợ hãi trước các thế lực mù quáng của tư bản... là nguồn gốc sâu xa của tôn giáo hiện đại” là của...",
        options: [
            "G.W.F. Hegel.",
            "C. Mác.",
            "Ph. Ăngghen.",
            "V.I. Lênin."
        ],
        correct: 3
    },
    {
        id: 687,
        question: "Không chỉ sự sợ hãi, lo lắng mà ngay cả tình yêu, lòng biết ơn, sự kính trọng,... trong mối quan hệ giữa con người với tự nhiên và con người với con người nhiều khi cũng được thể hiện qua tín ngưỡng, tôn giáo là nội dung thể hiện nguồn gốc nào dưới đây của tôn giáo?",
        options: [
            "Tâm lí.",
            "Nhận thức.",
            "Tự nhiên.",
            "Kinh tế - xã hội."
        ],
        correct: 0
    },
    {
        id: 688,
        question: "Tôn giáo có tính chất nào dưới đây?",
        options: [
            "Tính lịch sử.",
            "Tính logic.",
            "Tính quần chúng.",
            "Tính chính trị."
        ],
        correct: 2
    },
    {
        id: 689,
        question: "Tôn giáo có tính chất nào dưới đây?",
        options: [
            "Tính chính trị.",
            "Tính logic.",
            "Tính khái quát.",
            "Tính tổng hợp."
        ],
        correct: 0
    },
    {
        id: 690,
        question: "Tôn giáo hình thành, tồn tại và phát triển trong những giai đoạn lịch sử nhất định, nó có khả năng biến đổi, thích nghi với nhiều chế độ chính trị - xã hội, khi các điều kiện kinh tế, xã hội thay đổi, tôn giáo cũng thay đổi theo là nội dung thể hiện...",
        options: [
            "tính lịch sử của tôn giáo.",
            "tính quần chúng của tôn giáo.",
            "tính chính trị của tôn giáo.",
            "tính chính trị - lịch sử của tôn giáo."
        ],
        correct: 0
    },
    {
        id: 691,
        question: "Việc các tôn giáo bị phân liệt, chia tách thành nhiều tôn giáo, nhiều hệ phái khác nhau do sự thay đổi của các điều kiện lịch sử, kinh tế - xã hội phản ánh tính chất nào dưới đây của tôn giáo?",
        options: [
            "Tính lịch sử.",
            "Tính quần chúng,",
            "Tính chính trị.",
            "Tính khái quát."
        ],
        correct: 0
    },
    {
        id: 692,
        question: "Theo quan điểm của chủ nghĩa Mác - Lênin, khi khoa học và giáo dục giúp cho đại đa số quần chúng nhân dân nhận thức được bản chất của các hiện tượng tự nhiên, tôn giáo sẽ...",
        options: [
            "ngày càng phát triển.",
            "biến mất hoàn toàn.",
            "trở nên khoa học.",
            "dần mất đi vị trí của nó."
        ],
        correct: 3
    },
    {
        id: 693,
        question: "Tôn giáo là một hiện tượng xã hội phổ biến ở tất cả các dân tộc, quốc gia, châu lục; không một quốc gia dân tộc nào không có một hay nhiều tôn giáo là nội dung thể hiện...",
        options: [
            "tính phổ biến của tôn giáo.",
            "tính quốc tế của tôn giáo.",
            "tính quần chúng của tôn giáo.",
            "tính lịch sử của tôn giáo."
        ],
        correct: 2
    },
    {
        id: 694,
        question: "Số lượng tín đồ tôn giáo đông đảo, các tôn giáo là nơi sinh hoạt văn hoá, tinh thần của một bộ phận khá đông đảo quần chúng nhân dân là nội dung thể hiện tính chất nào dưới đây của tôn giáo?",
        options: [
            "Tính quần chúng.",
            "Tính chính trị.",
            "Tính xã hội.",
            "Tính giai cấp."
        ],
        correct: 0
    },
    {
        id: 695,
        question: "Khi xã hội có sự phân chia giai cấp, có sự khác biệt, sự đối kháng về lợi ích kinh tế, chính trị giữa các giai cấp thì tôn giáo xuất hiện thêm...",
        options: [
            "tính lịch sử.",
            "tính quần chúng.",
            "tính văn hoá.",
            "tính chính trị."
        ],
        correct: 3
    },
    {
        id: 696,
        question: "Nội dung nào dưới đây không phải là chức năng của tôn giáo?",
        options: [
            "Thế giới quan.",
            "Đền bù hư ảo.",
            "Điều chỉnh hành vi đạo đức.",
            "Kinh tế."
        ],
        correct: 3
    },
    {
        id: 697,
        question: "Nội dung nào dưới đây là chức năng của tôn giáo?",
        options: [
            "Liên kết cộng đồng và chuyển tải, bảo lưu văn hoá.",
            "Phát triển xã hội.",
            "Kinh tế.",
            "Đối nội, đối ngoại."
        ],
        correct: 0
    },
    {
        id: 698,
        question: "Tôn giáo giúp con người có những nhận thức nhất định về thế giới và con người, thông qua hệ thống giáo thuyết của nó là nội dung thể hiện chức năng nào dưới đây của tôn giáo?",
        options: [
            "Chức năng đền bù hư ảo.",
            "Chức năng thế giới quan.",
            "Chức năng điều chỉnh hành vi đạo đức.",
            "Chức năng liên kết cộng đồng và chuyển tải, bảo lưu văn hoá."
        ],
        correct: 1
    },
    {
        id: 699,
        question: "Sự phản ánh thế giới của tôn giáo là sự phản ánh có tính chất ...",
        options: [
            "chân thực.",
            "khách quan.",
            "hoang đường, hư ảo.",
            "chân thực, chủ quan."
        ],
        correct: 2
    },
    {
        id: 700,
        question: "Trong phản ánh tôn giáo, con người đưa những sức mạnh trần thế phản chiếu trong tư duy của mình, trong sự tưởng tượng của mình thành một cái tồn tại ở bên ngoài tư duy của mình và gán cho nó một sức mạnh siêu nhiên là nội dung thể hiện tính chất nào dưới đây trong sự phản ánh thế giới của tôn giáo?",
        options: [
            "Chân thực, khách quan.",
            "Chân thực, chủ quan.",
            "Hoang đường, hư ảo.",
            "Khách quan, mơ hồ."
        ],
        correct: 2
    },
    {
        id: 701,
        question: "Ý nào dưới đây thể hiện đầy đủ nhất nội dung luận điểm của C. Mác: “Tôn giáo là thuốc phiện của nhân dân”?",
        options: [
            "Tôn giáo là một liều thuốc có tính chất gây nghiện, tiêm nhiễm cho con người những quan niệm phi khoa học.",
            "Tôn giáo làm dịu nỗi đau, bù đắp những thiếu hụt về mặt tinh thần, đồng thời cũng có thể tác động có hại đối với con người.",
            "Tôn giáo nguy hiểm như một thứ thuốc phiện, cần loại bỏ ngay ra khỏi đời sống.",
            "Tôn giáo giống như thuốc phiện làm cho con người rơi vào trạng thái sống ảo, làm cho con người trở nên thiếu minh mẫn."
        ],
        correct: 1
    },
    {
        id: 702,
        question: "Tôn giáo điều chỉnh hành vi đạo đức của con người thông qua...",
        options: [
            "các quy định của pháp luật.",
            "các chuẩn mực đạo đức chung của xã hội.",
            "hệ thống giá trị chuẩn mực của tôn giáo.",
            "hệ thống quy định của địa bàn cư trú."
        ],
        correct: 2
    },
    {
        id: 703,
        question: "Nội dung nào dưới đây không là biểu hiện của chức năng liên kết cộng đồng và chuyển tải, bảo lưu văn hoá của tôn giáo?",
        options: [
            "Liên kết, giữ gìn ổn định trật tự xã hội dựa trên hệ thống giá trị và chuẩn mực chung.",
            "Tập hợp các lực lượng đấu tranh chống áp bức, bóc lột, chống lại các thế lực chính trị-xã hội phản tiến bộ đương thời.",
            "Góp phần giao lưu giữa các quốc gia, dân tộc và các nền văn hoá.",
            "Nâng cao đời sống vật chất, tinh thần của đông đảo quần chúng nhân dân."
        ],
        correct: 3
    },
    {
        id: 704,
        question: "Nền kinh tế nhiều thành phần vận hành theo cơ chế thị trường với những mặt trái của nó dẫn tới sự bất bình đẳng, sự may rủi, ngẫu nhiên, phân hoá giàu nghèo là nguyên nhân dẫn đến sự tồn tại của tôn giáo trong thời kì quá độ lên chủ nghĩa xã hội ở lĩnh vực...",
        options: [
            "nhận thức.",
            "kinh tế.",
            "văn hoá",
            "tâm lí."
        ],
        correct: 1
    },
    {
        id: 705,
        question: "Nhiều thế lực vẫn chú ý duy trì và lợi dụng tôn giáo vào các mục đích chính trị khác nhau là nội dung thể hiện nguyên nhân nào dưới đây dẫn tới sự tồn tại của tôn giáo trong thời kì quá độ lên chủ nghĩa xã hội?",
        options: [
            "Kinh tế.",
            "Văn hoá.",
            "Chính trị-xã hội.",
            "Nhận thức."
        ],
        correct: 2
    },
    {
        id: 706,
        question: "Nội dung nào dưới đây không phải là nguyên nhân chính trị-xã hội dẫn tới sự tồn tại của tôn giáo trong thời ki quá độ lên chủ nghĩa xã hội?",
        options: [
            "Nhiều thế lực chính trị vẫn chú ý duy trì và lợi dụng tôn giáo vào các mục đích chính trị khác nhau.",
            "Nỗi lo sợ của quần chúng nhân dân về chiến tranh, đói nghèo, bệnh tật hiểm nghèo.",
            "Tôn giáo tự biến đổi và thích nghi với điều kiện chính trị - xã hội mới để tồn tại.",
            "Nền kinh tế nhiều thành phần vận hành theo cơ chế thị trường với nhiều mặt trái của nó."
        ],
        correct: 3
    },
    {
        id: 707,
        question: "Sinh hoạt tín ngưỡng, tôn giáo có khả năng đáp ứng nhu cầu văn hoá, tinh thần và có ý nghĩa giáo dục về ý thức cộng đồng, đạo đức, phong cách, lối sống là nguyên nhân dẫn tới sự tồn tại của tôn giáo trong thời kì quá độ lên chủ nghĩa xã hội ở lĩnh vực nào dưới đây?",
        options: [
            "Kinh tế.",
            "Chính trị - xã hội.",
            "Văn hoá.",
            "Tâm lí."
        ],
        correct: 2
    },
    {
        id: 708,
        question: "Nhiều giá trị của các tôn giáo đang có những đóng góp to lớn và trở thành một bộ phận quan trọng trong nền văn hoá mỗi dân tộc, mỗi quốc gia là nguyên nhân dẫn tới sự tồn tại của tôn giáo trong thời kì quá độ lên chủ nghĩa xã hội ở lĩnh vực nào dưới đây?",
        options: [
            "Văn hoá.",
            "Kinh tế.",
            "Chính trị - xã hội.",
            "Nhận thức."
        ],
        correct: 0
    },
    {
        id: 709,
        question: "Còn nhiều vấn đề mà khoa học chưa thể làm rõ; mặt bằng dân trí chưa thật cao, khả năng nhận thức những vấn đề xảy ra trong cuộc sống còn nhiều hạn chế là nguyên nhân dẫn tới sự tồn tại của tôn giáo trong thời kì quá độ lên chủ nghĩa xã hội ở lĩnh vực nào dưới đây?",
        options: [
            "Kinh tế.",
            "Nhận thức.",
            "Chính trị.",
            "Văn hoá."
        ],
        correct: 1
    },
    {
        id: 710,
        question: "Con người đôi khi vẫn cảm thấy sợ hãi, lo lắng, bất an khi đối diện với những tác động bởi sức mạnh tự phát từ tự nhiên, xã hội là nguyên nhân dẫn tới sự tồn tại của tôn giáo trong thời kì quá độ lên chủ nghĩa xã hội ở lĩnh vực nào dưới đây?",
        options: [
            "Chính trị.",
            "Nhận thức.",
            "Tâm lí.",
            "Kinh tế."
        ],
        correct: 2
    },
    {
        id: 711,
        question: "Một trong những nguyên tắc cơ bản trong việc giải quyết vấn đề tôn giáo trong thời kì quá độ lên chủ nghĩa xã hội là...",
        options: [
            "phân biệt hai mặt chính trị và tư tưởng trong giải quyết vấn đề tôn giáo.",
            "dần dần loại bỏ tôn giáo ra khỏi đời sống xã hội.",
            "kiên quyết đấu tranh với những phần tử, những hoạt động lợi dụng tôn giáo chống phá cách mạng.",
            "các tôn giáo đều bình đẳng."
        ],
        correct: 0
    },
    {
        id: 712,
        question: "Nội dung nào dưới đây không phải là nguyên tắc cơ bản trong việc giải quyết vấn đề tôn giáo trong thời kì quá độ lên chủ nghĩa xã hội?",
        options: [
            "Tôn trọng, đảm bảo quyền tự do tín ngưỡng, tôn giáo và không tín ngưỡng, tôn giáo của quần chúng nhân dân.",
            "Khắc phục dần những ảnh hưởng tiêu cực của tôn giáo gắn liền với quá trình cải tạo xã hội cũ, xây dựng xã hội mới, phát huy những mặt tích cực của tôn giáo.",
            "Nhân nhượng với những phần tử, những hoạt động lợi dụng tôn giáo chống phá cách mạng.",
            "Phân biệt hai mặt chính trị và tư tưởng trong việc giải quyết vấn đề tôn giáo."
        ],
        correct: 2
    },
    {
        id: 713,
        question: "Việc theo đạo, đổi đạo, hay không theo đạo thuộc quyền tự do lựa chọn của mỗi người dân, không cá nhân, tổ chức nào được quyền can thiệp vào sự lựa chọn này là nội dung của nguyên tắc...",
        options: [
            "khắc phục dần những ảnh hưởng tiêu cực của tôn giáo phải gắn liền với quá trình cải tạo xã hội cũ, xây dựng xã hội mới.",
            "phân biệt hai mặt chính trị và tư tưởng của tôn giáo.",
            "quan điểm lịch sừ cụ thể trong việc giải quyết vấn đề tôn giáo.",
            "tôn trọng, bảo đảm quyền tự do tín ngưỡng, tôn giáo và không tín ngưỡng, tôn giáo của quần chúng nhân dân."
        ],
        correct: 3
    },
    {
        id: 714,
        question: "Mọi hành vi cấm đoán, ngăn cản tự do theo đạo, đổi đạo, bỏ đạo hay đe đoạ, bắt buộc người dân phải theo đạo đều là...",
        options: [
            "xâm phạm quyền tự do tín ngưỡng, không tín ngưỡng của nhân dân.",
            "vi phạm các giá trị đạo đức của cộng đồng.",
            "vi phạm pháp luật quốc tế.",
            "xâm phạm các giá trị văn hoá."
        ],
        correct: 0
    },
    {
        id: 715,
        question: "“Mọi sự phân biệt quyền lợi giữa công dân có tín ngưỡng, tôn giáo khác nhau là hoàn toàn không thể dung thứ được” là câu nói của...",
        options: [
            "G.W.F. Hegel.",
            "C. Mác.",
            "Ph. Ăngghen.",
            "V.I. Lênin."
        ],
        correct: 3
    },
    {
        id: 716,
        question: "“Không được tuyên bố chiến tranh với tôn giáo” là câu nói của...",
        options: [
            "C. Mác.",
            "Ph. Ăngghen.",
            "V.I. Lênin.",
            "Hồ Chí Minh."
        ],
        correct: 2
    },
    {
        id: 717,
        question: "Để đoàn kết các lực lượng quần chúng có tín ngưỡng, tôn giáo và không tín ngưỡng, tôn giáo, đấu tranh chống các luận điệu vu cáo, các hoạt động lợi dụng tôn giáo chống nhà nước xã hội chủ nghĩa, chúng ta phải đảm bảo nguyên tắc...",
        options: [
            "tôn trọng, ủng hộ các giáo hội và các chức sắc tôn giáo có ảnh hưởng lớn tới đông đảo nhân dân.",
            "ủng hộ các tôn giáo có số lượng tín đồ đông đảo.",
            "tôn trọng, đảm bảo quyền tự do tín ngưỡng, tôn giáo và không tín ngưỡng, tôn giáo của quần chúng nhân dân.",
            "ủng hộ các tôn giáo dân tộc, bài trừ các tôn giáo khu vực và thế giới."
        ],
        correct: 2
    },
    {
        id: 718,
        question: "Muốn thay đổi ý thức xã hội, trước hết cần phải thay đổi bản thân tồn tại xã hội; muốn xoá bỏ ảo tưởng nảy sinh trong đầu óc con người, phải xoá bỏ nguồn gốc sinh ra ảo tưởng ấy là cơ sở của nguyên tắc....",
        options: [
            "tôn trọng, đảm bảo quyền tự do tín ngưỡng và không tín ngưỡng của nhân dân.",
            "khắc phục dần những ảnh hưởng tiêu cực của tôn giáo phải gắn liền với quá trình cải tạo xã hội cũ, xây dựng xã hội mới.",
            "phân biệt hai mặt chính trị và tư tưởng của tôn giáo.",
            "quan điểm lịch sử cụ thể trong giải quyết vấn đề tín ngưỡng, tôn giáo."
        ],
        correct: 1
    },
    {
        id: 719,
        question: "Theo tư tưởng của chủ nghĩa Mác - Lênin, muốn khắc phục dần những ảnh hưởng tiêu cực của tôn giáo, chúng ta phải...",
        options: [
            "hạn chế dần ảnh hưởng của tôn giáo, tiến tới xoá bỏ tôn giáo khỏi đời sống xã hội.",
            "nâng cao trình độ nhận thức của người dân, dần tiến tới xoá bỏ hoàn toàn tôn giáo khỏi đời sống xã hội.",
            "tích cực cải tạo xã hội cũ, xây dựng xã hội mới: xã hội không áp bức bóc lột, không tệ nạn xã hội,...",
            "phát triển kinh tế thị trường một cách mạnh mẽ, nâng cao đời sống vật chất cho nhân dân."
        ],
        correct: 2
    },
    {
        id: 720,
        question: "Hai mặt chính trị và tư tưởng có mối quan hệ với nhau trong vấn đề tôn giáo và trong mỗi tôn giáo khi...",
        options: [
            "xã hội xuất hiện giai cấp, có mâu thuẫn và đấu tranh giai cấp.",
            "xã hội xuất hiện sản xuất hàng hoá gắn với nhu cầu mở rộng thị trường, mở rộng thuộc địa.",
            "xã hội chủ nghĩa tư bản chuyển từ giai đoạn tự do cạnh tranh sang giai đoạn độc quyền, tăng cường xâm lược các nước trên thế giới.",
            "kinh tế thị trường xuất hiện, lực lượng chính trị lợi dụng tôn giáo để đạt được mục đích của mình."
        ],
        correct: 0
    },
    {
        id: 721,
        question: "Các thế lực phản động quốc tế đang lợi dụng tôn giáo để thực hiện chiến lược “diễn biến hoà bình” nhằm....",
        options: [
            "thâu tóm thị trường.",
            "chi phối các nước trên thế giới cả về kinh tế, chính trị, văn hoá xã hội.",
            "xoá bỏ chế độ xã hội chủ nghĩa ở các nước xã hội chủ nghĩa còn lại.",
            "đẩy các nước đang phát triển vào tình trạng lệ thuộc các nước lớn."
        ],
        correct: 2
    },
    {
        id: 722,
        question: "Để phân biệt được hai mặt chính trị và tư tưởng trong việc giải quyết vấn đề tôn giáo, các đảng cộng sản cần nêu cao tinh thần...",
        options: [
            "bỏ qua vấn đề tôn giáo khi cần thiết.",
            "cảnh giác, cương quyết, kịp thời, tránh chủ quan, định kiến.",
            "mọi vấn đề liên quan đến tôn giáo đều phải giải quyết bằng bạo lực.",
            "giải quyết vấn đề tôn giáo khi có điều kiện thuận lợi."
        ],
        correct: 1
    },
    // Chương 6 - thêm 13 câu (201-213)
    {
        id: 723,
        question: "Tôn giáo không phải là một hiện tượng xã hội bất biến, vì thế khi xem xét và giải quyết vấn đề tôn giáo cần quán triệt...",
        options: [
            "quan điểm khách quan.",
            "quan điểm toàn diện.",
            "quan điểm lấy dân làm gốc.",
            "quan điểm lịch sử - cụ thể."
        ],
        correct: 3
    },
    {
        id: 724,
        question: "Nội dung nào dưới đây là đặc điểm cơ bản của tình hình tôn giáo ở Việt Nam?",
        options: [
            "Tôn giáo phát triển vô cùng mạnh mẽ.",
            "Hầu như người dân không tham gia các tổ chức tôn giáo.",
            "Đa tôn giáo.",
            "Chỉ có tôn giáo dân tộc."
        ],
        correct: 2
    },
    {
        id: 725,
        question: "Nội dung nào dưới đây không là đặc điểm cơ bản của tình hình tôn giáo ở Việt Nam?",
        options: [
            "Đa tôn giáo.",
            "Các tôn giáo luôn đồng hành cùng dân tộc, có nhiều đóng góp quan trọng trong quá trình xây dựng và bảo vệ đất nước.",
            "Hoạt động tôn giáo không thể kiểm soát.",
            "Các tôn giáo có xu hướng hội nhập, giao lưu."
        ],
        correct: 2
    },
    {
        id: 726,
        question: "Tính đến tháng 12/2017, Việt Nam có khoảng bao nhiêu tổ chức tôn giáo được công nhận về mặt tổ chức hoặc đã đăng kí hoạt động?",
        options: [
            "Trên 30 tổ chức.",
            "Trên 35 tổ chức.",
            "Dưới 40 tổ chức.",
            "Trên 40 tổ chức."
        ],
        correct: 3
    },
    {
        id: 727,
        question: "Tính đến tháng 12/2017, Việt Nam có khoảng...",
        options: [
            "23 triệu tín đồ.",
            "24 triệu tín đồ.",
            "25 triệu tín đồ.",
            "26 triệu tín đồ."
        ],
        correct: 1
    },
    {
        id: 728,
        question: "Mục đích trong chủ trương đoàn kết những người có tín ngưỡng, không có tín ngưỡng của Chủ tịch Hồ Chí Minh là...",
        options: [
            "dần xoá bỏ tôn giáo ra khỏi đời sống xã hội.",
            "tạo điều kiện thuận lợi cho sự phát triển của tôn giáo.",
            "xây dựng khối đại đoàn kết dân tộc.",
            "mở rộng giao lưu tôn giáo."
        ],
        correct: 2
    },
    {
        id: 729,
        question: "Tư tưởng các tôn giáo đều bình đẳng thể hiện thái độ nào dưới đây của Chủ tịch Hồ Chí Minh trong vấn đề tôn giáo?",
        options: [
            "Thái độ hài hoà, thiên vị,",
            "Thái độ khách quan, không thiên vị.",
            "Thái độ chủ quan, duy ý chí.",
            "Thái độ khách quan, duy ý chí."
        ],
        correct: 1
    },
    {
        id: 730,
        question: "Mục đích cao nhất trong tôn trọng quyền tự do tín ngưỡng, tôn giáo của nhân dân theo quan điểm Hồ Chí Minh là...",
        options: [
            "làm cho tôn giáo phát triển, số lượng tín đồ tôn giáo tăng nhanh.",
            "tăng nhanh số tín đồ tôn giáo, nâng cao vị thế trong xã hội.",
            "phát triển tôn giáo dân tộc.",
            "nhân dân được hạnh phúc, lợi ích của đất nước được đảm bảo."
        ],
        correct: 3
    },
    {
        id: 731,
        question: "Theo Chủ tịch Hồ Chí Minh, lí tưởng cộng sản và các học thuyết tôn giáo chân chính có điểm chung là đều muốn...",
        options: [
            "xoá bỏ tình trạng áp bức, bóc lột, bất công, xây dựng cuộc sống hoà bình, hữu nghị.",
            "tôn giáo có ảnh hưởng ngày càng lớn trong đời sống xã hội.",
            "lí giải mọi vấn đề của đời sống một cách khách quan.",
            "gắn tôn giáo với quyền lực nhà nước."
        ],
        correct: 0
    },
    {
        id: 732,
        question: "Quan điểm: “Tranh thủ những ai có thể tranh thủ được, khoan hồng cho những ai nhẹ dạ cả tin, nhưng đối với bọn ngoan cố chống phá cách mạng thì kiên quyết trừng trị” trong việc giải quyết vấn đề tôn giáo là của...",
        options: [
            "C. Mác.",
            "Ph. Ăngghen.",
            "Hồ Chí Minh.",
            "Võ Nguyên Giáp."
        ],
        correct: 2
    },
    {
        id: 733,
        question: "Quan điểm: “Những người Công giáo Việt Nam theo Pháp và bù nhìn, làm hại đồng bào, chẳng những là Việt gian, mà cũng là giáo gian. Còn những đồng bào Công giáo kháng chiến mới là tín đồ chân chính của Đức Chúa” là của...",
        options: [
            "Phan Bội Châu.",
            "Hồ Chí Minh.",
            "Võ Nguyên Giáp.",
            "Phạm Văn Đồng."
        ],
        correct: 1
    },
    {
        id: 734,
        question: "Quan điểm, chính sách của Đảng, Nhà nước ta đối với tôn giáo, tín ngưỡng trong giai đoạn hiện nay được thể hiện chủ yếu trong...",
        options: [
            "Nghị quyết số 25-NQ/TW ngày 12/3/2003.",
            "Nghi quyết số 26-NQ/TW ngày 12/3/2003.",
            "Nghị quyết số 27-NQ/TW ngày 12/3/2003.",
            "Nghị quyết số 25-NQ/TW ngày 13/3/2003."
        ],
        correct: 0
    },
    {
        id: 735,
        question: "Công tác tôn giáo là trách nhiệm của cả hệ thống chính trị bao gồm hệ thống tổ chức Đảng, chính quyền, Mặt trận Tổ quốc và...",
        options: [
            "Đoàn Thanh niên, do Nhà nước lãnh đạo",
            "các đoàn thể chính trị, do Đảng lãnh đạo.",
            "Hội Liên hiệp Phụ nữ, do Đảng lãnh đạo.",
            "các đoàn thể chính trị, do Nhà nước lãnh đạo."
        ],
        correct: 1
    },
    // Chương 7 - Gia đình trong quá trình xây dựng CNXH (50 câu đầu)
    {
        id: 736,
        question: "Gia đình được hình thành bởi hai mối quan hệ cơ bản đó là…",
        options: [
            "quan hệ họ hàng và quan hệ huyết thống",
            "quan hệ hôn nhân và quan hệ họ hàng",
            "quan hệ hôn nhân và quan hệ huyết thống",
            "quan hệ huyết thống và quan hệ xã hội"
        ],
        correct: 2
    },
    {
        id: 737,
        question: "Quan hệ nền tảng hình thành nên các mối quan hệ khác trong gia đình, là cơ sở pháp lý cho sự tồn tại của mỗi gia đình đó là quan hệ…",
        options: [
            "hôn nhân",
            "huyết thống",
            "họ hàng",
            "xã hội"
        ],
        correct: 0
    },
    {
        id: 738,
        question: "Quan hệ giữa những người có cùng một dòng máu nảy sinh từ quan hệ hôn nhân là quan hệ…",
        options: [
            "họ hàng",
            "Họ tộc",
            "Gia đình",
            "huyết thống"
        ],
        correct: 3
    },
    {
        id: 739,
        question: "Mối quan hệ tự nhiên, là yếu tố mạnh mẽ nhất gắn kết các thành viên trong gia đình với nhau đó là quan hệ…",
        options: [
            "tình cảm",
            "kinh tế",
            "huyết thống",
            "hôn nhân"
        ],
        correct: 2
    },
    {
        id: 740,
        question: "Quan hệ hôn nhân còn được gọi là quan hệ giữa…",
        options: [
            "hai gia đình nhà trai và nhà gái",
            "vợ và chồng",
            "những người được pháp luật thừa nhận",
            "những người cùng chung sống trong một gia đình"
        ],
        correct: 1
    },
    {
        id: 741,
        question: "Quan hệ huyết thống trong gia đình chính là quan hệ giữa…",
        options: [
            "cha mẹ và con cái",
            "những người có họ hàng với nhau",
            "những người chung một dòng họ",
            "anh em họ hàng xa"
        ],
        correct: 0
    },
    {
        id: 742,
        question: "Nghĩa vụ, quyền lợi và trách nhiệm của mỗi thành viên trong gia đình được quy định bởi…",
        options: [
            "đạo đức xã hội",
            "pháp luật của mỗi quốc gia",
            "pháp lý và đạo lý",
            "nền nếp gia đình"
        ],
        correct: 2
    },
    {
        id: 743,
        question: "Quan hệ giữa cha mẹ nuôi và con nuôi chỉ được pháp luật công nhận khi…",
        options: [
            "công bố rộng rãi với mọi người xung quanh",
            "có đầy đủ thủ tục pháp lý",
            "đã làm lễ gia tiên báo cáo với họ hàng",
            "cả hai bên cha mẹ nuôi và con nuôi có nhu cầu sống cùng nhau"
        ],
        correct: 1
    },
    {
        id: 744,
        question: "Một cộng đồng người sống chung trong một không gian xác định thường được sử dụng ở góc độ quản lý nhân khẩu là nội dung thể hiện khái niệm…",
        options: [
            "hộ gia đình",
            "gia đình",
            "dòng họ",
            "dân tộc"
        ],
        correct: 0
    },
    {
        id: 745,
        question: "Gia đình tập thể là hình thức gia đình tồn tại trong hình thái kinh tế xã hội..",
        options: [
            "cộng sản nguyên thủy",
            "phong kiến",
            "tư bản chủ nghĩa",
            "cộng sản chủ nghĩa"
        ],
        correct: 0
    },
    {
        id: 746,
        question: "Gia đình mà những người chồng sống theo chế độ nhiều vợ và vợ của họ cũng sống theo chế độ nhiều chồng con cái là con chung của cả hai bên là đặc trưng của…",
        options: [
            "gia đình hạt nhân",
            "gia đình nhiều thế hệ",
            "gia đình tập thể",
            "gia đình cá thể"
        ],
        correct: 2
    },
    {
        id: 747,
        question: "Trong hình thức gia đình tập thể, việc xác định dòng dõi chủ yếu dựa vào…",
        options: [
            "huyết thống của bố",
            "huyết thống của mẹ",
            "huyết thống của cả bố và mẹ",
            "huyết thống của tất cả những người bố và tất cả những người mẹ trong gia đình"
        ],
        correct: 1
    },
    {
        id: 748,
        question: "Đặc điểm nổi bật của gia đình tập thể là…",
        options: [
            "phụ quyền dựa trên cơ sở kinh tế tập thể kinh tế gia đình cộng sản",
            "phụ quyền dựa trên cơ sở kinh tế tư nhân",
            "mẫu quyền dựa trên cơ sở kinh tế tập thể gia đình cộng sản",
            "mẫu quyền dựa trên cơ sở kinh tế cá nhân"
        ],
        correct: 2
    },
    {
        id: 749,
        question: "Sự xuất hiện của chế độ tư hữu và lao động của nam giới ngày càng được đề cao trong xã hội là nguyên nhân dẫn tới…",
        options: [
            "gia đình tập thể",
            "gia đình cá thể",
            "gia đình nhiều thế hệ",
            "gia đình hai thế hệ"
        ],
        correct: 1
    },
    {
        id: 750,
        question: "Theo quan điểm của C.Mác và Ph.Ăngghen, gia đình một vợ một chồng dựa trên quyền thống trị của người chồng nhằm chủ đích là làm cho con cái sinh ra phải có cha đẻ rõ ràng không ai tranh cãi được và sự rõ ràng ấy là cần thiết vì những người con đó sau này sẽ được hưởng tài sản của cha với tư cách là…",
        options: [
            "người con chính thống",
            "người con nối dõi",
            "người thừa kế trực tiếp",
            "người thừa kế gián tiếp"
        ],
        correct: 2
    },
    {
        id: 751,
        question: "Nội dung nào dưới đây không phản ánh đúng vị trí của gia đình trong xã hội…",
        options: [
            "gia đình là tế bào của xã hội",
            "gia đình là tổ ấm của mỗi thành viên",
            "gia đình là cầu nối giữa cá nhân với xã hội",
            "gia đình là bộ phận của làng xã"
        ],
        correct: 3
    },
    {
        id: 752,
        question: "Nhận định nào dưới đây thể hiện đúng nhất vị trí của gia đình đối với sự vận động và phát triển của xã hội…",
        options: [
            "gia đình có vai trò quan trọng đối với sự tồn tại vận động và phát triển của xã hội",
            "gia đình có vai trò quyết định đối với sự tồn tại vận động và phát triển của xã hội",
            "gia đình có vai trò không nhỏ đối với sự tồn tại vận động và phát triển của xã hội",
            "gia đình có vai trò hỗ trợ nhất định cho xã hội"
        ],
        correct: 1
    },
    {
        id: 753,
        question: "Gia đình không chỉ sản xuất ra tư liệu sinh hoạt mà còn sản xuất ra…",
        options: [
            "bản thân con người",
            "các mối quan hệ xã hội",
            "các giá trị kinh tế",
            "các giá trị tinh thần"
        ],
        correct: 0
    },
    {
        id: 754,
        question: "Gia đình như một tế bào tự nhiên là đơn vị cơ sở để tạo nên cơ thể xã hội vì…",
        options: [
            "gia đình sản xuất ra tư liệu tiêu dùng tư liệu sản xuất và các mối quan hệ xã hội khác",
            "gia đình sản xuất ra tư liệu sản xuất tái sản xuất ra con người và các mối quan hệ xã hội khác",
            "gia đình sản xuất ra tư liệu tiêu dùng, tư liệu sản xuất, tái sản xuất ra con người",
            "gia đình tái sản xuất ra con người và các mối quan hệ xã hội"
        ],
        correct: 2
    },
    {
        id: 755,
        question: "Chủ tịch Hồ Chí Minh đã từng khẳng định, hạt nhân của xã hội chính là…",
        options: [
            "các thành viên trong gia đình",
            "các hộ gia đình",
            "hộ gia đình",
            "gia đình"
        ],
        correct: 3
    },
    {
        id: 756,
        question: "Môi trường tốt nhất để mỗi cá nhân được yêu thương, nuôi dưỡng, chăm sóc, trưởng thành phát triển là…",
        options: [
            "gia đình",
            "Nhà trường",
            "dòng họ",
            "gia đình"
        ],
        correct: 0
    },
    {
        id: 757,
        question: "Cộng đồng xã hội đầu tiên đáp ứng nhu cầu quan hệ xã hội của mỗi cá nhân là…",
        options: [
            "làng xóm",
            "trường học",
            "họ hàng",
            "gia đình"
        ],
        correct: 3
    },
    {
        id: 758,
        question: "Nội dung nào dưới đây KHÔNG là chức năng cơ bản của gia đình…",
        options: [
            "tái sản xuất ra con người",
            "nuôi dưỡng giáo dục",
            "xây dựng quy định của địa phương",
            "kinh tế và tổ chức tiêu dùng"
        ],
        correct: 2
    },
    {
        id: 759,
        question: "Chức năng đặc thù của gia đình không một cộng đồng nào có thể thay thế là…",
        options: [
            "nuôi dưỡng giáo dục",
            "tái sản xuất ra con người",
            "kinh tế và tổ chức tiêu dùng",
            "thỏa mãn nhu cầu tâm sinh lý duy trì tình cảm gia đình"
        ],
        correct: 1
    },
    {
        id: 760,
        question: "Không chỉ đáp ứng nhu cầu tâm sinh lý tự nhiên của con người đáp ứng nhu cầu nòi giống của gia đình dòng họ mà còn đáp ứng nhu cầu về sức lao động và duy trì sự trường tồn của xã hội là nội dung thể hiện chức năng nào của gia đình…",
        options: [
            "thỏa mãn nhu cầu tâm sinh lý duy trì tình cảm gia đình",
            "kinh tế và tổ chức tiêu dùng",
            "tái sản xuất ra con người",
            "nuôi dưỡng giáo dục"
        ],
        correct: 2
    },
    {
        id: 761,
        question: "Việc thực hiện chức năng tái sản xuất ra con người không chỉ là việc riêng của gia đình mà là vấn đề xã hội vì thực hiện chức năng này quyết định…",
        options: [
            "quy mô dân số, mật độ dân cư, chất lượng cuộc sống người lao động",
            "tỷ lệ gia tăng dân số chất lượng nguồn lao động của mỗi quốc gia",
            "quy mô dân số, mật độ dân cư, chất lượng nguồn lao động",
            "mật độ dân cư, chất lượng nguồn lao động của mỗi quốc gia"
        ],
        correct: 2
    },
    {
        id: 762,
        question: "Chức năng nào dưới đây thể hiện tình cảm thiêng liêng trách nhiệm của cha mẹ với con cái đồng thời thể hiện trách nhiệm của gia đình với xã hội…",
        options: [
            "thỏa mãn nhu cầu tâm sinh lý duy trì tình cảm gia đình",
            "kinh tế và tổ chức tiêu dùng",
            "tái sản xuất ra con người",
            "nuôi dưỡng giáo dục"
        ],
        correct: 3
    },
    {
        id: 763,
        question: "Chức năng nào dưới đây của gia đình có ý nghĩa rất quan trọng tới việc hình thành nhân cách đạo đức lối sống của mỗi người…",
        options: [
            "nuôi dưỡng giáo dục",
            "thỏa mãn nhu cầu tâm sinh lý duy trì tình cảm gia đình",
            "kinh tế và tổ chức tiêu dùng",
            "tái sản xuất ra con người"
        ],
        correct: 0
    },
    {
        id: 764,
        question: "Gia đình thực hiện chức năng nào dưới đây để góp phần to lớn vào việc đào tạo thế hệ trẻ nâng cao chất lượng nguồn lao động…",
        options: [
            "thỏa mãn nhu cầu tâm sinh lý duy trì tình cảm gia đình",
            "kinh tế và tổ chức tiêu dùng",
            "nuôi dưỡng, giáo dục",
            "tái sản xuất ra con người"
        ],
        correct: 2
    },
    {
        id: 765,
        question: "Thực hiện chức năng nào dưới đây của gia đình đòi hỏi cha mẹ phải có kiến thức cơ bản, tương đối toàn diện về mọi mặt?",
        options: [
            "Thỏa mãn nhu cầu tâm sinh lý duy trì tình cảm gia đình.",
            "Kinh tế và tổ chức tiêu dùng.",
            "Tái sản xuất ra con người.",
            "Nuôi dưỡng, giáo dục."
        ],
        correct: 3
    },
    {
        id: 766,
        question: "Xét ở chức năng kinh tế và tổ chức tiêu dùng, gia đình có đặc thù nào dưới đây mà các đơn vị kinh tế khác không có được?",
        options: [
            "Tham gia trực tiếp vào quá trình sản xuất, tái sản xuất ra tư liệu lao động.",
            "Tham gia vào quá trình sản xuất và tái sản xuất ra sức lao động.",
            "Tham gia trực tiếp vào quá trình sản xuất, tái sản xuất ra tư liệu sản xuất.",
            "Tham gia trực tiếp vào quá trình sản xuất, tái sản xuất ra tư liệu tiêu dùng."
        ],
        correct: 1
    },
    {
        id: 767,
        question: "Việc sử dụng hợp lí các khoản thu nhập vào việc đảm bảo đời sống vật chất và tinh thần của mỗi thành viên, cùng với việc sử dụng quỹ thời gian rảnh rỗi để tạo nên đời sống tinh thần, thể chất lành manh là nội dung của chức năng…",
        options: [
            "tổ chức tiêu dùng của gia đình.",
            "tổ chức sản xuất của gia đình.",
            "tổ chức đời sống tinh thần của gia đình.",
            "tổ chức các mối quan hệ xã hội của gia đình."
        ],
        correct: 0
    },
    {
        id: 768,
        question: "Gia đình đảm bảo nguồn sống, đáp ứng nhu cầu vật chất, tinh thần của các thành viên trong gia đình là nội dung của chức năng…",
        options: [
            "đảm bảo đời sống vật chất và tinh thần.",
            "kinh tế và tổ chức tiêu dùng.",
            "thoả mãn mọi mặt đời sống gia đình.",
            "nuôi dưỡng, giáo dục."
        ],
        correct: 1
    },
    {
        id: 769,
        question: "Chức năng nào dưới đây tạo cho gia đình cơ cơ sở để tổ chức tốt đời sống, nuôi dạy con cái, đóng góp to lớn đối với sự phát triển xã hội?",
        options: [
            "Đảm bảo đời sống gia đình và phát triển xã hội.",
            "Thoả mãn nhu cầu tâm - sinh lí, duy trì tình cảm gia đình.",
            "Nuôi dưỡng, giáo dục.",
            "Kinh tế và tổ chức tiêu dùng."
        ],
        correct: 3
    },
    {
        id: 770,
        question: "Chức năng nào dưới đây của gia đình có nhiệm vụ thoả mãn nhu cầu tình cảm, văn hoá, tinh thần cho các thành viên, đảm bảo sự cân bằng tâm lí, bảo vệ chăm sóc sức khoẻ người ốm, người già, trẻ em?",
        options: [
            "Thoả mãn nhu cầu tâm - sinh lí",
            "Thoả mãn nhu cầu tình cảm, đời sống vật chất.",
            "Thoả mãn nhu cầu tâm - sinh lí, duy trì tình cảm gia đình.",
            "Đảm bảo đời sống tinh thần."
        ],
        correct: 2
    },
    {
        id: 771,
        question: "Cơ sở kinh tế - xã hội để xây dựng gia đình trong thời kì quá độ lên chủ nghĩa xã hội là sự phát triển của…",
        options: [
            "lực lượng sản xuất và quan hệ sản xuất xã hội chủ nghĩa.",
            "nền kinh tế nhiều thành phần, định hướng xã hội chủ nghĩa.",
            "nền kinh tế thị trường định hướng xã hội chủ nghĩa.",
            "lực lượng sản xuất gắn với công cụ lao động hiện đại."
        ],
        correct: 0
    },
    {
        id: 772,
        question: "Ý nào dưới đây là nguyên nhân sâu xa gây nên tình trạng thống trị của người đàn ông trong gia đình, sự bất bình đẳng nam nữ, giữa vợ và chồng, sự nô dịch với phụ nữ?",
        options: [
            "Chế độ công hữu về tư liệu sản xuất.",
            "Chế độ đa thê.",
            "Chế độ tư hữu về tư liệu sản xuất.",
            "Chế độ một vợ một chồng."
        ],
        correct: 2
    },
    {
        id: 773,
        question: "Sự thống trị của người đàn ông trong gia đình là kết quả của…",
        options: [
            "sự thống trị của họ về kinh tế.",
            "sự thống trị của họ về văn hoá.",
            "những quy định trong gia đình.",
            "những hủ tục lạc hậu."
        ],
        correct: 0
    },
    {
        id: 774,
        question: "Việc thiết lập chính quyền nhà nước của giai cấp công nhân và nhân dân lao động nhằm xây dựng gia đình trong thời kì quá độ lên chủ nghĩa xã hội là nội dung của cơ sở…",
        options: [
            "văn hoá.",
            "chính trị.",
            "xã hội.",
            "kinh tế."
        ],
        correct: 1
    },
    {
        id: 775,
        question: "Ở Việt Nam, tổ chức nào dưới đây là công cụ hữu hiệu nhất xoá bỏ những hủ tục lạc hậu, giải phóng phụ nữ và bảo vệ hạnh phúc gia đình?",
        options: [
            "Đảng Cộng sản.",
            "Hội Liên hiệp Phụ nữ.",
            "Đoàn Thanh niên Cộng sản.",
            "Nhà nước."
        ],
        correct: 3
    },
    {
        id: 776,
        question: "Nội dung nào dưới đây thể hiện rõ nhất vai trò của nhà nước xã hội chủ nghĩa trong việc đảm bảo lợi ích công dân, lợi ích của các thành viên trong gia đinh, đảm bảo sự bình đẳng giới, chính sách dân số?",
        options: [
            "Phát triển kinh tế.",
            "Ổn định tình hình chính trị-xã hội.",
            "Xây dựng hệ thống pháp luật và nâng cao đời sống tinh thần.",
            "Phát triển văn hóa."
        ],
        correct: 2
    },
    {
        id: 777,
        question: "Phát triển lực lượng sản xuất và quan hệ sản xuất tương ứng - quan hệ sản xuất mới xã hội chủ nghĩa là cơ sở để xây dựng gia đình trong thời kì quá độ lên chủ nghĩa xã hội ở lĩnh vực nào dưới đây?",
        options: [
            "Chính trị - xã hội.",
            "Văn hoá.",
            "Tâm lí.",
            "Kinh tế - xã hội."
        ],
        correct: 3
    },
    {
        id: 778,
        question: "Hôn nhân tự nguyện, một vợ một chồng bình đẳng, được đảm bảo về pháp lí là biểu hiện của…",
        options: [
            "chế độ hôn nhân tiến bộ.",
            "hôn nhân được pháp luật thừa nhận.",
            "hôn nhân tự nguyện.",
            "hôn nhân bình đẳng."
        ],
        correct: 0
    },
    {
        id: 779,
        question: "Hôn nhân tự nguyện là hôn nhân xuất phát từ…",
        options: [
            "tình yêu.",
            "sự thoả mãn về kinh tế.",
            "sự đồng ý của bố mẹ hai bên.",
            "sự ủng hộ của những người xung quanh."
        ],
        correct: 0
    },
    {
        id: 780,
        question: "Nam nữ được đảm bảo quyền tự do trong việc lựa chọn người kết hôn là biểu hiện của…",
        options: [
            "hôn nhân bình đẳng.",
            "hôn nhân tự nguyện.",
            "hôn nhân được pháp luật thừa nhận.",
            "hôn nhân tích cực."
        ],
        correct: 1
    },
    {
        id: 781,
        question: "Nguyên nhân nào sau đây giữ vai trò quyết định nhất tới sự xuất hiện của hôn nhân một vợ một chồng trong lịch sử xã hội loài người?",
        options: [
            "Sự thắng lợi của những tư tưởng tiến bộ.",
            "Sự thắng lợi của chế độ tư hữu đối với chế độ công hữu nguyên thuỷ.",
            "Sự xuất hiện của các tổ chức bảo vệ quyền lợi của người phụ nữ.",
            "Vị trí, vai trò của người phụ nữ trong xã hội được thừa nhận."
        ],
        correct: 1
    },
    {
        id: 782,
        question: "Vợ và chồng đều có quyền lợi và nghĩa vụ như nhau về mọi vấn đề của cuộc sống gia đình là biểu hiện của…",
        options: [
            "hôn nhân tự nguyện.",
            "hôn nhân bình đẳng.",
            "vợ chồng bình đẳng.",
            "tự do kết hôn."
        ],
        correct: 2
    },
    {
        id: 783,
        question: "Hôn nhân được đảm bảo về mặt pháp lí là hôn nhân…",
        options: [
            "được tổ chức với sự chứng kiến của mọi người.",
            "tự nguyện trên cơ sở tình yêu nam nữ.",
            "được hai bên gia đình đồng ý.",
            "được pháp luật thừa nhận thông qua việc đăng kí kết hôn."
        ],
        correct: 3
    },
    {
        id: 784,
        question: "Yếu tố nào dưới đây giữ vai trò quyết định tới việc thúc đẩy tăng trưởng về kinh tế, tăng thu nhập của cá nhân, là cơ sở cho việc củng cố và duy trì bền vững của gia đình ở Việt Nam?",
        options: [
            "Trình độ dân trí ngày càng được nâng cao, nghề nghiệp ngày càng đa dạng.",
            "Tình cảm gắn bó giữa các thành viên trong gia đình, mọi người đều có công việc ổn định.",
            "Nền kinh tế thị trường định hướng xã hội chủ nghĩa ngày càng phát triển.",
            "Con cái được học hành đầy đủ, các thành viên đều được tạo điều kiện phát triển, cơ hội việc làm ngày càng cao."
        ],
        correct: 2
    },
    // Chương 7 - Gia đình (tiếp 30 câu)
    {
        id: 785,
        question: "Biểu hiện nào dưới đây không là tác động tiêu cực của kinh tế thị trường định hướng xã hội chủ nghĩa tới gia đình ở Việt Nam?",
        options: [
            "Sự phân hoá giàu nghèo giữa các gia đình ngày càng tăng.",
            "Tăng thu nhập của cá nhân trong gia đình.",
            "Ngoại tình, li hôn có chiều hướng ngày càng phát triển.",
            "Trẻ em nghỉ học sớm, tham gia vào thị trường lao động."
        ],
        correct: 1
    },
    {
        id: 786,
        question: "Nội dung nào dưới đây là mục tiêu về xây dựng gia đình mà Đại hội đại biểu toàn quốc lần thứ XII của Đảng Cộng sản Việt Nam đã đề ra?",
        options: [
            "Xây dựng gia đình hạnh phúc, kinh tế phát triển.",
            "Xây dựng gia đình no ấm, tiến bộ, hạnh phúc, văn minh.",
            "Xây dựng gia đình bình đẳng, hạnh phúc, no ấm, tiến bộ, văn minh.",
            "Xây dựng gia đình ấm no, tự do, hạnh phúc."
        ],
        correct: 1
    },
    {
        id: 787,
        question: "Nội dung nào dưới đây là mục tiêu mà “Chiến lược phát triển gia đình Việt Nam đến năm 2020, tầm nhìn 2030” đã đề ra?",
        options: [
            "Xây dựng gia đình Việt Nam kinh tế no ấm, văn minh, tiến bộ, hạnh phúc, thực sự là tổ ấm của mỗi người, là tế bào lành mạnh của xã hội.",
            "Xây dựng gia đình Việt Nam bình đẳng, tiến bộ, hạnh phúc, thực sự là tổ ấm của mỗi người, là tế bào lành mạnh của xã hội.",
            "Xây dựng gia đình Việt Nam no ấm, tiến bộ, hạnh phúc, thực sự là tổ ấm của mỗi người, là tế bào lành mạnh của xã hội.",
            "Xây dựng gia đình Việt Nam no ấm, tiến bộ, hạnh phúc, văn minh."
        ],
        correct: 2
    },
    {
        id: 788,
        question: "Ngày Gia đình Việt Nam là ngày…",
        options: [
            "28/5.",
            "26/6.",
            "26/8.",
            "28/6."
        ],
        correct: 3
    },
    {
        id: 789,
        question: "Luật Hôn nhân và Gia đình ban hành năm 2000 ở Việt Nam được sửa đổi vào năm…",
        options: [
            "2007.",
            "2012.",
            "2014.",
            "2015."
        ],
        correct: 2
    },
    {
        id: 790,
        question: "Luật Phòng, chống bạo lực gia đình hiện hành của Việt Nam có hiệu lực thi hành năm…",
        options: [
            "2006.",
            "2007.",
            "2008.",
            "2009."
        ],
        correct: 2
    },
    {
        id: 791,
        question: "“Gia đình đơn” còn được gọi bằng tên nào dưới đây?",
        options: [
            "Gia đình tập thể.",
            "Gia đình hạt nhân.",
            "Gia đình ba thế hệ.",
            "Gia đình nhiều thế hệ."
        ],
        correct: 1
    },
    {
        id: 792,
        question: "Gia đình có ba thế hệ cùng chung sống dưới một mái nhà được gọi là…",
        options: [
            "gia đình tập thể.",
            "tứ đại đồng đường.",
            "tam đại đồng đường.",
            "gia đình hạt nhân."
        ],
        correct: 2
    },
    {
        id: 793,
        question: "Gia đình có bốn thế hệ cùng chung sống dưới một mái nhà được gọi là…",
        options: [
            "tứ đại đồng đường.",
            "gia đình hạt nhân.",
            "tam đại đồng đường.",
            "ngũ đại đồng đường."
        ],
        correct: 0
    },
    {
        id: 794,
        question: "Quy mô gia đình Việt Nam hiện nay có xu hướng…",
        options: [
            "ngày càng nhiều thế hệ.",
            "ngày càng thu nhỏ.",
            "ngày càng phức tạp.",
            "ổn định dài hạn."
        ],
        correct: 1
    },
    {
        id: 795,
        question: "Loại hình gia đình phổ biến nhất ở Việt Nam hiện nay là…",
        options: [
            "gia đình hạt nhân.",
            "tam đại đồng đường.",
            "tứ đại đồng đường.",
            "gia đình đơn thân."
        ],
        correct: 0
    },
    {
        id: 796,
        question: "Để đảm bảo lợi ích của gia đình và sự phát triển bền vững của xã hội, thông điệp mới trong kế hoạch hoá gia đình của Việt Nam hiện nay là…",
        options: [
            "mỗi gia đình chỉ nên có từ 1 đến 2 con.",
            "mỗi gia đình nên sinh đủ 2 con.",
            "mỗi gia đình chỉ nên sinh 1 con.",
            "gia đình có điều kiện nuôi dưỡng có thể sinh 3 con."
        ],
        correct: 1
    },
    {
        id: 797,
        question: "Biểu hiện nào dưới đây thể hiện đầy đủ nhất sự tiến bộ trong việc thực hiện chức năng tái sản xuất ra con người của gia đình Việt Nam hiện nay?",
        options: [
            "Giảm mức sinh của phụ nữ, tăng số con mong muốn, không nhất định phải có con trai.",
            "Giảm nhu cầu nhất thiết phải có con trai, người phụ nữ không nhất định phải sinh con.",
            "Tăng số con mong muốn, giảm nhu cầu nhất thiết phải có con trai.",
            "Giảm mức sinh của phụ nữ, giảm số con mong muốn, giảm nhu cầu nhất thiết phải có con trai."
        ],
        correct: 3
    },
    {
        id: 798,
        question: "Từ một đơn vị kinh tế khép kín sản xuất để đáp ứng nhu cầu của gia đình thành đơn vị mà sản xuất chủ yếu để đáp ứng nhu cầu của người khác hay của xã hội là biểu hiện của sự biến đổi trong gia đình về chức năng…",
        options: [
            "kinh tế và tổ chức tiêu dùng.",
            "tổ chức tiêu dùng.",
            "sản xuất.",
            "chính trị - xã hội."
        ],
        correct: 0
    },
    {
        id: 799,
        question: "Trong kinh tế thị trường hiện đại, nguyên nhân cơ bản nhất dẫn đến kinh tế gia đình gặp rất nhiều khó khăn, trở ngại trong việc chuyển hướng sản xuất kinh doanh hàng hoá theo hướng chuyên sâu là do…",
        options: [
            "trình độ của người lao động còn thấp, kinh tế gia đình quy mô lớn, khó quản lí.",
            "người lao động vẫn mang tác phong nông nghiệp, tư duy tiểu nông, kinh nghiệm quản lí còn hạn chế.",
            "cơ chế quản lí còn nhiều bất cập, thủ tục hành chính còn phức tạp.",
            "thiếu vốn đầu tư ban đầu và đất đai sản xuất."
        ],
        correct: 1
    },
    {
        id: 800,
        question: "Nguyên nhân nào dưới đây giữ vai trò quyết định làm cho gia đình trở thành một đơn vị tiêu dùng quan trọng của xã hội?",
        options: [
            "Chi tiêu hợp lí, tăng cường tiết kiệm, nguồn thu nhập bằng tiền của gia đình ngày càng eo hẹp.",
            "Sự phát triển của kinh tế hàng hoá và nguồn thu nhập bằng tiền của gia đình ngày càng tăng lên.",
            "Hàng hoá ngày càng phong phú, đa dạng, đáp ứng tốt yêu cầu của người tiêu dùng.",
            "Sản xuất hàng hoá phát triển, giao thương được đẩy mạnh, nguồn tiền cho chi dùng hàng ngày có chiều hướng tăng lên."
        ],
        correct: 1
    },
    {
        id: 801,
        question: "Giáo dục trong gia đình Việt Nam hiện nay bao gồm giáo dục đạo đức, giáo dục kiến thức khoa học hiện đại, trang bị công cụ để con cái hoà nhập với thế giới là nội dung thể hiện tính chất nào trong nội dung giáo dục của gia đình Việt Nam hiện nay?",
        options: [
            "Tính lịch sử.",
            "Tính logic.",
            "Tính toàn diện.",
            "Tính phiến diện."
        ],
        correct: 2
    },
    {
        id: 802,
        question: "Nội dung nào dưới đây mô tả đầy đủ nhất về những hạn chế trong quan hệ vợ chồng ở Việt Nam hiện nay?",
        options: [
            "Thiếu bình đẳng, vai trò của người phụ nữ chưa thực sự được thừa nhận.",
            "Lỏng lẻo, bất bình đẳng trong quan hệ vợ, chồng vẫn diễn ra ở nhiều gia đình.",
            "Lỏng lẻo, bạo lực gia đình ngày càng tăng, tỉ lệ li hôn ngày càng cao.",
            "Lỏng lẻo, gia tăng tỉ lệ li hôn, li thân, ngoại tình, chung sống không kết hôn."
        ],
        correct: 3
    },
    {
        id: 803,
        question: "Hiện nay, nguy cơ nào dưới đây là phổ biến nhất mà người cao tuổi trong gia đình ở Việt Nam phải đối mặt?",
        options: [
            "Thiếu thốn về vật chất.",
            "Thiếu thốn về thời gian.",
            "Thiếu thốn về tình cảm.",
            "Thiếu thốn về các sản phẩm giải trí."
        ],
        correct: 2
    },
    {
        id: 804,
        question: "Nội dung nào dưới đây không phải là phương hướng cơ bản xây dựng và phát triển gia đình Việt Nam trong thời kì quá độ lên chủ nghĩa xã hội?",
        options: [
            "Tăng cường sự lãnh đạo của Đảng, nâng cao nhận thức của xã hội về xây dựng và phát triển gia đinh Việt Nam.",
            "Đẩy mạnh phát triển kinh tế - xã hội, nâng cao đời sống vật chất, kinh tế hộ gia đình.",
            "Tiếp tục phát triển và nâng cao chất lượng phong trào xây dựng gia đình văn hoá.",
            "Tăng cường vai trò của các tổ chức tổ chức quốc tế nhằm giáo dục thanh niên về xây dựng gia đình hạnh phúc."
        ],
        correct: 3
    },
    {
        id: 805,
        question: "Xây dựng gia đình văn hoá: ông bà, cha mẹ mẫu mực; con cháu hiếu thảo; vợ chồng bình đẳng; các thế hệ nối tiếp nhau tiến bộ là tiêu chuẩn của …",
        options: [
            "gia đình truyền thống.",
            "gia đình văn hoá.",
            "gia đình giàu có.",
            "gia đình hiện đại."
        ],
        correct: 1
    },
    {
        id: 806,
        question: "Gia đình tập thể tồn tại trong chế độ xã hội nào?",
        options: [
            "Nguyên thủy",
            "Chiếm hữu nô lệ",
            "Phong kiến",
            "Tư bản chủ nghĩa"
        ],
        correct: 0
    },
    {
        id: 807,
        question: "Gia đình tập thể gồm các kiểu gia đình nào?",
        options: [
            "Gia đình huyết tộc",
            "Gia đình bạn thân",
            "Gia đình cặp đôi",
            "Cả A, B, C"
        ],
        correct: 3
    },
    {
        id: 808,
        question: "Gia đình cá thể bắt đầu xuất hiện trong xã hội nào?",
        options: [
            "Nguyên thủy",
            "Chiếm hữu nô lệ",
            "Phong kiến",
            "Tư bản chủ nghĩa"
        ],
        correct: 1
    },
    {
        id: 809,
        question: "Điền từ thích hợp vào (...): Theo Hồ Chí Minh, “Nếu không giải phóng (…) là xây dựng chủ nghĩa xã hội chỉ một nửa”.",
        options: [
            "Phụ nữ",
            "Đàn ông",
            "Con người",
            "Cá nhân"
        ],
        correct: 0
    },
    {
        id: 810,
        question: "Chỉ ra luận điểm đúng về gia đình?",
        options: [
            "Gia đình là một cộng đồng xã hội đặc biệt, tồn tại lâu dài trong lịch sử xã hội.",
            "Gia đình là một cộng đồng xã hội đặc biệt, chỉ tồn tại trong một giai đoạn lịch sử nhất định.",
            "Gia đình là một tổ chức trong hệ thống chính trị cơ sở.",
            "Gia đình là cầu nối giữa các bộ phận trong hệ thống chính trị cơ sở."
        ],
        correct: 0
    },
    {
        id: 811,
        question: "Cơ sở hình thành nên gia đình là gì?",
        options: [
            "Quan hệ hôn nhân.",
            "Quan hệ huyết thống.",
            "Quan hệ chính trị.",
            "Quan hệ xã hội."
        ],
        correct: 0
    },
    {
        id: 812,
        question: "Yếu tố nào quyết định nhất đến sự ra đời gia đình một vợ một chồng?",
        options: [
            "Chế độ tư hữu về tư liệu sản xuất.",
            "Chế độ hôn nhân tiến bộ.",
            "Nhu cầu phát triển của sản xuất hàng hóa.",
            "Nhu cầu phát triển của sản xuất tự cấp, tự túc."
        ],
        correct: 0
    },
    {
        id: 813,
        question: "Đặc điểm của hình thức gia đình tập thể là gì?",
        options: [
            "Chế độ mẫu hệ.",
            "Chế độ phụ hệ.",
            "Chế độ tư hữu.",
            "Chế độ bóc lột"
        ],
        correct: 0
    },
    {
        id: 814,
        question: "Yếu tố nào quyết định nhất đến sự thay thế các hình thức gia đình trong lịch sử?",
        options: [
            "Yếu tố kinh tế.",
            "Yếu tố chính trị.",
            "Yếu tố văn hóa.",
            "Yếu tố tâm linh."
        ],
        correct: 0
    },
    {
        id: 815,
        question: "Chức năng nào là đặc thù của gia đình?",
        options: [
            "Chức năng tái sản xuất ra con người.",
            "Chức năng giáo dục và xã hội hóa.",
            "Chức năng đối nội.",
            "Chức năng tổ chức tiêu dùng."
        ],
        correct: 0
    }
];

// Cấu hình chương để lọc ôn tập
const chapterConfigs = [
    { key: 'all', label: 'Tất cả chương', start: null, end: null },
    { key: 'chuong2', label: 'Chương 2', start: 93, end: 261 },
    { key: 'chuong3', label: 'Chương 3', start: 262, end: 341 },
    { key: 'chuong4', label: 'Chương 4', start: 342, end: 440 },
    { key: 'chuong5', label: 'Chương 5', start: 441, end: 522 },
    { key: 'chuong6', label: 'Chương 6', start: 523, end: 735 },
    { key: 'chuong7', label: 'Chương 7', start: 736, end: 815 }
];

// Hàm tự động phát hiện tags từ nội dung câu hỏi
function detectTags(question) {
    const tags = [];
    const text = (question.question + ' ' + question.options.join(' ')).toLowerCase();
    
    // Phát hiện mốc thời gian
    const timePatterns = [
        /\b(năm|tháng|ngày)\s+\d{1,4}\b/,
        /\b(thế kỉ|thế kỷ|thế kỷ)\s+\d{1,2}\b/i,
        /\b(thế kỉ|thế kỷ|thế kỷ)\s+(xviii|xix|xx|xxi)\b/i,
        /\b\d{4}\b/, // Năm 4 chữ số (nhưng không phải là ID)
        /\b(thời kì|thời kỳ|giai đoạn)\s+/i,
        /\b(cuối|đầu|giữa)\s+(thế kỉ|thế kỷ|thế kỷ)\s+\d{1,2}/i,
        /\b(những năm|vào năm|từ năm|đến năm)\s+\d{1,4}/i
    ];
    if (timePatterns.some(pattern => pattern.test(text))) {
        tags.push('time');
    }
    
    // Phát hiện Đại hội Đảng
    const daiHoiPatterns = [
        /\bđại hội\s+(đảng|đại biểu)/i,
        /\bđại hội\s+(iv|v|vi|vii|viii|ix|x|xi|xii|xiii)\b/i,
        /\bđại hội\s+(1|2|3|4|5|6|7|8|9|10|11|12|13)\b/i,
        /\bđại hội\s+(đổi mới|toàn quốc)/i
    ];
    if (daiHoiPatterns.some(pattern => pattern.test(text))) {
        tags.push('daihoi');
    }
    
    // Phát hiện nhân vật lịch sử
    const historicalFigures = [
        'c.mác', 'c\. mác', 'mác', 'ph.ăngghen', 'ph\. ăngghen', 'ăngghen',
        'v.i.lênin', 'v\. i\. lênin', 'lênin',
        'hồ chí minh', 'chủ tịch hồ chí minh', 'bác hồ',
        'đặng tiểu bình', 'fidel castro', 'stalin',
        'võ nguyên giáp', 'phạm văn đồng', 'nguyễn phú trọng'
    ];
    if (historicalFigures.some(figure => {
        const regex = new RegExp(figure.replace(/\./g, '\\.'), 'i');
        return regex.test(text);
    })) {
        tags.push('nhanvat');
    }
    
    // Phát hiện câu về Việt Nam
    const vietnamKeywords = [
        'việt nam', 'nước ta', 'đảng cộng sản việt nam', 'đảng ta',
        'nhân dân ta', 'đất nước ta', 'cách mạng việt nam',
        'cách mạng tháng tám', 'cách mạng tháng tư',
        'ở việt nam', 'nước ta hiện nay', 'ở nước ta'
    ];
    if (vietnamKeywords.some(keyword => text.includes(keyword))) {
        tags.push('vietnam');
    }
    
    return tags;
}

// Gán tags cho tất cả câu hỏi (chỉ chạy một lần)
function initializeTags() {
    if (!questions[0].tags) {
        questions.forEach(q => {
            q.tags = detectTags(q);
        });
    }
}

// Biến toàn cục
let currentQuestions = [...questions];
let currentQuestionIndex = 0;
let userAnswers = new Array(currentQuestions.length).fill(null);
let isReviewMode = false;
let activeChapter = 'all';
let originalQuestions = []; // Lưu danh sách câu hỏi ban đầu để làm lại câu sai
let originalUserAnswers = []; // Lưu đáp án ban đầu để map lại khi làm lại câu sai

// Khởi tạo quiz
function initQuiz() {
    // Khởi tạo tags cho tất cả câu hỏi
    initializeTags();
    
    displayQuestion();
    updateProgress();
    updateButtons();
    updateTotalQuestionsDisplay();
}

// Hiển thị câu hỏi
function displayQuestion() {
    if (isReviewMode) {
        displayQuestionWithAnswers();
        return;
    }
    
    const question = currentQuestions[currentQuestionIndex];
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('options');
    const hasAnswered = userAnswers[currentQuestionIndex] !== null;
    
    questionText.textContent = `Câu ${question.id}: ${question.question}`;
    
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'answer';
        radio.value = index;
        radio.id = `option${index}`;
        radio.checked = userAnswers[currentQuestionIndex] === index;
        radio.disabled = hasAnswered; // Vô hiệu hóa sau khi đã chọn
        
        const label = document.createElement('label');
        label.htmlFor = `option${index}`;
        label.textContent = String.fromCharCode(65 + index) + '. ' + option;
        
        optionDiv.appendChild(radio);
        optionDiv.appendChild(label);
        
        // Hiển thị đáp án đúng/sai nếu đã chọn
        if (hasAnswered) {
            // Đánh dấu đáp án đúng (màu xanh)
            if (index === question.correct) {
                optionDiv.classList.add('correct');
            }
            // Đánh dấu đáp án sai mà người dùng chọn (màu đỏ)
            if (userAnswers[currentQuestionIndex] === index && index !== question.correct) {
                optionDiv.classList.add('incorrect');
            }
        } else {
            // Thêm class nếu đã chọn (chưa hiển thị kết quả)
            if (userAnswers[currentQuestionIndex] === index) {
                optionDiv.classList.add('selected');
            }
            // Thêm sự kiện click chỉ khi chưa trả lời
            optionDiv.addEventListener('click', () => selectOption(index));
        }
        
        optionsContainer.appendChild(optionDiv);
    });
    
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
}

// Chọn đáp án
function selectOption(index) {
    userAnswers[currentQuestionIndex] = index;
    displayQuestion(); // Refresh để hiển thị selected state
    updateButtons();
    
    // Tự động chuyển sang câu tiếp theo sau 1.5 giây
    if (currentQuestionIndex < currentQuestions.length - 1) {
        setTimeout(() => {
            nextQuestion();
        }, 1500);
    }
}

// Câu trước
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
        updateProgress();
        updateButtons();
    }
}

// Câu tiếp theo
function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
        updateProgress();
        updateButtons();
    }
}

// Cập nhật progress bar
function updateProgress() {
    const progress = currentQuestions.length > 0 ? ((currentQuestionIndex + 1) / currentQuestions.length) * 100 : 0;
    document.getElementById('progressFill').style.width = progress + '%';
}

// Cập nhật nút
function updateButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === currentQuestions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
    }
}

// Nộp bài
function submitQuiz() {
    const answered = userAnswers.filter(answer => answer !== null).length;
    if (answered < currentQuestions.length) {
        const confirmSubmit = confirm(`Bạn mới trả lời ${answered}/${currentQuestions.length} câu hỏi. Bạn có chắc muốn nộp bài không?`);
        if (!confirmSubmit) return;
    }
    
    calculateScore();
    showResults();
}

// Tính điểm
function calculateScore() {
    let correct = 0;
    currentQuestions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            correct++;
        }
    });
    return correct;
}

// Hiển thị kết quả
function showResults() {
    const correct = calculateScore();
    const percentage = currentQuestions.length ? Math.round((correct / currentQuestions.length) * 100) : 0;
    
    // Lưu danh sách câu hỏi và đáp án ban đầu (chỉ lưu lần đầu, không ghi đè khi làm lại câu sai)
    if (originalQuestions.length === 0) {
        originalQuestions = [...currentQuestions];
        originalUserAnswers = [...userAnswers];
    }
    
    document.getElementById('quizContent').style.display = 'none';
    document.getElementById('resultSection').style.display = 'block';
    
    document.getElementById('scoreNumber').textContent = correct;
    document.getElementById('correctAnswers').textContent = correct;
    document.getElementById('totalAnswers').textContent = currentQuestions.length;
    document.getElementById('percentage').textContent = percentage;
    
    // Hiển thị/ẩn nút "Làm lại câu sai" dựa trên số câu sai trong danh sách gốc
    const wrongCount = originalQuestions.filter((q, idx) => originalUserAnswers[idx] !== q.correct).length;
    const retryWrongBtn = document.getElementById('retryWrongBtn');
    if (wrongCount > 0) {
        retryWrongBtn.style.display = 'inline-block';
        retryWrongBtn.textContent = `Làm lại câu sai (${wrongCount} câu)`;
    } else {
        retryWrongBtn.style.display = 'none';
    }
}

// Làm lại
function restartQuiz() {
    // Nếu đang làm lại câu sai, quay về danh sách ban đầu
    if (originalQuestions.length > 0 && currentQuestions.length !== originalQuestions.length) {
        currentQuestions = [...originalQuestions];
        userAnswers = [...originalUserAnswers];
    } else {
        userAnswers = new Array(currentQuestions.length).fill(null);
    }
    
    currentQuestionIndex = 0;
    isReviewMode = false;
    originalQuestions = [];
    originalUserAnswers = [];
    
    document.getElementById('quizContent').style.display = 'block';
    document.getElementById('resultSection').style.display = 'none';
    
    initQuiz();
}

// Xem lại đáp án
function reviewAnswers() {
    isReviewMode = true;
    currentQuestionIndex = 0;
    
    document.getElementById('quizContent').style.display = 'block';
    document.getElementById('resultSection').style.display = 'none';
    
    // Thay đổi giao diện để hiển thị đáp án đúng/sai
    displayQuestionWithAnswers();
    updateProgress();
    updateButtons();
}

// Làm lại câu sai
function retryWrongAnswers() {
    // Sử dụng danh sách gốc để lọc câu sai
    if (originalQuestions.length === 0) {
        alert('Không có dữ liệu để làm lại câu sai!');
        return;
    }
    
    // Lọc ra những câu đã trả lời sai từ danh sách gốc
    const wrongQuestions = [];
    const wrongAnswers = [];
    
    originalQuestions.forEach((question, index) => {
        if (originalUserAnswers[index] !== question.correct) {
            wrongQuestions.push(question);
            wrongAnswers.push(null); // Reset đáp án
        }
    });
    
    if (wrongQuestions.length === 0) {
        alert('Không có câu nào sai để làm lại!');
        return;
    }
    
    // Cập nhật danh sách câu hỏi và đáp án
    currentQuestions = wrongQuestions;
    userAnswers = wrongAnswers;
    currentQuestionIndex = 0;
    isReviewMode = false;
    
    // Hiển thị lại quiz
    document.getElementById('quizContent').style.display = 'block';
    document.getElementById('resultSection').style.display = 'none';
    
    updateTotalQuestionsDisplay();
    displayQuestion();
    updateProgress();
    updateButtons();
}

// Hiển thị câu hỏi với đáp án
function displayQuestionWithAnswers() {
    const question = currentQuestions[currentQuestionIndex];
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('options');
    
    questionText.textContent = `Câu ${question.id}: ${question.question}`;
    
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'answer';
        radio.value = index;
        radio.id = `option${index}`;
        radio.checked = userAnswers[currentQuestionIndex] === index;
        radio.disabled = true;
        
        const label = document.createElement('label');
        label.htmlFor = `option${index}`;
        label.textContent = String.fromCharCode(65 + index) + '. ' + option;
        
        optionDiv.appendChild(radio);
        optionDiv.appendChild(label);
        
        // Đánh dấu đáp án đúng
        if (index === question.correct) {
            optionDiv.classList.add('correct');
        }
        // Đánh dấu đáp án sai mà người dùng chọn
        if (userAnswers[currentQuestionIndex] === index && index !== question.correct) {
            optionDiv.classList.add('incorrect');
        }
        
        optionsContainer.appendChild(optionDiv);
    });
    
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
}

// Cập nhật tổng số câu hiển thị
function updateTotalQuestionsDisplay() {
    document.getElementById('totalQuestions').textContent = currentQuestions.length;
}

// Áp dụng bộ lọc
function applyFilters() {
    // Khởi tạo tags nếu chưa có
    initializeTags();
    
    // Lấy giá trị từ các filter
    const chapterKey = document.getElementById('chapterSelect').value;
    const filterTime = document.getElementById('filterTime').checked;
    const filterDaiHoi = document.getElementById('filterDaiHoi').checked;
    const filterNhanVat = document.getElementById('filterNhanVat').checked;
    const filterVietNam = document.getElementById('filterVietNam').checked;
    
    // Lọc theo chương
    const chapter = chapterConfigs.find(c => c.key === chapterKey) || chapterConfigs[0];
    activeChapter = chapter.key;
    
    let filteredQuestions;
    if (chapter.start === null || chapter.end === null) {
        filteredQuestions = [...questions];
    } else {
        filteredQuestions = questions.filter(q => q.id >= chapter.start && q.id <= chapter.end);
    }
    
    // Lọc theo các tiêu chí khác
    if (filterTime || filterDaiHoi || filterNhanVat || filterVietNam) {
        filteredQuestions = filteredQuestions.filter(q => {
            const tags = q.tags || [];
            if (filterTime && tags.includes('time')) return true;
            if (filterDaiHoi && tags.includes('daihoi')) return true;
            if (filterNhanVat && tags.includes('nhanvat')) return true;
            if (filterVietNam && tags.includes('vietnam')) return true;
            return false;
        });
    }
    
    currentQuestions = filteredQuestions;
    currentQuestionIndex = 0;
    userAnswers = new Array(currentQuestions.length).fill(null);
    isReviewMode = false;
    originalQuestions = []; // Reset danh sách câu hỏi ban đầu
    originalUserAnswers = []; // Reset đáp án ban đầu
    
    // Hiển thị lại quiz nếu đang ở chế độ kết quả
    document.getElementById('quizContent').style.display = 'block';
    document.getElementById('resultSection').style.display = 'none';
    
    updateTotalQuestionsDisplay();
    displayQuestion();
    updateProgress();
    updateButtons();
}

// Chọn chương (giữ lại để tương thích)
function onChapterChange(chapterKey) {
    document.getElementById('chapterSelect').value = chapterKey;
    applyFilters();
}

// Khởi tạo khi trang được tải
document.addEventListener('DOMContentLoaded', initQuiz);

