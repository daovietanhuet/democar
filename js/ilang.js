const lang = {
    en : {
        title: "Automatic",
        time: "7.30 AM  - 9.30 PM",
        logoLink: "images/logo/sinply-construction.png",
        phone: "(+84)377 669 361",
        hotline: "(+84)377 669 365",
        detailAddress: "Stock Building, 125 Main Street ",
        address: "1st Lane, San Francisco, USA",
        email: "daovietanhsky@gmail.com",
        website: "http://daovietanh.github.io",
        productcode: "Product code",
        origin: "Origin",
        views: "Views",
        readmore: "Read more",
        detail: "Detail",
        block: {
            aboutus: "ABOUT US",
            quicklink: "QUICK LINK",
            products: "PRODUCTS",
            latestproduct: "LATEST PRODUCTS",
            tintuc: "NEWS",
            contactus: "Contact us",
            statistics: "REVENUE",
            revenue: "STATISTICS",
            contactinfor: "CONTACT INFORMATION",
            wherewelocated: "WHERE WE LOCATED",
            sendusmessage: "SEND US A MESSAGE",
            timeline: "TIMELINE",
            ourmission: "OUR MISSION",
            recentpost: "RECENT POST",
            productdetails: "PRODUCT DETAILS",
            relatedproduct: "RELATED PRODUCT",
            specifications: "SPECIFICATIONS"
        },
        slides: [
            {
              background: "images/slider/bg/1.jpg",
              time: "SINCE 2012",
              title: "WE BUILDING TRUST",
              content: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment",
            }
        ],
        offers: [
            {
              icon: "images/others/icon-2/1.png",
              title: "TOP RATED",
              description: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled demoralized"
            },
            {
              icon: "images/others/icon-2/2.png",
              title: "BEST QUALITY",
              description: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled demoralized"
            },
            {
              icon: "images/others/icon-2/3.png",
              title: "LOW COST",
              description: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled demoralized"
            }
        ],
        messageForm: {
            yourname: "Your Name*",
            youremail: "Your Email*",
            subject: "Subject*",
            message: "Message*",
            sendnow: "SEND NOW"
        }
    },
    vi: {
        title: "Đại lý ô tô",
        time: "7.30 AM  - 9.30 PM",
        logoLink: "images/logo/sinply-construction.png",
        phone: "(+84)377 669 361",
        hotline: "(+84)377 669 365",
        detailAddress: "Stock Building, 125 Main Street ",
        address: "1st Lane, San Francisco, USA",
        email: "daovietanhsky@gmail.com",
        website: "http://daovietanh.github.io",
        productcode: "Mã sản phẩm",
        origin: "Xuất xứ",
        views: "Lượt xem",
        readmore: "XEM THÊM",
        detail: "Xem chi tiết",
        block: {
            aboutus: "GIỚI THIỆU CHUNG",
            quicklink: "ĐƯỜNG DẪN",
            latestproduct: "SẢN PHẨM NỔI BẬT",
            products: "CÁC SẢN PHẨM",
            tintuc: "TIN TỨC",
            contactus: "Liên hệ với chúng tôi",
            statistics: "THỐNG KÊ",
            revenue: "DOANH THU",
            contactinfor: "THÔNG TIN LIÊN HỆ",
            wherewelocated: "BẢN ĐỒ CÔNG TY",
            sendusmessage: "GỬI TIN NHẮN CHO CHÚNG TÔI",
            timeline: "CHẶNG ĐƯỜNG PHÁT TRIỂN",
            ourmission: "TẦM NHÌN CHIẾN LƯỢC",
            recentpost: "TIN TỨC",
            productdetails: "THÔNG TIN SẢN PHẨM",
            relatedproduct: "SẢN PHẨM LIÊN QUAN",
            specifications: "THÔNG SỐ KỸ THUẬT"
        },
        slides: [
            {
              background: "images/slider/bg/1.jpg",
              time: "Từ 2012",
              title: "CHÚNG TÔI XÂY DỰNG NIỀM TIN",
              content: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment",
            }
        ],
        offers: [
            {
              icon: "images/others/icon-2/1.png",
              title: "ƯA CHUỘNG",
              description: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled demoralized"
            },
            {
              icon: "images/others/icon-2/2.png",
              title: "CHẤT LƯỢNG CAO",
              description: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled demoralized"
            },
            {
              icon: "images/others/icon-2/3.png",
              title: "GIÁ RẺ",
              description: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled demoralized"
            }
        ],
        messageForm: {
            yourname: "Tên của bạn*",
            youremail: "Email của bạn*",
            subject: "Chủ đề*",
            message: "Lời nhắn*",
            sendnow: "GỬI NGAY"
        }
    }
}

function ilang(reference, local) {
    return eval("lang" + '.' + local + '.' + reference)
}