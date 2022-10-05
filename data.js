var APP_DATA = {
  "scenes": [
    {
      "id": "0-lobby-kantor-c",
      "name": "Lobby Kantor C",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.7366297449906254,
        "pitch": 0.0017854317254784036,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 1.5759674446887733,
          "pitch": 0.2593879952263105,
          "rotation": 0,
          "target": "5-masuk-kantor"
        },
        {
          "yaw": -3.103813138264286,
          "pitch": 0.35660656473903174,
          "rotation": 0,
          "target": "7-lobby-kantor-b"
        },
        {
          "yaw": 0.08764085105642572,
          "pitch": 0.3826929980954521,
          "rotation": 0,
          "target": "8-lobby-kantor-d"
        },
        {
          "yaw": -0.5436965899743225,
          "pitch": 0.4728500709412895,
          "rotation": 0,
          "target": "10-lorong-ke-belakang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-pinggir-jalan",
      "name": "Pinggir Jalan",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.09936607680601561,
        "pitch": 0.0654513899670306,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 0.12591143021503015,
          "pitch": 0.14430888396019625,
          "rotation": 0,
          "target": "2-halaman-kantor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.06662389014346637,
          "pitch": -0.3508076778208764,
          "title": "Hasnur Informasi Teknologi",
          "text": "Kantor Baru PT. Hasnur Informasi Teknologi"
        }
      ]
    },
    {
      "id": "2-halaman-kantor",
      "name": "Halaman Kantor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.2883497123930532,
        "pitch": -0.10529982437726204,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 3.037144229433265,
          "pitch": 0.28002099769928357,
          "rotation": 0,
          "target": "1-pinggir-jalan"
        },
        {
          "yaw": -0.08940272205290434,
          "pitch": 0.2591242473747144,
          "rotation": 0,
          "target": "3-depan-kantor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-depan-kantor",
      "name": "Depan Kantor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.060098476816929036,
          "pitch": 0.2193268398428856,
          "rotation": 0,
          "target": "4-pintu-kantor"
        },
        {
          "yaw": 3.082040606135826,
          "pitch": 0.39302200051324476,
          "rotation": 0,
          "target": "2-halaman-kantor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-pintu-kantor",
      "name": "Pintu Kantor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.24342212209647052,
          "pitch": 0.5898089760259602,
          "rotation": 0,
          "target": "5-masuk-kantor"
        },
        {
          "yaw": 2.9202272286311617,
          "pitch": 0.3837244206938202,
          "rotation": 0,
          "target": "3-depan-kantor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-masuk-kantor",
      "name": "Masuk Kantor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.09790340306933132,
        "pitch": 0.12432226727357154,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -1.6452349734952847,
          "pitch": 0.36948865360866456,
          "rotation": 0,
          "target": "6-lobby-kantor-a"
        },
        {
          "yaw": 0.0037446000992744644,
          "pitch": 0.3167394588803649,
          "rotation": 0,
          "target": "0-lobby-kantor-c"
        },
        {
          "yaw": 1.795434261924207,
          "pitch": 0.36551689753837735,
          "rotation": 0,
          "target": "9-lobby-kantor-e"
        },
        {
          "yaw": 3.075930009372616,
          "pitch": 0.4003661054745926,
          "rotation": 0,
          "target": "4-pintu-kantor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-lobby-kantor-a",
      "name": "Lobby Kantor A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4243645620324816,
          "pitch": 0.275463638604295,
          "rotation": 0,
          "target": "7-lobby-kantor-b"
        },
        {
          "yaw": -3.045879373642336,
          "pitch": 0.37893395978622735,
          "rotation": 0,
          "target": "5-masuk-kantor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-lobby-kantor-b",
      "name": "Lobby Kantor B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5553676716266738,
          "pitch": 0.328391468969393,
          "rotation": 0,
          "target": "0-lobby-kantor-c"
        },
        {
          "yaw": 3.088156496334584,
          "pitch": 0.2281651073607769,
          "rotation": 0,
          "target": "6-lobby-kantor-a"
        },
        {
          "yaw": -0.27986007655119316,
          "pitch": 0.40998925751742377,
          "rotation": 0,
          "target": "28-samping-kiri-kantor-d"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-lobby-kantor-d",
      "name": "Lobby Kantor D",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0358782843540713,
          "pitch": 0.4010466773896475,
          "rotation": 0,
          "target": "0-lobby-kantor-c"
        },
        {
          "yaw": -2.1524668766088677,
          "pitch": 0.6424050798261334,
          "rotation": 0,
          "target": "10-lorong-ke-belakang"
        },
        {
          "yaw": 1.6802742859950106,
          "pitch": 0.2403781183223952,
          "rotation": 0,
          "target": "9-lobby-kantor-e"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-lobby-kantor-e",
      "name": "Lobby Kantor E",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4976281062855765,
          "pitch": 0.26851029431359663,
          "rotation": 0,
          "target": "8-lobby-kantor-d"
        },
        {
          "yaw": -2.9925449975392375,
          "pitch": 0.39351383523653105,
          "rotation": 0,
          "target": "5-masuk-kantor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-lorong-ke-belakang",
      "name": "Lorong Ke Belakang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6309728912612798,
          "pitch": 0.477233814690015,
          "rotation": 0,
          "target": "8-lobby-kantor-d"
        },
        {
          "yaw": -2.183976082138127,
          "pitch": 0.4733509969136307,
          "rotation": 0,
          "target": "0-lobby-kantor-c"
        },
        {
          "yaw": 0.6841640274537895,
          "pitch": 0.7358075668474271,
          "rotation": 0,
          "target": "11-lorong-ke-belakang-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-lorong-ke-belakang-2",
      "name": "Lorong ke Belakang 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6329654339301527,
          "pitch": 0.4640473311820621,
          "rotation": 0,
          "target": "12-dalam-kantor-1a"
        },
        {
          "yaw": -0.28687569789542344,
          "pitch": 0.4015701306312174,
          "rotation": 0,
          "target": "26-sisi-kanan-kantor"
        },
        {
          "yaw": -2.6815984528283394,
          "pitch": 0.621995841265182,
          "rotation": 0,
          "target": "10-lorong-ke-belakang"
        },
        {
          "yaw": 0.9707272599034908,
          "pitch": 0.5602502748697553,
          "rotation": 0,
          "target": "32-toilet-sisi-kanan-bawah"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-dalam-kantor-1a",
      "name": "Dalam Kantor 1A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.31418201563425896,
          "pitch": 0.5226148459628881,
          "rotation": 0,
          "target": "13-toilet-belakang-kantor-1a"
        },
        {
          "yaw": 0.8192612244508872,
          "pitch": 0.40727329107469856,
          "rotation": 0,
          "target": "14-tangga-keatas-kanan-2"
        },
        {
          "yaw": 2.242804981088817,
          "pitch": 0.4689795206506666,
          "rotation": 0,
          "target": "11-lorong-ke-belakang-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-toilet-belakang-kantor-1a",
      "name": "Toilet belakang Kantor 1A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.678212779690913,
          "pitch": 0.5647880395260785,
          "rotation": 0,
          "target": "12-dalam-kantor-1a"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-tangga-keatas-kanan-2",
      "name": "Tangga Keatas Kanan 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.614442771391907,
          "pitch": 0.6177394613294318,
          "rotation": 0,
          "target": "12-dalam-kantor-1a"
        },
        {
          "yaw": -1.4080226136363798,
          "pitch": 0.049337247345192736,
          "rotation": 0,
          "target": "15-tangga-keatas-kanan-2b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-tangga-keatas-kanan-2b",
      "name": "Tangga Keatas Kanan 2B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.6852430156904852,
        "pitch": 0.13473202649504046,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -3.061874909962384,
          "pitch": 0.7816180773158568,
          "rotation": 0,
          "target": "14-tangga-keatas-kanan-2"
        },
        {
          "yaw": -1.4876616504664462,
          "pitch": -0.1534418745460684,
          "rotation": 0,
          "target": "16-lantai-2-persimpangan"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-lantai-2-persimpangan",
      "name": "Lantai 2 Persimpangan",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.076916489934572,
        "pitch": 0.5059587488309774,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 1.8703835303625302,
          "pitch": 0.6133291473758185,
          "rotation": 0,
          "target": "15-tangga-keatas-kanan-2b"
        },
        {
          "yaw": -2.5623828325114033,
          "pitch": 0.48732692238863606,
          "rotation": 0,
          "target": "17-ruangan-lantai-2"
        },
        {
          "yaw": 0.28980432956806723,
          "pitch": 0.9378997901786885,
          "rotation": 0,
          "target": "33-persimpangan-ke-roof-top"
        },
        {
          "yaw": 0.5450804077966787,
          "pitch": 0.3951016752826959,
          "rotation": 0,
          "target": "37-ruang-ke-roof-top-b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-ruangan-lantai-2",
      "name": "Ruangan Lantai 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.020815731088933,
          "pitch": 0.39867968346237426,
          "rotation": 0,
          "target": "41-ruang-lantai-2-c"
        },
        {
          "yaw": 0.6159913924379943,
          "pitch": 0.3846273316483533,
          "rotation": 0,
          "target": "18-ruangan-lantai-2a"
        },
        {
          "yaw": 2.348683301143348,
          "pitch": 0.41638311862514854,
          "rotation": 0,
          "target": "16-lantai-2-persimpangan"
        },
        {
          "yaw": -0.9313673662770299,
          "pitch": 0.4265946673859169,
          "rotation": 0,
          "target": "22-ruangan-lantai-2d"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-ruangan-lantai-2a",
      "name": "Ruangan Lantai 2A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.790099447772924,
          "pitch": 0.3639946240524097,
          "rotation": 0,
          "target": "17-ruangan-lantai-2"
        },
        {
          "yaw": 0.03260632051356538,
          "pitch": 0.39842627350465776,
          "rotation": 0,
          "target": "19-ruangan-lantai-2b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-ruangan-lantai-2b",
      "name": "Ruangan Lantai 2B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0712273502002247,
          "pitch": 0.42233277519560275,
          "rotation": 0,
          "target": "18-ruangan-lantai-2a"
        },
        {
          "yaw": -0.32091829887718504,
          "pitch": 0.5869984065390206,
          "rotation": 0,
          "target": "20-jendela-lantai-2b"
        },
        {
          "yaw": -1.8081079925990817,
          "pitch": 0.3105161869451578,
          "rotation": 0,
          "target": "21-ruangan-lantai-2c"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-jendela-lantai-2b",
      "name": "Jendela Lantai 2B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0757286962778263,
          "pitch": 0.49477862717543175,
          "rotation": 0,
          "target": "19-ruangan-lantai-2b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-ruangan-lantai-2c",
      "name": "Ruangan Lantai 2C",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.465234766902487,
        "pitch": 0.2471674720372139,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -3.026524924733188,
          "pitch": 0.4200635681402467,
          "rotation": 0,
          "target": "19-ruangan-lantai-2b"
        },
        {
          "yaw": -1.3874515662877123,
          "pitch": 0.26675958858101545,
          "rotation": 0,
          "target": "22-ruangan-lantai-2d"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-ruangan-lantai-2d",
      "name": "Ruangan Lantai 2D",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2840341384195444,
          "pitch": 0.3818266180788985,
          "rotation": 0,
          "target": "17-ruangan-lantai-2"
        },
        {
          "yaw": -2.162234088714582,
          "pitch": 0.3491245557296274,
          "rotation": 0,
          "target": "21-ruangan-lantai-2c"
        },
        {
          "yaw": 1.1871492765762177,
          "pitch": 0.4221724973583427,
          "rotation": 0,
          "target": "24-ke-lantai-2-sisi-kanan"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-toilet-lantai-2d",
      "name": "Toilet Lantai 2D",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1027906011103337,
          "pitch": 0.3058824624353562,
          "rotation": 0,
          "target": "24-ke-lantai-2-sisi-kanan"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-ke-lantai-2-sisi-kanan",
      "name": "Ke Lantai 2 Sisi Kanan",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3624202568161756,
          "pitch": 0.391581957589036,
          "rotation": 0,
          "target": "23-toilet-lantai-2d"
        },
        {
          "yaw": 1.6943038156374604,
          "pitch": 0.4594906147353832,
          "rotation": 0,
          "target": "22-ruangan-lantai-2d"
        },
        {
          "yaw": -1.8344861070122551,
          "pitch": 0.6963561845231592,
          "rotation": 0,
          "target": "25-tangga-lantai-2-sisi-kanan"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-tangga-lantai-2-sisi-kanan",
      "name": "Tangga lantai 2 Sisi Kanan",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2673204238326434,
          "pitch": -0.11931050405326715,
          "rotation": 0,
          "target": "24-ke-lantai-2-sisi-kanan"
        },
        {
          "yaw": -0.6721909958466874,
          "pitch": 0.823329295708966,
          "rotation": 0,
          "target": "26-sisi-kanan-kantor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-sisi-kanan-kantor",
      "name": "Sisi Kanan Kantor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7252916122147903,
          "pitch": 0.830347934012881,
          "rotation": 0,
          "target": "27-belakang-kantor-kanan"
        },
        {
          "yaw": -2.976325638925241,
          "pitch": -0.05995389193487988,
          "rotation": 0,
          "target": "25-tangga-lantai-2-sisi-kanan"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-belakang-kantor-kanan",
      "name": "Belakang Kantor Kanan",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9373121242605391,
          "pitch": 0.7349821131192087,
          "rotation": 0,
          "target": "26-sisi-kanan-kantor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-samping-kiri-kantor-d",
      "name": "Samping Kiri Kantor D",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.985052347702357,
          "pitch": 0.48946787097502664,
          "rotation": 0,
          "target": "7-lobby-kantor-b"
        },
        {
          "yaw": 1.5401700905147955,
          "pitch": 0.5255009975834888,
          "rotation": 0,
          "target": "29-toilet-lantai-1-kiri-a"
        },
        {
          "yaw": -0.05716284484122447,
          "pitch": 0.5127298201374195,
          "rotation": 0,
          "target": "30-sisi-kiri-kantor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-toilet-lantai-1-kiri-a",
      "name": "Toilet Lantai 1 Kiri A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8540443175900556,
          "pitch": 0.5127105139509496,
          "rotation": 0,
          "target": "28-samping-kiri-kantor-d"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-sisi-kiri-kantor",
      "name": "Sisi Kiri Kantor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.699775376494628,
          "pitch": 0.635459328412896,
          "rotation": 0,
          "target": "28-samping-kiri-kantor-d"
        },
        {
          "yaw": -0.3348897876378807,
          "pitch": 0.772988765202312,
          "rotation": 0,
          "target": "31-belakang-kantor-sisi-kiri"
        },
        {
          "yaw": 1.2024101664860982,
          "pitch": -0.017297566779364004,
          "rotation": 0,
          "target": "42-tangga-kanan-atas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-belakang-kantor-sisi-kiri",
      "name": "Belakang Kantor Sisi Kiri",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.173215481352763,
          "pitch": 0.7562884896494122,
          "rotation": 0,
          "target": "30-sisi-kiri-kantor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-toilet-sisi-kanan-bawah",
      "name": "Toilet Sisi Kanan Bawah",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6530666696659573,
          "pitch": 0.5411794522818631,
          "rotation": 0,
          "target": "11-lorong-ke-belakang-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-persimpangan-ke-roof-top",
      "name": "Persimpangan Ke Roof Top",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.5789268458926831,
        "pitch": 0.6131117871749581,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -1.6112392644781295,
          "pitch": 0.3251972735267472,
          "rotation": 0,
          "target": "34-ruang-lantai-2-kanan"
        },
        {
          "yaw": 3.0195237767694847,
          "pitch": 0.9521686843350441,
          "rotation": 0,
          "target": "16-lantai-2-persimpangan"
        },
        {
          "yaw": 0.42442846172843574,
          "pitch": 0.5539187348008277,
          "rotation": 0,
          "target": "37-ruang-ke-roof-top-b"
        },
        {
          "yaw": 1.4000334138834631,
          "pitch": 0.5823850542565676,
          "rotation": 0,
          "target": "42-tangga-kanan-atas"
        },
        {
          "yaw": 1.1416726892775184,
          "pitch": -0.2302861331647108,
          "rotation": 0,
          "target": "39-roof-top-1"
        },
        {
          "yaw": -3.107157059075327,
          "pitch": 0.4239809678894968,
          "rotation": 0,
          "target": "17-ruangan-lantai-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-ruang-lantai-2-kanan",
      "name": "Ruang Lantai 2 Kanan",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.252000317611314,
          "pitch": 0.4255262715260617,
          "rotation": 0,
          "target": "33-persimpangan-ke-roof-top"
        },
        {
          "yaw": -0.18464008400260035,
          "pitch": 0.3697324458107616,
          "rotation": 0,
          "target": "35-ruang-lantai-2-kanan-b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-ruang-lantai-2-kanan-b",
      "name": "Ruang Lantai 2 Kanan B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5953364725944912,
          "pitch": 0.5623793422270662,
          "rotation": 0,
          "target": "36-ruang-lantai-2-kanan-c"
        },
        {
          "yaw": -2.3141234816279947,
          "pitch": 0.5069878137047414,
          "rotation": 0,
          "target": "34-ruang-lantai-2-kanan"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-ruang-lantai-2-kanan-c",
      "name": "Ruang Lantai 2 Kanan C",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9586166318484075,
          "pitch": 0.408952575203374,
          "rotation": 0,
          "target": "35-ruang-lantai-2-kanan-b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-ruang-ke-roof-top-b",
      "name": "Ruang ke Roof Top B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8471968075771414,
          "pitch": 0.5709380001471605,
          "rotation": 0,
          "target": "38-toilet-lantai-2-dekat-rooftop"
        },
        {
          "yaw": 2.3314953718035545,
          "pitch": 0.6355913142273071,
          "rotation": 0,
          "target": "33-persimpangan-ke-roof-top"
        },
        {
          "yaw": -0.0379589148063566,
          "pitch": -0.3413564100750186,
          "rotation": 0,
          "target": "39-roof-top-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-toilet-lantai-2-dekat-rooftop",
      "name": "Toilet Lantai 2 Dekat Rooftop",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6330899475166305,
          "pitch": 0.629452600899981,
          "rotation": 0,
          "target": "37-ruang-ke-roof-top-b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-roof-top-1",
      "name": "Roof Top 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.171562460798146,
        "pitch": 0.29020464226637976,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 2.255638697830177,
          "pitch": 0.6685847043281345,
          "rotation": 0,
          "target": "37-ruang-ke-roof-top-b"
        },
        {
          "yaw": -2.8851583727629997,
          "pitch": 0.36927687397552234,
          "rotation": 0,
          "target": "40-roof-top-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-roof-top-2",
      "name": "Roof Top 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.0057860788304005,
        "pitch": 0.08380428138076468,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -2.5214477507512534,
          "pitch": 0.25473574166479196,
          "rotation": 0,
          "target": "39-roof-top-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "41-ruang-lantai-2-c",
      "name": "Ruang Lantai 2 C",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.624121621850941,
          "pitch": 0.45937265594603716,
          "rotation": 0,
          "target": "17-ruangan-lantai-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "42-tangga-kanan-atas",
      "name": "Tangga Kanan atas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.9357687870694402,
        "pitch": -0.069474208182287,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -1.3332261756425154,
          "pitch": 0.7534827388347516,
          "rotation": 0,
          "target": "30-sisi-kiri-kantor"
        },
        {
          "yaw": -2.976063960248819,
          "pitch": -0.16249083036320933,
          "rotation": 0,
          "target": "33-persimpangan-ke-roof-top"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "KANTOR PT. HIT AS IS",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
