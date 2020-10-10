const products = [
    {
        code: "DX225LCA SLR",
        name: "DX225LCA SLR",
        shortDescription: "",
        fullDescription: "",
        origin: "Hàn Quốc",
        specifications: [
            {
                name: "Động cơ",
                data: {
                    "Công suất": "100kW",
                    "Kiểu động cơ": "Sử dụng kim cơ"
                }
            },
            {
                name: "Bơm thủy lực",
                data: {
                    "Loại bơm":"bơm Đức"
                }
            }
        ],
        bread: "1.0",
        imagesDirs: "images/products/exca-crawler/DX225LCA SLR/",
        numberOfImages: 20
    },
    {
        code: "DX225LCA-2019",
        name: "DX225LCA-2019",
        shortDescription: "",
        fullDescription: "",
        origin: "Hàn Quốc",
        specifications: [],
        bread: "1.0",
        imagesDirs: "images/products/exca-crawler/DX225LCA-2019/",
        numberOfImages: 56
    },
    {
        code: "DX260LCA",
        name: "DX260LCA",
        shortDescription: "",
        fullDescription: "",
        origin: "Hàn Quốc",
        specifications: [],
        bread: "1.0",
        imagesDirs: "images/products/exca-crawler/dx260lca/",
        numberOfImages: 14
    },
    {
        code: "DX300LCA-2019",
        name: "DX300LCA-2019",
        shortDescription: "",
        fullDescription: "",
        origin: "Hàn Quốc",
        specifications: [],
        bread: "1.0",
        imagesDirs: "images/products/exca-crawler/DX300LCA-2019/",
        numberOfImages: 14
    },
    {
        code: "DX340LCA-2019",
        name: "DX340LCA-2019",
        shortDescription: "",
        fullDescription: "",
        origin: "Hàn Quốc",
        specifications: [],
        bread: "1.0",
        imagesDirs: "images/products/exca-crawler/DX340LCA-2019/",
        numberOfImages: 14
    },
    {
        code: "DX480LCA",
        name: "DX480LCA",
        shortDescription: "",
        fullDescription: "",
        origin: "Hàn Quốc",
        specifications: [],
        bread: "1.0",
        imagesDirs: "images/products/exca-crawler/DX480LCA/",
        numberOfImages: 14
    },
    {
        code: "DX520 SLR",
        name: "DX520 SLR",
        shortDescription: "",
        fullDescription: "",
        origin: "Hàn Quốc",
        specifications: [],
        bread: "1.0",
        imagesDirs: "images/products/exca-crawler/DX520 SLR/",
        numberOfImages: 14
    },
    {
        code: "DX520LCA-K",
        name: "DX520LCA-K",
        shortDescription: "",
        fullDescription: "",
        origin: "Hàn Quốc",
        specifications: [],
        bread: "1.0",
        imagesDirs: "images/products/exca-crawler/DX520LCA-K/",
        numberOfImages: 14
    },
    {
        code: "DX530LC",
        name: "DX530LC",
        shortDescription: "",
        fullDescription: "",
        origin: "Hàn Quốc",
        specifications: [],
        bread: "1.0",
        imagesDirs: "images/products/exca-crawler/DX530LC/",
        numberOfImages: 14
    },
    {
        code: "DX800LC",
        name: "DX800LC",
        shortDescription: "",
        fullDescription: "",
        origin: "Hàn Quốc",
        specifications: [],
        bread: "1.0",
        imagesDirs: "images/products/exca-crawler/DX800LC/",
        numberOfImages: 14
    },
    {
        code: "DX55W",
        name: "DX55W",
        shortDescription: "",
        fullDescription: "",
        origin: "Hàn Quốc",
        specifications: [],
        bread: "1.1",
        imagesDirs: "images/products/exca-wheel/DX55W/",
        numberOfImages: 14
    },
    {
        code: "DX140W",
        name: "DX140W",
        shortDescription: "",
        fullDescription: "",
        origin: "Hàn Quốc",
        specifications: [],
        bread: "1.1",
        imagesDirs: "images/products/exca-wheel/DX140W-normal/",
        numberOfImages: 14
    },
    {
        code: "DX140W",
        name: "DX140W chân chống",
        shortDescription: "",
        fullDescription: "",
        origin: "Hàn Quốc",
        specifications: [],
        bread: "1.1",
        imagesDirs: "images/products/exca-wheel/DX140W-outrigger/",
        numberOfImages: 14
    },
    {
        code: "DX190WA",
        name: "DX190WA",
        shortDescription: "",
        fullDescription: "",
        origin: "Hàn Quốc",
        specifications: [],
        bread: "1.1",
        imagesDirs: "images/products/exca-wheel/DX190WA/",
        numberOfImages: 14
    },
    {
        code: "DX210WA",
        name: "DX210WA",
        shortDescription: "",
        fullDescription: "",
        origin: "Hàn Quốc",
        specifications: [],
        bread: "1.1",
        imagesDirs: "images/products/exca-wheel/DX210WA/",
        numberOfImages: 14
    },
    {
        code: "SD300N-2019",
        name: "SD300N-2019",
        shortDescription: "",
        fullDescription: "",
        origin: "Hàn Quốc",
        specifications: [],
        bread: "1.2",
        imagesDirs: "images/products/exca-heavy/SD300N-2019/",
        numberOfImages: 14
    },
    {
        code: "SD300N-2020",
        name: "SD300N-2020",
        shortDescription: "",
        fullDescription: "",
        origin: "Hàn Quốc",
        specifications: [],
        bread: "1.2",
        imagesDirs: "images/products/exca-heavy/SD300N-2020/",
        numberOfImages: 14
    },
    {
        code: "Doosan",
        name: "Xe nâng Doosan",
        shortDescription: "",
        fullDescription: "",
        origin: "Hàn Quốc",
        specifications: [],
        bread: "1.3",
        imagesDirs: "images/products/doosan-forklift/",
        numberOfImages: 14
    },
    {
        code: "Doosan",
        name: "Búa thủy lực Doosan",
        shortDescription: "",
        fullDescription: "",
        origin: "Hàn Quốc",
        specifications: [],
        bread: "1.4.0",
        imagesDirs: "images/products/accessory/hammer/doosan-hammer/",
        numberOfImages: 14
    },
    {
        code: "DX55W",
        name: "Búa thủy lực Doosan DX55W",
        shortDescription: "",
        fullDescription: "",
        origin: "Hàn Quốc",
        specifications: [],
        bread: "1.4.0",
        imagesDirs: "images/products/accessory/hammer/doosan-hammer-dx55w/",
        numberOfImages: 14
    },
    {
        code: "Mega",
        name: "Búa thủy lực Mega",
        shortDescription: "",
        fullDescription: "",
        origin: "Hàn Quốc",
        specifications: [],
        bread: "1.4.0",
        imagesDirs: "images/products/accessory/hammer/mega-hammer/",
        numberOfImages: 14
    },
    {
        code: "Soosan & EDT",
        name: "Búa thủy lực Soosan và EDT",
        shortDescription: "",
        fullDescription: "",
        origin: "Hàn Quốc",
        specifications: [],
        bread: "1.4.0",
        imagesDirs: "images/products/accessory/hammer/soosan-edt-hammer/",
        numberOfImages: 14
    },
    {
        code: "Doosan accessary",
        name: "Phụ tùng Doosan",
        shortDescription: "",
        fullDescription: "",
        origin: "Hàn Quốc",
        specifications: [],
        bread: "1.5.0",
        imagesDirs: "images/products/doosan-accessary/",
        numberOfImages: 23
    },
]