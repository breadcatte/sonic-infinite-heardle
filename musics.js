// Set to [] if you don't want to use the tag system
const allTags = ["Battle", "City", "Dungeon", "Event"];

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