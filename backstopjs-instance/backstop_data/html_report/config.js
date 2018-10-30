report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Vue_Logo_Image_Must_Show_At_All_Time_0_main-text_0_phone.png",
        "test": "../bitmaps_test/20181030-152811/backstop_default_Vue_Logo_Image_Must_Show_At_All_Time_0_main-text_0_phone.png",
        "selector": ".main-text",
        "fileName": "backstop_default_Vue_Logo_Image_Must_Show_At_All_Time_0_main-text_0_phone.png",
        "label": "Vue Logo Image Must Show At All Time",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:8081",
        "referenceUrl": "http://localhost:8082",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Vue_Logo_Image_Must_Show_At_All_Time_0_main-text_1_tablet.png",
        "test": "../bitmaps_test/20181030-152811/backstop_default_Vue_Logo_Image_Must_Show_At_All_Time_0_main-text_1_tablet.png",
        "selector": ".main-text",
        "fileName": "backstop_default_Vue_Logo_Image_Must_Show_At_All_Time_0_main-text_1_tablet.png",
        "label": "Vue Logo Image Must Show At All Time",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:8081",
        "referenceUrl": "http://localhost:8082",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    }
  ],
  "id": "backstop_default"
});