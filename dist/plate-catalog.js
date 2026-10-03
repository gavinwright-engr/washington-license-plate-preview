/* SPDX-License-Identifier: MIT (catalog metadata and configuration only).
 * Artwork rights are separate: see ASSET-LICENSES.md and assets/ASSET-MANIFEST.json.
 * Official sample images are unchanged. Masks and lettering are preview approximations.
 * All coordinates are [x,y,width,height] normalized to the original image.
 * Set blankArtwork to an authorized local template to bypass sample reconstruction.
 * profile.lettering selects a licensed local approximation and measured metrics.
 * Cap height is a fraction of textRect height; glyph widths/advances are cap units.
 * Font evidence, limits, and every matched source: docs/FONTS.md.
 */
(function (global) {
  'use strict';
  const catalog = {
  "checkedOn": "2026-10-02",
  "designCount": 73,
  "emblemCount": 2,
  "catalogSource": "https://dol.wa.gov/vehicles-and-boats/vehicles/license-plates/special-design-plates",
  "plates": [
    {
      "id": "standard",
      "name": "Standard mountain background",
      "category": "Standard plates",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/vehicles/license-plates/personalized-plates",
      "artwork": "official/standard.png",
      "width": 1720,
      "height": 809,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/2026-09/plate-example-jimstoy_12x6_24.png",
      "blankArtwork": null,
      "assignedArtwork": {
        "file": "official/standard-3.png",
        "width": 332,
        "height": 183
      },
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Standard-size plates",
        "Motorcycle and small trailer plates"
      ],
      "profile": {
        "masks": [
          [
            0.07965,
            0.35723,
            0.8407,
            0.51174
          ]
        ],
        "textRect": [
          0.07965,
          0.35476,
          0.8407,
          0.51545
        ],
        "inkColor": "#00355b",
        "backgroundColor": null,
        "lettering": {
          "font": "noto-sans-mono",
          "capHeight": 0.9736,
          "layout": "cells",
          "glyphWidth": 0.3892,
          "cellAdvance": 0.5271,
          "glyphWidths": {
            "J": 0.3892,
            "I": 0.266,
            "M": 0.3916,
            "S": 0.399,
            "T": 0.3892,
            "O": 0.3892,
            "Y": 0.3818
          }
        }
      },
      "smallArtwork": {
        "file": "official/standard-motorcycle.png",
        "width": 978,
        "height": 529,
        "blank": null,
        "profile": {
          "masks": [
            [
              0.19,
              0.294,
              0.617,
              0.478
            ]
          ],
          "textRect": [
            0.19,
            0.294,
            0.617,
            0.478
          ],
          "inkColor": "#00355b",
          "backgroundColor": null,
          "lettering": {
            "font": "barlow-condensed",
            "capHeight": 0.965,
            "layout": "cells",
            "glyphWidth": 0.3299,
            "cellAdvance": 0.4242,
            "glyphWidths": {
              "H": 0.332,
              "O": 0.3279,
              "G": 0.3279,
              "W": 0.3238,
              "L": 0.3361,
              "D": 0.332
            }
          }
        }
      }
    },
    {
      "id": "air-force",
      "name": "Air Force",
      "category": "U.S. Armed Forces",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/air-force",
      "artwork": "official/air-force.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/airforcePlate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [],
      "profile": {
        "masks": [
          [
            0.24,
            0.41885,
            0.075,
            0.40314
          ],
          [
            0.32,
            0.35602,
            0.6575,
            0.5288
          ]
        ],
        "textRect": [
          0.245,
          0.35602,
          0.7325,
          0.5288
        ],
        "inkColor": "#000000",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.901,
          "layout": "cells",
          "glyphWidth": 0.4176,
          "cellAdvance": 0.5879,
          "glyphWidths": {
            "S": 0.4176,
            "M": 0.4176,
            "P": 0.4066,
            "L": 0.4176,
            "E": 0.4066
          }
        }
      }
    },
    {
      "id": "army",
      "name": "Army",
      "category": "U.S. Armed Forces",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/army",
      "artwork": "official/army.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/armyPlate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [],
      "profile": {
        "masks": [
          [
            0.2375,
            0.42932,
            0.085,
            0.39791
          ],
          [
            0.345,
            0.36649,
            0.64,
            0.51832
          ]
        ],
        "textRect": [
          0.2475,
          0.36649,
          0.7375,
          0.51832
        ],
        "inkColor": "#000000",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.899,
          "layout": "cells",
          "glyphWidth": 0.4157,
          "cellAdvance": 0.5899,
          "glyphWidths": {
            "S": 0.4157,
            "M": 0.4157,
            "P": 0.4045,
            "L": 0.4157,
            "E": 0.4045
          }
        }
      }
    },
    {
      "id": "coast-guard",
      "name": "Coast Guard",
      "category": "U.S. Armed Forces",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/coast-guard",
      "artwork": "official/coast-guard.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/coastguardPlate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [],
      "profile": {
        "masks": [
          [
            0.2375,
            0.39791,
            0.09,
            0.42932
          ],
          [
            0.345,
            0.36649,
            0.6475,
            0.53927
          ]
        ],
        "textRect": [
          0.25,
          0.36649,
          0.7425,
          0.53927
        ],
        "inkColor": "#000000",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.9515,
          "layout": "cells",
          "glyphWidth": 0.3776,
          "cellAdvance": 0.5459,
          "glyphWidths": {
            "S": 0.3878,
            "M": 0.3776,
            "P": 0.3673,
            "L": 0.3878,
            "E": 0.3776
          }
        }
      }
    },
    {
      "id": "marine-corps",
      "name": "Marine Corps",
      "category": "U.S. Armed Forces",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/marine-corps",
      "artwork": "official/marine-corps.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/marinesPlate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [],
      "profile": {
        "masks": [
          [
            0.2375,
            0.42932,
            0.0925,
            0.40838
          ],
          [
            0.3525,
            0.35602,
            0.6375,
            0.51832
          ]
        ],
        "textRect": [
          0.25,
          0.35602,
          0.74,
          0.51832
        ],
        "inkColor": "#060606",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.9394,
          "layout": "cells",
          "glyphWidth": 0.3871,
          "cellAdvance": 0.5565,
          "glyphWidths": {
            "S": 0.3978,
            "M": 0.3871,
            "P": 0.3763,
            "L": 0.3978,
            "E": 0.3763
          }
        }
      }
    },
    {
      "id": "national-guard",
      "name": "National Guard",
      "category": "U.S. Armed Forces",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/national-guard",
      "artwork": "official/national-guard.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/NationalGuardPlate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [],
      "profile": {
        "masks": [
          [
            0.2375,
            0.42932,
            0.09,
            0.41885
          ],
          [
            0.345,
            0.35079,
            0.6375,
            0.53403
          ]
        ],
        "textRect": [
          0.2475,
          0.35079,
          0.735,
          0.53403
        ],
        "inkColor": "#060606",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.9118,
          "layout": "cells",
          "glyphWidth": 0.3871,
          "cellAdvance": 0.5565,
          "glyphWidths": {
            "S": 0.3978,
            "M": 0.3871,
            "P": 0.3763,
            "L": 0.3978,
            "E": 0.3763
          }
        }
      }
    },
    {
      "id": "navy",
      "name": "Navy",
      "category": "U.S. Armed Forces",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/navy",
      "artwork": "official/navy.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/navyPlate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [],
      "profile": {
        "masks": [
          [
            0.24,
            0.40838,
            0.09,
            0.43455
          ],
          [
            0.35,
            0.35602,
            0.6375,
            0.5288
          ]
        ],
        "textRect": [
          0.25,
          0.35602,
          0.7375,
          0.5288
        ],
        "inkColor": "#040405",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.9208,
          "layout": "cells",
          "glyphWidth": 0.3871,
          "cellAdvance": 0.5565,
          "glyphWidths": {
            "S": 0.3871,
            "M": 0.3871,
            "P": 0.3763,
            "L": 0.3978,
            "E": 0.3871
          }
        }
      }
    },
    {
      "id": "988-prevent-veteran-suicide-emblem",
      "name": "988 \u2013 Prevent veteran suicide emblem",
      "category": "Military services and veterans",
      "personalization": "emblem-example",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/988-prevent-veteran-suicide-emblem",
      "artwork": "official/988-prevent-veteran-suicide-emblem.png",
      "width": 400,
      "height": 192,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/lifeline-plate.png",
      "blankArtwork": null,
      "eligibilityNote": "This is an emblem example, not a separate plate design. Check DOL for how emblems can be added to an eligible plate.",
      "vehicleTypes": [],
      "profile": {
        "masks": [],
        "textRect": null,
        "inkColor": "#000000",
        "font": "tall",
        "backgroundColor": null
      }
    },
    {
      "id": "disabled-american-veteran",
      "name": "Disabled American veteran",
      "category": "Military services and veterans",
      "personalization": "not-personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/disabled-american-veteran",
      "artwork": "official/disabled-american-veteran.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/disabledVetPlate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL states that this plate cannot be personalized. The original plate remains available to view.",
      "vehicleTypes": [],
      "profile": {
        "masks": [],
        "textRect": null,
        "inkColor": "#000000",
        "font": "tall",
        "backgroundColor": null
      }
    },
    {
      "id": "former-prisoner-war",
      "name": "Former Prisoner of War",
      "category": "Military services and veterans",
      "personalization": "not-personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/former-prisoner-war",
      "artwork": "official/former-prisoner-war.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/formerPOWplate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL states that this plate cannot be personalized. The original plate remains available to view.",
      "vehicleTypes": [],
      "profile": {
        "masks": [],
        "textRect": null,
        "inkColor": "#000000",
        "font": "tall",
        "backgroundColor": null
      }
    },
    {
      "id": "gold-star",
      "name": "Gold Star",
      "category": "Military services and veterans",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/gold-star",
      "artwork": "official/gold-star.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/goldstarPlate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [],
      "profile": {
        "masks": [
          [
            0.2325,
            0.37696,
            0.085,
            0.42932
          ],
          [
            0.3325,
            0.31937,
            0.635,
            0.5288
          ]
        ],
        "textRect": [
          0.2425,
          0.31937,
          0.725,
          0.5288
        ],
        "inkColor": "#050608",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.9109,
          "layout": "cells",
          "glyphWidth": 0.3913,
          "cellAdvance": 0.5598,
          "glyphWidths": {
            "S": 0.4022,
            "M": 0.3913,
            "P": 0.3804,
            "L": 0.4022,
            "E": 0.3913
          }
        }
      }
    },
    {
      "id": "medal-honor",
      "name": "Medal of Honor",
      "category": "Military services and veterans",
      "personalization": "not-personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/medal-honor",
      "artwork": "official/medal-honor.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/MOHplate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL states that this plate cannot be personalized. The original plate remains available to view.",
      "vehicleTypes": [],
      "profile": {
        "masks": [],
        "textRect": null,
        "inkColor": "#000000",
        "font": "tall",
        "backgroundColor": null
      }
    },
    {
      "id": "military-affiliate-radio-system-mars",
      "name": "Military Affiliate Radio System (MARS)",
      "category": "Military services and veterans",
      "personalization": "not-personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/military-affiliate-radio-system-mars",
      "artwork": "official/military-affiliate-radio-system-mars.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/MARSplate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL states that this plate cannot be personalized. The original plate remains available to view.",
      "vehicleTypes": [
        "Passenger",
        "Truck"
      ],
      "profile": {
        "masks": [],
        "textRect": null,
        "inkColor": "#000000",
        "font": "tall",
        "backgroundColor": null
      }
    },
    {
      "id": "purple-heart",
      "name": "Purple Heart",
      "category": "Military services and veterans",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/purple-heart",
      "artwork": "official/purple-heart.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/purpleheartPlate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [],
      "profile": {
        "masks": [
          [
            0.26,
            0.34031,
            0.665,
            0.5288
          ]
        ],
        "textRect": [
          0.26,
          0.34031,
          0.665,
          0.5288
        ],
        "inkColor": "#050405",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.8911,
          "layout": "cells",
          "glyphWidth": 0.4111,
          "cellAdvance": 0.5861,
          "glyphWidths": {
            "S": 0.4222,
            "M": 0.4111,
            "P": 0.3889,
            "L": 0.4111,
            "E": 0.4
          }
        }
      }
    },
    {
      "id": "veteranmilitary-service-award-emblems",
      "name": "Veteran/Military Service Award emblems",
      "category": "Military services and veterans",
      "personalization": "emblem-example",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/veteranmilitary-service-award-emblems",
      "artwork": "official/veteranmilitary-service-award-emblems.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/vetemblems.png",
      "blankArtwork": null,
      "eligibilityNote": "This is an emblem example, not a separate plate design. Check DOL for how emblems can be added to an eligible plate.",
      "vehicleTypes": [],
      "profile": {
        "masks": [],
        "textRect": null,
        "inkColor": "#000000",
        "font": "tall",
        "backgroundColor": null
      }
    },
    {
      "id": "4-h",
      "name": "4-H",
      "category": "Charitable organizations",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/4-h",
      "artwork": "official/4-h.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/4Hplate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.31,
            0.3822,
            0.075,
            0.40314
          ],
          [
            0.42,
            0.33508,
            0.535,
            0.4555
          ]
        ],
        "textRect": [
          0.315,
          0.33508,
          0.64,
          0.4555
        ],
        "inkColor": "#050608",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.908,
          "layout": "cells",
          "glyphWidth": 0.3924,
          "cellAdvance": 0.557,
          "glyphWidths": {
            "S": 0.3924,
            "M": 0.3924,
            "P": 0.3671,
            "L": 0.3924,
            "E": 0.3924
          }
        }
      }
    },
    {
      "id": "breast-cancer",
      "name": "Breast Cancer",
      "category": "Charitable organizations",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/breast-cancer",
      "artwork": "official/breast-cancer.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/Breast-cancer-plate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.2475,
            0.36126,
            0.085,
            0.39791
          ],
          [
            0.35,
            0.31414,
            0.5875,
            0.49738
          ]
        ],
        "textRect": [
          0.26,
          0.31414,
          0.6775,
          0.49738
        ],
        "inkColor": "#000000",
        "backgroundColor": null,
        "lettering": {
          "font": "inconsolata-500",
          "capHeight": 0.8316,
          "layout": "cells",
          "glyphWidth": 0.4304,
          "cellAdvance": 0.6108,
          "glyphWidths": {
            "S": 0.4304,
            "M": 0.4304,
            "P": 0.4051,
            "L": 0.4304,
            "E": 0.4177
          }
        }
      }
    },
    {
      "id": "ffa-foundation",
      "name": "FFA Foundation",
      "category": "Charitable organizations",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/ffa-foundation",
      "artwork": "official/ffa-foundation.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/FFAplate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.26,
            0.34031,
            0.0725,
            0.49738
          ],
          [
            0.3775,
            0.31414,
            0.585,
            0.52356
          ]
        ],
        "textRect": [
          0.2625,
          0.31414,
          0.7,
          0.52356
        ],
        "inkColor": "#ffffff",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.91,
          "layout": "cells",
          "glyphWidth": 0.3846,
          "cellAdvance": 0.511,
          "glyphWidths": {
            "S": 0.3846,
            "M": 0.3956,
            "P": 0.3846,
            "L": 0.3956,
            "E": 0.3846
          }
        }
      }
    },
    {
      "id": "fred-hutchinson-cancer-center",
      "name": "Fred Hutchinson Cancer Center",
      "category": "Charitable organizations",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/fred-hutchinson-cancer-center",
      "artwork": "official/fred-hutchinson-cancer-center.png",
      "width": 400,
      "height": 190,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/fred-hutchinson-plate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.2525,
            0.36316,
            0.0825,
            0.41579
          ],
          [
            0.3575,
            0.33158,
            0.6,
            0.53684
          ]
        ],
        "textRect": [
          0.2625,
          0.33158,
          0.695,
          0.53684
        ],
        "inkColor": "#ffffff",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.9314,
          "layout": "cells",
          "glyphWidth": 0.3895,
          "cellAdvance": 0.5079,
          "glyphWidths": {
            "S": 0.3895,
            "M": 0.3895,
            "P": 0.3789,
            "L": 0.3895,
            "E": 0.3895
          }
        }
      }
    },
    {
      "id": "helping-kids-speak",
      "name": "Helping Kids Speak",
      "category": "Charitable organizations",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/helping-kids-speak",
      "artwork": "official/helping-kids-speak.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/HelpingKidsSpeakPlate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.0075,
            0.37696,
            0.0675,
            0.41361
          ],
          [
            0.325,
            0.34555,
            0.645,
            0.51309
          ]
        ],
        "textRect": [
          0.3275,
          0.34031,
          0.6425,
          0.52356
        ],
        "inkColor": "#060606",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.91,
          "layout": "cells",
          "glyphWidth": 0.4066,
          "cellAdvance": 0.5824,
          "glyphWidths": {
            "S": 0.4066,
            "M": 0.4066,
            "P": 0.3956,
            "L": 0.4176,
            "E": 0.3956
          }
        }
      }
    },
    {
      "id": "jp-patches-pal",
      "name": "J.P. Patches Pal",
      "category": "Charitable organizations",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/jp-patches-pal",
      "artwork": "official/jp-patches-pal.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/patches-pal-plate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.29,
            0.36649,
            0.08,
            0.43455
          ],
          [
            0.3825,
            0.32984,
            0.5925,
            0.5445
          ]
        ],
        "textRect": [
          0.38,
          0.32984,
          0.595,
          0.5445
        ],
        "inkColor": "#000000",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.9039,
          "layout": "cells",
          "glyphWidth": 0.383,
          "cellAdvance": 0.5027,
          "glyphWidths": {
            "S": 0.3936,
            "M": 0.383,
            "P": 0.383,
            "L": 0.3936,
            "E": 0.383
          }
        }
      }
    },
    {
      "id": "keep-kids-safe",
      "name": "Keep Kids Safe",
      "category": "Charitable organizations",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/keep-kids-safe",
      "artwork": "official/keep-kids-safe.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/KeepKidsSafePlate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.235,
            0.41361,
            0.0925,
            0.40314
          ],
          [
            0.3475,
            0.34555,
            0.6425,
            0.52356
          ]
        ],
        "textRect": [
          0.2475,
          0.34555,
          0.7425,
          0.52356
        ],
        "inkColor": "#040809",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.93,
          "layout": "cells",
          "glyphWidth": 0.3871,
          "cellAdvance": 0.5565,
          "glyphWidths": {
            "S": 0.3871,
            "M": 0.3871,
            "P": 0.3763,
            "L": 0.3978,
            "E": 0.3871
          }
        }
      }
    },
    {
      "id": "washington-apple-commission",
      "name": "Washington Apple Commission",
      "category": "Charitable organizations",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/washington-apple-commission",
      "artwork": "official/washington-apple-commission.jpg",
      "width": 400,
      "height": 190,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/WashingtonApplesPlate.jpg",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.29,
            0.36316,
            0.0975,
            0.5
          ],
          [
            0.4625,
            0.33684,
            0.4925,
            0.53158
          ]
        ],
        "textRect": [
          0.305,
          0.33684,
          0.65,
          0.53158
        ],
        "inkColor": "#ffffff",
        "backgroundColor": null,
        "lettering": {
          "font": "inconsolata-500",
          "capHeight": 0.9307,
          "layout": "cells",
          "glyphWidth": 0.3883,
          "cellAdvance": 0.516,
          "glyphWidths": {
            "S": 0.3936,
            "M": 0.383,
            "P": 0.3723,
            "L": 0.3936
          }
        }
      }
    },
    {
      "id": "we-love-our-pets",
      "name": "We Love Our Pets",
      "category": "Charitable organizations",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/we-love-our-pets",
      "artwork": "official/we-love-our-pets.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/petsPlate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.28,
            0.39791,
            0.07,
            0.41885
          ],
          [
            0.3825,
            0.35079,
            0.595,
            0.53403
          ]
        ],
        "textRect": [
          0.3775,
          0.35079,
          0.6,
          0.53403
        ],
        "inkColor": "#000000",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.902,
          "layout": "cells",
          "glyphWidth": 0.4022,
          "cellAdvance": 0.5245,
          "glyphWidths": {
            "S": 0.413,
            "M": 0.4022,
            "P": 0.3913,
            "L": 0.413,
            "E": 0.4022
          }
        }
      }
    },
    {
      "id": "collector-vehicle",
      "name": "Collector Vehicle",
      "category": "Collector vehicles",
      "personalization": "not-personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/collector-vehicle",
      "artwork": "official/collector-vehicle.png",
      "width": 400,
      "height": 190,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/collector-plate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL states that this plate cannot be personalized. The original plate remains available to view.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle"
      ],
      "profile": {
        "masks": [],
        "textRect": null,
        "inkColor": "#000000",
        "font": "tall",
        "backgroundColor": null
      }
    },
    {
      "id": "horseless-carriage",
      "name": "Horseless Carriage",
      "category": "Collector vehicles",
      "personalization": "not-personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/horseless-carriage",
      "artwork": "official/horseless-carriage.png",
      "width": 400,
      "height": 199,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/HorselessCarriagePlate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL states that this plate cannot be personalized. The original plate remains available to view.",
      "vehicleTypes": [
        "Passenger/truck",
        "Motorcycle"
      ],
      "profile": {
        "masks": [],
        "textRect": null,
        "inkColor": "#000000",
        "font": "tall",
        "backgroundColor": null
      }
    },
    {
      "id": "restored",
      "name": "Restored",
      "category": "Collector vehicles",
      "personalization": "not-personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/restored",
      "artwork": "official/restored.jpg",
      "width": 400,
      "height": 165,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/restoredPlate.jpg",
      "blankArtwork": null,
      "eligibilityNote": "DOL states that this plate cannot be personalized. The original plate remains available to view.",
      "vehicleTypes": [],
      "profile": {
        "masks": [],
        "textRect": null,
        "inkColor": "#000000",
        "font": "tall",
        "backgroundColor": null
      }
    },
    {
      "id": "central-washington-university",
      "name": "Central Washington University",
      "category": "Colleges and universities",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/central-washington-university",
      "artwork": "official/central-washington-university.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/CWUplate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle"
      ],
      "profile": {
        "masks": [
          [
            0.23,
            0.36126,
            0.075,
            0.35079
          ],
          [
            0.325,
            0.32984,
            0.645,
            0.51832
          ]
        ],
        "textRect": [
          0.24,
          0.32984,
          0.73,
          0.51832
        ],
        "inkColor": "#060808",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.899,
          "layout": "cells",
          "glyphWidth": 0.4045,
          "cellAdvance": 0.5843,
          "glyphWidths": {
            "S": 0.4045,
            "M": 0.4045,
            "P": 0.3933,
            "L": 0.4045,
            "E": 0.4045
          }
        }
      }
    },
    {
      "id": "eastern-washington-university",
      "name": "Eastern Washington University",
      "category": "Colleges and universities",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/eastern-washington-university",
      "artwork": "official/eastern-washington-university.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/EWUplate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle"
      ],
      "profile": {
        "masks": [
          [
            0.2575,
            0.35079,
            0.0825,
            0.49738
          ],
          [
            0.4625,
            0.34031,
            0.525,
            0.5288
          ]
        ],
        "textRect": [
          0.265,
          0.34031,
          0.7225,
          0.5288
        ],
        "inkColor": "#ffffff",
        "backgroundColor": null,
        "lettering": {
          "font": "inconsolata-600",
          "capHeight": 0.9208,
          "layout": "cells",
          "glyphWidth": 0.4032,
          "cellAdvance": 0.586,
          "glyphWidths": {
            "S": 0.4086,
            "M": 0.3978,
            "P": 0.3978,
            "L": 0.4194
          }
        }
      }
    },
    {
      "id": "evergreen-state-college",
      "name": "Evergreen State College",
      "category": "Colleges and universities",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/evergreen-state-college",
      "artwork": "official/evergreen-state-college.png",
      "width": 400,
      "height": 202,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/TESCplate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle"
      ],
      "profile": {
        "masks": [
          [
            0.3275,
            0.33168,
            0.645,
            0.5297
          ]
        ],
        "textRect": [
          0.28,
          0.33168,
          0.6925,
          0.5297
        ],
        "inkColor": "#ffffff",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.8879,
          "layout": "cells",
          "glyphWidth": 0.3895,
          "cellAdvance": 0.5526,
          "glyphWidths": {
            "S": 0.3895,
            "M": 0.3895,
            "P": 0.3789,
            "L": 0.3895,
            "E": 0.3789
          }
        }
      }
    },
    {
      "id": "gonzaga-university",
      "name": "Gonzaga University",
      "category": "Colleges and universities",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/gonzaga-university",
      "artwork": "official/gonzaga-university.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/gonzagaPlate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.2475,
            0.40314,
            0.085,
            0.43455
          ],
          [
            0.3425,
            0.34031,
            0.6275,
            0.53403
          ]
        ],
        "textRect": [
          0.2525,
          0.34031,
          0.7175,
          0.53403
        ],
        "inkColor": "#ffffff",
        "backgroundColor": "#112d45",
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.9314,
          "layout": "cells",
          "glyphWidth": 0.3789,
          "cellAdvance": 0.5474,
          "glyphWidths": {
            "S": 0.3789,
            "M": 0.3789,
            "P": 0.3684,
            "L": 0.3895,
            "E": 0.3684
          }
        }
      }
    },
    {
      "id": "seattle-university",
      "name": "Seattle University",
      "category": "Colleges and universities",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/seattle-university",
      "artwork": "official/seattle-university.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/seattle-univ-plate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.275,
            0.36126,
            0.0825,
            0.38743
          ],
          [
            0.365,
            0.34031,
            0.5975,
            0.46073
          ]
        ],
        "textRect": [
          0.28,
          0.34031,
          0.6825,
          0.46073
        ],
        "inkColor": "#000000",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.8977,
          "layout": "cells",
          "glyphWidth": 0.4304,
          "cellAdvance": 0.6108,
          "glyphWidths": {
            "S": 0.4304,
            "M": 0.4304,
            "P": 0.4177,
            "L": 0.4304,
            "E": 0.4177
          }
        }
      }
    },
    {
      "id": "university-washington",
      "name": "University of Washington",
      "category": "Colleges and universities",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/university-washington",
      "artwork": "official/university-washington.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/UWplate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle"
      ],
      "profile": {
        "masks": [
          [
            0.345,
            0.31937,
            0.6175,
            0.53403
          ]
        ],
        "textRect": [
          0.345,
          0.31937,
          0.6175,
          0.53403
        ],
        "inkColor": "#ffffff",
        "backgroundColor": null,
        "lettering": {
          "font": "inconsolata-500",
          "capHeight": 0.8824,
          "layout": "cells",
          "glyphWidth": 0.3889,
          "cellAdvance": 0.5556,
          "glyphWidths": {
            "S": 0.4,
            "M": 0.3889,
            "P": 0.3778,
            "L": 0.4,
            "E": 0.3778
          }
        }
      }
    },
    {
      "id": "washington-state-university",
      "name": "Washington State University",
      "category": "Colleges and universities",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/washington-state-university",
      "artwork": "official/washington-state-university.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/WSUplate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle"
      ],
      "profile": {
        "masks": [
          [
            0.25,
            0.34031,
            0.0875,
            0.52356
          ],
          [
            0.47,
            0.33508,
            0.4925,
            0.53403
          ]
        ],
        "textRect": [
          0.26,
          0.33508,
          0.7025,
          0.53403
        ],
        "inkColor": "#e4f2f2",
        "backgroundColor": "#9f003a",
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.9314,
          "layout": "cells",
          "glyphWidth": 0.3842,
          "cellAdvance": 0.5316,
          "glyphWidths": {
            "S": 0.3895,
            "M": 0.3789,
            "P": 0.3684,
            "L": 0.3895
          }
        }
      }
    },
    {
      "id": "western-washington-university",
      "name": "Western Washington University",
      "category": "Colleges and universities",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/western-washington-university",
      "artwork": "official/western-washington-university.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/WWUplate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle"
      ],
      "profile": {
        "masks": [
          [
            0.305,
            0.34031,
            0.1075,
            0.51309
          ],
          [
            0.4475,
            0.31937,
            0.505,
            0.5445
          ]
        ],
        "textRect": [
          0.31,
          0.31937,
          0.6425,
          0.5445
        ],
        "inkColor": "#c1d72d",
        "backgroundColor": "#015697",
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.8558,
          "layout": "cells",
          "glyphWidth": 0.3933,
          "cellAdvance": 0.5562,
          "glyphWidths": {
            "S": 0.3933,
            "M": 0.3933,
            "P": 0.382,
            "L": 0.3933
          }
        }
      }
    },
    {
      "id": "law-enforcement-memorial",
      "name": "Law Enforcement Memorial",
      "category": "First responders",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/law-enforcement-memorial",
      "artwork": "official/law-enforcement-memorial.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/LEMplate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.35,
            0.34555,
            0.0625,
            0.49215
          ],
          [
            0.44,
            0.34031,
            0.4575,
            0.50262
          ]
        ],
        "textRect": [
          0.3575,
          0.34031,
          0.595,
          0.50262
        ],
        "inkColor": "#000000",
        "backgroundColor": null,
        "lettering": {
          "font": "roadgeek-2014-b",
          "capHeight": 0.8542,
          "layout": "cells",
          "glyphWidth": 0.4268,
          "cellAdvance": 0.6098,
          "glyphWidths": {
            "1": 0.1707,
            "2": 0.439,
            "3": 0.4268,
            "A": 0.4268
          }
        }
      }
    },
    {
      "id": "professional-firefighter",
      "name": "Professional Firefighter",
      "category": "First responders",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/professional-firefighter",
      "artwork": "official/professional-firefighter.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/firefighterPlate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.205,
            0.39267,
            0.085,
            0.41361
          ],
          [
            0.2975,
            0.40314,
            0.645,
            0.41361
          ]
        ],
        "textRect": [
          0.215,
          0.40314,
          0.7275,
          0.41361
        ],
        "inkColor": "#171b1e",
        "backgroundColor": null,
        "lettering": {
          "font": "ibm-plex-mono",
          "capHeight": 0.8481,
          "layout": "proportional",
          "widthScale": 0.9414,
          "letterSpacing": -0.0129
        }
      }
    },
    {
      "id": "volunteer-firefighter",
      "name": "Volunteer Firefighter",
      "category": "First responders",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/volunteer-firefighter",
      "artwork": "official/volunteer-firefighter.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/VolunteerFirefighterPlate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.2625,
            0.27749,
            0.0975,
            0.51309
          ],
          [
            0.345,
            0.27749,
            0.615,
            0.51309
          ]
        ],
        "textRect": [
          0.27,
          0.27749,
          0.69,
          0.51309
        ],
        "inkColor": "#020305",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.8775,
          "layout": "cells",
          "glyphWidth": 0.407,
          "cellAdvance": 0.5843,
          "glyphWidths": {
            "S": 0.4186,
            "M": 0.407,
            "P": 0.3953,
            "L": 0.407,
            "E": 0.407
          }
        }
      }
    },
    {
      "id": "endangered-wildlife-orca",
      "name": "Endangered Wildlife: Orca",
      "category": "Parks and nature",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/endangered-wildlife-orca",
      "artwork": "official/endangered-wildlife-orca.jpg",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/orcaPlate.jpg",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.3475,
            0.34555,
            0.6275,
            0.52356
          ],
          [
            0.255,
            0.429319,
            0.0675,
            0.167539
          ],
          [
            0.2375,
            0.649215,
            0.095,
            0.172775
          ]
        ],
        "textRect": [
          0.235,
          0.34555,
          0.74,
          0.52356
        ],
        "inkColor": "#000000",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.93,
          "layout": "cells",
          "glyphWidth": 0.3871,
          "cellAdvance": 0.5565,
          "glyphWidths": {
            "S": 0.3871,
            "M": 0.3871,
            "P": 0.3763,
            "L": 0.3978,
            "E": 0.3871
          }
        }
      }
    },
    {
      "id": "honeybees-and-pollinators",
      "name": "Honeybees and Pollinators",
      "category": "Parks and nature",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/honeybees-and-pollinators",
      "artwork": "official/honeybees-and-pollinators.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/pollinator-plate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.3375,
            0.34555,
            0.6325,
            0.52356
          ],
          [
            0.24,
            0.413613,
            0.07,
            0.188482
          ],
          [
            0.24,
            0.633508,
            0.07,
            0.183246
          ]
        ],
        "textRect": [
          0.235,
          0.34555,
          0.735,
          0.52356
        ],
        "inkColor": "#FFFFFF",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.94,
          "layout": "cells",
          "glyphWidth": 0.383,
          "cellAdvance": 0.5585,
          "glyphWidths": {
            "S": 0.3936,
            "M": 0.383,
            "P": 0.383,
            "L": 0.3936,
            "E": 0.383
          }
        }
      }
    },
    {
      "id": "lighthouses",
      "name": "Lighthouses",
      "category": "Parks and nature",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/lighthouses",
      "artwork": "official/lighthouses.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/lighthousePlate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.3475,
            0.34555,
            0.6225,
            0.52356
          ],
          [
            0.2575,
            0.408377,
            0.07,
            0.172775
          ],
          [
            0.255,
            0.586387,
            0.075,
            0.188482
          ]
        ],
        "textRect": [
          0.2525,
          0.34555,
          0.7175,
          0.52356
        ],
        "inkColor": "#060606",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.93,
          "layout": "cells",
          "glyphWidth": 0.3871,
          "cellAdvance": 0.5538,
          "glyphWidths": {
            "S": 0.3978,
            "M": 0.3871,
            "P": 0.3763,
            "L": 0.3978,
            "E": 0.3871
          }
        }
      }
    },
    {
      "id": "mount-st-helens",
      "name": "Mount St. Helens",
      "category": "Parks and nature",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/mount-st-helens",
      "artwork": "official/mount-st-helens.png",
      "width": 400,
      "height": 190,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/mount-st-helens-plate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.3325,
            0.352632,
            0.63,
            0.521053
          ],
          [
            0.235,
            0.421053,
            0.0775,
            0.184211
          ],
          [
            0.23,
            0.636842,
            0.095,
            0.184211
          ]
        ],
        "textRect": [
          0.23,
          0.352632,
          0.7325,
          0.521053
        ],
        "inkColor": "#FFFFFF",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.9495,
          "layout": "cells",
          "glyphWidth": 0.383,
          "cellAdvance": 0.5559,
          "glyphWidths": {
            "S": 0.3936,
            "M": 0.383,
            "P": 0.383,
            "L": 0.3936,
            "E": 0.383
          }
        }
      }
    },
    {
      "id": "san-juan-islands",
      "name": "San Juan Islands",
      "category": "Parks and nature",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/san-juan-islands",
      "artwork": "official/san-juan-islands.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/SanJuanIslandsPlate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.33,
            0.340314,
            0.64,
            0.518325
          ],
          [
            0.2225,
            0.413613,
            0.0775,
            0.188482
          ],
          [
            0.2275,
            0.628272,
            0.0725,
            0.204188
          ]
        ],
        "textRect": [
          0.22,
          0.340314,
          0.75,
          0.518325
        ],
        "inkColor": "#FFFFFF",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.9091,
          "layout": "cells",
          "glyphWidth": 0.4111,
          "cellAdvance": 0.5833,
          "glyphWidths": {
            "S": 0.4111,
            "M": 0.4111,
            "P": 0.4,
            "L": 0.4111,
            "E": 0.4
          }
        }
      }
    },
    {
      "id": "smokey-bear",
      "name": "Smokey Bear",
      "category": "Parks and nature",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/smokey-bear",
      "artwork": "official/smokey-bear.png",
      "width": 400,
      "height": 190,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/smokey-bear-plate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.33,
            0.342105,
            0.6325,
            0.531579
          ],
          [
            0.2175,
            0.342105,
            0.0825,
            0.210526
          ],
          [
            0.2225,
            0.563158,
            0.0775,
            0.2
          ]
        ],
        "textRect": [
          0.2175,
          0.342105,
          0.745,
          0.531579
        ],
        "inkColor": "#FFFFFF",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.9307,
          "layout": "cells",
          "glyphWidth": 0.383,
          "cellAdvance": 0.5559,
          "glyphWidths": {
            "S": 0.3936,
            "M": 0.383,
            "P": 0.383,
            "L": 0.3936,
            "E": 0.383
          }
        }
      }
    },
    {
      "id": "state-flower",
      "name": "State Flower",
      "category": "Parks and nature",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/state-flower",
      "artwork": "official/state-flower.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/StateFlowerPlate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.375,
            0.340314,
            0.5925,
            0.492147
          ],
          [
            0.2675,
            0.397906,
            0.0725,
            0.17801
          ],
          [
            0.2725,
            0.591623,
            0.0725,
            0.17801
          ]
        ],
        "textRect": [
          0.265,
          0.340314,
          0.7025,
          0.492147
        ],
        "inkColor": "#050608",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.9255,
          "layout": "cells",
          "glyphWidth": 0.3908,
          "cellAdvance": 0.5575,
          "glyphWidths": {
            "S": 0.4023,
            "M": 0.3908,
            "P": 0.3793,
            "L": 0.3908,
            "E": 0.3908
          }
        }
      }
    },
    {
      "id": "washington-national-parks",
      "name": "Washington National Parks",
      "category": "Parks and nature",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/washington-national-parks",
      "artwork": "official/washington-national-parks.jpg",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/NationalParksPlate.jpg",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.3325,
            0.34555,
            0.63,
            0.52356
          ],
          [
            0.205,
            0.397906,
            0.0825,
            0.193717
          ],
          [
            0.21,
            0.612565,
            0.0825,
            0.183246
          ]
        ],
        "textRect": [
          0.2025,
          0.34555,
          0.76,
          0.52356
        ],
        "inkColor": "#000000",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.93,
          "layout": "cells",
          "glyphWidth": 0.3978,
          "cellAdvance": 0.5565,
          "glyphWidths": {
            "S": 0.3978,
            "M": 0.3978,
            "P": 0.3871,
            "L": 0.3978,
            "E": 0.3871
          }
        }
      }
    },
    {
      "id": "washington-state-parks",
      "name": "Washington State Parks",
      "category": "Parks and nature",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/washington-state-parks",
      "artwork": "official/washington-state-parks.jpg",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/StateParksPlate.jpg",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.3675,
            0.350785,
            0.625,
            0.497382
          ],
          [
            0.285,
            0.39267,
            0.0825,
            0.188482
          ],
          [
            0.285,
            0.638743,
            0.0825,
            0.183246
          ]
        ],
        "textRect": [
          0.28,
          0.350785,
          0.7125,
          0.497382
        ],
        "inkColor": "#000000",
        "backgroundColor": null,
        "lettering": {
          "font": "inconsolata-500",
          "capHeight": 0.9368,
          "layout": "cells",
          "glyphWidth": 0.4157,
          "cellAdvance": 0.5815,
          "glyphWidths": {
            "S": 0.4157,
            "M": 0.4157,
            "P": 0.4045,
            "L": 0.4157,
            "E": 0.4045
          }
        }
      }
    },
    {
      "id": "washingtons-wildlife-bear",
      "name": "Washington's Wildlife: Bear",
      "category": "Parks and nature",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/washingtons-wildlife-bear",
      "artwork": "official/washingtons-wildlife-bear.jpg",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/bearPlate.jpg",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.345,
            0.366492,
            0.605,
            0.486911
          ],
          [
            0.2125,
            0.434555,
            0.0975,
            0.17801
          ],
          [
            0.23,
            0.638743,
            0.0825,
            0.172775
          ]
        ],
        "textRect": [
          0.21,
          0.366492,
          0.74,
          0.486911
        ],
        "inkColor": "#000000",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.9247,
          "layout": "cells",
          "glyphWidth": 0.407,
          "cellAdvance": 0.5814,
          "glyphWidths": {
            "S": 0.407,
            "M": 0.407,
            "P": 0.3953,
            "L": 0.4186,
            "E": 0.407
          }
        }
      }
    },
    {
      "id": "washingtons-wildlife-deer",
      "name": "Washington's Wildlife: Deer",
      "category": "Parks and nature",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/washingtons-wildlife-deer",
      "artwork": "official/washingtons-wildlife-deer.jpg",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/deerPlate.jpg",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.33,
            0.350785,
            0.625,
            0.52356
          ],
          [
            0.2175,
            0.413613,
            0.105,
            0.17801
          ],
          [
            0.24,
            0.60733,
            0.085,
            0.17801
          ]
        ],
        "textRect": [
          0.2175,
          0.350785,
          0.7375,
          0.52356
        ],
        "inkColor": "#000000",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.93,
          "layout": "cells",
          "glyphWidth": 0.3871,
          "cellAdvance": 0.5538,
          "glyphWidths": {
            "S": 0.3978,
            "M": 0.3871,
            "P": 0.3763,
            "L": 0.3978,
            "E": 0.3871
          }
        }
      }
    },
    {
      "id": "washingtons-wildlife-elk",
      "name": "Washington's Wildlife: Elk",
      "category": "Parks and nature",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/washingtons-wildlife-elk",
      "artwork": "official/washingtons-wildlife-elk.jpg",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/elkPlate.jpg",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.365,
            0.356021,
            0.63,
            0.492147
          ],
          [
            0.2325,
            0.471204,
            0.0975,
            0.17801
          ],
          [
            0.25,
            0.670157,
            0.0775,
            0.17801
          ]
        ],
        "textRect": [
          0.23,
          0.356021,
          0.765,
          0.492147
        ],
        "inkColor": "#000000",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.9362,
          "layout": "cells",
          "glyphWidth": 0.4091,
          "cellAdvance": 0.5881,
          "glyphWidths": {
            "S": 0.4091,
            "M": 0.4091,
            "P": 0.3977,
            "L": 0.4091,
            "E": 0.4091
          }
        }
      }
    },
    {
      "id": "washingtons-wildlife-steelhead",
      "name": "Washington's Wildlife: Steelhead",
      "category": "Parks and nature",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/washingtons-wildlife-steelhead",
      "artwork": "official/washingtons-wildlife-steelhead.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/SteelheadPlate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.3475,
            0.335079,
            0.6325,
            0.513089
          ],
          [
            0.1675,
            0.376963,
            0.1075,
            0.193717
          ],
          [
            0.18,
            0.586387,
            0.0875,
            0.198953
          ]
        ],
        "textRect": [
          0.1675,
          0.335079,
          0.8125,
          0.513089
        ],
        "inkColor": "#FFFFFF",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.9184,
          "layout": "cells",
          "glyphWidth": 0.4,
          "cellAdvance": 0.5833,
          "glyphWidths": {
            "S": 0.4111,
            "M": 0.4,
            "P": 0.4,
            "L": 0.4111,
            "E": 0.4
          }
        }
      }
    },
    {
      "id": "wild-washington-eagle",
      "name": "Wild on Washington: Eagle",
      "category": "Parks and nature",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/wild-washington-eagle",
      "artwork": "official/wild-washington-eagle.jpg",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/eaglePlate.jpg",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.345,
            0.340314,
            0.635,
            0.518325
          ],
          [
            0.2375,
            0.403141,
            0.1,
            0.188482
          ],
          [
            0.2425,
            0.617801,
            0.0925,
            0.193717
          ]
        ],
        "textRect": [
          0.235,
          0.340314,
          0.745,
          0.518325
        ],
        "inkColor": "#000000",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.9394,
          "layout": "cells",
          "glyphWidth": 0.3871,
          "cellAdvance": 0.5591,
          "glyphWidths": {
            "S": 0.3978,
            "M": 0.3871,
            "P": 0.3871,
            "L": 0.3871,
            "E": 0.3871
          }
        }
      }
    },
    {
      "id": "amateur-radio-operator-ham",
      "name": "Amateur Radio Operator (HAM)",
      "category": "Special interest",
      "personalization": "not-personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/amateur-radio-operator-ham",
      "artwork": "official/amateur-radio-operator-ham.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/HAMplate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL states that this plate cannot be personalized. The original plate remains available to view.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle"
      ],
      "profile": {
        "masks": [],
        "textRect": null,
        "inkColor": "#000000",
        "font": "tall",
        "backgroundColor": null
      }
    },
    {
      "id": "fly-washington-aviation",
      "name": "Fly Washington aviation",
      "category": "Special interest",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/fly-washington-aviation",
      "artwork": "official/fly-washington-aviation.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/AviationPlate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.51,
            0.34555,
            0.4775,
            0.513089
          ],
          [
            0.36,
            0.403141,
            0.0975,
            0.193717
          ],
          [
            0.36,
            0.623037,
            0.0925,
            0.198953
          ]
        ],
        "textRect": [
          0.3575,
          0.34555,
          0.63,
          0.513089
        ],
        "inkColor": "#0F0E0C",
        "backgroundColor": null,
        "lettering": {
          "font": "inconsolata-500",
          "capHeight": 0.9082,
          "layout": "cells",
          "glyphWidth": 0.3034,
          "cellAdvance": 0.441,
          "glyphWidths": {
            "S": 0.3034,
            "M": 0.3034,
            "P": 0.3034,
            "L": 0.3146,
            "E": 0.3034
          }
        }
      }
    },
    {
      "id": "keep-wa-evergreen",
      "name": "Keep WA Evergreen",
      "category": "Special interest",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/keep-wa-evergreen",
      "artwork": "official/keep-wa-evergreen.png",
      "width": 400,
      "height": 192,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/keep-wa-evergreen-plate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.2325,
            0.34375,
            0.6325,
            0.526042
          ],
          [
            0.14,
            0.40625,
            0.0775,
            0.197917
          ],
          [
            0.1375,
            0.619792,
            0.085,
            0.197917
          ]
        ],
        "textRect": [
          0.135,
          0.34375,
          0.73,
          0.526042
        ],
        "inkColor": "#0D825A",
        "backgroundColor": "#F2F9F6",
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.9208,
          "layout": "cells",
          "glyphWidth": 0.3871,
          "cellAdvance": 0.5538,
          "glyphWidths": {
            "S": 0.3978,
            "M": 0.3871,
            "P": 0.3763,
            "L": 0.3978,
            "E": 0.3871
          }
        }
      }
    },
    {
      "id": "lemay-americas-car-museum",
      "name": "LeMay-America's Car Museum",
      "category": "Special interest",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/lemay-americas-car-museum",
      "artwork": "official/lemay-americas-car-museum.png",
      "width": 400,
      "height": 190,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/lemay-plate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.33,
            0.336842,
            0.6325,
            0.536842
          ],
          [
            0.2425,
            0.405263,
            0.0775,
            0.194737
          ],
          [
            0.235,
            0.626316,
            0.0875,
            0.205263
          ]
        ],
        "textRect": [
          0.2325,
          0.336842,
          0.73,
          0.536842
        ],
        "inkColor": "#FFFFFF",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.9216,
          "layout": "cells",
          "glyphWidth": 0.383,
          "cellAdvance": 0.5559,
          "glyphWidths": {
            "S": 0.3936,
            "M": 0.383,
            "P": 0.383,
            "L": 0.3936,
            "E": 0.383
          }
        }
      }
    },
    {
      "id": "music-matters",
      "name": "Music Matters",
      "category": "Special interest",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/music-matters",
      "artwork": "official/music-matters.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/musicPlate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.0975,
            0.298429,
            0.8125,
            0.497382
          ]
        ],
        "textRect": [
          0.0975,
          0.298429,
          0.8125,
          0.497382
        ],
        "inkColor": "#030708",
        "backgroundColor": null,
        "lettering": {
          "font": "roadgeek-2014-b",
          "capHeight": 0.8842,
          "layout": "cells",
          "glyphWidth": 0.4167,
          "cellAdvance": 0.5863,
          "glyphWidths": {
            "M": 0.4167,
            "U": 0.4167,
            "1": 0.1667,
            "2": 0.4167,
            "3": 0.4167,
            "4": 0.4167,
            "5": 0.4167
          }
        }
      }
    },
    {
      "id": "share-road",
      "name": "Share the Road",
      "category": "Special interest",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/share-road",
      "artwork": "official/share-road.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/ShareRoadPlate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.3475,
            0.34555,
            0.6275,
            0.502618
          ],
          [
            0.2525,
            0.403141,
            0.085,
            0.183246
          ],
          [
            0.2525,
            0.628272,
            0.085,
            0.188482
          ]
        ],
        "textRect": [
          0.25,
          0.34555,
          0.725,
          0.502618
        ],
        "inkColor": "#000000",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.9271,
          "layout": "cells",
          "glyphWidth": 0.4045,
          "cellAdvance": 0.5787,
          "glyphWidths": {
            "S": 0.4045,
            "M": 0.4045,
            "P": 0.3933,
            "L": 0.4045,
            "E": 0.3933
          }
        }
      }
    },
    {
      "id": "square-dancer",
      "name": "Square Dancer",
      "category": "Special interest",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/square-dancer",
      "artwork": "official/square-dancer.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/squaredancePlate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle"
      ],
      "profile": {
        "masks": [
          [
            0.06,
            0.314136,
            0.6125,
            0.539267
          ],
          {
            "rect": [
              0.8875,
              0.293194,
              0.0975,
              0.225131
            ],
            "inkColor": "#17397b"
          },
          {
            "rect": [
              0.8875,
              0.570681,
              0.0975,
              0.256545
            ],
            "inkColor": "#17397b"
          }
        ],
        "textRect": [
          0.06,
          0.314136,
          0.6125,
          0.539267
        ],
        "inkColor": "#000000",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.9126,
          "layout": "cells",
          "glyphWidth": 0.3191,
          "cellAdvance": 0.5399,
          "glyphWidths": {
            "S": 0.3191,
            "M": 0.3191,
            "P": 0.3085,
            "L": 0.3191,
            "E": 0.3085
          }
        }
      }
    },
    {
      "id": "throwback-plate",
      "name": "Throwback plate",
      "category": "Special interest",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/throwback-plate",
      "artwork": "official/throwback-plate.png",
      "width": 400,
      "height": 190,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/throwback-plate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.2375,
            0.347368,
            0.6325,
            0.531579
          ],
          [
            0.1175,
            0.421053,
            0.11,
            0.2
          ],
          [
            0.1225,
            0.636842,
            0.1075,
            0.189474
          ]
        ],
        "textRect": [
          0.115,
          0.347368,
          0.755,
          0.531579
        ],
        "inkColor": "#FFFFFF",
        "backgroundColor": "#000000",
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.9307,
          "layout": "cells",
          "glyphWidth": 0.3936,
          "cellAdvance": 0.5532,
          "glyphWidths": {
            "S": 0.3936,
            "M": 0.3936,
            "P": 0.3723,
            "L": 0.3936,
            "E": 0.383
          }
        }
      }
    },
    {
      "id": "washington-wine-commission",
      "name": "Washington Wine Commission",
      "category": "Special interest",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/washington-wine-commission",
      "artwork": "official/washington-wine-commission.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/wine-country-plate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.3625,
            0.34555,
            0.5825,
            0.502618
          ],
          [
            0.2425,
            0.376963,
            0.1025,
            0.188482
          ],
          [
            0.255,
            0.570681,
            0.085,
            0.193717
          ]
        ],
        "textRect": [
          0.24,
          0.34555,
          0.705,
          0.502618
        ],
        "inkColor": "#FFFFFF",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.9375,
          "layout": "cells",
          "glyphWidth": 0.3889,
          "cellAdvance": 0.5111,
          "glyphWidths": {
            "S": 0.3889,
            "M": 0.3889,
            "P": 0.3778,
            "L": 0.4,
            "E": 0.3778
          }
        }
      }
    },
    {
      "id": "seattle-kraken",
      "name": "Seattle Kraken",
      "category": "Sports",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/seattle-kraken",
      "artwork": "official/seattle-kraken.png",
      "width": 400,
      "height": 190,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/kraken-plate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.3525,
            0.431579,
            0.625,
            0.442105
          ],
          [
            0.25,
            0.368421,
            0.0825,
            0.194737
          ],
          [
            0.25,
            0.594737,
            0.0825,
            0.205263
          ]
        ],
        "textRect": [
          0.2475,
          0.426316,
          0.73,
          0.447368
        ],
        "inkColor": "#FFFFFF",
        "backgroundColor": null,
        "lettering": {
          "font": "droid-sans-mono",
          "capHeight": 0.8706,
          "layout": "cells",
          "glyphWidth": 0.5811,
          "cellAdvance": 0.6791,
          "glyphWidths": {
            "S": 0.5946,
            "M": 0.6081,
            "P": 0.5811,
            "L": 0.5541,
            "E": 0.527
          }
        }
      }
    },
    {
      "id": "seattle-mariners",
      "name": "Seattle Mariners",
      "category": "Sports",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/seattle-mariners",
      "artwork": "official/seattle-mariners.png",
      "width": 356,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/marinersPlate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle"
      ],
      "profile": {
        "masks": [
          [
            0.421348,
            0.293194,
            0.533708,
            0.513089
          ],
          [
            0.297753,
            0.340314,
            0.087079,
            0.198953
          ],
          [
            0.294944,
            0.554974,
            0.101124,
            0.204188
          ]
        ],
        "textRect": [
          0.292135,
          0.293194,
          0.662921,
          0.513089
        ],
        "inkColor": "#FFFFFF",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.9082,
          "layout": "cells",
          "glyphWidth": 0.3258,
          "cellAdvance": 0.4242,
          "glyphWidths": {
            "S": 0.3258,
            "M": 0.3258,
            "P": 0.3146,
            "L": 0.3258,
            "E": 0.3258
          }
        }
      }
    },
    {
      "id": "seattle-seahawks",
      "name": "Seattle Seahawks",
      "category": "Sports",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/seattle-seahawks",
      "artwork": "official/seattle-seahawks.png",
      "width": 400,
      "height": 193,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/seahawks-throwback-plate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.335,
            0.34715,
            0.63,
            0.518135
          ],
          [
            0.24,
            0.409326,
            0.08,
            0.19171
          ],
          [
            0.24,
            0.621762,
            0.0825,
            0.19171
          ]
        ],
        "textRect": [
          0.2375,
          0.34715,
          0.7275,
          0.518135
        ],
        "inkColor": "#065697",
        "backgroundColor": "#F8F8F0",
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.93,
          "layout": "cells",
          "glyphWidth": 0.3871,
          "cellAdvance": 0.5511,
          "glyphWidths": {
            "S": 0.3978,
            "M": 0.3871,
            "P": 0.3763,
            "L": 0.3978,
            "E": 0.3763
          }
        }
      }
    },
    {
      "id": "seattle-sounders-fc",
      "name": "Seattle Sounders FC",
      "category": "Sports",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/seattle-sounders-fc",
      "artwork": "official/seattle-sounders-fc.png",
      "width": 400,
      "height": 190,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/sounders-plate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.32,
            0.342105,
            0.6125,
            0.526316
          ],
          [
            0.215,
            0.410526,
            0.0725,
            0.184211
          ],
          [
            0.215,
            0.621053,
            0.0775,
            0.189474
          ]
        ],
        "textRect": [
          0.2125,
          0.342105,
          0.72,
          0.526316
        ],
        "inkColor": "#FFFFFF",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.91,
          "layout": "cells",
          "glyphWidth": 0.3846,
          "cellAdvance": 0.5495,
          "glyphWidths": {
            "S": 0.3956,
            "M": 0.3956,
            "P": 0.3736,
            "L": 0.3846,
            "E": 0.3846
          }
        }
      }
    },
    {
      "id": "seattle-storm",
      "name": "Seattle Storm",
      "category": "Sports",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/seattle-storm",
      "artwork": "official/seattle-storm.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/stormPlate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.5025,
            0.340314,
            0.4675,
            0.534031
          ],
          [
            0.3425,
            0.397906,
            0.085,
            0.198953
          ],
          [
            0.3425,
            0.612565,
            0.0875,
            0.204188
          ]
        ],
        "textRect": [
          0.34,
          0.340314,
          0.63,
          0.534031
        ],
        "inkColor": "#FFFFFF",
        "backgroundColor": "#203230",
        "lettering": {
          "font": "roadgeek-2014-b",
          "capHeight": 0.9314,
          "layout": "cells",
          "glyphWidth": 0.2842,
          "cellAdvance": 0.3947,
          "glyphWidths": {
            "S": 0.2842,
            "M": 0.2737,
            "P": 0.2842,
            "L": 0.2737,
            "E": 0.2842
          }
        }
      }
    },
    {
      "id": "ski-and-ride",
      "name": "Ski and Ride",
      "category": "Sports",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/ski-and-ride",
      "artwork": "official/ski-and-ride.jpg",
      "width": 400,
      "height": 199,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/skiPlate.jpg",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.3675,
            0.371859,
            0.6125,
            0.472362
          ],
          [
            0.265,
            0.40201,
            0.0775,
            0.190955
          ],
          [
            0.265,
            0.61809,
            0.08,
            0.19598
          ]
        ],
        "textRect": [
          0.2625,
          0.371859,
          0.7175,
          0.472362
        ],
        "inkColor": "#FFFFFF",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.9149,
          "layout": "cells",
          "glyphWidth": 0.407,
          "cellAdvance": 0.5814,
          "glyphWidths": {
            "S": 0.407,
            "M": 0.407,
            "P": 0.3837,
            "L": 0.4186,
            "E": 0.3953
          }
        }
      }
    },
    {
      "id": "state-sport-pickleball",
      "name": "State sport: Pickleball",
      "category": "Sports",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/state-sport-pickleball",
      "artwork": "official/state-sport-pickleball.png",
      "width": 400,
      "height": 190,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/pickleball-plate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.33,
            0.336842,
            0.635,
            0.536842
          ],
          [
            0.24,
            0.405263,
            0.08,
            0.2
          ],
          [
            0.24,
            0.626316,
            0.0825,
            0.189474
          ]
        ],
        "textRect": [
          0.2375,
          0.336842,
          0.7275,
          0.536842
        ],
        "inkColor": "#FFFFFF",
        "backgroundColor": null,
        "lettering": {
          "font": "inconsolata-600",
          "capHeight": 0.9216,
          "layout": "cells",
          "glyphWidth": 0.3936,
          "cellAdvance": 0.5559,
          "glyphWidths": {
            "S": 0.3936,
            "M": 0.4043,
            "P": 0.383,
            "L": 0.4149,
            "E": 0.383
          }
        }
      }
    },
    {
      "id": "tennis",
      "name": "Tennis",
      "category": "Sports",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/tennis",
      "artwork": "official/tennis.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/TennisPlate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.425,
            0.356021,
            0.545,
            0.518325
          ],
          [
            0.285,
            0.371728,
            0.09,
            0.209424
          ],
          [
            0.2875,
            0.602094,
            0.0875,
            0.225131
          ]
        ],
        "textRect": [
          0.2825,
          0.356021,
          0.6875,
          0.518325
        ],
        "inkColor": "#000000",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.9091,
          "layout": "cells",
          "glyphWidth": 0.4,
          "cellAdvance": 0.4833,
          "glyphWidths": {
            "S": 0.4111,
            "M": 0.4,
            "P": 0.4,
            "L": 0.4111,
            "E": 0.4
          }
        }
      }
    },
    {
      "id": "wrestling",
      "name": "Wrestling",
      "category": "Sports",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/wrestling",
      "artwork": "official/wrestling.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/WrestlingPlate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.3825,
            0.350785,
            0.5925,
            0.52356
          ],
          [
            0.245,
            0.350785,
            0.1125,
            0.204188
          ],
          [
            0.2625,
            0.581152,
            0.09,
            0.219895
          ]
        ],
        "textRect": [
          0.2425,
          0.350785,
          0.7325,
          0.52356
        ],
        "inkColor": "#F2D695",
        "backgroundColor": "#175641",
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.92,
          "layout": "cells",
          "glyphWidth": 0.4022,
          "cellAdvance": 0.5245,
          "glyphWidths": {
            "S": 0.413,
            "M": 0.4022,
            "P": 0.3913,
            "L": 0.413,
            "E": 0.4022
          }
        }
      }
    },
    {
      "id": "chehalis-tribe",
      "name": "Chehalis Tribe",
      "category": "Tribal",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/chehalis-tribe",
      "artwork": "official/chehalis-tribe.png",
      "width": 400,
      "height": 190,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/chehalis-tribe-plate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.37,
            0.336842,
            0.6,
            0.536842
          ],
          [
            0.3,
            0.436842,
            0.0775,
            0.178947
          ],
          [
            0.3025,
            0.615789,
            0.0775,
            0.194737
          ]
        ],
        "textRect": [
          0.2975,
          0.336842,
          0.6725,
          0.536842
        ],
        "inkColor": "#FFFFFF",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.9314,
          "layout": "cells",
          "glyphWidth": 0.3789,
          "cellAdvance": 0.5105,
          "glyphWidths": {
            "S": 0.3789,
            "M": 0.3895,
            "P": 0.3789,
            "L": 0.3895,
            "E": 0.3789
          }
        }
      }
    },
    {
      "id": "muckleshoot-tribe",
      "name": "Muckleshoot Tribe",
      "category": "Tribal",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/muckleshoot-tribe",
      "artwork": "official/muckleshoot-tribe.png",
      "width": 400,
      "height": 190,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/muckleshoot-tribe-plate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.3625,
            0.342105,
            0.6075,
            0.542105
          ],
          [
            0.27,
            0.431579,
            0.0875,
            0.173684
          ],
          [
            0.28,
            0.610526,
            0.0775,
            0.163158
          ]
        ],
        "textRect": [
          0.2675,
          0.342105,
          0.7025,
          0.542105
        ],
        "inkColor": "#050608",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.9223,
          "layout": "cells",
          "glyphWidth": 0.3895,
          "cellAdvance": 0.5105,
          "glyphWidths": {
            "S": 0.3895,
            "M": 0.3895,
            "P": 0.3789,
            "L": 0.3895,
            "E": 0.3789
          }
        }
      }
    },
    {
      "id": "puyallup-tribe",
      "name": "Puyallup Tribe",
      "category": "Tribal",
      "personalization": "personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/puyallup-tribe",
      "artwork": "official/puyallup-tribe.png",
      "width": 400,
      "height": 190,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/puyallup-tribe-plate_0.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL offers personalization for this design. Design-specific eligibility and final approval still apply.",
      "vehicleTypes": [
        "Passenger",
        "Truck",
        "Motorcycle",
        "Trailer"
      ],
      "profile": {
        "masks": [
          [
            0.31,
            0.347368,
            0.6325,
            0.536842
          ],
          [
            0.2125,
            0.410526,
            0.09,
            0.184211
          ],
          [
            0.2125,
            0.631579,
            0.0925,
            0.194737
          ]
        ],
        "textRect": [
          0.21,
          0.347368,
          0.7325,
          0.536842
        ],
        "inkColor": "#000000",
        "backgroundColor": null,
        "lettering": {
          "font": "barlow-condensed",
          "capHeight": 0.9118,
          "layout": "cells",
          "glyphWidth": 0.3871,
          "cellAdvance": 0.5565,
          "glyphWidths": {
            "S": 0.3871,
            "M": 0.3871,
            "P": 0.3656,
            "L": 0.3978,
            "E": 0.3763
          }
        }
      }
    },
    {
      "id": "disabled-parking",
      "name": "Disabled Parking",
      "category": "Miscellaneous",
      "personalization": "not-personalizable",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/disabled-parking",
      "artwork": "official/disabled-parking.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/DisabledParkingPlate.png",
      "blankArtwork": null,
      "eligibilityNote": "DOL states that this plate cannot be personalized. The original plate remains available to view.",
      "vehicleTypes": [
        "Passenger",
        "Truck"
      ],
      "profile": {
        "masks": [],
        "textRect": null,
        "inkColor": "#000000",
        "font": "tall",
        "backgroundColor": null
      }
    },
    {
      "id": "rideshare",
      "name": "Rideshare",
      "category": "Miscellaneous",
      "personalization": "not-documented",
      "pageUrl": "https://dol.wa.gov/vehicles-and-boats/license-plates/get-custom-plates/special-design-plates/rideshare",
      "artwork": "official/rideshare.png",
      "width": 400,
      "height": 191,
      "sourceUrl": "https://dol.wa.gov/sites/default/files/plates/ridesharePlate.png",
      "blankArtwork": null,
      "eligibilityNote": "The DOL page does not document a personalization option for this design. Check with DOL before applying.",
      "vehicleTypes": [
        "Passenger/truck"
      ],
      "profile": {
        "masks": [],
        "textRect": null,
        "inkColor": "#000000",
        "font": "tall",
        "backgroundColor": null
      }
    }
  ]
};
  function freeze(value) {
    if (value && typeof value === 'object') {
      Object.keys(value).forEach(function (key) { freeze(value[key]); });
      Object.freeze(value);
    }
    return value;
  }
  freeze(catalog);
  if (typeof module !== 'undefined' && module.exports) module.exports = catalog;
  else global.WAPlateCatalog = catalog;
}(typeof window !== 'undefined' ? window : globalThis));
