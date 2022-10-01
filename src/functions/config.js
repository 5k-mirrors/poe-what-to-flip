export const proxy = url => {
  return `https://c-hive-proxy.herokuapp.com/${url}`;
};

export const leaguesApi = () => {
  return proxy("http://api.pathofexile.com/leagues?type=main&compact=1");
};

export const comparisons = () => {
  return {
    "Pure vs. normal Breachstones": [
      {
        name: "Chayula",
        base: ["Chayula's Pure Breachstone"],
        compare: ["Chayula's Breachstone"],
      },
      {
        name: "Uul-Netol",
        base: ["Uul-Netol's Pure Breachstone"],
        compare: ["Uul-Netol's Breachstone"],
      },
      {
        name: "Tul",
        base: ["Tul's Pure Breachstone"],
        compare: ["Tul's Breachstone"],
      },
      {
        name: "Xoph",
        base: ["Xoph's Pure Breachstone"],
        compare: ["Xoph's Breachstone"],
      },
      {
        name: "Esh",
        base: ["Esh's Pure Breachstone"],
        compare: ["Esh's Breachstone"],
      },
    ],
    "Divination cards vs. outcome": [
      {
        name: "The Apothecary (Mageblood)",
        base: ["Mageblood"],
        compare: [
          "The Apothecary",
          "The Apothecary",
          "The Apothecary",
          "The Apothecary",
          "The Apothecary",
        ],
      },
      {
        name: "The Nurse",
        base: ["The Doctor"],
        compare: [
          "The Nurse",
          "The Nurse",
          "The Nurse",
          "The Nurse",
          "The Nurse",
          "The Nurse",
          "The Nurse",
          "The Nurse",
        ],
      },
      {
        name: "Succor of the Sinless (Bottled Faith)",
        base: ["Bottled Faith"],
        compare: [
          "Succor of the Sinless",
          "Succor of the Sinless",
          "Succor of the Sinless",
          "Succor of the Sinless",
          "Succor of the Sinless",
          "Succor of the Sinless",
        ],
      },
      {
        name: "The Sephirot",
        base: [
          "Divine Orb",
          "Divine Orb",
          "Divine Orb",
          "Divine Orb",
          "Divine Orb",
          "Divine Orb",
          "Divine Orb",
          "Divine Orb",
          "Divine Orb",
          "Divine Orb",
        ],
        compare: [
          "The Sephirot",
          "The Sephirot",
          "The Sephirot",
          "The Sephirot",
          "The Sephirot",
          "The Sephirot",
          "The Sephirot",
          "The Sephirot",
          "The Sephirot",
          "The Sephirot",
          "The Sephirot",
        ],
      },
      {
        name: "The Hoarder (Exalted Orb)",
        base: ["Exalted Orb"],
        compare: [
          "The Hoarder",
          "The Hoarder",
          "The Hoarder",
          "The Hoarder",
          "The Hoarder",
          "The Hoarder",
          "The Hoarder",
          "The Hoarder",
          "The Hoarder",
          "The Hoarder",
          "The Hoarder",
          "The Hoarder",
        ],
      },
      {
        name: "Abandoned Wealth (3x Exalted Orb)",
        base: ["Exalted Orb", "Exalted Orb", "Exalted Orb"],
        compare: [
          "Abandoned Wealth",
          "Abandoned Wealth",
          "Abandoned Wealth",
          "Abandoned Wealth",
          "Abandoned Wealth",
        ],
      },
      {
        name: "Nook's Crown (Elder Bone Helmet ilvl100)",
        base: ["bone-helmet-86-elder"],
        compare: [
          "Nook's Crown",
          "Nook's Crown",
          "Nook's Crown",
          "Nook's Crown",
        ],
      },
    ],
    "Gilded Scarabs": [
      {
        name: "Sulphite",
        base: ["Gilded Sulphite Scarab"],
        compare: [],
        comment: "Cameria",
      },
      {
        name: "Legion",
        base: ["Gilded Legion Scarab"],
        compare: [],
        comment: "Vagan",
      },
      {
        name: "Harbinger",
        base: ["Gilded Harbinger Scarab"],
        compare: [],
        comment: "Tora",
      },
      {
        name: "Bestiary",
        base: ["Gilded Bestiary Scarab"],
        compare: [],
        comment: "Jorgin",
      },
      {
        name: "Divination",
        base: ["Gilded Divination Scarab"],
        compare: [],
        comment: "Gravicius",
      },
      {
        name: "Cartography",
        base: ["Gilded Cartography Scarab"],
        compare: [],
        comment: "Rin",
      },
      {
        name: "Torment",
        base: ["Gilded Torment Scarab"],
        compare: [],
        comment: "Leo",
      },
      {
        name: "Shaper",
        base: ["Gilded Shaper Scarab"],
        compare: [],
        comment: "Vorici",
      },
      {
        name: "Elder",
        base: ["Gilded Elder Scarab"],
        compare: [],
        comment: "Korell",
      },
      {
        name: "Reliquary",
        base: ["Gilded Reliquary Scarab"],
        compare: [],
        comment: "Elreon",
      },
      {
        name: "Breach",
        base: ["Gilded Breach Scarab"],
        compare: [],
        comment: "It That Fled",
      },
      {
        name: "Ambush",
        base: ["Gilded Ambush Scarab"],
        compare: [],
        comment: "Haku",
      },
      {
        name: "Perandus",
        base: ["Gilded Perandus Scarab"],
        compare: [],
        comment: "Janus",
      },
    ],
    "Item prices": [
      {
        name: "Exalted Orb",
        base: ["Exalted Orb"],
        compare: [],
      },
    ],
    "Incursion uniques (vials excluded)": [
      {
        name: "Apep's Supremacy",
        base: ["Apep's Supremacy"],
        compare: ["Apep's Slumber"],
        comment:
          "Vial of Awakening: https://www.pathofexile.com/trade/search/Metamorph/KYVR6Ri5",
      },
      {
        name: "Slavedriver's Hand",
        base: ["Slavedriver's Hand"],
        compare: ["Architect's Hand"],
        comment:
          "Vial of Dominance: https://www.pathofexile.com/trade/search/Metamorph/q2Ew93Cg",
      },
      {
        name: "Mask of the Stitched Demon",
        base: ["Mask of the Stitched Demon"],
        compare: ["Mask of the Spirit Drinker"],
        comment:
          "Vial of Summoning: https://www.pathofexile.com/trade/search/Metamorph/mZprJJH6",
      },
      {
        name: "Coward's Legacy",
        base: ["Coward's Legacy"],
        compare: ["Coward's Chains"],
        comment:
          "Vial of Consequence: https://www.pathofexile.com/trade/search/Metamorph/REManrf7",
      },
      {
        name: "Fate of the Vaal",
        base: ["Fate of the Vaal"],
        compare: ["Story of the Vaal"],
        comment:
          "Vial of Fate: https://www.pathofexile.com/trade/search/Metamorph/ak4Q2pte",
      },
      {
        name: "Omeyocan",
        base: ["Omeyocan"],
        compare: ["Dance of the Offered"],
        comment:
          "Vial of the Ritual: https://www.pathofexile.com/trade/search/Metamorph/9d9Wk4uK",
      },
      {
        name: "Zerphi's Heart",
        base: ["Zerphi's Heart"],
        compare: ["Sacrificial Heart"],
        comment:
          "Vial of Sacrifice: https://www.pathofexile.com/trade/search/Metamorph/pY25JWi0",
      },
      {
        name: "Soul Ripper",
        base: ["Soul Ripper"],
        compare: ["Soul Catcher"],
        comment:
          "Vial of the Ghost: https://www.pathofexile.com/trade/search/Metamorph/rGdy0gHQ",
      },
      {
        name: "Transcendent Flesh",
        base: ["Transcendent Flesh"],
        compare: ["Tempered Flesh"],
        comment:
          "Vial of Transcendence: https://www.pathofexile.com/trade/search/Metamorph/Q34bbRuw",
      },
      {
        name: "Transcendent Mind",
        base: ["Transcendent Mind"],
        compare: ["Tempered Mind"],
        comment:
          "Vial of Transcendence: https://www.pathofexile.com/trade/search/Metamorph/Q34bbRuw",
      },
      {
        name: "Transcendent Spirit",
        base: ["Transcendent Spirit"],
        compare: ["Tempered Spirit"],
        comment:
          "Vial of Transcendence: https://www.pathofexile.com/trade/search/Metamorph/Q34bbRuw",
      },
    ],
  };
};
