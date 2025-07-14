var app = (function () {
  var artist = "Etrian Odyssey";
  var currentIndex = 0;

  let removeGames = [];
  if (localStorage.getItem("removeGames")) {
    removeGames = JSON.parse(localStorage.getItem("removeGames"));
  }
  // Set to [] if you don't want to use the tag system
  const allTags = ["Battle", "City", "Dungeon", "Event"];
  let removeTags = [];
  if (localStorage.getItem("removeTags")) {
    removeTags = JSON.parse(localStorage.getItem("removeTags"));
  }

  // You can remove the attributes "tags" if you set allTags to []
  var musicNameList = [
    //// Etrian Odyssey 1
    // https://vgmdb.net/album/4418
    {
      id: 0,
      name: "The Tale Unfolds [Opening] - Etrian Odyssey 1",
      tags: ["Event"],
    },
    {
      id: 1,
      name: "Cityscape: Thy Name Has Been Etched in the Hundredth Volume! [Explorers Guild] - Etrian Odyssey 1",
      tags: ["City"],
    },
    {
      id: 2,
      name: "Labyrinth I: Emerald Grove [1st Stratum Dungeon 1F~5F] - Etrian Odyssey 1",
      tags: ["Dungeon"],
    },
    {
      id: 3,
      name: "Strife: First Strike [Normal Battle: 1st Part] - Etrian Odyssey 1",
      tags: ["Battle"],
    },
    {
      id: 4,
      name: "Labyrinth II: Primitive Jungle [2nd Stratum Dungeon 6F~10F] - Etrian Odyssey 1",
      tags: ["Dungeon"],
    },
    {
      id: 5,
      name: "Cityscape: Roadside Trees Outside the Window [Etrian Square: Day-1] - Etrian Odyssey 1",
      tags: ["City"],
    },
    {
      id: 6,
      name: "Battlefield: A Storm Ahead [FOE Battle] - Etrian Odyssey 1",
      tags: ["Battle"],
    },
    {
      id: 7,
      name: "Cityscape: Lounge with Talks of Tomorrow [Etrian Square: Night] - Etrian Odyssey 1",
      tags: ["City"],
    },
    {
      id: 8,
      name: "Labyrinth III: Azure Rainforest [3rd Stratum Dungeon 11F~15F] - Etrian Odyssey 1",
      tags: ["Dungeon"],
    },
    {
      id: 9,
      name: "Scene: Red and Black [Event: Fear] - Etrian Odyssey 1",
      tags: ["Event"],
    },
    {
      id: 10,
      name: "Battlefield: Drenched in Red [Boss Battle] - Etrian Odyssey 1",
      tags: ["Battle"],
    },
    {
      id: 11,
      name: "Cityscape: Feast with Reverence [Radha Hall] - Etrian Odyssey 1",
      tags: ["City"],
    },
    {
      id: 12,
      name: "Labyrinth IV: Sandy Barrens [4th Stratum Dungeon 16F~20F] - Etrian Odyssey 1",
      tags: ["Dungeon"],
    },
    {
      id: 13,
      name: "Strife: Kill or be Killed [Normal Battle: 2nd Part] - Etrian Odyssey 1",
      tags: ["Battle"],
    },
    {
      id: 14,
      name: "Labyrinth V: Lost Shinjuku [5th Stratum Dungeon 21F~25F] - Etrian Odyssey 1",
      tags: ["Dungeon"],
    },
    {
      id: 15,
      name: "Battlefield: The Two Towers [Ren & Tlachtga Battle] - Etrian Odyssey 1",
      tags: ["Battle"],
    },
    {
      id: 16,
      name: "Scene: Blue and White [Event: Truth] - Etrian Odyssey 1",
      tags: ["Event"],
    },
    {
      id: 17,
      name: "Battlefield: The Throne of Heaven and Earth [Last Boss Battle] - Etrian Odyssey 1",
      tags: ["Battle"],
    },
    {
      id: 18,
      name: "Heroes are Born, And the Story Continues [Ending 1] - Etrian Odyssey 1",
      tags: ["Event"],
    },
    {
      id: 19,
      name: "Cityscape: The Bird Atop the Gable [Etrian Square: Day-2] - Etrian Odyssey 1",
      tags: ["City"],
    },
    {
      id: 20,
      name: "Labyrinth VI: Claret Hollows [6th Stratum Dungeon 26F~30F] - Etrian Odyssey 1",
      tags: ["Dungeon"],
    },
    {
      id: 21,
      name: "Strife: Rapture [Normal Battle: Last Stratum] - Etrian Odyssey 1",
      tags: ["Battle"],
    },
    {
      id: 22,
      name: "Battlefield: To Fall Is Fair [Secret Boss Battle] - Etrian Odyssey 1",
      tags: ["Battle"],
    },
    {
      id: 23,
      name: "400: Your Adventures End [Ending 2] - Etrian Odyssey 1",
      tags: ["Event"],
    },
    {
      id: 24,
      name: "Until a New Dawn [Game Over] - Etrian Odyssey 1",
      tags: ["Event"],
    },

    //// Etrian Odyssey 2: Heroes of Lagaard
    // https://vgmdb.net/album/6949
    {
      id: 25,
      name: "Now Begin Your Adventure! [Opening] - Etrian Odyssey 2: Heroes of Lagaard",
      tags: ["Event"],
    },
    {
      id: 26,
      name: "Cityscape: The Ones Engraved in Legends [Explorers Guild] - Etrian Odyssey 2: Heroes of Lagaard",
      tags: ["City"],
    },
    {
      id: 27,
      name: "Labyrinth I: Ancient Forest [1st Stratum Dungeon 1F~5F] - Etrian Odyssey 2: Heroes of Lagaard",
      tags: ["Dungeon"],
    },
    {
      id: 28,
      name: "Battlefield: First Battle [Normal Battle: 1st Part] - Etrian Odyssey 2: Heroes of Lagaard",
      tags: ["Battle"],
    },
    {
      id: 29,
      name: "Cityscape: Land Spread Up North [Central City: Day] - Etrian Odyssey 2: Heroes of Lagaard",
      tags: ["City"],
    },
    {
      id: 30,
      name: "Labyrinth II: Auburn Thicket [2nd Stratum Dungeon 6F~10F] - Etrian Odyssey 2: Heroes of Lagaard",
      tags: ["Dungeon"],
    },
    {
      id: 31,
      name: "Scene: Blood and Darkness [Event: Fear] - Etrian Odyssey 2: Heroes of Lagaard",
      tags: ["Event"],
    },
    {
      id: 32,
      name: "Battlefield: Gust of Death [FOE Battle] - Etrian Odyssey 2: Heroes of Lagaard",
      tags: ["Battle"],
    },
    {
      id: 33,
      name: "Cityscape: The Wind Shall Summon Heroes [Central City: Night] - Etrian Odyssey 2: Heroes of Lagaard",
      tags: ["City"],
    },
    {
      id: 34,
      name: "Labyrinth III: Frozen Grounds [3rd Stratum Dungeon 11F~15F] - Etrian Odyssey 2: Heroes of Lagaard",
      tags: ["Dungeon"],
    },
    {
      id: 35,
      name: "Battlefield: Guardian of the Doleful Glacier [Artelinde & Wilhelm Battle] - Etrian Odyssey 2: Heroes of Lagaard",
      tags: ["Battle"],
    },
    {
      id: 36,
      name: "Battlefield: Scarlet Rain [Boss Battle] - Etrian Odyssey 2: Heroes of Lagaard",
      tags: ["Battle"],
    },
    {
      id: 37,
      name: "Cityscape: The Beautifully Noble Land [Duke's Palace] - Etrian Odyssey 2: Heroes of Lagaard",
      tags: ["City"],
    },
    {
      id: 38,
      name: "Labyrinth IV: Petal Bridge [4th Stratum Dungeon 16F~20F] - Etrian Odyssey 2: Heroes of Lagaard",
      tags: ["Dungeon"],
    },
    {
      id: 39,
      name: "Scene: Wings and Cherry Blossoms [Event: Ones with Wings] - Etrian Odyssey 2: Heroes of Lagaard",
      tags: ["Event"],
    },
    {
      id: 40,
      name: "Battlefield: Resonating Sounds of Battle [Normal Battle: 2nd Part] - Etrian Odyssey 2: Heroes of Lagaard",
      tags: ["Battle"],
    },
    {
      id: 41,
      name: "Labyrinth V: Heavenly Keep [5th Stratum Dungeon 21F~25F] - Etrian Odyssey 2: Heroes of Lagaard",
      tags: ["Dungeon"],
    },
    {
      id: 42,
      name: "Scene: Viridian and Silver [Event: Truth] - Etrian Odyssey 2: Heroes of Lagaard",
      tags: ["Event"],
    },
    {
      id: 43,
      name: "Battlefield: Final Battle [Last Boss Battle: Part 1] - Etrian Odyssey 2: Heroes of Lagaard",
      tags: ["Battle"],
    },
    {
      id: 44,
      name: "Battlefield: Overlord of Heavens [Last Boss Battle: Part 2] - Etrian Odyssey 2: Heroes of Lagaard",
      tags: ["Battle"],
    },
    {
      id: 45,
      name: "Return of the Heroes [Ending 1] - Etrian Odyssey 2: Heroes of Lagaard",
      tags: ["Event"],
    },
    {
      id: 46,
      name: "Labyrinth VI: Forbidden Wood [6th Stratum Dungeon 26F~30F] - Etrian Odyssey 2: Heroes of Lagaard",
      tags: ["Dungeon"],
    },
    {
      id: 47,
      name: "Battlefield: Shudder [Normal Battle: Last Stratum] - Etrian Odyssey 2: Heroes of Lagaard",
      tags: ["Battle"],
    },
    {
      id: 48,
      name: "14: Until the Day You Rise Again [Game Over] - Etrian Odyssey 2: Heroes of Lagaard",
      tags: ["Event"],
    },

    //// Etrian Odyssey 3: The Drowned City
    // https://vgmdb.net/album/17639
    {
      id: 49,
      name: "The Curtain Rises on an Adventure [Opening] - Etrian Odyssey 3: The Drowned City",
      tags: ["Event"],
    },
    {
      id: 50,
      name: "Cityscape: Engrave Thy Name and Go Forth [Sea City Facility: Explorers Guild] - Etrian Odyssey 3: The Drowned City",
      tags: ["City"],
    },
    {
      id: 51,
      name: "Labyrinth I: Waterfall Wood [1st Stratum Dungeon 1F~4F] - Etrian Odyssey 3: The Drowned City",
      tags: ["Dungeon"],
    },
    {
      id: 52,
      name: "Battlefield: The First Battle [Normal Battle: 1st Part (B01~08F)] - Etrian Odyssey 3: The Drowned City",
      tags: ["Battle"],
    },
    {
      id: 53,
      name: "Cityscape: Between the Azure Sky and Sea [Sea City Facility: Armoroad Plaza (Day)] - Etrian Odyssey 3: The Drowned City",
      tags: ["City"],
    },
    {
      id: 54,
      name: "Labyrinth II: Undersea Grotto [2nd Stratum Dungeon 5F~8F] - Etrian Odyssey 3: The Drowned City",
      tags: ["Dungeon"],
    },
    {
      id: 55,
      name: "Scene: Unknown Threat [Event: Tension] - Etrian Odyssey 3: The Drowned City",
      tags: ["Event"],
    },
    {
      id: 56,
      name: "Battlefield: Is this Blood Thine or the Enemy's? [FOE Battle] - Etrian Odyssey 3: The Drowned City",
      tags: ["Battle"],
    },
    {
      id: 57,
      name: "Cityscape: Sunlight on the Water [Sea City Facility: Inver Port] - Etrian Odyssey 3: The Drowned City",
      tags: ["City"],
    },
    {
      id: 58,
      name: "Seascape: The Great Voyage [Sailing] - Etrian Odyssey 3: The Drowned City",
      tags: ["Dungeon"],
    },
    {
      id: 59,
      name: "Tumult: Crest of a Violent Wave [Great Voyage Quest Boss Battle] - Etrian Odyssey 3: The Drowned City",
      tags: ["Battle"],
    },
    {
      id: 60,
      name: "Cityscape: The Dusk Clad Ocean City [Sea City Facility: Armoroad Plaza (Night)] - Etrian Odyssey 3: The Drowned City",
      tags: ["City"],
    },
    {
      id: 61,
      name: "Labyrinth III: Molten Caves [3rd Stratum Dungeon 9F~12F] - Etrian Odyssey 3: The Drowned City",
      tags: ["Dungeon"],
    },
    {
      id: 62,
      name: "Tumult: Raise Thy Sword in Pride [Boss Battle] - Etrian Odyssey 3: The Drowned City",
      tags: ["Battle"],
    },
    {
      id: 63,
      name: "Cityscape: The Deep Blue Ocean City [Deep City Facility: Deep City Plaza (Day)] - Etrian Odyssey 3: The Drowned City",
      tags: ["City"],
    },
    {
      id: 64,
      name: "Labyrinth IV: Abyssal Shrine [4th Stratum Dungeon 16F~20F] - Etrian Odyssey 3: The Drowned City",
      tags: ["Dungeon"],
    },
    {
      id: 65,
      name: "Cityscape: The Overwatching Tree [Deep City Facility: Deep City Plaza (Night)] - Etrian Odyssey 3: The Drowned City",
      tags: ["City"],
    },
    {
      id: 66,
      name: "Battlefield: Those Who Fall [Normal Battle: 2nd Part (B09~25F)] - Etrian Odyssey 3: The Drowned City",
      tags: ["Battle"],
    },
    {
      id: 67,
      name: "Cityscape: One Hundred Years [Sea City Establishment: Senatus] - Etrian Odyssey 3: The Drowned City",
      tags: ["City"],
    },
    {
      id: 68,
      name: "Labyrinth V: Porcelain Forest [5th Stratum Dungeon 17F~20F] - Etrian Odyssey 3: The Drowned City",
      tags: ["Dungeon"],
    },
    {
      id: 69,
      name: "Tumult: To Fall Is Fair [Secret Boss Battle] - Etrian Odyssey 3: The Drowned City",
      tags: ["Battle"],
    },
    {
      id: 70,
      name: "Scene: Cold Justice [Event: Truth] - Etrian Odyssey 3: The Drowned City",
      tags: ["Event"],
    },
    {
      id: 71,
      name: "Tumult: Each Their Own Justice [Last Boss Battle] - Etrian Odyssey 3: The Drowned City",
      tags: ["Battle"],
    },
    {
      id: 72,
      name: "Cityscape: The King Lost in Time [Deep City Facility: Celestial Palace] - Etrian Odyssey 3: The Drowned City",
      tags: ["City"],
    },
    {
      id: 73,
      name: "Labyrinth VI: Cyclopean Haunt [6th Stratum Dungeon 21F~25F] - Etrian Odyssey 3: The Drowned City",
      tags: ["Dungeon"],
    },
    {
      id: 74,
      name: "Tumult: Call That Dreadful Name [Lowest Last Boss Battle] - Etrian Odyssey 3: The Drowned City",
      tags: ["Battle"],
    },
    {
      id: 75,
      name: "The End of Your Adventure [Ending] - Etrian Odyssey 3: The Drowned City",
      tags: ["Event"],
    },
    // Same music as 14: Until the Day You Rise Again [Game Over] - Etrian Odyssey 2: Heroes of Lagaard
    // {
    //   id: 76,
    //   name: "Until the Next Adventure [Game Over] - Etrian Odyssey 3: The Drowned City",
    //   tags: ["Event"],
    // },

    //// Etrian Odyssey 4: Legends of the Titan
    // https://vgmdb.net/album/33201
    {
      id: 76,
      name: "Adventures Across the Sky [Title Screen] - Etrian Odyssey 4: Legends of the Titan",
      tags: ["Event"],
    },
    {
      id: 77,
      name: "Cityscape: Engraved Are Names That Echo to the Morrow [Explorers Guild] - Etrian Odyssey 4: Legends of the Titan",
      tags: ["City"],
    },
    {
      id: 78,
      name: "Landscape I: Windy Plains [1st Stratum Skies] - Etrian Odyssey 4: Legends of the Titan",
      tags: ["Dungeon"],
    },
    {
      id: 79,
      name: "Labyrinth I: Lush Woodlands [1st Stratum Dungeon] - Etrian Odyssey 4: Legends of the Titan",
      tags: ["Dungeon"],
    },
    {
      id: 80,
      name: "Battlefield: Gale Force [Normal Battle: 1st Part] - Etrian Odyssey 4: Legends of the Titan",
      tags: ["Battle"],
    },
    {
      id: 81,
      name: "Tumult: Crimson Blaze, Dancing Blades [Boss Battle] - Etrian Odyssey 4: Legends of the Titan",
      tags: ["Battle"],
    },
    {
      id: 82,
      name: "Cityscape: The City Embraced by a Teal Sky [Town Plaza (Day)/Inn/Trading Post] - Etrian Odyssey 4: Legends of the Titan",
      tags: ["City"],
    },
    {
      id: 83,
      name: "Landscape II: Scarlet Pillars [2nd Stratum Skies] - Etrian Odyssey 4: Legends of the Titan",
      tags: ["Dungeon"],
    },
    {
      id: 84,
      name: "Labyrinth II: Misty Ravine [2nd Stratum Dungeon] - Etrian Odyssey 4: Legends of the Titan",
      tags: ["Dungeon"],
    },
    {
      id: 85,
      name: "Scene: Unexpected Meeting [Foreigner Theme] - Etrian Odyssey 4: Legends of the Titan",
      tags: ["Event"],
    },
    {
      id: 86,
      name: "Landscape III: Sacred Mountains [3rd Stratum Skies] - Etrian Odyssey 4: Legends of the Titan",
      tags: ["Dungeon"],
    },
    {
      id: 87,
      name: "Labyrinth III: Golden Lair [3rd Stratum Dungeon] - Etrian Odyssey 4: Legends of the Titan",
      tags: ["Dungeon"],
    },
    {
      id: 88,
      name: "Battlefield: Brush with Death [FOE Battle] - Etrian Odyssey 4: Legends of the Titan",
      tags: ["Battle"],
    },
    {
      id: 89,
      name: "Cityscape: Lukewarm Peace in the Shade [Town Plaza (Night)/Bar] - Etrian Odyssey 4: Legends of the Titan",
      tags: ["City"],
    },
    {
      id: 90,
      name: "Landscape IV: Cloudy Stronghold [4th Stratum Skies] - Etrian Odyssey 4: Legends of the Titan",
      tags: ["Dungeon"],
    },
    {
      id: 91,
      name: "Labyrinth IV: Echoing Library [4th Stratum Dungeon] - Etrian Odyssey 4: Legends of the Titan",
      tags: ["Dungeon"],
    },
    {
      id: 92,
      name: "Battlefield: One's Faith in the Staff [Normal Battle: 2nd Part] - Etrian Odyssey 4: Legends of the Titan",
      tags: ["Battle"],
    },
    {
      id: 93,
      name: "Maze IV: Ruins Littered with Memories [4th Sub Dungeon] - Etrian Odyssey 4: Legends of the Titan",
      tags: ["Dungeon"],
    },
    {
      id: 94,
      name: "Maze III: Cave Excited by a New Encounter [3rd Sub Dungeon] - Etrian Odyssey 4: Legends of the Titan",
      tags: ["Dungeon"],
    },
    {
      id: 95,
      name: "Maze II: Forest Confounded by an Unknown Encounter [2nd Sub Dungeon] - Etrian Odyssey 4: Legends of the Titan",
      tags: ["Dungeon"],
    },
    {
      id: 96,
      name: "Maze I: Path Worn by Explorers [1st Sub Dungeon] - Etrian Odyssey 4: Legends of the Titan",
      tags: ["Dungeon"],
    },
    {
      id: 97,
      name: "Scene: Wind in the Silence [Event: Truth] - Etrian Odyssey 4: Legends of the Titan",
      tags: ["Event"],
    },
    {
      id: 98,
      name: "Labyrinth V: Forgotten Capital [5th Stratum Dungeon] - Etrian Odyssey 4: Legends of the Titan",
      tags: ["Dungeon"],
    },
    {
      id: 99,
      name: "Tumult: Inheritor of the Legend [Last Boss Battle] - Etrian Odyssey 4: Legends of the Titan",
      tags: ["Battle"],
    },
    {
      id: 100,
      name: "The Ceaseless Melody [Ending (Staff Roll)] - Etrian Odyssey 4: Legends of the Titan",
      tags: ["Event"],
    },
    {
      id: 101,
      name: "Scene: The Ancient Pact [Foreigner Theme B] - Etrian Odyssey 4: Legends of the Titan",
      tags: ["Event"],
    },
    {
      id: 102,
      name: "Labyrinth VI: Hall of Darkness [6th Stratum Dungeon] - Etrian Odyssey 4: Legends of the Titan",
      tags: ["Dungeon"],
    },
    {
      id: 103,
      name: "Battlefield: Eyes Wide Open [Normal Battle: Last Stratum] - Etrian Odyssey 4: Legends of the Titan",
      tags: ["Battle"],
    },
    {
      id: 104,
      name: "Tumult: Beyond the Scorching Heat [Skies FOE/Hunting Quest/Event Boss] - Etrian Odyssey 4: Legends of the Titan",
      tags: ["Battle"],
    },
    {
      id: 105,
      name: "Tumult: To Fall Is Fair [Dragons Boss Battle] - Etrian Odyssey 4: Legends of the Titan",
      tags: ["Battle"],
    },
    {
      id: 106,
      name: "The End of Your Adventure [Ending 2] - Etrian Odyssey 4: Legends of the Titan",
      tags: ["Event"],
    },

    //// Etrian Odyssey Untold: The Millennium Girl
    // https://vgmdb.net/album/39537
    {
      id: 107,
      name: "The Tale Unfolds [Opening] - Etrian Odyssey Untold: The Millennium Girl",
      tags: ["Event"],
    },
    {
      id: 108,
      name: "Cityscape: Thy Name Has Been Etched in the Hundredth Volume! [Explorers Guild] - Etrian Odyssey Untold: The Millennium Girl",
      tags: ["City"],
    },
    {
      id: 109,
      name: "Labyrinth I: Emerald Grove [1st Stratum Dungeon 1F~5F] - Etrian Odyssey Untold: The Millennium Girl",
      tags: ["Dungeon"],
    },
    {
      id: 110,
      name: "Strife: First Strike [Normal Battle: 1st Part] - Etrian Odyssey Untold: The Millennium Girl",
      tags: ["Battle"],
    },
    {
      id: 111,
      name: "Labyrinth II: Primitive Jungle [2nd Stratum Dungeon 6F~10F] - Etrian Odyssey Untold: The Millennium Girl",
      tags: ["Dungeon"],
    },
    {
      id: 112,
      name: "Cityscape: Roadside Trees Outside the Window [Etria Plaza (Day)] - Etrian Odyssey Untold: The Millennium Girl",
      tags: ["City"],
    },
    {
      id: 113,
      name: "Battlefield: A Storm Ahead [FOE Battle] - Etrian Odyssey Untold: The Millennium Girl",
      tags: ["Battle"],
    },
    {
      id: 114,
      name: "Cityscape: Lounge with Talks of Tomorrow [Etria Plaza (Night)] - Etrian Odyssey Untold: The Millennium Girl",
      tags: ["City"],
    },
    {
      id: 115,
      name: "Labyrinth III: Azure Rainforest [3rd Stratum Dungeon 11F~15F] - Etrian Odyssey Untold: The Millennium Girl",
      tags: ["Dungeon"],
    },
    {
      id: 116,
      name: "Scene: Red and Black [Event: Fear] - Etrian Odyssey Untold: The Millennium Girl",
      tags: ["Event"],
    },
    {
      id: 117,
      name: "Battlefield: Drenched in Red [Boss Battle] - Etrian Odyssey Untold: The Millennium Girl",
      tags: ["Battle"],
    },
    {
      id: 118,
      name: "Cityscape: Feast with Reverence [Radha Administration Hall] - Etrian Odyssey Untold: The Millennium Girl",
      tags: ["City"],
    },
    {
      id: 119,
      name: "Labyrinth IV: Sandy Barrens [4th Stratum Dungeon 16F~20F] - Etrian Odyssey Untold: The Millennium Girl",
      tags: ["Dungeon"],
    },
    {
      id: 120,
      name: "Strife: Kill or be Killed [Normal Battle: 2nd Part] - Etrian Odyssey Untold: The Millennium Girl",
      tags: ["Battle"],
    },
    {
      id: 121,
      name: "Labyrinth V: Lost Shinjuku [5th Stratum Dungeon 21F~25F] - Etrian Odyssey Untold: The Millennium Girl",
      tags: ["Dungeon"],
    },
    {
      id: 122,
      name: "Battlefield: The Two Towers [Ren & Tlachtga Battle] - Etrian Odyssey Untold: The Millennium Girl",
      tags: ["Battle"],
    },
    {
      id: 123,
      name: "Scene: Blue and White [Event: Truth] - Etrian Odyssey Untold: The Millennium Girl",
      tags: ["Event"],
    },
    {
      id: 124,
      name: "Battlefield: The Throne of Heaven and Earth [Last Boss Battle] - Etrian Odyssey Untold: The Millennium Girl",
      tags: ["Battle"],
    },
    {
      id: 125,
      name: "Heroes are Born, And the Story Continues [Ending 1] - Etrian Odyssey Untold: The Millennium Girl",
      tags: ["Event"],
    },
    {
      id: 126,
      name: "Cityscape: The Bird Atop the Gable [Etria Plaza (Day 2)] - Etrian Odyssey Untold: The Millennium Girl",
      tags: ["City"],
    },
    {
      id: 127,
      name: "Labyrinth VI: Claret Hollows [6th Stratum Dungeon 26F~30F] - Etrian Odyssey Untold: The Millennium Girl",
      tags: ["Dungeon"],
    },
    {
      id: 128,
      name: "Strife: Rapture [Normal Battle: Last Stratum] - Etrian Odyssey Untold: The Millennium Girl",
      tags: ["Battle"],
    },
    {
      id: 129,
      name: "Battlefield: To Fall Is Fair [Secret Boss Battle] - Etrian Odyssey Untold: The Millennium Girl",
      tags: ["Battle"],
    },
    {
      id: 130,
      name: "400: Your Adventures End [Ending 2] - Etrian Odyssey Untold: The Millennium Girl",
      tags: ["Event"],
    },
    {
      id: 131,
      name: "the beginning of the end [Town Opening Animation] - Etrian Odyssey Untold: The Millennium Girl",
      tags: ["Event"],
    },
    {
      id: 132,
      name: "Cityscape: Prep for Tomorrow [Guild House] - Etrian Odyssey Untold: The Millennium Girl",
      tags: ["City"],
    },
    {
      id: 133,
      name: "Labyrinth: Gladsheim [New Dungeon: Gladsheim 1F~4F] - Etrian Odyssey Untold: The Millennium Girl",
      tags: ["Dungeon"],
    },
    {
      id: 134,
      name: "Battlefield: Trigger of Conflict [Normal Battle: Gladsheim] - Etrian Odyssey Untold: The Millennium Girl",
      tags: ["Battle"],
    },
    {
      id: 135,
      name: "Reminiscence: A Millennium of Solitude [Event: Thoughts] - Etrian Odyssey Untold: The Millennium Girl",
      tags: ["Event"],
    },
    {
      id: 136,
      name: "Tumult: A Clash of Crimson [Boss Battle: Gladsheim] - Etrian Odyssey Untold: The Millennium Girl",
      tags: ["Battle"],
    },
    {
      id: 137,
      name: "Melancholy: Each Their Own Memories [Event: Sadness] - Etrian Odyssey Untold: The Millennium Girl",
      tags: ["Event"],
    },
    {
      id: 138,
      name: "Labyrinth: Gladsheim: The Pulse of Time [New Dungeon: Gladsheim 5F] - Etrian Odyssey Untold: The Millennium Girl",
      tags: ["Dungeon"],
    },
    {
      id: 139,
      name: "Final Battle: The Future of the World [Last Boss Battle: Gladsheim] - Etrian Odyssey Untold: The Millennium Girl",
      tags: ["Battle"],
    },
    {
      id: 140,
      name: "The Battlefield That Never Sleeps [Lowest Last Boss Battle] - Etrian Odyssey Untold: The Millennium Girl",
      tags: ["Battle"],
    },

    //// Etrian Odyssey 2 Untold: The Fafnir Knight
    // https://vgmdb.net/album/49255
    {
      id: 141,
      name: "Now Begin Your Adventure! [Opening] - Etrian Odyssey 2 Untold: The Fafnir Knight",
      tags: ["Event"],
    },
    {
      id: 142,
      name: "Cityscape: The Ones Engraved in Legends [Explorers Guild] - Etrian Odyssey 2 Untold: The Fafnir Knight",
      tags: ["City"],
    },
    {
      id: 143,
      name: "Labyrinth I: Ancient Forest [1st Stratum Dungeon 1F~5F] - Etrian Odyssey 2 Untold: The Fafnir Knight",
      tags: ["Dungeon"],
    },
    {
      id: 144,
      name: "Battlefield: The First Battle [Normal Battle: 1st Part] - Etrian Odyssey 2 Untold: The Fafnir Knight",
      tags: ["Battle"],
    },
    {
      id: 145,
      name: "Cityscape: Land Spread Up North [Hi-Lagaard Plaza (Day)] - Etrian Odyssey 2 Untold: The Fafnir Knight",
      tags: ["City"],
    },
    {
      id: 146,
      name: "Labyrinth II: Auburn Thicket [2nd Stratum Dungeon 6F~10F] - Etrian Odyssey 2 Untold: The Fafnir Knight",
      tags: ["Dungeon"],
    },
    {
      id: 147,
      name: "Scene: Blood and Darkness [Event: Fear] - Etrian Odyssey 2 Untold: The Fafnir Knight",
      tags: ["Event"],
    },
    {
      id: 148,
      name: "Battlefield: Gust of Death [FOE Battle] - Etrian Odyssey 2 Untold: The Fafnir Knight",
      tags: ["Battle"],
    },
    {
      id: 149,
      name: "Cityscape: The Wind Shall Summon Heroes [Hi-Lagaard Plaza (Night)] - Etrian Odyssey 2 Untold: The Fafnir Knight",
      tags: ["City"],
    },
    {
      id: 150,
      name: "Labyrinth III: Frozen Grounds [3rd Stratum Dungeon 11F~15F] - Etrian Odyssey 2 Untold: The Fafnir Knight",
      tags: ["Dungeon"],
    },
    {
      id: 151,
      name: "Battlefield: Guardian of the Doleful Glacier [Artelinde & Wilhelm Battle] - Etrian Odyssey 2 Untold: The Fafnir Knight",
      tags: ["Battle"],
    },
    {
      id: 152,
      name: "Battlefield: Scarlet Rain [Boss Battle] - Etrian Odyssey 2 Untold: The Fafnir Knight",
      tags: ["Battle"],
    },
    {
      id: 153,
      name: "Cityscape: The Beautifully Noble Land [Lagaard Archduke Palace] - Etrian Odyssey 2 Untold: The Fafnir Knight",
      tags: ["City"],
    },
    {
      id: 154,
      name: "Labyrinth IV: Petal Bridge [4th Stratum Dungeon 16F~20F] - Etrian Odyssey 2 Untold: The Fafnir Knight",
      tags: ["Dungeon"],
    },
    {
      id: 155,
      name: "Scene: Wings and Cherry Blossoms [Event: Winged Man] - Etrian Odyssey 2 Untold: The Fafnir Knight",
      tags: ["Event"],
    },
    {
      id: 156,
      name: "Battlefield: Resonating Sounds of Battle [Normal Battle: 2nd Part] - Etrian Odyssey 2 Untold: The Fafnir Knight",
      tags: ["Battle"],
    },
    {
      id: 157,
      name: "Labyrinth V: Heavenly Keep [5th Stratum Dungeon 21F~25F] - Etrian Odyssey 2 Untold: The Fafnir Knight",
      tags: ["Dungeon"],
    },
    {
      id: 158,
      name: "Scene: Viridian and Silver [Event: Truth] - Etrian Odyssey 2 Untold: The Fafnir Knight",
      tags: ["Event"],
    },
    {
      id: 159,
      name: "Battlefield: The Final Battle [Last Boss Battle: Part 1] - Etrian Odyssey 2 Untold: The Fafnir Knight",
      tags: ["Battle"],
    },
    {
      id: 160,
      name: "Battlefield: Overlord of Heavens [Last Boss Battle: Part 2] - Etrian Odyssey 2 Untold: The Fafnir Knight",
      tags: ["Battle"],
    },
    {
      id: 161,
      name: "Return of the Heroes [Ending 1] - Etrian Odyssey 2 Untold: The Fafnir Knight",
      tags: ["Event"],
    },
    {
      id: 162,
      name: "Labyrinth VI: Forbidden Wood [6th Stratum Dungeon 26F~30F] - Etrian Odyssey 2 Untold: The Fafnir Knight",
      tags: ["Dungeon"],
    },
    {
      id: 163,
      name: "Battlefield: Shudder [Normal Battle: Last Stratum] - Etrian Odyssey 2 Untold: The Fafnir Knight",
      tags: ["Battle"],
    },
    {
      id: 164,
      name: "Battlefield: To Fall Is Fair [Secret Boss Battle] - Etrian Odyssey 2 Untold: The Fafnir Knight",
      tags: ["Battle"],
    },
    {
      id: 165,
      name: "Reaching out for our future [Opening Theme Song] - Etrian Odyssey 2 Untold: The Fafnir Knight",
      tags: ["Event"],
    },
    {
      id: 166,
      name: "Cityscape: Peaceful Dining [Guild House] - Etrian Odyssey 2 Untold: The Fafnir Knight",
      tags: ["City"],
    },
    {
      id: 167,
      name: "Labyrinth: Ginnungagap [New Dungeon: Ginnungagap 1F~4F] - Etrian Odyssey 2 Untold: The Fafnir Knight",
      tags: ["Dungeon"],
    },
    {
      id: 168,
      name: "Battlefield: Raise Thy Swords [Normal Battle: Ginnungagap] - Etrian Odyssey 2 Untold: The Fafnir Knight",
      tags: ["Battle"],
    },
    {
      id: 169,
      name: "Grief: The Ends of Emotion [Event: Protector] - Etrian Odyssey 2 Untold: The Fafnir Knight",
      tags: ["Event"],
    },
    {
      id: 170,
      name: "Tumult: Shadow of Death [Boss Battle: Ginnungagap] - Etrian Odyssey 2 Untold: The Fafnir Knight",
      tags: ["Battle"],
    },
    {
      id: 171,
      name: "Melancholy: Along with the Wind [Event: Sadness] - Etrian Odyssey 2 Untold: The Fafnir Knight",
      tags: ["Event"],
    },
    {
      id: 172,
      name: "Labyrinth: The Deep Ends of Ginnungagap [New Dungeon: Ginnungagap 5F] - Etrian Odyssey 2 Untold: The Fafnir Knight",
      tags: ["Dungeon"],
    },
    {
      id: 173,
      name: "Seize the Future [Event: Theme] - Etrian Odyssey 2 Untold: The Fafnir Knight",
      tags: ["Event"],
    },
    {
      id: 174,
      name: "Tumult: Sounds of War Deep Below [Final Boss Battle: Ginnungagap] - Etrian Odyssey 2 Untold: The Fafnir Knight",
      tags: ["Battle"],
    },
    {
      id: 175,
      name: "Desperate Battle: Risking Our Lives [Transformation BGM] - Etrian Odyssey 2 Untold: The Fafnir Knight",
      tags: ["Battle"],
    },

    //// Etrian Mystery Dungeon
    // https://vgmdb.net/album/51160
    {
      id: 176,
      name: "Beginning of a New Adventure [Title Screen] - Etrian Mystery Dungeon",
      tags: ["Event"],
    },
    {
      id: 177,
      name: "Engrave Thy Name [Explorers Guild] - Etrian Mystery Dungeon",
      tags: ["City"],
    },
    {
      id: 178,
      name: "Thy Name Has Been Etched in the Hundredth Volume! [1st Labyrinth: Mysterious Labyrinth] - Etrian Mystery Dungeon",
      tags: ["Dungeon"],
    },
    {
      id: 179,
      name: "Town of Aslarga [Town] - Etrian Mystery Dungeon",
      tags: ["City"],
    },
    {
      id: 180,
      name: "Auburn Thicket [2nd Labyrinth: Emerald Copse] - Etrian Mystery Dungeon",
      tags: ["Dungeon"],
    },
    {
      id: 181,
      name: "Waterfall Wood [3rd Labyrinth: Pristine Stream] - Etrian Mystery Dungeon",
      tags: ["Dungeon"],
    },
    {
      id: 182,
      name: "Memories of Days Foregone [Event: Painful Memories] - Etrian Mystery Dungeon",
      tags: ["Event"],
    },
    {
      id: 183,
      name: "Song of Nomads [Event: Mystery Solving] - Etrian Mystery Dungeon",
      tags: ["Event"],
    },
    {
      id: 184,
      name: "A Storm Ahead [4th Labyrinth: Haunted Woods] - Etrian Mystery Dungeon",
      tags: ["Dungeon"],
    },
    {
      id: 185,
      name: "Raise Thy Sword in Pride [Boss Battle: 1st Part] - Etrian Mystery Dungeon",
      tags: ["Battle"],
    },
    {
      id: 186,
      name: "Waltz of the Red Lion [Labyrinth Shop] - Etrian Mystery Dungeon",
      tags: ["Dungeon"],
    },
    {
      id: 187,
      name: "Regain Thy Treasure, Fight for Thy Soul [Labyrinth Shop (Robbery)] - Etrian Mystery Dungeon",
      tags: ["Battle"],
    },
    {
      id: 188,
      name: "Is This Blood Thine or the Enemy's? [DOE Battle] - Etrian Mystery Dungeon",
      tags: ["Battle"],
    },
    {
      id: 189,
      name: "Drifting Suspicions [Event: Arising Anxiety] - Etrian Mystery Dungeon",
      tags: ["Event"],
    },
    {
      id: 190,
      name: "Sacred Mountains [5th Labyrinth: Crystalline Peak] - Etrian Mystery Dungeon",
      tags: ["Dungeon"],
    },
    {
      id: 191,
      name: "Darkness and Crimson [Event: Fear Leading to Despair] - Etrian Mystery Dungeon",
      tags: ["Event"],
    },
    {
      id: 192,
      name: "Brush with Death [Monster House] - Etrian Mystery Dungeon",
      tags: ["Battle"],
    },
    {
      id: 193,
      name: "Gust of Death [6th Labyrinth: Torrential Ravine] - Etrian Mystery Dungeon",
      tags: ["Dungeon"],
    },
    {
      id: 194,
      name: "Amber and Yggdrasil [Event: Amber] - Etrian Mystery Dungeon",
      tags: ["Event"],
    },
    {
      id: 195,
      name: "Beyond the Scorching Heat [7th Labyrinth: Muspelheim] - Etrian Mystery Dungeon",
      tags: ["Dungeon"],
    },
    {
      id: 196,
      name: "Each Their Own Justice [Last Boss Battle] - Etrian Mystery Dungeon",
      tags: ["Battle"],
    },
    {
      id: 197,
      name: "Your Adventures End [Ending 1] - Etrian Mystery Dungeon",
      tags: ["Event"],
    },
    {
      id: 198,
      name: "Porcelain Forest [8th Labyrinth: Forest of Gates] - Etrian Mystery Dungeon",
      tags: ["Dungeon"],
    },
    {
      id: 199,
      name: "Forbidden Wood [9th Labyrinth: Equinox Garden] - Etrian Mystery Dungeon",
      tags: ["Dungeon"],
    },
    {
      id: 200,
      name: "Petal Bridge [10th Labyrinth: Utopia] - Etrian Mystery Dungeon",
      tags: ["Dungeon"],
    },
    {
      id: 201,
      name: "One's Faith in the Staff [11th Labyrinth: Phantom Depths] - Etrian Mystery Dungeon",
      tags: ["Dungeon"],
    },
    {
      id: 202,
      name: "Crimson Blaze, Dancing Blades [Dragon's Cave: Thunderous Cave/Glacial Cave/Burning Cave] - Etrian Mystery Dungeon",
      tags: ["Dungeon"],
    },
    {
      id: 203,
      name: "To Fall Is Fair [Boss Battle: 2nd Part] - Etrian Mystery Dungeon",
      tags: ["Battle"],
    },
    {
      id: 204,
      name: "Shudder [12th Labyrinth: Champion's Hall] - Etrian Mystery Dungeon",
      tags: ["Dungeon"],
    },
    {
      id: 205,
      name: "City Remains [Mysterious Forest] - Etrian Mystery Dungeon",
      tags: ["Dungeon"],
    },
    {
      id: 206,
      name: "Call That Dreadful Name [Lowest Last Boss Battle] - Etrian Mystery Dungeon",
      tags: ["Battle"],
    },
    {
      id: 207,
      name: "The End of Your Adventure [Ending 2] - Etrian Mystery Dungeon",
      tags: ["Event"],
    },

    //// Etrian Odyssey 5: Beyond the Myth
    // https://vgmdb.net/album/60288
    {
      id: 208,
      name: "The Voice That Invites You to Adventure [Opening] - Etrian Odyssey 5: Beyond the Myth",
      tags: ["Event"],
    },
    {
      id: 209,
      name: "Ones Who Carry on the Legend [Title Screen] - Etrian Odyssey 5: Beyond the Myth",
      tags: ["Event"],
    },
    {
      id: 210,
      name: "Cityscape: Names That will be Spoken of for Generations [Explorers Guild] - Etrian Odyssey 5: Beyond the Myth",
      tags: ["City"],
    },
    {
      id: 211,
      name: "Labyrinth I: Tutelary Forest [1st Stratum Dungeon 1F~5F] - Etrian Odyssey 5: Beyond the Myth",
      tags: ["Dungeon"],
    },
    {
      id: 212,
      name: "Battlefield: First Move [Normal Battle: 1st Part] - Etrian Odyssey 5: Beyond the Myth",
      tags: ["Battle"],
    },
    {
      id: 213,
      name: "Labyrinth II: Jagged Reach [2nd Stratum Dungeon 6F~10F] - Etrian Odyssey 5: Beyond the Myth",
      tags: ["Dungeon"],
    },
    {
      id: 214,
      name: "Cityscape: The Sun Rises for Ones Who Smile [Town Plaza (Day)/Inn] - Etrian Odyssey 5: Beyond the Myth",
      tags: ["City"],
    },
    {
      id: 215,
      name: "Battlefield: A Crucial Moment [FOE Battle] - Etrian Odyssey 5: Beyond the Myth",
      tags: ["Battle"],
    },
    {
      id: 216,
      name: "Cityscape: End of the Twin's Banquet [Town Plaza (Night)/Shop/Bar] - Etrian Odyssey 5: Beyond the Myth",
      tags: ["City"],
    },
    {
      id: 217,
      name: "Labyrinth III: Fetid Necropolis [3rd Stratum Dungeon 11F~15F] - Etrian Odyssey 5: Beyond the Myth",
      tags: ["Dungeon"],
    },
    {
      id: 218,
      name: "Scene: Cold Justice [Event: Truth] - Etrian Odyssey 5: Beyond the Myth",
      tags: ["Event"],
    },
    {
      id: 219,
      name: "Battlefield: Roaring Sky, Shattering Land [Boss Battle] - Etrian Odyssey 5: Beyond the Myth",
      tags: ["Battle"],
    },
    {
      id: 220,
      name: "Cityscape: Where the Light Shines [Council Hall] - Etrian Odyssey 5: Beyond the Myth",
      tags: ["City"],
    },
    {
      id: 221,
      name: "Labyrinth IV: Lucent Hollows [4th Stratum Dungeon 16F~20F] - Etrian Odyssey 5: Beyond the Myth",
      tags: ["Dungeon"],
    },
    {
      id: 222,
      name: "Battlefield: Grasp the Future Beyond a Deadly Battle [Normal Battle: 2nd Part] - Etrian Odyssey 5: Beyond the Myth",
      tags: ["Battle"],
    },
    {
      id: 223,
      name: "Scene: Unknown Threat [Event: Tension] - Etrian Odyssey 5: Beyond the Myth",
      tags: ["Event"],
    },
    {
      id: 224,
      name: "Labyrinth V: Untamed Garden [5th Stratum Dungeon 21F~25F] - Etrian Odyssey 5: Beyond the Myth",
      tags: ["Dungeon"],
    },
    {
      id: 225,
      name: "Battlefield: Challenge of the Stars [Last Boss Battle] - Etrian Odyssey 5: Beyond the Myth",
      tags: ["Battle"],
    },
    {
      id: 226,
      name: "Alongside Proof of Attainment [Ending 1] - Etrian Odyssey 5: Beyond the Myth",
      tags: ["Event"],
    },
    {
      id: 227,
      name: "Labyrinth VI: Empyreal Bridge [6th Stratum Dungeon 26F~30F] - Etrian Odyssey 5: Beyond the Myth",
      tags: ["Dungeon"],
    },
    {
      id: 228,
      name: "Battlefield: Flashing Blades [Normal Battle: Last Stratum] - Etrian Odyssey 5: Beyond the Myth",
      tags: ["Battle"],
    },
    {
      id: 229,
      name: "Battlefield: Roaming Ruler [Lowest Last Boss Battle] - Etrian Odyssey 5: Beyond the Myth",
      tags: ["Battle"],
    },
    {
      id: 230,
      name: "Tumult: Crest of a Violent Wave (Arranged Ver.) [Secret Boss Battle] - Etrian Odyssey 5: Beyond the Myth",
      tags: ["Battle"],
    },
    {
      id: 231,
      name: "Beyond the Myth [Ending 2] - Etrian Odyssey 5: Beyond the Myth",
      tags: ["Event"],
    },

    //// Etrian Mystery Dungeon 2
    // https://vgmdb.net/album/69916
    {
      id: 232,
      name: "Those Who Heed the Call [Opening] - Etrian Mystery Dungeon 2",
      tags: ["Event"],
    },
    {
      id: 233,
      name: "The Curtain Rises on a Legend [Title Screen] - Etrian Mystery Dungeon 2",
      tags: ["Event"],
    },
    {
      id: 234,
      name: "Lakeside Town Oberfay [Town] - Etrian Mystery Dungeon 2",
      tags: ["City"],
    },
    {
      id: 235,
      name: "Halcyon Days [Boss Defeated] - Etrian Mystery Dungeon 2",
      tags: ["Event"],
    },
    {
      id: 236,
      name: "Hot Spring Inn, Sunlit Forest [Inn] - Etrian Mystery Dungeon 2",
      tags: ["City"],
    },
    {
      id: 237,
      name: "Jungle Ruins [1st Labyrinth] - Etrian Mystery Dungeon 2",
      tags: ["Dungeon"],
    },
    {
      id: 238,
      name: "Emerald Grove [2nd Labyrinth] - Etrian Mystery Dungeon 2",
      tags: ["Dungeon"],
    },
    {
      id: 239,
      name: "Molten Caves [3rd Labyrinth] - Etrian Mystery Dungeon 2",
      tags: ["Dungeon"],
    },
    {
      id: 240,
      name: "Azure Rainforest [4th Labyrinth] - Etrian Mystery Dungeon 2",
      tags: ["Dungeon"],
    },
    {
      id: 241,
      name: "Abyssal Shrine [5th Labyrinth] - Etrian Mystery Dungeon 2",
      tags: ["Dungeon"],
    },
    {
      id: 242,
      name: "Frozen Grounds [6th Labyrinth] - Etrian Mystery Dungeon 2",
      tags: ["Dungeon"],
    },
    {
      id: 243,
      name: "Claret Hollows [7th Labyrinth] - Etrian Mystery Dungeon 2",
      tags: ["Dungeon"],
    },
    {
      id: 244,
      name: "Misty Ravine [8th Labyrinth] - Etrian Mystery Dungeon 2",
      tags: ["Dungeon"],
    },
    {
      id: 245,
      name: "Ancient Circuitry [9th Labyrinth: 1st Part] - Etrian Mystery Dungeon 2",
      tags: ["Dungeon"],
    },
    {
      id: 246,
      name: "Creeping Decay [9th Labyrinth: 2nd Part] - Etrian Mystery Dungeon 2",
      tags: ["Dungeon"],
    },
    {
      id: 247,
      name: "Infinite Foes [Boss Battle] - Etrian Mystery Dungeon 2",
      tags: ["Battle"],
    },
    {
      id: 248,
      name: "Illusory Showdown [Nadhica Boss Battle] - Etrian Mystery Dungeon 2",
      tags: ["Battle"],
    },
    {
      id: 249,
      name: "The Gods Afflicted [Last Boss Battle] - Etrian Mystery Dungeon 2",
      tags: ["Battle"],
    },
    {
      id: 250,
      name: "Bloodstained Sword [Lowest Last Boss Battle] - Etrian Mystery Dungeon 2",
      tags: ["Battle"],
    },
    {
      id: 251,
      name: "The Curtain Falls on the Adventure [Ending] - Etrian Mystery Dungeon 2",
      tags: ["Event"],
    },

    //// Etrian Odyssey Nexus
    // https://vgmdb.net/album/85264
    {
      id: 252,
      name: "To the Stage of a New Adventure [Opening] - Etrian Odyssey Nexus",
      tags: ["Event"],
    },
    {
      id: 253,
      name: "Intersecting Journeys [Title Screen] - Etrian Odyssey Nexus",
      tags: ["Event"],
    },
    {
      id: 254,
      name: "Cityscape: Etch Thy Name among the Stars [Explorers Guild] - Etrian Odyssey Nexus",
      tags: ["City"],
    },
    {
      id: 255,
      name: "Cityscape: Cradle of the Lone Isle [Town Plaza (Day)/Inn] - Etrian Odyssey Nexus",
      tags: ["City"],
    },
    {
      id: 256,
      name: "Islescape: Undiscovered Continent [World Map] - Etrian Odyssey Nexus",
      tags: ["City"],
    },
    {
      id: 257,
      name: "Cityscape: Seek the Hidden Treasure [Exploration HQ] - Etrian Odyssey Nexus",
      tags: ["City"],
    },
    {
      id: 258,
      name: "Labyrinth: World Shrine [Dungeon: World Shrine] - Etrian Odyssey Nexus",
      tags: ["Dungeon"],
    },
    {
      id: 259,
      name: "Battlefield: Elation [Normal Battle (1st Part)] - Etrian Odyssey Nexus",
      tags: ["Battle"],
    },
    {
      id: 260,
      name: "Battlefield: The Foolhardy are Bathed in Blood [FOE Battle (1st Part)] - Etrian Odyssey Nexus",
      tags: ["Battle"],
    },
    {
      id: 261,
      name: "Tumult: The Slaughtered [Boss Battle (1st Part)] - Etrian Odyssey Nexus",
      tags: ["Battle"],
    },
    {
      id: 262,
      name: "Labyrinth: Yggdrasil Labyrinth [Dungeon: Yggdrasil Labyrinth] - Etrian Odyssey Nexus",
      tags: ["Dungeon"],
    },
    {
      id: 263,
      name: "Battlefield: Death's Crossroad [Normal Battle (9th Part)] - Etrian Odyssey Nexus",
      tags: ["Battle"],
    },
    {
      id: 264,
      name: "Battlefield: Dye the Mad with Blood [FOE Battle (6th Part)] - Etrian Odyssey Nexus",
      tags: ["Battle"],
    },
    {
      id: 265,
      name: "Tumult: Twilight of All Life [Last Boss Battle] - Etrian Odyssey Nexus",
      tags: ["Battle"],
    },
    {
      id: 266,
      name: "Labyrinth: Abyssal Shrine [Dungeon: Abyssal Shrine] - Etrian Odyssey Nexus",
      tags: ["Dungeon"],
    },
    {
      id: 267,
      name: "Cityscape: The Dusk-clad Ocean City (Etrian Odyssey Nexus Ver.) [Town Plaza (Night)/Shop/Bar] - Etrian Odyssey Nexus",
      tags: ["City"],
    },
    {
      id: 268,
      name: "Labyrinth I: Waterfall Wood (Etrian Odyssey Nexus Ver.) [Dungeon: Waterfall Wood] - Etrian Odyssey Nexus",
      tags: ["Dungeon"],
    },
    {
      id: 269,
      name: "Battlefield: The First Battle (Etrian Odyssey Nexus Ver.) [Normal Battle (4th Part)] - Etrian Odyssey Nexus",
      tags: ["Battle"],
    },
    {
      id: 270,
      name: "Battlefield: Is this Blood Thine or the Enemy's? (Etrian Odyssey Nexus Ver.) [FOE Battle (4th Part)] - Etrian Odyssey Nexus",
      tags: ["Battle"],
    },
    {
      id: 271,
      name: "Tumult: Raise Thy Sword in Pride (Etrian Odyssey Nexus Ver.) [Boss Battle (4st Part)] - Etrian Odyssey Nexus",
      tags: ["Battle"],
    },
    {
      id: 272,
      name: "Labyrinth II: Undersea Grotto (Etrian Odyssey Nexus Ver.) [Dungeon: Undersea Grotto] - Etrian Odyssey Nexus",
      tags: ["Dungeon"],
    },
    {
      id: 273,
      name: "Tumult: Call that Dreadful Name (Etrian Odyssey Nexus Ver.) [Lowest Last Boss Battle] - Etrian Odyssey Nexus",
      tags: ["Battle"],
    },

    //// Etrian Odyssey Origins Collection
    // https://vgmdb.net/album/130629
    {
      id: 274,
      name: "Battlefield: Perish Like the Dew [Normal Battle: Last Stratum] - Etrian Odyssey Origins Collection : Etrian Odyssey 3",
      tags: ["Battle"],
    },
  ];
  let filteredMusicNameList = [];

  // Bug : Sometimes musics stops appearing in suggestions, it seems that musics dissapears at the end of the array
  // Adding empty string makes them unfindable and prevent this bug
  musicNameList = musicNameList.concat(
    new Array(musicNameList.length).fill({
      id: -1,
      name: "",
      tags: allTags,
    })
  );

  // Same music as 14: Until the Day You Rise Again [Game Over] - Etrian Odyssey 2: Heroes of Lagaard
  //  {
  //    url: "https://soundcloud.com/beignet1/until-the-next-adventure",
  //    answer:
  //      "Until the Next Adventure [Game Over] - Etrian Odyssey 3: The Drowned City",
  //  },
  var musicListWithLinks = [
    {
      url: "https://soundcloud.com/beignet1/the-tale-unfolds-opening",
      answer: 0,
    },
    {
      url: "https://soundcloud.com/beignet1/cityscape-thy-name-has-been",
      answer: 1,
    },
    {
      url: "https://soundcloud.com/beignet1/labyrinth-i-emerald-grove",
      answer: 2,
    },
    {
      url: "https://soundcloud.com/beignet1/strife-first-strike-normal",
      answer: 3,
    },
    {
      url: "https://soundcloud.com/beignet1/labyrinth-ii-primitive-jungle",
      answer: 4,
    },
    {
      url: "https://soundcloud.com/beignet1/cityscape-roadside-trees",
      answer: 5,
    },
    {
      url: "https://soundcloud.com/beignet1/battlefield-a-storm-ahead-foe",
      answer: 6,
    },
    {
      url: "https://soundcloud.com/beignet1/cityscape-lounge-with-talks-of",
      answer: 7,
    },
    {
      url: "https://soundcloud.com/beignet1/labyrinth-iii-azure-rainforest",
      answer: 8,
    },
    {
      url: "https://soundcloud.com/beignet1/scene-red-and-black-event-fear",
      answer: 9,
    },
    {
      url: "https://soundcloud.com/beignet1/battlefield-drenched-in-red",
      answer: 10,
    },
    {
      url: "https://soundcloud.com/beignet1/cityscape-feast-with-reverence",
      answer: 11,
    },
    {
      url: "https://soundcloud.com/beignet1/labyrinth-iv-sandy-barrens",
      answer: 12,
    },
    {
      url: "https://soundcloud.com/beignet1/strife-kill-or-be-killed",
      answer: 13,
    },
    {
      url: "https://soundcloud.com/beignet1/labyrinth-v-lost-shinjuku",
      answer: 14,
    },
    {
      url: "https://soundcloud.com/beignet1/battlefield-the-two-towers-ren",
      answer: 15,
    },
    {
      url: "https://soundcloud.com/beignet1/scene-blue-and-white-event",
      answer: 16,
    },
    {
      url: "https://soundcloud.com/beignet1/battlefield-the-throne-of",
      answer: 17,
    },
    {
      url: "https://soundcloud.com/beignet1/heroes-are-born-and-the-story",
      answer: 18,
    },
    {
      url: "https://soundcloud.com/beignet1/cityscape-the-bird-atop-the",
      answer: 19,
    },
    {
      url: "https://soundcloud.com/beignet1/labyrinth-vi-claret-hollows",
      answer: 20,
    },
    {
      url: "https://soundcloud.com/beignet1/strife-rapture-normal-battle",
      answer: 21,
    },
    {
      url: "https://soundcloud.com/beignet1/battlefield-to-fall-is-fair",
      answer: 22,
    },
    {
      url: "https://soundcloud.com/beignet1/400-your-adventures-end-ending",
      answer: 23,
    },
    {
      url: "https://soundcloud.com/beignet1/until-a-new-dawn-game-over",
      answer: 24,
    },
    {
      url: "https://soundcloud.com/5038p00iul/now-begin-your-adventure",
      answer: 25,
    },
    {
      url: "https://soundcloud.com/5038p00iul/cityscape-the-ones-engraved-in",
      answer: 26,
    },
    {
      url: "https://soundcloud.com/5038p00iul/labyrinth-i-primitive-jungle",
      answer: 27,
    },
    {
      url: "https://soundcloud.com/5038p00iul/battlefield-first-battle",
      answer: 28,
    },
    {
      url: "https://soundcloud.com/5038p00iul/cityscape-land-spread-up-north",
      answer: 29,
    },
    {
      url: "https://soundcloud.com/5038p00iul/labyrinth-ii-auburn-thicket",
      answer: 30,
    },
    {
      url: "https://soundcloud.com/5038p00iul/scene-blood-and-darkness-event",
      answer: 31,
    },
    {
      url: "https://soundcloud.com/5038p00iul/battlefield-gust-of-death-foe",
      answer: 32,
    },
    {
      url: "https://soundcloud.com/5038p00iul/cityscape-the-wind-shall",
      answer: 33,
    },
    {
      url: "https://soundcloud.com/5038p00iul/labyrinth-iii-frozen-grounds",
      answer: 34,
    },
    {
      url: "https://soundcloud.com/5038p00iul/battlefield-guardian-of-the",
      answer: 35,
    },
    {
      url: "https://soundcloud.com/5038p00iul/battlefield-scarlet-rain-boss",
      answer: 36,
    },
    {
      url: "https://soundcloud.com/5038p00iul/cityscape-the-beautifully",
      answer: 37,
    },
    {
      url: "https://soundcloud.com/5038p00iul/labyrinth-iv-petal-bridge",
      answer: 38,
    },
    {
      url: "https://soundcloud.com/5038p00iul/scene-wings-and-cherry",
      answer: 39,
    },
    {
      url: "https://soundcloud.com/5038p00iul/battlefield-resonating-sounds",
      answer: 40,
    },
    {
      url: "https://soundcloud.com/5038p00iul/labyrinth-v-heavenly-keep",
      answer: 41,
    },
    {
      url: "https://soundcloud.com/5038p00iul/scene-viridian-and-silver",
      answer: 42,
    },
    {
      url: "https://soundcloud.com/5038p00iul/battlefield-final-battle-final",
      answer: 43,
    },
    {
      url: "https://soundcloud.com/5038p00iul/battlefield-overlord-of",
      answer: 44,
    },
    {
      url: "https://soundcloud.com/5038p00iul/return-of-the-heroes-ending-1",
      answer: 45,
    },
    {
      url: "https://soundcloud.com/5038p00iul/labyrinth-vi-forbidden-wood",
      answer: 46,
    },
    {
      url: "https://soundcloud.com/5038p00iul/battlefield-shudder-normal",
      answer: 47,
    },
    {
      url: "https://soundcloud.com/5038p00iul/14-until-the-day-you-rise",
      answer: 48,
    },
    {
      url: "https://soundcloud.com/beignet1/the-curtain-rises-on-an",
      answer: 49,
    },
    {
      url: "https://soundcloud.com/beignet1/cityscape-engrave-thy-name-and",
      answer: 50,
    },
    {
      url: "https://soundcloud.com/beignet1/labyrinth-i-waterfall-wood",
      answer: 51,
    },
    {
      url: "https://soundcloud.com/beignet1/battlefield-the-first-battle",
      answer: 52,
    },
    {
      url: "https://soundcloud.com/beignet1/cityscape-between-the-azure",
      answer: 53,
    },
    {
      url: "https://soundcloud.com/beignet1/labyrinth-ii-undersea-grotto",
      answer: 54,
    },
    {
      url: "https://soundcloud.com/beignet1/scene-unknown-threat",
      answer: 55,
    },
    {
      url: "https://soundcloud.com/beignet1/battlefield-is-this-blood",
      answer: 56,
    },
    {
      url: "https://soundcloud.com/beignet1/cityscape-sunlight-on-the",
      answer: 57,
    },
    {
      url: "https://soundcloud.com/beignet1/seascape-the-great-voyage",
      answer: 58,
    },
    {
      url: "https://soundcloud.com/beignet1/tumult-crest-of-a-violent-wave",
      answer: 59,
    },
    {
      url: "https://soundcloud.com/beignet1/cityscape-the-dusk-clad-ocean",
      answer: 60,
    },
    {
      url: "https://soundcloud.com/beignet1/labyrinth-iii-molten-caves",
      answer: 61,
    },
    {
      url: "https://soundcloud.com/beignet1/tumult-raise-thy-sword-in",
      answer: 62,
    },
    {
      url: "https://soundcloud.com/beignet1/cityscape-the-deep-blue-ocean",
      answer: 63,
    },
    {
      url: "https://soundcloud.com/beignet1/labyrinth-iv-abyssal-shrine",
      answer: 64,
    },
    {
      url: "https://soundcloud.com/beignet1/cityscape-the-overwatching",
      answer: 65,
    },
    {
      url: "https://soundcloud.com/beignet1/battlefield-those-who-fall",
      answer: 66,
    },
    {
      url: "https://soundcloud.com/beignet1/cityscape-one-hundred-years",
      answer: 67,
    },
    {
      url: "https://soundcloud.com/beignet1/labyrinth-v-porcelain-forest",
      answer: 68,
    },
    {
      url: "https://soundcloud.com/beignet1/tumult-to-fall-is-fair",
      answer: 69,
    },
    {
      url: "https://soundcloud.com/beignet1/scene-cold-justice",
      answer: 70,
    },
    {
      url: "https://soundcloud.com/beignet1/tumult-each-their-own-justice",
      answer: 71,
    },
    {
      url: "https://soundcloud.com/beignet1/cityscape-the-king-lost-in",
      answer: 72,
    },
    {
      url: "https://soundcloud.com/beignet1/labyrinth-vi-cyclopean-haunt",
      answer: 73,
    },
    {
      url: "https://soundcloud.com/beignet1/tumult-call-that-dreadful-name",
      answer: 74,
    },
    {
      url: "https://soundcloud.com/beignet1/the-end-of-your-adventure",
      answer: 75,
    },
    {
      url: "https://soundcloud.com/beignet4/on-an-adventure-flying-through",
      answer: 76,
    },
    {
      url: "https://soundcloud.com/beignet4/townscape-engraved-are-the",
      answer: 77,
    },
    {
      url: "https://soundcloud.com/beignet4/area-i-windy-plains-chapter-1",
      answer: 78,
    },
    {
      url: "https://soundcloud.com/beignet4/labyrinth-i-lush-woodlands",
      answer: 79,
    },
    {
      url: "https://soundcloud.com/beignet4/battlefield-storm-battle-bgm-1",
      answer: 80,
    },
    {
      url: "https://soundcloud.com/beignet4/war-the-fierce-burning-sword",
      answer: 81,
    },
    {
      url: "https://soundcloud.com/beignet4/townscape-a-town-embraced-by",
      answer: 82,
    },
    {
      url: "https://soundcloud.com/beignet4/area-ii-scarlet-pillars",
      answer: 83,
    },
    {
      url: "https://soundcloud.com/beignet4/labyrinth-ii-misty-ravine",
      answer: 84,
    },
    {
      url: "https://soundcloud.com/beignet4/scene-a-chance-meeting",
      answer: 85,
    },
    {
      url: "https://soundcloud.com/beignet4/area-iii-sacred-mountains",
      answer: 86,
    },
    {
      url: "https://soundcloud.com/beignet4/labyrinth-iii-golden-lair",
      answer: 87,
    },
    {
      url: "https://soundcloud.com/beignet4/battlefield-one-step-from",
      answer: 88,
    },
    {
      url: "https://soundcloud.com/beignet4/townscape-the-bliss-of-warm",
      answer: 89,
    },
    {
      url: "https://soundcloud.com/beignet4/area-iv-cloudy-stronghold",
      answer: 90,
    },
    {
      url: "https://soundcloud.com/beignet4/labyrinth-iv-echoing-library",
      answer: 91,
    },
    {
      url: "https://soundcloud.com/beignet4/battlefield-faith-is-my-pillar",
      answer: 92,
    },
    {
      url: "https://soundcloud.com/beignet4/minor-labyrinth-iv-ruins",
      answer: 93,
    },
    {
      url: "https://soundcloud.com/beignet4/minor-labyrinth-iii-a-cave",
      answer: 94,
    },
    {
      url: "https://soundcloud.com/beignet4/minor-labyrinth-ii-strange",
      answer: 95,
    },
    {
      url: "https://soundcloud.com/beignet4/minor-labyrinth-i-pioneering",
      answer: 96,
    },
    {
      url: "https://soundcloud.com/beignet4/scene-the-silent-wind-blows",
      answer: 97,
    },
    {
      url: "https://soundcloud.com/beignet4/labyrinth-v-forgotten-capital",
      answer: 98,
    },
    {
      url: "https://soundcloud.com/beignet4/war-the-legends-successor",
      answer: 99,
    },
    {
      url: "https://soundcloud.com/beignet4/that-relentless-music-ending",
      answer: 100,
    },
    {
      url: "https://soundcloud.com/beignet4/scene-the-ancient-oath",
      answer: 101,
    },
    {
      url: "https://soundcloud.com/beignet4/labyrinth-vi-hall-of-darkness",
      answer: 102,
    },
    {
      url: "https://soundcloud.com/beignet4/battlefield-with-eyes-blazing",
      answer: 103,
    },
    {
      url: "https://soundcloud.com/beignet4/war-the-end-of-raging-winds",
      answer: 104,
    },
    {
      url: "https://soundcloud.com/beignet4/war-scatter-about-battle-bgm-7",
      answer: 105,
    },
    {
      url: "https://soundcloud.com/beignet4/your-adventure-has-ended",
      answer: 106,
    },
    {
      url: "https://soundcloud.com/beignet0/the-tale-unfolds",
      answer: 107,
    },
    {
      url: "https://soundcloud.com/beignet0/cityscape-thy-name-has-been",
      answer: 108,
    },
    {
      url: "https://soundcloud.com/beignet0/labyrinth-i-emerald-grove",
      answer: 109,
    },
    {
      url: "https://soundcloud.com/beignet0/strife-first-strike",
      answer: 110,
    },
    {
      url: "https://soundcloud.com/beignet0/labyrinth-ii-primitive-jungle",
      answer: 111,
    },
    {
      url: "https://soundcloud.com/beignet0/cityscape-roadside-trees",
      answer: 112,
    },
    {
      url: "https://soundcloud.com/beignet0/battlefield-a-storm-ahead",
      answer: 113,
    },
    {
      url: "https://soundcloud.com/5038p00iul/cityscape-lounge-with-talks-of-tomorrow",
      answer: 114,
    },
    {
      url: "https://soundcloud.com/beignet0/labyrinth-iii-azure-rainforest",
      answer: 115,
    },
    {
      url: "https://soundcloud.com/beignet0/scene-red-and-black",
      answer: 116,
    },
    {
      url: "https://soundcloud.com/beignet0/battlefield-drenched-in-red",
      answer: 117,
    },
    {
      url: "https://soundcloud.com/beignet0/cityscape-feast-with-reverence",
      answer: 118,
    },
    {
      url: "https://soundcloud.com/beignet0/labyrinth-iv-sandy-barrens",
      answer: 119,
    },
    {
      url: "https://soundcloud.com/beignet0/strife-kill-or-be-killed",
      answer: 120,
    },
    {
      url: "https://soundcloud.com/beignet4/labyrinth-v-lost-shinjuku",
      answer: 121,
    },
    {
      url: "https://soundcloud.com/beignet4/battlefield-the-two-towers",
      answer: 122,
    },
    {
      url: "https://soundcloud.com/beignet0/scene-blue-and-white",
      answer: 123,
    },
    {
      url: "https://soundcloud.com/beignet4/battlefield-the-throne-of-heaven-and-earth",
      answer: 124,
    },
    {
      url: "https://soundcloud.com/beignet0/heroes-are-born-and-the-story",
      answer: 125,
    },
    {
      url: "https://soundcloud.com/beignet0/cityscape-the-bird-atop-the",
      answer: 126,
    },
    {
      url: "https://soundcloud.com/beignet0/labyrinth-vi-claret-hollows",
      answer: 127,
    },
    {
      url: "https://soundcloud.com/beignet4/strife-rapture",
      answer: 128,
    },
    {
      url: "https://soundcloud.com/beignet0/battlefield-to-fall-is-fair",
      answer: 129,
    },
    {
      url: "https://soundcloud.com/beignet0/400-your-adventures-end",
      answer: 130,
    },
    {
      url: "https://soundcloud.com/beignet4/the-beginning-of-the-end",
      answer: 131,
    },
    {
      url: "https://soundcloud.com/beignet0/cityscape-prep-for-tomorrow",
      answer: 132,
    },
    {
      url: "https://soundcloud.com/beignet4/labyrinth-gladsheim",
      answer: 133,
    },
    {
      url: "https://soundcloud.com/beignet4/battlefield-trigger-of-conflict",
      answer: 134,
    },
    {
      url: "https://soundcloud.com/beignet0/reminiscence-a-millennium-of-1",
      answer: 135,
    },
    {
      url: "https://soundcloud.com/beignet0/tumult-a-clash-of-crimson",
      answer: 136,
    },
    {
      url: "https://soundcloud.com/beignet0/melancholy-each-their-own-1",
      answer: 137,
    },
    {
      url: "https://soundcloud.com/beignet4/labyrinth-gladsheim-the-pulse-of-time",
      answer: 138,
    },
    {
      url: "https://soundcloud.com/beignet1/final-battle-the-future-of-the-world",
      answer: 139,
    },
    {
      url: "https://soundcloud.com/beignet0/the-battlefield-that-never",
      answer: 140,
    },
    {
      url: "https://soundcloud.com/eo2u/now-begin-your-adventure",
      answer: 141,
    },
    {
      url: "https://soundcloud.com/eo2u/cityscape-the-ones-engraved-in",
      answer: 142,
    },
    {
      url: "https://soundcloud.com/eo2u/labyrinth-i-primitive-jungle",
      answer: 143,
    },
    {
      url: "https://soundcloud.com/eo2u/battlefield-the-first-battle",
      answer: 144,
    },
    {
      url: "https://soundcloud.com/eo2u/cityscape-land-spread-up-north",
      answer: 145,
    },
    {
      url: "https://soundcloud.com/eo2u/labyrinth-ii-auburn-thicket",
      answer: 146,
    },
    {
      url: "https://soundcloud.com/eo2u/scene-blood-and-darkness",
      answer: 147,
    },
    {
      url: "https://soundcloud.com/eo2u/battlefield-gust-of-death",
      answer: 148,
    },
    {
      url: "https://soundcloud.com/eo2u/cityscape-the-wind-shall",
      answer: 149,
    },
    {
      url: "https://soundcloud.com/eo2u/labyrinth-iii-frozen-grounds",
      answer: 150,
    },
    {
      url: "https://soundcloud.com/eo2u/battlefield-guardian-of-the",
      answer: 151,
    },
    {
      url: "https://soundcloud.com/eo2u/battlefield-scarlet-rain",
      answer: 152,
    },
    {
      url: "https://soundcloud.com/eo2u/cityscape-the-beautifully",
      answer: 153,
    },
    {
      url: "https://soundcloud.com/eo2u/labyrinth-iv-petal-bridge",
      answer: 154,
    },
    {
      url: "https://soundcloud.com/eo2u/scene-wings-and-cherry",
      answer: 155,
    },
    {
      url: "https://soundcloud.com/eo2u/battlefield-resonating-sounds",
      answer: 156,
    },
    {
      url: "https://soundcloud.com/eo2u/labyrinth-v-heavenly-keep",
      answer: 157,
    },
    {
      url: "https://soundcloud.com/eo2u/scene-viridian-and-silver",
      answer: 158,
    },
    {
      url: "https://soundcloud.com/eo2u/battlefield-the-final-battle",
      answer: 159,
    },
    {
      url: "https://soundcloud.com/eo2u/battlefield-overlord-of",
      answer: 160,
    },
    {
      url: "https://soundcloud.com/eo2u/return-of-the-heroes",
      answer: 161,
    },
    {
      url: "https://soundcloud.com/eo2u/labyrinth-vi-forbidden-wood",
      answer: 162,
    },
    {
      url: "https://soundcloud.com/eo2u/battlefield-shudder",
      answer: 163,
    },
    {
      url: "https://soundcloud.com/eo2u/battlefield-to-fall-is-fair",
      answer: 164,
    },
    {
      url: "https://soundcloud.com/eo2u/reaching-out-for-our-future",
      answer: 165,
    },
    {
      url: "https://soundcloud.com/eo2u/cityscape-peaceful-dining",
      answer: 166,
    },
    {
      url: "https://soundcloud.com/eo2u/labyrinth-ginnungagap",
      answer: 167,
    },
    {
      url: "https://soundcloud.com/eo2u/battlefield-raise-thy-swords-1",
      answer: 168,
    },
    {
      url: "https://soundcloud.com/eo2u/grief-the-ends-of-emotion",
      answer: 169,
    },
    {
      url: "https://soundcloud.com/eo2u/tumult-shadow-of-death",
      answer: 170,
    },
    {
      url: "https://soundcloud.com/eo2u/melancholy-along-with-the-1",
      answer: 171,
    },
    {
      url: "https://soundcloud.com/eo2u/labyrinth-the-deep-ends-of-1",
      answer: 172,
    },
    {
      url: "https://soundcloud.com/eo2u/seize-the-future",
      answer: 173,
    },
    {
      url: "https://soundcloud.com/eo2u/tumult-sounds-of-war-deep-1",
      answer: 174,
    },
    {
      url: "https://soundcloud.com/eo2u/desperate-battle-risking-our-1",
      answer: 175,
    },
    {
      url: "https://soundcloud.com/emd2/beginning-of-a-new-adventure",
      answer: 176,
    },
    {
      url: "https://soundcloud.com/emd2/engrave-thy-name",
      answer: 177,
    },
    {
      url: "https://soundcloud.com/emd2/thy-name-has-been-etched-in",
      answer: 178,
    },
    {
      url: "https://soundcloud.com/emd2/town-of-aslarga",
      answer: 179,
    },
    {
      url: "https://soundcloud.com/emd2/auburn-thicket",
      answer: 180,
    },
    {
      url: "https://soundcloud.com/emd2/waterfall-wood",
      answer: 181,
    },
    {
      url: "https://soundcloud.com/emd2/memories-of-days-foregone",
      answer: 182,
    },
    {
      url: "https://soundcloud.com/emd2/song-of-nomads",
      answer: 183,
    },
    {
      url: "https://soundcloud.com/emd2/a-storm-ahead",
      answer: 184,
    },
    {
      url: "https://soundcloud.com/emd2/raise-thy-sword-in-pride",
      answer: 185,
    },
    {
      url: "https://soundcloud.com/emd2/waltz-of-the-red-lion",
      answer: 186,
    },
    {
      url: "https://soundcloud.com/emd2/regain-thy-treasure-fight-for",
      answer: 187,
    },
    {
      url: "https://soundcloud.com/emd2/is-this-blood-thine-or-the",
      answer: 188,
    },
    {
      url: "https://soundcloud.com/emd2/drifting-suspicions",
      answer: 189,
    },
    {
      url: "https://soundcloud.com/emd2/sacred-mountains",
      answer: 190,
    },
    {
      url: "https://soundcloud.com/emd2/darkness-and-crimson",
      answer: 191,
    },
    {
      url: "https://soundcloud.com/emd2/brush-with-death",
      answer: 192,
    },
    {
      url: "https://soundcloud.com/emd2/gust-of-death",
      answer: 193,
    },
    {
      url: "https://soundcloud.com/emd2/amber-and-yggdrasil",
      answer: 194,
    },
    {
      url: "https://soundcloud.com/emd2/beyond-the-scorching-heat",
      answer: 195,
    },
    {
      url: "https://soundcloud.com/emd2/each-their-own-justice",
      answer: 196,
    },
    {
      url: "https://soundcloud.com/5038p00iul/your-adventures-end",
      answer: 197,
    },
    {
      url: "https://soundcloud.com/5038p00iul/porcelain-forest",
      answer: 198,
    },
    {
      url: "https://soundcloud.com/5038p00iul/forbidden-wood",
      answer: 199,
    },
    {
      url: "https://soundcloud.com/5038p00iul/petal-bridge",
      answer: 200,
    },
    {
      url: "https://soundcloud.com/5038p00iul/ones-faith-in-the-staff",
      answer: 201,
    },
    {
      url: "https://soundcloud.com/5038p00iul/crimson-blaze-dancing-blades",
      answer: 202,
    },
    {
      url: "https://soundcloud.com/5038p00iul/to-fall-is-fair",
      answer: 203,
    },
    {
      url: "https://soundcloud.com/5038p00iul/shudder",
      answer: 204,
    },
    {
      url: "https://soundcloud.com/5038p00iul/city-remains",
      answer: 205,
    },
    {
      url: "https://soundcloud.com/5038p00iul/call-that-dreadful-name",
      answer: 206,
    },
    {
      url: "https://soundcloud.com/5038p00iul/the-end-of-your-adventure",
      answer: 207,
    },
    {
      url: "https://soundcloud.com/etrian5/the-voice-that-calls-to",
      answer: 208,
    },
    {
      url: "https://soundcloud.com/etrian5/the-hand-that-spins-the-1",
      answer: 209,
    },
    {
      url: "https://soundcloud.com/etrian5/town-remembering-the-names-1",
      answer: 210,
    },
    {
      url: "https://soundcloud.com/etrian5/labyrinth-i-guardian-spirits-1",
      answer: 211,
    },
    {
      url: "https://soundcloud.com/etrian5/battlefield-activation",
      answer: 212,
    },
    {
      url: "https://soundcloud.com/etrian5/labyrinth-ii-shrine-road-of-1",
      answer: 213,
    },
    {
      url: "https://soundcloud.com/etrian5/town-source-of-the-morning-1",
      answer: 214,
    },
    {
      url: "https://soundcloud.com/etrian5/battlefield-critical-1",
      answer: 215,
    },
    {
      url: "https://soundcloud.com/etrian5/town-waning-twins-party",
      answer: 216,
    },
    {
      url: "https://soundcloud.com/etrian5/labyrinth-iii-graveyard-of-1",
      answer: 217,
    },
    {
      url: "https://soundcloud.com/etrian5/scene-cold-justice",
      answer: 218,
    },
    {
      url: "https://soundcloud.com/etrian5/unrest-empty-ringing-the-1",
      answer: 219,
    },
    {
      url: "https://soundcloud.com/etrian5/town-the-light-that-once-1",
      answer: 220,
    },
    {
      url: "https://soundcloud.com/etrian5/labyrinth-iv-rainbow-druse",
      answer: 221,
    },
    {
      url: "https://soundcloud.com/etrian5/battlefield-life-or-death-1",
      answer: 222,
    },
    {
      url: "https://soundcloud.com/etrian5/scene-unknown-menace",
      answer: 223,
    },
    {
      url: "https://soundcloud.com/etrian5/labyrinth-v-primeval-forest-1",
      answer: 224,
    },
    {
      url: "https://soundcloud.com/etrian5/unrest-ordeal-of-stars",
      answer: 225,
    },
    {
      url: "https://soundcloud.com/etrian5/triumph-together-under-our-banner",
      answer: 226,
    },
    {
      url: "https://soundcloud.com/etrian5/labyrinth-vi-redshift-corridor",
      answer: 227,
    },
    {
      url: "https://soundcloud.com/etrian5/battlefield-shining-dagger-shadow-blade",
      answer: 228,
    },
    {
      url: "https://soundcloud.com/etrian5/unrest-lord-of-the-beyond",
      answer: 229,
    },
    {
      url: "https://soundcloud.com/etrian5/unrest-end-of-the-raging-waves",
      answer: 230,
    },
    {
      url: "https://soundcloud.com/etrian5/end-of-the-long-myth",
      answer: 231,
    },
    {
      url: "https://soundcloud.com/emd2/those-who-heed-the-call-etrian",
      answer: 232,
    },
    {
      url: "https://soundcloud.com/emd2/the-curtain-rises-on-a-legend",
      answer: 233,
    },
    {
      url: "https://soundcloud.com/emd2/lakeside-town-oberfay-etrian",
      answer: 234,
    },
    {
      url: "https://soundcloud.com/emd2/halcyon-days-etrian-mystery",
      answer: 235,
    },
    {
      url: "https://soundcloud.com/emd2/hot-spring-inn-sunlit-forest",
      answer: 236,
    },
    {
      url: "https://soundcloud.com/emd2/jungle-ruins-etrian-mystery",
      answer: 237,
    },
    {
      url: "https://soundcloud.com/emd2/emerald-grove-etrian-mystery",
      answer: 238,
    },
    {
      url: "https://soundcloud.com/emd2/molten-caves-etrian-mystery",
      answer: 239,
    },
    {
      url: "https://soundcloud.com/emd2/azure-rainforest-etrian",
      answer: 240,
    },
    {
      url: "https://soundcloud.com/emd2/abyssal-shrine-etrian-mystery",
      answer: 241,
    },
    {
      url: "https://soundcloud.com/emd2/frozen-grounds-etrian-mystery",
      answer: 242,
    },
    {
      url: "https://soundcloud.com/emd2/claret-hollows-etrian-mystery",
      answer: 243,
    },
    {
      url: "https://soundcloud.com/emd2/misty-ravine-etrian-mystery",
      answer: 244,
    },
    {
      url: "https://soundcloud.com/emd2/ancient-circuitry-etrian",
      answer: 245,
    },
    {
      url: "https://soundcloud.com/emd2/creeping-decay-etrian-mystery",
      answer: 246,
    },
    {
      url: "https://soundcloud.com/emd2/infinite-foes-etrian-mystery",
      answer: 247,
    },
    {
      url: "https://soundcloud.com/emd2/illusory-showdown-etrian",
      answer: 248,
    },
    {
      url: "https://soundcloud.com/emd2/the-gods-afflicted-etrian",
      answer: 249,
    },
    {
      url: "https://soundcloud.com/emd2/bloodstained-sword-etrian",
      answer: 250,
    },
    {
      url: "https://soundcloud.com/emd2/the-curtain-falls-on-the",
      answer: 251,
    },
    {
      url: "https://soundcloud.com/beignet0/to-the-stage-of-a-new-adventure",
      answer: 252,
    },
    {
      url: "https://soundcloud.com/beignet0/intersecting-journeys",
      answer: 253,
    },
    {
      url: "https://soundcloud.com/beignet0/cityscape-etch-thy-name-among-the-stars",
      answer: 254,
    },
    {
      url: "https://soundcloud.com/beignet0/cityscape-cradle-of-the-lone-isle",
      answer: 255,
    },
    {
      url: "https://soundcloud.com/beignet0/islescape-undiscovered-continent",
      answer: 256,
    },
    {
      url: "https://soundcloud.com/beignet0/cityscape-seek-the-hidden-treasure",
      answer: 257,
    },
    {
      url: "https://soundcloud.com/beignet0/labyrinth-world-shrine",
      answer: 258,
    },
    {
      url: "https://soundcloud.com/beignet0/battlefield-elation",
      answer: 259,
    },
    {
      url: "https://soundcloud.com/nekkoblue2/etrian-odyssey-nexus-foe",
      answer: 260,
    },
    {
      url: "https://soundcloud.com/beignet0/tumult-the-slaughtered",
      answer: 261,
    },
    {
      url: "https://soundcloud.com/beignet0/labyrinth-yggdrasil-labyrinth",
      answer: 262,
    },
    {
      url: "https://soundcloud.com/beignet0/battlefield-deaths-crossroad",
      answer: 263,
    },
    {
      url: "https://soundcloud.com/beignet0/battlefield-dye-the-mad-with-blood",
      answer: 264,
    },
    {
      url: "https://soundcloud.com/pepito-x/etrian-odyssey-nexus-x-final",
      answer: 265,
    },
    {
      url: "https://soundcloud.com/beignet0/labyrinth-abyssal-shrine",
      answer: 266,
    },
    {
      url: "https://soundcloud.com/dena-jones-205733218/etrian-odyssey-nexus-x-shop-mpguncom",
      answer: 267,
    },
    {
      url: "https://soundcloud.com/beignet4/labyrinth-i-waterfall-wood-etrian-odyssey-nexus-ver",
      answer: 268,
    },
    {
      url: "https://soundcloud.com/beignet0/battlefield-the-first-battle-etrian-odyssey-nexus-ver",
      answer: 269,
    },
    {
      url: "https://soundcloud.com/beignet0/battlefield-is-this-blood-thine-or-the-enemys-etrian-odyssey-nexus-ver",
      answer: 270,
    },
    {
      url: "https://soundcloud.com/overlord-zenon-xenonnia/etrian-odyssey-nexus-hoist-the",
      answer: 271,
    },
    {
      url: "https://soundcloud.com/dena-jones-205733218/etrian-odyssey-nexus-x-water-woods-of-the-submarine-ridge-x-ver-mpguncom",
      answer: 272,
    },
    {
      url: "https://soundcloud.com/dena-jones-205733218/etrian-odyssey-nexus-x-calling-that-detestable-name-x-ver-mpguncom",
      answer: 273,
    },
    {
      url: "https://soundcloud.com/5038p00iul/battlefield-perish-like-the-dew",
      answer: 274,
    },
  ];
  shuffleMusic();
  let filteredMusicListWithLinks = [];
  filterMusicLists();
  var firstLoad = true;

  const Cn = ue(filteredMusicNameList),
    On = {
      subscribe: ue(filteredMusicListWithLinks, Pn).subscribe,
    };

  ("use strict");

  function e() {}

  function shuffleMusic() {
    for (let i = musicListWithLinks.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [musicListWithLinks[i], musicListWithLinks[j]] = [
        musicListWithLinks[j],
        musicListWithLinks[i],
      ];
    }
  }

  function nextMusic() {
    currentIndex += 1;
    if (currentIndex >= filteredMusicListWithLinks.length) {
      window.location.reload();
    } else {
      document.body.innerHTML = "";
      new (class extends se {
        constructor(e) {
          super(), re(this, e, jn, En, i, {}, null, [-1, -1]);
        }
      })({
        target: document.body,
        props: {},
      });
    }
  }

  function filterMusicLists() {
    // Remove musics that are filtered out
    let gameList = [...new Set(getGameOrArtistFromMusicName(musicNameList))];
    let removedGameList = removeGames.map((i) => gameList[i]);
    let removedTagsList = removeTags.map((i) => allTags[i]);
    if (gameList.length == removedGameList.length) {
      removeGames = [];
      localStorage.setItem("removeGames", "[]");
      removedGameList = [];
    }
    if (allTags.length == removedTagsList.length) {
      removeTags = [];
      localStorage.setItem("removeTags", "[]");
      removedTagsList = [];
    }
    filteredMusicNameList = musicNameList.filter(
      (m) => !removedGameList.includes(getOneGameOrArtistFromMusic(m))
    );
    if (allTags.length > 0) {
      filteredMusicNameList = filteredMusicNameList.filter((m) =>
        m.tags.some((t) => !removedTagsList.includes(t))
      );
    }
    if (filteredMusicNameList.every((m) => m.id == -1)) {
      filteredMusicNameList = musicNameList;
      removeGames = [];
      localStorage.setItem("removeGames", "[]");
      removeTags = [];
      localStorage.setItem("removeTags", "[]");
    }
    const idMusic = new Set(filteredMusicNameList.map((x) => x.id));
    filteredMusicListWithLinks = musicListWithLinks.filter((x) =>
      idMusic.has(x.answer)
    );
  }

  function saveFilteredGames(filteredGames) {
    removeGames = filteredGames;
    localStorage.setItem("removeGames", JSON.stringify(filteredGames)),
      window.location.reload();
  }

  function saveFilteredTags(filteredTags) {
    removeTags = filteredTags;
    localStorage.setItem("removeTags", JSON.stringify(filteredTags)),
      window.location.reload();
  }

  function t(e) {
    return e();
  }

  function n() {
    return Object.create(null);
  }

  function r(e) {
    e.forEach(t);
  }

  function s(e) {
    return "function" == typeof e;
  }

  function i(e, t) {
    return e != e
      ? t == t
      : e !== t || (e && "object" == typeof e) || "function" == typeof e;
  }
  let o, a;

  function l(e, t) {
    return o || (o = document.createElement("a")), (o.href = t), e === o.href;
  }

  function u(t, n, r) {
    t.$$.on_destroy.push(
      (function (t, ...n) {
        if (null == t) return e;
        const r = t.subscribe(...n);
        return r.unsubscribe ? () => r.unsubscribe() : r;
      })(n, r)
    );
  }

  function c(e, t, n, r) {
    if (e) {
      const s = d(e, t, n, r);
      return e[0](s);
    }
  }

  function d(e, t, n, r) {
    return e[1] && r
      ? (function (e, t) {
          for (const n in t) e[n] = t[n];
          return e;
        })(n.ctx.slice(), e[1](r(t)))
      : n.ctx;
  }

  function h(e, t, n, r) {
    if (e[2] && r) {
      const s = e[2](r(n));
      if (void 0 === t.dirty) return s;
      if ("object" == typeof s) {
        const e = [],
          n = Math.max(t.dirty.length, s.length);
        for (let r = 0; r < n; r += 1) e[r] = t.dirty[r] | s[r];
        return e;
      }
      return t.dirty | s;
    }
    return t.dirty;
  }

  function f(e, t, n, r, s, i) {
    if (s) {
      const o = d(t, n, r, i);
      e.p(o, s);
    }
  }

  function m(e) {
    if (e.ctx.length > 32) {
      const t = [],
        n = e.ctx.length / 32;
      for (let e = 0; e < n; e++) t[e] = -1;
      return t;
    }
    return -1;
  }

  function p(e, t) {
    e.appendChild(t);
  }

  function g(e, t, n) {
    e.insertBefore(t, n || null);
  }

  function y(e) {
    e.parentNode.removeChild(e);
  }

  function v(e, t) {
    for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t);
  }

  function w(e) {
    return document.createElement(e);
  }

  function k(e) {
    return document.createElementNS("http://www.w3.org/2000/svg", e);
  }

  function _(e) {
    return document.createTextNode(e);
  }

  function x() {
    return _(" ");
  }

  function b() {
    return _("");
  }

  function S(e, t, n, r) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
  }

  function M(e, t, n) {
    null == n
      ? e.removeAttribute(t)
      : e.getAttribute(t) !== n && e.setAttribute(t, n);
  }

  function $(e, t) {
    (t = "" + t), e.wholeText !== t && (e.data = t);
  }

  function D(e, t) {
    e.value = null == t ? "" : t;
  }

  function T(e, t, n, r) {
    null === n
      ? e.style.removeProperty(t)
      : e.style.setProperty(t, n, r ? "important" : "");
  }

  function Y(e, t, n) {
    e.classList[n ? "add" : "remove"](t);
  }

  function C(e) {
    a = e;
  }

  function O() {
    if (!a) throw new Error("Function called outside component initialization");
    return a;
  }

  function P(e) {
    O().$$.on_mount.push(e);
  }

  function A() {
    const e = O();
    return (t, n) => {
      const r = e.$$.callbacks[t];
      if (r) {
        const s = (function (e, t, n = !1) {
          const r = document.createEvent("CustomEvent");
          return r.initCustomEvent(e, n, !1, t), r;
        })(t, n);
        r.slice().forEach((t) => {
          t.call(e, s);
        });
      }
    };
  }

  function L(e, t) {
    const n = e.$$.callbacks[t.type];
    n && n.slice().forEach((e) => e.call(this, t));
  }
  const N = [],
    H = [],
    I = [],
    W = [],
    R = Promise.resolve();
  let F = !1;

  function G(e) {
    I.push(e);
  }
  const E = new Set();
  let j = 0;

  function B() {
    const e = a;
    do {
      for (; j < N.length; ) {
        const e = N[j];
        j++, C(e), z(e.$$);
      }
      for (C(null), N.length = 0, j = 0; H.length; ) H.pop()();
      for (let e = 0; e < I.length; e += 1) {
        const t = I[e];
        E.has(t) || (E.add(t), t());
      }
      I.length = 0;
    } while (N.length);
    for (; W.length; ) W.pop()();
    (F = !1), E.clear(), C(e);
  }

  function z(e) {
    if (null !== e.fragment) {
      e.update(), r(e.before_update);
      const t = e.dirty;
      (e.dirty = [-1]),
        e.fragment && e.fragment.p(e.ctx, t),
        e.after_update.forEach(G);
    }
  }
  const U = new Set();
  let V;

  function J() {
    V = {
      r: 0,
      c: [],
      p: V,
    };
  }

  function K() {
    V.r || r(V.c), (V = V.p);
  }

  function Z(e, t) {
    e && e.i && (U.delete(e), e.i(t));
  }

  function q(e, t, n, r) {
    if (e && e.o) {
      if (U.has(e)) return;
      U.add(e),
        V.c.push(() => {
          U.delete(e), r && (n && e.d(1), r());
        }),
        e.o(t);
    }
  }
  const X =
    "undefined" != typeof window
      ? window
      : "undefined" != typeof globalThis
      ? globalThis
      : global;

  function Q(e) {
    e && e.c();
  }

  function ee(e, n, i, o) {
    const { fragment: a, on_mount: l, on_destroy: u, after_update: c } = e.$$;
    a && a.m(n, i),
      o ||
        G(() => {
          const n = l.map(t).filter(s);
          u ? u.push(...n) : r(n), (e.$$.on_mount = []);
        }),
      c.forEach(G);
  }

  function te(e, t) {
    const n = e.$$;
    null !== n.fragment &&
      (r(n.on_destroy),
      n.fragment && n.fragment.d(t),
      (n.on_destroy = n.fragment = null),
      (n.ctx = []));
  }

  function ne(e, t) {
    -1 === e.$$.dirty[0] &&
      (N.push(e), F || ((F = !0), R.then(B)), e.$$.dirty.fill(0)),
      (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
  }

  function re(t, s, i, o, l, u, c, d = [-1]) {
    const h = a;
    C(t);
    const f = (t.$$ = {
      fragment: null,
      ctx: null,
      props: u,
      update: e,
      not_equal: l,
      bound: n(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(s.context || (h ? h.$$.context : [])),
      callbacks: n(),
      dirty: d,
      skip_bound: !1,
      root: s.target || h.$$.root,
    });
    c && c(f.root);
    let m = !1;
    if (
      ((f.ctx = i
        ? i(t, s.props || {}, (e, n, ...r) => {
            const s = r.length ? r[0] : n;
            return (
              f.ctx &&
                l(f.ctx[e], (f.ctx[e] = s)) &&
                (!f.skip_bound && f.bound[e] && f.bound[e](s), m && ne(t, e)),
              n
            );
          })
        : []),
      f.update(),
      (m = !0),
      r(f.before_update),
      (f.fragment = !!o && o(f.ctx)),
      s.target)
    ) {
      if (s.hydrate) {
        const e = (function (e) {
          return Array.from(e.childNodes);
        })(s.target);
        f.fragment && f.fragment.l(e), e.forEach(y);
      } else f.fragment && f.fragment.c();
      s.intro && Z(t.$$.fragment),
        ee(t, s.target, s.anchor, s.customElement),
        B();
    }
    C(h);
  }
  class se {
    $destroy() {
      te(this, 1), (this.$destroy = e);
    }
    $on(e, t) {
      const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
      return (
        n.push(t),
        () => {
          const e = n.indexOf(t);
          -1 !== e && n.splice(e, 1);
        }
      );
    }
    $set(e) {
      var t;
      this.$$set &&
        ((t = e), 0 !== Object.keys(t).length) &&
        ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
    }
  }

  function ie(e) {
    let t, n, r, s;
    const i = e[3].default,
      o = c(i, e, e[2], null);
    let aria = "";
    // I didn't find how to reuse the names of the popup
    switch (i[0].name) {
      case "ge":
        aria = "About";
        break;
      case "ye":
        aria = "Support";
        break;
      case "ve":
        aria = "Stats";
        break;
      case "we":
        aria = "How to play";
        break;
      case "mListIco":
        aria = "Music List";
        break;
      case "Mt":
        aria = "Skip";
        break;
      case "$t":
        aria = "Submit";
        break;
      case "ht":
        aria = "Play/Pause";
        break;
      case "pn":
        aria = "Play";
        break;
      case "filterIco":
        aria = "Filter";
        break;
    }
    return {
      c() {
        (t = w("button")),
          o && o.c(),
          M(
            t,
            "class",
            "px-2 py-2 uppercase tracking-widest bg-custom-mg border-none flex items-center font-semibold text-sm svelte-1r54uzk"
          ),
          M(t, "aria-label", aria),
          Y(t, "bg-custom-positive", e[0]),
          Y(t, "bg-custom-mg", e[1]);
      },
      m(i, a) {
        g(i, t, a),
          o && o.m(t, null),
          (n = !0),
          r || ((s = S(t, "click", e[4])), (r = !0));
      },
      p(e, [r]) {
        o &&
          o.p &&
          (!n || 4 & r) &&
          f(o, i, e, e[2], n ? h(i, e[2], r, null) : m(e[2]), null),
          1 & r && Y(t, "bg-custom-positive", e[0]),
          2 & r && Y(t, "bg-custom-mg", e[1]);
      },
      i(e) {
        n || (Z(o, e), (n = !0));
      },
      o(e) {
        q(o, e), (n = !1);
      },
      d(e) {
        e && y(t), o && o.d(e), (r = !1), s();
      },
    };
  }

  function oe(e, t, n) {
    let { $$slots: r = {}, $$scope: s } = t,
      { primary: i = !1 } = t,
      { secondary: o = !1 } = t;
    return (
      (e.$$set = (e) => {
        "primary" in e && n(0, (i = e.primary)),
          "secondary" in e && n(1, (o = e.secondary)),
          "$$scope" in e && n(2, (s = e.$$scope));
      }),
      [
        i,
        o,
        s,
        r,
        function (t) {
          L.call(this, e, t);
        },
      ]
    );
  }
  class ae extends se {
    constructor(e) {
      super(),
        re(this, e, oe, ie, i, {
          primary: 0,
          secondary: 1,
        });
    }
  }
  const le = [];

  function ue(t, n = e) {
    let r;
    const s = new Set();

    function o(e) {
      if (i(t, e) && ((t = e), r)) {
        const e = !le.length;
        for (const e of s) e[1](), le.push(e, t);
        if (e) {
          for (let e = 0; e < le.length; e += 2) le[e][0](le[e + 1]);
          le.length = 0;
        }
      }
    }
    return {
      set: o,
      update: function (e) {
        o(e(t));
      },
      subscribe: function (i, a = e) {
        const l = [i, a];
        return (
          s.add(l),
          1 === s.size && (r = n(o) || e),
          i(t),
          () => {
            s.delete(l), 0 === s.size && (r(), (r = null));
          }
        );
      },
    };
  }
  const ce = ue([]);

  function de() {
    return (
      Boolean(window.dataLayer).valueOf() && Array.isArray(window.dataLayer)
    );
  }

  function he() {
    window.dataLayer.push(arguments);
  }

  function fe(e, t, n) {
    let { properties: r } = t,
      { configurations: s = {} } = t,
      { enabled: i = !0 } = t;

    function o() {
      !(function (e, t, n) {
        let r = e.length;

        function s() {
          (r = --r), r < 1 && n();
        }
        t()
          ? n()
          : e.forEach(
              ({
                type: e,
                url: t,
                options: n = {
                  async: !0,
                  defer: !0,
                },
              }) => {
                const r = "script" === e,
                  i = document.createElement(r ? "script" : "link");
                r
                  ? ((i.src = t), (i.async = n.async), (i.defer = n.defer))
                  : ((i.rel = "stylesheet"), (i.href = t)),
                  (i.onload = s),
                  document.body.appendChild(i);
              }
            );
      })(
        [],
        de,
        a
      );
    }

    function a() {
      return (
        (window.dataLayer = window.dataLayer || []),
        he("js", new Date()),
        r.forEach((e) => {
          he("config", e, s[e] || {});
        }),
        ce.subscribe((e) => {
          let t = e.length && e.shift();
          for (; t; ) {
            const { event: n, data: r } = t;
            he("event", n, r), (t = e.shift());
          }
        })
      );
    }
    return (
      P(() => {
        i && o();
      }),
      (e.$$set = (e) => {
        "properties" in e && n(0, (r = e.properties)),
          "configurations" in e && n(1, (s = e.configurations)),
          "enabled" in e && n(2, (i = e.enabled));
      }),
      [r, s, i, o]
    );
  }
  class me extends se {
    constructor(e) {
      super(),
        re(this, e, fe, null, i, {
          properties: 0,
          configurations: 1,
          enabled: 2,
          init: 3,
        });
    }
    get init() {
      return this.$$.ctx[3];
    }
  }

  function pe(e, t) {
    t.send_to || delete t.send_to,
      ce.update((n) => [
        ...n,
        {
          event: e,
          data: t,
        },
      ]);
  }

  function ge(e) {
    let t, n, r, s;
    return {
      c() {
        (t = k("svg")),
          (n = k("circle")),
          (r = k("line")),
          (s = k("line")),
          M(n, "cx", "12"),
          M(n, "cy", "12"),
          M(n, "r", "10"),
          M(r, "x1", "12"),
          M(r, "y1", "16"),
          M(r, "x2", "12"),
          M(r, "y2", "12"),
          M(s, "x1", "12"),
          M(s, "y1", "8"),
          M(s, "x2", "12.01"),
          M(s, "y2", "8"),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "width", "24"),
          M(t, "height", "24"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "none"),
          M(t, "stroke", "currentColor"),
          M(t, "stroke-width", "2"),
          M(t, "stroke-linecap", "round"),
          M(t, "stroke-linejoin", "round");
      },
      m(e, i) {
        g(e, t, i), p(t, n), p(t, r), p(t, s);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function ye(e) {
    let t, n;
    return {
      c() {
        (t = k("svg")),
          (n = k("path")),
          M(
            n,
            "d",
            "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
          ),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "width", "24"),
          M(t, "height", "24"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "none"),
          M(t, "stroke", "currentColor"),
          M(t, "stroke-width", "2"),
          M(t, "stroke-linecap", "round"),
          M(t, "stroke-linejoin", "round");
      },
      m(e, r) {
        g(e, t, r), p(t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function ve(e) {
    let t, n;
    return {
      c() {
        (t = k("svg")),
          (n = k("path")),
          M(
            n,
            "d",
            "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          ),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "width", "24"),
          M(t, "height", "24"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "none"),
          M(t, "stroke", "currentColor"),
          M(t, "stroke-width", "2"),
          M(t, "stroke-linecap", "round"),
          M(t, "stroke-linejoin", "round");
      },
      m(e, r) {
        g(e, t, r), p(t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function we(e) {
    let t, n, r, s;
    return {
      c() {
        (t = k("svg")),
          (n = k("circle")),
          (r = k("path")),
          (s = k("line")),
          M(n, "cx", "12"),
          M(n, "cy", "12"),
          M(n, "r", "10"),
          M(r, "d", "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"),
          M(s, "x1", "12"),
          M(s, "y1", "17"),
          M(s, "x2", "12.01"),
          M(s, "y2", "17"),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "width", "24"),
          M(t, "height", "24"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "none"),
          M(t, "stroke", "currentColor"),
          M(t, "stroke-width", "2"),
          M(t, "stroke-linecap", "round"),
          M(t, "stroke-linejoin", "round");
      },
      m(e, i) {
        g(e, t, i), p(t, n), p(t, r), p(t, s);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function mListIco(e) {
    let t, r;
    return {
      c() {
        (t = k("svg")),
          (r = k("path")),
          M(
            r,
            "d",
            "M 2.324219 3.484375 C 1.039062 3.484375 0 4.523438 0 5.804688 C 0 7.089844 1.039062 8.128906 2.324219 8.128906 C 3.605469 8.128906 4.644531 7.089844 4.644531 5.804688 C 4.644531 4.523438 3.605469 3.484375 2.324219 3.484375 Z M 2.324219 9.675781 C 1.039062 9.675781 0 10.71875 0 12 C 0 13.28125 1.039062 14.324219 2.324219 14.324219 C 3.605469 14.324219 4.644531 13.28125 4.644531 12 C 4.644531 10.71875 3.605469 9.675781 2.324219 9.675781 Z M 2.324219 15.871094 C 1.039062 15.871094 0 16.910156 0 18.195312 C 0 19.476562 1.039062 20.515625 2.324219 20.515625 C 3.605469 20.515625 4.644531 19.476562 4.644531 18.195312 C 4.644531 16.910156 3.605469 15.871094 2.324219 15.871094 Z M 7.742188 7.355469 L 22.453125 7.355469 C 23.308594 7.355469 24 6.660156 24 5.804688 C 24 4.949219 23.308594 4.257812 22.453125 4.257812 L 7.742188 4.257812 C 6.886719 4.257812 6.195312 4.949219 6.195312 5.804688 C 6.195312 6.660156 6.886719 7.355469 7.742188 7.355469 Z M 22.453125 10.453125 L 7.742188 10.453125 C 6.886719 10.453125 6.195312 11.144531 6.195312 12 C 6.195312 12.855469 6.886719 13.546875 7.742188 13.546875 L 22.453125 13.546875 C 23.308594 13.546875 24 12.855469 24 12 C 24 11.144531 23.308594 10.453125 22.453125 10.453125 Z M 22.453125 16.644531 L 7.742188 16.644531 C 6.886719 16.644531 6.195312 17.339844 6.195312 18.195312 C 6.195312 19.050781 6.886719 19.742188 7.742188 19.742188 L 22.453125 19.742188 C 23.308594 19.742188 24 19.050781 24 18.195312 C 24 17.339844 23.308594 16.644531 22.453125 16.644531 Z M 22.453125 16.644531 "
          ),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "width", "24"),
          M(t, "height", "24"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "white");
      },
      m(e, i) {
        g(e, t, i), p(t, r);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function filterIco(e) {
    let t, r;
    return {
      c() {
        (t = k("svg")),
          (r = k("path")),
          M(
            r,
            "d",
            "M 2 5 C 2 3.34375 3.34375 2 5 2 L 19 2 C 20.65625 2 22 3.34375 22 5 L 22 6.171875 C 22 6.96875 21.683594 7.730469 21.121094 8.292969 L 15.292969 14.121094 C 15.105469 14.308594 15 14.5625 15 14.828125 L 15 17.171875 C 15 17.96875 14.683594 18.730469 14.121094 19.292969 L 11.917969 21.496094 C 10.84375 22.570312 9 21.808594 9 20.285156 L 9 14.828125 C 9 14.5625 8.894531 14.308594 8.707031 14.121094 L 2.878906 8.292969 C 2.316406 7.730469 2 6.96875 2 6.171875 Z M 2 5 "
          ),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "width", "24"),
          M(t, "height", "24"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "white");
      },
      m(e, i) {
        g(e, t, i), p(t, r);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function ke(e) {
    let t, n, r, s, i, o, a, l, u, c, d, h, f, m, b, ml, bFilter, mFilter, v;
    return (
      (i = new ae({
        props: {
          $$slots: {
            default: [ge],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      i.$on("click", e[1]),
      (a = new ae({
        props: {
          $$slots: {
            default: [ye],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      a.$on("click", e[2]),
      (h = new ae({
        props: {
          $$slots: {
            default: [ve],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      h.$on("click", e[3]),
      (m = new ae({
        props: {
          $$slots: {
            default: [we],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      m.$on("click", e[4]),
      (ml = new ae({
        props: {
          $$slots: {
            default: [mListIco],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      ml.$on("click", e[5]),
      (mFilter = new ae({
        props: {
          $$slots: {
            default: [filterIco],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      mFilter.$on("click", e[6]),
      {
        c() {
          (t = w("header")),
            (n = w("div")),
            (r = w("div")),
            (s = w("div")),
            Q(i.$$.fragment),
            (o = x()),
            Q(a.$$.fragment),
            (l = x()),
            (u = w("h1")),
            (u.textContent = artist + " Infinite Heardle"),
            (c = x()),
            (d = w("div")),
            Q(h.$$.fragment),
            (f = x()),
            Q(m.$$.fragment),
            (b = x()),
            Q(ml.$$.fragment),
            (bFilter = x()),
            Q(mFilter.$$.fragment),
            M(s, "class", "flex flex-1"),
            M(
              u,
              "class",
              "font-serif text-3xl font-bold flex-grow text-center flex-1"
            ),
            M(d, "class", "flex flex-1 justify-end"),
            M(
              r,
              "class",
              "flex justify-evenly text-custom-fgcolor p-3 items-center"
            ),
            M(n, "class", "max-w-screen-md mx-auto "),
            M(t, "class", "border-b border-custom-line");
        },
        m(e, y) {
          g(e, t, y),
            p(t, n),
            p(n, r),
            p(r, s),
            ee(i, s, null),
            p(s, o),
            ee(a, s, null),
            p(s, f),
            ee(m, s, null),
            p(r, l),
            p(r, u),
            p(r, c),
            p(r, d),
            ee(h, d, null),
            p(d, bFilter),
            ee(mFilter, d, null),
            p(d, b),
            ee(ml, d, null),
            (v = !0);
        },
        p(e, [t]) {
          const n = {};
          64 & t &&
            (n.$$scope = {
              dirty: t,
              ctx: e,
            }),
            i.$set(n);
          const r = {};
          64 & t &&
            (r.$$scope = {
              dirty: t,
              ctx: e,
            }),
            a.$set(r);
          const s = {};
          64 & t &&
            (s.$$scope = {
              dirty: t,
              ctx: e,
            }),
            h.$set(s);
          const o = {};
          64 & t &&
            (o.$$scope = {
              dirty: t,
              ctx: e,
            }),
            m.$set(o);
          const z = {};
          64 & t &&
            (z.$$scope = {
              dirty: t,
              ctx: e,
            }),
            ml.$set(z);
          const zFilter = {};
          64 & t &&
            (zFilter.$$scope = {
              dirty: t,
              ctx: e,
            }),
            mFilter.$set(zFilter);
        },
        i(e) {
          v ||
            (Z(i.$$.fragment, e),
            Z(a.$$.fragment, e),
            Z(h.$$.fragment, e),
            Z(m.$$.fragment, e),
            Z(ml.$$.fragment, e),
            Z(mFilter.$$.fragment, e),
            (v = !0));
        },
        o(e) {
          q(i.$$.fragment, e),
            q(a.$$.fragment, e),
            q(h.$$.fragment, e),
            q(m.$$.fragment, e),
            q(ml.$$.fragment, e),
            q(mFilter.$$.fragment, e),
            (v = !1);
        },
        d(e) {
          e && y(t), te(i), te(a), te(h), te(m), te(ml), te(mFilter);
        },
      }
    );
  }

  function _e(e) {
    const t = A();

    function n(e, n, r) {
      t("modal", {
        name: e,
        title: n,
        hasFrame: r,
      });
    }
    return [
      n,
      () => {
        n("info", "about"),
          pe("clickInfo", {
            name: "clickInfo",
          });
      },
      () => {
        n("donate", "support"),
          pe("clickDonate", {
            name: "clickDonate",
          });
      },
      () => {
        n("results", "stats"),
          pe("clickStats", {
            name: "clickStats",
          });
      },
      () => {
        n("help", "how to play"),
          pe("clickHelp", {
            name: "clickHelp",
          });
      },
      () => {
        n("music-list", "music list"),
          pe("clickMusicList", {
            name: "clickMusicList",
          });
      },
      () => {
        n("filter", "Filter"),
          pe("clickFilter", {
            name: "clickFilter",
          });
      },
    ];
  }
  class xe extends se {
    constructor(e) {
      super(), re(this, e, _e, ke, i, {});
    }
  }

  function be(e, t, n) {
    const r = e.slice();
    return (r[5] = t[n]), (r[7] = n), r;
  }

  function Se(e) {
    let t,
      n = Array(e[3]),
      r = [];
    for (let t = 0; t < n.length; t += 1) r[t] = Pe(be(e, n, t));
    return {
      c() {
        t = w("div");
        for (let e = 0; e < r.length; e += 1) r[e].c();
        M(t, "class", "p-3 flex-col items-evenly");
      },
      m(e, n) {
        g(e, t, n);
        for (let e = 0; e < r.length; e += 1) r[e].m(t, null);
      },
      p(e, s) {
        if (9 & s) {
          let i;
          for (n = Array(e[3]), i = 0; i < n.length; i += 1) {
            const o = be(e, n, i);
            r[i] ? r[i].p(o, s) : ((r[i] = Pe(o)), r[i].c(), r[i].m(t, null));
          }
          for (; i < r.length; i += 1) r[i].d(1);
          r.length = n.length;
        }
      },
      d(e) {
        e && y(t), v(r, e);
      },
    };
  }

  function Me(e) {
    let t,
      n,
      r,
      s,
      i,
      o,
      a,
      l,
      u,
      c,
      d,
      h = e[1].img && Ae(e),
      f = e[1].artist && Le(e);
    return {
      c() {
        (t = w("div")),
          (n = w("a")),
          (r = w("div")),
          h && h.c(),
          (s = x()),
          (i = w("div")),
          f && f.c(),
          (o = x()),
          (a = w("div")),
          (a.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="14"><defs><linearGradient id="logo_hover_20" x1="0%" y1="0%" x2="0%" y2="100%" spreadMethod="pad"><stop offset="0%" stop-color="#ff7700" stop-opacity="1"></stop><stop offset="100%" stop-color="#ff3300" stop-opacity="1"></stop></linearGradient></defs><path class="text-custom-fg" fill="currentColor" d="M10.517 3.742c-.323 0-.49.363-.49.582 0 0-.244 3.591-.244 4.641 0 1.602.15 2.621.15 2.621 0 .222.261.401.584.401.321 0 .519-.179.519-.401 0 0 .398-1.038.398-2.639 0-1.837-.153-4.127-.284-4.592-.112-.395-.313-.613-.633-.613zm-1.996.268c-.323 0-.49.363-.49.582 0 0-.244 3.322-.244 4.372 0 1.602.119 2.621.119 2.621 0 .222.26.401.584.401.321 0 .581-.179.581-.401 0 0 .081-1.007.081-2.608 0-1.837-.206-4.386-.206-4.386 0-.218-.104-.581-.425-.581zm-2.021 1.729c-.324 0-.49.362-.49.582 0 0-.272 1.594-.272 2.644 0 1.602.179 2.559.179 2.559 0 .222.229.463.552.463.321 0 .519-.241.519-.463 0 0 .19-.944.19-2.546 0-1.837-.253-2.657-.253-2.657 0-.22-.104-.582-.425-.582zm-2.046-.358c-.323 0-.49.363-.49.582 0 0-.162 1.92-.162 2.97 0 1.602.069 2.496.069 2.496 0 .222.26.557.584.557.321 0 .581-.304.581-.526 0 0 .143-.936.143-2.538 0-1.837-.206-2.96-.206-2.96 0-.218-.198-.581-.519-.581zm-2.169 1.482c-.272 0-.232.218-.232.218v3.982s-.04.335.232.335c.351 0 .716-.832.716-2.348 0-1.245-.436-2.187-.716-2.187zm18.715-.976c-.289 0-.567.042-.832.116-.417-2.266-2.806-3.989-5.263-3.989-1.127 0-2.095.705-2.931 1.316v8.16s0 .484.5.484h8.526c1.655 0 3-1.55 3-3.155 0-1.607-1.346-2.932-3-2.932zm10.17.857c-1.077-.253-1.368-.389-1.368-.815 0-.3.242-.611.97-.611.621 0 1.106.253 1.542.699l.981-.951c-.641-.669-1.417-1.067-2.474-1.067-1.339 0-2.425.757-2.425 1.99 0 1.338.873 1.736 2.124 2.026 1.281.291 1.513.486 1.513.923 0 .514-.379.738-1.184.738-.65 0-1.26-.223-1.736-.777l-.98.873c.514.757 1.504 1.232 2.639 1.232 1.853 0 2.668-.873 2.668-2.163 0-1.477-1.193-1.845-2.27-2.097zm6.803-2.745c-1.853 0-2.949 1.435-2.949 3.502s1.096 3.501 2.949 3.501c1.852 0 2.949-1.434 2.949-3.501s-1.096-3.502-2.949-3.502zm0 5.655c-1.097 0-1.553-.941-1.553-2.153 0-1.213.456-2.153 1.553-2.153 1.096 0 1.551.94 1.551 2.153.001 1.213-.454 2.153-1.551 2.153zm8.939-1.736c0 1.086-.533 1.756-1.396 1.756-.864 0-1.388-.689-1.388-1.775v-3.897h-1.358v3.916c0 1.978 1.106 3.084 2.746 3.084 1.726 0 2.754-1.136 2.754-3.103v-3.897h-1.358v3.916zm8.142-.89l.019 1.485c-.087-.174-.31-.515-.475-.768l-2.703-3.692h-1.362v6.894h1.401v-2.988l-.02-1.484c.088.175.311.514.475.767l2.79 3.705h1.213v-6.894h-1.339v2.975zm5.895-2.923h-2.124v6.791h2.027c1.746 0 3.474-1.01 3.474-3.395 0-2.484-1.437-3.396-3.377-3.396zm-.097 5.472h-.67v-4.152h.719c1.436 0 2.028.688 2.028 2.076 0 1.242-.651 2.076-2.077 2.076zm7.909-4.229c.611 0 1 .271 1.242.737l1.26-.582c-.426-.883-1.202-1.503-2.483-1.503-1.775 0-3.016 1.435-3.016 3.502 0 2.143 1.191 3.501 2.968 3.501 1.232 0 2.047-.572 2.513-1.533l-1.145-.68c-.358.602-.718.864-1.329.864-1.019 0-1.611-.932-1.611-2.153-.001-1.261.583-2.153 1.601-2.153zm5.17-1.192h-1.359v6.791h4.083v-1.338h-2.724v-5.453zm6.396-.157c-1.854 0-2.949 1.435-2.949 3.502s1.095 3.501 2.949 3.501c1.853 0 2.95-1.434 2.95-3.501s-1.097-3.502-2.95-3.502zm0 5.655c-1.097 0-1.553-.941-1.553-2.153 0-1.213.456-2.153 1.553-2.153 1.095 0 1.55.94 1.55 2.153.001 1.213-.454 2.153-1.55 2.153zm8.557-1.736c0 1.086-.532 1.756-1.396 1.756-.864 0-1.388-.689-1.388-1.775v-3.794h-1.358v3.813c0 1.978 1.106 3.084 2.746 3.084 1.726 0 2.755-1.136 2.755-3.103v-3.794h-1.36v3.813zm5.449-3.907h-2.318v6.978h2.211c1.908 0 3.789-1.037 3.789-3.489 0-2.552-1.565-3.489-3.682-3.489zm-.108 5.623h-.729v-4.266h.783c1.565 0 2.21.706 2.21 2.133.001 1.276-.707 2.133-2.264 2.133z"></path></svg>'),
          (l = x()),
          (u = w("div")),
          (u.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"></path></svg>'),
          M(i, "class", "flex-1 mx-3 text-white"),
          M(a, "class", "text-center flex justify-center"),
          M(r, "class", "p-2 flex items-center rounded-sm"),
          Y(r, "bg-custom-positive", e[2].gotCorrect),
          Y(r, "bg-custom-mg", !e[2].gotCorrect),
          M(n, "href", (c = e[1].url)),
          M(
            n,
            "title",
            (d =
              "Listen to " +
              e[1].artist +
              " - " +
              e[1].title +
              " on SoundCloud")
          ),
          M(n, "class", "no-underline"),
          M(t, "class", "p-3 pb-0 flex-col items-evenly");
      },
      m(e, c) {
        g(e, t, c),
          p(t, n),
          p(n, r),
          h && h.m(r, null),
          p(r, s),
          p(r, i),
          f && f.m(i, null),
          p(r, o),
          p(r, a),
          p(r, l),
          p(r, u);
      },
      p(e, t) {
        e[1].img
          ? h
            ? h.p(e, t)
            : ((h = Ae(e)), h.c(), h.m(r, s))
          : h && (h.d(1), (h = null)),
          e[1].artist
            ? f
              ? f.p(e, t)
              : ((f = Le(e)), f.c(), f.m(i, null))
            : f && (f.d(1), (f = null)),
          4 & t && Y(r, "bg-custom-positive", e[2].gotCorrect),
          4 & t && Y(r, "bg-custom-mg", !e[2].gotCorrect),
          2 & t && c !== (c = e[1].url) && M(n, "href", c),
          2 & t &&
            d !==
              (d =
                "Listen to " +
                e[1].artist +
                " - " +
                e[1].title +
                " on SoundCloud") &&
            M(n, "title", d);
      },
      d(e) {
        e && y(t), h && h.d(), f && f.d();
      },
    };
  }

  function $e(t) {
    let n;
    return {
      c() {
        (n = w("div")), M(n, "class", "w-5 h-5");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function De(e) {
    let t, n, r;

    function s(e, t) {
      return e[0][e[7]].isCorrect || e[0][e[7]].isSkipped
        ? e[0][e[7]].isSkipped
          ? Te
          : void 0
        : Ye;
    }
    let i = s(e),
      o = i && i(e);

    function a(e, t) {
      return e[0][e[7]].isSkipped ? Oe : Ce;
    }
    let l = a(e),
      u = l(e);
    return {
      c() {
        (t = w("div")),
          o && o.c(),
          (n = x()),
          (r = w("div")),
          u.c(),
          M(t, "class", "mr-2"),
          M(r, "class", "flex flex-1 justify-between items-center");
      },
      m(e, s) {
        g(e, t, s), o && o.m(t, null), g(e, n, s), g(e, r, s), u.m(r, null);
      },
      p(e, n) {
        i !== (i = s(e)) &&
          (o && o.d(1), (o = i && i(e)), o && (o.c(), o.m(t, null))),
          l === (l = a(e)) && u
            ? u.p(e, n)
            : (u.d(1), (u = l(e)), u && (u.c(), u.m(r, null)));
      },
      d(e) {
        e && y(t), o && o.d(), e && y(n), e && y(r), u.d();
      },
    };
  }

  function Te(e) {
    let t, n;
    return {
      c() {
        (t = k("svg")),
          (n = k("rect")),
          M(n, "x", "3"),
          M(n, "y", "3"),
          M(n, "width", "18"),
          M(n, "height", "18"),
          M(n, "rx", "2"),
          M(n, "ry", "2"),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "class", "text-custom-mg"),
          M(t, "width", "24"),
          M(t, "height", "24"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "none"),
          M(t, "stroke", "currentColor"),
          M(t, "stroke-width", "2"),
          M(t, "stroke-linecap", "round"),
          M(t, "stroke-linejoin", "round");
      },
      m(e, r) {
        g(e, t, r), p(t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function Ye(e) {
    let t, n, r;
    return {
      c() {
        (t = k("svg")),
          (n = k("line")),
          (r = k("line")),
          M(n, "x1", "18"),
          M(n, "y1", "6"),
          M(n, "x2", "6"),
          M(n, "y2", "18"),
          M(r, "x1", "6"),
          M(r, "y1", "6"),
          M(r, "x2", "18"),
          M(r, "y2", "18"),
          M(t, "class", "text-custom-negative"),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "width", "24"),
          M(t, "height", "24"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "none"),
          M(t, "stroke", "currentColor"),
          M(t, "stroke-width", "2"),
          M(t, "stroke-linecap", "round"),
          M(t, "stroke-linejoin", "round");
      },
      m(e, s) {
        g(e, t, s), p(t, n), p(t, r);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function Ce(e) {
    let t,
      n,
      r = e[0][e[7]].answer + "";
    return {
      c() {
        (t = w("div")), (n = _(r)), M(t, "class", "text-white text-sm");
      },
      m(e, r) {
        g(e, t, r), p(t, n);
      },
      p(e, t) {
        1 & t && r !== (r = e[0][e[7]].answer + "") && $(n, r);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function Oe(t) {
    let n;
    return {
      c() {
        (n = w("div")),
          (n.textContent = "SKIPPED"),
          M(n, "class", "text-custom-mg tracking-widest font-semibold");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function Pe(e) {
    let t, n;

    function r(e, t) {
      return e[7] < e[0].length ? De : $e;
    }
    let s = r(e),
      i = s(e);
    return {
      c() {
        (t = w("div")),
          i.c(),
          (n = x()),
          M(
            t,
            "class",
            "p-2 mb-2 border border-custom-mg flex items-center last:mb-0"
          ),
          Y(t, "border-custom-line", e[7] == e[0].length);
      },
      m(e, r) {
        g(e, t, r), i.m(t, null), p(t, n);
      },
      p(e, o) {
        s === (s = r(e)) && i
          ? i.p(e, o)
          : (i.d(1), (i = s(e)), i && (i.c(), i.m(t, n))),
          1 & o && Y(t, "border-custom-line", e[7] == e[0].length);
      },
      d(e) {
        e && y(t), i.d();
      },
    };
  }

  function Ae(e) {
    let t, n, r;
    return {
      c() {
        (t = w("img")),
          l(t.src, (n = e[1].img)) || M(t, "src", n),
          M(t, "class", "h-14 w-14 "),
          M(t, "alt", (r = e[1].artist + " - " + e[1].title));
      },
      m(e, n) {
        g(e, t, n);
      },
      p(e, s) {
        2 & s && !l(t.src, (n = e[1].img)) && M(t, "src", n),
          2 & s &&
            r !== (r = e[1].artist + " - " + e[1].title) &&
            M(t, "alt", r);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function Le(e) {
    let t,
      n,
      r,
      s,
      i,
      o = e[1].artist + "",
      a = e[1].title + "";
    return {
      c() {
        (t = w("p")),
          (n = _(o)),
          (r = x()),
          (s = w("p")),
          (i = _(a)),
          M(t, "class", ""),
          M(s, "class", "text-sm ");
      },
      m(e, o) {
        g(e, t, o), p(t, n), g(e, r, o), g(e, s, o), p(s, i);
      },
      p(e, t) {
        2 & t && o !== (o = e[1].artist + "") && $(n, o),
          2 & t && a !== (a = e[1].title + "") && $(i, a);
      },
      d(e) {
        e && y(t), e && y(r), e && y(s);
      },
    };
  }

  function Ne(t) {
    let n;

    function r(e, t) {
      return e[2].hasFinished ? Me : Se;
    }
    let s = r(t),
      i = s(t);
    return {
      c() {
        i.c(), (n = b());
      },
      m(e, t) {
        i.m(e, t), g(e, n, t);
      },
      p(e, [t]) {
        s === (s = r(e)) && i
          ? i.p(e, t)
          : (i.d(1), (i = s(e)), i && (i.c(), i.m(n.parentNode, n)));
      },
      i: e,
      o: e,
      d(e) {
        i.d(e), e && y(n);
      },
    };
  }

  function He(e, t, n) {
    let r,
      { userGuesses: s } = t,
      { maxAttempts: i } = t,
      { currentHeardle: o } = t,
      { todaysGame: a } = t;
    return (
      (e.$$set = (e) => {
        "userGuesses" in e && n(0, (s = e.userGuesses)),
          "maxAttempts" in e && n(4, (i = e.maxAttempts)),
          "currentHeardle" in e && n(1, (o = e.currentHeardle)),
          "todaysGame" in e && n(2, (a = e.todaysGame));
      }),
      (e.$$.update = () => {
        21 & e.$$.dirty &&
          n(3, (r = a.hasFinished && a.gotCorrect ? s.length : i));
      }),
      [s, o, a, r, i]
    );
  }
  class Ie extends se {
    constructor(e) {
      super(),
        re(this, e, He, Ne, i, {
          userGuesses: 0,
          maxAttempts: 4,
          currentHeardle: 1,
          todaysGame: 2,
        });
    }
  }

  function We(t) {
    let n, r;
    return {
      c() {
        (n = w("div")),
          (r = w("i")),
          M(r, "class", "gg-loadbar-sound svelte-15swa4o"),
          Y(r, "musicIsPlaying", t[0]),
          M(n, "class", "scale-150 transform relative");
      },
      m(e, t) {
        g(e, n, t), p(n, r);
      },
      p(e, [t]) {
        1 & t && Y(r, "musicIsPlaying", e[0]);
      },
      i: e,
      o: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function Re(e, t, n) {
    let { musicIsPlaying: r } = t;
    return (
      (e.$$set = (e) => {
        "musicIsPlaying" in e && n(0, (r = e.musicIsPlaying));
      }),
      [r]
    );
  }
  class Fe extends se {
    constructor(e) {
      super(),
        re(this, e, Re, We, i, {
          musicIsPlaying: 0,
        });
    }
  }

  function Ge(t) {
    let n;
    return {
      c() {
        n = w("div");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      i: e,
      o: e,
      d(e) {
        e && y(n);
      },
    };
  }
  class Ee extends se {
    constructor(e) {
      super(), re(this, e, null, Ge, i, {});
    }
  }
  const { document: je } = X;

  function Be(e, t, n) {
    const r = e.slice();
    return (r[33] = t[n]), (r[35] = n), r;
  }

  function ze(e, t, n) {
    const r = e.slice();
    return (r[33] = t[n]), (r[35] = n), r;
  }

  function Ue(e, t, n) {
    const r = e.slice();
    return (r[33] = t[n]), (r[35] = n), r;
  }

  function Ve(e) {
    let t, n, r, s;
    const i = [Ze, Ke],
      o = [];

    function a(e, t) {
      return e[13] ? 0 : 1;
    }
    return (
      (n = a(e)),
      (r = o[n] = i[n](e)),
      {
        c() {
          (t = w("div")),
            r.c(),
            M(t, "class", "text-sm text-center text-custom-line p-6");
        },
        m(e, r) {
          g(e, t, r), o[n].m(t, null), (s = !0);
        },
        p(e, s) {
          let l = n;
          (n = a(e)),
            n === l
              ? o[n].p(e, s)
              : (J(),
                q(o[l], 1, 1, () => {
                  o[l] = null;
                }),
                K(),
                (r = o[n]),
                r ? r.p(e, s) : ((r = o[n] = i[n](e)), r.c()),
                Z(r, 1),
                r.m(t, null));
        },
        i(e) {
          s || (Z(r), (s = !0));
        },
        o(e) {
          q(r), (s = !1);
        },
        d(e) {
          e && y(t), o[n].d();
        },
      }
    );
  }

  function Je(e) {
    let t, n, r, s;
    const i = [Qe, Xe],
      o = [];

    function a(e, t) {
      return e[9] ? 1 : 0;
    }
    return (
      (t = a(e)),
      (n = o[t] = i[t](e)),
      {
        c() {
          n.c(), (r = b());
        },
        m(e, n) {
          o[t].m(e, n), g(e, r, n), (s = !0);
        },
        p(e, s) {
          let l = t;
          (t = a(e)),
            t === l
              ? o[t].p(e, s)
              : (J(),
                q(o[l], 1, 1, () => {
                  o[l] = null;
                }),
                K(),
                (n = o[t]),
                n ? n.p(e, s) : ((n = o[t] = i[t](e)), n.c()),
                Z(n, 1),
                n.m(r.parentNode, r));
        },
        i(e) {
          s || (Z(n), (s = !0));
        },
        o(e) {
          q(n), (s = !1);
        },
        d(e) {
          o[t].d(e), e && y(r);
        },
      }
    );
  }

  function Ke(t) {
    let n, r, s, i;
    return (
      (n = new Ee({})),
      {
        c() {
          Q(n.$$.fragment),
            (r = x()),
            (s = w("p")),
            (s.textContent = "loading player");
        },
        m(e, t) {
          ee(n, e, t), g(e, r, t), g(e, s, t), (i = !0);
        },
        p: e,
        i(e) {
          i || (Z(n.$$.fragment, e), (i = !0));
        },
        o(e) {
          q(n.$$.fragment, e), (i = !1);
        },
        d(e) {
          te(n, e), e && y(r), e && y(s);
        },
      }
    );
  }

  function Ze(e) {
    let t, n, r, s, i;
    return (
      (s = new ae({
        props: {
          $$slots: {
            default: [qe],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      s.$on("click", e[22]),
      {
        c() {
          (t = w("p")),
            (t.textContent =
              "There was an error loading the player. Please reload and try\n                again."),
            (n = x()),
            (r = w("div")),
            Q(s.$$.fragment),
            M(t, "class", "mb-3"),
            M(r, "class", "flex justify-center");
        },
        m(e, o) {
          g(e, t, o), g(e, n, o), g(e, r, o), ee(s, r, null), (i = !0);
        },
        p(e, t) {
          const n = {};
          128 & t[1] &&
            (n.$$scope = {
              dirty: t,
              ctx: e,
            }),
            s.$set(n);
        },
        i(e) {
          i || (Z(s.$$.fragment, e), (i = !0));
        },
        o(e) {
          q(s.$$.fragment, e), (i = !1);
        },
        d(e) {
          e && y(t), e && y(n), e && y(r), te(s);
        },
      }
    );
  }

  function qe(e) {
    let t, n;
    return {
      c() {
        (t = k("svg")),
          (n = k("path")),
          M(n, "d", "M2.5 2v6h6M2.66 15.57a10 10 0 1 0 .57-8.38"),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "width", "24"),
          M(t, "height", "24"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "none"),
          M(t, "stroke", "currentColor"),
          M(t, "stroke-width", "2"),
          M(t, "stroke-linecap", "round"),
          M(t, "stroke-linejoin", "round");
      },
      m(e, r) {
        g(e, t, r), p(t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function Xe(t) {
    let n,
      r,
      s,
      i,
      o,
      a,
      l,
      u,
      c = t[4].gameIsActive && et(t);
    return {
      c() {
        (n = w("div")),
          (r = w("div")),
          (s = w("div")),
          (i = w("div")),
          (i.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5L6 9H2v6h4l5 4zM22 9l-6 6M16 9l6 6"></path></svg>'),
          (o = x()),
          (a = w("div")),
          (l = w("p")),
          (l.textContent =
            "Oh no! Seems like today's track is unavailable on\n                            SoundCloud in your location"),
          (u = x()),
          c && c.c(),
          M(i, "class", "mr-3"),
          M(l, "class", "text-sm "),
          M(s, "class", "flex items-center"),
          M(r, "class", "p-3 mb-3 bg-custom-mg rounded-sm"),
          M(n, "class", "max-w-screen-sm w-full mx-auto px-3 flex-col");
      },
      m(e, t) {
        g(e, n, t),
          p(n, r),
          p(r, s),
          p(s, i),
          p(s, o),
          p(s, a),
          p(a, l),
          p(a, u),
          c && c.m(a, null);
      },
      p(e, t) {
        e[4].gameIsActive
          ? c
            ? c.p(e, t)
            : ((c = et(e)), c.c(), c.m(a, null))
          : c && (c.d(1), (c = null));
      },
      i: e,
      o: e,
      d(e) {
        e && y(n), c && c.d();
      },
    };
  }

  function Qe(e) {
    let t,
      n,
      r,
      i,
      o,
      a,
      l,
      u,
      c,
      d,
      h,
      f,
      m,
      v,
      k,
      b,
      S,
      D,
      Y,
      C,
      O,
      P,
      A = mt(e[11]) + "",
      L =
        mt(
          e[15]
            ? e[4].isPrime
              ? e[8].slice(-1)[0]
              : e[2].maxAttempts * e[2].attemptInterval
            : e[3]
        ) + "",
      N = !e[12] && 1 == e[0] && tt();

    function H(e, t) {
      return e[4].isPrime ? rt : nt;
    }
    let I = H(e),
      W = I(e);
    return (
      (D = new ae({
        props: {
          $$slots: {
            default: [ht],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      D.$on("click", function () {
        s(e[18] ? e[6] : e[5]) && (e[18] ? e[6] : e[5]).apply(this, arguments);
      }),
      {
        c() {
          N && N.c(),
            (t = x()),
            (n = w("div")),
            (r = w("div")),
            (i = w("div")),
            (o = w("div")),
            (a = w("div")),
            (l = x()),
            W.c(),
            (u = x()),
            (c = w("div")),
            (d = w("div")),
            (h = w("div")),
            (f = w("div")),
            (m = w("div")),
            (v = w("div")),
            (k = _(A)),
            (b = x()),
            (S = w("div")),
            Q(D.$$.fragment),
            (Y = x()),
            (C = w("div")),
            (O = _(L)),
            M(a, "class", "h-full absolute bg-custom-positive"),
            T(a, "width", e[10] + "%"),
            M(o, "class", "h-full absolute bg-custom-mg overflow-hidden"),
            T(o, "width", (e[15] ? e[16] : "100") + "%"),
            M(i, "class", "h-3 w-full relative overflow-hidden "),
            M(r, "class", "max-w-screen-sm w-full mx-auto px-3 flex-col"),
            M(n, "class", "border-t border-custom-line"),
            M(m, "class", "flex items-center"),
            M(S, "class", "flex justify-center items-center p-1"),
            M(f, "class", "flex justify-between items-center"),
            M(h, "class", "px-3 "),
            M(d, "class", "max-w-screen-sm w-full mx-auto flex-col"),
            M(c, "class", "border-t border-custom-line");
        },
        m(e, s) {
          N && N.m(e, s),
            g(e, t, s),
            g(e, n, s),
            p(n, r),
            p(r, i),
            p(i, o),
            p(o, a),
            p(i, l),
            W.m(i, null),
            g(e, u, s),
            g(e, c, s),
            p(c, d),
            p(d, h),
            p(h, f),
            p(f, m),
            p(m, v),
            p(v, k),
            p(f, b),
            p(f, S),
            ee(D, S, null),
            p(f, Y),
            p(f, C),
            p(C, O),
            (P = !0);
        },
        p(n, r) {
          (e = n)[12] || 1 != e[0]
            ? N && (N.d(1), (N = null))
            : N || ((N = tt()), N.c(), N.m(t.parentNode, t)),
            (!P || 1024 & r[0]) && T(a, "width", e[10] + "%"),
            (!P || 98304 & r[0]) &&
              T(o, "width", (e[15] ? e[16] : "100") + "%"),
            I === (I = H(e)) && W
              ? W.p(e, r)
              : (W.d(1), (W = I(e)), W && (W.c(), W.m(i, null))),
            (!P || 2048 & r[0]) && A !== (A = mt(e[11]) + "") && $(k, A);
          const s = {};
          (262144 & r[0]) | (128 & r[1]) &&
            (s.$$scope = {
              dirty: r,
              ctx: e,
            }),
            D.$set(s),
            (!P || 33052 & r[0]) &&
              L !==
                (L =
                  mt(
                    e[15]
                      ? e[4].isPrime
                        ? e[8].slice(-1)[0]
                        : e[2].maxAttempts * e[2].attemptInterval
                      : e[3]
                  ) + "") &&
              $(O, L);
        },
        i(e) {
          P || (Z(D.$$.fragment, e), (P = !0));
        },
        o(e) {
          q(D.$$.fragment, e), (P = !1);
        },
        d(e) {
          N && N.d(e), e && y(t), e && y(n), W.d(), e && y(u), e && y(c), te(D);
        },
      }
    );
  }

  function et(e) {
    let t, n, r, s, i, o;
    return {
      c() {
        (t = w("p")),
          (n = _("We're really sorry. The answer is ")),
          (r = w("a")),
          (s = _("here")),
          (o = _(
            ", though, if you want to maintain your streak.\n                                We won't tell..."
          )),
          M(r, "href", (i = e[1].url)),
          M(t, "class", "text-xs text-custom-line pt-1");
      },
      m(e, i) {
        g(e, t, i), p(t, n), p(t, r), p(r, s), p(t, o);
      },
      p(e, t) {
        2 & t[0] && i !== (i = e[1].url) && M(r, "href", i);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function tt(e) {
    let t;
    return {
      c() {
        (t = w("div")),
          (t.innerHTML =
            '<p>Turn up the volume and tap to start the track!</p> \n\n                <svg class="mt-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"></path></svg>'),
          M(
            t,
            "class",
            "text-center p-3 flex flex-col items-center text-sm text-custom-line"
          );
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function nt(e) {
    let t;

    function n(e, t) {
      return e[15] ? st : it;
    }
    let r = n(e),
      s = r(e);
    return {
      c() {
        (t = w("div")),
          s.c(),
          M(t, "class", "flex w-full h-full absolute justify-between");
      },
      m(e, n) {
        g(e, t, n), s.m(t, null);
      },
      p(e, i) {
        r === (r = n(e)) && s
          ? s.p(e, i)
          : (s.d(1), (s = r(e)), s && (s.c(), s.m(t, null)));
      },
      d(e) {
        e && y(t), s.d();
      },
    };
  }

  function rt(e) {
    let t,
      n = e[15] && lt(e);
    return {
      c() {
        (t = w("div")), n && n.c(), M(t, "class", "w-full h-full absolute");
      },
      m(e, r) {
        g(e, t, r), n && n.m(t, null);
      },
      p(e, r) {
        e[15]
          ? n
            ? n.p(e, r)
            : ((n = lt(e)), n.c(), n.m(t, null))
          : n && (n.d(1), (n = null));
      },
      d(e) {
        e && y(t), n && n.d();
      },
    };
  }

  function st(e) {
    let t,
      n = Array(e[2].maxAttempts + 1),
      r = [];
    for (let t = 0; t < n.length; t += 1) r[t] = ot(Be(e, n, t));
    return {
      c() {
        for (let e = 0; e < r.length; e += 1) r[e].c();
        t = b();
      },
      m(e, n) {
        for (let t = 0; t < r.length; t += 1) r[t].m(e, n);
        g(e, t, n);
      },
      p(e, s) {
        if (4 & s[0]) {
          const s = n.length;
          let i;
          for (n = Array(e[2].maxAttempts + 1), i = s; i < n.length; i += 1)
            Be(e, n, i),
              r[i] || ((r[i] = ot()), r[i].c(), r[i].m(t.parentNode, t));
          for (i = n.length; i < s; i += 1) r[i].d(1);
          r.length = n.length;
        }
      },
      d(e) {
        v(r, e), e && y(t);
      },
    };
  }

  function it(e) {
    let t,
      n = Array(Math.floor(e[3] / e[2].attemptInterval)),
      r = [];
    for (let t = 0; t < n.length; t += 1) r[t] = at(ze(e, n, t));
    return {
      c() {
        for (let e = 0; e < r.length; e += 1) r[e].c();
        t = b();
      },
      m(e, n) {
        for (let t = 0; t < r.length; t += 1) r[t].m(e, n);
        g(e, t, n);
      },
      p(e, s) {
        if (12 & s[0]) {
          const s = n.length;
          let i;
          for (
            n = Array(Math.floor(e[3] / e[2].attemptInterval)), i = s;
            i < n.length;
            i += 1
          )
            ze(e, n, i),
              r[i] || ((r[i] = at()), r[i].c(), r[i].m(t.parentNode, t));
          for (i = n.length; i < s; i += 1) r[i].d(1);
          r.length = n.length;
        }
      },
      d(e) {
        v(r, e), e && y(t);
      },
    };
  }

  function ot(e) {
    let t;
    return {
      c() {
        (t = w("div")), M(t, "class", "bg-custom-bg w-px h-full");
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function at(e) {
    let t;
    return {
      c() {
        (t = w("div")), M(t, "class", "bg-custom-bg w-px h-full");
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function lt(e) {
    let t,
      n,
      r,
      s,
      i = e[8],
      o = [];
    for (let t = 0; t < i.length; t += 1) o[t] = ut(Ue(e, i, t));
    return {
      c() {
        (t = w("div")), (n = x());
        for (let e = 0; e < o.length; e += 1) o[e].c();
        (r = x()),
          (s = w("div")),
          M(t, "class", "bg-custom-line w-px h-full absolute right-0"),
          M(s, "class", "bg-custom-mg w-px h-full absolute right-0");
      },
      m(e, i) {
        g(e, t, i), g(e, n, i);
        for (let t = 0; t < o.length; t += 1) o[t].m(e, i);
        g(e, r, i), g(e, s, i);
      },
      p(e, t) {
        if (384 & t[0]) {
          let n;
          for (i = e[8], n = 0; n < i.length; n += 1) {
            const s = Ue(e, i, n);
            o[n]
              ? o[n].p(s, t)
              : ((o[n] = ut(s)), o[n].c(), o[n].m(r.parentNode, r));
          }
          for (; n < o.length; n += 1) o[n].d(1);
          o.length = i.length;
        }
      },
      d(e) {
        e && y(t), e && y(n), v(o, e), e && y(r), e && y(s);
      },
    };
  }

  function ut(e) {
    let t;
    return {
      c() {
        (t = w("div")),
          M(t, "class", "w-px h-full absolute"),
          T(t, "left", (e[8][e[35]] / e[8].slice(-1)[0]) * 100 + "%"),
          Y(t, "bg-custom-bg", e[35] < e[7] - 1),
          Y(t, "bg-custom-mg", e[35] > e[7] - 1),
          Y(t, "bg-custom-line", e[35] == e[7] - 1);
      },
      m(e, n) {
        g(e, t, n);
      },
      p(e, n) {
        256 & n[0] &&
          T(t, "left", (e[8][e[35]] / e[8].slice(-1)[0]) * 100 + "%"),
          128 & n[0] && Y(t, "bg-custom-bg", e[35] < e[7] - 1),
          128 & n[0] && Y(t, "bg-custom-mg", e[35] > e[7] - 1),
          128 & n[0] && Y(t, "bg-custom-line", e[35] == e[7] - 1);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function ct(t) {
    let n;
    return {
      c() {
        (n = w("div")),
          (n.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>'),
          M(n, "class", "ml-1 relative z-10");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      i: e,
      o: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function dt(e) {
    let t, n, r;
    return (
      (n = new Fe({
        props: {
          musicIsPlaying: e[18],
        },
      })),
      {
        c() {
          (t = w("div")), Q(n.$$.fragment), M(t, "class", "relative z-10");
        },
        m(e, s) {
          g(e, t, s), ee(n, t, null), (r = !0);
        },
        p(e, t) {
          const r = {};
          262144 & t[0] && (r.musicIsPlaying = e[18]), n.$set(r);
        },
        i(e) {
          r || (Z(n.$$.fragment, e), (r = !0));
        },
        o(e) {
          q(n.$$.fragment, e), (r = !1);
        },
        d(e) {
          e && y(t), te(n);
        },
      }
    );
  }

  function ht(e) {
    let t, n, r, s;
    const i = [dt, ct],
      o = [];

    function a(e, t) {
      return e[18] ? 0 : 1;
    }
    return (
      (n = a(e)),
      (r = o[n] = i[n](e)),
      {
        c() {
          (t = w("div")),
            r.c(),
            M(
              t,
              "class",
              "flex justify-center items-center text-custom-fg h-14 w-14 border-2 rounded-full relative overflow-hidden"
            );
        },
        m(e, r) {
          g(e, t, r), o[n].m(t, null), (s = !0);
        },
        p(e, s) {
          let l = n;
          (n = a(e)),
            n === l
              ? o[n].p(e, s)
              : (J(),
                q(o[l], 1, 1, () => {
                  o[l] = null;
                }),
                K(),
                (r = o[n]),
                r ? r.p(e, s) : ((r = o[n] = i[n](e)), r.c()),
                Z(r, 1),
                r.m(t, null));
        },
        i(e) {
          s || (Z(r), (s = !0));
        },
        o(e) {
          q(r), (s = !1);
        },
        d(e) {
          e && y(t), o[n].d();
        },
      }
    );
  }

  function ft(e) {
    let t, n, r, s, i, o, a, u, c, d, h;
    const f = [Je, Ve],
      m = [];

    function v(e, t) {
      return e[17] ? 0 : 1;
    }
    return (
      (s = v(e)),
      (i = m[s] = f[s](e)),
      {
        c() {
          (t = w("script")),
            (r = x()),
            i.c(),
            (o = x()),
            (a = w("div")),
            (u = w("div")),
            l(t.src, (n = "https://w.soundcloud.com/player/api.js")) ||
              M(t, "src", "https://w.soundcloud.com/player/api.js"),
            M(a, "class", "hidden");
        },
        m(n, i) {
          p(je.head, t),
            g(n, r, i),
            m[s].m(n, i),
            g(n, o, i),
            g(n, a, i),
            p(a, u),
            e[23](u),
            (c = !0),
            d || ((h = S(t, "load", e[19])), (d = !0));
        },
        p(e, t) {
          let n = s;
          (s = v(e)),
            s === n
              ? m[s].p(e, t)
              : (J(),
                q(m[n], 1, 1, () => {
                  m[n] = null;
                }),
                K(),
                (i = m[s]),
                i ? i.p(e, t) : ((i = m[s] = f[s](e)), i.c()),
                Z(i, 1),
                i.m(o.parentNode, o));
        },
        i(e) {
          c || (Z(i), (c = !0));
        },
        o(e) {
          q(i), (c = !1);
        },
        d(n) {
          y(t),
            n && y(r),
            m[s].d(n),
            n && y(o),
            n && y(a),
            e[23](null),
            (d = !1),
            h();
        },
      }
    );
  }

  function mt(e) {
    var t = Math.floor(e / 6e4),
      n = ((e % 6e4) / 1e3).toFixed(0);
    return t + ":" + (n < 10 ? "0" : "") + n;
  }

  function pt(e, t, n) {
    let r, s, i, o, a, l, u;
    const c = A();
    let { currentAttempt: d } = t,
      { currentHeardle: h } = t,
      { config: f } = t,
      { trackDuration: m = 0 } = t,
      { gameState: p } = t,
      g = !1;
    var y;
    let v = 0,
      w = 0,
      k = !1,
      _ = !1,
      x = !1,
      b = !1,
      S = !1;
    const M = () => {
      y.seekTo(0), y.pause();
    };

    function $(e) {
      c("updatePlayerState", {
        musicIsPlaying: e,
      });
    }
    let D;

    function T() {
      (y = SC.Widget("soundcloud" + h.id)).bind(
        SC.Widget.Events.READY,
        function () {
          y.getCurrentSound(function (e) {
            "BLOCK" === e.policy && n(9, (g = !0)),
              c("updateSong", {
                currentSong: e,
              });
          }),
            y.bind(SC.Widget.Events.PAUSE, function () {
              $(!1);
            }),
            y.bind(SC.Widget.Events.PLAY, function () {
              b ||
                (pe("startGame", {
                  name: "startGame",
                }),
                pe("startGame#" + h.id, {
                  name: "startGame",
                }),
                (b = !0)),
                $(!0),
                n(12, (x = !0));
            }),
            y.bind(SC.Widget.Events.PLAY_PROGRESS, function (e) {
              n(11, (w = e.currentPosition)),
                1 == s
                  ? p.isPrime
                    ? (n(10, (v = (w / u) * 100)), w > u && M())
                    : (n(10, (v = (w / (d * f.attemptInterval)) * 100)),
                      w > d * f.attemptInterval && M())
                  : (n(10, (v = (w / m) * 100)), w > m && M());
            });
        }
      );
    }
    P(() => {
      const e = document.createElement("iframe");
      (e.name = h.id),
        (e.id = "soundcloud" + h.id),
        (e.allow = "autoplay"),
        (e.height = 0),
        (e.src =
          "https://w.soundcloud.com/player/?url=" + h.url + "&cache=" + h.id),
        D.appendChild(e),
        (_ = !0),
        k &&
          (setTimeout(() => {
            n(13, (S = !0));
          }, 6e3),
          T());
    });
    return (
      (e.$$set = (e) => {
        "currentAttempt" in e && n(0, (d = e.currentAttempt)),
          "currentHeardle" in e && n(1, (h = e.currentHeardle)),
          "config" in e && n(2, (f = e.config)),
          "trackDuration" in e && n(3, (m = e.trackDuration)),
          "gameState" in e && n(4, (p = e.gameState));
      }),
      (e.$$.update = () => {
        16 & e.$$.dirty[0] && n(18, (r = p.musicIsPlaying)),
          16 & e.$$.dirty[0] && n(15, (s = p.gameIsActive)),
          16 & e.$$.dirty[0] && n(17, (i = p.playerIsReady)),
          1 & e.$$.dirty[0] && n(7, (o = d)),
          4 & e.$$.dirty[0] && n(8, (a = f.attemptIntervalAlt)),
          405 & e.$$.dirty[0] &&
            n(
              16,
              (l = p.isPrime
                ? (a[o - 1] / a.slice(-1)[0]) * 100
                : (d / f.maxAttempts) * 100)
            ),
          384 & e.$$.dirty[0] && (u = a[o - 1]);
      }),
      [
        d,
        h,
        f,
        m,
        p,
        () => {
          y.seekTo(0), y.play();
        },
        M,
        o,
        a,
        g,
        v,
        w,
        x,
        S,
        D,
        s,
        l,
        i,
        r,
        function () {
          (k = !0),
            _ &&
              (setTimeout(() => {
                n(13, (S = !0));
              }, 6e3),
              T());
        },
        () => {
          y.toggle();
        },
        () => {
          y.seekTo(0), y.play();
        },
        () => {
          window.location.reload();
        },
        function (e) {
          H[e ? "unshift" : "push"](() => {
            (D = e), n(14, D);
          });
        },
      ]
    );
  }
  class gt extends se {
    constructor(e) {
      super(),
        re(
          this,
          e,
          pt,
          ft,
          i,
          {
            currentAttempt: 0,
            currentHeardle: 1,
            config: 2,
            trackDuration: 3,
            gameState: 4,
            togglePlayState: 20,
            scPlay: 5,
            scPause: 6,
            resetAndPlay: 21,
          },
          null,
          [-1, -1]
        );
    }
    get togglePlayState() {
      return this.$$.ctx[20];
    }
    get scPlay() {
      return this.$$.ctx[5];
    }
    get scPause() {
      return this.$$.ctx[6];
    }
    get resetAndPlay() {
      return this.$$.ctx[21];
    }
  }
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : "undefined" != typeof self && self;

  function yt(e) {
    var t = {
      exports: {},
    };
    return e(t, t.exports), t.exports;
  }

  function vt(e) {
    throw new Error(
      'Could not dynamically require "' +
        e +
        '". Please configure the dynamicRequireTargets option of @rollup/plugin-commonjs appropriately for this require call to behave properly.'
    );
  }
  var wt = yt(function (e, t) {
      var n;
      (n = function () {
        function e(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }

        function t(t) {
          for (var n = 1; n < arguments.length; n++) {
            var s = null != arguments[n] ? arguments[n] : {};
            n % 2
              ? e(Object(s), !0).forEach(function (e) {
                  r(t, e, s[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
              : e(Object(s)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(s, e)
                  );
                });
          }
          return t;
        }

        function n(e) {
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }

        function r(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }

        function s(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return o(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            i(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }

        function i(e, t) {
          if (e) {
            if ("string" == typeof e) return o(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? o(e, t)
                : void 0
            );
          }
        }

        function o(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var a = function (e) {
            return "string" == typeof e ? document.querySelector(e) : e();
          },
          l = function (e, t) {
            var n = "string" == typeof e ? document.createElement(e) : e;
            for (var r in t) {
              var s = t[r];
              if ("inside" === r) s.append(n);
              else if ("dest" === r) a(s[0]).insertAdjacentElement(s[1], n);
              else if ("around" === r) {
                var i = s;
                i.parentNode.insertBefore(n, i),
                  n.append(i),
                  null != i.getAttribute("autofocus") && i.focus();
              } else r in n ? (n[r] = s) : n.setAttribute(r, s);
            }
            return n;
          },
          u = function (e, t) {
            return (
              (e = e.toString().toLowerCase()),
              t
                ? e
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .normalize("NFC")
                : e
            );
          },
          c = function (e, n) {
            return l(
              "mark",
              t(
                {
                  innerHTML: e,
                },
                "string" == typeof n && {
                  class: n,
                }
              )
            ).outerHTML;
          },
          d = function (e, t) {
            t.input.dispatchEvent(
              new CustomEvent(e, {
                bubbles: !0,
                detail: t.feedback,
                cancelable: !0,
              })
            );
          },
          h = function (e, t, n) {
            var r = n || {},
              s = r.mode,
              i = r.diacritics,
              o = r.highlight,
              a = u(t, i);
            if (((t = t.toString()), (e = u(e, i)), "loose" === s)) {
              var l = (e = e.replace(/ /g, "")).length,
                d = 0,
                h = Array.from(t)
                  .map(function (t, n) {
                    return (
                      d < l && a[n] === e[d] && ((t = o ? c(t, o) : t), d++), t
                    );
                  })
                  .join("");
              if (d === l) return h;
            } else {
              var f = a.indexOf(e);
              if (~f)
                return (
                  (e = t.substring(f, f + e.length)),
                  o ? t.replace(e, c(e, o)) : t
                );
            }
          },
          f = function (e, t) {
            return new Promise(function (n, r) {
              var s;
              return (s = e.data).cache && s.store
                ? n()
                : new Promise(function (e, n) {
                    return "function" == typeof s.src
                      ? s.src(t).then(e, n)
                      : e(s.src);
                  }).then(function (t) {
                    try {
                      return (e.feedback = s.store = t), d("response", e), n();
                    } catch (e) {
                      return r(e);
                    }
                  }, r);
            });
          },
          m = function (e, t) {
            var n = t.data,
              r = t.searchEngine,
              s = [];
            n.store.forEach(function (o, a) {
              var l = function (n) {
                var i = n ? o["name"][n] : o["name"],
                  a =
                    "function" == typeof r
                      ? r(e, i)
                      : h(e, i, {
                          mode: r,
                          diacritics: t.diacritics,
                          highlight: t.resultItem.highlight,
                        });
                if (a) {
                  var l = {
                    match: a,
                    value: o,
                  };
                  n && (l.key = n), s.push(l);
                }
              };
              if (n.keys) {
                var u,
                  c = (function (e, t) {
                    var n =
                      ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
                    if (!n) {
                      if (Array.isArray(e) || (n = i(e))) {
                        n && (e = n);
                        var r = 0,
                          s = function () {};
                        return {
                          s: s,
                          n: function () {
                            return r >= e.length
                              ? {
                                  done: !0,
                                }
                              : {
                                  done: !1,
                                  value: e[r++],
                                };
                          },
                          e: function (e) {
                            throw e;
                          },
                          f: s,
                        };
                      }
                      throw new TypeError(
                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    }
                    var o,
                      a = !0,
                      l = !1;
                    return {
                      s: function () {
                        n = n.call(e);
                      },
                      n: function () {
                        var e = n.next();
                        return (a = e.done), e;
                      },
                      e: function (e) {
                        (l = !0), (o = e);
                      },
                      f: function () {
                        try {
                          a || null == n.return || n.return();
                        } finally {
                          if (l) throw o;
                        }
                      },
                    };
                  })(n.keys);
                try {
                  for (c.s(); !(u = c.n()).done; ) l(u.value);
                } catch (e) {
                  c.e(e);
                } finally {
                  c.f();
                }
              } else l();
            }),
              n.filter && (s = n.filter(s));
            var o = s.slice(0, t.resultsList.maxResults);
            (t.feedback = {
              query: e,
              matches: s,
              results: o,
            }),
              d("results", t);
          },
          p = "aria-expanded",
          g = "aria-activedescendant",
          y = "aria-selected",
          v = function (e, n) {
            const selection = t(
              {
                index: n,
              },
              e.feedback.results[n]
            );
            e.feedback.selection = {
              index: selection.index,
              value: selection.value["name"],
              match: selection.match,
            };
          },
          w = function (e) {
            e.isOpen ||
              ((e.wrapper || e.input).setAttribute(p, !0),
              e.list.removeAttribute("hidden"),
              (e.isOpen = !0),
              d("open", e));
          },
          k = function (e) {
            e.isOpen &&
              ((e.wrapper || e.input).setAttribute(p, !1),
              e.input.setAttribute(g, ""),
              e.list.setAttribute("hidden", ""),
              (e.isOpen = !1),
              d("close", e));
          },
          _ = function (e, t) {
            var n = t.resultItem,
              r = t.list.getElementsByTagName(n.tag),
              i = !!n.selected && n.selected.split(" ");
            if (t.isOpen && r.length) {
              var o,
                a,
                l = t.cursor;
              e >= r.length && (e = 0),
                e < 0 && (e = r.length - 1),
                (t.cursor = e),
                l > -1 &&
                  (r[l].removeAttribute(y),
                  i && (a = r[l].classList).remove.apply(a, s(i))),
                r[e].setAttribute(y, !0),
                i && (o = r[e].classList).add.apply(o, s(i)),
                t.input.setAttribute(g, r[t.cursor].id),
                (t.list.scrollTop =
                  r[e].offsetTop - t.list.clientHeight + r[e].clientHeight + 5),
                (t.feedback.cursor = t.cursor),
                v(t, e),
                d("navigate", t);
            }
          },
          x = function (e) {
            _(e.cursor + 1, e);
          },
          b = function (e) {
            _(e.cursor - 1, e);
          },
          S = function (e, t, n) {
            (n = n >= 0 ? n : e.cursor) < 0 ||
              ((e.feedback.event = t), v(e, n), d("selection", e), k(e));
          };

        function M(e, n) {
          var r = this;
          return new Promise(function (s, i) {
            var o, a;
            return (
              (o =
                n ||
                ((a = e.input) instanceof HTMLInputElement ||
                a instanceof HTMLTextAreaElement
                  ? a.value
                  : a.innerHTML)),
              (function (e, t, n) {
                return t ? t(e) : e.length >= n;
              })((o = e.query ? e.query(o) : o), e.trigger, e.threshold)
                ? f(e, o).then(function (n) {
                    try {
                      return e.feedback instanceof Error
                        ? s()
                        : (m(o, e),
                          e.resultsList &&
                            (function (e) {
                              var n = e.resultsList,
                                r = e.list,
                                s = e.resultItem,
                                i = e.feedback,
                                o = i.matches,
                                a = i.results;
                              if (
                                ((e.cursor = -1),
                                (r.innerHTML = ""),
                                o.length || n.noResults)
                              ) {
                                var u = new DocumentFragment();
                                a.forEach(function (e, n) {
                                  var r = l(
                                    s.tag,
                                    t(
                                      {
                                        id: "".concat(s.id, "_").concat(n),
                                        role: "option",
                                        innerHTML: e.match,
                                        inside: u,
                                      },
                                      s.class && {
                                        class: s.class,
                                      }
                                    )
                                  );
                                  s.element && s.element(r, e);
                                }),
                                  r.append(u),
                                  n.element && n.element(r, i),
                                  w(e);
                              } else k(e);
                            })(e),
                          u.call(r));
                    } catch (e) {
                      return i(e);
                    }
                  }, i)
                : (k(e), u.call(r))
            );

            function u() {
              return s();
            }
          });
        }
        var $ = function (e, t) {
          for (var n in e) for (var r in e[n]) t(n, r);
        };

        function D(e) {
          var n = this;
          return new Promise(function (r, s) {
            var i, o, a;
            if (
              ((i = e.placeHolder),
              (a = {
                role: "combobox",
                "aria-owns": (o = e.resultsList).id,
                "aria-haspopup": !0,
                "aria-expanded": !1,
              }),
              l(
                e.input,
                t(
                  t(
                    {
                      "aria-controls": o.id,
                      "aria-autocomplete": "both",
                    },
                    i && {
                      placeholder: i,
                    }
                  ),
                  !e.wrapper && t({}, a)
                )
              ),
              e.wrapper &&
                (e.wrapper = l(
                  "div",
                  t(
                    {
                      around: e.input,
                      class: e.name + "_wrapper",
                    },
                    a
                  )
                )),
              o &&
                (e.list = l(
                  o.tag,
                  t(
                    {
                      dest: [o.destination, o.position],
                      id: o.id,
                      role: "listbox",
                      hidden: "hidden",
                    },
                    o.class && {
                      class: o.class,
                    }
                  )
                )),
              (function (e) {
                var n,
                  r,
                  s,
                  i = e.events,
                  o =
                    ((n = function () {
                      return M(e);
                    }),
                    (r = e.debounce),
                    function () {
                      clearTimeout(s),
                        (s = setTimeout(function () {
                          return n();
                        }, r));
                    }),
                  a = (e.events = t(
                    {
                      input: t({}, i && i.input),
                    },
                    e.resultsList && {
                      list: i ? t({}, i.list) : {},
                    }
                  )),
                  l = {
                    input: {
                      input: function () {
                        o();
                      },
                      keydown: function (t) {
                        !(function (e, t) {
                          switch (e.keyCode) {
                            case 40:
                            case 38:
                              e.preventDefault(),
                                40 === e.keyCode ? x(t) : b(t);
                              break;
                            case 13:
                              t.submit || e.preventDefault(),
                                t.cursor >= 0 && S(t, e);
                              break;
                            case 9:
                              t.resultsList.tabSelect &&
                                t.cursor >= 0 &&
                                S(t, e);
                              break;
                            case 27:
                              (t.input.value = ""), k(t);
                          }
                        })(t, e);
                      },
                      blur: function () {
                        k(e);
                      },
                    },
                    list: {
                      mousedown: function (e) {
                        e.preventDefault();
                      },
                      click: function (t) {
                        !(function (e, t) {
                          var n = t.resultItem.tag.toUpperCase(),
                            r = Array.from(t.list.querySelectorAll(n)),
                            s = e.target.closest(n);
                          s && s.nodeName === n && S(t, e, r.indexOf(s));
                        })(t, e);
                      },
                    },
                  };
                $(l, function (t, n) {
                  (e.resultsList || "input" === n) &&
                    (a[t][n] || (a[t][n] = l[t][n]));
                }),
                  $(a, function (t, n) {
                    e[t].addEventListener(n, a[t][n]);
                  });
              })(e),
              e.data.cache)
            )
              return f(e).then(function (e) {
                try {
                  return u.call(n);
                } catch (e) {
                  return s(e);
                }
              }, s);

            function u() {
              return d("init", e), r();
            }
            return u.call(n);
          });
        }

        function T(e) {
          var t = e.prototype;
          (t.init = function () {
            D(this);
          }),
            (t.start = function (e) {
              M(this, e);
            }),
            (t.unInit = function () {
              if (this.wrapper) {
                var e = this.wrapper.parentNode;
                e.insertBefore(this.input, this.wrapper),
                  e.removeChild(this.wrapper);
              }
              var t;
              $((t = this).events, function (e, n) {
                t[e].removeEventListener(n, t.events[e][n]);
              });
            }),
            (t.open = function () {
              w(this);
            }),
            (t.close = function () {
              k(this);
            }),
            (t.goTo = function (e) {
              _(e, this);
            }),
            (t.next = function () {
              x(this);
            }),
            (t.previous = function () {
              b(this);
            }),
            (t.select = function (e) {
              S(this, null, e);
            }),
            (t.search = function (e, t, n) {
              return h(e, t, n);
            });
        }
        return function e(t) {
          (this.options = t),
            (this.id = e.instances = (e.instances || 0) + 1),
            (this.name = "autoComplete"),
            (this.wrapper = 1),
            (this.threshold = 1),
            (this.debounce = 0),
            (this.resultsList = {
              position: "afterend",
              tag: "ul",
              maxResults: 5,
            }),
            (this.resultItem = {
              tag: "li",
            }),
            (function (e) {
              var t = e.name,
                r = e.options,
                s = e.resultsList,
                i = e.resultItem;
              for (var o in r)
                if ("object" === n(r[o]))
                  for (var l in (e[o] || (e[o] = {}), r[o])) e[o][l] = r[o][l];
                else e[o] = r[o];
              (e.selector = e.selector || "#" + t),
                (s.destination = s.destination || e.selector),
                (s.id = s.id || t + "_list_" + e.id),
                (i.id = i.id || t + "_result"),
                (e.input = a(e.selector));
            })(this),
            T.call(this, e),
            D(this);
        };
      }),
        (e.exports = n());
    }),
    kt = _t(2);

  function _t(e) {
    if (
      "number" != typeof e ||
      Number.isNaN(e) ||
      e < 1 ||
      e === Number.POSITIVE_INFINITY
    )
      throw new Error("`" + e + "` is not a valid argument for `n-gram`");
    return function (t) {
      var n,
        r,
        s = [];
      if (null == t) return s;
      if (((r = t.slice ? t : String(t)), (n = r.length - e + 1) < 1)) return s;
      for (; n--; ) s[n] = r.slice(n, n + e);
      return s;
    };
  }

  function xt(e, t) {
    let n, r, s, i;
    Array.isArray(e)
      ? (s = e.map((e) => String(e).toLowerCase()))
      : ((n = String(e).toLowerCase()), (s = 1 === n.length ? [n] : kt(n))),
      Array.isArray(t)
        ? (i = t.map((e) => String(e).toLowerCase()))
        : ((r = String(t).toLowerCase()), (i = 1 === r.length ? [r] : kt(r)));
    let o,
      a,
      l,
      u = -1,
      c = 0;
    for (; ++u < s.length; )
      for (o = s[u], l = -1; ++l < i.length; )
        if (((a = i[l]), o === a)) {
          c++, (i[l] = "");
          break;
        }
    return (2 * c) / (s.length + i.length);
  }

  function bt(t) {
    let n, r;
    return {
      c() {
        (n = _("Skip ")), (r = w("span")), (r.textContent = "(+1.5s)");
      },
      m(e, t) {
        g(e, n, t), g(e, r, t);
      },
      p: e,
      d(e) {
        e && y(n), e && y(r);
      },
    };
  }

  function St(e) {
    let t, n, r, s, i;
    return {
      c() {
        (t = _("Skip ")),
          (n = w("span")),
          (r = _("(+")),
          (s = _(e[0])),
          (i = _("s)")),
          M(n, "class", "tracking-normal lowercase"),
          Y(n, "hidden", e[0] >= e[1].maxAttempts);
      },
      m(e, o) {
        g(e, t, o), g(e, n, o), p(n, r), p(n, s), p(n, i);
      },
      p(e, t) {
        1 & t && $(s, e[0]), 3 & t && Y(n, "hidden", e[0] >= e[1].maxAttempts);
      },
      d(e) {
        e && y(t), e && y(n);
      },
    };
  }

  function Mt(e) {
    let t;

    function n(e, t) {
      return e[2] ? St : bt;
    }
    let r = n(e),
      s = r(e);
    return {
      c() {
        s.c(), (t = b());
      },
      m(e, n) {
        s.m(e, n), g(e, t, n);
      },
      p(e, i) {
        r === (r = n(e)) && s
          ? s.p(e, i)
          : (s.d(1), (s = r(e)), s && (s.c(), s.m(t.parentNode, t)));
      },
      d(e) {
        s.d(e), e && y(t);
      },
    };
  }

  function $t(e) {
    let t;
    return {
      c() {
        t = _("Submit");
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function Dt(e) {
    let t, n, s, i, o, a, l, u, c, d, h, f, m, v, _, b, $, T, Y;
    return (
      (v = new ae({
        props: {
          secondary: !0,
          $$slots: {
            default: [Mt],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      v.$on("click", e[10]),
      (b = new ae({
        props: {
          primary: !0,
          $$slots: {
            default: [$t],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      b.$on("click", e[5]),
      {
        c() {
          (t = w("div")),
            (n = w("div")),
            (s = w("div")),
            (i = w("div")),
            (o = k("svg")),
            (a = k("circle")),
            (l = k("line")),
            (u = x()),
            (c = w("input")),
            (d = x()),
            (h = w("div")),
            (h.innerHTML =
              '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'),
            (f = x()),
            (m = w("div")),
            Q(v.$$.fragment),
            (_ = x()),
            Q(b.$$.fragment),
            M(a, "cx", "11"),
            M(a, "cy", "11"),
            M(a, "r", "8"),
            M(l, "x1", "21"),
            M(l, "y1", "21"),
            M(l, "x2", "16.65"),
            M(l, "y2", "16.65"),
            M(o, "class", "absolute top-4 left-3"),
            M(o, "xmlns", "http://www.w3.org/2000/svg"),
            M(o, "width", "18"),
            M(o, "height", "18"),
            M(o, "viewBox", "0 0 24 24"),
            M(o, "fill", "none"),
            M(o, "stroke", "currentColor"),
            M(o, "stroke-width", "2"),
            M(o, "stroke-linecap", "round"),
            M(o, "stroke-linejoin", "round"),
            M(
              c,
              "class",
              "focus:outline-none focus:border-custom-positive w-full p-3 pl-9 placeholder:text-custom-line bg-custom-bg text-custom-fg border-custom-mg"
            ),
            M(c, "id", "autoComplete"),
            M(c, "type", "search"),
            M(c, "dir", "ltr"),
            M(c, "spellcheck", "false"),
            M(c, "autocorrect", "off"),
            M(c, "autocomplete", "off"),
            M(c, "autocapitalize", "off"),
            M(h, "class", "absolute right-3 top-4"),
            M(i, "class", "autoComplete_wrapper relative"),
            M(m, "class", "flex justify-between pt-3"),
            M(n, "class", "m-3 mt-0"),
            M(t, "class", "max-w-screen-sm w-full mx-auto flex-col");
        },
        m(r, y) {
          g(r, t, y),
            p(t, n),
            p(n, s),
            p(s, i),
            p(i, o),
            p(o, a),
            p(o, l),
            p(i, u),
            p(i, c),
            D(c, e[4]),
            p(i, d),
            p(i, h),
            p(s, f),
            p(s, m),
            ee(v, m, null),
            p(m, _),
            ee(b, m, null),
            ($ = !0),
            T || ((Y = [S(c, "input", e[8]), S(h, "click", e[9])]), (T = !0));
        },
        p(e, [t]) {
          16 & t && D(c, e[4]);
          const n = {};
          32775 & t &&
            (n.$$scope = {
              dirty: t,
              ctx: e,
            }),
            v.$set(n);
          const r = {};
          32768 & t &&
            (r.$$scope = {
              dirty: t,
              ctx: e,
            }),
            b.$set(r);
        },
        i(e) {
          $ || (Z(v.$$.fragment, e), Z(b.$$.fragment, e), ($ = !0));
        },
        o(e) {
          q(v.$$.fragment, e), q(b.$$.fragment, e), ($ = !1);
        },
        d(e) {
          e && y(t), te(v), te(b), (T = !1), r(Y);
        },
      }
    );
  }

  function Tt(e, t, n) {
    let r,
      { allOptions: s } = t,
      { currentAttempt: i } = t,
      { config: o } = t,
      { isPrime: a } = t;
    const l = {
        focus() {
          document.getElementById("autoComplete").focus();
        },
        clear() {
          (document.getElementById("autoComplete").value = ""), n(4, (r = ""));
        },
      },
      u = A();

    function c(e) {
      "skipped" == e
        ? (u("guess", {
            guess: r,
            isSkipped: !0,
          }),
          n(4, (r = "")))
        : void 0 !== r && "" !== r.trim()
        ? (u("guess", {
            guess: r,
            isSkipped: !1,
          }),
          n(4, (r = "")))
        : l.focus();
    }
    P(() => {
      !(function () {
        const e = new wt({
          placeHolder: "Know it? Search for the title / game",
          threshold: 1,
          wrapper: !1,
          resultsList: {
            maxResults: 10,
          },
          diacritics: !0,
          noresults: !0,
          searchEngine: "loose",
          data: {
            src: s,
            cache: !1,
            filter: (e) => {
              if (e.length < 6) return e;
              const t = document
                .getElementById("autoComplete")
                .value.toLowerCase();
              return (e = e.sort((e, n) => {
                let r = xt(t, e.value["name"].toLowerCase()),
                  s = xt(t, n.value["name"].toLowerCase());
                return r === s
                  ? e.value["name"] > n.value["name"]
                    ? -1
                    : 1
                  : s > r
                  ? 1
                  : -1;
              }));
            },
          },
          resultItem: {
            highlight: !0,
          },
          events: {
            focus: {
              focus: (e) => {},
            },
            input: {
              selection: (t) => {
                let s = t.detail.selection.value;
                (e.input.value = s), n(4, (r = s));
              },
            },
          },
        });
      })();
    });
    return (
      (e.$$set = (e) => {
        s.pop();
        // console.log('all', s)
        "allOptions" in e && n(6, (s = e.allOptions)),
          "currentAttempt" in e && n(0, (i = e.currentAttempt)),
          "config" in e && n(1, (o = e.config)),
          "isPrime" in e && n(2, (a = e.isPrime));
      }),
      [
        i,
        o,
        a,
        l,
        r,
        c,
        s,
        () => {
          soundcloudWidget.toggle();
        },
        function () {
          (r = this.value), n(4, r);
        },
        () => l.clear(),
        () => c("skipped"),
      ]
    );
  }
  _t(3);
  class Yt extends se {
    constructor(e) {
      super(),
        re(this, e, Tt, Dt, i, {
          allOptions: 6,
          currentAttempt: 0,
          config: 1,
          isPrime: 2,
          guessInput: 3,
          togglePlayState: 7,
        });
    }
    get guessInput() {
      return this.$$.ctx[3];
    }
    get togglePlayState() {
      return this.$$.ctx[7];
    }
  }

  function Ct(e) {
    let t, n, r, s, i, o, a, l, u, d, v, k;
    const b = e[6].default,
      D = c(b, e, e[5], null);
    return {
      c() {
        (t = w("div")),
          (n = w("div")),
          (r = w("div")),
          (s = w("h2")),
          (i = _(e[0])),
          (o = x()),
          (a = w("div")),
          (l = w("button")),
          (l.innerHTML =
            '<svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'),
          (u = x()),
          D && D.c(),
          M(
            s,
            "class",
            "text-sm text-center uppercase text-custom-line font-semibold tracking-widest"
          ),
          M(r, "class", "flex-1 pl-7"),
          (l.autofocus = !0),
          M(l, "class", "border-none text-custom-mg"),
          M(a, "class", "justify-self-end flex"),
          M(n, "class", "flex items-center justify-center mb-6"),
          M(t, "class", "bg-custom-bg border border-custom-mg p-6");
      },
      m(c, h) {
        g(c, t, h),
          p(t, n),
          p(n, r),
          p(r, s),
          p(s, i),
          p(n, o),
          p(n, a),
          p(a, l),
          p(t, u),
          D && D.m(t, null),
          (d = !0),
          l.focus(),
          v || ((k = S(l, "click", e[3])), (v = !0));
      },
      p(e, t) {
        (!d || 1 & t) && $(i, e[0]),
          D &&
            D.p &&
            (!d || 32 & t) &&
            f(D, b, e, e[5], d ? h(b, e[5], t, null) : m(e[5]), null);
      },
      i(e) {
        d || (Z(D, e), (d = !0));
      },
      o(e) {
        q(D, e), (d = !1);
      },
      d(e) {
        e && y(t), D && D.d(e), (v = !1), k();
      },
    };
  }

  function Ot(e) {
    let t, n, r, s, i;
    const o = e[6].default,
      a = c(o, e, e[5], null);
    return {
      c() {
        (t = w("button")),
          (t.innerHTML =
            '<svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'),
          (n = x()),
          a && a.c(),
          (t.autofocus = !0),
          M(t, "class", "border-none text-custom-mg absolute right-3 top-3");
      },
      m(o, l) {
        g(o, t, l),
          g(o, n, l),
          a && a.m(o, l),
          (r = !0),
          t.focus(),
          s || ((i = S(t, "click", e[3])), (s = !0));
      },
      p(e, t) {
        a &&
          a.p &&
          (!r || 32 & t) &&
          f(a, o, e, e[5], r ? h(o, e[5], t, null) : m(e[5]), null);
      },
      i(e) {
        r || (Z(a, e), (r = !0));
      },
      o(e) {
        q(a, e), (r = !1);
      },
      d(e) {
        e && y(t), e && y(n), a && a.d(e), (s = !1), i();
      },
    };
  }

  function Pt(e) {
    let t, n, s, i, o, a, l, u, c;
    const d = [Ot, Ct],
      h = [];

    function f(e, t) {
      return 0 == e[1] ? 0 : 1;
    }
    return (
      (o = f(e)),
      (a = h[o] = d[o](e)),
      {
        c() {
          (t = w("div")),
            (n = x()),
            (s = w("div")),
            (i = w("div")),
            a.c(),
            M(
              t,
              "class",
              "modal-background p-3 flex justify-center svelte-1nyqrwd"
            ),
            M(
              i,
              "class",
              "pointer-events-auto modal w-full mx-auto top-20 relative rounded-sm "
            ),
            e[0] == "music list"
              ? M(
                  i,
                  "style",
                  "width: fit-content; height: calc(100% - 80px); overflow-y: auto;"
                )
              : M(
                  i,
                  "class",
                  "pointer-events-auto modal w-full limit-height mx-auto top-20 relative rounded-sm " +
                    (e[0] == "about" || e[0] == "Filter"
                      ? "max-w-screen-sm"
                      : "max-w-screen-xs")
                ),
            M(i, "role", "dialog"),
            M(i, "aria-modal", "true"),
            M(
              s,
              "class",
              "modal-background p-3 pointer-events-none svelte-1nyqrwd"
            );
        },
        m(r, a) {
          g(r, t, a),
            g(r, n, a),
            g(r, s, a),
            p(s, i),
            h[o].m(i, null),
            e[7](i),
            (l = !0),
            u ||
              ((c = [S(window, "keydown", e[4]), S(t, "click", e[3])]),
              (u = !0));
        },
        p(e, [t]) {
          let n = o;
          (o = f(e)),
            o === n
              ? h[o].p(e, t)
              : (J(),
                q(h[n], 1, 1, () => {
                  h[n] = null;
                }),
                K(),
                (a = h[o]),
                a ? a.p(e, t) : ((a = h[o] = d[o](e)), a.c()),
                Z(a, 1),
                a.m(i, null));
        },
        i(e) {
          l || (Z(a), (l = !0));
        },
        o(e) {
          q(a), (l = !1);
        },
        d(i) {
          i && y(t), i && y(n), i && y(s), h[o].d(), e[7](null), (u = !1), r(c);
        },
      }
    );
  }

  function At(e, t, n) {
    let { $$slots: r = {}, $$scope: s } = t;
    const i = A(),
      o = () => i("close");
    let a,
      { title: l } = t,
      { hasFrame: u } = t;
    const c = "undefined" != typeof document && document.activeElement;
    var d;
    return (
      c &&
        ((d = () => {
          c.focus();
        }),
        O().$$.on_destroy.push(d)),
      (e.$$set = (e) => {
        "title" in e && n(0, (l = e.title)),
          "hasFrame" in e && n(1, (u = e.hasFrame)),
          "$$scope" in e && n(5, (s = e.$$scope));
      }),
      [
        l,
        u,
        a,
        o,
        (e) => {
          if ("Escape" !== e.key) {
            if ("Tab" === e.key) {
              const t = a.querySelectorAll("*"),
                n = Array.from(t).filter((e) => e.tabIndex >= 0);
              let r = n.indexOf(document.activeElement);
              -1 === r && e.shiftKey && (r = 0),
                (r += n.length + (e.shiftKey ? -1 : 1)),
                (r %= n.length),
                n[r].focus(),
                e.preventDefault();
            }
          } else o();
        },
        s,
        r,
        function (e) {
          H[e ? "unshift" : "push"](() => {
            (a = e), n(2, a);
          });
        },
      ]
    );
  }
  class Lt extends se {
    constructor(e) {
      super(),
        re(this, e, At, Pt, i, {
          title: 0,
          hasFrame: 1,
        });
    }
  }

  function Nt(t) {
    let n;
    return {
      c() {
        (n = w("div")),
          (n.innerHTML =
            '<p class="mb-3">A clone of <a href="https://www.heardle.app/" title="Heardle">Heardle</a>, and <a href="https://heardle-kpop.glitch.me/" title="K-Pop Heardle">K-Pop Heardle</a> which can be played infinitely and with ' +
            artist +
            '\'s musics. Based on <a href="https://joywave-heardle.glitch.me/" title="Joywave Heardle">Joywave Heardle</a>.</p> \n\n<p class="mb-3">Each music is randomly chosen from ' +
            artist +
            '\'s soundtrack.</p> \n\n\n\n <p class="mb-3">Want to make your own Heardle? Check out the <a href="https://github.com/nterrien/etrian-infinite-heardle">README</a>' +
            '</p>  \n\n\n\n <p class="text-xs mb-3 text-custom-line">Prepared with <a href="https://developers.soundcloud.com">Soundcloud</a>,\n    <a href="https://svelte.dev">Svelte</a>,\n    <a href="https://tailwindcss.com">Tailwind</a>,\n    <a href="https://fonts.google.com/noto/specimen/Noto+Serif+Display">Noto Serif Display</a>, <a href="https://fonts.google.com/noto/specimen/Noto+Sans">Noto Sans</a>,\n    <a href="https://iconsvg.xyz">IconSVG</a>, <a href="https://momentjs.com">momentjs</a>,\n    <a href="https://tarekraafat.github.io/autoComplete.js/#/">autocomplete.js</a>, and powered by <a href="https://github.com/">Github</a>. <a href="https://omakase.studio" title="Studio Omakase">Served omakase / お任せ</a>. '),
          M(n, "class", "text");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      i: e,
      o: e,
      d(e) {
        e && y(n);
      },
    };
  }
  class Ht extends se {
    constructor(e) {
      super(), re(this, e, null, Nt, i, {});
    }
  }

  function getOneGameOrArtistFromMusic(musicName) {
    const splited = musicName["name"].split(" - ");
    return splited[splited.length - 1].trim();
  }

  function getGameOrArtistFromMusicName(musicNameList) {
    return musicNameList
      .map((a) => getOneGameOrArtistFromMusic(a))
      .filter((m) => m.length > 0);
  }

  function MLt(t) {
    let n;
    const mapUrl = new Map();
    filteredMusicListWithLinks.forEach((m) => mapUrl.set(m.answer, m.url));
    const musicNameListFiltered = filteredMusicNameList.filter(
      (s) => s.id != -1 && mapUrl.has(s.id)
    );
    const artistOrGame = getGameOrArtistFromMusicName(musicNameListFiltered);
    const diffArtist = artistOrGame.map((a, i) =>
      i > 0 ? !(artistOrGame[i - 1] === a) : false
    );
    const allDifferent = diffArtist.reduce((a, b) => a && b);
    return {
      c() {
        (n = w("div")),
          (n.innerHTML =
            '<ul style="list-style-type: disc;margin-left: 20px;font-size: 12px;display: grid;justify-content: center;">' +
            musicNameListFiltered
              .map(
                (s, i) =>
                  "<li" +
                  (diffArtist[i] && !allDifferent
                    ? ' style="margin-top:10px"'
                    : "") +
                  '><a target="_blank" href="' +
                  mapUrl.get(s.id) +
                  '">' +
                  s["name"] +
                  "</a></li>"
              )
              .join("") +
            "</ul>"),
          M(n, "class", "text");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      i: e,
      o: e,
      d(e) {
        e && y(n);
      },
    };
  }
  class MLCt extends se {
    constructor(e) {
      super(), re(this, e, null, MLt, i, {});
    }
  }

  function Filtert(t) {
    let n;
    let games = new Set();
    getGameOrArtistFromMusicName(musicNameList).forEach((m) =>
      games.add(m.trim())
    );
    let explainationGames = w("div");
    explainationGames.innerHTML =
      "Games you check will be selected. Don't forget to click Save after making your selection.";
    let warning = w("div");
    warning.innerHTML = "Warning: saving will reset your streak.";
    let filteredGames = [...removeGames];
    let filteredTags = [...removeTags];
    let gridGames = gridFilterDiv(filteredGames, games);
    let gridTags = gridFilterDiv(filteredTags, allTags);
    let save = w("button");
    save.innerHTML = "Save";
    M(save, "style", "margin-left: auto;margin-right: auto;");
    M(
      save,
      "class",
      "px-2 py-2 uppercase tracking-widest border-none font-semibold text-sm bg-custom-positive"
    );
    M(save, "aria-label", "Save filters");
    save.addEventListener("click", function () {
      saveFilteredGames(filteredGames);
      saveFilteredTags(filteredTags);
    });
    let selectAllGames = w("button");
    selectAllGames.innerHTML = "Select All";
    M(
      selectAllGames,
      "style",
      "margin-left: auto;margin-right: auto;margin-top: 15px;"
    );
    M(
      selectAllGames,
      "class",
      "px-2 py-2 tracking-widest border-none font-semibold text-sm bg-custom-mg"
    );
    M(selectAllGames, "aria-label", "Select All Games");
    selectAllGames.addEventListener("click", function () {
      removeGames = [];
      filteredGames = [];
      y(gridGames);
      y(explainationTags);
      y(ccTags);
      y(gridTags);
      gridGames = gridFilterDiv(filteredGames, games);
      g(n, gridGames, save);
      g(n, explainationTags, save);
      g(n, ccTags, save);
      g(n, gridTags, save);
    });
    let unselectAllGames = w("button");
    unselectAllGames.innerHTML = "Unselect All";
    M(
      unselectAllGames,
      "style",
      "margin-left: auto;margin-right: auto;margin-top: 15px;"
    );
    M(
      unselectAllGames,
      "class",
      "px-2 py-2 tracking-widest border-none font-semibold text-sm bg-custom-mg"
    );
    M(unselectAllGames, "aria-label", "Unselect All Games");
    unselectAllGames.addEventListener("click", function () {
      removeGames = [...games].map((_, index) => index);
      filteredGames = [...removeGames];
      y(gridGames);
      y(explainationTags);
      y(ccTags);
      y(gridTags);
      gridGames = gridFilterDiv(filteredGames, games);
      g(n, gridGames, save);
      g(n, explainationTags, save);
      g(n, ccTags, save);
      g(n, gridTags, save);
    });
    let ccGames = w("div");
    M(ccGames, "class", "button-container");
    p(ccGames, selectAllGames);
    p(ccGames, unselectAllGames);
    let selectAllTags = w("button");
    selectAllTags.innerHTML = "Select All";
    M(
      selectAllTags,
      "style",
      "margin-left: auto;margin-right: auto;margin-top: 15px;"
    );
    M(
      selectAllTags,
      "class",
      "px-2 py-2 tracking-widest border-none font-semibold text-sm bg-custom-mg"
    );
    M(selectAllTags, "aria-label", "Select All Tags");
    selectAllTags.addEventListener("click", function () {
      removeTags = [];
      filteredTags = [];
      y(gridTags);
      gridTags = gridFilterDiv(filteredTags, allTags);
      g(n, gridTags, save);
    });
    let unselectAllTags = w("button");
    unselectAllTags.innerHTML = "Unselect All";
    M(
      unselectAllTags,
      "style",
      "margin-left: auto;margin-right: auto;margin-top: 15px;"
    );
    M(
      unselectAllTags,
      "class",
      "px-2 py-2 tracking-widest border-none font-semibold text-sm bg-custom-mg"
    );
    M(unselectAllTags, "aria-label", "Unselect All Tags");
    unselectAllTags.addEventListener("click", function () {
      removeTags = [...allTags].map((_, index) => index);
      filteredTags = [...removeTags];
      y(gridTags);
      gridTags = gridFilterDiv(filteredTags, allTags);
      g(n, gridTags, save);
    });
    let ccTags = w("span");
    let explainationTags = w("span");
    if (allTags.length > 0) {
      ccTags = w("div");
      M(ccTags, "class", "button-container");
      p(ccTags, selectAllTags);
      p(ccTags, unselectAllTags);
      explainationTags = w("div");
      explainationTags.innerHTML =
        "You can select tags below to filter musics.";
    }
    return {
      c() {
        (n = w("div")),
          M(n, "style", "display: grid;justify-content: center;"),
          M(n, "class", "text");
      },
      m(e, t) {
        g(e, n, t),
          p(n, explainationGames),
          p(n, warning),
          p(n, ccGames),
          p(n, gridGames),
          p(n, explainationTags),
          p(n, ccTags),
          p(n, gridTags),
          p(n, save);
      },
      p: e,
      i: e,
      o: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function gridFilterDiv(filteredGames, games) {
    let grid = w("div");
    M(grid, "class", "filter-form");
    [...games].forEach((g, index) => {
      let checkbox;
      let checkboxInput;
      let checkboxLabel;
      (checkbox = w("div")),
        (checkboxInput = w("input")),
        (checkboxInput.id = g),
        (checkboxInput.name = g),
        (checkboxInput.checked = !filteredGames.includes(index)),
        (checkboxInput.type = "checkbox"),
        (checkboxLabel = w("label")),
        (checkboxLabel.innerHTML = g),
        p(checkbox, checkboxInput),
        p(checkbox, checkboxLabel),
        M(checkbox, "style", "display: flex;gap: 5px;"),
        M(checkboxLabel, "style", "display:flex;align-items: center;"),
        M(checkboxLabel, "for", g),
        checkboxInput.addEventListener("click", function () {
          const find = filteredGames.indexOf(index);
          if (find != -1) {
            filteredGames.splice(find, 1);
          } else {
            filteredGames.push(index);
          }
        }),
        checkboxInput.addEventListener("keypress", function (e) {
          if (e.key === "Enter") {
            checkboxInput.click();
          }
        }),
        p(grid, checkbox);
    });
    return grid;
  }

  class FilterCt extends se {
    constructor(e) {
      super(), re(this, e, null, Filtert, i, {});
    }
  }

  function It(t) {
    let n, r, s, i;
    return {
      c() {
        (n = w("div")),
          (r = w("a")),
          // (r.innerHTML =
          //   '<span class="kofitext svelte-1d3p4dy"><img src="https://storage.ko-fi.com/cdn/cup-border.png" alt="Ko-fi donations" class="kofiimg mr-2 mb-1 svelte-1d3p4dy"/>Support the Heardle devs on Ko-Fi</span><svg xmlns="http://www.w3.org/2000/svg" class="ml-2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M12 5l7 7-7 7"></path></svg>'),
          // M(
          //   r,
          //   "class",
          //   "kofi-button py-2 px-3 rounded-lg items-center flex  svelte-1d3p4dy"
          // ),
          // M(r, "href", "https://ko-fi.com/heardle"),
          // M(r, "title", "Support the Heardle devs on Ko-Fi"),
          M(
            n,
            "class",
            "text-center flex justify-center items-center flex-col "
          );
      },
      m(e, o) {
        g(e, n, o), p(n, r), s || ((i = S(r, "click", t[0])), (s = !0));
      },
      p: e,
      i: e,
      o: e,
      d(e) {
        e && y(n), (s = !1), i();
      },
    };
  }

  function Wt(e) {
    return [
      () => {
        pe("clickKofi", {
          name: "clickKofi",
        });
      },
    ];
  }
  class Rt extends se {
    constructor(e) {
      super(), re(this, e, Wt, It, i, {});
    }
  }

  function Ft(t) {
    let n, r;
    return (
      (n = new Ee({})),
      {
        c() {
          Q(n.$$.fragment);
        },
        m(e, t) {
          ee(n, e, t), (r = !0);
        },
        p: e,
        i(e) {
          r || (Z(n.$$.fragment, e), (r = !0));
        },
        o(e) {
          q(n.$$.fragment, e), (r = !1);
        },
        d(e) {
          te(n, e);
        },
      }
    );
  }

  function Gt(t) {
    let n, r, s, i, o, a, l, u, c, d;
    return {
      c() {
        (n = w("div")),
          (r = w("div")),
          (s = x()),
          (i = w("div")),
          (o = w("p")),
          (a = w("span")),
          (l = x()),
          (u = _(t[0])),
          (c = x()),
          (d = w("div")),
          M(r, "class", "flex justify-center items-center mt-6 mb-1"),
          M(a, "class", "text-custom-negative"),
          M(o, "class", "pb-6"),
          M(i, "class", "text-custom-mg text-xs h-32 overflow-auto relative"),
          M(d, "class", "absolute h-6 bottom-0 w-full border-custom-fg "),
          T(
            d,
            "background",
            "linear-gradient(to bottom, rgba(18,18,18,0), rgba(18,18,18,1)) no-repeat bottom"
          ),
          T(d, "background-size", "100% 100%"),
          M(n, "class", "relative");
      },
      m(e, t) {
        g(e, n, t),
          p(n, r),
          p(n, s),
          p(n, i),
          p(i, o),
          p(o, a),
          p(o, l),
          p(o, u),
          p(n, c),
          p(n, d);
      },
      p(e, t) {
        1 & t && $(u, e[0]);
      },
      i: e,
      o: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function Et(e) {
    let t, n, r, s;
    const i = [Gt, Ft],
      o = [];

    function a(e, t) {
      return e[0] ? 0 : 1;
    }
    return (
      (t = a(e)),
      (n = o[t] = i[t](e)),
      {
        c() {
          n.c(), (r = b());
        },
        m(e, n) {
          o[t].m(e, n), g(e, r, n), (s = !0);
        },
        p(e, [s]) {
          let l = t;
          (t = a(e)),
            t === l
              ? o[t].p(e, s)
              : (J(),
                q(o[l], 1, 1, () => {
                  o[l] = null;
                }),
                K(),
                (n = o[t]),
                n ? n.p(e, s) : ((n = o[t] = i[t](e)), n.c()),
                Z(n, 1),
                n.m(r.parentNode, r));
        },
        i(e) {
          s || (Z(n), (s = !0));
        },
        o(e) {
          q(n), (s = !1);
        },
        d(e) {
          o[t].d(e), e && y(r);
        },
      }
    );
  }

  class Bt extends se {
    constructor(e) {
      super(), re(this, e, null, Et, i, {});
    }
  }

  function zt(t) {
    let n, r, s, i, o, a, l, u, c;
    return (
      (a = new Rt({})),
      (u = new Bt({})),
      {
        c() {
          (n = w("p")),
            (s = w("p")),
            (n.innerHTML =
              'Have questions/run into bugs? DM Beignet0 on Reddit, beignetSan on Twitch, @beignet0.bsky.social on Bluesky, beignet1139 on Discord or create an issue in <a href="https://github.com/nterrien/etrian-infinite-heardle/issues" target="_blank">Github</a>!<br><br>You can also play <a href="https://nterrien.github.io/etrian-heardle/" title="Etrian Odyssey Heardle">Etrian Odyssey Heardle</a> daily.'),
            (r = x()),
            (s = w("p")),
            (i = x()),
            (o = w("div")),
            Q(a.$$.fragment),
            (l = x()),
            Q(u.$$.fragment),
            M(n, "class", "mb-3"),
            M(s, "class", "mb-3"),
            M(o, "class", "pt-6");
        },
        m(e, t) {
          g(e, n, t),
            g(e, r, t),
            g(e, s, t),
            g(e, i, t),
            g(e, o, t),
            ee(a, o, null),
            g(e, l, t),
            ee(u, e, t),
            (c = !0);
        },
        p: e,
        i(e) {
          c || (Z(a.$$.fragment, e), Z(u.$$.fragment, e), (c = !0));
        },
        o(e) {
          q(a.$$.fragment, e), q(u.$$.fragment, e), (c = !1);
        },
        d(e) {
          e && y(n),
            e && y(r),
            e && y(s),
            e && y(i),
            e && y(o),
            te(a),
            e && y(l),
            te(u, e);
        },
      }
    );
  }
  class Ut extends se {
    constructor(e) {
      super(), re(this, e, null, zt, i, {});
    }
  }
  const Vt = {
      attemptInterval: 1.5e3,
      attemptIntervalAlt: [1e3, 2e3, 4e3, 7e3, 11e3, 16e3],
      maxAttempts: 6,
      //   date: date,
    },
    Jt = ["0", "1", "2", "3", "4", "5", "6"];

  function Kt(t) {
    let n, r;
    return {
      c() {
        (n = w("div")), (r = _(t[0])), M(n, "style", "display:none");
      },
      m(e, t) {
        g(e, n, t), p(n, r);
      },
      p(e, [t]) {
        1 & t && $(r, e[0]);
      },
      i: e,
      o: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function Zt(e, t, n) {
    let r = "",
      s = new Date(),
      i =
        3600 * (23 - s.getHours()) +
        60 * (59 - s.getMinutes()) +
        (59 - s.getSeconds());

    function o() {
      let e = Math.floor(i / 3600),
        t = Math.floor((i - 3600 * e) / 60),
        s = Math.floor(i % 60);
      n(
        0,
        (r =
          ("00" + e).slice(-2) +
          ":" +
          ("00" + t).slice(-2) +
          ":" +
          ("00" + s).slice(-2))
      ),
        i--,
        0 == e && 0 == t && 0 == s; // && location.reload(!0) (Reload at midnight)
    }
    return o(), setInterval(o, 1e3), [r];
  }
  class qt extends se {
    constructor(e) {
      super(), re(this, e, Zt, Kt, i, {});
    }
  }

  function Xt(e, t, n) {
    const r = e.slice();
    return (r[10] = t[n]), (r[12] = n), r;
  }

  function Qt(e) {
    let t,
      n,
      r,
      s,
      i,
      o,
      a,
      l,
      u,
      c,
      d,
      h,
      f,
      m,
      k,
      b,
      S,
      D,
      T,
      Y,
      C,
      O,
      P,
      A = Jt[e[3]] + "",
      L = Array(e[1].maxAttempts),
      N = [];
    for (let t = 0; t < L.length; t += 1) N[t] = on(Xt(e, L, t));

    function H(e, t) {
      return 0 == e[3] ? un : e[4] ? ln : an;
    }
    let I = H(e),
      W = I(e),
      R = e[5] && cn();
    return (
      (d = new ae({
        props: {
          primary: !0,
          $$slots: {
            default: [dn],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      d.$on("click", e[6]),
      (S = new qt({})),
      (O = new Rt({})),
      {
        c() {
          (t = w("div")), (n = w("p")), (r = _(A)), (s = x()), (i = w("div"));
          for (let e = 0; e < N.length; e += 1) N[e].c();
          (o = x()),
            (a = w("p")),
            W.c(),
            (l = x()),
            R && R.c(),
            (u = x()),
            (c = w("div")),
            Q(d.$$.fragment),
            (h = x()),
            (f = w("div")),
            (m = w("div")),
            (k = w("button")),
            (k.textContent = "Next"), // Bind on click ?
            (b = x()),
            Q(S.$$.fragment),
            (D = x()),
            (T = w("div")),
            (Y = w("div")),
            (C = x()),
            Q(O.$$.fragment),
            M(n, "class", "text-lg text-custom-line"),
            M(i, "class", "flex justify-center my-2"),
            M(a, "class", "py-1"),
            M(c, "style", "display:none"),
            M(t, "class", "text-center px-3"),
            M(
              k,
              "class",
              "px-2 py-2 uppercase tracking-widest border-none flex items-center font-semibold text-sm svelte-1r54uzk bg-custom-positive"
            ),
            M(k, "aria-label", "Next music"),
            k.addEventListener("click", function () {
              nextMusic();
            });
          M(m, "class", "flex flex-col justify-center items-center mb-6 mx-3"),
            M(Y, "class", "flex justify-center items-center mb-3"),
            M(T, "class", "bg-custom-highlight py-3 pb-5 mx-3 rounded-t-md");
        },
        m(e, y) {
          g(e, t, y), p(t, n), p(n, r), p(t, s), p(t, i);
          for (let e = 0; e < N.length; e += 1) N[e].m(i, null);
          p(t, o),
            p(t, a),
            W.m(a, null),
            p(t, l),
            R && R.m(t, null),
            p(t, u),
            p(t, c),
            ee(d, c, null),
            g(e, h, y),
            g(e, f, y),
            p(f, m),
            p(m, k),
            p(m, b),
            ee(S, m, null),
            p(f, D),
            p(f, T),
            p(T, Y),
            p(T, C),
            ee(O, T, null),
            (P = !0);
        },
        p(e, n) {
          if (((!P || 8 & n) && A !== (A = Jt[e[3]] + "") && $(r, A), 3 & n)) {
            let t;
            for (L = Array(e[1].maxAttempts), t = 0; t < L.length; t += 1) {
              const r = Xt(e, L, t);
              N[t] ? N[t].p(r, n) : ((N[t] = on(r)), N[t].c(), N[t].m(i, null));
            }
            for (; t < N.length; t += 1) N[t].d(1);
            N.length = L.length;
          }
          I === (I = H(e)) && W
            ? W.p(e, n)
            : (W.d(1), (W = I(e)), W && (W.c(), W.m(a, null))),
            e[5]
              ? R || ((R = cn()), R.c(), R.m(t, u))
              : R && (R.d(1), (R = null));
          const s = {};
          8192 & n &&
            (s.$$scope = {
              dirty: n,
              ctx: e,
            }),
            d.$set(s);
        },
        i(e) {
          P ||
            (Z(d.$$.fragment, e),
            Z(S.$$.fragment, e),
            Z(O.$$.fragment, e),
            (P = !0));
        },
        o(e) {
          q(d.$$.fragment, e),
            q(S.$$.fragment, e),
            q(O.$$.fragment, e),
            (P = !1);
        },
        d(e) {
          e && y(t),
            v(N, e),
            W.d(),
            R && R.d(),
            te(d),
            e && y(h),
            e && y(f),
            te(S),
            te(O);
        },
      }
    );
  }

  function en(t) {
    let n;
    return {
      c() {
        (n = w("div")), M(n, "class", "w-4 h-1 m-0.5 bg-custom-fg");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function tn(e) {
    let t;

    function n(e, t) {
      return e[0][e[12]].isSkipped
        ? sn
        : e[0][e[12]].isCorrect || e[0][e[12]].isSkipped
        ? e[0][e[12]].isCorrect
          ? nn
          : void 0
        : rn;
    }
    let r = n(e),
      s = r && r(e);
    return {
      c() {
        s && s.c(), (t = b());
      },
      m(e, n) {
        s && s.m(e, n), g(e, t, n);
      },
      p(e, i) {
        r !== (r = n(e)) &&
          (s && s.d(1), (s = r && r(e)), s && (s.c(), s.m(t.parentNode, t)));
      },
      d(e) {
        s && s.d(e), e && y(t);
      },
    };
  }

  function nn(e) {
    let t;
    return {
      c() {
        (t = w("div")), M(t, "class", "w-4 h-1 m-0.5 bg-custom-positive");
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function rn(e) {
    let t;
    return {
      c() {
        (t = w("div")), M(t, "class", "w-4 h-1 m-0.5 bg-custom-negative");
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function sn(e) {
    let t;
    return {
      c() {
        (t = w("div")), M(t, "class", "w-4 h-1 m-0.5 bg-custom-mg");
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function on(e) {
    let t;

    function n(e, t) {
      return e[12] <= e[0].length - 1 ? tn : en;
    }
    let r = n(e),
      s = r(e);
    return {
      c() {
        s.c(), (t = b());
      },
      m(e, n) {
        s.m(e, n), g(e, t, n);
      },
      p(e, i) {
        r === (r = n(e)) && s
          ? s.p(e, i)
          : (s.d(1), (s = r(e)), s && (s.c(), s.m(t.parentNode, t)));
      },
      d(e) {
        s.d(e), e && y(t);
      },
    };
  }

  function an(e) {
    let t,
      n,
      r,
      s = (e[0].length * e[1].attemptInterval) / 1e3 + "";
    return {
      c() {
        (t = _("You got today's " + artist + " Heardle within the first ")),
          (n = _(s)),
          (r = _(" seconds."));
      },
      m(e, s) {
        g(e, t, s), g(e, n, s), g(e, r, s);
      },
      p(e, t) {
        3 & t &&
          s !== (s = (e[0].length * e[1].attemptInterval) / 1e3 + "") &&
          $(n, s);
      },
      d(e) {
        e && y(t), e && y(n), e && y(r);
      },
    };
  }

  function ln(e) {
    let t,
      n,
      r,
      s,
      i,
      o = e[1].attemptIntervalAlt[e[0].length - 1] / 1e3 + "",
      a = e[1].attemptIntervalAlt[e[0].length - 1] / 1e3 > 1 ? "s" : "";
    return {
      c() {
        (t = _("You got this " + artist + " music within ")),
          (n = _(o)),
          (r = _("\n                second")),
          (s = _(a)),
          (i = _("."));
      },
      m(e, o) {
        g(e, t, o), g(e, n, o), g(e, r, o), g(e, s, o), g(e, i, o);
      },
      p(e, t) {
        3 & t &&
          o !== (o = e[1].attemptIntervalAlt[e[0].length - 1] / 1e3 + "") &&
          $(n, o),
          3 & t &&
            a !==
              (a =
                e[1].attemptIntervalAlt[e[0].length - 1] / 1e3 > 1
                  ? "s"
                  : "") &&
            $(s, a);
      },
      d(e) {
        e && y(t), e && y(n), e && y(r), e && y(s), e && y(i);
      },
    };
  }

  function un(t) {
    let n;
    return {
      c() {
        n = _("You didn't get this " + artist + " music.");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function cn(e) {
    let t;
    return {
      c() {
        (t = w("div")),
          (t.textContent = "Copied to clipboard!"),
          M(
            t,
            "class",
            "tracking-widest uppercase text-xs text-custom-line p-3 pb-0 text-center"
          );
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function dn(e) {
    let t, n, r, s, i, o, a;
    return {
      c() {
        (t = _("Share\n                ")),
          (n = k("svg")),
          (r = k("circle")),
          (s = k("circle")),
          (i = k("circle")),
          (o = k("line")),
          (a = k("line"));
      },
      m(e, l) {
        g(e, t, l), g(e, n, l), p(n, r), p(n, s), p(n, i), p(n, o), p(n, a);
      },
      d(e) {
        e && y(t), e && y(n);
      },
    };
  }

  function hn(e) {
    let t,
      n,
      r = e[2] && Qt(e);
    return {
      c() {
        r && r.c(), (t = b());
      },
      m(e, s) {
        r && r.m(e, s), g(e, t, s), (n = !0);
      },
      p(e, [n]) {
        e[2]
          ? r
            ? (r.p(e, n), 4 & n && Z(r, 1))
            : ((r = Qt(e)), r.c(), Z(r, 1), r.m(t.parentNode, t))
          : r &&
            (J(),
            q(r, 1, 1, () => {
              r = null;
            }),
            K());
      },
      i(e) {
        n || (Z(r), (n = !0));
      },
      o(e) {
        q(r), (n = !1);
      },
      d(e) {
        r && r.d(e), e && y(t);
      },
    };
  }

  function fn(e, t, n) {
    // console.log("current", t);
    let { userGuesses: r } = t,
      { currentHeardle: s } = t,
      { config: i } = t,
      { hasFinished: o } = t,
      { gotCorrect: a } = t,
      { guessRef: l } = t,
      { isPrime: u } = t,
      c = !1;
    return (
      A(),
      (e.$$set = (e) => {
        "userGuesses" in e && n(0, (r = e.userGuesses)),
          "currentHeardle" in e && n(7, (s = e.currentHeardle)),
          "config" in e && n(1, (i = e.config)),
          "hasFinished" in e && n(2, (o = e.hasFinished)),
          "gotCorrect" in e && n(8, (a = e.gotCorrect)),
          "guessRef" in e && n(3, (l = e.guessRef)),
          "isPrime" in e && n(4, (u = e.isPrime));
      }),
      [
        r,
        i,
        o,
        l,
        u,
        c,
        () => {
          let e = artist + " Heardle #" + (s.id + 1),
            t = "";
          a
            ? r.length < i.maxAttempts / 3
              ? (t += "🔊")
              : r.length < (i.maxAttempts / 3) * 2
              ? (t += "🔉")
              : r.length <= i.maxAttempts && (t += "🔈")
            : (t += "🔇");
          for (let e = 0; e < i.maxAttempts; e++)
            r.length > e
              ? 1 == r[e].isCorrect
                ? (t += "🟩")
                : 1 == r[e].isSkipped
                ? (t += "⬛️")
                : (t += "🟥")
              : (t += "⬜️");
          let seconds = i.attemptIntervalAlt[r.length - 1] / 1e3;
          let o =
            e +
            "\n\n" +
            (a
              ? "Got this " +
                artist +
                " Heardle within " +
                seconds +
                " second" +
                (seconds > 1 ? "s" : "")
              : "Failed this " + artist + " Heardle") +
            "\n\n" +
            t +
            "\n\n";
          // + "https://nterrien.github.io/etrian-infinite-heardle/"
          if (
            !navigator.share ||
            !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            ) ||
            /Firefox/i.test(navigator.userAgent)
          )
            return navigator &&
              navigator.clipboard &&
              navigator.clipboard.writeText
              ? (pe("clickShareClipboard", {
                  name: "clickShareClipboard",
                }),
                n(5, (c = !0)),
                setTimeout(() => {
                  n(5, (c = !1));
                }, 2e3),
                navigator.clipboard.writeText(o))
              : Promise.reject(
                  "There was a problem copying your result to the clipboard"
                );
          navigator
            .share({
              text: o,
            })
            .then(() => {
              pe("clickSharePanel", {
                name: "clickSharePanel",
              });
            })
            .catch(console.error);
        },
        s,
        a,
      ]
    );
  }
  class mn extends se {
    constructor(e) {
      super(),
        re(this, e, fn, hn, i, {
          userGuesses: 0,
          currentHeardle: 0,
          config: 1,
          hasFinished: 2,
          gotCorrect: 8,
          guessRef: 3,
          isPrime: 4,
        });
    }
  }

  function pn(e) {
    let t;
    return {
      c() {
        t = _("Play");
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function gn(e) {
    let t, n, r, s, i, o, a, l, u, c, z, v;
    return (
      (u = new ae({
        props: {
          primary: !0,
          $$slots: {
            default: [pn],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      u.$on("click", e[0]),
      {
        c() {
          (t = w("div")),
            (n = w("div")),
            (n.innerHTML =
              '<div class="mr-4 w-8 text-custom-line"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7"><circle cx="5.5" cy="17.5" r="2.5"></circle><circle cx="17.5" cy="15.5" r="2.5"></circle><path d="M8 17V5l12-2v12"></path></svg></div> \n        <div><p>Listen to the intro, then find the correct ' +
              artist +
              " song in the list.</p></div>"),
            (r = x()),
            (s = w("div")),
            (s.innerHTML =
              '<div class="mr-4 w-8 text-custom-line"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg></div> \n        <div><p>Skipped or incorrect attempts unlock more of the\n                intro</p></div>'),
            (i = x()),
            (o = w("div")),
            (o.innerHTML =
              '<div class="mr-4 w-8 text-custom-line"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-7"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg></div> \n        <div><p>Answer in as few tries  as possible and share\n                your score!</p></div>'),
            (a = x()),
            (z = w("div")),
            (z.innerHTML =
              '<div class="mr-4 w-8 text-custom-line"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M 2 5 C 2 3.34375 3.34375 2 5 2 L 19 2 C 20.65625 2 22 3.34375 22 5 L 22 6.171875 C 22 6.96875 21.683594 7.730469 21.121094 8.292969 L 15.292969 14.121094 C 15.105469 14.308594 15 14.5625 15 14.828125 L 15 17.171875 C 15 17.96875 14.683594 18.730469 14.121094 19.292969 L 11.917969 21.496094 C 10.84375 22.570312 9 21.808594 9 20.285156 L 9 14.828125 C 9 14.5625 8.894531 14.308594 8.707031 14.121094 L 2.878906 8.292969 C 2.316406 7.730469 2 6.96875 2 6.171875 Z M 2 5 "></path></svg></div> \n        <div><p>' +
              "Select the game you want to play with." +
              "</p></div>"),
            (v = x()),
            (zz = w("div")),
            (zz.innerHTML =
              '<div class="mr-4 w-8 text-custom-line"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M 2.324219 3.484375 C 1.039062 3.484375 0 4.523438 0 5.804688 C 0 7.089844 1.039062 8.128906 2.324219 8.128906 C 3.605469 8.128906 4.644531 7.089844 4.644531 5.804688 C 4.644531 4.523438 3.605469 3.484375 2.324219 3.484375 Z M 2.324219 9.675781 C 1.039062 9.675781 0 10.71875 0 12 C 0 13.28125 1.039062 14.324219 2.324219 14.324219 C 3.605469 14.324219 4.644531 13.28125 4.644531 12 C 4.644531 10.71875 3.605469 9.675781 2.324219 9.675781 Z M 2.324219 15.871094 C 1.039062 15.871094 0 16.910156 0 18.195312 C 0 19.476562 1.039062 20.515625 2.324219 20.515625 C 3.605469 20.515625 4.644531 19.476562 4.644531 18.195312 C 4.644531 16.910156 3.605469 15.871094 2.324219 15.871094 Z M 7.742188 7.355469 L 22.453125 7.355469 C 23.308594 7.355469 24 6.660156 24 5.804688 C 24 4.949219 23.308594 4.257812 22.453125 4.257812 L 7.742188 4.257812 C 6.886719 4.257812 6.195312 4.949219 6.195312 5.804688 C 6.195312 6.660156 6.886719 7.355469 7.742188 7.355469 Z M 22.453125 10.453125 L 7.742188 10.453125 C 6.886719 10.453125 6.195312 11.144531 6.195312 12 C 6.195312 12.855469 6.886719 13.546875 7.742188 13.546875 L 22.453125 13.546875 C 23.308594 13.546875 24 12.855469 24 12 C 24 11.144531 23.308594 10.453125 22.453125 10.453125 Z M 22.453125 16.644531 L 7.742188 16.644531 C 6.886719 16.644531 6.195312 17.339844 6.195312 18.195312 C 6.195312 19.050781 6.886719 19.742188 7.742188 19.742188 L 22.453125 19.742188 C 23.308594 19.742188 24 19.050781 24 18.195312 C 24 17.339844 23.308594 16.644531 22.453125 16.644531 Z M 22.453125 16.644531 "></path></svg></div> \n        <div><p>' +
              "You can use the top right button to see the list of tracks." +
              "</p></div>"),
            (vv = x()),
            (l = w("div")),
            Q(u.$$.fragment),
            M(n, "class", "flex items-center mb-6"),
            M(s, "class", "flex items-center mb-6"),
            M(o, "class", "flex items-center mb-6"),
            M(z, "class", "flex items-center mb-6"),
            M(zz, "class", "flex items-center mb-6"),
            M(l, "class", "justify-center flex py-2 mt-2");
        },
        m(e, d) {
          g(e, t, d),
            p(t, n),
            p(t, r),
            p(t, s),
            p(t, i),
            p(t, o),
            p(t, a),
            p(t, z),
            p(t, v),
            p(t, zz),
            p(t, vv),
            p(t, l),
            ee(u, l, null),
            (c = !0);
        },
        p(e, [t]) {
          const n = {};
          4 & t &&
            (n.$$scope = {
              dirty: t,
              ctx: e,
            }),
            u.$set(n);
        },
        i(e) {
          c || (Z(u.$$.fragment, e), (c = !0));
        },
        o(e) {
          q(u.$$.fragment, e), (c = !1);
        },
        d(e) {
          e && y(t), te(u);
        },
      }
    );
  }

  function yn(e) {
    const t = A();
    return [() => t("close")];
  }
  class vn extends se {
    constructor(e) {
      super(), re(this, e, yn, gn, i, {});
    }
  }

  function wn(e, t, n) {
    const r = e.slice();
    return (r[15] = t[n]), (r[17] = n), r;
  }

  function kn(t) {
    let n;
    return {
      c() {
        (n = w("div")),
          (n.textContent = "Play daily to see your stats"),
          M(n, "class", "text-center py-3 text-custom-line font-semibold");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function _n(e) {
    let t,
      n,
      r,
      s,
      i,
      o,
      a,
      l,
      u,
      c,
      d,
      h,
      f,
      m,
      k,
      b,
      S,
      D,
      T,
      Y,
      C,
      O,
      P,
      A,
      L,
      N,
      H,
      I,
      W,
      R,
      F,
      G,
      E,
      j,
      B = (e[6] > 0 ? ((e[8] / e[6]) * 100).toFixed(1) : 0) + "",
      z =
        e[11].slice(-1)[0].hasFinished || e[7].length < 2
          ? e[7].slice(-1)[0] + ""
          : e[7].slice(-2)[0] + "",
      U = Math.max(...e[7]) + "",
      V = e[9],
      J = [];

    for (let t = 0; t < V.length; t += 1) J[t] = Mn(wn(e, V, t));
    return {
      c() {
        t = w("div");
        for (let e = 0; e < J.length; e += 1) J[e].c();
        (n = x()),
          (r = w("div")),
          (s = w("div")),
          (i = w("div")),
          (o = _(e[6])),
          (a = x()),
          (l = w("div")),
          (l.textContent = "Played"),
          (u = x()),
          (c = w("div")),
          (d = w("div")),
          (h = _(e[8])),
          (f = x()),
          (m = w("div")),
          (m.textContent = "Won"),
          (k = x()),
          (b = w("div")),
          (S = w("div")),
          (D = _(B)),
          (T = _("%")),
          (Y = x()),
          (C = w("div")),
          (C.textContent = "Win rate"),
          (O = x()),
          (P = w("div")),
          (A = w("div")),
          (L = w("div")),
          (N = _(z)),
          (H = x()),
          (I = w("div")),
          (I.textContent = "Current Streak"),
          (W = x()),
          (R = w("div")),
          (F = w("div")),
          (G = _(U)),
          (E = x()),
          (j = w("div")),
          (j.textContent = "Max Streak"),
          M(t, "class", "flex justify-between py-3"),
          M(i, "class", "text-xl font-semibold"),
          M(l, "class", "text-custom-line text-sm "),
          M(s, "class", "flex-1"),
          M(d, "class", "text-xl font-semibold"),
          M(m, "class", "text-custom-line text-sm "),
          M(c, "class", "flex-1"),
          M(S, "class", "text-xl font-semibold"),
          M(C, "class", "text-custom-line text-sm"),
          M(b, "class", "flex-1"),
          M(r, "class", "flex justify-between text-center w-full py-3"),
          M(L, "class", "text-xl font-semibold"),
          M(I, "class", "text-custom-line text-sm"),
          M(A, "class", "flex-1"),
          M(F, "class", "text-xl font-semibold"),
          M(j, "class", "text-custom-line text-sm"),
          M(R, "class", "flex-1"),
          M(P, "class", "flex justify-between text-center w-full py-3 pt-0");
      },
      m(e, y) {
        g(e, t, y);
        for (let e = 0; e < J.length; e += 1) J[e].m(t, null);
        g(e, n, y),
          g(e, r, y),
          p(r, s),
          p(s, i),
          p(i, o),
          p(s, a),
          p(s, l),
          p(r, u),
          p(r, c),
          p(c, d),
          p(d, h),
          p(c, f),
          p(c, m),
          p(r, k),
          p(r, b),
          p(b, S),
          p(S, D),
          p(S, T),
          p(b, Y),
          p(b, C),
          g(e, O, y),
          g(e, P, y),
          p(P, A),
          p(A, L),
          p(L, N),
          p(A, H),
          p(A, I),
          p(P, W),
          p(P, R),
          p(R, F),
          p(F, G),
          p(R, E),
          p(R, j);
      },
      p(e, n) {
        if (1567 & n) {
          let r;
          for (V = e[9], r = 0; r < V.length; r += 1) {
            const s = wn(e, V, r);
            J[r] ? J[r].p(s, n) : ((J[r] = Mn(s)), J[r].c(), J[r].m(t, null));
          }
          for (; r < J.length; r += 1) J[r].d(1);
          J.length = V.length;
        }
        64 & n && $(o, e[6]),
          256 & n && $(h, e[8]),
          320 & n &&
            B !==
              (B = (e[6] > 0 ? ((e[8] / e[6]) * 100).toFixed(1) : 0) + "") &&
            $(D, B),
          128 & n && z !== (z = e[7].slice(-1)[0] + "") && $(N, z),
          128 & n && U !== (U = Math.max(...e[7]) + "") && $(G, U);
      },
      d(e) {
        e && y(t), v(J, e), e && y(n), e && y(r), e && y(O), e && y(P);
      },
    };
  }

  function xn(e) {
    let t,
      n,
      r,
      s = ((e[17] + 1) * e[0].attemptInterval) / 1e3 + "";
    return {
      c() {
        (t = _("< ")), (n = _(s)), (r = _("s"));
      },
      m(e, s) {
        g(e, t, s), g(e, n, s), g(e, r, s);
      },
      p(e, t) {
        1 & t &&
          s !== (s = ((e[17] + 1) * e[0].attemptInterval) / 1e3 + "") &&
          $(n, s);
      },
      d(e) {
        e && y(t), e && y(n), e && y(r);
      },
    };
  }

  function bn(e) {
    let t,
      n,
      r,
      s,
      i,
      o = e[17] + 1 + "";
    return {
      c() {
        (t = w("span")),
          (n = _(o)),
          (r = _("°")),
          (s = x()),
          (i = w("span")),
          Y(t, "font-semibold", e[17] == e[1] - 1 && e[2]),
          Y(t, "text-custom-positive", e[17] == e[1] - 1 && 0 != e[4] && e[2]),
          Y(t, "text-custom-negative", e[17] == e[1] && 0 == e[4] && e[2]),
          M(i, "class", "text-custom-positive");
      },
      m(e, o) {
        g(e, t, o), p(t, n), p(t, r), g(e, s, o), g(e, i, o);
      },
      p(e, n) {
        6 & n && Y(t, "font-semibold", e[17] == e[1] - 1 && e[2]),
          22 & n &&
            Y(
              t,
              "text-custom-positive",
              e[17] == e[1] - 1 && 0 != e[4] && e[2]
            ),
          22 & n &&
            Y(t, "text-custom-negative", e[17] == e[1] && 0 == e[4] && e[2]);
      },
      d(e) {
        e && y(t), e && y(s), e && y(i);
      },
    };
  }

  function Sn(e) {
    let t, n, r;
    return {
      c() {
        (t = k("svg")),
          (n = k("line")),
          (r = k("line")),
          M(n, "x1", "18"),
          M(n, "y1", "6"),
          M(n, "x2", "6"),
          M(n, "y2", "18"),
          M(r, "x1", "6"),
          M(r, "y1", "6"),
          M(r, "x2", "18"),
          M(r, "y2", "18"),
          M(t, "class", "mx-auto"),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "width", "16"),
          M(t, "height", "16"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "none"),
          M(t, "stroke", "currentColor"),
          M(t, "stroke-width", "2"),
          M(t, "stroke-linecap", "round"),
          M(t, "stroke-linejoin", "round"),
          Y(t, "text-custom-negative", e[17] == e[1] && 0 == e[4] && e[2]);
      },
      m(e, s) {
        g(e, t, s), p(t, n), p(t, r);
      },
      p(e, n) {
        22 & n &&
          Y(t, "text-custom-negative", e[17] == e[1] && 0 == e[4] && e[2]);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function Mn(e) {
    let t,
      n,
      r,
      s,
      i,
      o,
      a,
      l,
      u = (e[15] > 0 ? e[15] : " ") + "";

    function c(e, t) {
      return e[17] === e[9].length - 1 ? Sn : e[3] ? bn : xn;
    }
    let d = c(e),
      h = d(e);
    return {
      c() {
        (t = w("div")),
          (n = w("div")),
          (r = w("div")),
          (s = w("div")),
          (i = _(u)),
          (o = x()),
          (a = w("div")),
          h.c(),
          (l = x()),
          M(s, "class", "h-full absolute text-center w-full py-1 text-xs "),
          Y(s, "bg-custom-positive", e[17] == e[1] - 1 && 0 != e[4] && e[2]),
          Y(s, "bg-custom-negative", e[17] == e[1] && 0 == e[4] && e[2]),
          M(r, "class", "absolute bg-custom-mg w-6"),
          T(r, "height", (e[15] / e[10]) * 100 + "%"),
          M(n, "class", "h-32 relative w-9 flex justify-center items-end"),
          M(
            a,
            "class",
            "text-center border-right text-xs pt-1 text-custom-line"
          ),
          M(t, "class", "flex flex-col items-stretch ");
      },
      m(e, u) {
        g(e, t, u),
          p(t, n),
          p(n, r),
          p(r, s),
          p(s, i),
          p(t, o),
          p(t, a),
          h.m(a, null),
          p(t, l);
      },
      p(e, t) {
        512 & t && u !== (u = (e[15] > 0 ? e[15] : " ") + "") && $(i, u),
          22 & t &&
            Y(s, "bg-custom-positive", e[17] == e[1] - 1 && 0 != e[4] && e[2]),
          22 & t &&
            Y(s, "bg-custom-negative", e[17] == e[1] && 0 == e[4] && e[2]),
          1536 & t && T(r, "height", (e[15] / e[10]) * 100 + "%"),
          d === (d = c(e)) && h
            ? h.p(e, t)
            : (h.d(1), (h = d(e)), h && (h.c(), h.m(a, null)));
      },
      d(e) {
        e && y(t), h.d();
      },
    };
  }

  function $n(t) {
    let n;

    function r(e, t) {
      return e[5] ? _n : kn;
    }
    let s = r(t),
      i = s(t);
    return {
      c() {
        i.c(), (n = b());
      },
      m(e, t) {
        i.m(e, t), g(e, n, t);
      },
      p(e, [t]) {
        s === (s = r(e)) && i
          ? i.p(e, t)
          : (i.d(1), (i = s(e)), i && (i.c(), i.m(n.parentNode, n)));
      },
      i: e,
      o: e,
      d(e) {
        i.d(e), e && y(n);
      },
    };
  }

  function Dn(e, t, n) {
    let { userStats: r } = t,
      { config: s } = t,
      { todaysScore: i } = t,
      { hasFinished: o } = t,
      { daysSince: a } = t,
      l = !1,
      u = 0,
      c = [],
      d = [],
      h = 0,
      { isPrime: f } = t,
      { guessRef: m } = t,
      p = [];
    for (let e = 0; e < s.maxAttempts + 1; e++) p[e] = 0;
    let g = 0;
    if (r.length > 0) {
      l = !0;
      for (let e = 0; e < a + 1; e++) d.push(0);
      for (let e in r)
        !0 === r[e].hasFinished &&
          (++u,
          !0 === r[e].gotCorrect
            ? ((d[r[e].id] = 1),
              ++h,
              ++p[r[e].score - 1],
              p[r[e].score - 1] > g && (g = p[r[e].score - 1]))
            : (++p[s.maxAttempts],
              p[s.maxAttempts] > g && (g = p[s.maxAttempts])));
      c = d.reduce((e, t) => (t ? e[e.length - 1]++ : e.push(0), e), [0]);
    }
    return (
      (e.$$set = (e) => {
        "userStats" in e && n(11, (r = e.userStats)),
          "config" in e && n(0, (s = e.config)),
          "todaysScore" in e && n(1, (i = e.todaysScore)),
          "hasFinished" in e && n(2, (o = e.hasFinished)),
          "daysSince" in e && n(12, (a = e.daysSince)),
          "isPrime" in e && n(3, (f = e.isPrime)),
          "guessRef" in e && n(4, (m = e.guessRef));
      }),
      [s, i, o, f, m, l, u, c, h, p, g, r, a]
    );
  }
  class Tn extends se {
    constructor(e) {
      super(),
        re(this, e, Dn, $n, i, {
          userStats: 11,
          config: 0,
          todaysScore: 1,
          hasFinished: 2,
          daysSince: 12,
          isPrime: 3,
          guessRef: 4,
        });
    }
  }

  var Pn;
  const { document: An, window: Ln } = X;

  function Nn(e) {
    let t, n;
    return (
      (t = new Lt({
        props: {
          hasFrame: e[10].hasFrame,
          title: e[10].title,
          $$slots: {
            default: [Fn],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      t.$on("close", e[20]),
      {
        c() {
          Q(t.$$.fragment);
        },
        m(e, r) {
          ee(t, e, r), (n = !0);
        },
        p(e, n) {
          const r = {};
          1024 & n[0] && (r.hasFrame = e[10].hasFrame),
            1024 & n[0] && (r.title = e[10].title),
            (1392 & n[0]) | (8 & n[1]) &&
              (r.$$scope = {
                dirty: n,
                ctx: e,
              }),
            t.$set(r);
        },
        i(e) {
          n || (Z(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          q(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          te(t, e);
        },
      }
    );
  }

  function Hn(t) {
    let n, r;
    return (
      (n = new vn({})),
      n.$on("close", t[19]),
      {
        c() {
          Q(n.$$.fragment);
        },
        m(e, t) {
          ee(n, e, t), (r = !0);
        },
        p: e,
        i(e) {
          r || (Z(n.$$.fragment, e), (r = !0));
        },
        o(e) {
          q(n.$$.fragment, e), (r = !1);
        },
        d(e) {
          te(n, e);
        },
      }
    );
  }

  function In(e) {
    let t, n;
    return (
      (t = new Tn({
        props: {
          userStats: e[4],
          config: Vt,
          isPrime: e[8].isPrime,
          daysSince: e[11],
          todaysScore: e[6].length,
          guessRef: e[5].gotCorrect ? e[6].length + 1 : 0,
          hasFinished: e[5].hasFinished,
        },
      })),
      {
        c() {
          Q(t.$$.fragment);
        },
        m(e, r) {
          ee(t, e, r), (n = !0);
        },
        p(e, n) {
          const r = {};
          16 & n[0] && (r.userStats = e[4]),
            256 & n[0] && (r.isPrime = e[8].isPrime),
            64 & n[0] && (r.todaysScore = e[6].length),
            96 & n[0] && (r.guessRef = e[5].gotCorrect ? e[6].length + 1 : 0),
            32 & n[0] && (r.hasFinished = e[5].hasFinished),
            t.$set(r);
        },
        i(e) {
          n || (Z(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          q(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          te(t, e);
        },
      }
    );
  }

  function Wn(t) {
    let n, r;
    return (
      (n = new Ut({})),
      {
        c() {
          Q(n.$$.fragment);
        },
        m(e, t) {
          ee(n, e, t), (r = !0);
        },
        p: e,
        i(e) {
          r || (Z(n.$$.fragment, e), (r = !0));
        },
        o(e) {
          q(n.$$.fragment, e), (r = !1);
        },
        d(e) {
          te(n, e);
        },
      }
    );
  }

  function Rn(t) {
    let n, r;
    return (
      (n = new Ht({})),
      {
        c() {
          Q(n.$$.fragment);
        },
        m(e, t) {
          ee(n, e, t), (r = !0);
        },
        p: e,
        i(e) {
          r || (Z(n.$$.fragment, e), (r = !0));
        },
        o(e) {
          q(n.$$.fragment, e), (r = !1);
        },
        d(e) {
          te(n, e);
        },
      }
    );
  }

  function MLn(t) {
    let n, r;
    return (
      (n = new MLCt({})),
      {
        c() {
          Q(n.$$.fragment);
        },
        m(e, t) {
          ee(n, e, t), (r = !0);
        },
        p: e,
        i(e) {
          r || (Z(n.$$.fragment, e), (r = !0));
        },
        o(e) {
          q(n.$$.fragment, e), (r = !1);
        },
        d(e) {
          te(n, e);
        },
      }
    );
  }

  function Filtern(t) {
    let n, r;
    return (
      (n = new FilterCt({})),
      {
        c() {
          Q(n.$$.fragment);
        },
        m(e, t) {
          ee(n, e, t), (r = !0);
        },
        p: e,
        i(e) {
          r || (Z(n.$$.fragment, e), (r = !0));
        },
        o(e) {
          q(n.$$.fragment, e), (r = !1);
        },
        d(e) {
          te(n, e);
        },
      }
    );
  }

  function Fn(e) {
    let t, n, r, s;
    const i = [Rn, Wn, In, Hn, MLn, Filtern],
      o = [];

    function a(e, t) {
      return "info" == e[10].name
        ? 0
        : "donate" == e[10].name
        ? 1
        : "results" == e[10].name
        ? 2
        : "help" == e[10].name
        ? 3
        : "music-list" == e[10].name
        ? 4
        : "filter" == e[10].name
        ? 5
        : -1;
    }
    return (
      ~(t = a(e)) && (n = o[t] = i[t](e)),
      {
        c() {
          n && n.c(), (r = b());
        },
        m(e, n) {
          ~t && o[t].m(e, n), g(e, r, n), (s = !0);
        },
        p(e, s) {
          let l = t;
          (t = a(e)),
            t === l
              ? ~t && o[t].p(e, s)
              : (n &&
                  (J(),
                  q(o[l], 1, 1, () => {
                    o[l] = null;
                  }),
                  K()),
                ~t
                  ? ((n = o[t]),
                    n ? n.p(e, s) : ((n = o[t] = i[t](e)), n.c()),
                    Z(n, 1),
                    n.m(r.parentNode, r))
                  : (n = null));
        },
        i(e) {
          s || (Z(n), (s = !0));
        },
        o(e) {
          q(n), (s = !1);
        },
        d(e) {
          ~t && o[t].d(e), e && y(r);
        },
      }
    );
  }

  function Gn(e) {
    let t, n, r;

    function s(t) {
      e[23](t);
    }
    let i = {
      isPrime: e[8].isPrime,
      config: Vt,
      allOptions: e[9],
      currentAttempt: e[6].length + 1,
    };
    return (
      void 0 !== e[7] && (i.guessInput = e[7]),
      (t = new Yt({
        props: i,
      })),
      e[22](t),
      H.push(() =>
        (function (e, t, n) {
          const r = e.$$.props[t];
          void 0 !== r && ((e.$$.bound[r] = n), n(e.$$.ctx[r]));
        })(t, "guessInput", s)
      ),
      t.$on("guess", e[15]),
      {
        c() {
          Q(t.$$.fragment);
        },
        m(e, n) {
          ee(t, e, n), (r = !0);
        },
        p(e, r) {
          const s = {};
          var i;
          256 & r[0] && (s.isPrime = e[8].isPrime),
            512 & r[0] && (s.allOptions = e[9]),
            64 & r[0] && (s.currentAttempt = e[6].length + 1),
            !n &&
              128 & r[0] &&
              ((n = !0),
              (s.guessInput = e[7]),
              (i = () => (n = !1)),
              W.push(i)),
            t.$set(s);
        },
        i(e) {
          r || (Z(t.$$.fragment, e), (r = !0));
        },
        o(e) {
          q(t.$$.fragment, e), (r = !1);
        },
        d(n) {
          e[22](null), te(t, n);
        },
      }
    );
  }

  function En(e) {
    let t, n, s, i, o, a, l, u, c, d, h, f, m, v, k, _, b, $, D, Y, C, O, P, A;
    G(e[18]),
      (l = new me({
        props: {
          properties: ["G-3QSG4MYSLD"],
        },
      }));
    let L = e[10].isActive && Nn(e);
    (f = new xe({})),
      f.$on("modal", e[16]),
      (_ = new Ie({
        props: {
          userGuesses: e[6],
          maxAttempts: Vt.maxAttempts,
          currentHeardle: e[2],
          todaysGame: e[5],
        },
      })),
      ($ = new mn({
        props: {
          config: Vt,
          userGuesses: e[6],
          currentHeardle: e[2],
          hasFinished: e[5].hasFinished,
          gotCorrect: e[5].gotCorrect,
          isPrime: e[8].isPrime,
          guessRef: e[5].gotCorrect ? e[6].length : 0,
        },
      }));
    let N = {
      config: Vt,
      gameState: e[8],
      currentHeardle: e[2],
      trackDuration: e[2].duration,
      currentAttempt: e[6].length + 1,
    };
    (Y = new gt({
      props: N,
    })),
      e[21](Y),
      Y.$on("updateSong", e[13]),
      Y.$on("updatePlayerState", e[14]);
    let H = !e[5].hasFinished && e[8].gameIsActive && Gn(e);
    return {
      c() {
        (t = w("meta")),
          (n = w("link")),
          (s = w("link")),
          (i = w("link")),
          (o = w("link")),
          (a = x()),
          Q(l.$$.fragment),
          (u = x()),
          (c = w("main")),
          L && L.c(),
          (d = x()),
          (h = w("div")),
          Q(f.$$.fragment),
          (m = x()),
          (v = w("div")),
          (k = w("div")),
          Q(_.$$.fragment),
          (b = x()),
          Q($.$$.fragment),
          (D = x()),
          Q(Y.$$.fragment),
          (C = x()),
          H && H.c(),
          (An.title = artist + " Infinite Heardle"),
          M(t, "name", "description"),
          M(
            t,
            "content",
            "Guess the " +
              artist +
              " music from the intro in as few tries as possible"
          ),
          M(o, "rel", "manifest"),
          M(o, "href", "/site.webmanifest"),
          M(h, "class", "flex-none"),
          M(
            k,
            "class",
            "max-w-screen-sm w-full mx-auto h-full flex flex-col justify-between overflow-auto"
          ),
          M(v, "class", "w-full flex flex-col flex-grow relative"),
          M(
            c,
            "class",
            "bg-custom-bg text-custom-fg overflow-auto flex flex-col"
          ),
          T(c, "height", e[3] + "px");
      },
      m(r, y) {
        p(An.head, t),
          p(An.head, n),
          p(An.head, s),
          p(An.head, i),
          p(An.head, o),
          g(r, a, y),
          ee(l, r, y),
          g(r, u, y),
          g(r, c, y),
          L && L.m(c, null),
          p(c, d),
          p(c, h),
          ee(f, h, null),
          p(c, m),
          p(c, v),
          p(v, k),
          ee(_, k, null),
          p(k, b),
          ee($, k, null),
          p(c, D),
          ee(Y, c, null),
          p(c, C),
          H && H.m(c, null),
          (O = !0),
          P ||
            ((A = [S(Ln, "resize", e[17]), S(Ln, "resize", e[18])]), (P = !0));
      },
      p(e, t) {
        e[10].isActive
          ? L
            ? (L.p(e, t), 1024 & t[0] && Z(L, 1))
            : ((L = Nn(e)), L.c(), Z(L, 1), L.m(c, d))
          : L &&
            (J(),
            q(L, 1, 1, () => {
              L = null;
            }),
            K());
        const n = {};
        64 & t[0] && (n.userGuesses = e[6]),
          4 & t[0] && (n.currentHeardle = e[2]),
          32 & t[0] && (n.todaysGame = e[5]),
          _.$set(n);
        const r = {};
        64 & t[0] && (r.userGuesses = e[6]),
          4 & t[0] && (r.currentHeardle = e[2]),
          32 & t[0] && (r.hasFinished = e[5].hasFinished),
          32 & t[0] && (r.gotCorrect = e[5].gotCorrect),
          256 & t[0] && (r.isPrime = e[8].isPrime),
          96 & t[0] && (r.guessRef = e[5].gotCorrect ? e[6].length : 0),
          $.$set(r);
        const s = {};
        256 & t[0] && (s.gameState = e[8]),
          4 & t[0] && (s.currentHeardle = e[2]),
          4 & t[0] && (s.trackDuration = e[2].duration),
          64 & t[0] && (s.currentAttempt = e[6].length + 1),
          Y.$set(s),
          !e[5].hasFinished && e[8].gameIsActive
            ? H
              ? (H.p(e, t), 288 & t[0] && Z(H, 1))
              : ((H = Gn(e)), H.c(), Z(H, 1), H.m(c, null))
            : H &&
              (J(),
              q(H, 1, 1, () => {
                H = null;
              }),
              K()),
          (!O || 8 & t[0]) && T(c, "height", e[3] + "px");
      },
      i(e) {
        O ||
          (Z(l.$$.fragment, e),
          Z(L),
          Z(f.$$.fragment, e),
          Z(_.$$.fragment, e),
          Z($.$$.fragment, e),
          Z(Y.$$.fragment, e),
          Z(H),
          (O = !0));
      },
      o(e) {
        q(l.$$.fragment, e),
          q(L),
          q(f.$$.fragment, e),
          q(_.$$.fragment, e),
          q($.$$.fragment, e),
          q(Y.$$.fragment, e),
          q(H),
          (O = !1);
      },
      d(d) {
        y(t),
          y(n),
          y(s),
          y(i),
          y(o),
          d && y(a),
          te(l, d),
          d && y(u),
          d && y(c),
          L && L.d(),
          te(f),
          te(_),
          te($),
          e[21](null),
          te(Y),
          H && H.d(),
          (P = !1),
          r(A);
      },
    };
  }

  function jn(e, t, n) {
    let r, s, i, o;
    u(e, Cn, (e) => n(26, (r = [...filteredMusicNameList]))),
      u(e, On, (e) => n(27, (s = e)));
    let a = currentIndex,
      l = {
        url: s[a].url,
        correctAnswer: s[a].answer,
        id: a,
        guessList: [],
        hasFinished: !1,
        hasStarted: !1,
      };
    // console.log("a", l);
    var c, d;

    // EventListener, originnally here to reload the page if the day changed
    // void 0 !== document.hidden ?
    //     ((c = "hidden"), (d = "visibilitychange")) :
    //     void 0 !== document.msHidden ?
    //     ((c = "msHidden"), (d = "msvisibilitychange")) :
    //     void 0 !== document.webkitHidden &&
    //     ((c = "webkitHidden"), (d = "webkitvisibilitychange")),
    //     void 0 === document.addEventListener ||
    //     void 0 === c ||
    //     document.addEventListener(
    //         d,
    //         function() {
    //             document[c] || a === currentIndex || location.reload(!0);
    //         }, !1
    //     );
    let h,
      f,
      m = 0;

    function p() {
      n(3, (m = window.innerHeight));
    }
    P(() => {
      p();
    });
    if (null == localStorage.getItem("userStats")) {
      (h = []), localStorage.setItem("userStats", JSON.stringify(h));
      firstLoad = false;
    } else {
      if (firstLoad) {
        h = [];
        filterMusicLists();
        firstLoad = false;
      } else {
        h = JSON.parse(localStorage.getItem("userStats"));
      }
      f = h.find((e) => e.id === l.id);
    }
    void 0 === f &&
      ((f = l),
      h.push(f),
      localStorage.setItem("userStats", JSON.stringify(h)));
    let g,
      y,
      v = f.guessList,
      w = {
        gameIsActive: !1,
        musicIsPlaying: !1,
        playerIsReady: !1,
        // isPrime: a >= 7, // C'est le bug bizarre des 9 secondes ?
        isPrime: true,
      };
    let k = {
      isActive: !1,
      hasFrame: !0,
      title: "",
      name: "",
    };

    function _(e, t, r) {
      n(10, (k.isActive = !0), k),
        n(10, (k.name = e), k),
        n(10, (k.title = t), k),
        n(10, (k.hasFrame = r), k);
    }

    null == localStorage.getItem("firstTime") &&
      (_("help", "how to play"), localStorage.setItem("firstTime", "false"));
    return [
      i,
      o,
      l,
      m,
      h,
      f,
      v,
      g,
      w,
      y,
      k,
      a,
      p,
      function (e) {
        let t = e.detail.currentSong;
        let musicString = musicNameList.find((a) => a.id == l.correctAnswer);
        // console.log("current song", l);
        n(2, (l.artist = musicString["name"].split(" - ")[1]), l),
          n(2, (l.title = musicString["name"].split(" - ")[0]), l),
          n(2, (l.img = t.artwork_url), l),
          n(2, (l.duration = t.duration), l),
          n(2, (l.genre = t.genre), l),
          n(2, (l.date = t.release_date), l),
          (function (e, t, n) {
            e.set(n);
          })(Cn, (r = [...r, l.correctAnswer]), r),
          n(9, (y = r)),
          n(8, (w.playerIsReady = !0), w),
          f.hasFinished || n(8, (w.gameIsActive = !0), w);
      },
      function (e) {
        l.hasStarted ||
          (pe("startGame#" + l.id, {
            name: "startGame",
          }),
          pe("startGame", {
            name: "startGame",
          }),
          n(2, (l.hasStarted = !0), l)),
          n(8, (w.musicIsPlaying = e.detail.musicIsPlaying), w);
      },
      function (e) {
        let t = e.detail.guess,
          r = e.detail.isSkipped,
          s = !1;
        var o;
        var findMusic = musicNameList.find((m) => m["name"] == t);
        r ||
          !findMusic ||
          findMusic.id != l.correctAnswer ||
          ((s = !0),
          pe("correctGuess", {
            name: "correctGuess",
          }),
          pe("correctGuess#" + l.id, {
            name: "correctGuess",
          })),
          r
            ? (pe("skippedGuess", {
                name: "skippedGuess",
              }),
              pe("skippedGuess#" + l.id, {
                name: "skippedGuess",
              }))
            : s ||
              (pe("incorrectGuess", {
                name: "incorrectGuess",
              }),
              pe("incorrectGuess#" + l.id, {
                name: "incorrectGuess",
              })),
          n(
            6,
            (v = v.concat({
              answer: e.detail.guess,
              isCorrect: s,
              isSkipped: r,
            }))
          ),
          n(5, (f.guessList = v), f),
          localStorage.setItem("userStats", JSON.stringify(h)),
          (v.length != Vt.maxAttempts && 1 != s) ||
            ((o = s),
            n(8, (w.gameIsActive = !1), w),
            n(5, (f.hasFinished = !0), f),
            n(5, (f.gotCorrect = o), f),
            n(5, (f.score = v.length), f),
            localStorage.setItem("userStats", JSON.stringify(h)),
            i.resetAndPlay(),
            o
              ? (pe("wonGame", {
                  name: "won",
                }),
                pe("wonGame#" + l.id, {
                  name: "won",
                }))
              : (pe("lostGame", {
                  name: "lost",
                }),
                pe("lostGame#" + l.id, {
                  name: "lost",
                })),
            pe("endGame" + l.id + "in" + v.length, {
              name: "#" + v.length,
            }),
            pe("endGame", {
              name: "endGame",
            }),
            pe("endGame#" + l.id, {
              name: "endGame",
            }),
            pe("gameStats#" + l.id, {
              name: v,
            }));
      },
      function (e) {
        _(e.detail.name, e.detail.title, e.detail.hasFrame);
      },
      () => {},
      function () {
        n(3, (m = Ln.innerHeight));
      },
      () => n(10, (k.isActive = !1), k),
      () => n(10, (k.isActive = !1), k),
      function (e) {
        H[e ? "unshift" : "push"](() => {
          (i = e), n(0, i);
        });
      },
      function (e) {
        H[e ? "unshift" : "push"](() => {
          (o = e), n(1, o);
        });
      },
      function (e) {
        (g = e), n(7, g);
      },
    ];
  }
  return new (class extends se {
    constructor(e) {
      super(), re(this, e, jn, En, i, {}, null, [-1, -1]);
    }
  })({
    target: document.body,
    props: {},
  });
})();
