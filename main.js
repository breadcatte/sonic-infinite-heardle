var app = (function () {
  var artist = "Sonic";
  var twitter = "LaughAndPeace11";
  var currentIndex = 0;
  var zipUrl =
    ""; // Set to '' if you don't wnat to allow download of the zip

var musicNameList = [
	"Introduction ...featuring 'Open Your Heart' - Sonic Adventure",
	"Bridge Zone - Sonic the Hedgehog (8-bit)",
	"Metropolitan Highway (Dream Racing) - Mario & Sonic at the Tokyo 2020 Olympic Games",
	"Title Screen - Sonic the Hedgehog Genesis (GBA)",
	"Unawakening Float (Night Palace) - Sonic and the Secret Rings",
	"Flying Battery Zone Act 1 - Sonic Mania",
	"Robotnik Winter Zone - Sonic Triple Trouble",
	"Sky Babylon Act 1 - Sonic Rush Adventure",
	"White Space - Sonic Generations (consoles/PC)",
	"Lava Powerhouse - Sonic Spinball (16-bit)",
	"Windmill Isle (Day) - Sonic Unleashed",
	"Green Grove Zone Act 1 - Sonic 3D Blast (16-bit)",
	"History - Sonic Mega Collection",
	"Green Hill Zone - Sonic the Hedgehog (16-bit)",
	"Chao Kindergarten - Sonic Adventure 2",
	"Whisker & Johnny (boss) - Sonic Rush Adventure",
	"Surprise! (Metal Sonic boss) - Knuckles' Chaotix",
	"Special Stage - Sonic Pocket Adventure",
	"Angel Island Zone Act 2 - Sonic 3 & Knuckles",
	"His World (Crush 40 version) - Sonic 06",
	"Chrome Gadget - Sonic 3 & Knuckles",
	"Can You Feel the Sunshine? (for Seaside Hill) - Sonic & Sega All-Stars Racing (DS)",
	"Just Another Day (good ending) - Knuckles' Chaotix",
	"Sonic Boom (ending credits version) - Sonic CD (US)",
	"Mystic Mansion - Sonic Heroes",
	"Ice Cap Zone Act 1 - Sonic 3 & Knuckles",
	"Poloy Forest - Tails Adventure",
	"E.G.G.M.A.N. ...Theme of Dr. Eggman - Sonic Adventure 2",
	"The Final Fight - Sonic 3D Blast (32-bit)",
	"Special Stage - Sonic Colors (DS)",
	"Options - Sonic and the Black Knight",
	"Asteroid Coaster Act 3 - Sonic Colors (Wii)",
	"Open Your Heart - Sonic Pinball Party",
	"Manual - Sonic Jam",
	"Invincibility - Sonic 3",
	"Ending Credits - SegaSonic the Hedgehog",
	"Wave Ocean ~The Inlet~ - Sonic 06",
	"Stardust Speedway Zone Act 1 - Sonic Mania",
	"Palmtree Panic (Present) - Sonic CD (JP/EU)",
	"Look-a-like - Sonic OVA",
	"Demo - Sonic Mega Collection",
	"Let the Speed Mend It (Sand Oasis) - Sonic and the Secret Rings",
	"Boss - Sonic the Hedgehog (16-bit)",
	"Seaside Hill: Act 2 (Modern) - Sonic Generations (consoles/PC)",
	"Palmtree Panic (Bad Future) - Sonic CD (JP/EU)",
	"Bonus Stage - Sonic Spinball (8-bit)",
	"Knight of the Wind - Sonic and the Black Knight",
	"Evening Star (Newtrogic High Zone: Evening) - Knuckles' Chaotix",
	"Crisis City: Act 2 (Modern) - Sonic Generations (consoles/PC)",
	"Main Menu (main.mid) - Sonic's Schoolhouse",
	"Credits - Sonic 3",
	"Title Screen - Sonic Battle",
	"Reach for the Stars (Re-Colors) - Sonic Colors: Ultimate",
	"Theme of Dr. Eggman - Sonic Adventure",
	"Palmtree Panic (Bad Future) - Sonic CD (US)",
	"Sunset Heights - Sonic Forces",
	"Sunshine Cassette (Save Select) - Sonic Mania",
	"Title Screen - Sonic Colors (Wii)",
	"Knuckles' Theme - Sonic 3",
	"End of the World - Sonic 06",
	"Boss - Sonic Spinball (16-bit)",
	"Azure Blue World ...for Emerald Coast - Sonic Adventure",
	"The Final Fight - Sonic 3D Blast (16-bit)",
	"Westopolis - Shadow the Hedgehog",
	"Sea Gate (tutorial) - Sonic Heroes",
	"The Deadly Six Theme (Orchestra ver.) - Sonic Lost World",
	"Angel Island Zone - Sonic Generations (consoles/PC)",
	"What U Need (Blazy Mix; Dead Line) - Sonic Rush",
	"It Doesn't Matter ...Theme of Sonic - Sonic Adventure",
	"Techno Base Act 1 - Sonic Advance 2",
	"Results - Sonic 06",
	"What I'm Made Of... / Last Boss ver. 2: Metal Overlord - Sonic Heroes",
	"Advertise ~ K.I.Y.O. - Sonic the Fighters",
	"His World - Sonic 06",
	"Green Hill Zone - Sonic Blast",
	"Boss: Dr. Eggman - Sonic 4: Episode 2",
	"Race to Win - Sonic Rivals 2",
	"Stage 13 - Dr. Robotnik's Mean Bean Machine (16-bit)",
	"Quartz Quadrant (Present) - Sonic CD (US)",
	"Special Stage - Sonic CD (JP/EU)",
	"Endless Mine - Sonic 3 & Knuckles",
	"Solaris Phase 1 - Sonic 06",
	"Chao Garden (Neutral) - Sonic Adventure 2",
	"The Deadly Six Theme - Sonic Lost World",
	"Special Stage - Sonic CD (US)",
	"Tropical Resort Act 1 - Sonic Colors (Wii)",
	"Surging Power (invincibility) - Knuckles' Chaotix",
	"Sky Babylon Act 2 - Sonic Rush Adventure",
	"Sonic Heroes (main theme) - Sonic Heroes",
	"Tidal Tempest (Present) - Sonic CD (JP/EU)",
	"Ice Mountain Zone Act 2 - Sonic Advance",
	"Green Hill - Sonic Battle",
	"Final Zone - Sonic the Hedgehog (16-bit)",
	"Sir Percival... The Knight of the Grail (cutscene, Percival appears) - Sonic and the Black Knight",
	"Mystic Cave Zone - Sonic 2 (16-bit)",
	"Moonlight Battlefield (Aqua Road) - Sonic Forces",
	"Nega-Mother Wisp - Sonic Colors (DS)",
	"Aurora Icefield ~ Black Bed - Sonic the Fighters",
	"Can You Feel the Sunshine? (Resort Island) - Sonic R",
	"2 Player Vs. - Dr. Robotnik's Mean Bean Machine (16-bit)",
	"Invincible ...No Fear! - Sonic Adventure",
	"Casino Night Zone - Sonic 2 (16-bit)",
	"Data Select - Sonic 3 & Knuckles",
	"Twinkle Snow Act 2 - Sonic Advance 3",
	"Destructive Power (bad ending) - Knuckles' Chaotix",
	"Solaris Phase 2 - Sonic 06",
	"Egg Fleet - Sonic Heroes",
	"Egg Gate - Sonic Forces",
	"Boo's House: Lap Music - Team Sonic Racing",
	"Seaside Hill - Sonic Heroes",
	"Intro - Sonic 3D Blast (32-bit)",
	"Can You Feel the Sunshine? (ACID Mix) - Sonic Gems Collection",
	"Emerald Town - Sonic Battle",
	"Starlight Carnival Act 1 (Remix) - Sonic Colors: Ultimate",
	"Event: Super Shadow (cutscene, pre-final boss) - Shadow the Hedgehog",
	"What U Need (Dead Line) - Sonic Rush",
	"Area: Terminal Velocity - Sonic Colors (Wii)",
	"My Sweet Passion ...Theme of Amy - Sonic Adventure",
	"Sonic Speed Riders (intro/main theme) - Sonic Riders",
	"Sea Map - Sonic Rush Adventure",
	"Throw It All Away ...Theme of Shadow - Sonic Adventure 2",
	"Icy Isle & Wild Water Ways - SegaSonic the Hedgehog",
	"Result Screen - Sonic Colors (Wii)",
	"Gigantic Angel Zone Act 1 (Desert Palace) - Sonic Pocket Adventure",
	"Event: Sonic (cutscene) - Sonic Rush",
	"Cool Edge (Day) - Sonic Unleashed",
	"E.G.G.M.A.N. Doc. Robeatnix (remix) - Shadow the Hedgehog",
    	"Knuckles' Theme - Sonic & Knuckles and Sonic 3 & Knuckles",
	"Boss Battle: Death Egg Robot (Phase 2) - Sonic Generations (consoles/PC)",
	"Invincible (Sonic Heroes ver.) - Sonic Lost World",
	"Battle on the Death Egg - Sonic Battle",
	"Lost Labyrinth Zone Act 2 - Sonic 4: Episode 1",
	"Beyond the Speed of... (Windy Hill) - Sonic Runners",
	"Arid Sands (Night) - Sonic Unleashed",
	"Mechanical Dance (Game Over) - Knuckles' Chaotix",
	"Planet Wisp Act 1 - Sonic Colors (Wii)",
	"Main Menu - Sonic Dash",
	"Crystal Egg Zone - Sonic 2 (8-bit)",
	"Splash Hill Zone Act 1 - Sonic 4: Episode 1",
	"Bonus Stage - Sonic Spinball (16-bit)",
	"Palmtree Panic (Past) - Sonic CD",
	"Green Hills Zone - Sonic 2 (8-bit)",
	"For True Story ...for Sonic vs. Shadow (boss) - Sonic Adventure 2",
	"Special Stage - Sonic 3D Blast (16-bit)",
	"Death Egg's Hangar ~ Hurry Up - Sonic the Fighters",
	"Boss - Sonic Advance 3",
	"Neo South Island Zone Act 1 (Sonic World) - Sonic Pocket Adventure",
	"Cutscene: To the Station in the Sky (pre-E.G.G. Station Zone) - Sonic 4: Episode 1",
	"Labyrinth Zone - Sonic the Hedgehog (8-bit)",
	"Desert Dodge - SegaSonic the Hedgehog",
	"Fist Bump (FM ver.) - Sonic Forces",
	"Ocean View (You Can Do Anything ~ Super Sonic Racing) - Sonic & All-Stars Racing Transformed",
	"Special Stage - Sonic 2 (16-bit)",
	"Sunset Park Zone - Sonic Triple Trouble",
	"It Doesn't Matter ...Theme of Sonic - Sonic Adventure 2",
	"Planet Wisp Act 1 - Sonic Colors (DS)",
	"Green Hill - Sonic Drift",
	"Eggmanland Entrance - Sonic Unleashed",
	"Title Screen - Sonic 4: Episode 2",
	"Toxic Caves - Sonic Spinball (16-bit)",
	"Ska Cha Cha (Night Carnival) - Sonic Rush",
	"Menu - Sonic Jam",
	"Jungle Zone - Sonic the Hedgehog (8-bit)",
	"Windy Hill: Zone 1 - Sonic Lost World",
	"Magnetic Orb Bonus Stage - Sonic & Knuckles and Sonic 3 & Knuckles",
	"Dusty Desert ~The Ruins~ - Sonic 06",
	"Title Screen - Sonic CD (JP/EU)",
	"Tabloid Jargon (Press Garden Zone Act 1) - Sonic Mania",
	"This Machine ...Theme of Team Dark - Sonic Heroes",
    	"Oil Ocean Zone - Sonic 2 (16-bit)",
	"Death Egg mk.II Zone Act 1 - Sonic 4: Episode 2",
	"Hydrocity Zone Act 1 - Sonic Mania",
	"The Fastest Thing Alive (opening theme) - Sonic SatAM",
	"Sunset Hill Map - Sonic Advance 3",
	"Chemical Plant Zone Act 1 - Sonic Mania",
	"Title Screen - Sonic the Hedgehog (16-bit)",
	"Crank the Heat Up!! ...for Final Egg - Sonic Adventure",
	"Super Sonic ~ Everything - Sonic the Fighters",
	"Event: The Last Scene (ending) - Sonic Adventure 2",
	"Boss Battle: Time Eater ver. 2 (Classic) - Sonic Generations",
	"Prison Island - Shadow the Hedgehog",
	"Results Screen (E Rank) - Sonic Unleashed",
	"Sunset Park Zone Act 3 - Sonic Triple Trouble",
	"Intro - Sonic 3D Blast (16-bit)",
	"Neo Green Hill Zone Act 1 - Sonic Advance",
	"Spring Stadium Zone Act 1 - Sonic 3D Blast (16-bit)",
	"Will You Continue? - Sonic Adventure",
	"Emerl's Theme - Sonic Battle",
	"Metropolis Zone - Sonic 2 (16-bit)",
	"A New Venture ~Surfin' S.R.A. Remix~ - Sonic Rush Adventure (album remix)",
	"Challenge / Mission 5 (title screen & 'You're My Hero') - Sonic Generations (consoles/PC)",
	"Green Hill - Sonic Adventure 2",
	"Launch Base Zone Act 1 - Sonic 3 & Knuckles",
	"Snowball Waltz (Frozen Factory Zone 2) - Sonic Lost World",
	"Seaside Hill - Sonic & Sega All-Stars Racing (DS)",
	"Comfort Zone (Main Menu) - Sonic Mania",
	"Splash Hill Zone Act 3 - Sonic 4: Episode 1",
	"Fist Bump - Sonic Forces",
	"Egg Rocket Zone - Sonic Advance",
	"Dr. Eggman Showdown (final boss) - Sonic Lost World",
	"Event: After the Fight (post-boss cutscene) - Sonic Rush",
	"Door Into Summer (Isolated Island 2) - Knuckles' Chaotix",
	"Boss: Mephiles Phase 2 - Sonic 06",
	"Mt. Red: A Symbol of Thrill ...for Red Mountain - Sonic Adventure",
	"Hidden Palace Zone (unused) - Sonic 2 (16-bit)",
	"Advertise: SA2 ver. B (main menu) - Sonic Adventure 2",
	"Endless Possibility - Sonic Unleashed",
	"Coral Cave Act 1 - Sonic Rush Adventure",
	"Green Hill: Act 2 (Modern) - Sonic Generations",
	"The Wicked Wild (Dinosaur Jungle) - Sonic and the Secret Rings",
	"Death Egg Zone - Sonic 2 (16-bit)",
	"Extra Ending (cutscene after true final boss) - Sonic Advance 2",
	"Boss (Pinch) - Sonic 4: Episode 1",
	"Wacky Workbench (Present) - Sonic CD (US)",
	"Sunset Hill Act 2 - Sonic Advance 3",
	"Credits - Sonic Advance 2",
	"Super Sonic Racing - Sonic R",
	"A New Day: Intermission (special stage intro/ending) - Sonic Rush",
	"Menu - Sonic 06",
	"A New Venture - Sonic Rush Adventure",
	"Tropical Resort Act 2 (Remix) - Sonic Colors: Ultimate",
	"Skyscraper Scamper (Night) - Sonic Unleashed",
	"Neo Green Hill Zone - Sonic Generations",
	"Fan Art: It Doesn't Matter - Sonic and the Black Knight",
	"Battle with Egg Dragoon Mk. II (Pinch) - Sonic Forces",
	"Event: Madness (cutscene, Gerald's message) - Sonic Adventure 2",
	"Wacky Workbench (Past) - Sonic CD",
	"Tornado Defense: 1st Battle - Sonic Unleashed",
	"Green Hill Zone - Sonic the Hedgehog Genesis (GBA)",
	"The Dreamy Stage ...for Casinopolis - Sonic Adventure",
	"Intro - Sonic Advance",
	"Null Space - Sonic Forces",
	"Toxic Pools - Sonic Spinball (8-bit)",
	"Angel Island Zone - Sonic Mania",
	"Jingle: Result ver. 2 (A Rank or below) - Sonic Generations (consoles/PC)",
	"Waterbike/Special Stage - Sonic Rush Adventure",
	"Battle with Mega Death Egg Robot: Phase 3 (final boss) - Sonic Forces",
	"Slot Machine Bonus Stage - Sonic & Knuckles and Sonic 3 & Knuckles",
	"Credits - Sonic Drift",
	"All Hail Shadow - Shadow the Hedgehog",
	"Demo - Sonic Gems Collection",
	"Boss - Sonic 4: Episode 1",
	"Chao Karate - Sonic Adventure 2: Battle",
	"Game Land 4 (Planet Wisp) - Sonic Colors (Wii)",
	"Ice Paradise Act 1 - Sonic Advance 2",
	"Death Egg's Eye ~ Never Let It Go - Sonic the Fighters",
	"Sea Bottom Segue (Tropical Coast Zone 3) - Sonic Lost World",
	"Metallic Madness (Present) - Sonic CD (US)",
	"Camelot Castle - Sonic and the Black Knight",
	"Boss (Allegro) - Sonic Rush Adventure",
	"Rusty Ruin Zone Act 1 - Sonic 3D Blast (16-bit)",
	"Sweet Mountain Act 1 - Sonic Colors (Wii)",
	"Keys the Ruin ...for Pyramid Cave - Sonic Adventure 2",
	"With Me (final boss) - Sonic and the Black Knight",
	"Rooftop Run: Act 1 (Classic) - Sonic Generations (consoles/PC)",
	"Big Fishes at Emerald Coast... - Sonic Adventure",
	"Title Screen - Sonic Blast",
	"Rusty Ruin Zone Act 2 - Sonic 3D Blast (32-bit)",
	"Ocean View: Lap Music (Sonic: You Can Do Anything) - Team Sonic Racing",
	"I Am... All of Me - Shadow the Hedgehog",
	"I'm Here (main theme) - Sonic Frontiers",
	"Child's Song (Speed Slider boss) - Knuckles' Chaotix",
	"Tornado Time (Hidden World Zone 2; Believe in Myself) - Sonic Lost World",
	"His World (Zebrahead version) - Sonic 06",
	"Area: Planet Wisp - Sonic Colors (Wii)",
	"Mushroom Hill Zone Act 2 - Sonic 3 & Knuckles",
	"Music Plant Act 1 - Sonic Advance 2",
	"Crush 'em All ...for Weapons Bed - Sonic Adventure 2",
	"Neo South Island Zone Act 2 (Angel Island Zone Act 1) - Sonic Pocket Adventure",
	"Luminous Forest - Sonic Forces",
	"Cloggy Dance (title screen) - Sonic Shuffle",
	"Sonic X Theme (aka Gotta Go Fast; American opening) - Sonic X",
	"Discovery (Title Screen) - Sonic Mania",
	"Eggman's Super Sucky Machine (minigame) - Sonic X (Leapster)",
    	"Crisis City: Act 1 (Classic) - Sonic Generations (consoles/PC)",
	"Boss (E3 prototype version) - Sonic Rush",
	"Mushroom Hill Zone Act 1 - Sonic 3 & Knuckles",
	"Theme of Metropolis Speedway - Sonic Free Riders",
	"Live and Learn - Sonic Adventure 2",
	"Speed of Sound (Speed Slider) - Knuckles' Chaotix",
	"Ice Mountain Zone Act 1 - Sonic Advance",
	"Theme of Dr. Eggman (Dream Figure Skating; Adventure remix) - Mario & Sonic at the Olympic Winter Games (Wii)",
	"Boss: Egg-Cerberus & Egg-Genesis - Sonic 06",
	"Prime Time (Studiopolis Zone Act 2) - Sonic Mania",
	"Flying Battery Zone Act 2 - Sonic 3 & Knuckles",
	"Battle with Egg Dragoon Mk. II - Sonic Forces",
	"Emerald Beach - Sonic Battle",
	"Turquoise Hill Zone - Sonic Chaos (Master System)",
	"Special Stage - Sonic 4: Episode 1",
	"Invincibility - Sonic Advance",
	"Team Chaotix ...Theme of Team Chaotix - Sonic Heroes",
	"Werehog Battle Theme - Sonic Unleashed",
	"Scenario - Dr. Robotnik's Mean Bean Machine (8-bit)",
	"Hey You! It's Time to Speed Up!!! (speed shoes) - Sonic Adventure",
	"Dynamite Plant ~ Try Again - Sonic the Fighters",
	"Competition Menu - Sonic 3 & Knuckles",
	"Jungle Joyride (Day) - Sonic Unleashed",
	"Aquarium Park Act 3 (Remix) - Sonic Colors: Ultimate",
	"Extra Zone Intro: The Metamorphosis (cutscene, Super transformation) - Sonic Rush",
	"Wisp Circuit: Intro Fly-by / Lap Music - Team Sonic Racing",
	"Diamond Dust Zone Act 1 - Sonic 3D Blast (32-bit)",
	"Tachy Touch (Bonus Stage) - Knuckles' Chaotix",
	"Bomber Barbara - Sonic Rush",
	"Title Screen - Sonic Boom: Rise of Lyric",
	"Be Cool, Be Wild, and Be Groovy ...for Ice Cap - Sonic Adventure",
	"Goodbye Chao - Sonic Adventure 2",
	"Radical Train ~The Abandoned Mine~ - Sonic 06",
	"Wing Fortress Zone - Sonic 2 (16-bit)",
	"Mad Gear Zone Act 2 - Sonic 4: Episode 1",
	"Toxic Caves - Sonic Generations",
	"The World Adventure (Piano Version) - Sonic Unleashed",
	"Way to the Base ...for Sand Ocean - Sonic Adventure 2",
	"Menu - Sonic Battle",
	"Faded Hills: Green Hill - Sonic Forces",
	"Tidal Tempest (Bad Future) - Sonic CD (US)",
	"Oil Desert Zone Act 1 - Sonic 4: Episode 2",
	"Planet Wisp Act 2 - Sonic Colors (Wii)",
	"Sky Canyon Act 1 - Sonic Advance 2",
	"Windy Hill ...for Windy Valley - Sonic Adventure",
	"Seaside Hill - Sonic Dash",
	"Ruby Delusions (Eggman Boss 1) - Sonic Mania",
	"Area: Aquarium Park - Sonic Colors (Wii)",
	"Eggmanland (Night) - Sonic Unleashed",
	"Lava Reef Zone Act 1 - Sonic 3 & Knuckles",
	"Final Boss - Sonic Chaos",
	"Power Plant - Sonic Heroes",
	"Boss - Sonic Rivals 2",
	"Toy Kingdom Map - Sonic Advance 3",
	"Casino Street Zone Act 1 - Sonic 4: Episode 1",
	"The World Adventure: Orchestral Theme (title screen) - Sonic Unleashed",
	"Misty Lake - Sonic and the Black Knight",
	"Hydrocity Zone Act 1 - Sonic 3 & Knuckles",
	"Character Select - Sonic Advance 1 & 2",
	"vs. Rotatatron & Refreshinator - Sonic Colors (Wii)",
	"Collision Chaos (Present) - Sonic CD (JP/EU)",
	"Boss: Chaos ver. 0, 2, 4 - Sonic Adventure",
	"Cutscene: Normal - Sonic Rush Adventure",
	"South Island ~ Lovers - Sonic the Fighters",
	"System: Main Menu - Shadow the Hedgehog",
	"Planet Wisp: Act 1 (Classic) - Sonic Generations (consoles/PC)",
	"You're My Hero (credits) - Sonic 3D Blast (32-bit)",
	"I'm a Spy ...for Security Hall - Sonic Adventure 2",
	"Route 99 Act 1 - Sonic Advance 3",
	"Sky Chase Zone - Sonic 2 (16-bit)",
	"Neo Green Hill Zone Act 2 - Sonic Advance",
	"Work It Out (Reactive Factory) - Sonic R",
	"Casino Night ~ Here We Go - Sonic the Fighters",
	"Rhythm and Balance ...for White Jungle - Sonic Adventure 2",
	"Sonic World - Sonic Jam",
	"Chun-nan (Night) - Sonic Unleashed",
	"Central City - Sonic Chronicles: The Dark Brotherhood",
	"Waking Up - Shadow the Hedgehog",
	"Continue (aka No Way) - Sonic 3 & Knuckles",
	"Planet Wisp: Act 2 (Modern) - Sonic Generations (consoles/PC)",
	"Hi-Spec Robo Go! (Hard-Boiled Heavy Boss) - Sonic Mania",
	"Tails' Lab - Sonic Battle",
	"Intro - Sonic Adventure 2: Battle",
	"Final Boss - Sonic 3 & Knuckles",
	"Un-gravitify - Sonic Riders: Zero Gravity",
	"Hyper Eggrobo (final boss) - Sonic Advance 3",
	"Fading World: Imperial Tower - Sonic Forces",
	"Won't Stop, Just Go! ...for Green Forest - Sonic Adventure 2",
	"Leaf Forest Act 1 - Sonic Advance 2",
    	"Cosmic Casino Zone Act 2 (Gumball and Slot Machine Bonus Stage) - Sonic Pocket Adventure",
	"Credits - Sonic the Hedgehog (8-bit)",
	"Pleasure Castle ...for Twinkle Park - Sonic Adventure",
	"Right There, Ride On (Blazy Mix; Leaf Storm) - Sonic Rush",
	"Boss: Egg Albatross - Sonic Heroes",
	"Boss: Iblis - Sonic 06",
	"Dimension Heist (UFO Special Stage) - Sonic Mania",
	"Character Select - Sonic Advance 3",
	"Eggmanland (Day) - Sonic Unleashed",     
    	"That's the Way I Like It ...for Metal Harbor - Sonic Adventure 2",	
	"Town Mission 2 - Sonic 06",
	"This Horizon (title screen) - Knuckles' Chaotix",
	"Panic Puppet Zone Act 2 - Sonic 3D Blast (16-bit)",
	"Pirates' Island Act 1 - Sonic Rush Adventure",
	"Metal Sonic (boss) - Sonic Triple Trouble",
	"Rival Battle: Shadow the Hedgehog 'For True Story (Circuit Freq RMX)' - Sonic Generations",
	"Who's the boss? - Hard Boiled Heavies Mischief Scene (cutscene) - Sonic Mania",
	"Rail Canyon - Sonic Heroes",
	"Stages 1-4 - Dr. Robotnik's Mean Bean Machine (16-bit)",
	"Boss - Sonic 2 (16-bit)",
	"Kick the Rock! ...for Wild Canyon - Sonic Adventure 2",
	"Last Utopia Zone (final boss; Sonic 3 & Knuckles remix) - Sonic Pocket Adventure",
	"Vela-Nova (Digital Remakin') - Sonic Rush (album remix)",
	"Seven Rings in Hand - Sonic and the Secret Rings",
	"Metal City/Night Chase - Sonic Riders",
	"Sky Base Zone - Sonic the Hedgehog (8-bit)",
	"City Escape: Act 1 'Escape from the City (Cash Cash RMX)' (Classic) - Sonic Generations (consoles/PC)",
	"True Area 53 - Sonic Advance 2",
	"Lost Valley - Sonic Forces",
	"Boss!! - Sonic CD (JP/EU)",
	"Ending Theme ~ Take Me Away (credits) - Sonic the Fighters",
	"Event: Shut Your Mouth (cutscene, pre-Egg Breaker) - Shadow the Hedgehog",
	"The Core (Astral Babylon/Mobius Strip) - Sonic Riders: Zero Gravity",
	"Fairy of A.I.F. - Sonic Gems Collection",
	"Starlight Carnival Act 1 - Sonic Colors (Wii)",
	"Town Mission 4 - Sonic 06",
	"Sonic: You Can Do Anything (aka Toot Toot Sonic Warrior) - Sonic CD (JP/EU)",
	"Machine Labyrinth Act 1 - Sonic Rush Adventure",
	"Hydrocity Zone Act 2 - Sonic 3 & Knuckles",
	"Green Grove Zone Act 2 - Sonic 3D Blast (16-bit)",
	"Terminal Velocity Act 1 - Sonic Colors (Wii)",
	"Hot Crater Act 2 - Sonic Advance 2",
	"Aquarium Park Act 1 - Sonic Colors (Wii)",
	"Boss: Chaos ver. 6 - Sonic Adventure",
	"Sonic vs. Knuckles ~ North Wind - Sonic the Fighters",	
	"Rumbling HWY ...for Mission Street - Sonic Adventure 2",
	"Marble Zone - Sonic the Hedgehog (16-bit)",
	"Apotos (Night) - Sonic Unleashed",
	"Metallic Madness (Good Future) - Sonic CD (JP/EU)",
	"Sweet Mountain Act 3 - Sonic Colors (Wii)",
	"Forest Falls Zone Act 1 - Sonic Rivals",
	"Event: Monkey Business (cutscene) - Sonic Heroes",
	"Cool Edge (Night) - Sonic Unleashed",
	"Dr. Robotnik's Theme - Adventures of Sonic the Hedgehog",
	"Run Through the Speed Highway ...for Speed Highway - Sonic Adventure",
	"The Lost Hex (world map) - Sonic Lost World",
	"A Duel with Metal Sonic: Stardust Speedway RMX - Sonic 4: Episode 2",
	"Reach for the Stars - Sonic Colors",
	"Trap Tower - SegaSonic the Hedgehog",
	"The Mad Convoy Race ...for City Escape - Sonic Adventure 2",
	"Frozen Junkyard: Lap Music - Team Sonic Racing",
	"Metal Scratchin' (boss) - Sonic Rush",
	"Ghost Town - Sonic Forces",
	"Special Stage (aka Blue Spheres) - Sonic 3 & Knuckles",
	"Cutscene: The First Night (Apotos Werehog transformation) - Sonic Unleashed",
	"Crank the Heat Up!! (for Final Fortress) - Sonic & Sega All-Stars Racing (DS)",
	"Sky Chase Zone (Azure Lake) - Sonic Pocket Adventure",
	"Digital Circuit - Shadow the Hedgehog",
	"Asteroid Coaster Act 1 - Sonic Colors (Wii)",
	"Cyber Space 2-5: Deja vu (or Déjà vu) - Sonic Frontiers",
	"Crystal Cave - Sonic and the Black Knight",
	"Theme of Tikal - Sonic Adventure",
	"Boss!! - Sonic CD (US)",
	"We Can ...Theme of Team Sonic - Sonic Heroes",
	"Continue (Sonic 3 & Knuckles remix) - Sonic Pocket Adventure",
	"Big Swell (final boss) - Sonic Rush Adventure",
	"Shamar (Day) - Sonic Unleashed",
	"The ARK - Shadow the Hedgehog",
	"Electoria (Techno Tower) - Knuckles' Chaotix",
	"Boss: Egg Breaker - Shadow the Hedgehog",
	"Sweet Mountain Act 2 - Sonic Colors (Wii)",
	"Town Mission 3 - Sonic 06",
    	"Tornado Defense: 2nd Battle - Sonic Unleashed",
	"Green Hill: Act 1 (Classic) - Sonic Generations",
	"Bonus Stage - Sonic Labyrinth",
	"Kingdom Valley ~Wind ~ The Castle ~ Lakeside ~ Water~ - Sonic 06",
	"Under Ground Zone - Sonic 2 (8-bit)",
	"The World Adventure (title screen) - Sonic Unleashed (Java, mobile)",
	"and... Fish Hits! - Sonic Adventure",
	"Aquatic Ruin Zone - Sonic 2 (16-bit)",
	"Bullet Station - Sonic Heroes",
	"Terminal Velocity - Sonic Colors (DS)",
	"Arid Sands (Day) - Sonic Unleashed",
	"Mecha Green Hill Zone - Sonic Chaos",
	"Metropolitan Highway - Sonic Forces",
	"Boss: -GUN- Mobile - Sonic Adventure 2",
	"Challenge / Mission 1 'Super Sonic Racing (Cash Cash vs. Jun Senoue RMX)' - Sonic Generations (consoles/PC)",
	"Ice Cap Zone Act 1 (prototype version) - Sonic 3",
	"Windy and Ripply ...for Emerald Coast - Sonic Adventure",
	"Green Light Ride - Team Sonic Racing",
	"Molten Mine - Sonic and the Black Knight",
	"Angel Island Zone Act 2 - Sonic Advance",
	"Oil Ocean Zone Act 1 - Sonic Mania",
	"Vs. Egg Dragoon - Sonic Unleashed",
	"Boss Battle: Time Eater ver. 1 (Modern) - Sonic Generations",
    	"Escape from the City ...for City Escape - Sonic Adventure 2",
	"Metal Depot - Sonic Battle",
	"Aqua Lake Zone - Sonic 2 (8-bit)",
	"Sand Hill - Sonic Adventure",
	"Mad Gear Zone Act 1 - Sonic 4: Episode 1",
	"Asteroid Coaster Act 2 - Sonic Colors (Wii)",
	"Mini-Boss - Sonic 3",
	"Wildstyle Pistolero (Mirage Saloon Zone Act 1 K Mix) - Sonic Mania",
	"Flying Carpet ~ Back to Soul - Sonic the Fighters",
    	"Super Sonic (Reach for the Stars remix) - Sonic Colors (Wii)",
    	"Title Screen - Sonic Mega Collection",
	"Rusty Ruin Zone Act 2 - Sonic 3D Blast (16-bit)",
	"Wave Ocean ~The Water's Edge~ - Sonic 06",
	"Iron Jungle - Shadow the Hedgehog",
	"Free (main theme) - Sonic Free Riders",
	"Skyscraper Scamper (Day) - Sonic Unleashed",
	"Title Screen - Sonic 4: Episode 1",
	"Palmtree Panic (Present) - Sonic CD (JP/EU)",
	"Boss Battle: Perfect Chaos Pt-I 'Open Your Heart: Crush 40 vs. Circuit Freq RMX' - Sonic Generations (consoles/PC)",
	"Green Hill Zone Act 1 - Sonic Mania",
	"Area: Asteroid Coaster - Sonic Colors (Wii)",
	"Toy Kingdom Act 1 - Sonic Advance 3",
	"Soda Pop (Marina Madness boss) - Knuckles' Chaotix",
	"Planet Wisp Act 1 - Sonic Colors (DS)",
	"Metallic Madness (Bad Future) - Sonic CD (US)",
	"Coral Cave Act 2 - Sonic Rush Adventure",
	"Still Invincible ...No Fear! - Sonic Adventure 2",
	"Accordion Song - Sonic 06",
	"Hidden World - Sonic Lost World",
	"Space Trip Steps ...for Meteor Herd - Sonic Adventure 2", 
	"Guardian: SQUID - Sonic Frontiers",
	"Chaos Angel Act 1 - Sonic Advance 3",
	"Name Entry ~ What's Your Name? - Sonic the Fighters",
	"Windmill Isle (Night) - Sonic Unleashed",
	"Kronos Island: 4th Mvt. - Sonic Frontiers",
	"Sylvania Castle Zone Act 1 - Sonic 4: Episode 2",
	"Death Egg Zone Act 2 - Sonic 3 & Knuckles",
	"Cosmic Angel Zone - Sonic Advance",
	"Tropical Resort Act 1 - Sonic Colors (Wii)",
	"Scrap Brain Zone - Sonic the Hedgehog (8-bit)",
	"Lights, Camera, Action! (Studiopolis Zone Act 1) - Sonic Mania",
	"Choose Your Buddy! (Slap Bass ver.) - Sonic Adventure",
	"Invincibility - Sonic Advance 2 & 3",
	"Azure Lake - Sonic 3 & Knuckles",
	"Challenge / Mission 3 ('Emerald Beach') - Sonic Generations (consoles/PC)",
	"Super Sonic Racing - Sonic Pinball Party",
	"Stardust Speedway (Present) - Sonic CD (US)",
	"Dilapidated Way ...for Casinopolis - Sonic Adventure",
	"Battle: City Area (City Top, multiplayer) - Sonic Heroes",
	"Mushroom Hill: Act 2 (Modern) - Sonic Generations (3DS)",
	"The Machine - Sonic Spinball (16-bit)",
	"Route 99 Map - Sonic Advance 3",
	"Time Attack - Sonic Jam",
	"Whale Lagoon: Lap Music (Seaside Hill remix) - Team Sonic Racing",
	"Sunset Hill Act 1 (Green Hill Zone remix) - Sonic Advance 3",
	"Boss: Robot Carnival/Robot Storm - Sonic Heroes",
	"Right There, Ride On (Digital Remakin') - Sonic Rush (album remix)",
	"Tropical Resort: Act 2 (Modern) - Sonic Generations (3DS)",
	"Casino Street Zone Act 2 - Sonic 4: Episode 1",
	"Network Terminal (outside) - Sonic Forces",
	"Theme of E-102 Gamma (or γ) - Sonic Adventure",
	"Stardust Speedway (Past) - Sonic CD",
	"Windmill Village Mode 1 - Sonic Rush Adventure",
	"Enemy Territory [Westopolis Remix] - Sonic Forces: Episode Shadow",
	"Game Land 1 (Tropical Resort) - Sonic Colors (Wii)",
	"Sandopolis Zone Act 1 - Sonic 3 & Knuckles",
	"Circus Park - Shadow the Hedgehog",
	"Gimme Shelter - Sonic Battle",
	"Built to Rule (Titanic Monarch Zone Act 1) - Sonic Mania",
	"Boss: vs. Character - Sonic 06",
	"Spring Stadium Zone Act 1 - Sonic 3D Blast (32-bit)",
	"With Go V-Train (Riot Train) - Sonic Shuffle",
	"Sky Sanctuary Zone - Sonic 3 & Knuckles",
	"Cyber Space 1-4: Genshi - Sonic Frontiers",
	"Special Stage - Sonic Advance 3", 
	"Jungle Joyride (Day) - Sonic Unleashed",
	"Funky Groove Makes U Hot!? ...for Options - Sonic Adventure",
	"Tropical Coast: Zone 1 - Sonic Lost World",
	"Super Sonic Racing (for Casino Park) - Sonic & Sega All-Stars Racing (DS)",
	"Boss: Egg Dealer - Shadow the Hedgehog",
	"Aquarium Park Act 1 - Sonic Colors (DS)",
	"Angel Island Zone Act 1 - Sonic & Knuckles Collection (PC)",
	"Boss: Egg-Cerberus and Egg-Genesis - Sonic 06",
	"Snowy Mountain ...for Ice Cap - Sonic Adventure",
	"Unstoppable (invincibility; Fist Bump remix) - Sonic Forces",
	"Doctor's Mine: Lap Music - Team Sonic Racing",
	"Sky Canyon Act 2 - Sonic Advance 2",
	"Angel Island Zone Act 1 - Sonic 3 & Knuckles",
	"Windy Hill: Zone 2 - Sonic Lost World",
	"Remember Me? M.F.M. ...for Iron Gate - Sonic Adventure 2", 
	"Eggman Mean Bean (Chemical Plant Zone Act 2 boss) - Sonic Mania",
	"Quartz Quadrant (Bad Future) - Sonic CD (US)",
	"Emerald Coast: Act 1 'Azure Blue World' (Classic) - Sonic Generations (3DS)",
	"What U Need is Remix (menu) - Sonic Rush",
	"Gigalopolis Zone - Sonic Chaos (Master System)",
	"Sky Fortress Zone Act 2 - Sonic 4: Episode 2",
	"Game Land: Title Screen - Sonic Colors (Wii)",
	"Panic Puppet Zone Act 1 - Sonic 3D Blast (32-bit)",
	"Believe in Myself ...Theme of Miles/Tails - Sonic Adventure 2",
	"Canyon Cruise ~ Blue Garden - Sonic the Fighters",
	"Taking It Back (results) - Sonic Forces",
	"Mad Gear Zone Act 3 - Sonic 4: Episode 1",
	"Sonic Underground (opening theme) - Sonic Underground",
	"Quartz Quadrant (Bad Future) - Sonic CD (JP/EU)",
	"Submarine (Deep Typhoon) - Sonic Rush Adventure", 
	"Pinball Highway: Final Lap - Team Sonic Racing",
	"Faraway Avalon - Sonic and the Black Knight",
	"Boss - Sonic Chaos",
	"Jingle: Invincible - Sonic 06",
	"Seaside Hill: Act 1 (Classic) - Sonic Generations (consoles/PC)",
	"Boss: Black Bull - Shadow the Hedgehog",
	"Ethno Circus (Blazy Mix; Mirage Road) - Sonic Rush",
	"Lost Jungle - Sonic Heroes",
	"Up to the Challenge (missions) - Sonic Forces",
	"Plant Kingdom Act 1 - Sonic Rush Adventure",
	"Splash Hill Zone Act 2 - Sonic 4: Episode 1",
	"Giant Wing ~ Fire Stone - Sonic the Fighters",
	"The Lost Prologue - Sonic and the Secret Rings",
	"Boss Battle (Day) - Sonic Unleashed",
	"Mr. Unsmiley ...for Sky Rail - Sonic Adventure 2",
	"Main Menu - Sonic Mega Collection",
	"Boss - Sonic Advance 2",
	"Arsenal Pyramid (outside) - Sonic Forces",
	"Aquatic Base ~Level 2~ - Sonic 06",
	"Cyber Space 4-6: Fog Funk - Sonic Frontiers",
	"Take a Nap (Isolated Island Zone 1) - Knuckles' Chaotix",
	"Boss 1 - Sonic 3D Blast (16-bit)",
	"Starlight Carnival Act 1 - Sonic Colors (DS)",
	"Oil Ocean Zone Act 2 - Sonic Mania",
	"Blue Marine Zone - Sonic Blast",
	"Mystic Ruin - Sonic Adventure",
	"Metallic Madness (Present) - Sonic CD (JP/EU)",
	"Dark Arsenal: Lap Music (Crank the Heat Up!! remix) - Team Sonic Racing",
	"Tube Panic (Special Stage) - Knuckles' Chaotix",
	"Cyber Space 1-2: Flowing - Sonic Frontiers",
	"Secret Base Zone Act 1 - Sonic Advance",
	"Options Screen (menu) - Sonic R",
	"vs. Rotatatron & Refreshinator (Remix) - Sonic Colors: Ultimate",
	"Wonder World: Title Theme - Sonic Lost World",
	"Secret Plant Zone Act 1 (Angel Island Zone Act 2 remix) - Sonic Pocket Adventure",
	"Fakery Way ...for Twinkle Park - Sonic Adventure",
	"Clockwork Pyramid: Final Lap - Team Sonic Racing",
	"Haunted Ship Act 1 - Sonic Rush Adventure",
	"All Hail Shadow - Sonic 06",
	"Marble Garden Zone Act 1 - Sonic 3 & Knuckles",
	"Battle: Casino Area (Casino Ring, multiplayer) - Sonic Heroes",
	"Holy Summit - Sonic Battle",
	"Lava Powerhouse - Sonic Spinball (8-bit)",
	"Chemical Plant Zone - Sonic 2 (16-bit)",
	"Aquarium Park Act 3 - Sonic Colors (Wii)",
	"Boss - Sonic the Hedgehog (8-bit)",
	"Menu - Sonic 4: Episode 1 (WiiWare)",
	"This is Our World: A New Hero (Avatar creation) - Sonic Forces",
	"Holoska (Night) - Sonic Unleashed",
	"Egg Mobile ...Boss: Egg Hornet - Sonic Adventure",
	"Chemical Plant: Act 2 (Modern) - Sonic Generations (consoles/PC)",
	"White Park Zone Act 2 - Sonic 4: Episode 2",
	"Undefeated (Invincibility) - Sonic Mania",
	"Special Stage - Sonic the Hedgehog (8-bit)",
	"White Acropolis ~The Base~ - Sonic 06",
	"Theme of Digital Dimension - Sonic Riders",
	"Double Down (Frozen Factory Zone 3) - Sonic Lost World",
	"Diamond Dust Zone Act 1 - Sonic 3D Blast (16-bit)",
	"Flame Core ~Volcano~ - Sonic 06",
	"Where to Today? (main theme) - Sonic Runners", 
	"Spagonia (Day) - Sonic Unleashed",
	"Trial and Error (Amazing Arena mini-boss) - Knuckles' Chaotix",
	"Death Crab Pursuit (for Guardian Rock) - Sonic Forces",
	"Terminal Velocity Act 2 - Sonic Colors (Wii)",
	"Cyber Space 1-1: Database - Sonic Frontiers",
	"Whisker & Johnny: Allegro (boss) - Sonic Rush Adventure",
	"Tornado Scramble ...for Sky Chase - Sonic Adventure",
	"Cyber Track Map - Sonic Advance 3",
	"Battle with Metal Sonic [US ver. Remix] - Sonic Forces",
	"Opening/Title Screen - Dr. Robotnik's Mean Bean Machine (16-bit)",
	"Boss Battle: Death Egg Robot (Phase 1) - Sonic Generations (consoles/PC)",
	"Marble Zone - Sonic the Hedgehog Genesis (GBA)",
	"Twinkle Snow Map - Sonic Advance 3",
	"Air Fleet - Shadow the Hedgehog",
	"Unknown from M.E. ...Theme of Knuckles - Sonic Adventure",
	"Dragon Dance (Sky Road: Zone 2) - Sonic Lost World",
	"Sonic the Hedgehog Medley (Live) - Sonic 30th Anniversary Symphony (Live)",
	"Tidal Plant Zone - Sonic Triple Trouble",
	"Boss: Egg Hawk - Sonic Heroes",
	"Gene Gadget Zone Act 2 - Sonic 3D Blast (16-bit)",
	"Guardian: TOWER - Sonic Frontiers",
	"Turbine Loop: Lap Music (Final Fortress remix) - Team Sonic Racing",
	"Egg Saucer (Sky Canyon boss) - Sonic Advance 2",
	"Soleanna Forest - Sonic 06",
	"Lost Labyrinth Zone Act 1 - Sonic 4: Episode 1",
	"Title Screen - Sonic Boom: Fire & Ice",
	"Aquatic Relix Zone Act 1 (Mushroom Hill Zone Act 1 remix) - Sonic Pocket Adventure",
	"Flying Battery Zone Act 2 - Sonic Mania",
	"Back in Time (Regal Ruin) - Sonic R",
	"Chasing Drive ...for Kart - Sonic Adventure 2",
	"Cyber Space: Result Screen - Sonic Frontiers",
	"Wrapped in Black (true final boss) - Sonic Rush",
	"The Light of Hope (end credits) - Sonic Forces",
	"Title Screen - Sonic Chaos",
	"At Dawn ...for Speed Highway - Sonic Adventure",
	"Titanic Plain - Sonic and the Black Knight",
	"Sunset Forest Zone Act 1 - Sonic Rivals 2",
	"Sonic Boom (D'nB Mix) - Sonic Gems Collection",
	"Chaos Island: 2nd Mvt. - Sonic Frontiers",
	"Theme of Rocky Ridge - Sonic Free Riders",
	"Dr. Robotnik - Sonic the Hedgehog (2020 movie)",
	"Jeh Jeh Rocket (Huge Crisis) - Sonic Rush",
	"Roulette Road: Final Lap (Casino Park remix) - Team Sonic Racing",
	"Title Screen - Sonic 3",
	"Gaia Gate - Sonic Unleashed",
	"No Way Through (Pirate Storm) - Sonic and the Secret Rings",
	"Desert Ruins: Zone 1 - Sonic Lost World",
	"Night Babylon - Sonic Battle",
	"Secret Plant Zone Act 2 (Hydrocity Zone Act 2 remix) - Sonic Pocket Adventure",
	"Radical Train ~The Chase~ - Sonic 06",
	"Special Stage - Sonic 4: Episode 2",
	"Game Land 2 (Sweet Mountain) - Sonic Colors (Wii)",
	"Emerald Ocean - Sonic Drift 2",
	"Ice Cap Zone Act 2 - Sonic 3 & Knuckles",
	"Welcome to Station Square - Sonic Adventure",
	"E.G.G.M.A.N. (for Final Fortress) - Sonic & Sega All-Stars Racing (DS)",
	"Water Palace: Act 2 'Back 2 Back: Cash Cash RMX' (Modern) - Sonic Generations (3DS)",
	"Scrambled Egg Zone - Sonic 2 (8-bit)",
	"Hang Castle - Sonic Heroes",
	"Steal Ship (Fire Bird) - Sonic Shuffle",
	"Through Traffic (Megalo Station/Nightside Rush) - Sonic Riders: Zero Gravity",
	"Shrouded Forest - Sonic and the Black Knight",
	"Spring Yard - Sonic Drift",
	"Blizzard Peaks Act 1 - Sonic Rush Adventure",
	"Central City - Sonic Battle",
	"Speed Highway: Act 1 'Run Through the Speed Highway: Cash Cash RMX' (Classic) - Sonic Generations (consoles/PC)",
	"Sky Road: Zone 1 - Sonic Lost World",
	"Boss - Sonic Triple Trouble",
	"White Acropolis ~Snowy Peak~ - Sonic 06",
	"Quest: The Best Defense (fighting Towers on Ares Island) - Sonic Frontiers",
	"Aerobase Zone (Death Egg Zone remix) - Sonic Pocket Adventure",
	"Rooftop Run (Day) - Sonic Unleashed",
	"Boss: Diablon - Shadow the Hedgehog",
	"Theme of the Resistance: Title Screen ver. - Sonic Forces",
	"Twinkle Snow Act 3 - Sonic Advance 3",
	"Can't Stop, So What!? ...for Metal Harbor - Sonic Adventure 2",
	"Hidden Volcano: Lap Music - Team Sonic Racing",
	"Blossom Haze (Press Garden Zone Act 2) - Sonic Mania",
	"Credits - Sonic Triple Trouble",
	"Eggman's Facility [Rhythm and Balance Remix] - Sonic Forces: Episode Shadow",
	"Green Hill Zone - Sonic the Hedgehog (8-bit)",
	"Tidal Tempest (Good Future) - Sonic CD (JP/EU)",
	"Title Screen - The Murder of Sonic the Hedgehog",
	"Silent Forest: Zone 1 - Sonic Lost World",
	"E.G.G. Station Zone (final boss) - Sonic 4: Episode 1", 
	"Casino Park - Sonic Heroes",
	"Death Egg (overworld hub) - Sonic Battle",
	"Grand Prix Clear - Sonic Drift",
	"Boss - Sonic Rush Adventure",
	"Desert Palace - Sonic 3 & Knuckles",
	"Tilt the Machine (pinball minigame, Frozen Factory Zone 3) - Sonic Lost World",
	"Egg Utopia Act 1 - Sonic Advance 2",
	"Oil Desert Zone Act 3 - Sonic 4: Episode 2",
	"Theme of Magma Rift - Sonic Free Riders",
	"Options/High Scores/Credits - Sonic Spinball (16-bit)",
	"Red Hot Skull ...for Red Mountain - Sonic Adventure",
	"Advertise: SA2 ...in the groove (menu & recap) - Sonic Adventure 2",
	"Savannah Citadel (Day) - Sonic Unleashed",
	"Raisin' Me Up (Prologue; bad ending) - Sonic Rush",
	"Tidal Tempest (Past) - Sonic CD",
	"Cooperation ...for Cannon's Core ver. 2 - Sonic Adventure 2",
	"Rise of the Icon (alternate intro) - Sonic Mania",
	"Aquarium Park Act 2 (Remix) - Sonic Colors: Ultimate",
	"Volcano Valley Zone Act 1 - Sonic 3D Blast (32-bit)",
	"Last Judgment (Final Judgment) - Sonic Forces",
	"Aquatic Time (Aquatic Capital/Tempest Waterway) - Sonic Riders: Zero Gravity",
	"Turquoise Hill Zone - Sonic Chaos (Game Gear)",
	"Jingle: Awake Dark (Chaos Blast) - Shadow the Hedgehog",
	"Twinkle Cart ...for Twinkle Park - Sonic Adventure",
	"Main Menu (Sonic World remix) - Sonic Origins",
	"Boss Battle: Egg Dragoon - Sonic Generations (consoles/PC)",
	"Sweet Mountain Act 3 (Remix) - Sonic Colors: Ultimate",
	"Seascape (Marina Madness Zone) - Knuckles' Chaotix",
	"Militant Missionary ...Boss: Egg Walker and Egg Viper - Sonic Adventure",
	"Soleanna Castle Town - Sonic 06",
	"Through the Fire (vs. Character; boss) - Sonic and the Black Knight",
	"Title Screen - Sonic & Knuckles, Sonic 3 & Knuckles",
	"Cutscene: Chip's Memories (Chip remembers his real identity) - Sonic Unleashed",
	"vs. Captain Jelly & Admiral Jelly (boss) - Sonic Colors (DS)",
	"Danger on the Dance Floor (Mid-Boss) - Sonic Mania",
	"Ice Cap - Sonic Drift 2",
	"Stages 9-12 - Dr. Robotnik's Mean Bean Machine (16-bit)",
	"Cutscene: A Hero Falls (Sonic is defeated) - Sonic Forces",
	"Break Through It All (Super Sonic vs. Wyvern; boss) - Sonic Frontiers",
	"Cyber Track Act 2 - Sonic Advance 3",
	"World Map - Sonic Colors (Wii)",
	"Title Screen - Dr. Robotnik's Mean Bean Machine (8-bit)",
	"Hill Top Zone - Sonic 2 (16-bit)",
	"ZERO the Chase-Master ...Boss: Eggman Robot -ZERO- - Sonic Adventure",
	"Credits - Sonic 3D Blast (16-bit)",
	"Theme of Babylon Garden (also Sky Road) - Sonic Riders",
	"Boss Intro - Sonic Advance",
	"Final Showdown - Sonic Spinball (8-bit)",
	"Last Boss Ver. 1: Metal Madness - Sonic Heroes",
	"Speak with Your Heart (credits) - Sonic Colors (Wii)",
	"Dive Into Gravity (Crimson Crater/Security Corridor) - Sonic Riders: Zero Gravity",
	"Boss - Sonic 3D Blast (32-bit)",
	"Music Plant Act 2 - Sonic Advance 2",
	"Tidal Tempest (Good Future) - Sonic CD (US)",
	"Theme of Frozen Forest - Sonic Free Riders",
	"Justice (Park Avenue) - Sonic Forces",
	"Special Stage: Emerald Challenge - Sonic Heroes",
	"Emerald Hill Zone - Sonic 2 (16-bit)",
	"Get Edgy (Altitude Limit) - Sonic Rush",
	"Dreams of an Absolution - Sonic 06",
	"Blue Coast Zone Act 3 - Sonic Rivals 2",
	"The Deadly Six Theme (Violin ver.) - Sonic Lost World",
	"Games/Manuals - Sonic Mega Collection",
	"Green Grove Zone Act 2 - Sonic 3D Blast (32-bit)",
	"Walkin' (Newtrogic High Zone: Morning) - Knuckles' Chaotix",
	"Casinopolis - Sonic Pinball Party",
	"Special Stage - Sonic the Hedgehog (16-bit)",
	"Deep Core (Allegro; true final boss) - Sonic Rush Adventure",
	"Theme of Dolphin Resort - Sonic Free Riders",
	"Empire City (Night) - Sonic Unleashed",
	"Asteroid Coaster Act 1 - Sonic Colors (DS)",
	"Emerald Coast: Act 2 'Windy and Ripply' (Modern) - Sonic Generations (3DS)",
	"Cyber Space 3-6: Enjoy this World - Sonic Frontiers",
	"Going My Way (invincibility) - Sonic Runners",
	"Pirates' Island Act 2 - Sonic Rush Adventure",
	"Wacky Workbench (Bad Future) - Sonic CD (JP/EU)",
	"Invincibility (Sonic 3 remix) - Sonic Drift 2",
	"Opening Theme - Sonic Origins",
	"Leaf Forest Act 2 - Sonic Advance 2",
	"Special Stage - Sonic Lost World (3DS)",
	"Casino Night - Sonic Drift 2",
	"Grand Metropolis - Sonic Heroes",
	"Sonic and Knuckles Theme (title theme) - Virtual Sonic (album remix)",
	"Double Take (Encore Save Select) - Sonic Mania Plus",
	"Invincibility - Sonic 3D Blast (32-bit)",
	"Museum - Sonic Gems Collection",
	"Sandstorm (title screen) - Sonic and the Secret Rings",
	"Labyrinth of the Sky - Sonic Labyrinth",
	"Follow Me ...Theme of Team Rose - Sonic Heroes",
	"Cosmic Fall - Shadow the Hedgehog",
	"Mystic Cave Zone (2-player) - Sonic 2 (16-bit)",
	"The Moon Zone (true final boss) - Sonic Advance",
	"Wisp Circuit: Final Lap - Team Sonic Racing",
	"Leading Lights ...for Lost World - Sonic Adventure",
	"Wake Up One (character select) - Sonic Shuffle",
	"Colosseum Highway Zone Act 1 - Sonic Rivals",
	"Sky High Zone - Sonic 2 (8-bit)",
	"Ending: Android Ending - Shadow the Hedgehog",
	"Speed Up! (Reach For The Stars ver.) - Sonic Lost World",
	"Rail Canyon - Tails' Skypatrol",
	"Vs. Metal Sonic (boss, Stardust Speedway Bad Future JP remix) - Sonic Mania",
	"Diamond in the Sky (Radiant Emerald) - Sonic R",
	"Endless Possibility (Ultimate Figure Skating) - Mario & Sonic at the Olympic Winter Games (DS)",
	"Theme of Splash Canyon (also Red Canyon) - Sonic Riders",
	"Jingle: Mystery Solved - Sonic Frontiers",
	"Neon Palace Zone Act 1 - Sonic Rivals 2",
	"Ice Cap Zone Act 2 - Sonic & Knuckles Collection (PC)",
	"Bad Taste Aquarium ...for Hot Shelter - Sonic Adventure",
	"Guardian: CATERPILLAR - Sonic Frontiers",
	"Marble - Sonic Drift",
	"Boss Battle: Biolizard: 'Supporting Me...' - Sonic Generations (3DS)",
	"Poison Spear (Sand Scorpion; Sand Oasis boss) - Sonic and the Secret Rings",
	"Carnival Night Zone Act 1 - Sonic 3 & Knuckles",
	"Chaotic Space Zone (Sky Sanctuary remix) - Sonic Pocket Adventure",
	"Gadget Round (MeteorTech Premises/MeteorTech Sparkworks) - Sonic Riders: Zero Gravity",
	"Cutscene: Opening - Sonic Lost World",
	"Lethal Highway - Shadow the Hedgehog",
	"Hidden Island (A New Venture remix) - Sonic Rush Adventure",
	"Atomic Destroyer Zone - Sonic Triple Trouble",
	"Game Land 5 (Aquarium Park) - Sonic Colors (Wii)",
    	"Infinite - Sonic Forces",
	"Character Select - Sonic 06",
	"World Map (The World Adventure) - Sonic Unleashed",
	"Title - Sonic Spinball (8-bit)",
	"SA2 ...Main Riff for Sonic Adventure 2 (title, Live and Learn riff) - Sonic Adventure 2",
	"Start Your Hedgehogs (2P Battle; Wonder World remix) - Sonic Lost World",
	"Metal Scratchin' (Part 2; pinch) - Sonic Rush",
	"Fist Bump: Escape from Null Space - Sonic Forces",
	"Lava Reef Zone Act 1 - Sonic Mania",
	"Smiley Bomb (final boss) - Sonic Labyrinth",
	"Title Screen (Forest Falls Zone remix) - Sonic Rivals",
	"Whale Lagoon: Final Lap (Seaside Hill remix) - Team Sonic Racing",
	"Green Grove Zone Act 1 - Sonic 3D Blast (32-bit)",
	"Go Quickly! (timed mode) - Sonic Runners",
	"Balloon Park - Sonic 3 & Knuckles",
	"Labyrinth of the Castle - Sonic Labyrinth",
	"Ares Island: 6th Mvt. - Sonic Frontiers",
	"Catch Me If You Can (Babylon Rogues' theme) - Sonic Riders",
	"Choose Your Buddy! (Finger Bass ver.) - Sonic Adventure",
	"Mushroom Hill: Act 1 (Classic) - Sonic Generations (3DS)",
	"Egg Falcon (Colosseum Highway boss) - Sonic Rivals",
	"Mushroom Hill ~ Come On, Mr. Sonic - Sonic the Fighters",
	"Floors 1-3 - Sonic the Hedgehog's Gameworld",
	"Lava Shelter - Shadow the Hedgehog",
	"Area: Starlight Carnival - Sonic Colors (Wii)",
	"Menu - Sonic 4: Episode 1",
	"Spring Yard Zone - Sonic the Hedgehog (16-bit)",
	"Windmill Village Mode 2 - Sonic Rush Adventure",
	"System Screen: Menu - Sonic Heroes",	
	"Empire City (Day) - Sonic Unleashed",
	"Super Sonic (Sonic 3) - Sonic Origins",
	"Event: Sonic Appears (part of opening cutscene) - Sonic 06",
	"Title Screen - Sonic Labyrinth",
	"Lazy Days ~Livin' in Paradise~ ...Theme of Big - Sonic Adventure",
	"Dragon's Lair - Sonic and the Black Knight",
	"Ending - Tails' Skypatrol",
	"Iron Fortress - Sonic Forces",
	"When Robots Attack (part of opening cutscene) - Sonic Riders: Zero Gravity",
	"Dive into the Mellow ...for Aquatic Mine - Sonic Adventure 2",
	"Hyper-Hyper (Newtrogic High Zone: Day) - Knuckles' Chaotix",
	"Game Results - Sonic 2 (16-bit)",
	"Aqua Planet Zone - Sonic Chaos",
	"Egg Frog (Egg Utopia boss) - Sonic Advance 2",
	"Area: Tropical Resort - Sonic Colors (Wii)",
	"Lava Reef Zone Act 2/Hidden Palace Zone - Sonic 3 & Knuckles",
	"Mystic Haunt Zone Act 3 - Sonic Rivals 2",
	"World Map - Tails Adventure",
	"Careening Cavern (Windy Hill Zone 3) - Sonic Lost World",
	"Cutscene: Hidden Technology (opening with Eggman) - Sonic Frontiers",
	"Rooftop Run: Act 2 (Modern) - Sonic Generations (consoles/PC)",
	"End Roll Medley (credits) - Sonic 4: Episode 1",
	"Boo's House: Final Lap (Sandopolis remix) - Team Sonic Racing",
	"Special Stage - Sonic 3D Blast (32-bit)",
	"The White of Sky (Skeleton Dome) - Sonic and the Secret Rings",
	"SONIC DRIVE (Japanese opening) - Sonic X",
	"The Light of Hope (Title Screen ver.) - Sonic Forces",
	"Jeh Jeh Rocket (Digital Remakin') - Sonic Rush",
	"Living in the City (LTN Mix) - Sonic Gems Collection",
	"Sweet Punch ...for Hedgehog Hammer - Sonic Adventure",
	"Blood Flow (Knuckles Mvt.) - Sonic Frontiers: Another Story",
	"Final Fortress - Sonic Heroes",
	"Cyber Space 3-1: Escape the Loop - Sonic Frontiers",
	"Boss - Sonic 2 (Game Gear)",
	"Cutscene: A New Frontier (opening) - Sonic 4: Episode 2",
	"Boss 2 - Sonic 3D Blast (16-bit)",
	"Un-gravitify: electro extended - Sonic Riders: Zero Gravity (album remix)",
	"Unstable World ...for Crazy Gadget - Sonic Adventure 2",
	"Thunder Deck: Lap Music - Team Sonic Racing",
	"Boss - Sonic Advance",
	"Circus Caravan (bonus stage/mini-game) - Sonic Lost World (Wii U)",
	"Launch Base Zone Act 2 - Sonic & Knuckles Collection (PC)",
	"Tidal Tempest (Bad Future) - Sonic CD (JP/EU)",
	"Event: The Past (dramatic cutscenes) - Sonic Adventure",
	"Yellow Desert Zone - Sonic Blast",
	"Deep Woods - Sonic and the Black Knight",
	"Marble Garden Zone Act 2 - Sonic 3 & Knuckles",
	"Title Screen (Super Sonic Racing) - Sonic R",	
	"Gigantic Angel Zone Act 2 (Chrome Gadget remix) - Sonic Pocket Adventure",
	"Ocean Base Act 1 - Sonic Advance 3",
	"Lake Rocky - Tails Adventure",
	"Menu - Sonic Rivals",
	"Title Screen - Sonic Gems Collection",
	"Asteroid Coaster Act 2 - Sonic Colors (DS)",
	"Fiery Passion (Desert Ruins Zone) - Sonic Runners",
	"Rusty Ruin Zone Act 1 - Sonic 3D Blast (32-bit)",
	"Rival Battle: Shadow the Hedgehog: Shadow Attack 'All Hail Shadow (Short ver.)' - Sonic Generations (consoles/PC)",
	"Egg Utopia Act 2 - Sonic Advance 2",
	"Cyber Space 4-I: Time Flyer Remix - Sonic Frontiers: Another Story",
	"Havoc Prognosis (Eggman Boss 2) - Sonic Mania",
	"Fist Bump (SXSW ver.) - Sonic Forces (album remix)",
	"Boss (Sonic 3 & Knuckles remix) - Sonic Pocket Adventure",
	"A Ghost's Pumpkin Soup ...for Pumpkin Hill - Sonic Adventure 2",
	"Fight the Knight (King Arthur boss) - Sonic and the Black Knight",
	"Ice Paradise Act 2 - Sonic Advance 2",
	"Sky Road: Lap Music - Team Sonic Racing",
	"Dusty Desert ~Quicksand~ - Sonic 06",
	"The Supernatural ...for Final Chase - Sonic Adventure 2",
	"Tails' House - Tails Adventure",
	"Skill Shop (Sonic 2 2P results remix) - Sonic Generations (consoles/PC)",
	"Apotos (Day) - Sonic Unleashed",
	"I'm with you (final boss) - Sonic Frontiers",
	"Gene Gadget Zone Act 1 - Sonic 3D Blast (32-bit)",
	"White Park Zone Act 3 - Sonic 4: Episode 2",
	"Flame Core ~The Cavern~ - Sonic 06",
	"Theme of Final Factory - Sonic Free Riders",
	"Volcanic Vault - SegaSonic the Hedgehog",
	"Secret Base Zone Act 2 - Sonic Advance",
	"Frozen Factory: Zone 1 - Sonic Lost World",
	"Meteor Base Zone Act 1 - Sonic Rivals",
	"Palmtree Panic (Good Future) - Sonic CD (US)",
	"Cutscene: Tense - Sonic Rush Adventure",
	"Starlight Carnival Act 2 - Sonic Colors (Wii)",
	"Ali Baba & Sinbad Rescued! (cutscene) - Sonic and the Secret Rings",
	"Emerald Hill - Sonic Drift 2",
	"Skyway Octane (Mirage Saloon Zone Act 1 ST Mix) - Sonic Mania",
	"Event: Let's Make It! (Hero Story opening cutscene) - Sonic Adventure 2",
	"What U Need (Digital Remakin') - Sonic Rush",
	"Sylvania Castle Zone Act 2 - Sonic 4: Episode 2",
	"Boss - Sonic 3 & Knuckles",
	"Cutscene: Apathy Meets Disappointment (pre-Silent Forest Act 2) - Sonic Lost World",
	"Spiral Madness (Botanical Kingdom/Snowy Kingdom) - Sonic Riders: Zero Gravity",
	"Ocean View: Final Lap (Sonic: You Can Do Anything) - Team Sonic Racing",
	"Boss - Sonic Chronicles: The Dark Brotherhood",
	"Sonic 3 (MegaD Mix) - Sonic Gems Collection",
	"Lost Labyrinth Zone Act 3 - Sonic 4: Episode 1",
	"Casino Paradise Zone Act 1 - Sonic Advance",
	"Quartz Quadrant (Past) - Sonic CD",
	"Machine Labyrinth Act 2 - Sonic Rush Adventure",
	"City Escape: Act 2 'Escape from the City: Blue Blur RMX' (Modern) - Sonic Generations (consoles/PC)",
	"The Palace That Was Found (Evil Foundry) - Sonic and the Secret Rings",
	"Labyrinth Zone - Sonic the Hedgehog (16-bit)",
	"Tropical Resort Act 2 - Sonic Colors (DS)",
	"Sonic Boom (opening theme) - Sonic CD (US)",
	"Theme of Green Cave (also White Cave) - Sonic Riders",
	"Diamond Dust Zone Act 2 - Sonic 3D Blast (32-bit)",
	"Mechanical Resonance ...for Final Egg - Sonic Adventure",
	"Bridge Island Zone Act 1 - Sonic Superstars",
	"Toy Kingdom Act 3 - Sonic Advance 3",
	"Gumball Bonus Stage - Sonic 3 & Knuckles",
	"It Doesn't Matter (cutscene right before Excalibur Sonic) - Sonic and the Black Knight",
	"Lost Impact - Shadow the Hedgehog",
	"Radical Highway: Act 1 'Vengeance Is Mine: Cash Cash RMX' (Classic) - Sonic Generations (3DS)",
	"Adabat (Night) - Sonic Unleashed",
	"Sweet Mountain Act 1 (Remix) - Sonic Colors: Ultimate", 
	"Death Egg mk.II Zone Act 2 (final boss) - Sonic 4: Episode 2",
	"Blue Spheres (bonus stage) - Sonic Mania",
	"Event: Dr. Eggman Appears (part of opening cutscene) - Sonic 06",
	"Back 2 Back (Water Palace) - Sonic Rush",
	"Clockwork Pyramid: Lap Music - Team Sonic Racing",
	"Special Stage - Sonic Advance 2",
	"Goin' Down!? ...for Speed Highway - Sonic Adventure",
	"Cyber Space 1-5: Dropaholic - Sonic Frontiers",
	"Metallic Madness (Past) - Sonic CD",
	"Boss: Heavy Dog (-GUN- Mobile remix) - Shadow the Hedgehog",
	"Cosmic Casino Zone Act 1 (Gumball Bonus Stage remix) - Sonic Pocket Adventure",
	"Event: The Future World? (cutscene, Sonic pre-Crisis City) - Sonic 06",
	"Flying Battery Zone Act 1 - Sonic 3 & Knuckles",
	"Pinball Carnival Zone Act 'Fruits' - Sonic Superstars",
	"Challenge / Mission 2 ('Quick Race' w/'Balloon Park') - Sonic Generations (consoles/PC)",
	"Casino Forest - Sonic Forces",
	"Theme of Sonic the Hedgehog ~2006 E3 version~ - Sonic 06",
	"Planet Wisp Act 3 - Sonic Colors (Wii)",
	"Mazuri (Day) - Sonic Unleashed",
	"High Flying Groove (results screen) - Sonic Riders",
	"Set in Motion (Guardian Rock) - Sonic Forces",
	"Danger! Chased by Rock ...for Lost World - Sonic Adventure",
	"Time Attack - Sonic Advance 3",
	"Special Stage - Sonic Blast",
	"Boss: Egg Emperor - Sonic Heroes",
	"Worth a Chance (ending) - Sonic and the Secret Rings",
	"Event: After the Fight (post-boss cutscene) - Sonic Rush",
	"Sky Temple Zone - Sonic Superstars",
	"Title Screen - Tails and the Music Maker",
	"Chaos Angel Act 2 - Sonic Advance 3",
	"Special Stage - Sonic the Hedgehog Genesis (GBA)",
	"End of the Summer (Tropical Coast Zone) - Sonic Runners",
	"Savannah Citadel (Night) - Sonic Unleashed",
	"Kronos Island: 5th Mvt. - Sonic Frontiers",
	"Area: Sweet Mountain - Sonic Colors (Wii)",
	"Cutscene: Waiting For Boss - Sonic Rush Adventure",
	"Egg Panicky (Egg Reverie Zone Pinch Mode; unused) - Sonic Mania",
	"Character Select (Party Mode) - Sonic and the Secret Rings",
	"Death Egg Zone Act 1 - Sonic 3 & Knuckles",
	"Boss Battle: Death Egg Robot (Phase 3) - Sonic Generations (consoles/PC)",
	"Virtual Reality [Supporting Me Remix] - Sonic Forces: Episode Shadow",
	"Chao Race (Beginner) - Sonic Adventure 2",
	"Hidden World: Cubliclated - Sonic Lost World",
	"Knight of the Wind (Ultimate Figure Skating) - Mario & Sonic at the Olympic Winter Games (DS)",
	"Meta Junglira Zone - Sonic Triple Trouble",
	"Invincible - Sonic 4: Episode 1 (WiiWare)",
	"Boss: vs. Team Battle - Sonic Heroes",
	"Sand Road: Lap Music (Sand Hill remix) - Team Sonic Racing",
	"Hill Top - Sonic Drift 2",
	"Guardian: ASURA - Sonic Frontiers",
	"Advertise: Rhythmic Passage (settings menu) - Sonic Adventure 2",
	"Frontier Canyon Zone Act 1 - Sonic Rivals 2",
	"Crisis City ~The Flames ~ Scyscraper ~ Whirlwind ~ Tornado~ - Sonic 06",
	"Battle with Zavok - Sonic Lost World",
	"Twinkle Snow Act 1 - Sonic Advance 3",
	"This Way Out ...for Prison Lane - Sonic Adventure 2",
	"Midnight Greenhouse (Botanic Base Zone) - Knuckles' Chaotix",
	"Rival Battle: Metal Sonic - Sonic Generations",
	"Theme of Sonic Colors - Sonic Colors (Wii)",
	"Battle: Quick Race (2P Play) - Sonic Heroes",
	"Carnival Night Zone Act 2 - Sonic Origins",
	"The Cauldron - Sonic and the Black Knight",
	"Infinite - Sonic Forces",
	"Cyber Space 3-2: Go Slap - Sonic Frontiers",
	"Give Me Chaos - Sonic in Sydney (Sega World)",
	"Metallic Madness Zone Act 1 - Sonic Mania",
	"His World (Blue World Prelude) - Theme of Summer of Sonic 2008 (Bentley Jones remix)",
	"Bingo Highway - Sonic Heroes",
	"Ice Mountain: Final Lap (Cool Edge & Reach for the Stars remix) - Team Sonic Racing",
	"Ending - Sonic 3D Blast (16-bit)",
	"Event: Blaze (cutscene) - Sonic Rush",
	"Aquarium Park Act 2 - Sonic Colors (Wii)",
	"Credits - Sonic Jam",
	"Challenge for Another Aim (stage select) - Sonic Adventure",
	"Boss Battle: Big Arms - Sonic Generations (3DS)",
	"Nonaggression (Ultimate Gemerl boss) - Sonic Advance 3",
	"Sonic Heroes (Title ver.) - Sonic Heroes",
	"Network (Sonic Mega Collection remix) - Sonic Generations",
	"Unused (later Sunset Park Act 3) - Sonic Chaos",
	"Vela-Nova (Dead Line boss) - Sonic Rush",
	"Midnight Owl (Silent Forest Zone 2) - Sonic Lost World",
	"Black Comet (Prison Island remix) - Shadow the Hedgehog",
	"Scramble for the Core ...for Cannon's Core ver. 1 - Sonic Adventure 2",
	"Event: I Will Change My Destiny (cutscene, Elise dies post-Radical Train) - Sonic 06",
	"Theme of Forgotten Tomb - Sonic Free Riders",
	"Power of the Ring (results) - Sonic and the Secret Rings",
	"Happy (credits) - Sonic Rivals",
	"Island Mystery: Pinball - Sonic Frontiers",
	"Green Hill Zone Act 2 - Sonic Mania",
	"Hot Crater Act 1 - Sonic Advance 2",
	"Planet Wisp Act 1 (Remix) - Sonic Colors: Ultimate",
	"Volcano Valley Zone Act 2 - Sonic 3D Blast (32-bit)",
	"Doctor's Mine: Final Lap - Team Sonic Racing",
	"Haunted Ship Act 2 - Sonic Rush Adventure",
	"Super Sonic (Wonder World ver.) - Sonic Lost World",
	"Speed Jungle Zone Act 'Sonic' - Sonic Superstars",
	"Knuckles Easter Egg (& Knuckles ending) - Sonic Mania",
	"Zone Select 1 - Sonic Advance 2",
	"Bonus Stage - Sonic Superstars",
	"Versus Mode - Sonic Eraser",
	"Open Your Heart - Sonic Adventure",
	"Ice Mountain: Lap Music (Cool Edge & Reach for the Stars remix) - Team Sonic Racing",
	"Event: Memory of Youth (cutscene, pre-Egg Cerebus) - Sonic 06",
	"vs. Nega-Wisp Armor (Phase 1) - Sonic Colors (DS)",
	"Star Light Zone - Sonic the Hedgehog Genesis (GBA)",
	"Sky Fortress Zone Act 1 - Sonic 4: Episode 2",
	"Dragon Road (Night) - Sonic Unleashed",
	"Get Edgy (Blazy Mix; Altitude Limit) - Sonic Rush",
	"Invincibility - Sonic 2 (8-bit)",
	"Be Cool, Be Wild, and Be Groovy (for Casino Park) - Sonic & Sega All-Stars Racing (DS)",
	"Boss - Sonic Labyrinth",
	"Soarin' Over Space ...for Cosmic Wall - Sonic Adventure 2",
	"Power Ride (Lava Mountain Zone) - Sonic Runners",
	"Route 99 Act 3 - Sonic Advance 3",
	"Guardian: NINJA - Sonic Frontiers",
	"Theme of Babylonian (unused) - Sonic Riders",
	"The Blur (Speed Shoes) - Sonic Mania",
	"Boss: Egg-Wyvern - Sonic 06",
	"Emerald Power: Vision - Sonic Superstars",
	"Limestone Cave ...for Ice Cap - Sonic Adventure",
	"Sealed Ground (Gigan Rocks/Gigan Device) - Sonic Riders: Zero Gravity",
	"Invincibility - Sonic Heroes",
	"Endless Possibility (30th Anniversary Ver.; Live) - Sonic 30th Anniversary Symphony (Live)",
	"Blue on the Run (Captain Bemoth; Pirate Storm boss) - Sonic and the Secret Rings",
	"Speed Highway: Act 2 'Run Through the Speed Highway' (Modern) - Sonic Generations (consoles/PC)",
	"Cutscene: Reboot (opening; Sonic Boom & Sonic: You Can Do Anything remix) - Sonic 4: Episode Metal",
	"Boss: Iblis Phase 3 - Sonic 06",
	"Jingle: Invincible ver. 1 (Classic) - Sonic Generations",
	"Network Terminal (Interior) - Sonic Forces",
	"Cutscene: Planet Pieces (continent restored) - Sonic Unleashed",
	"Tropical Resort Act 3 - Sonic Colors (Wii)",
	"2P vs. Battle (Radical Highway remix) - Shadow the Hedgehog",
	"Theme of Chao - Sonic Adventure",
	"Are You Brave (Sonic the Fighters remix) - Sonic Gems Collection",
	"Main Menu (Chao Race remix) - Sonic Advance 3",
	"Town Mission 1 - Sonic 06",
	"Launch Base Zone Act 2 (prototype version) - Sonic 3",
	"Emerald Hill Zone - Mario & Sonic at the Olympic Games (DS)",
	"Character Select - Sonic Chaos",
	"Cyber Space 4-A: Genshi Remix - Sonic Frontiers: Another Story",
	"Showdown - Sonic Spinball (16-bit)",
	"Chaotic Inferno Zone Act 1 - Sonic Rivals 2",
	"This is Who You Are (Avatar customization) - Sonic Forces",
	"Rhea Island - Sonic Frontiers",
	"Fly in the Freedom ...Theme of Rouge - Sonic Adventure 2",
	"Sky Sanctuary: Act 1 (Classic) - Sonic Generations (consoles/PC)",
	"Forest Falls Zone Act 2 - Sonic Rivals",
	"Press Factory Zone Act 1 - Sonic Superstars",
	"Splash Hill Zone Medley - Sonic 4: Episode 1 & 2 (soundtrack album)",
	"Game Land: Color Power - Sonic Colors (Wii)",
	"Aquatic Relix Zone Act 2 (Hydrocity Zone Act 1 remix) - Sonic Pocket Adventure",
	"White Gloves (Party Mode minigames) - Sonic and the Secret Rings",
	"vs. Nega-Wisp Armor (Phase 2) - Sonic Colors (DS)",
	"Undefeatable (Super Sonic vs. Giganto; boss) - Sonic Frontiers",
	"Cosmic Eternity: Believe in Yourself (credits) - Sonic CD (JP/EU)",
	"Transform into Excalibur Sonic (cutscene) - Sonic and the Black Knight",
	"Jingle: Result ver. 1 (S Rank) - Sonic Generations (consoles/PC)",
	"vs. Titan & Big Mother - Sonic Unleashed",
	"Casino Street Zone Act 3 - Sonic 4: Episode 1",
	"Fighting Onward (Space Port) - Sonic Forces",
	"Cyber Space: Results Screen (Complete) - Sonic Frontiers",
	"Emerl Configuration - Sonic Battle",
	"Game Land 7 (Terminal Velocity) - Sonic Colors (Wii)",
	"Stage Clear - Sonic Adventure 2",
	"Jingle: Chaos Control - Shadow the Hedgehog",
	"Super Sonic Racing (for Casino Park) - Sonic & Sega All-Stars Racing (DS)",
	"Honeycomb Highway (Desert Ruins Zone 2) - Sonic Lost World",
	"Hikaru Michi ('The Shining Road,' Japanese ending 2) - Sonic X",
	"Great Turquoise Zone - Sonic Triple Trouble",
	"Bright Sound ...for Dry Lagoon - Sonic Adventure 2",
	"vs. Orcan & Skullian (Remix) - Sonic Colors: Ultimate",
	"Ocean Palace - Sonic Heroes",
	"Neon Palace Zone Act 2 - Sonic Rivals 2",
	"Game Land Menu (Eggman's theme) - Sonic Colors (DS)",
	"Gigalopolis Zone - Sonic Chaos (Game Gear)",
	"Fight for My Own Way ...Boss: Event - Sonic Adventure",
	"Big Swell (Allegro) - Sonic Rush Adventure",
	"Star Light - Sonic Drift",
	"Cutscene: The Tornado Takes Off! (pre-Sky Fortress) - Sonic 4: Episode 2",
	"Live Life (credits) - Sonic and the Black Knight",
	"Aquarium Park Act 1 (Remix) - Sonic Colors: Ultimate",
	"Cyber Space 2-2: Heavenly Sky - Sonic Frontiers",
	"Steel Cortex (Titanic Monarch Zone Act 2) - Sonic Mania",
	"Boss - Sonic Blast",
	"Unknown from M.E. ...Theme of Knuckles - Sonic Adventure 2",
	"Dreams Dreams (NiGHTS into Dreams remix) - Sonic Pinball Party", 
	"Ice Cap Zone Act 1 - Sonic Origins",
	"Un-gravitify (Crush 40 version) - Sonic Riders: Zero Gravity (album remix)",
	"On the Edge ...for Eternal Engine - Sonic Adventure 2",
	"Wrapped in Black: Part 2 (final boss, pinch) - Sonic Rush",
	"Frozen Base Zone Act 1 - Sonic Superstars",
	"Free (main theme) - Sonic Free Riders",
	"Event: Strategy (Dark Story cutscene) - Sonic Adventure 2",
	"Gate: Radical Highway (White Space) - Shadow Generations",
	"vs. Dark Gaia (phase 1) - Sonic Unleashed",
	"The Doomsday Zone - Sonic 3 & Knuckles",
	"I'm Here: Revisited (final boss) - Sonic Frontiers: Another Story",
	"Event: Finale... Adventure Must Go On (ending cutscene) - Sonic Heroes",
	"You're My Number One (credits) - Sonic R",
	"Live & Learn (Live) - Sonic 30th Anniversary Symphony (Live)",
	"Title (Sonic 1 remix) - Sonic Generations (consoles/PC)",
	"Menu - Sonic Gems Collection",
	"Blue Coast Zone Act 1 (Race to Win remix) - Sonic Rivals 2",
	"This is Our World: Phase 1 (world map, early game) - Sonic Forces",
	"Angel Island Zone Act 1 - Sonic Advance",
	"Dragon Road (Day) - Sonic Unleashed",
	"The Machine - Sonic Spinball (8-bit)",
	"Spring Stadium Zone Act 2 - Sonic 3D Blast (32-bit)",
	"Chemical Plant Zone Act 2 - Sonic Mania",
	"Stardust Speedway (Bad Future) - Sonic CD (US)",
	"Ouranos Island (Remix) - Sonic Frontiers: Another Story",
	"Sweet Mountain Mission - Sonic Colors (DS)",
	"Tornado ...for Windy Valley - Sonic Adventure",
	"Dining Car 1 - The Murder of Sonic the Hedgehog",
	"Credits - Sonic Mega Collection",
	"Game Land 6 (Asteroid Coaster) - Sonic Colors (Wii)",
	"Titan: WYVERN - Sonic Frontiers",
	"Invincibility (Sonic & Knuckles remix) - Sonic Pocket Adventure",
	"Hydrocity Zone Act 2 - Sonic Mania",
	"Seaside Beach Act 2 - Sonic Boom: Shattered Crystal",
	"Perfect Chaos Revival! ...Boss: Perfect Chaos - Sonic Adventure",
	"Battle Mode: Menu - Sonic Superstars",
	"Caron Forest - Tails Adventure",
	"Egg Fortress Zone Act 1 - Sonic Superstars",
	"Endless Mine - Sonic 3 & Knuckles",
	"Sleeping Egg Zone - Sonic Chaos",
	"Shamar (Night) - Sonic Unleashed",
	"Asteroid Coaster Act 3 (Remix) - Sonic Colors: Ultimate",
	"Special Stage (3D) - Sonic Triple Trouble",
	"Launch Base Zone Act 1 - Sonic Origins",
	"It Has Come to This (Erazor Djinn; Night Palace boss) - Sonic and the Secret Rings",
	
  ];

  // Bug : Sometimes musics stops appearing in suggestions, it seems that musics dissapears at the end of the array
  // Adding empty string makes them unfindable and prevent this bug
  musicNameList = musicNameList.concat(
    new Array(musicNameList.length).fill("")
  );

var musicListWithLinks = [
		{
		url: "https://soundcloud.com/faded_boo/intro-4",
		answer: "Introduction ...featuring 'Open Your Heart' - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/bridge-zone",
		answer: "Bridge Zone - Sonic the Hedgehog (8-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/dream-racing-metropolitan-highway-sonic-forces",
		answer: "Metropolitan Highway (Dream Racing) - Mario & Sonic at the Tokyo 2020 Olympic Games",
		},
		{
		url: "https://soundcloud.com/faded_boo/title-8",
		answer: "Title Screen - Sonic the Hedgehog Genesis (GBA)",
		},
		{
		url: "https://soundcloud.com/faded_boo/night-palace",
		answer: "Unawakening Float (Night Palace) - Sonic and the Secret Rings",
		},
		{
		url: "https://soundcloud.com/cream-this-rabbit/flying-battery-zone-act-1-sonic-mania-ost",
		answer: "Flying Battery Zone Act 1 - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/faded_boo/robotnik-winter-zone",
		answer: "Robotnik Winter Zone - Sonic Triple Trouble",
		},
		{
		url: "https://soundcloud.com/faded_boo/sky-babylon-act-1",
		answer: "Sky Babylon Act 1 - Sonic Rush Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/white-space",
		answer: "White Space - Sonic Generations (consoles/PC)",
		},
		{
		url: "https://soundcloud.com/vgmplanet/lava-powerhouse-1",
		answer: "Lava Powerhouse - Sonic Spinball (16-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/windmill-isle-day",
		answer: "Windmill Isle (Day) - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/faded_boo/green-grove-act-1",
		answer: "Green Grove Zone Act 1 - Sonic 3D Blast (16-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/history",
		answer: "History - Sonic Mega Collection",
		},
		{
		url: "https://soundcloud.com/imasake-kun/sonic-the-hedgehog-ost-1-green",
		answer: "Green Hill Zone - Sonic the Hedgehog (16-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/chao-kindergarten",
		answer: "Chao Kindergarten - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/whisker-johnny",
		answer: "Whisker & Johnny (boss) - Sonic Rush Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/surprise",
		answer: "Surprise! (Metal Sonic boss) - Knuckles' Chaotix",
		},
		{
		url: "https://soundcloud.com/faded_boo/special-stage-21",
		answer: "Special Stage - Sonic Pocket Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/angel-island-act-2",
		answer: "Angel Island Zone Act 2 - Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/juan-vega-7/crush-40-his-world",
		answer: "His World (Crush 40 version) - Sonic 06",
		},
		{
		url: "https://soundcloud.com/faded_boo/chrome-gadget",
		answer: "Chrome Gadget - Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/faded_boo/seaside-hill-can-you-feel-the-sunshine",
		answer: "Can You Feel the Sunshine? (for Seaside Hill) - Sonic & Sega All-Stars Racing (DS)",
		},
		{
		url: "https://soundcloud.com/faded_boo/good-ending",
		answer: "Just Another Day (good ending) - Knuckles' Chaotix",
		},
		{
		url: "https://soundcloud.com/faded_boo/sonic-boom-ending",
		answer: "Sonic Boom (ending credits version) - Sonic CD (US)",
		},
		{
		url: "https://soundcloud.com/faded_boo/mystic-mansion",
		answer: "Mystic Mansion - Sonic Heroes",
		},		
		{
		url: "https://soundcloud.com/faded_boo/ice-cap-act-1",
		answer: "Ice Cap Zone Act 1 - Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/faded_boo/poloy-forest",
		answer: "Poloy Forest - Tails Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/eggman",
		answer: "E.G.G.M.A.N. ...Theme of Dr. Eggman - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/final-fight",
		answer: "The Final Fight - Sonic 3D Blast (32-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/special-stage-16",
		answer: "Special Stage - Sonic Colors (DS)",
		},
		{
		url: "https://soundcloud.com/faded_boo/options-290557624",
		answer: "Options - Sonic and the Black Knight",
		},
		{
		url: "https://soundcloud.com/faded_boo/asteroid-coaster-act-3",
		answer: "Asteroid Coaster Act 3 - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/faded_boo/open-your-heart-1",
		answer: "Open Your Heart - Sonic Pinball Party",
		},
		{
		url: "https://soundcloud.com/faded_boo/manual",
		answer: "Manual - Sonic Jam",
		},
		{
		url: "https://soundcloud.com/faded_boo/invincibility-1",
		answer: "Invincibility - Sonic 3",
		},
		{
		url: "https://soundcloud.com/faded_boo/all-over-credits",
		answer: "Ending Credits - SegaSonic the Hedgehog",
		},
		{
		url: "https://soundcloud.com/faded_boo/wave-ocean-the-inlet",
		answer: "Wave Ocean ~The Inlet~ - Sonic 06",
		},
		{
		url: "https://soundcloud.com/cream-this-rabbit/stardust-speedway-zone-act-1-sonic-mania-ost",
		answer: "Stardust Speedway Zone Act 1 - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/faded_boo/palmtree-panic-present",
		answer: "Palmtree Panic (Present) - Sonic CD (JP/EU)",
		},
		{
		url: "https://soundcloud.com/faded_boo/look-a-like",
		answer: "Look-a-like - Sonic OVA",
		},
		{
		url: "https://soundcloud.com/faded_boo/demo-4",
		answer: "Demo - Sonic Mega Collection",
		},
		{
		url: "https://soundcloud.com/faded_boo/sand-oasis",
		answer: "Let the Speed Mend It (Sand Oasis) - Sonic and the Secret Rings",
		},
		{
		url: "https://soundcloud.com/faded_boo/boss-1",
		answer: "Boss - Sonic the Hedgehog (16-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/seaside-hill-act-2",
		answer: "Seaside Hill: Act 2 (Modern) - Sonic Generations (consoles/PC)",
		},
		{
		url: "https://soundcloud.com/faded_boo/palmtree-panic-bad-future",
		answer: "Palmtree Panic (Bad Future) - Sonic CD (JP/EU)",
		},
		{
		url: "https://soundcloud.com/faded_boo/bonus-level",
		answer: "Bonus Stage - Sonic Spinball (8-bit)",
		},
		{
		url: "https://soundcloud.com/sonikku_daisuki/knight-of-the-wind-crush-40",
		answer: "Knight of the Wind - Sonic and the Black Knight",
		},
		{
		url: "https://soundcloud.com/faded_boo/evening-star",
		answer: "Evening Star (Newtrogic High Zone - Evening) - Knuckles' Chaotix",
		},
		{
		url: "https://soundcloud.com/faded_boo/crisis-city-act-2",
		answer: "Crisis City: Act 2 (Modern) - Sonic Generations (consoles/PC)",
		},
		{
		url: "https://soundcloud.com/faded_boo/main-menu-1",
		answer: "Main Menu (main.mid) - Sonic's Schoolhouse",
		},
		{
		url: "https://soundcloud.com/faded_boo/credits-s3",
		answer: "Credits - Sonic 3",
		},
		{
		url: "https://soundcloud.com/faded_boo/title",
		answer: "Title Screen - Sonic Battle",
		},
		{
		url: "https://soundcloud.com/faded_boo/reach-for-the-stars-re-colors",
		answer: "Reach for the Stars (Re-Colors) - Sonic Colors: Ultimate",
		},
		{
		url: "https://soundcloud.com/faded_boo/theme-of-dr-eggman",
		answer: "Theme of Dr. Eggman - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/tidal-tempest-present-2",
		answer: "Tidal Tempest (Present) - Sonic CD (US)",
		},
		{
		url: "https://soundcloud.com/faded_boo/city-sunset-heights",
		answer: "Sunset Heights - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/cream-this-rabbit/file-select-sonic-mania-ost",
		answer: "Sunshine Cassette (Save Select) - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/faded_boo/theme-of-sonic-colors-title-ver",
		answer: "Title Screen - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/faded_boo/knuckles-theme",
		answer: "Knuckles' Theme - Sonic 3",
		},
		{
		url: "https://soundcloud.com/faded_boo/end-of-the-world",
		answer: "End of the World - Sonic 06",
		},
		{
		url: "https://soundcloud.com/faded_boo/boss-room",
		answer: "Boss - Sonic Spinball (16-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/emerald-coast-azure-blue-world",
		answer: "Azure Blue World ...for Emerald Coast - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/the-final-fight",
		answer: "The Final Fight - Sonic 3D Blast (16-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/westopolis",
		answer: "Westopolis - Shadow the Hedgehog",
		},
		{
		url: "https://soundcloud.com/faded_boo/sea-gate",
		answer: "Sea Gate (tutorial) - Sonic Heroes",
		},
		{
		url: "https://soundcloud.com/faded_boo/the-deadly-six-orchestra-ver",
		answer: "The Deadly Six Theme (Orchestra ver.) - Sonic Lost World",
		},
		{
		url: "https://soundcloud.com/faded_boo/angel-island-zone-sonic-3",
		answer: "Angel Island Zone - Sonic Generations (consoles/PC)",
		},
		{
		url: "https://soundcloud.com/faded_boo/dead-line-blaze",
		answer: "What U Need (Blazy Mix; Dead Line) - Sonic Rush",
		},
		{
		url: "https://soundcloud.com/faded_boo/sonic-it-doesnt-matter",
		answer: "It Doesn't Matter ...Theme of Sonic - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/techno-base-act-1",
		answer: "Techno Base Act 1 - Sonic Advance 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/results",
		answer: "Results - Sonic 06",
		},
		{
		url: "https://soundcloud.com/faded_boo/metal-overlord",
		answer: "What I'm Made Of... / Last Boss ver. 2: Metal Overlord - Sonic Heroes",
		},
		{
		url: "https://soundcloud.com/turquoisecoast/kiyo-no-pause",
		answer: "Advertise ~ K.I.Y.O. - Sonic the Fighters",
		},
		{
		url: "https://soundcloud.com/shinyumbreons/his-world",
		answer: "His World - Sonic 06",
		},
		{
		url: "https://soundcloud.com/faded_boo/green-hill-zone-1",
		answer: "Green Hill Zone - Sonic Blast",
		},
		{
		url: "https://soundcloud.com/faded_boo/dr-eggman-1",  
		answer: "Boss: Dr. Eggman - Sonic 4: Episode 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/race-to-win",  
		answer: "Race to Win - Sonic Rivals 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/stage-13",
		answer: "Stage 13 - Dr. Robotnik's Mean Bean Machine (16-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/quartz-quadrant-present-2",
		answer: "Quartz Quadrant (Present) - Sonic CD (US)",
		},
		{
		url: "https://soundcloud.com/faded_boo/special-stage-4",
		answer: "Special Stage - Sonic CD (JP/EU)",
		},
		{
		url: "https://soundcloud.com/faded_boo/endless-mine",
		answer: "Endless Mine - Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/faded_boo/solaris-ver-1",
		answer: "Solaris Phase 1 - Sonic 06",
		},
		{
		url: "https://soundcloud.com/faded_boo/chao-garden-neutral-ver",
		answer: "Chao Garden (Neutral) - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/the-deadly-six-theme",
		answer: "The Deadly Six Theme - Sonic Lost World",
		},
		{
		url: "https://soundcloud.com/sonic-cd-us/sonic-cd-us-special-stage",
		answer: "Special Stage - Sonic CD (US)",
		},
		{
		url: "https://soundcloud.com/faded_boo/tropical-resort-act-1",  
		answer: "Tropical Resort Act 1 - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/faded_boo/surging-power",
		answer: "Surging Power (invincibility) - Knuckles' Chaotix",
		},
		{
		url: "https://soundcloud.com/faded_boo/sky-babylon-act-2",
		answer: "Sky Babylon Act 2 - Sonic Rush Adventure",
		},
		{
		url: "https://soundcloud.com/turquoisecoast/sonic-heroes-ost-sonic-heroes-no-pause-at-start",
		answer: "Sonic Heroes (main theme) - Sonic Heroes",
		},  
		{
		url: "https://soundcloud.com/faded_boo/tidal-tempest-present",
		answer: "Tidal Tempest (Present) - Sonic CD (JP/EU)",
		},  
		{
		url: "https://soundcloud.com/user-910172339/sonic-advance-ice-mountain",
		answer: "Ice Mountain Zone Act 2 - Sonic Advance",
		},
		{
		url: "https://soundcloud.com/faded_boo/green-hill",
		answer: "Green Hill - Sonic Battle",
		},  
		{
		url: "https://soundcloud.com/faded_boo/final-zone",
		answer: "Final Zone - Sonic the Hedgehog (16-bit)",
		},  
		{
		url: "https://soundcloud.com/faded_boo/sir-percival-the-knight-of-the-grail",
		answer: "Sir Percival... The Knight of the Grail (cutscene, Percival appears) - Sonic and the Black Knight",
		},
		{
		url: "https://soundcloud.com/onion_fyre/mystic-cave-zone",
		answer: "Mystic Cave Zone - Sonic 2 (16-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/mystic-jungle-aqua-road",
		answer: "Moonlight Battlefield (Aqua Road) - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/faded_boo/nega-mother-wisp",
		answer: "Nega-Mother Wisp - Sonic Colors (DS)",
		},
		{
		url: "https://soundcloud.com/faded_boo/aurora-icefield-black-bed",
		answer: "Aurora Icefield ~ Black Bed - Sonic the Fighters",
		},
		{
		url: "https://soundcloud.com/faded_boo/resort-island",
		answer: "Can You Feel the Sunshine? (Resort Island) - Sonic R",
		},  
		{
		url: "https://soundcloud.com/faded_boo/2-player-vs",
		answer: "2 Player Vs. - Dr. Robotnik's Mean Bean Machine (16-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/invincible-no-fear",  
		answer: "Invincible ...No Fear! - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/casino-night-zone",
		answer: "Casino Night Zone - Sonic 2 (16-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/data-select",
		answer: "Data Select - Sonic 3 & Knuckles",
		},  
		{
		url: "https://soundcloud.com/faded_boo/twinkle-snow-act-2-1",
		answer: "Twinkle Snow Act 2 - Sonic Advance 3",
		},  
		{
		url: "https://soundcloud.com/faded_boo/bad-ending-1",
		answer: "Destructive Power (bad ending) - Knuckles' Chaotix",
		},  
		{
		url: "https://soundcloud.com/faded_boo/solaris-ver-2",
		answer: "Solaris Phase 2 - Sonic 06",
		},
		{
		url: "https://soundcloud.com/faded_boo/egg-fleet",
		answer: "Egg Fleet - Sonic Heroes",
		},
		{
		url: "https://soundcloud.com/faded_boo/death-egg-egg-gate",
		answer: "Egg Gate - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/faded_boo/boos-house",
		answer: "Boo's House: Lap Music - Team Sonic Racing",
		},
		{
		url: "https://soundcloud.com/faded_boo/seaside-hill",
		answer: "Seaside Hill - Sonic Heroes",
		},
		{
		url: "https://soundcloud.com/faded_boo/opening-1",
		answer: "Intro - Sonic 3D Blast (32-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/can-you-feel-the-sunshine-acid-mix",
		answer: "Can You Feel the Sunshine? (ACID Mix) - Sonic Gems Collection",
		},
		{
		url: "https://soundcloud.com/faded_boo/emerald-town",
		answer: "Emerald Town - Sonic Battle",
		},
		{
		url: "https://soundcloud.com/faded_boo/starlight-carnival-act-1-remix",
		answer: "Starlight Carnival Act 1 (Remix) - Sonic Colors: Ultimate",
		},
		{
		url: "https://soundcloud.com/faded_boo/event-super-shadow",
		answer: "Event: Super Shadow (cutscene, pre-final boss) - Shadow the Hedgehog",
		},
		{
		url: "https://soundcloud.com/faded_boo/dead-line-what-u-need",
		answer: "What U Need (Dead Line) - Sonic Rush",
		},
		{
		url: "https://soundcloud.com/faded_boo/terminal-velocity",
		answer: "Area: Terminal Velocity - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/faded_boo/amy-my-sweet-passion",
		answer: "My Sweet Passion ...Theme of Amy - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/sonic-speed-riders",
		answer: "Sonic Speed Riders (intro/main theme) - Sonic Riders",
		},
		{
		url: "https://soundcloud.com/faded_boo/sea-map",
		answer: "Sea Map - Sonic Rush Adventure",
		},
		{
		url: "https://soundcloud.com/cesar-stone-junior/throw-it-all-away-theme-of-shadow",
		answer: "Throw It All Away ...Theme of Shadow - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/icy-isle-ice-water",
		answer: "Icy Isle & Wild Water Ways - SegaSonic the Hedgehog",
		},
		{
		url: "https://soundcloud.com/faded_boo/results-5",
		answer: "Result Screen - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/faded_boo/gigantic-angel-zone-act-1",
		answer: "Gigantic Angel Zone Act 1 (Desert Palace) - Sonic Pocket Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/theme-of-sonics-event",
		answer: "Event: Sonic (cutscene) - Sonic Rush",
		},
		{
		url: "https://soundcloud.com/faded_boo/cool-edge-day",
		answer: "Cool Edge (Day) - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/faded_boo/eggman-doc-robeatnix-mix",
		answer: "E.G.G.M.A.N. Doc. Robeatnix (remix) - Shadow the Hedgehog",
		},
		{
		url: "https://soundcloud.com/faded_boo/knuckles-theme-1",
		answer: "Knuckles' Theme - Sonic & Knuckles and Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/faded_boo/death-egg-robot-ver-2",
		answer: "Boss Battle: Death Egg Robot (Phase 2) - Sonic Generations (consoles/PC)",
		},
		{
		url: "https://soundcloud.com/faded_boo/invincible-sonic-heroes",
		answer: "Invincible (Sonic Heroes ver.) - Sonic Lost World",
		},
		{
		url: "https://soundcloud.com/faded_boo/battle-on-the-death-egg",
		answer: "Battle on the Death Egg - Sonic Battle",
		},
		{
		url: "https://soundcloud.com/faded_boo/lost-labyrinth-zone-act-2",
		answer: "Lost Labyrinth Zone Act 2 - Sonic 4: Episode 1",
		},
		{
		url: "https://soundcloud.com/faded_boo/beyond-the-speed-of",
		answer: "Beyond the Speed of... (Windy Hill) - Sonic Runners",
		},
		{
		url: "https://soundcloud.com/faded_boo/arid-sands-night",
		answer: "Arid Sands (Night) - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/faded_boo/mechanical-dance",
		answer: "Mechanical Dance (Game Over) - Knuckles' Chaotix",
		},
		{
		url: "https://soundcloud.com/faded_boo/planet-wisp-act-1",
		answer: "Planet Wisp Act 1 - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/faded_boo/main-menu",
		answer: "Main Menu - Sonic Dash",
		},
		{
		url: "https://soundcloud.com/faded_boo/crystal-egg-zone",
		answer: "Crystal Egg Zone - Sonic 2 (8-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/splash-hill-zone-act-1",
		answer: "Splash Hill Zone Act 1 - Sonic 4: Episode 1",
		},
		{
		url: "https://soundcloud.com/faded_boo/bonus-stage",
		answer: "Bonus Stage - Sonic Spinball (16-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/palmtree-panic-past",
		answer: "Palmtree Panic (Past) - Sonic CD",
		},
		{
		url: "https://soundcloud.com/faded_boo/green-hill-zone-3",
		answer: "Green Hills Zone - Sonic 2 (8-bit)",
		},
		{
		url: "https://soundcloud.com/user-592901685/for-true-story-for-sonic-vs",
		answer: "For True Story ...for Sonic vs. Shadow (boss) - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/special-stage-17",
		answer: "Special Stage - Sonic 3D Blast (16-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/death-eggs-hangar-hurry-up",
		answer: "Death Egg's Hangar ~ Hurry Up - Sonic the Fighters",
		},
		{
		url: "https://soundcloud.com/faded_boo/boss-9",
		answer: "Boss - Sonic Advance 3",
		},
		{
		url: "https://soundcloud.com/faded_boo/neo-south-island-zone-act-1",
		answer: "Neo South Island Zone Act 1 (Sonic World) - Sonic Pocket Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/event-to-the-station-in-the-sky",
		answer: "Cutscene: To the Station in the Sky (pre-E.G.G. Station Zone) - Sonic 4: Episode 1",
		},
		{
		url: "https://soundcloud.com/faded_boo/labyrinth-zone-1",
		answer: "Labyrinth Zone - Sonic the Hedgehog (8-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/desert-dodge-hot-pursuit",
		answer: "Desert Dodge - SegaSonic the Hedgehog",
		},
		{
		url: "https://soundcloud.com/faded_boo/fist-bump-fm-ver",
		answer: "Fist Bump (FM ver.) - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/faded_boo/ocean-view-1",
		answer: "Ocean View (You Can Do Anything ~ Super Sonic Racing) - Sonic & All-Stars Racing Transformed",
		},
		{
		url: "https://soundcloud.com/faded_boo/special-stage-3",
		answer: "Special Stage - Sonic 2 (16-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/sunset-park-zone",
		answer: "Sunset Park Zone - Sonic Triple Trouble",
		},
		{
		url: "https://soundcloud.com/turquoisecoast/sonic-adventure-2-ost-it-doesnt-matter-theme-of-sonic-no-pause-at-start",
		answer: "It Doesn't Matter ...Theme of Sonic - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/planet-wisp-act-6",
		answer: "Planet Wisp Act 1 - Sonic Colors (DS)",
		},
		{
		url: "https://soundcloud.com/faded_boo/04-green-hill",
		answer: "Green Hill - Sonic Drift",
		},
		{
		url: "https://soundcloud.com/faded_boo/eggmanland-entrance",
		answer: "Eggmanland Entrance - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/faded_boo/title-screen-4",
		answer: "Title Screen - Sonic 4: Episode 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/toxic-caves-1st-level",
		answer: "Toxic Caves - Sonic Spinball (16-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/night-carnival-ska-cha-cha",
		answer: "Ska Cha Cha (Night Carnival) - Sonic Rush",
		},
		{
		url: "https://soundcloud.com/faded_boo/menu",
		answer: "Menu - Sonic Jam",
		},
		{
		url: "https://soundcloud.com/faded_boo/jungle-zone",
		answer: "Jungle Zone - Sonic the Hedgehog (8-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/windy-hill-zone-1",
		answer: "Windy Hill: Zone 1 - Sonic Lost World",
		},
		{
		url: "https://soundcloud.com/faded_boo/bonus-stage-1-magnetic-orbs",
		answer: "Magnetic Orb Bonus Stage - Sonic & Knuckles and Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/faded_boo/dusty-desert-the-ruins",
		answer: "Dusty Desert ~The Ruins~ - Sonic 06",
		},
		{
		url: "https://soundcloud.com/faded_boo/intro-2",
		answer: "Title Screen - Sonic CD (JP/EU)",
		},
		{
		url: "https://soundcloud.com/cream-this-rabbit/sonic-mania-ost-press-garden-act-1",
		answer: "Tabloid Jargon (Press Garden Zone Act 1) - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/faded_boo/shadow-team-this-machine",
		answer: "This Machine ...Theme of Team Dark - Sonic Heroes",
		},
		{
		url: "https://soundcloud.com/faded_boo/oil-ocean-zone",
		answer: "Oil Ocean Zone - Sonic 2 (16-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/death-egg-mkii-zone-act-1",
		answer: "Death Egg mk.II Zone Act 1 - Sonic 4: Episode 2",
		},
		{
		url: "https://soundcloud.com/cream-this-rabbit/hydrocity-zone-act-1-hq-sonic-mania-ost",
		answer: "Hydrocity Zone Act 1 - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/faded_boo/fastest-thing-aliveh",
		answer: "The Fastest Thing Alive (opening theme) - Sonic SatAM",
		},
		{
		url: "https://soundcloud.com/faded_boo/sunset-hill-map",
		answer: "Sunset Hill Map - Sonic Advance 3",
		},
		{
		url: "https://soundcloud.com/faded_boo/chemical-plant-zone-act-3",
		answer: "Chemical Plant Zone Act 1 - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/sonic_complete/title-screen",
		answer: "Title Screen - Sonic the Hedgehog (16-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/final-egg-crank-the-heat-up",
		answer: "Crank the Heat Up!! ...for Final Egg - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/super-sonic-everything",
		answer: "Super Sonic ~ Everything - Sonic the Fighters",
		},
		{
		url: "https://soundcloud.com/faded_boo/event-the-last-scene",
		answer: "Event: The Last Scene (ending) - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/time-eater-classic",
		answer: "Boss Battle: Time Eater ver. 2 (Classic) - Sonic Generations",
		},
		{
		url: "https://soundcloud.com/faded_boo/prison-island",
		answer: "Prison Island - Shadow the Hedgehog",
		},
		{
		url: "https://soundcloud.com/faded_boo/result-screen-e-rank",
		answer: "Results Screen (E Rank) - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/faded_boo/sunset-park-zone-train",
		answer: "Sunset Park Zone Act 3 - Sonic Triple Trouble",
		},
		{
		url: "https://soundcloud.com/faded_boo/opening-music-sonic-3d-blast",
		answer: "Intro - Sonic 3D Blast (16-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/sonic-advance-neo-green-hill",
		answer: "Neo Green Hill Zone Act 1 - Sonic Advance",
		},
		{
		url: "https://soundcloud.com/faded_boo/spring-stadium-zone-act-1",
		answer: "Spring Stadium Zone Act 1 - Sonic 3D Blast (16-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/will-you-continue",
		answer: "Will You Continue? - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/emerls-theme",
		answer: "Emerl's Theme - Sonic Battle",
		},
		{
		url: "https://soundcloud.com/sonic_complete/metropolis-zone",
		answer: "Metropolis Zone - Sonic 2 (16-bit)",
		},
		{
		url: "https://soundcloud.com/turquoisecoast/a-new-venture-surfin-sra-remix-no-pause-at-start",
		answer: "A New Venture ~Surfin' S.R.A. Remix~ - Sonic Rush Adventure (album remix)",
		},
		{
		url: "https://soundcloud.com/faded_boo/mission-5-youre-my-hero",
		answer: "Challenge / Mission 5 (title screen & 'You're My Hero') - Sonic Generations (consoles/PC)",
		},
		{
		url: "https://soundcloud.com/faded_boo/secret-zone-green-hill-zone",
		answer: "Green Hill - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/launch-base-act-1",
		answer: "Launch Base Zone Act 1 - Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/faded_boo/snowball-waltz",
		answer: "Snowball Waltz (Frozen Factory Zone 2) - Sonic Lost World",
		},
		{
		url: "https://soundcloud.com/faded_boo/seaside-hill-seaside-hill",
		answer: "Seaside Hill - Sonic & Sega All-Stars Racing (DS)",
		},
		{
		url: "https://soundcloud.com/cream-this-rabbit/main-menu-sonic-mania-ost",
		answer: "Comfort Zone (Main Menu) - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/faded_boo/splash-hill-zone-act-3",
		answer: "Splash Hill Zone Act 3 - Sonic 4: Episode 1",
		},
		{
		url: "https://soundcloud.com/faded_boo/fist-bump",
		answer: "Fist Bump - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/faded_boo/sonic-advance-music-egg",
		answer: "Egg Rocket Zone - Sonic Advance",
		},
		{
		url: "https://soundcloud.com/faded_boo/dr-eggman-showdown",
		answer: "Dr. Eggman Showdown (final boss) - Sonic Lost World",
		},
		{
		url: "https://soundcloud.com/faded_boo/theme-of-after-the-fight",
		answer: "Event: After the Fight (post-boss cutscene) - Sonic Rush",
		},
		{
		url: "https://soundcloud.com/station-square-radio/door-into-summer",
		answer: "Door Into Summer (Isolated Island 2) - Knuckles' Chaotix",
		},
		{
		url: "https://soundcloud.com/faded_boo/mephiles-ver-2",
		answer: "Boss: Mephiles Phase 2 - Sonic 06",
		},
		{
		url: "https://soundcloud.com/station-square-radio/mt-red-a-symbol-of-thrill-for-red-mountain-no-pause-at-start",
		answer: "Mt. Red: A Symbol of Thrill ...for Red Mountain - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/hidden-palace-zone",
		answer: "Hidden Palace Zone (unused) - Sonic 2 (16-bit)",
		},
		{
		url: "https://soundcloud.com/station-square-radio/sa2-ver-b-no-pause-at-start",
		answer: "Advertise: SA2 ver. B (main menu) - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/endless-possibility-vocal-theme",
		answer: "Endless Possibility - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/faded_boo/coral-cave-act-1",
		answer: "Coral Cave Act 1 - Sonic Rush Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/green-hill-zone-act-2",
		answer: "Green Hill: Act 2 (Modern) - Sonic Generations",
		},
		{
		url: "https://soundcloud.com/station-square-radio/the-wicked-wild-no-pause-at-start",
		answer: "The Wicked Wild (Dinosaur Jungle) - Sonic and the Secret Rings",
		},
		{
		url: "https://soundcloud.com/faded_boo/death-egg-zone",
		answer: "Death Egg Zone - Sonic 2 (16-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/extra-ending",
		answer: "Extra Ending (cutscene after true final boss) - Sonic Advance 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/boss-pinch-1",
		answer: "Boss (Pinch) - Sonic 4: Episode 1",
		},
		{
		url: "https://soundcloud.com/faded_boo/wacky-workbench-present-2",
		answer: "Wacky Workbench (Present) - Sonic CD (US)",
		},
		{
		url: "https://soundcloud.com/faded_boo/sunset-hill-act-2",
		answer: "Sunset Hill Act 2 - Sonic Advance 3",
		},
		{
		url: "https://soundcloud.com/faded_boo/credits-sa2",
		answer: "Credits - Sonic Advance 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/super-sonic-racing",
		answer: "Super Sonic Racing - Sonic R",
		},
		{
		url: "https://soundcloud.com/faded_boo/special-stage-a-new-day-intermission",
		answer: "A New Day: Intermission (special stage intro/ending) - Sonic Rush",
		},
		{
		url: "https://soundcloud.com/faded_boo/main-menu-5",
		answer: "Menu - Sonic 06",
		},
		{
		url: "https://soundcloud.com/faded_boo/a-new-venture",
		answer: "A New Venture - Sonic Rush Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/tropical-resort-act-2-remix",
		answer: "Tropical Resort Act 2 (Remix) - Sonic Colors: Ultimate",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-unleashed-ost-skyscraper",
		answer: "Skyscraper Scamper (Night) - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/faded_boo/neo-green-hill",
		answer: "Neo Green Hill Zone - Sonic Generations",
		},
		{
		url: "https://soundcloud.com/station-square-radio/fan-art-it-doesnt-matter-no-pause-at-start",
		answer: "Fan Art: It Doesn't Matter - Sonic and the Black Knight",
		},
		{
		url: "https://soundcloud.com/faded_boo/egg-dragoon-pinch",
		answer: "Battle with Egg Dragoon Mk. II (Pinch) - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/faded_boo/event-madness",
		answer: "Event: Madness (cutscene, Gerald's message) - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/wacky-workbench-past",
		answer: "Wacky Workbench (Past) - Sonic CD",
		},
		{
		url: "https://soundcloud.com/faded_boo/tornado-defense-1st-battle",
		answer: "Tornado Defense: 1st Battle - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/faded_boo/green-hill-zone-6",
		answer: "Green Hill Zone - Sonic the Hedgehog Genesis (GBA)",
		},
		{
		url: "https://soundcloud.com/station-square-radio/the-dreamy-stage-no-pause-at-start",
		answer: "The Dreamy Stage ...for Casinopolis - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/intro-sonic-advance-music",
		answer: "Intro - Sonic Advance",
		},
		{
		url: "https://soundcloud.com/faded_boo/metropolis-null-space",
		answer: "Null Space - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/faded_boo/toxic-pools",
		answer: "Toxic Pools - Sonic Spinball (8-bit)",
		},
		{
		url: "https://soundcloud.com/cream-this-rabbit/angel-island-zone-sonic-mania-ost-plus",
		answer: "Angel Island Zone - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/faded_boo/results-s-rank",
		answer: "Jingle: Result ver. 2 (A Rank or below) - Sonic Generations (consoles/PC)",
		},
		{
		url: "https://soundcloud.com/faded_boo/wave-cyclonespecial-stage",
		answer: "Waterbike/Special Stage - Sonic Rush Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/death-egg-robot-ver-4",
		answer: "Battle with Mega Death Egg Robot: Phase 3 (final boss) - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/faded_boo/bonus-stage-slot-machine",
		answer: "Slot Machine Bonus Stage - Sonic & Knuckles and Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/faded_boo/12-credits",
		answer: "Credits - Sonic Drift",
		},
		{
		url: "https://soundcloud.com/faded_boo/all-hail-shadow",
		answer: "All Hail Shadow - Shadow the Hedgehog",
		},
		{
		url: "https://soundcloud.com/faded_boo/demo-3",
		answer: "Demo - Sonic Gems Collection",
		},
		{
		url: "https://soundcloud.com/faded_boo/boss-type-i",
		answer: "Boss - Sonic 4: Episode 1",
		},
		{
		url: "https://soundcloud.com/faded_boo/chao-karate-fight",
		answer: "Chao Karate - Sonic Adventure 2: Battle",
		},
		{
		url: "https://soundcloud.com/faded_boo/game-land-4",
		answer: "Game Land 4 (Planet Wisp) - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/faded_boo/ice-paradise-act-1",
		answer: "Ice Paradise Act 1 - Sonic Advance 2",
		},
		{
		url: "https://soundcloud.com/station-square-radio/death-eggs-eye-no-pause-at-start",
		answer: "Death Egg's Eye ~ Never Let It Go - Sonic the Fighters",
		},
		{
		url: "https://soundcloud.com/faded_boo/sea-bottom-segue",
		answer: "Sea Bottom Segue (Tropical Coast Zone 3) - Sonic Lost World",
		},
		{
		url: "https://soundcloud.com/sonic-cd-best-sonic-4/4-13-metallic-madness-us",
		answer: "Metallic Madness (Present) - Sonic CD (US)",
		},
		{
		url: "https://soundcloud.com/station-square-radio/camelot-castle-no-pause-at-start",
		answer: "Camelot Castle - Sonic and the Black Knight",
		},
		{
		url: "https://soundcloud.com/faded_boo/boss-allegro",
		answer: "Boss (Allegro) - Sonic Rush Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/rusty-ruin-zone-act-1",
		answer: "Rusty Ruin Zone Act 1 - Sonic 3D Blast (16-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/sweet-mountain-act-1",
		answer: "Sweet Mountain Act 1 - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/station-square-radio/keys-the-ruin-for-pyramid-cave-no-pause-at-start",
		answer: "Keys the Ruin ...for Pyramid Cave - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/zubro/sonic-the-black-knight-with-me",
		answer: "With Me (final boss) - Sonic and the Black Knight",
		},
		{
		url: "https://soundcloud.com/faded_boo/rooftop-run-act-1",
		answer: "Rooftop Run: Act 1 (Classic) - Sonic Generations (consoles/PC)",
		},
		{
		url: "https://soundcloud.com/vgmplanet/sonic-adventure-107-big-fishes",
		answer: "Big Fishes at Emerald Coast... - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/title-screen-10",
		answer: "Title Screen - Sonic Blast",
		},
		{
		url: "https://soundcloud.com/faded_boo/rusty-ruin-zone-act-3",
		answer: "Rusty Ruin Zone Act 2 - Sonic 3D Blast (32-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/ocean-view",
		answer: "Ocean View: Lap Music (Sonic: You Can Do Anything) - Team Sonic Racing",
		},
		{
		url: "https://soundcloud.com/jaysamra/crush-40-i-am-all-of-me",
		answer: "I Am... All of Me - Shadow the Hedgehog",
		},
		{
		url: "https://soundcloud.com/coolbluehog/sonic-frontiers-im-here-full-version",
		answer: "I'm Here (main theme) - Sonic Frontiers",
		},
		{
		url: "https://soundcloud.com/skyanultra/knuckles-chaotix-childs-song",
		answer: "Child's Song (Speed Slider boss) - Knuckles' Chaotix",
		},
		{
		url: "https://soundcloud.com/station-square-radio/tornado-time-no-pause-at-start",
		answer: "Tornado Time (Hidden World Zone 2; Believe in Myself) - Sonic Lost World",
		},
		{
		url: "https://soundcloud.com/user-485710179/his-world-zebrahead",
		answer: "His World (Zebrahead version) - Sonic 06",
		},
		{
		url: "https://soundcloud.com/station-square-radio/area-planet-wisp-no-pause-at-start",
		answer: "Area: Planet Wisp - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/faded_boo/mushroom-hill-act-2",
		answer: "Mushroom Hill Zone Act 2 - Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/faded_boo/music-plant-act-1",
		answer: "Music Plant Act 1 - Sonic Advance 2",
		},
		{
		url: "https://soundcloud.com/cho-cho-fiesta/weapons-bed",
		answer: "Crush 'em All ...for Weapons Bed - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/neo-south-island-zone-act-2",
		answer: "Neo South Island Zone Act 2 (Angel Island Zone Act 1) - Sonic Pocket Adventure",
		},
		{
		url: "https://soundcloud.com/user-304781955/sonic-forces-ost-luminous-forest",
		answer: "Luminous Forest - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/faded_boo/cloggy-dance",
		answer: "Cloggy Dance (title screen) - Sonic Shuffle",
		},
		{
		url: "https://soundcloud.com/faded_boo/gotta-go-fast-1",
		answer: "Sonic X Theme (aka Gotta Go Fast; American opening) - Sonic X",
		},
		{
		url: "https://soundcloud.com/sonic-mania-456108433/sonic-mania-discovery-title",
		answer: "Discovery (Title Screen) - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/faded_boo/eggmans-super-sucky-machine",
		answer: "Eggman's Super Sucky Machine (minigame) - Sonic X (Leapster)",
		},
		{
		url: "https://soundcloud.com/faded_boo/crisis-city-act-1",
		answer: "Crisis City: Act 1 (Classic) - Sonic Generations (consoles/PC)",
		},
		{
		url: "https://soundcloud.com/faded_boo/sonic-rush-prototype-boss-1",
		answer: "Boss (E3 prototype version) - Sonic Rush",
		},
		{
		url: "https://soundcloud.com/faded_boo/mushroom-hill-act-1",
		answer: "Mushroom Hill Zone Act 1 - Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/station-square-radio/theme-of-metropolis-speedway-no-pause-at-start",
		answer: "Theme of Metropolis Speedway - Sonic Free Riders",
		},
		{
		url: "https://soundcloud.com/stea27/crush-40-live-learn-full-main",
		answer: "Live and Learn - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/skyanultra/knuckles-chaotix-speed-of",
		answer: "Speed of Sound (Speed Slider) - Knuckles' Chaotix",
		},
		{
		url: "https://soundcloud.com/faded_boo/sonic-advance-music-ice",
		answer: "Ice Mountain Zone Act 1 - Sonic Advance",
		},
		{
		url: "https://soundcloud.com/faded_boo/dream-figure-skating-theme-of-dr-eggman",
		answer: "Theme of Dr. Eggman (Dream Figure Skating; Adventure remix) - Mario & Sonic at the Olympic Winter Games (Wii)",
		},
		{
		url: "https://soundcloud.com/faded_boo/egg-cerebus-egg-genesis",
		answer: "Boss: Egg-Cerberus & Egg-Genesis - Sonic 06",
		},
		{
		url: "https://soundcloud.com/cream-this-rabbit/studiopolis-zone-act-2-sonic-mania-ost",
		answer: "Prime Time (Studiopolis Zone Act 2) - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/faded_boo/flying-battery-act-2",
		answer: "Flying Battery Zone Act 2 - Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/faded_boo/egg-dragoon-2",
		answer: "Battle with Egg Dragoon Mk. II - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/faded_boo/emerald-beach",
		answer: "Emerald Beach - Sonic Battle",
		},
		{
		url: "https://soundcloud.com/faded_boo/turquoise-hill-zone",
		answer: "Turquoise Hill Zone - Sonic Chaos (Master System)",
		},
		{
		url: "https://soundcloud.com/faded_boo/special-stage-12",
		answer: "Special Stage - Sonic 4: Episode 1",
		},
		{
		url: "https://soundcloud.com/faded_boo/invincible-7",
		answer: "Invincibility - Sonic Advance",
		},
		{
		url: "https://soundcloud.com/faded_boo/team-chaotix",
		answer: "Team Chaotix ...Theme of Team Chaotix - Sonic Heroes",
		},
		{
		url: "https://soundcloud.com/faded_boo/werehog-battle-theme-a",
		answer: "Werehog Battle Theme - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/faded_boo/04-scenario",
		answer: "Scenario - Dr. Robotnik's Mean Bean Machine (8-bit)",
		},
		{
		url: "https://soundcloud.com/station-square-radio/hey-you-its-time-to-speed-up-no-pause-at-start",
		answer: "Hey You! It's Time to Speed Up!!! (speed shoes) - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/dynamite-plant-try-again",
		answer: "Dynamite Plant ~ Try Again - Sonic the Fighters",
		},
		{
		url: "https://soundcloud.com/faded_boo/competition-menu",
		answer: "Competition Menu - Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/faded_boo/jungle-joyride-day",
		answer: "Jungle Joyride (Day) - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/faded_boo/aquarium-park-act-3-remix",
		answer: "Aquarium Park Act 3 (Remix) - Sonic Colors: Ultimate",
		},
		{
		url: "https://soundcloud.com/faded_boo/extra-zone-intro-the-metamorphosis",
		answer: "Extra Zone Intro: The Metamorphosis (cutscene, Super transformation) - Sonic Rush",
		},
		{
		url: "https://soundcloud.com/faded_boo/wisp-circuit",
		answer: "Wisp Circuit: Intro Fly-by / Lap Music - Team Sonic Racing",
		},
		{
		url: "https://soundcloud.com/faded_boo/diamond-dust-zone-act-3",
		answer: "Diamond Dust Zone Act 1 - Sonic 3D Blast (32-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/tachy-touch",
		answer: "Tachy Touch (Bonus Stage) - Knuckles' Chaotix",
		},
		{
		url: "https://soundcloud.com/vgmplanet/bomber-barbara",
		answer: "Bomber Barbara - Sonic Rush",
		},
		{
		url: "https://soundcloud.com/faded_boo/01-title",
		answer: "Title Screen - Sonic Boom: Rise of Lyric",
		},
		{
		url: "https://soundcloud.com/faded_boo/icecap-be-cool-be-wild-and-be-groovy",
		answer: "Be Cool, Be Wild, and Be Groovy ...for Ice Cap - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/goodbye-chao",
		answer: "Goodbye Chao - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/radical-train-the-abadoned-mine",
		answer: "Radical Train ~The Abandoned Mine~ - Sonic 06",
		},
		{
		url: "https://soundcloud.com/faded_boo/wing-fortress-zone",
		answer: "Wing Fortress Zone - Sonic 2 (16-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/mad-gear-zone-act-2",
		answer: "Mad Gear Zone Act 2 - Sonic 4: Episode 1",
		},
		{
		url: "https://soundcloud.com/faded_boo/toxic-caves",
		answer: "Toxic Caves - Sonic Generations",
		},
		{
		url: "https://soundcloud.com/faded_boo/the-world-adventure-piano-version",
		answer: "The World Adventure (Piano Version) - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/way-to-the-base-for-sand-ocean-clipped-at-start",
		answer: "Way to the Base ...for Sand Ocean - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/menu-5",
		answer: "Menu - Sonic Battle",
		},
		{
		url: "https://soundcloud.com/faded_boo/green-hill-green-hill",
		answer: "Faded Hills: Green Hill - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/faded_boo/tidal-tempest-bad-future-2",
		answer: "Tidal Tempest (Bad Future) - Sonic CD (US)",
		},
		{
		url: "https://soundcloud.com/faded_boo/oil-desert-zone-act-1",
		answer: "Oil Desert Zone Act 1 - Sonic 4: Episode 2",
		},
		{
		url: "https://soundcloud.com/station-square-radio/planet-wisp-act-2-no-pause-at-start",
		answer: "Planet Wisp Act 2 - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/faded_boo/sky-canyon-act-1",
		answer: "Sky Canyon Act 1 - Sonic Advance 2",
		},
		{
		url: "https://soundcloud.com/station-square-radio/windy-hill-for-windy-valley-no-pause-at-start",
		answer: "Windy Hill ...for Windy Valley - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/seaside-hill-2",
		answer: "Seaside Hill - Sonic Dash",
		},
		{
		url: "https://soundcloud.com/cream-this-rabbit/eggman-boss-theme-sonic-mania-ost",
		answer: "Ruby Delusions (Eggman Boss 1) - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/faded_boo/aquarium-park",
		answer: "Area: Aquarium Park - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/faded_boo/eggmanland-night",
		answer: "Eggmanland (Night) - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/faded_boo/lava-reef-act-1",
		answer: "Lava Reef Zone Act 1 - Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/faded_boo/final-boss-1",
		answer: "Final Boss - Sonic Chaos",
		},
		{
		url: "https://soundcloud.com/station-square-radio/power-plant-no-pause-at-start",
		answer: "Power Plant - Sonic Heroes",
		},
		{
		url: "https://soundcloud.com/faded_boo/boss-10",
		answer: "Boss - Sonic Rivals 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/toy-kingdom-map",
		answer: "Toy Kingdom Map - Sonic Advance 3",
		},
		{
		url: "https://soundcloud.com/faded_boo/casino-street-zone-act-1",
		answer: "Casino Street Zone Act 1 - Sonic 4: Episode 1",
		},
		{
		url: "https://soundcloud.com/faded_boo/the-world-adventure-orchestral-theme",
		answer: "The World Adventure: Orchestral Theme (title screen) - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/station-square-radio/misty-lake-no-pause-at-start",
		answer: "Misty Lake - Sonic and the Black Knight",
		},
		{
		url: "https://soundcloud.com/faded_boo/hydrocity-act-1",
		answer: "Hydrocity Zone Act 1 - Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/faded_boo/character-select",
		answer: "Character Select - Sonic Advance 1 & 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/rotatatron-refreshinator",
		answer: "vs. Rotatatron & Refreshinator - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/faded_boo/collision-chaos-present",
		answer: "Collision Chaos (Present) - Sonic CD (JP/EU)",
		},
		{
		url: "https://soundcloud.com/vgmplanet/sonic-adventure-104-chaos-ver",
		answer: "Boss: Chaos ver. 0, 2, 4 - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/station-square-radio/cutscene-normal-no-pause-at-start",
		answer: "Cutscene: Normal - Sonic Rush Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/south-island-lovers",
		answer: "South Island ~ Lovers - Sonic the Fighters",
		},
		{
		url: "https://soundcloud.com/faded_boo/main-menu-4",
		answer: "System: Main Menu - Shadow the Hedgehog",
		},
		{
		url: "https://soundcloud.com/station-square-radio/planet-wisp-act-1-no-pause-at-start",
		answer: "Planet Wisp: Act 1 (Classic) - Sonic Generations (consoles/PC)",
		},
		{
		url: "https://soundcloud.com/station-square-radio/youre-my-hero-credits-reduced-pause-at-start",
		answer: "You're My Hero (credits) - Sonic 3D Blast (32-bit)",
		},
		{
		url: "https://soundcloud.com/cesar-stone-junior/im-a-spy-security-hall",
		answer: "I'm a Spy ...for Security Hall - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/route-99-act-1",
		answer: "Route 99 Act 1 - Sonic Advance 3",
		},
		{
		url: "https://soundcloud.com/lamingaming/sonic-2-sky-chase-zone-recorded-from-sega-mega-drive-mk1-va6",
		answer: "Sky Chase Zone - Sonic 2 (16-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/sonic-advance-ost-neo-green",
		answer: "Neo Green Hill Zone Act 2 - Sonic Advance",
		},
		{
		url: "https://soundcloud.com/faded_boo/reactive-factory",
		answer: "Work It Out (Reactive Factory) - Sonic R",
		},
		{
		url: "https://soundcloud.com/al-dave-618049861/casino-night-here-we-go-sonic",
		answer: "Casino Night ~ Here We Go - Sonic the Fighters",
		},
		{
		url: "https://soundcloud.com/cesar-stone-junior/rhythm-and-balance-white-jungle",
		answer: "Rhythm and Balance ...for White Jungle - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/sonic-world",
		answer: "Sonic World - Sonic Jam",
		},
		{
		url: "https://soundcloud.com/faded_boo/chun-nan-night",
		answer: "Chun-nan (Night) - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/faded_boo/central-city-1",
		answer: "Central City - Sonic Chronicles: The Dark Brotherhood",
		},
		{
		url: "https://soundcloud.com/faded_boo/credits-waking-up",
		answer: "Waking Up - Shadow the Hedgehog",
		},
		{
		url: "https://soundcloud.com/faded_boo/no-way",
		answer: "Continue (aka No Way) - Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/faded_boo/planet-wisp-act-5",
		answer: "Planet Wisp: Act 2 (Modern) - Sonic Generations (consoles/PC)",
		},
		{
		url: "https://soundcloud.com/cream-this-rabbit/hi-spec-robo-go-theme-of-the-hard-boiled-heavies",
		answer: "Hi-Spec Robo Go! (Hard-Boiled Heavy Boss) - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/faded_boo/tails-lab",
		answer: "Tails' Lab - Sonic Battle",
		},
		{
		url: "https://soundcloud.com/faded_boo/intro",
		answer: "Intro - Sonic Adventure 2: Battle",
		},
		{
		url: "https://soundcloud.com/faded_boo/big-arm",
		answer: "Final Boss - Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/user-588482156/sonic-riders-zero-gravity-un-gravitify",
		answer: "Un-gravitify - Sonic Riders: Zero Gravity",
		},
		{
		url: "https://soundcloud.com/faded_boo/final-boss-3",
		answer: "Hyper Eggrobo (final boss) - Sonic Advance 3",
		},
		{
		url: "https://soundcloud.com/faded_boo/eggman-empire-fortress-imperial-tower",
		answer: "Fading World: Imperial Tower - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/cesar-stone-junior/wont-stop-just-go-green-forest",
		answer: "Won't Stop, Just Go! ...for Green Forest - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/leaf-forest-act-1",
		answer: "Leaf Forest Act 1 - Sonic Advance 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/cosmic-casino-zone-act-2",
		answer: "Cosmic Casino Zone Act 2 (Gumball and Slot Machine Bonus Stage) - Sonic Pocket Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/ending-10",
		answer: "Credits - Sonic the Hedgehog (8-bit)",
		},
		{
		url: "https://soundcloud.com/vgmplanet/sonic-adventure-111-pleasure",
		answer: "Pleasure Castle ...for Twinkle Park - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/leaf-storm-blaze",
		answer: "Right There, Ride On (Blazy Mix; Leaf Storm) - Sonic Rush",
		},
		{
		url: "https://soundcloud.com/faded_boo/egg-albatross",
		answer: "Boss: Egg Albatross - Sonic Heroes",
		},
		{
		url: "https://soundcloud.com/faded_boo/iblis",
		answer: "Boss: Iblis - Sonic 06",
		},
		{
		url: "https://soundcloud.com/cream-this-rabbit/dimension-heist-special-stage",
		answer: "Dimension Heist (UFO Special Stage) - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/faded_boo/character-select-2",
		answer: "Character Select - Sonic Advance 3",
		},
		{
		url: "https://soundcloud.com/faded_boo/eggmanland-day",
		answer: "Eggmanland (Day) - Sonic Unleashed", 
		},
		{
		url: "https://soundcloud.com/cesar-stone-junior/thats-the-way-i-like-it-metal-harbor",
		answer: "That's the Way I Like It ...for Metal Harbor - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/town-mission-2",
		answer: "Town Mission 2 - Sonic 06",
		},
		{
		url: "https://soundcloud.com/faded_boo/this-horizon",
		answer: "This Horizon (title screen) - Knuckles' Chaotix",
		},
		{
		url: "https://soundcloud.com/faded_boo/panic-puppet-zone-act-2",
		answer: "Panic Puppet Zone Act 2 - Sonic 3D Blast (16-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/pirates-island-act-1",
		answer: "Pirates' Island Act 1 - Sonic Rush Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/metal-sonic-3",
		answer: "Metal Sonic (boss) - Sonic Triple Trouble",
		},
		{
		url: "https://soundcloud.com/faded_boo/shadow",
		answer: "Rival Battle: Shadow the Hedgehog 'For True Story (Circuit Freq RMX)' - Sonic Generations",
		},
		{
		url: "https://soundcloud.com/cream-this-rabbit/sonic-mania-ost-hard-boiled-heavies-mischief-theme",
		answer: "Who's the boss? - Hard Boiled Heavies Mischief Scene (cutscene) - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/station-square-radio/rail-canyon-no-pause-at-start",
		answer: "Rail Canyon - Sonic Heroes",
		},
		{
		url: "https://soundcloud.com/faded_boo/stages-1-4",
		answer: "Stages 1-4 - Dr. Robotnik's Mean Bean Machine (16-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/dr-robotniks-theme",
		answer: "Boss - Sonic 2 (16-bit)",
		},
		{
		url: "https://soundcloud.com/station-square-radio/kick-the-rock-for-wild-canyon-no-pause-at-start",
		answer: "Kick the Rock! ...for Wild Canyon - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/last-utopia-zone",
		answer: "Last Utopia Zone (final boss; Sonic 3 & Knuckles remix) - Sonic Pocket Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/vs-character-1",
		answer: "Vela-Nova (Digital Remakin') - Sonic Rush (album remix)",
		},
		{
		url: "https://soundcloud.com/super-smash-bros-sonic/seven-rings-in-hand",
		answer: "Seven Rings in Hand - Sonic and the Secret Rings",
		},
		{
		url: "https://soundcloud.com/faded_boo/metal-citynight-chase",
		answer: "Metal City/Night Chase - Sonic Riders",
		},
		{
		url: "https://soundcloud.com/faded_boo/sky-base",
		answer: "Sky Base Zone - Sonic the Hedgehog (8-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/city-escape-act-1",
		answer: "City Escape: Act 1 'Escape from the City (Cash Cash RMX)' (Classic) - Sonic Generations (consoles/PC)",
		},
		{
		url: "https://soundcloud.com/faded_boo/true-area-53",
		answer: "True Area 53 - Sonic Advance 2",
		},
		{
		url: "https://soundcloud.com/user-304781955/sonic-forces-ost-lost-valley",
		answer: "Lost Valley - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/faded_boo/boss-theme",
		answer: "Boss!! - Sonic CD (JP/EU)",
		},
		{
		url: "https://soundcloud.com/station-square-radio/ending-theme-take-me-away-no-pause-at-start",
		answer: "Ending Theme ~ Take Me Away (credits) - Sonic the Fighters",
		},
		{
		url: "https://soundcloud.com/station-square-radio/event-shut-your-mouth-no-pause-at-start",
		answer: "Event: Shut Your Mouth (cutscene, pre-Egg Breaker) - Shadow the Hedgehog",
		},
		{
		url: "https://soundcloud.com/station-square-radio/the-core-no-pause-at-start",
		answer: "The Core (Astral Babylon/Mobius Strip) - Sonic Riders: Zero Gravity",
		},
		{
		url: "https://soundcloud.com/faded_boo/fairy-of-aif",
		answer: "Fairy of A.I.F. - Sonic Gems Collection",
		},
		{
		url: "https://soundcloud.com/station-square-radio/starlight-carnival-act-1-no-pause-at-start",
		answer: "Starlight Carnival Act 1 - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/faded_boo/town-mission-4",
		answer: "Town Mission 4 - Sonic 06",
		},
		{
		url: "https://soundcloud.com/faded_boo/you-can-do-anything",
		answer: "Sonic: You Can Do Anything (aka Toot Toot Sonic Warrior) - Sonic CD (JP/EU)",
		},
		{
		url: "https://soundcloud.com/vgmplanet/machine-labyrinth-act-1",
		answer: "Machine Labyrinth Act 1 - Sonic Rush Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/hydrocity-act-2",
		answer: "Hydrocity Zone Act 2 - Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-3d-blast-820277230",
		answer: "Green Grove Zone Act 2 - Sonic 3D Blast (16-bit)",
		},
		{
		url: "https://soundcloud.com/station-square-radio/terminal-velocity-act-1-no-pause-at-start",
		answer: "Terminal Velocity Act 1 - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/faded_boo/hot-crater-act-2",
		answer: "Hot Crater Act 2 - Sonic Advance 2",
		},
		{
		url: "https://soundcloud.com/nobycole/sonic-colors-aquarium-park-act-1-music",
		answer: "Aquarium Park Act 1 - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/station-square-radio/chaos-ver-6-no-pause-at-start",
		answer: "Boss: Chaos ver. 6 - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/station-square-radio/sonic-vs-knuckles-north-wind-no-pause-at-start",
		answer: "Sonic vs. Knuckles ~ North Wind - Sonic the Fighters",
		},
		{
		url: "https://soundcloud.com/cesar-stone-junior/rumbling-hwy-mission-street",
		answer: "Rumbling HWY ...for Mission Street - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/sonic_complete/marble-zone",
		answer: "Marble Zone - Sonic the Hedgehog (16-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/apotos-night",
		answer: "Apotos (Night) - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/faded_boo/metallic-madness-good-future",
		answer: "Metallic Madness (Good Future) - Sonic CD (JP/EU)",
		},
		{
		url: "https://soundcloud.com/faded_boo/sweet-mountain-act-3",
		answer: "Sweet Mountain Act 3 - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/faded_boo/forest-falls-zone-act-1",
		answer: "Forest Falls Zone Act 1 - Sonic Rivals",
		},
		{
		url: "https://soundcloud.com/faded_boo/event-monkey-business",
		answer: "Event: Monkey Business (cutscene) - Sonic Heroes",
		},
		{
		url: "https://soundcloud.com/faded_boo/cool-edge-night",
		answer: "Cool Edge (Night) - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/faded_boo/dr-robotniks-theme-1",
		answer: "Dr. Robotnik's Theme - Adventures of Sonic the Hedgehog",
		},
		{
		url: "https://soundcloud.com/vgmplanet/sonic-adventure-114-run",
		answer: "Run Through the Speed Highway ...for Speed Highway - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/world-map-the-lost-hex",
		answer: "The Lost Hex (world map) - Sonic Lost World",
		},
		{
		url: "https://soundcloud.com/station-square-radio/a-duel-with-metal-sonic-stardust-speedway-rmx-no-pause-at-start",
		answer: "A Duel with Metal Sonic: Stardust Speedway RMX - Sonic 4: Episode 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/reach-for-the-stars",
		answer: "Reach for the Stars - Sonic Colors",
		},
		{
		url: "https://soundcloud.com/faded_boo/trap-tower",
		answer: "Trap Tower - SegaSonic the Hedgehog",
		},
		{
		url: "https://soundcloud.com/faded_boo/city-escape-mad-convoy-race",
		answer: "The Mad Convoy Race ...for City Escape - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/frozen-junkyard",
		answer: "Frozen Junkyard: Lap Music - Team Sonic Racing",
		},
		{
		url: "https://soundcloud.com/faded_boo/boss-2",
		answer: "Metal Scratchin' (boss) - Sonic Rush",
		},
		{
		url: "https://soundcloud.com/faded_boo/city-ghost-town",
		answer: "Ghost Town - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/faded_boo/special-stage-6",
		answer: "Special Stage (aka Blue Spheres) - Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-unleashed-ost-cutscene-2",
		answer: "Cutscene: The First Night (Apotos Werehog transformation) - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/faded_boo/final-fortress-crank-the-heat-up-1",
		answer: "Crank the Heat Up!! (for Final Fortress) - Sonic & Sega All-Stars Racing (DS)",
		},
		{
		url: "https://soundcloud.com/faded_boo/sky-chase-zone-1",
		answer: "Sky Chase Zone (Azure Lake) - Sonic Pocket Adventure",
		},
		{
		url: "https://soundcloud.com/station-square-radio/digital-circuit-no-pause-at-start",
		answer: "Digital Circuit - Shadow the Hedgehog",
		},
		{
		url: "https://soundcloud.com/faded_boo/asteroid-coaster-act-1",
		answer: "Asteroid Coaster Act 1 - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/station-square-radio/cyber-space-2-5-deja-vu-no-pause-at-start",
		answer: "Cyber Space 2-5: Deja vu (or Déjà vu) - Sonic Frontiers",
		},
		{
		url: "https://soundcloud.com/station-square-radio/crystal-cave-no-pause-at-start",
		answer: "Crystal Cave - Sonic and the Black Knight",
		},
		{
		url: "https://soundcloud.com/faded_boo/theme-of-tikal",
		answer: "Theme of Tikal - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/sonic-cd-us/sonic-cd-us-robotnik",
		answer: "Boss!! - Sonic CD (US)",
		},
		{
		url: "https://soundcloud.com/faded_boo/sonic-team-we-can",
		answer: "We Can ...Theme of Team Sonic - Sonic Heroes",
		},
		{
		url: "https://soundcloud.com/faded_boo/continue-screen-1",
		answer: "Continue (Sonic 3 & Knuckles remix) - Sonic Pocket Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/big-swell",
		answer: "Big Swell (final boss) - Sonic Rush Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/shamar-day",
		answer: "Shamar (Day) - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/faded_boo/the-ark",
		answer: "The ARK - Shadow the Hedgehog",
		},
		{
		url: "https://soundcloud.com/skyanultra/knuckles-chaotix-electoria",
		answer: "Electoria (Techno Tower) - Knuckles' Chaotix",
		},
		{
		url: "https://soundcloud.com/faded_boo/egg-breaker",
		answer: "Boss: Egg Breaker - Shadow the Hedgehog",
		},
		{
		url: "https://soundcloud.com/faded_boo/sweet-mountain-act-2",
		answer: "Sweet Mountain Act 2 - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/faded_boo/town-mission-3",
		answer: "Town Mission 3 - Sonic 06",
		},
		{
		url: "https://soundcloud.com/user-317881134/sonic-unleashed-tornado-route-to-eggman-land",
		answer: "Tornado Defense: 2nd Battle - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/faded_boo/green-hill-zone-act-1",
		answer: "Green Hill: Act 1 (Classic) - Sonic Generations",
		},
		{
		url: "https://soundcloud.com/faded_boo/bonus-level-1",
		answer: "Bonus Stage - Sonic Labyrinth",
		},
		{
		url: "https://soundcloud.com/faded_boo/kingdom-valley-wind-the-castle-lakeside-water",
		answer: "Kingdom Valley ~Wind ~ The Castle ~ Lakeside ~ Water~ - Sonic 06",
		},
		{
		url: "https://soundcloud.com/faded_boo/underground-zone",
		answer: "Under Ground Zone - Sonic 2 (8-bit)",
		},
		{
		url: "https://soundcloud.com/station-square-radio/the-world-adventure-java-version",
		answer: "The World Adventure (title screen) - Sonic Unleashed (Java, mobile)",
		},
		{
		url: "https://soundcloud.com/station-square-radio/and-fish-hits-no-pause-at-start",
		answer: "and... Fish Hits! - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/aquatic-ruin-zone",
		answer: "Aquatic Ruin Zone - Sonic 2 (16-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/bullet-station",
		answer: "Bullet Station - Sonic Heroes",
		},
		{
		url: "https://soundcloud.com/faded_boo/terminal-velocity-act-3",
		answer: "Terminal Velocity - Sonic Colors (DS)",
		},
		{
		url: "https://soundcloud.com/faded_boo/arid-sands-day",
		answer: "Arid Sands (Day) - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/faded_boo/mecha-green-hill-zone",
		answer: "Mecha Green Hill Zone - Sonic Chaos",
		},
		{
		url: "https://soundcloud.com/faded_boo/metropolis-metropolitian-highway",
		answer: "Metropolitan Highway - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/station-square-radio/boss-gun-mobile-no-pause-at-start",
		answer: "Boss: -GUN- Mobile - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/mission-1-super-sonic-racing",
		answer: "Challenge / Mission 1 'Super Sonic Racing (Cash Cash vs. Jun Senoue RMX)' - Sonic Generations (consoles/PC)",
		},
		{
		url: "https://soundcloud.com/faded_boo/ice-cap-1",
		answer: "Ice Cap Zone Act 1 (prototype version) - Sonic 3",
		},
		{
		url: "https://soundcloud.com/faded_boo/emerald-coast-windy-and-ripply",
		answer: "Windy and Ripply ...for Emerald Coast - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/green-light-ride",
		answer: "Green Light Ride - Team Sonic Racing",
		},
		{
		url: "https://soundcloud.com/station-square-radio/molten-mine-no-pause-at-start",
		answer: "Molten Mine - Sonic and the Black Knight",
		},
		{
		url: "https://soundcloud.com/faded_boo/sonic-advance-music-angel",
		answer: "Angel Island Zone Act 2 - Sonic Advance",
		},
		{
		url: "https://soundcloud.com/cream-this-rabbit/sonic-mania-ost-oil-ocean-zone-act-1",
		answer: "Oil Ocean Zone Act 1 - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/faded_boo/egg-dragoon",
		answer: "Vs. Egg Dragoon - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/faded_boo/time-eater-modern",
		answer: "Boss Battle: Time Eater ver. 1 (Modern) - Sonic Generations",
		},
		{
		url: "https://soundcloud.com/cesar-stone-junior/escape-from-the-city-city-escape",
		answer: "Escape from the City ...for City Escape - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/metal-depot",
		answer: "Metal Depot - Sonic Battle",
		},
		{
		url: "https://soundcloud.com/faded_boo/aqua-lake-zone",
		answer: "Aqua Lake Zone - Sonic 2 (8-bit)",
		},
		{
		url: "https://soundcloud.com/station-square-radio/sand-hill-no-pause-at-start",
		answer: "Sand Hill - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/mad-gear-zone-act-1",
		answer: "Mad Gear Zone Act 1 - Sonic 4: Episode 1",
		},
		{
		url: "https://soundcloud.com/faded_boo/asteroid-coaster-act-2",
		answer: "Asteroid Coaster Act 2 - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/rman41/sonic-the-hedgehog-3-and-knuckles-mini-boss-theme",
		answer: "Mini-Boss - Sonic 3",
		},
		{
		url: "https://soundcloud.com/cream-this-rabbit/mirage-saloon-zone-act-1-knuckles-ver-sonic-mania-ost",
		answer: "Wildstyle Pistolero (Mirage Saloon Zone Act 1 K Mix) - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/faded_boo/flying-carpet-back-to-soul",
		answer: "Flying Carpet ~ Back to Soul - Sonic the Fighters",
		},
		{
		url: "https://soundcloud.com/faded_boo/emerald-power-super-sonic",
		answer: "Super Sonic (Reach for the Stars remix) - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/faded_boo/title-s",
		answer: "Title Screen - Sonic Mega Collection",
		},
		{
		url: "https://soundcloud.com/hh-gregg-427855702/rusty-ruin-act-2",
		answer: "Rusty Ruin Zone Act 2 - Sonic 3D Blast (16-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/wave-ocean-the-waters-edge",
		answer: "Wave Ocean ~The Water's Edge~ - Sonic 06",
		},
		{
		url: "https://soundcloud.com/station-square-radio/iron-jungle-no-pause-at-start",
		answer: "Iron Jungle - Shadow the Hedgehog",
		},
		{
		url: "https://soundcloud.com/shadow-the-hedgehog-2/free-main-theme-of-sonic-free-riders",
		answer: "Free (main theme) - Sonic Free Riders",
		},
		{
		url: "https://soundcloud.com/station-square-radio/skyscraper-scamper-day-no-pause-at-start",
		answer: "Skyscraper Scamper (Day) - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/sonicwalter-1/01-title-screen-1",
		answer: "Title Screen - Sonic 4: Episode 1",
		},
		{
		url: "https://soundcloud.com/faded_boo/palmtree-panic-present",
		answer: "Palmtree Panic (Present) - Sonic CD (JP/EU)",
		},
		{
		url: "https://soundcloud.com/user-298505608/boss-battle-perfect-chaos-pt-i",
		answer: "Boss Battle: Perfect Chaos Pt-I 'Open Your Heart: Crush 40 vs. Circuit Freq RMX' - Sonic Generations (consoles/PC)",
		},
		{
		url: "https://soundcloud.com/cream-this-rabbit/green-hill-zone-act-1-sonic-mania-ost",
		answer: "Green Hill Zone Act 1 - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/faded_boo/area-asteroid-coaster",
		answer: "Area: Asteroid Coaster - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/faded_boo/toy-kingdom-act-1",
		answer: "Toy Kingdom Act 1 - Sonic Advance 3",
		},
		{
		url: "https://soundcloud.com/skyanultra/knuckles-chaotix-soda-pop",
		answer: "Soda Pop (Marina Madness boss) - Knuckles' Chaotix",
		},
		{
		url: "https://soundcloud.com/faded_boo/planet-wisp-act-6",
		answer: "Planet Wisp Act 1 - Sonic Colors (DS)",
		},
		{
		url: "https://soundcloud.com/faded_boo/metallic-madness-bad-future-2",
		answer: "Metallic Madness (Bad Future) - Sonic CD (US)",
		},
		{
		url: "https://soundcloud.com/vgmplanet/coral-cave-act-2",
		answer: "Coral Cave Act 2 - Sonic Rush Adventure",
		},
		{
		url: "https://soundcloud.com/station-square-radio/still-invincible-no-fear-no-pause-at-start",
		answer: "Still Invincible ...No Fear! - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-the-hedgehog-516881365",
		answer: "Accordion Song - Sonic 06",
		},
		{
		url: "https://soundcloud.com/station-square-radio/hidden-world-no-pause-at-start",
		answer: "Hidden World - Sonic Lost World",
		},
		{
		url: "https://soundcloud.com/cesar-stone-junior/space-trip-steps-meteor-herd",
		answer: "Space Trip Steps ...for Meteor Herd - Sonic Adventure 2", 
		},
		{
		url: "https://soundcloud.com/station-square-radio/guardian-squid-no-pause-at-start",
		answer: "Guardian: SQUID - Sonic Frontiers",
		},
		{
		url: "https://soundcloud.com/damein-baker-2/chaos-angel-zone-zone-7-act-1",
		answer: "Chaos Angel Act 1 - Sonic Advance 3",
		},
		{
		url: "https://soundcloud.com/faded_boo/name-entry-whats-your-name",
		answer: "Name Entry ~ What's Your Name? - Sonic the Fighters",
		},
		{
		url: "https://soundcloud.com/faded_boo/windmill-isle-night",
		answer: "Windmill Isle (Night) - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/datadiscs/kronos-island",
		answer: "Kronos Island: 4th Mvt. - Sonic Frontiers",
		},
		{
		url: "https://soundcloud.com/station-square-radio/sylvania-castle-zone-act-1-no-pause-at-start",
		answer: "Sylvania Castle Zone Act 1 - Sonic 4: Episode 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/death-egg-act-2?in=faded_boo/sets/sonic-and-knuckles",
		answer: "Death Egg Zone Act 2 - Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-advance-ost-cosmic-1",
		answer: "Cosmic Angel Zone - Sonic Advance",
		},
		{
		url: "https://soundcloud.com/yacker-the-white-wisp/tropical-resort-act-1",
		answer: "Tropical Resort Act 1 - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/faded_boo/scrap-brain-zone-1",
		answer: "Scrap Brain Zone - Sonic the Hedgehog (8-bit)",
		},
		{
		url: "https://soundcloud.com/user-445991624/sonic-mania-studiopolis-zone-act-1-lights-camera-action",
		answer: "Lights, Camera, Action! (Studiopolis Zone Act 1) - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/vgmplanet/sonic-adventure-117-choose",
		answer: "Choose Your Buddy! (Slap Bass ver.) - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/invincible-8",
		answer: "Invincibility - Sonic Advance 2 & 3",
		},
		{
		url: "https://soundcloud.com/faded_boo/azure-lake",
		answer: "Azure Lake - Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/station-square-radio/challenge-mission-3-no-pause-at-start",
		answer: "Challenge / Mission 3 ('Emerald Beach') - Sonic Generations (consoles/PC)",
		},
		{
		url: "https://soundcloud.com/faded_boo/super-sonic-racing-2",
		answer: "Super Sonic Racing - Sonic Pinball Party",
		},
		{
		url: "https://soundcloud.com/faded_boo/stardust-speedway-present-2",
		answer: "Stardust Speedway (Present) - Sonic CD (US)",
		},
		{
		url: "https://soundcloud.com/vgmplanet/sonic-adventure-123",
		answer: "Dilapidated Way ...for Casinopolis - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/battle-city-area",
		answer: "Battle: City Area (City Top, multiplayer) - Sonic Heroes",
		},
		{
		url: "https://soundcloud.com/station-square-radio/mushroom-hill-act-2-no-pause-at-start",
		answer: "Mushroom Hill: Act 2 (Modern) - Sonic Generations (3DS)",
		},
		{
		url: "https://soundcloud.com/user-443473563-576589529/sonic-spinball-the-machine",
		answer: "The Machine - Sonic Spinball (16-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/route-99-map",
		answer: "Route 99 Map - Sonic Advance 3",
		},
		{
		url: "https://soundcloud.com/faded_boo/time-attack",
		answer: "Time Attack - Sonic Jam",
		},
		{
		url: "https://soundcloud.com/user-486021283/team-sonic-racing-whale-lagoon",
		answer: "Whale Lagoon: Lap Music (Seaside Hill remix) - Team Sonic Racing",
		},
		{
		url: "https://soundcloud.com/vgmplanet/21-sunset-hill-act-1",
		answer: "Sunset Hill Act 1 (Green Hill Zone remix) - Sonic Advance 3",
		},
		{
		url: "https://soundcloud.com/faded_boo/robot-carnival-robot-storm",
		answer: "Boss: Robot Carnival/Robot Storm - Sonic Heroes",
		},
		{
		url: "https://soundcloud.com/sonic-rush-61848857/sonic-original-groove-rush",
		answer: "Right There, Ride On (Digital Remakin') - Sonic Rush (album remix)",
		},
		{
		url: "https://soundcloud.com/station-square-radio/tropical-resort-act-2-no-pause-at-start",
		answer: "Tropical Resort: Act 2 (Modern) - Sonic Generations (3DS)",
		},
		{
		url: "https://soundcloud.com/station-square-radio/casino-street-zone-act-2-no-pause-at-start",
		answer: "Casino Street Zone Act 2 - Sonic 4: Episode 1",
		},
		{
		url: "https://soundcloud.com/user-304781955/sonic-forces-ost-network-terminal",
		answer: "Network Terminal (outside) - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/vgmplanet/sonic-adventure-218-theme-of-e",
		answer: "Theme of E-102 Gamma (or γ) - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/sonic-cd-japan/sonic-cd-japan-stardust-1",
		answer: "Stardust Speedway (Past) - Sonic CD",
		},
		{
		url: "https://soundcloud.com/vgmplanet/windmill-village-mode-1",
		answer: "Windmill Village Mode 1 - Sonic Rush Adventure",
		},
		{
		url: "https://soundcloud.com/station-square-radio/enemy-territory-westopolis-remix-no-pause-at-start",
		answer: "Enemy Territory [Westopolis Remix] - Sonic Forces: Episode Shadow",
		},
		{
		url: "https://soundcloud.com/station-square-radio/game-land-1-no-pause-at-start",
		answer: "Game Land 1 (Tropical Resort) - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/faded_boo/sandopolis-act-1",
		answer: "Sandopolis Zone Act 1 - Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/station-square-radio/circus-park-no-pause-at-start",
		answer: "Circus Park - Shadow the Hedgehog",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-battle-ost-gimme-shelter",
		answer: "Gimme Shelter - Sonic Battle",
		},
		{
		url: "https://soundcloud.com/cream-this-rabbit/titanic-monarch-act-1-sonic-mania-ost",
		answer: "Built to Rule (Titanic Monarch Zone Act 1) - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-the-hedgehog-971533888",
		answer: "Boss: vs. Character - Sonic 06",
		},
		{
		url: "https://soundcloud.com/faded_boo/spring-stadium-act-1",
		answer: "Spring Stadium Zone Act 1 - Sonic 3D Blast (32-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/riot-train-with-go-v-train",
		answer: "With Go V-Train (Riot Train) - Sonic Shuffle",
		},
		{
		url: "https://soundcloud.com/faded_boo/sky-sanctuary",
		answer: "Sky Sanctuary Zone - Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/station-square-radio/cyber-space-1-4-genshi-no-pause-at-start",
		answer: "Cyber Space 1-4: Genshi - Sonic Frontiers",
		},
		{
		url: "https://soundcloud.com/faded_boo/special-stage-1",
		answer: "Special Stage - Sonic Advance 3", 
		},
		{
		url: "https://soundcloud.com/faded_boo/jungle-joyride-day",
		answer: "Jungle Joyride (Day) - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/vgmplanet/sonic-adventure-213-funky",
		answer: "Funky Groove Makes U Hot!? ...for Options - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/hypersonic-the-meme-god/tropical-coast-zone-1-extended",
		answer: "Tropical Coast: Zone 1 - Sonic Lost World",
		},
		{
		url: "https://soundcloud.com/faded_boo/casino-park-super-sonic-racing",
		answer: "Super Sonic Racing (for Casino Park) - Sonic & Sega All-Stars Racing (DS)",
		},
		{
		url: "https://soundcloud.com/chucklesonclouds/boss-egg-dealer",
		answer: "Boss: Egg Dealer - Shadow the Hedgehog",
		},
		{
		url: "https://soundcloud.com/faded_boo/aquarium-park-act-4",
		answer: "Aquarium Park Act 1 - Sonic Colors (DS)",
		},
		{
		url: "https://soundcloud.com/faded_boo/angel-island-act-1-pc-version",
		answer: "Angel Island Zone Act 1 - Sonic & Knuckles Collection (PC)",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-the-hedgehog-23255526",
		answer: "Boss: Egg-Cerberus and Egg-Genesis - Sonic 06",
		},
		{
		url: "https://soundcloud.com/vgmplanet/sonic-adventure-132-snowy",
		answer: "Snowy Mountain ...for Ice Cap - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/station-square-radio/unstoppable-no-pause-at-start",
		answer: "Unstoppable (invincibility; Fist Bump remix) - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/user-675036643/team-sonic-racing-843147793",
		answer: "Doctor's Mine: Lap Music - Team Sonic Racing",
		},
		{
		url: "https://soundcloud.com/faded_boo/sky-canyon-act-2",
		answer: "Sky Canyon Act 2 - Sonic Advance 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/angel-island-act-3",
		answer: "Angel Island Zone Act 1 - Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-lost-world-ost-windy",
		answer: "Windy Hill: Zone 2 - Sonic Lost World",
		},
		{
		url: "https://soundcloud.com/station-square-radio/remember-me-mfm-for-iron-gate-no-pause-at-start",
		answer: "Remember Me? M.F.M. ...for Iron Gate - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/sonic-mania-456108433/sonic-mania-mean-bean-machine",
		answer: "Eggman Mean Bean (Chemical Plant Zone Act 2 boss) - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/sonic-cd-us/sonic-cd-us-quartz-quandrant-2",
		answer: "Quartz Quadrant (Bad Future) - Sonic CD (US)",
		},
		{
		url: "https://soundcloud.com/station-square-radio/emerald-coast-act-1-no-pause-at-start",
		answer: "Emerald Coast: Act 1 'Azure Blue World' (Classic) - Sonic Generations (3DS)",
		},
		{
		url: "https://soundcloud.com/vgmplanet/what-u-need-is-remix",
		answer: "What U Need is Remix (menu) - Sonic Rush",
		},
		{
		url: "https://soundcloud.com/faded_boo/gigalopolis-zone",
		answer: "Gigalopolis Zone - Sonic Chaos (Master System)",
		},
		{
		url: "https://soundcloud.com/station-square-radio/sky-fortress-zone-act-2-no-pause-at-start",
		answer: "Sky Fortress Zone Act 2 - Sonic 4: Episode 2",
		},
		{
		url: "https://soundcloud.com/station-square-radio/game-land-title-screen-no-pause-at-start",
		answer: "Game Land: Title Screen - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/faded_boo/panic-puppet-zone-act-3",
		answer: "Panic Puppet Zone Act 1 - Sonic 3D Blast (32-bit)",
		},
		{
		url: "https://soundcloud.com/station-square-radio/believe-in-myself-theme-of-tails-no-pause-at-start",
		answer: "Believe in Myself ...Theme of Miles/Tails - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/canyon-cruise-blue-garden?in=faded_boo/sets/sonic-the-fighters",
		answer: "Canyon Cruise ~ Blue Garden - Sonic the Fighters",
		},
		{
		url: "https://soundcloud.com/user-589094375-799140624/sonic-forces-ost-results",
		answer: "Taking It Back (results) - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/faded_boo/mad-gear-zone-act-3",
		answer: "Mad Gear Zone Act 3 - Sonic 4: Episode 1",
		},
		{
		url: "https://soundcloud.com/faded_boo/sonic-underground",
		answer: "Sonic Underground (opening theme) - Sonic Underground",
		},
		{
		url: "https://soundcloud.com/faded_boo/quartz-quadrant-bad-future",
		answer: "Quartz Quadrant (Bad Future) - Sonic CD (JP/EU)",
		},
		{
		url: "https://soundcloud.com/vgmplanet/submarine",
		answer: "Submarine (Deep Typhoon) - Sonic Rush Adventure",
		},
		{
		url: "https://soundcloud.com/station-square-radio/pinball-highway-final-lap-no-pause-at-start",
		answer: "Pinball Highway: Final Lap - Team Sonic Racing",
		},
		{
		url: "https://soundcloud.com/station-square-radio/faraway-avalon-no-pause-at-start",
		answer: "Faraway Avalon - Sonic and the Black Knight",
		},
		{
		url: "https://soundcloud.com/faded_boo/boss-4",
		answer: "Boss - Sonic Chaos",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-the-hedgehog-678975684",
		answer: "Jingle: Invincible - Sonic 06",
		},
		{
		url: "https://soundcloud.com/station-square-radio/seaside-hill-act-1-clipped",
		answer: "Seaside Hill: Act 1 (Classic) - Sonic Generations (consoles/PC)",
		},
		{
		url: "https://soundcloud.com/station-square-radio/boss-black-bull-no-pause-at-start",
		answer: "Boss: Black Bull - Shadow the Hedgehog",
		},
		{
		url: "https://soundcloud.com/vgmplanet/ethno-circus-blazy-mix",
		answer: "Ethno Circus (Blazy Mix; Mirage Road) - Sonic Rush",
		},
		{
		url: "https://soundcloud.com/planetasonic/stage-10-lost-jungle",
		answer: "Lost Jungle - Sonic Heroes",
		},
		{
		url: "https://soundcloud.com/user-304781955/sonic-forces-ost-mission-menu",
		answer: "Up to the Challenge (missions) - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/vgmplanet/plant-kingdom-act-1",
		answer: "Plant Kingdom Act 1 - Sonic Rush Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/splash-hill-zone-act-2",
		answer: "Splash Hill Zone Act 2 - Sonic 4: Episode 1",
		},
		{
		url: "https://soundcloud.com/user-752190988/sonic-the-fighters-giant-wing",
		answer: "Giant Wing ~ Fire Stone - Sonic the Fighters",
		},
		{
		url: "https://soundcloud.com/jonathan-romero-lopez-1/the-lost-prologue-extended",
		answer: "The Lost Prologue - Sonic and the Secret Rings",
		},
		{
		url: "https://soundcloud.com/faded_boo/boss-day",
		answer: "Boss Battle (Day) - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/station-square-radio/mr-unsmiley-for-sky-rail-no-pause-at-start",
		answer: "Mr. Unsmiley ...for Sky Rail - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/menu-2",
		answer: "Main Menu - Sonic Mega Collection",
		},
		{
		url: "https://soundcloud.com/faded_boo/boss-5",
		answer: "Boss - Sonic Advance 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/green-hill-arsenal-pyramid-outside",
		answer: "Arsenal Pyramid (outside) - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/faded_boo/aquatic-base-level-2",
		answer: "Aquatic Base ~Level 2~ - Sonic 06",
		},
		{
		url: "https://soundcloud.com/station-square-radio/cyber-space-4-6-fog-funk-no-pause-at-start",
		answer: "Cyber Space 4-6: Fog Funk - Sonic Frontiers",
		},
		{
		url: "https://soundcloud.com/skyanultra/knuckles-chaotix-take-a-nap",
		answer: "Take a Nap (Isolated Island Zone 1) - Knuckles' Chaotix",
		},
		{
		url: "https://soundcloud.com/faded_boo/boss-1-1",
		answer: "Boss 1 - Sonic 3D Blast (16-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/starlight-carnival-act-4",
		answer: "Starlight Carnival Act 1 - Sonic Colors (DS)",
		},
		{
		url: "https://soundcloud.com/cream-this-rabbit/oil-ocean-zone-act-2-sonic-mania-ost",
		answer: "Oil Ocean Zone Act 2 - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/faded_boo/blue-marine-zone",
		answer: "Blue Marine Zone - Sonic Blast",
		},
		{
		url: "https://soundcloud.com/station-square-radio/mystic-ruin-heavily-clipped-at-start",
		answer: "Mystic Ruin - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/metallic-madness-present",
		answer: "Metallic Madness (Present) - Sonic CD (JP/EU)",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/dark-arsenal-lap-music-no-pause-at-start",
		answer: "Dark Arsenal: Lap Music (Crank the Heat Up!! remix) - Team Sonic Racing",
		},
		{
		url: "https://soundcloud.com/skyanultra/knuckles-chaotix-tube-panic",
		answer: "Tube Panic (Special Stage) - Knuckles' Chaotix",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/cyber-space-1-2-flowing-no-pause-at-start",
		answer: "Cyber Space 1-2: Flowing - Sonic Frontiers",
		},
		{
		url: "https://soundcloud.com/vgmplanet/14-secret-base-zone-act-1",
		answer: "Secret Base Zone Act 1 - Sonic Advance",
		},
		{
		url: "https://soundcloud.com/user-132845948/sonic-r-options",
		answer: "Options Screen (menu) - Sonic R",
		},
		{
		url: "https://soundcloud.com/faded_boo/rotatatron-refreshinator-remix",
		answer: "vs. Rotatatron & Refreshinator (Remix) - Sonic Colors: Ultimate",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/wonder-world-title-theme-no-pause-at-start",
		answer: "Wonder World: Title Theme - Sonic Lost World",
		},
		{
		url: "https://soundcloud.com/faded_boo/secret-plant-zone-act-1",
		answer: "Secret Plant Zone Act 1 (Angel Island Zone Act 2 remix) - Sonic Pocket Adventure",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-adventure-ost-fakery-way",
		answer: "Fakery Way ...for Twinkle Park - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/clockwork-pyramid-final-lap-no-pause-at-start",
		answer: "Clockwork Pyramid: Final Lap - Team Sonic Racing",
		},
		{
		url: "https://soundcloud.com/vgmplanet/haunted-ship-act-1",
		answer: "Haunted Ship Act 1 - Sonic Rush Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/shadow-all-hail-shadow",
		answer: "All Hail Shadow - Sonic 06",
		},
		{
		url: "https://soundcloud.com/faded_boo/marble-garden-act-1",
		answer: "Marble Garden Zone Act 1 - Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/faded_boo/battle-casino-area",
		answer: "Battle: Casino Area (Casino Ring, multiplayer) - Sonic Heroes",
		},
		{
		url: "https://soundcloud.com/jonathan-romero-lopez-1/holy-summit-sonic-battle-m4a",
		answer: "Holy Summit - Sonic Battle",
		},
		{
		url: "https://soundcloud.com/faded_boo/lava-powerhouse-1",
		answer: "Lava Powerhouse - Sonic Spinball (8-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/chemical-plant-zone",
		answer: "Chemical Plant Zone - Sonic 2 (16-bit)",
		},
		{
		url: "https://soundcloud.com/zohaib-bashir-644440304/aquarium-park-act-3",
		answer: "Aquarium Park Act 3 - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/henry-stickmin-805451431/sonic-the-hedgehog-109943264",
		answer: "Boss - Sonic the Hedgehog (8-bit)",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/menu-wiiware-version-no-pause-at-start",
		answer: "Menu - Sonic 4: Episode 1 (WiiWare)",
		},
		{
		url: "https://soundcloud.com/user-304781955/sonic-forces-ost-creating-an-avatar",
		answer: "This is Our World: A New Hero (Avatar creation) - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/faded_boo/holoska-night",
		answer: "Holoska (Night) - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/vgmplanet/sonic-adventure-126-egg-mobile",
		answer: "Egg Mobile ...Boss: Egg Hornet - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/chemical-plant-zone-act-2",
		answer: "Chemical Plant: Act 2 (Modern) - Sonic Generations (consoles/PC)",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/white-park-zone-act-2-no-pause-at-start",
		answer: "White Park Zone Act 2 - Sonic 4: Episode 2",
		},
		{
		url: "https://soundcloud.com/cream-this-rabbit/invincibility-sonic-mania-ost",
		answer: "Undefeated (Invincibility) - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/henry-stickmin-805451431/sonic-the-hedgehog-536841652",
		answer: "Special Stage - Sonic the Hedgehog (8-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/white-acropolis-the-base",
		answer: "White Acropolis ~The Base~ - Sonic 06",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/theme-of-digital-dimension-no-pause-at-start",
		answer: "Theme of Digital Dimension - Sonic Riders",
		},
		{
		url: "https://soundcloud.com/tenbricks/double-down",
		answer: "Double Down (Frozen Factory Zone 3) - Sonic Lost World",
		},
		{
		url: "https://soundcloud.com/hh-gregg-427855702/diamond-dust-act-1",
		answer: "Diamond Dust Zone Act 1 - Sonic 3D Blast (16-bit)",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-the-hedgehog-170861501",
		answer: "Flame Core ~Volcano~ - Sonic 06",
		},
		{
		url: "https://soundcloud.com/123828158/where-to-today",
		answer: "Where to Today? (main theme) - Sonic Runners", 
		},
		{
		url: "https://soundcloud.com/faded_boo/spagonia-day",
		answer: "Spagonia (Day) - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/skyanultra/knuckles-chaotix-trial-and",
		answer: "Trial and Error (Amazing Arena mini-boss) - Knuckles' Chaotix",
		},
		{
		url: "https://soundcloud.com/faded_boo/green-hill-guardian-rock-chase",
		answer: "Death Crab Pursuit (for Guardian Rock) - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/terminal-velocity-act-2-clipped",
		answer: "Terminal Velocity Act 2 - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/cyber-space-1-1-database-no-pause-at-start",
		answer: "Cyber Space 1-1: Database - Sonic Frontiers",
		},
		{
		url: "https://soundcloud.com/vgmplanet/boss-whisker-johnny-part-2",
		answer: "Whisker & Johnny: Allegro (boss) - Sonic Rush Adventure",
		},
		{
		url: "https://soundcloud.com/vgmplanet/sonic-adventure-212-tornado",
		answer: "Tornado Scramble ...for Sky Chase - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/cyber-track-map",
		answer: "Cyber Track Map - Sonic Advance 3",
		},
		{
		url: "https://soundcloud.com/user-304781955/sonic-forces-ost-vs-metal-sonic",
		answer: "Battle with Metal Sonic [US ver. Remix] - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/faded_boo/opening-theme",
		answer: "Opening/Title Screen - Dr. Robotnik's Mean Bean Machine (16-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/death-egg-robot-ver-1",
		answer: "Boss Battle: Death Egg Robot (Phase 1) - Sonic Generations (consoles/PC)",
		},
		{
		url: "https://soundcloud.com/faded_boo/marble-zone-1",
		answer: "Marble Zone - Sonic the Hedgehog Genesis (GBA)",
		},
		{
		url: "https://soundcloud.com/faded_boo/twinkle-snow-map",
		answer: "Twinkle Snow Map - Sonic Advance 3",
		},
		{
		url: "https://soundcloud.com/user-675036643/shadow-the-hedgehhog-ost-air",
		answer: "Air Fleet - Shadow the Hedgehog",
		},
		{
		url: "https://soundcloud.com/caitlin-lumsden1/sonic-adventure-knuckles-theme-unknown-from-me",
		answer: "Unknown from M.E. ...Theme of Knuckles - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/dragon-dance-no-pause-at-start",
		answer: "Dragon Dance (Sky Road: Zone 2) - Sonic Lost World",
		},
		{
		url: "https://soundcloud.com/faded_boo/sonic-the-hedgehog-medley",
		answer: "Sonic the Hedgehog Medley (Live) - Sonic 30th Anniversary Symphony (Live)",
		},
		{
		url: "https://soundcloud.com/faded_boo/tidal-plant-zone",
		answer: "Tidal Plant Zone - Sonic Triple Trouble",
		},
		{
		url: "https://soundcloud.com/faded_boo/egg-hawk",
		answer: "Boss: Egg Hawk - Sonic Heroes",
		},
		{
		url: "https://soundcloud.com/faded_boo/gene-gadget-zone-act-2",
		answer: "Gene Gadget Zone Act 2 - Sonic 3D Blast (16-bit)",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/guardian-tower-no-pause-at-start",
		answer: "Guardian: TOWER - Sonic Frontiers",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/turbine-loop-lap-music-cut-at-start",
		answer: "Turbine Loop: Lap Music (Final Fortress remix) - Team Sonic Racing",
		},
		{
		url: "https://soundcloud.com/faded_boo/boss-knuckles",
		answer: "Egg Saucer (Sky Canyon boss) - Sonic Advance 2",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-the-hedgehog-900633386",
		answer: "Soleanna Forest - Sonic 06",
		},
		{
		url: "https://soundcloud.com/faded_boo/lost-labyrinth-zone-act-1",
		answer: "Lost Labyrinth Zone Act 1 - Sonic 4: Episode 1",
		},
		{
		url: "https://soundcloud.com/faded_boo/main-titles",
		answer: "Title Screen - Sonic Boom: Fire & Ice",
		},
		{
		url: "https://soundcloud.com/faded_boo/aquatic-relix-zone-act-1",
		answer: "Aquatic Relix Zone Act 1 (Mushroom Hill Zone Act 1 remix) - Sonic Pocket Adventure",
		},
		{
		url: "https://soundcloud.com/cream-this-rabbit/flying-battery-zone-act-2-sonic-mania-ost",
		answer: "Flying Battery Zone Act 2 - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/regal-ruin-back-in-time-no-pause-at-start",
		answer: "Back in Time (Regal Ruin) - Sonic R",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/chasing-drive-for-kart-no-pause-at-start",
		answer: "Chasing Drive ...for Kart - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/station-square-radio/cyber-space-result-screen-no-pause-at-start",
		answer: "Cyber Space: Result Screen - Sonic Frontiers",
		},
		{
		url: "https://soundcloud.com/vgmplanet/wrapped-in-black",
		answer: "Wrapped in Black (true final boss) - Sonic Rush",
		},
		{
		url: "https://soundcloud.com/user-589094375-799140624/sonic-forces-ost-light-of-hope",
		answer: "The Light of Hope (end credits) - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/faded_boo/title-screen-414725153",
		answer: "Title Screen - Sonic Chaos",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-adventure-ost-at-dawn",
		answer: "At Dawn ...for Speed Highway - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/titanic-plain",
		answer: "Titanic Plain - Sonic and the Black Knight",
		},
		{
		url: "https://soundcloud.com/faded_boo/sunset-forest-zone-act-1h",
		answer: "Sunset Forest Zone Act 1 - Sonic Rivals 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/sonic-boom-dnb-mix",
		answer: "Sonic Boom (D'nB Mix) - Sonic Gems Collection",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-frontiers-ost-708229493",
		answer: "Chaos Island: 2nd Mvt. - Sonic Frontiers",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/theme-of-rocky-ridge-no-pause-at-start",
		answer: "Theme of Rocky Ridge - Sonic Free Riders",
		},
		{
		url: "https://soundcloud.com/faded_boo/dr-robotnik-1",
		answer: "Dr. Robotnik - Sonic the Hedgehog (2020 movie)",
		},
		{
		url: "https://soundcloud.com/vgmplanet/jeh-jeh-rocket",
		answer: "Jeh Jeh Rocket (Huge Crisis) - Sonic Rush",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/roulette-road-final-lap-no-pause-at-start",
		answer: "Roulette Road: Final Lap (Casino Park remix) - Team Sonic Racing",
		},
		{
		url: "https://soundcloud.com/faded_boo/intro-s3",
		answer: "Title Screen - Sonic 3",
		},
		{
		url: "https://soundcloud.com/faded_boo/gaia-gate",
		answer: "Gaia Gate - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/no-way-through-no-pause-at-start",
		answer: "No Way Through (Pirate Storm) - Sonic and the Secret Rings",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/desert-ruins-zone-1-no-pause-at-start",
		answer: "Desert Ruins: Zone 1 - Sonic Lost World",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-battle-ost-night-babylon",
		answer: "Night Babylon - Sonic Battle",
		},
		{
		url: "https://soundcloud.com/faded_boo/secret-plant-zone-act-2",
		answer: "Secret Plant Zone Act 2 (Hydrocity Zone Act 2 remix) - Sonic Pocket Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/radical-train-the-chase",
		answer: "Radical Train ~The Chase~ - Sonic 06",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/special-stage-no-pause-at-start",
		answer: "Special Stage - Sonic 4: Episode 2",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/game-land-2-no-pause-at-start",
		answer: "Game Land 2 (Sweet Mountain) - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/faded_boo/emerald-ocean",
		answer: "Emerald Ocean - Sonic Drift 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/ice-cap-act-2",
		answer: "Ice Cap Zone Act 2 - Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/vgmplanet/sonic-adventure-102-welcome-to",
		answer: "Welcome to Station Square - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/final-fortress-eggman",
		answer: "E.G.G.M.A.N. (for Final Fortress) - Sonic & Sega All-Stars Racing (DS)",
		},
		{
		url: "https://soundcloud.com/faded_boo/water-palace-act-2",
		answer: "Water Palace: Act 2 'Back 2 Back: Cash Cash RMX' (Modern) - Sonic Generations (3DS)",
		},
		{
		url: "https://soundcloud.com/faded_boo/scrambled-egg-zone",
		answer: "Scrambled Egg Zone - Sonic 2 (8-bit)",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/stage-11-hang-castle-no-pause-at-start",
		answer: "Hang Castle - Sonic Heroes",
		},
		{
		url: "https://soundcloud.com/faded_boo/fire-bird-steal-ship",
		answer: "Steal Ship (Fire Bird) - Sonic Shuffle",
		},
		{
		url: "https://soundcloud.com/smokeweedmlg/through-traffic-sonic-riders-zero-gravity",
		answer: "Through Traffic (Megalo Station/Nightside Rush) - Sonic Riders: Zero Gravity",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/shrouded-forest-no-pause-at-start",
		answer: "Shrouded Forest - Sonic and the Black Knight",
		},
		{
		url: "https://soundcloud.com/faded_boo/spring-yard",
		answer: "Spring Yard - Sonic Drift",
		},
		{
		url: "https://soundcloud.com/vgmplanet/blizzard-peaks-act-1",
		answer: "Blizzard Peaks Act 1 - Sonic Rush Adventure",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-battle-ost-central-city",
		answer: "Central City - Sonic Battle",
		},
		{
		url: "https://soundcloud.com/faded_boo/speed-highway-act-1",
		answer: "Speed Highway: Act 1 'Run Through the Speed Highway: Cash Cash RMX' (Classic) - Sonic Generations (consoles/PC)",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/sky-road-zone-1-no-pause-at-start",
		answer: "Sky Road: Zone 1 - Sonic Lost World",
		},
		{
		url: "https://soundcloud.com/faded_boo/boss-theme-5",
		answer: "Boss - Sonic Triple Trouble",
		},
		{
		url: "https://soundcloud.com/faded_boo/white-acropolis-snowy-peak",
		answer: "White Acropolis ~Snowy Peak~ - Sonic 06",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-frontiers-ost-quest-the",
		answer: "Quest: The Best Defense (fighting Towers on Ares Island) - Sonic Frontiers",
		},
		{
		url: "https://soundcloud.com/faded_boo/aerobase-zone",
		answer: "Aerobase Zone (Death Egg Zone remix) - Sonic Pocket Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/rooftop-run-day",
		answer: "Rooftop Run (Day) - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/boss-diablon-no-pause-at-start",
		answer: "Boss: Diablon - Shadow the Hedgehog",
		},
		{
		url: "https://soundcloud.com/user-304781955/sonic-forces-ost-title-screen",
		answer: "Theme of the Resistance: Title Screen ver. - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/faded_boo/twinkle-snow-act-3",
		answer: "Twinkle Snow Act 3 - Sonic Advance 3",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/cant-stop-so-what-for-metal-harbor-no-pause-at-start",
		answer: "Can't Stop, So What!? ...for Metal Harbor - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/user-675036643/team-sonic-racing-ost-hidden-2",
		answer: "Hidden Volcano: Lap Music - Team Sonic Racing",
		},
		{
		url: "https://soundcloud.com/cream-this-rabbit/press-garden-act-2-sonic-mania-ost",
		answer: "Blossom Haze (Press Garden Zone Act 2) - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/faded_boo/ending-12",
		answer: "Credits - Sonic Triple Trouble",
		},
		{
		url: "https://soundcloud.com/nikita-ipatov-1/sonic-forces-ost-eggmans-facility",
		answer: "Eggman's Facility [Rhythm and Balance Remix] - Sonic Forces: Episode Shadow",
		},
		{
		url: "https://soundcloud.com/faded_boo/green-hill-zone-2",
		answer: "Green Hill Zone - Sonic the Hedgehog (8-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/tidal-tempest-good-future",
		answer: "Tidal Tempest (Good Future) - Sonic CD (JP/EU)",
		},
		{
		url: "https://soundcloud.com/rando-kite/the-murder-of-sonic-297614027",
		answer: "Title Screen - The Murder of Sonic the Hedgehog",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/silent-forest-zone-1-no-pause-at-start",
		answer: "Silent Forest: Zone 1 - Sonic Lost World",
		},
		{
		url: "https://soundcloud.com/faded_boo/egg-station-the-final-zone",
		answer: "E.G.G. Station Zone (final boss) - Sonic 4: Episode 1", 
		},
		{
		url: "https://soundcloud.com/faded_boo/casino-park",
		answer: "Casino Park - Sonic Heroes",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-battle-ost-death-egg",
		answer: "Death Egg (overworld hub) - Sonic Battle",
		},
		{
		url: "https://soundcloud.com/faded_boo/grand-prix-cleared",
		answer: "Grand Prix Clear - Sonic Drift",
		},
		{
		url: "https://soundcloud.com/vgmplanet/boss-part-1",
		answer: "Boss - Sonic Rush Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/desert-palace",
		answer: "Desert Palace - Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/tilt-the-machine-no-pause-at-start",
		answer: "Tilt the Machine (pinball minigame, Frozen Factory Zone 3) - Sonic Lost World",
		},
		{
		url: "https://soundcloud.com/faded_boo/egg-utopia-act-1",
		answer: "Egg Utopia Act 1 - Sonic Advance 2",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/oil-desert-zone-act-3-no-pause-at-start",
		answer: "Oil Desert Zone Act 3 - Sonic 4: Episode 2",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/theme-of-magma-rift-no-pause-at-start",
		answer: "Theme of Magma Rift - Sonic Free Riders",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/options-real-hardware-no-pause-at-start",
		answer: "Options/High Scores/Credits - Sonic Spinball (16-bit)",
		},
		{
		url: "https://soundcloud.com/vgmplanet/sonic-adventure-202-red-hot",
		answer: "Red Hot Skull ...for Red Mountain - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/station-square-radio/sa2-in-the-groove-no-pause-at-start",
		answer: "Advertise: SA2 ...in the groove (menu & recap) - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/savannah-citadel-day-no-pause-at-start",
		answer: "Savannah Citadel (Day) - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/vgmplanet/raisin-me-up-prologue",
		answer: "Raisin' Me Up (Prologue; bad ending) - Sonic Rush",
		},
		{
		url: "https://soundcloud.com/sonic-cd-japan/sonic-cd-japan-tidal-tempest-1",
		answer: "Tidal Tempest (Past) - Sonic CD",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/cooperation-for-cannons-core-ver-2-no-pause-at-start",
		answer: "Cooperation ...for Cannon's Core ver. 2 - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/alternate-opening-theme",
		answer: "Rise of the Icon (alternate intro) - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/faded_boo/aquarium-park-act-2-remix",
		answer: "Aquarium Park Act 2 (Remix) - Sonic Colors: Ultimate",
		},
		{
		url: "https://soundcloud.com/faded_boo/volcano-valley-zone-act-1",
		answer: "Volcano Valley Zone Act 1 - Sonic 3D Blast (32-bit)",
		},
		{
		url: "https://soundcloud.com/user-304781955/sonic-forces-ost-final-judgement",
		answer: "Last Judgment (Final Judgment) - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/aquatic-time-no-pause-at-start",
		answer: "Aquatic Time (Aquatic Capital/Tempest Waterway) - Sonic Riders: Zero Gravity",
		},
		{
		url: "https://soundcloud.com/rando-kite/sonic-chaos-turquoise-hill",
		answer: "Turquoise Hill Zone - Sonic Chaos (Game Gear)",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/jingle-awake-dark-no-pause-at-start",
		answer: "Jingle: Awake Dark (Chaos Blast) - Shadow the Hedgehog",
		},
		{
		url: "https://soundcloud.com/vgmplanet/sonic-adventure-110-twinkle",
		answer: "Twinkle Cart ...for Twinkle Park - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/user-675036643/main-menu",
		answer: "Main Menu (Sonic World remix) - Sonic Origins",
		},
		{
		url: "https://soundcloud.com/faded_boo/egg-dragoon-1",
		answer: "Boss Battle: Egg Dragoon - Sonic Generations (consoles/PC)",
		},
		{
		url: "https://soundcloud.com/faded_boo/sweet-mountain-act-3-remix",
		answer: "Sweet Mountain Act 3 (Remix) - Sonic Colors: Ultimate",
		},
		{
		url: "https://soundcloud.com/skyanultra/knuckles-chaotix-seascape",
		answer: "Seascape (Marina Madness Zone) - Knuckles' Chaotix",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/militant-missionary-boss-egg-walker-and-egg-viper-no-pause-at-start",
		answer: "Militant Missionary ...Boss: Egg Walker and Egg Viper - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-the-hedgehog-288002917",
		answer: "Soleanna Castle Town - Sonic 06",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/through-the-fire-no-pause-at-start",
		answer: "Through the Fire (vs. Character; boss) - Sonic and the Black Knight",
		},
		{
		url: "https://soundcloud.com/faded_boo/intro-sk",
		answer: "Title Screen - Sonic & Knuckles, Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/cutscene-chips-memories-no-pause-at-start-1",
		answer: "Cutscene: Chip's Memories (Chip remembers his real identity) - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/faded_boo/captain-jelly-admiral-jelly-1",
		answer: "vs. Captain Jelly & Admiral Jelly (boss) - Sonic Colors (DS)",
		},
		{
		url: "https://soundcloud.com/cream-this-rabbit/mini-boss-theme-danger-on-the-dance-floor-sonic-mania-ost",
		answer: "Danger on the Dance Floor (Mid-Boss) - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/faded_boo/ice-cap",
		answer: "Ice Cap - Sonic Drift 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/stages-9-12",
		answer: "Stages 9-12 - Dr. Robotnik's Mean Bean Machine (16-bit)",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/cutscene-a-hero-falls-reduced-pause-at-start",
		answer: "Cutscene: A Hero Falls (Sonic is defeated) - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-frontiers-ost-do-or-die-boss-theme",
		answer: "Break Through It All (Super Sonic vs. Wyvern; boss) - Sonic Frontiers",
		},
		{
		url: "https://soundcloud.com/vgmplanet/34-cyber-track-act-2",
		answer: "Cyber Track Act 2 - Sonic Advance 3",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/world-map-reduced-pause-at-start",
		answer: "World Map - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/faded_boo/02-title-screen",
		answer: "Title Screen - Dr. Robotnik's Mean Bean Machine (8-bit)",
		},
		{
		url: "https://soundcloud.com/lamingaming/sonic-2-hill-top-zone-recorded-from-sega-mega-drive-mk1-va6",
		answer: "Hill Top Zone - Sonic 2 (16-bit)",
		},
		{
		url: "https://soundcloud.com/vgmplanet/sonic-adventure-215-zero-the",
		answer: "ZERO the Chase-Master ...Boss: Eggman Robot -ZERO- - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/credits-12",
		answer: "Credits - Sonic 3D Blast (16-bit)",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/theme-of-babylon-garden-no-pause-at-start",
		answer: "Theme of Babylon Garden (also Sky Road) - Sonic Riders",
		},
		{
		url: "https://soundcloud.com/vgmplanet/29-boss-intro",
		answer: "Boss Intro - Sonic Advance",
		},
		{
		url: "https://soundcloud.com/faded_boo/final-showdown",
		answer: "Final Showdown - Sonic Spinball (8-bit)",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/last-boss-ver-1-metal-madness-no-pause-at-start",
		answer: "Last Boss Ver. 1: Metal Madness - Sonic Heroes",
		},
		{
		url: "https://soundcloud.com/faded_boo/speak-with-your-heart",
		answer: "Speak with Your Heart (credits) - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/dive-into-gravity-no-pause-at-start",
		answer: "Dive Into Gravity (Crimson Crater/Security Corridor) - Sonic Riders: Zero Gravity",
		},
		{
		url: "https://soundcloud.com/faded_boo/battle-theme",
		answer: "Boss - Sonic 3D Blast (32-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/music-plant-act-2",
		answer: "Music Plant Act 2 - Sonic Advance 2",
		},
		{
		url: "https://soundcloud.com/sonic-cd-us/sonic-cd-us-tidal-tempest-good",
		answer: "Tidal Tempest (Good Future) - Sonic CD (US)",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/theme-of-frozen-forest-no-pause-at-start",
		answer: "Theme of Frozen Forest - Sonic Free Riders",
		},
		{
		url: "https://soundcloud.com/user-304781955/sonic-forces-ost-park-avenue",
		answer: "Justice (Park Avenue) - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/faded_boo/special-stage-emerald-challenge",
		answer: "Special Stage: Emerald Challenge - Sonic Heroes",
		},
		{
		url: "https://soundcloud.com/vgmplanet/emerald-hill-zone",
		answer: "Emerald Hill Zone - Sonic 2 (16-bit)",
		},
		{
		url: "https://soundcloud.com/vgmplanet/get-edgy",
		answer: "Get Edgy (Altitude Limit) - Sonic Rush",
		},
		{
		url: "https://soundcloud.com/faded_boo/silver-dreams-of-absolution",
		answer: "Dreams of an Absolution - Sonic 06",
		},
		{
		url: "https://soundcloud.com/faded_boo/blue-coast-act-3",
		answer: "Blue Coast Zone Act 3 - Sonic Rivals 2",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-lost-world-ost-the-2",
		answer: "The Deadly Six Theme (Violin ver.) - Sonic Lost World",
		},
		{
		url: "https://soundcloud.com/faded_boo/manual-1",
		answer: "Games/Manuals - Sonic Mega Collection",
		},
		{
		url: "https://soundcloud.com/faded_boo/green-grove-zone-act-2",
		answer: "Green Grove Zone Act 2 - Sonic 3D Blast (32-bit)",
		},
		{
		url: "https://soundcloud.com/skyanultra/knuckles-chaotix-walkin",
		answer: "Walkin' (Newtrogic High Zone: Morning) - Knuckles' Chaotix",
		},
		{
		url: "https://soundcloud.com/faded_boo/casinopolis",
		answer: "Casinopolis - Sonic Pinball Party",
		},
		{
		url: "https://soundcloud.com/user-185436760/sonic-1-music-special-stage-extended",
		answer: "Special Stage - Sonic the Hedgehog (16-bit)",
		},
		{
		url: "https://soundcloud.com/vgmplanet/boss-deep-core-allegro",
		answer: "Deep Core (Allegro; true final boss) - Sonic Rush Adventure",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/theme-of-dolphin-resort-no-pause-at-start",
		answer: "Theme of Dolphin Resort - Sonic Free Riders",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/empire-city-night-no-pause-at-start",
		answer: "Empire City (Night) - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/faded_boo/asteroid-coaster-act-4",
		answer: "Asteroid Coaster Act 1 - Sonic Colors (DS)",
		},
		{
		url: "https://soundcloud.com/station-square-radio/emerald-coast-act-2-no-pause-at-start",
		answer: "Emerald Coast: Act 2 'Windy and Ripply' (Modern) - Sonic Generations (3DS)",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/cyber-space-3-6-enjoy-this-world-no-pause-at-start",
		answer: "Cyber Space 3-6: Enjoy this World - Sonic Frontiers",
		},
		{
		url: "https://soundcloud.com/faded_boo/going-my-way",
		answer: "Going My Way (invincibility) - Sonic Runners",
		},
		{
		url: "https://soundcloud.com/vgmplanet/pirates-island-act-2",
		answer: "Pirates' Island Act 2 - Sonic Rush Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/wacky-workbench-bad-future",
		answer: "Wacky Workbench (Bad Future) - Sonic CD (JP/EU)",
		},
		{
		url: "https://soundcloud.com/faded_boo/invincibility-9",
		answer: "Invincibility (Sonic 3 remix) - Sonic Drift 2",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/opening-no-sfx-or-pause-at-start",
		answer: "Opening Theme - Sonic Origins",
		},
		{
		url: "https://soundcloud.com/faded_boo/leaf-forest-act-2",
		answer: "Leaf Forest Act 2 - Sonic Advance 2",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/special-stage-no-pause-at-start-1",
		answer: "Special Stage - Sonic Lost World (3DS)",
		},
		{
		url: "https://soundcloud.com/faded_boo/casino-night",
		answer: "Casino Night - Sonic Drift 2",
		},
		{
		url: "https://soundcloud.com/mr-krado/stage-03-grand-metropolis",
		answer: "Grand Metropolis - Sonic Heroes",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/virtual-sonic-sonic-and-knuckles-theme-no-pause-at-start",
		answer: "Sonic and Knuckles Theme (title theme) - Virtual Sonic (album remix)",
		},
		{
		url: "https://soundcloud.com/cream-this-rabbit/save-select-encore-ver-double-take-sonic-mania-ost",
		answer: "Double Take (Encore Save Select) - Sonic Mania Plus",
		},
		{
		url: "https://soundcloud.com/faded_boo/invincibility-4",
		answer: "Invincibility - Sonic 3D Blast (32-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/museum",
		answer: "Museum - Sonic Gems Collection",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/sandstorm-no-pause-at-start",
		answer: "Sandstorm (title screen) - Sonic and the Secret Rings",
		},
		{
		url: "https://soundcloud.com/faded_boo/act-1",
		answer: "Labyrinth of the Sky - Sonic Labyrinth",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-heroes-ost-follow-me",
		answer: "Follow Me ...Theme of Team Rose - Sonic Heroes",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/cosmic-fall-no-pause-at-start",
		answer: "Cosmic Fall - Shadow the Hedgehog",
		},
		{
		url: "https://soundcloud.com/vgmplanet/mystic-cave-2-player",
		answer: "Mystic Cave Zone (2-player) - Sonic 2 (16-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/the-moon-zone",
		answer: "The Moon Zone (true final boss) - Sonic Advance",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/wisp-circuit-final-lap-no-pause-at-start",
		answer: "Wisp Circuit: Final Lap - Team Sonic Racing",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/leading-lights-for-lost-world-no-pause-at-start",
		answer: "Leading Lights ...for Lost World - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/wake-up-one",
		answer: "Wake Up One (character select) - Sonic Shuffle",
		},
		{
		url: "https://soundcloud.com/faded_boo/colosseum-highway-zone-act-1",
		answer: "Colosseum Highway Zone Act 1 - Sonic Rivals",
		},
		{
		url: "https://soundcloud.com/faded_boo/sky-high-zone",
		answer: "Sky High Zone - Sonic 2 (8-bit)",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/ending-android-ending-no-pause-at-start",
		answer: "Ending: Android Ending - Shadow the Hedgehog",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/speed-up-reach-for-the-stars-ver-no-pause-at-start",
		answer: "Speed Up! (Reach For The Stars ver.) - Sonic Lost World",
		},
		{
		url: "https://soundcloud.com/vgmplanet/rail-canyon",
		answer: "Rail Canyon - Tails' Skypatrol",
		},
		{
		url: "https://soundcloud.com/sonic-mania-456108433/metal-sonic-boss",
		answer: "Vs. Metal Sonic (boss, Stardust Speedway Bad Future JP remix) - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/faded_boo/radiant-emerald",
		answer: "Diamond in the Sky (Radiant Emerald) - Sonic R",
		},
		{
		url: "https://soundcloud.com/faded_boo/dream-skating-ultimate-figure-skating-endless-possibilities-sonic-unleashed",
		answer: "Endless Possibility (Ultimate Figure Skating) - Mario & Sonic at the Olympic Winter Games (DS)",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/theme-of-splash-canyon-no-pause-at-start",
		answer: "Theme of Splash Canyon (also Red Canyon) - Sonic Riders",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/jingle-mystery-solved-reduced-silence-at-start",
		answer: "Jingle: Mystery Solved - Sonic Frontiers",
		},
		{
		url: "https://soundcloud.com/faded_boo/neon-palace-zone-act-1h",
		answer: "Neon Palace Zone Act 1 - Sonic Rivals 2",
		},
		{
		url: "https://soundcloud.com/gamehuntermc-minecraft-pe/sonic-and-knuckles-collection-ice-cap-zone-act-2",
		answer: "Ice Cap Zone Act 2 - Sonic & Knuckles Collection (PC)",
		},
		{
		url: "https://soundcloud.com/vgmplanet/sonic-adventure-220-bad-taste",
		answer: "Bad Taste Aquarium ...for Hot Shelter - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/guardian-caterpillar-no-pause-at-start",
		answer: "Guardian: CATERPILLAR - Sonic Frontiers",
		},
		{
		url: "https://soundcloud.com/faded_boo/marble",
		answer: "Marble - Sonic Drift",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/boss-battle-biolizard-supporting-me-no-pause-at-start",
		answer: "Boss Battle: Biolizard: 'Supporting Me...' - Sonic Generations (3DS)",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/poison-spear-no-pause-at-start",
		answer: "Poison Spear (Sand Scorpion; Sand Oasis boss) - Sonic and the Secret Rings",
		},
		{
		url: "https://soundcloud.com/faded_boo/carnival-night-act-1",
		answer: "Carnival Night Zone Act 1 - Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/faded_boo/chaotic-space-zone",
		answer: "Chaotic Space Zone (Sky Sanctuary remix) - Sonic Pocket Adventure",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/gadget-round-no-pause-at-start",
		answer: "Gadget Round (MeteorTech Premises/MeteorTech Sparkworks) - Sonic Riders: Zero Gravity",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/cutscene-opening-reduced-silence-at-start",
		answer: "Cutscene: Opening - Sonic Lost World",
		},
		{
		url: "https://soundcloud.com/faded_boo/lethal-highway",
		answer: "Lethal Highway - Shadow the Hedgehog",
		},
		{
		url: "https://soundcloud.com/vgmplanet/hidden-island",
		answer: "Hidden Island (A New Venture remix) - Sonic Rush Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/atomic-destroyer-zone",
		answer: "Atomic Destroyer Zone - Sonic Triple Trouble",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-colors-ost-game-land-5",
		answer: "Game Land 5 (Aquarium Park) - Sonic Colors (Wii)",
		},
		url: "https://soundcloud.com/quentthequent/sonic-forces-full-infinite-theme-high-quality",
		answer: "Infinite - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/faded_boo/2p-vs-character-select",
		answer: "Character Select - Sonic 06",
		},
		{
		url: "https://soundcloud.com/faded_boo/world-map",
		answer: "World Map (The World Adventure) - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/faded_boo/title-screen-75349658",
		answer: "Title - Sonic Spinball (8-bit)",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/sa2-main-riff-for-sonic-adventure-2-no-pause-at-start",
		answer: "SA2 ...Main Riff for Sonic Adventure 2 (title, Live and Learn riff) - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/cutscene-planetary-pieces-no-pause-at-start",
		answer: "Cutscene: Planet Pieces (continent restored) - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/faded_boo/2p-battle-start-your-hedgehogs",
		answer: "Start Your Hedgehogs (2P Battle; Wonder World remix) - Sonic Lost World",
		},
		{
		url: "https://soundcloud.com/vgmplanet/metal-scratchin-part-2",
		answer: "Metal Scratchin' (Part 2; pinch) - Sonic Rush",
		},
		{
		url: "https://soundcloud.com/user-304781955/sonic-forces-ost-null-space-fist-bump",
		answer: "Fist Bump: Escape from Null Space - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/faded_boo/smiley-bomb",
		answer: "Smiley Bomb (final boss) - Sonic Labyrinth",
		},
		{
		url: "https://soundcloud.com/faded_boo/title-screen-8",
		answer: "Title Screen (Forest Falls Zone remix) - Sonic Rivals",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/whale-lagoon-final-lap-no-pause-at-start",
		answer: "Whale Lagoon: Final Lap (Seaside Hill remix) - Team Sonic Racing",
		},
		{
		url: "https://soundcloud.com/faded_boo/green-grove-zone-act-1",
		answer: "Green Grove Zone Act 1 - Sonic 3D Blast (32-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/go-quickly",
		answer: "Go Quickly! (timed mode) - Sonic Runners",
		},
		{
		url: "https://soundcloud.com/faded_boo/balloon-park",
		answer: "Balloon Park - Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/faded_boo/act-4",
		answer: "Labyrinth of the Castle - Sonic Labyrinth",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-frontiers-ost-898407699",
		answer: "Ares Island: 6th Mvt. - Sonic Frontiers",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/catch-me-if-you-can-no-pause-at-start",
		answer: "Catch Me If You Can (Babylon Rogues' theme) - Sonic Riders",
		},
		{
		url: "https://soundcloud.com/vgmplanet/sonic-adventure-136-choose",
		answer: "Choose Your Buddy! (Finger Bass ver.) - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/mushroom-hill-act-3",
		answer: "Mushroom Hill: Act 1 (Classic) - Sonic Generations (3DS)",
		},
		{
		url: "https://soundcloud.com/faded_boo/colosseum-highway-boss",
		answer: "Egg Falcon (Colosseum Highway boss) - Sonic Rivals",
		},
		{
		url: "https://soundcloud.com/faded_boo/mushroom-hill-come-on-mr-sonic",
		answer: "Mushroom Hill ~ Come On, Mr. Sonic - Sonic the Fighters",
		},
		{
		url: "https://soundcloud.com/faded_boo/floors-1-3",
		answer: "Floors 1-3 - Sonic the Hedgehog's Gameworld",
		},
		{
		url: "https://soundcloud.com/faded_boo/lava-shelter",
		answer: "Lava Shelter - Shadow the Hedgehog",
		},
		{
		url: "https://soundcloud.com/faded_boo/starlight-carnival-1",
		answer: "Area: Starlight Carnival - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/faded_boo/menu-235891245",
		answer: "Menu - Sonic 4: Episode 1",
		},
		{
		url: "https://soundcloud.com/mwasdq0/spring-yard-zone",
		answer: "Spring Yard Zone - Sonic the Hedgehog (16-bit)",
		},
		{
		url: "https://soundcloud.com/vgmplanet/windmill-village-mode-2",
		answer: "Windmill Village Mode 2 - Sonic Rush Adventure",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-heroes-ost-system-1",
		answer: "System Screen: Menu - Sonic Heroes",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-unleashed-ost-empire-1",
		answer: "Empire City (Day) - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/user-675036643/super-sonic-sonic-the-hedgehog",
		answer: "Super Sonic (Sonic 3) - Sonic Origins",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-the-hedgehog-143150528",
		answer: "Event: Sonic Appears (part of opening cutscene) - Sonic 06",
		},
		{
		url: "https://soundcloud.com/faded_boo/title-screen-9",
		answer: "Title Screen - Sonic Labyrinth",
		},
		{
		url: "https://soundcloud.com/vgmplanet/sonic-adventure-003-lazy-days",
		answer: "Lazy Days ~Livin' in Paradise~ ...Theme of Big - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/dragons-lair-no-pause-at-start",
		answer: "Dragon's Lair - Sonic and the Black Knight",
		},
		{
		url: "https://soundcloud.com/vgmplanet/ending-120819201",
		answer: "Ending - Tails' Skypatrol",
		},
		{
		url: "https://soundcloud.com/faded_boo/eggman-empire-fortress-iron-fortress",
		answer: "Iron Fortress - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/faded_boo/event-when-robots-attack",
		answer: "When Robots Attack (part of opening cutscene) - Sonic Riders: Zero Gravity",
		},
		{
		url: "https://soundcloud.com/cesar-stone-junior/dive-into-the-mellow-aquatic-mine",
		answer: "Dive into the Mellow ...for Aquatic Mine - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/hyper-hyper",
		answer: "Hyper-Hyper (Newtrogic High Zone: Day) - Knuckles' Chaotix",
		},
		{
		url: "https://soundcloud.com/lamingaming/sonic-2-game-results-recorded-from-sega-mega-drive-mk1-va6",
		answer: "Game Results - Sonic 2 (16-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/aqua-planet-zone",
		answer: "Aqua Planet Zone - Sonic Chaos",
		},
		{
		url: "https://soundcloud.com/faded_boo/boss-7",
		answer: "Egg Frog (Egg Utopia boss) - Sonic Advance 2",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/area-tropical-resort-no-pause-at-start",
		answer: "Area: Tropical Resort - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/faded_boo/lava-reef-act-2",
		answer: "Lava Reef Zone Act 2/Hidden Palace Zone - Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/faded_boo/mystic-haunt-zone-act-3",
		answer: "Mystic Haunt Zone Act 3 - Sonic Rivals 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/map-display",
		answer: "World Map - Tails Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/careening-cavern",
		answer: "Careening Cavern (Windy Hill Zone 3) - Sonic Lost World",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/cutscene-hidden-technology-no-pause-at-start",
		answer: "Cutscene: Hidden Technology (opening with Eggman) - Sonic Frontiers",
		},
		{
		url: "https://soundcloud.com/faded_boo/rooftop-run-act-2",
		answer: "Rooftop Run: Act 2 (Modern) - Sonic Generations (consoles/PC)",
		},
		{
		url: "https://soundcloud.com/faded_boo/credits-9",
		answer: "End Roll Medley (credits) - Sonic 4: Episode 1",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/boos-house-final-lap-no-pause-at-start",
		answer: "Boo's House: Final Lap (Sandopolis remix) - Team Sonic Racing",
		},
		{
		url: "https://soundcloud.com/faded_boo/special-stage-18",
		answer: "Special Stage - Sonic 3D Blast (32-bit)",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-and-the-secret-rings-9",
		answer: "The White of Sky (Skeleton Dome) - Sonic and the Secret Rings",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/sonic-drive-no-pause-at-start",
		answer: "SONIC DRIVE (Japanese opening) - Sonic X",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-forces-ost-the-light-of",
		answer: "The Light of Hope (Title Screen ver.) - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/faded_boo/huge-crisis",
		answer: "Jeh Jeh Rocket (Digital Remakin') - Sonic Rush",
		},
		{
		url: "https://soundcloud.com/faded_boo/living-in-the-city-ltn-mix",
		answer: "Living in the City (LTN Mix) - Sonic Gems Collection",
		},
		{
		url: "https://soundcloud.com/faded_boo/hedgehog-hammer-sweet-punch",
		answer: "Sweet Punch ...for Hedgehog Hammer - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/coolbluehog/sonic-frontiers-ost-way-to-the-unknown-knuckles-theme-1",
		answer: "Blood Flow (Knuckles Mvt.) - Sonic Frontiers: Another Story",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-heroes-ost-stage-14",
		answer: "Final Fortress - Sonic Heroes",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/cyber-space-3-1-escape-the-loop-no-pause-at-start",
		answer: "Cyber Space 3-1: Escape the Loop - Sonic Frontiers",
		},
		{
		url: "https://soundcloud.com/faded_boo/boss-theme-4",
		answer: "Boss - Sonic 2 (Game Gear)",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/a-new-frontier-no-pause-at-start",
		answer: "Cutscene: A New Frontier (opening) - Sonic 4: Episode 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/boss-11",
		answer: "Boss 2 - Sonic 3D Blast (16-bit)",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/un-gravitify-electro-extended-no-pause-at-start",
		answer: "Un-gravitify: electro extended - Sonic Riders: Zero Gravity (album remix)",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/unstable-world-for-crazy-gadget-no-pause-at-start",
		answer: "Unstable World ...for Crazy Gadget - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/thunder-deck-lap-music-no-pause-at-start",
		answer: "Thunder Deck: Lap Music - Team Sonic Racing",
		},
		{
		url: "https://soundcloud.com/vgmplanet/28-boss",
		answer: "Boss - Sonic Advance",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-lost-world-ost-circus",
		answer: "Circus Caravan (bonus stage/mini-game) - Sonic Lost World (Wii U)",
		},
		{
		url: "https://soundcloud.com/gamehuntermc-minecraft-pe/sonic-and-knuckles-collection-launch-base-zone-act-2",
		answer: "Launch Base Zone Act 2 - Sonic & Knuckles Collection (PC)",
		},
		{
		url: "https://soundcloud.com/faded_boo/tidal-tempest-bad-future",
		answer: "Tidal Tempest (Bad Future) - Sonic CD (JP/EU)",
		},
		{
		url: "https://soundcloud.com/faded_boo/event-the-past",
		answer: "Event: The Past (dramatic cutscenes) - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/yellow-desert-zone",
		answer: "Yellow Desert Zone - Sonic Blast",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/deep-woods-no-pause-at-start",
		answer: "Deep Woods - Sonic and the Black Knight",
		},
		{
		url: "https://soundcloud.com/faded_boo/marble-garden-act-2",
		answer: "Marble Garden Zone Act 2 - Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/faded_boo/super-sonic-racing-title-ver",
		answer: "Title Screen (Super Sonic Racing) - Sonic R",
		},
		{
		url: "https://soundcloud.com/faded_boo/gigantic-angel-zone-act-2",
		answer: "Gigantic Angel Zone Act 2 (Chrome Gadget remix) - Sonic Pocket Adventure",
		},
		{
		url: "https://soundcloud.com/vgmplanet/24-ocean-base-act-1",
		answer: "Ocean Base Act 1 - Sonic Advance 3",
		},
		{
		url: "https://soundcloud.com/faded_boo/lake-rocky",
		answer: "Lake Rocky - Tails Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/menu-beat",
		answer: "Menu - Sonic Rivals",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/title-screen-no-pause-at-start",
		answer: "Title Screen - Sonic Gems Collection",
		},
		{
		url: "https://soundcloud.com/faded_boo/asteroid-coaster-act-6",
		answer: "Asteroid Coaster Act 2 - Sonic Colors (DS)",
		},
		{
		url: "https://soundcloud.com/faded_boo/fiery-passion",
		answer: "Fiery Passion (Desert Ruins Zone) - Sonic Runners",
		},
		{
		url: "https://soundcloud.com/faded_boo/rusty-ruin-zone-act-4",
		answer: "Rusty Ruin Zone Act 1 - Sonic 3D Blast (32-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/shadow-all-hail-shadow-shadow-attack-ver",
		answer: "Rival Battle: Shadow the Hedgehog: Shadow Attack 'All Hail Shadow (Short ver.)' - Sonic Generations (consoles/PC)",
		},
		{
		url: "https://soundcloud.com/faded_boo/egg-utopia-act-2",
		answer: "Egg Utopia Act 2 - Sonic Advance 2",
		},
		{
		url: "https://soundcloud.com/sonichorizon-213180709/cyberspace-4-i-time-flyer-horizons-mix-sonic-frontiers-the-final-horizon-ost",
		answer: "Cyber Space 4-I: Time Flyer Remix - Sonic Frontiers: Another Story",
		},
		{
		url: "https://soundcloud.com/cream-this-rabbit/studiopolis-zone-act-2-boss-eggman-sonic-mania-ost",
		answer: "Havoc Prognosis (Eggman Boss 2) - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/faded_boo/fist-bump-sxsw-ver",
		answer: "Fist Bump (SXSW ver.) - Sonic Forces (album remix)",
		},
		{
		url: "https://soundcloud.com/faded_boo/boss-theme-6",
		answer: "Boss (Sonic 3 & Knuckles remix) - Sonic Pocket Adventure",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-adventure-2-ost-a-ghosts",
		answer: "A Ghost's Pumpkin Soup ...for Pumpkin Hill - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/achaothatdraws/sonic-and-the-black-knight-ost",
		answer: "Fight the Knight (King Arthur boss) - Sonic and the Black Knight",
		},
		{
		url: "https://soundcloud.com/faded_boo/ice-paradise-act-2",
		answer: "Ice Paradise Act 2 - Sonic Advance 2",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/sky-road-lap-music-no-pause-at-start",
		answer: "Sky Road: Lap Music - Team Sonic Racing",
		},
		{
		url: "https://soundcloud.com/faded_boo/dusty-desert-quicksand",
		answer: "Dusty Desert ~Quicksand~ - Sonic 06",
		},
		{
		url: "https://soundcloud.com/kinnikudash/the-supernatural-for-final-chase-sonic-adventure-2-music-extended",
		answer: "The Supernatural ...for Final Chase - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/tails-house",
		answer: "Tails' House - Tails Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/skill-shop-sonic-2-option-menu",
		answer: "Skill Shop (Sonic 2 2P results remix) - Sonic Generations (consoles/PC)",
		},
		{
		url: "https://soundcloud.com/faded_boo/apotos-day",
		answer: "Apotos (Day) - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/coolbluehog/the-end-sonic-frontiers-ost",
		answer: "I'm with you (final boss) - Sonic Frontiers",
		},
		{
		url: "https://soundcloud.com/faded_boo/gene-gadget-zone-act-3",
		answer: "Gene Gadget Zone Act 1 - Sonic 3D Blast (32-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/white-park-zone-act-3",
		answer: "White Park Zone Act 3 - Sonic 4: Episode 2",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-the-hedgehog-567040712",
		answer: "Flame Core ~The Cavern~ - Sonic 06",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-free-riders-ost-theme-6",
		answer: "Theme of Final Factory - Sonic Free Riders",
		},
		{
		url: "https://soundcloud.com/faded_boo/volcanic-vault-run-run-run",
		answer: "Volcanic Vault - SegaSonic the Hedgehog",
		},
		{
		url: "https://soundcloud.com/faded_boo/sonic-advance-music-secret",
		answer: "Secret Base Zone Act 2 - Sonic Advance",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-lost-world-ost-frozen",
		answer: "Frozen Factory: Zone 1 - Sonic Lost World",
		},
		{
		url: "https://soundcloud.com/faded_boo/meteor-base-zone-act-1",
		answer: "Meteor Base Zone Act 1 - Sonic Rivals",
		},
		{
		url: "https://soundcloud.com/faded_boo/palmtree-panic-good-future-2",
		answer: "Palmtree Panic (Good Future) - Sonic CD (US)",
		},
		{
		url: "https://soundcloud.com/vgmplanet/cutscene-tense",
		answer: "Cutscene: Tense - Sonic Rush Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/starlight-carnival-act-2",
		answer: "Starlight Carnival Act 2 - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/faded_boo/ali-baba-sinbad-rescued",
		answer: "Ali Baba & Sinbad Rescued! (cutscene) - Sonic and the Secret Rings",
		},
		{
		url: "https://soundcloud.com/faded_boo/emerald-hill",
		answer: "Emerald Hill - Sonic Drift 2",
		},
		{
		url: "https://soundcloud.com/cream-this-rabbit/mirage-saloon-zone-act-1-sonic-ver-sonic-mania-ost",
		answer: "Skyway Octane (Mirage Saloon Zone Act 1 ST Mix) - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-adventure-2-ost-lets",
		answer: "Event: Let's Make It! (Hero Story opening cutscene) - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/dead-line",
		answer: "What U Need (Digital Remakin') - Sonic Rush",
		},
		{
		url: "https://soundcloud.com/faded_boo/sylvania-castle-zone-act-2",
		answer: "Sylvania Castle Zone Act 2 - Sonic 4: Episode 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/act-2-boss",
		answer: "Boss - Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/cutscene-apathy-meets-disappointment-no-pause-at-start",
		answer: "Cutscene: Apathy Meets Disappointment (pre-Silent Forest Act 2) - Sonic Lost World",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-riders-zero-901747141",
		answer: "Spiral Madness (Botanical Kingdom/Snowy Kingdom) - Sonic Riders: Zero Gravity",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/ocean-view-final-lap-no-pause-at-start",
		answer: "Ocean View: Final Lap (Sonic: You Can Do Anything) - Team Sonic Racing",
		},
		{
		url: "https://soundcloud.com/faded_boo/boss-battle-2",
		answer: "Boss - Sonic Chronicles: The Dark Brotherhood",
		},
		{
		url: "https://soundcloud.com/faded_boo/sonic-3-megad-mix",
		answer: "Sonic 3 (MegaD Mix) - Sonic Gems Collection",
		},
		{
		url: "https://soundcloud.com/faded_boo/lost-labyrinth-zone-act-3",
		answer: "Lost Labyrinth Zone Act 3 - Sonic 4: Episode 1",
		},
		{
		url: "https://soundcloud.com/faded_boo/sonic-advance-ost-casino-1",
		answer: "Casino Paradise Zone Act 1 - Sonic Advance",
		},
		{
		url: "https://soundcloud.com/sonic-cd-japan/sonic-cd-japan-quartz-1",
		answer: "Quartz Quadrant (Past) - Sonic CD",
		},
		{
		url: "https://soundcloud.com/faded_boo/machine-labyrinth-act-2",
		answer: "Machine Labyrinth Act 2 - Sonic Rush Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/city-escape-act-2",
		answer: "City Escape: Act 2 'Escape from the City: Blue Blur RMX' (Modern) - Sonic Generations (consoles/PC)",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-and-the-secret-612293826",
		answer: "The Palace That Was Found (Evil Foundry) - Sonic and the Secret Rings",
		},
		{
		url: "https://soundcloud.com/sonic_complete/labyrinth-zone",
		answer: "Labyrinth Zone - Sonic the Hedgehog (16-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/tropical-resort-act-9",
		answer: "Tropical Resort Act 2 - Sonic Colors (DS)",
		},
		{
		url: "https://soundcloud.com/sonic-cd-us/sonic-cd-us-sonic-boom",
		answer: "Sonic Boom (opening theme) - Sonic CD (US)",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/theme-of-green-cave-no-pause-at-start",
		answer: "Theme of Green Cave (also White Cave) - Sonic Riders",
		},
		{
		url: "https://soundcloud.com/faded_boo/diamond-dust-zone-act-4",
		answer: "Diamond Dust Zone Act 2 - Sonic 3D Blast (32-bit)",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/mechanical-resonance-no-pause-at-start",
		answer: "Mechanical Resonance ...for Final Egg - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/leonel-cisneros-378688411/sonic-superstars-ost-bridge-island-act-1",
		answer: "Bridge Island Zone Act 1 - Sonic Superstars",
		},
		{
		url: "https://soundcloud.com/faded_boo/toy-kingdom-act-3",
		answer: "Toy Kingdom Act 3 - Sonic Advance 3",
		},
		{
		url: "https://soundcloud.com/faded_boo/bonus-stage-gumball-machine",
		answer: "Gumball Bonus Stage - Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/faded_boo/it-doesnt-matter-2",
		answer: "It Doesn't Matter (cutscene right before Excalibur Sonic) - Sonic and the Black Knight",
		},
		{
		url: "https://soundcloud.com/faded_boo/lost-impact",
		answer: "Lost Impact - Shadow the Hedgehog",
		},
		{
		url: "https://soundcloud.com/faded_boo/radical-highway-act-1",
		answer: "Radical Highway: Act 1 'Vengeance Is Mine: Cash Cash RMX' (Classic) - Sonic Generations (3DS)",
		},
		{
		url: "https://soundcloud.com/faded_boo/adabat-night",
		answer: "Adabat (Night) - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/faded_boo/sweet-mountain-act-1-remix",
		answer: "Sweet Mountain Act 1 (Remix) - Sonic Colors: Ultimate",
		},
		{
		url: "https://soundcloud.com/faded_boo/death-egg-mkii-zone-act-2",
		answer: "Death Egg mk.II Zone Act 2 (final boss) - Sonic 4: Episode 2",
		},
		{
		url: "https://soundcloud.com/cream-this-rabbit/blue-spheres-bonus-stage-sonic-mania-ost",
		answer: "Blue Spheres (bonus stage) - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-the-hedgehog-22339279",
		answer: "Event: Dr. Eggman Appears (part of opening cutscene) - Sonic 06",
		},
		{
		url: "https://soundcloud.com/sonic-rush-61848857/sonic-original-138365566",
		answer: "Back 2 Back (Water Palace) - Sonic Rush",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/clockwork-pyramid-lap-music-no-pause-at-start",
		answer: "Clockwork Pyramid: Lap Music - Team Sonic Racing",
		},
		{
		url: "https://soundcloud.com/faded_boo/special-stage-sa2",
		answer: "Special Stage - Sonic Advance 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/speed-highway-goin-down",
		answer: "Goin' Down!? ...for Speed Highway - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-frontiers-ost-2",
		answer: "Cyber Space 1-5: Dropaholic - Sonic Frontiers",
		},
		{
		url: "https://soundcloud.com/sonic-cd-japan/sonic-cd-japan-metallic-1",
		answer: "Metallic Madness (Past) - Sonic CD",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/boss-heavy-dog-no-pause-at-start",
		answer: "Boss: Heavy Dog (-GUN- Mobile remix) - Shadow the Hedgehog",
		},
		{
		url: "https://soundcloud.com/faded_boo/cosmic-casino-zone-act-1",
		answer: "Cosmic Casino Zone Act 1 (Gumball Bonus Stage remix) - Sonic Pocket Adventure",
		},
		{
		url: "https://soundcloud.com/user-675036643/sonic-the-hedgehog-673986164",
		answer: "Event: The Future World? (cutscene, Sonic pre-Crisis City) - Sonic 06",
		},
		{
		url: "https://soundcloud.com/faded_boo/flying-battery-act-1",
		answer: "Flying Battery Zone Act 1 - Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/leonel-cisneros-378688411/sonic-superstars-ost-pinball-carnival-zone-act-fruit",
		answer: "Pinball Carnival Zone Act 'Fruits' - Sonic Superstars",
		},
		{
		url: "https://soundcloud.com/faded_boo/mission-2-balloon-park",
		answer: "Challenge / Mission 2 ('Quick Race' w/'Balloon Park') - Sonic Generations (consoles/PC)",
		},
		{
		url: "https://soundcloud.com/faded_boo/mystic-jungle-casino-forest",
		answer: "Casino Forest - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/theme-of-sonic-the-hedgehog-2006-e3-version-no-pause-at-start",
		answer: "Theme of Sonic the Hedgehog ~2006 E3 version~ - Sonic 06",
		},
		{
		url: "https://soundcloud.com/faded_boo/planet-wisp-act-3",
		answer: "Planet Wisp Act 3 - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/faded_boo/mazuri-day",
		answer: "Mazuri (Day) - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/faded_boo/high-flying-groove",
		answer: "High Flying Groove (results screen) - Sonic Riders",
		},
		{
		url: "https://soundcloud.com/faded_boo/green-hill-guardian-rock",
		answer: "Set in Motion (Guardian Rock) - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/faded_boo/lost-world-danger-chased-by-rock",
		answer: "Danger! Chased by Rock ...for Lost World - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/time-attack-1",
		answer: "Time Attack - Sonic Advance 3",
		},
		{
		url: "https://soundcloud.com/faded_boo/special-stage-19",
		answer: "Special Stage - Sonic Blast",
		},
		{
		url: "https://soundcloud.com/faded_boo/egg-emperor",
		answer: "Boss: Egg Emperor - Sonic Heroes",
		},
		{
		url: "https://soundcloud.com/faded_boo/credits-7",
		answer: "Worth a Chance (ending) - Sonic and the Secret Rings",
		},
		{
		url: "https://soundcloud.com/faded_boo/event-after-the-fight",
		answer: "Event: After the Fight (post-boss cutscene) - Sonic Rush",
		},
		{
		url: "https://soundcloud.com/leonel-cisneros-378688411/sonic-superstars-ost-sky-temple-act-1",
		answer: "Sky Temple Zone - Sonic Superstars",
		},
		{
		url: "https://soundcloud.com/faded_boo/sega-pico-music-title-screen",
		answer: "Title Screen - Tails and the Music Maker",
		},
		{
		url: "https://soundcloud.com/user-443473563-576589529/chaos-angel-act-2",
		answer: "Chaos Angel Act 2 - Sonic Advance 3",
		},
		{
		url: "https://soundcloud.com/faded_boo/special-stage-22",
		answer: "Special Stage - Sonic the Hedgehog Genesis (GBA)",
		},
		{
		url: "https://soundcloud.com/faded_boo/end-of-the-summer",
		answer: "End of the Summer (Tropical Coast Zone) - Sonic Runners",
		},
		{
		url: "https://soundcloud.com/sonic-the-blue-blur/savannah-citadel-night",
		answer: "Savannah Citadel (Night) - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/kronos-island-5th-mvt-no-pause-at-start",
		answer: "Kronos Island: 5th Mvt. - Sonic Frontiers",
		},
		{
		url: "https://soundcloud.com/faded_boo/sweet-mountain",
		answer: "Area: Sweet Mountain - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/cutscene-waiting-for-boss-no-pause-at-start",
		answer: "Cutscene: Waiting For Boss - Sonic Rush Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/egg-reverie-pinch",
		answer: "Egg Panicky (Egg Reverie Zone Pinch Mode; unused) - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/character-select-party-mode-no-pause-at-start",
		answer: "Character Select (Party Mode) - Sonic and the Secret Rings",
		},
		{
		url: "https://soundcloud.com/faded_boo/death-egg-act-1",
		answer: "Death Egg Zone Act 1 - Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/faded_boo/death-egg-robot-ver-3",
		answer: "Boss Battle: Death Egg Robot (Phase 3) - Sonic Generations (consoles/PC)",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/virtual-reality-supporting-me-remix-no-pause-at-start",
		answer: "Virtual Reality [Supporting Me Remix] - Sonic Forces: Episode Shadow",
		},
		{
		url: "https://soundcloud.com/faded_boo/chao-race-beginner",
		answer: "Chao Race (Beginner) - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/hidden-world-cubliclated",
		answer: "Hidden World: Cubliclated - Sonic Lost World",
		},
		{
		url: "https://soundcloud.com/faded_boo/dream-skating-ultimate-figure-skating-knight-of-the-wind-sonic-and-the-black-knight",
		answer: "Knight of the Wind (Ultimate Figure Skating) - Mario & Sonic at the Olympic Winter Games (DS)",
		},
		{
		url: "https://soundcloud.com/faded_boo/meta-junglira-zone",
		answer: "Meta Junglira Zone - Sonic Triple Trouble",
		},
		{
		url: "https://soundcloud.com/faded_boo/invincibility-6",
		answer: "Invincible - Sonic 4: Episode 1 (WiiWare)",
		},
		{
		url: "https://soundcloud.com/gabriel-lavall-batista/sonic-heroes-ost-boss-vs-team",
		answer: "Boss: vs. Team Battle - Sonic Heroes",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/sand-road-lap-music-no-pause-at-start",
		answer: "Sand Road: Lap Music (Sand Hill remix) - Team Sonic Racing",
		},
		{
		url: "https://soundcloud.com/faded_boo/hill-top",
		answer: "Hill Top - Sonic Drift 2",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/guardian-asura-no-pause-at-start",
		answer: "Guardian: ASURA - Sonic Frontiers",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/rhythmic-passage",
		answer: "Advertise: Rhythmic Passage (settings menu) - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/frontier-canyon-zone-act-1",
		answer: "Frontier Canyon Zone Act 1 - Sonic Rivals 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/crisis-city-the-flame-skyscraper-whirlwind-tornado",
		answer: "Crisis City ~The Flames ~ Scyscraper ~ Whirlwind ~ Tornado~ - Sonic 06",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/battle-with-zavok-no-pause-at-start",
		answer: "Battle with Zavok - Sonic Lost World",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/twinkle-snow-act-1-no-pause-at-start",
		answer: "Twinkle Snow Act 1 - Sonic Advance 3",
		},
		{
		url: "https://soundcloud.com/cesar-stone-junior/this-way-out-prison-lane",
		answer: "This Way Out ...for Prison Lane - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/skyanultra/knuckles-chaotix-midnight",
		answer: "Midnight Greenhouse (Botanic Base Zone) - Knuckles' Chaotix",
		},
		{
		url: "https://soundcloud.com/faded_boo/metal-sonic",
		answer: "Rival Battle: Metal Sonic - Sonic Generations",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/theme-of-sonic-colors-no-pause-at-start",
		answer: "Theme of Sonic Colors - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/faded_boo/battle-quick-race",
		answer: "Battle: Quick Race (2P Play) - Sonic Heroes",
		},
		{
		url: "https://soundcloud.com/nathan-202274230/carnival-night-zone-act-2",
		answer: "Carnival Night Zone Act 2 - Sonic Origins",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/the-cauldron-no-pause-at-start",
		answer: "The Cauldron - Sonic and the Black Knight",
		},
		{
		url: "https://soundcloud.com/chaonic/d4-21-cyber-space-3-2-go-slap-sonic-frontiers-ost",
		answer: "Cyber Space 3-2: Go Slap - Sonic Frontiers",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/give-me-chaos-no-pause-at-start",
		answer: "Give Me Chaos - Sonic in Sydney (Sega World)",
		},
		{
		url: "https://soundcloud.com/faded_boo/metallic-madness-zone-act-1",
		answer: "Metallic Madness Zone Act 1 - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/his-world-blue-world-prelude-mix-theme-of-summer-of-sonic-2008-no-pause-at-start",
		answer: "His World (Blue World Prelude) - Theme of Summer of Sonic 2008 (Bentley Jones remix)",
		},
		{
		url: "https://soundcloud.com/faded_boo/bingo-highway",
		answer: "Bingo Highway - Sonic Heroes",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/ice-mountain-final-lap-no-pause-at-start",
		answer: "Ice Mountain: Final Lap (Cool Edge & Reach for the Stars remix) - Team Sonic Racing",
		},
		{
		url: "https://soundcloud.com/faded_boo/ending-5",
		answer: "Ending - Sonic 3D Blast (16-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/theme-of-blazes-event",
		answer: "Event: Blaze (cutscene) - Sonic Rush",
		},
		{
		url: "https://soundcloud.com/faded_boo/aquarium-park-act-2",
		answer: "Aquarium Park Act 2 - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/faded_boo/credits-20",
		answer: "Credits - Sonic Jam",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/challenge-for-another-aim-no-pause-at-start",
		answer: "Challenge for Another Aim (stage select) - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/boss-battle-big-arms-reduced-buildup-at-start",
		answer: "Boss Battle: Big Arms - Sonic Generations (3DS)",
		},
		{
		url: "https://soundcloud.com/faded_boo/videoplayback",
		answer: "Nonaggression (Ultimate Gemerl boss) - Sonic Advance 3",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/sonic-heroes-title-ver-no-pause-at-start",
		answer: "Sonic Heroes (Title ver.) - Sonic Heroes",
		},
		{
		url: "https://soundcloud.com/faded_boo/network-sonic-mega-collection-menu",
		answer: "Network (Sonic Mega Collection remix) - Sonic Generations",
		},
		{
		url: "https://soundcloud.com/jeffey-ronaldson/sonic-chaos-unused-track-1",
		answer: "Unused (later Sunset Park Act 3) - Sonic Chaos",
		},
		{
		url: "https://soundcloud.com/faded_boo/vela-nova-1",
		answer: "Vela-Nova (Dead Line boss) - Sonic Rush",
		},
		{
		url: "https://soundcloud.com/faded_boo/midnight-owl",
		answer: "Midnight Owl (Silent Forest Zone 2) - Sonic Lost World",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/black-comet-no-pause-at-start",
		answer: "Black Comet (Prison Island remix) - Shadow the Hedgehog",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/scramble-for-the-core-for-cannons-core-ver1-no-pause-at-start",
		answer: "Scramble for the Core ...for Cannon's Core ver. 1 - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/event-i-will-change-my-destiny",
		answer: "Event: I Will Change My Destiny (cutscene, Elise dies post-Radical Train) - Sonic 06",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/theme-of-forgotten-tomb-no-pause-at-start",
		answer: "Theme of Forgotten Tomb - Sonic Free Riders",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/power-of-the-ring-no-pause-at-start",
		answer: "Power of the Ring (results) - Sonic and the Secret Rings",
		},
		{
		url: "https://soundcloud.com/faded_boo/happycredit-roll",
		answer: "Happy (credits) - Sonic Rivals",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/island-mystery-pinball-no-pause-at-start",
		answer: "Island Mystery: Pinball - Sonic Frontiers",
		},
		{
		url: "https://soundcloud.com/cream-this-rabbit/green-hill-zone-act-2-sonic-mania-ost",
		answer: "Green Hill Zone Act 2 - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/faded_boo/hot-crater-act-1",
		answer: "Hot Crater Act 1 - Sonic Advance 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/planet-wisp-act-1-remix",
		answer: "Planet Wisp Act 1 (Remix) - Sonic Colors: Ultimate",
		},
		{
		url: "https://soundcloud.com/faded_boo/volcano-valley-zone-act-3",
		answer: "Volcano Valley Zone Act 2 - Sonic 3D Blast (32-bit)",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/doctors-mine-final-lap-no-pause-at-start",
		answer: "Doctor's Mine: Final Lap - Team Sonic Racing",
		},
		{
		url: "https://soundcloud.com/faded_boo/haunted-ship-act-2",
		answer: "Haunted Ship Act 2 - Sonic Rush Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/super-sonic-wonder-world-ver",
		answer: "Super Sonic (Wonder World ver.) - Sonic Lost World",
		},
		{
		url: "https://soundcloud.com/leonel-cisneros-378688411/sonic-superstars-ost-speed-jungle-act-sonic",
		answer: "Speed Jungle Zone Act 'Sonic' - Sonic Superstars",
		},
		{
		url: "https://soundcloud.com/faded_boo/knuckles-secret",
		answer: "Knuckles Easter Egg (& Knuckles ending) - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/faded_boo/zone-select-1",
		answer: "Zone Select 1 - Sonic Advance 2",
		},
		{
		url: "https://soundcloud.com/leonel-cisneros-378688411/sonic-superstars-ost-bonus-stage",
		answer: "Bonus Stage - Sonic Superstars",
		},
		{
		url: "https://soundcloud.com/faded_boo/versus-mode",
		answer: "Versus Mode - Sonic Eraser",
		},
		{
		url: "https://soundcloud.com/sonic-the-hedgeog/sonic-adventure-dx-music-open-your-heart",
		answer: "Open Your Heart - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/ice-mountain-lap-music-no-pause-at-start",
		answer: "Ice Mountain: Lap Music (Cool Edge & Reach for the Stars remix) - Team Sonic Racing",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/event-memory-of-youth-no-pause-at-start",
		answer: "Event: Memory of Youth (cutscene, pre-Egg Cerebus) - Sonic 06",
		},
		{
		url: "https://soundcloud.com/faded_boo/nega-wisp-armor-ver-1",
		answer: "vs. Nega-Wisp Armor (Phase 1) - Sonic Colors (DS)",
		},
		{
		url: "https://soundcloud.com/faded_boo/star-light-zone-1",
		answer: "Star Light Zone - Sonic the Hedgehog Genesis (GBA)",
		},
		{
		url: "https://soundcloud.com/faded_boo/sky-fortress-zone-act-1",
		answer: "Sky Fortress Zone Act 1 - Sonic 4: Episode 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/dragon-road-night",
		answer: "Dragon Road (Night) - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/fawfulhasfury/24-get-edgy-blazy-mix-sonic",
		answer: "Get Edgy (Blazy Mix; Altitude Limit) - Sonic Rush",
		},
		{
		url: "https://soundcloud.com/faded_boo/invincible-1",
		answer: "Invincibility - Sonic 2 (8-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/casino-park-be-cool-be-wild-be-groovy",
		answer: "Be Cool, Be Wild, and Be Groovy (for Casino Park) - Sonic & Sega All-Stars Racing (DS)",
		},
		{
		url: "https://soundcloud.com/faded_boo/level-1-2-3-boss",
		answer: "Boss - Sonic Labyrinth",
		},
		{
		url: "https://soundcloud.com/cesar-stone-junior/soarin-over-the-space-cosmic-wall",
		answer: "Soarin' Over Space ...for Cosmic Wall - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/power-ride",
		answer: "Power Ride (Lava Mountain Zone) - Sonic Runners",
		},
		{
		url: "https://soundcloud.com/faded_boo/route-99-act-3",
		answer: "Route 99 Act 3 - Sonic Advance 3",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/guardian-ninja-no-pause-at-start",
		answer: "Guardian: NINJA - Sonic Frontiers",
		},
		{
		url: "https://soundcloud.com/faded_boo/theme-of-babylonian",
		answer: "Theme of Babylonian (unused) - Sonic Riders",
		},
		{
		url: "https://soundcloud.com/sonic-mania-456108433/sonic-mania-speed-shoes",
		answer: "The Blur (Speed Shoes) - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/faded_boo/egg-wyvern",
		answer: "Boss: Egg-Wyvern - Sonic 06",
		},
		{
		url: "https://soundcloud.com/leonel-cisneros-378688411/sonic-superstars-emerald-power-vision",
		answer: "Emerald Power: Vision - Sonic Superstars",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/limestone-cave-no-pause-at-start",
		answer: "Limestone Cave ...for Ice Cap - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/sealed-ground-no-pause-at-start",
		answer: "Sealed Ground (Gigan Rocks/Gigan Device) - Sonic Riders: Zero Gravity",
		},
		{
		url: "https://soundcloud.com/faded_boo/jingle-invincible",
		answer: "Invincibility - Sonic Heroes",
		},
		{
		url: "https://soundcloud.com/faded_boo/endless-possibility-30th-anniversary-ver",
		answer: "Endless Possibility (30th Anniversary Ver.; Live) - Sonic 30th Anniversary Symphony (Live)",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/blue-on-the-run-no-pause-at-start",
		answer: "Blue on the Run (Captain Bemoth; Pirate Storm boss) - Sonic and the Secret Rings",
		},
		{
		url: "https://soundcloud.com/faded_boo/speed-highway-act-2",
		answer: "Speed Highway: Act 2 'Run Through the Speed Highway' (Modern) - Sonic Generations (consoles/PC)",
		},
		{
		url: "https://soundcloud.com/faded_boo/event-reboot",
		answer: "Cutscene: Reboot (opening; Sonic Boom & Sonic: You Can Do Anything remix) - Sonic 4: Episode Metal",
		},
		{
		url: "https://soundcloud.com/faded_boo/iblis-ver-2",
		answer: "Boss: Iblis Phase 3 - Sonic 06",
		},
		{
		url: "https://soundcloud.com/user-298505608/jingle-invincible-ver-1",
		answer: "Jingle: Invincible ver. 1 (Classic) - Sonic Generations",
		},
		{
		url: "https://soundcloud.com/faded_boo/chemical-plant-network-terminal-inside",
		answer: "Network Terminal (Interior) - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/cream-this-rabbit/lava-reef-zone-act-2-sonic-mania-ost",
		answer: "Lava Reef Zone Act 1 - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/faded_boo/tropical-resort-act-3",
		answer: "Tropical Resort Act 3 - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/faded_boo/2p-vs-battle",
		answer: "2P vs. Battle (Radical Highway remix) - Shadow the Hedgehog",
		},
		{
		url: "https://soundcloud.com/faded_boo/theme-of-chao",
		answer: "Theme of Chao - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/are-you-brave",
		answer: "Are You Brave (Sonic the Fighters remix) - Sonic Gems Collection",
		},
		{
		url: "https://soundcloud.com/faded_boo/main-menu-3",
		answer: "Main Menu (Chao Race remix) - Sonic Advance 3",
		},
		{
		url: "https://soundcloud.com/faded_boo/town-mission-1",
		answer: "Town Mission 1 - Sonic 06",
		},
		{
		url: "https://soundcloud.com/faded_boo/launch-base-2",
		answer: "Launch Base Zone Act 2 (prototype version) - Sonic 3",
		},
		{
		url: "https://soundcloud.com/faded_boo/emerald-hill-zone",
		answer: "Emerald Hill Zone - Mario & Sonic at the Olympic Games (DS)",
		},
		{
		url: "https://soundcloud.com/faded_boo/select-player",
		answer: "Character Select - Sonic Chaos",
		},
		{
		url: "https://soundcloud.com/sonichorizon-213180709/cyberspace-4-a-genshi-horizons-mix-sonic-frontiers-the-final-horizon-ost",
		answer: "Cyber Space 4-A: Genshi Remix - Sonic Frontiers: Another Story",
		},
		{
		url: "https://soundcloud.com/faded_boo/showdown",
		answer: "Showdown - Sonic Spinball (16-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/chaotic-inferno-zone-act-1",
		answer: "Chaotic Inferno Zone Act 1 - Sonic Rivals 2",
		},
		{
		url: "https://soundcloud.com/user-304781955/sonic-forces-ost-avatar-customization",
		answer: "This is Who You Are (Avatar customization) - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/rhea-island-no-pause-at-start",
		answer: "Rhea Island - Sonic Frontiers",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/fly-in-the-freedom-theme-of-rouge-no-pause-at-start",
		answer: "Fly in the Freedom ...Theme of Rouge - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/sky-sanctuary-act-1",
		answer: "Sky Sanctuary: Act 1 (Classic) - Sonic Generations (consoles/PC)",
		},
		{
		url: "https://soundcloud.com/faded_boo/forest-falls-zone-act-2",
		answer: "Forest Falls Zone Act 2 - Sonic Rivals",
		},
		{
		url: "https://soundcloud.com/leonel-cisneros-378688411/sonic-superstars-ost-press-factory-act-1",
		answer: "Press Factory Zone Act 1 - Sonic Superstars",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/splash-hill-zone-medley-no-pause-at-start",
		answer: "Splash Hill Zone Medley - Sonic 4: Episode 1 & 2 (soundtrack album)",
		},
		{
		url: "https://soundcloud.com/faded_boo/game-land-color-power",
		answer: "Game Land: Color Power - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/faded_boo/aquatic-relix-zone-act-2",
		answer: "Aquatic Relix Zone Act 2 (Hydrocity Zone Act 1 remix) - Sonic Pocket Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/white-gloves",
		answer: "White Gloves (Party Mode minigames) - Sonic and the Secret Rings",
		},
		{
		url: "https://soundcloud.com/faded_boo/nega-wisp-armor-ver-3",
		answer: "vs. Nega-Wisp Armor (Phase 2) - Sonic Colors (DS)",
		},
		{
		url: "https://soundcloud.com/coolbluehog/undefeatable-sonic-frontiers",
		answer: "Undefeatable (Super Sonic vs. Giganto; boss) - Sonic Frontiers",
		},
		{
		url: "https://soundcloud.com/user-891621526/sonic-the-hedgehog-cd-cosmic-eternity",
		answer: "Cosmic Eternity: Believe in Yourself (credits) - Sonic CD (JP/EU)",
		},
		{
		url: "https://soundcloud.com/faded_boo/transform-into-excalibur-sonic",
		answer: "Transform into Excalibur Sonic (cutscene) - Sonic and the Black Knight",
		},
		{
		url: "https://soundcloud.com/faded_boo/results-a-rank-or-below",
		answer: "Jingle: Result ver. 1 (S Rank) - Sonic Generations (consoles/PC)",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/vs-titan-big-mother-reduced-buildup-at-start",
		answer: "vs. Titan & Big Mother - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/faded_boo/casino-street-zone-act-3",
		answer: "Casino Street Zone Act 3 - Sonic 4: Episode 1",
		},
		{
		url: "https://soundcloud.com/user-304781955/sonic-forces-ost-spaceport",
		answer: "Fighting Onward (Space Port) - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/empire-city-music-hall/cyber-space-results-screen-complete-no-pause-at-start",
		answer: "Cyber Space: Results Screen (Complete) - Sonic Frontiers",
		},
		{
		url: "https://soundcloud.com/faded_boo/emerl-configuration",
		answer: "Emerl Configuration - Sonic Battle",
		},
		{
		url: "https://soundcloud.com/faded_boo/game-land-7",
		answer: "Game Land 7 (Terminal Velocity) - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/faded_boo/round-clear-1",
		answer: "Stage Clear - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/jingle-chaos-control-no-pause-at-start",
		answer: "Jingle: Chaos Control - Shadow the Hedgehog",
		},
		{
		url: "https://soundcloud.com/faded_boo/casino-park-super-sonic-racing",
		answer: "Super Sonic Racing (for Casino Park) - Sonic & Sega All-Stars Racing (DS)",
		},
		{
		url: "https://soundcloud.com/faded_boo/honeycomb-highway",
		answer: "Honeycomb Highway (Desert Ruins Zone 2) - Sonic Lost World",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/hikaru-michi-the-shining-road-no-pause-at-start",
		answer: "Hikaru Michi ('The Shining Road,' Japanese ending 2) - Sonic X",
		},
		{
		url: "https://soundcloud.com/faded_boo/great-turquoise-zone",
		answer: "Great Turquoise Zone - Sonic Triple Trouble",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/bright-sound-for-dry-lagoon-no-pause-at-start",
		answer: "Bright Sound ...for Dry Lagoon - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/orcan-skullian-remix",
		answer: "vs. Orcan & Skullian (Remix) - Sonic Colors: Ultimate",
		},
		{
		url: "https://soundcloud.com/faded_boo/ocean-palace",
		answer: "Ocean Palace - Sonic Heroes",
		},
		{
		url: "https://soundcloud.com/faded_boo/neon-palace-zone-act-2",
		answer: "Neon Palace Zone Act 2 - Sonic Rivals 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/game-land-title-screen-ds-ver",
		answer:  "Game Land Menu (Eggman's theme) - Sonic Colors (DS)",
		},
		{
		url: "https://soundcloud.com/faded_boo/09-gigapolis-zone",
		answer: "Gigalopolis Zone - Sonic Chaos (Game Gear)",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/fight-for-my-own-way-no-pause-at-start",
		answer: "Fight for My Own Way ...Boss: Event - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/big-swell-allegro",
		answer: "Big Swell (Allegro) - Sonic Rush Adventure",
		},
		{
		url: "https://soundcloud.com/faded_boo/starlight",
		answer: "Star Light - Sonic Drift",
		},
		{
		url: "https://soundcloud.com/faded_boo/event-the-tornado-takes-off",
		answer: "Cutscene: The Tornado Takes Off! (pre-Sky Fortress) - Sonic 4: Episode 2",
		},
		{
		url: "https://soundcloud.com/ondreas-williams/live-life-ending-theme-of-sonic-and-the-black-knight",
		answer: "Live Life (credits) - Sonic and the Black Knight",
		},
		{
		url: "https://soundcloud.com/faded_boo/aquarium-park-act-7",
		answer: "Aquarium Park Act 1 (Remix) - Sonic Colors: Ultimate",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/cyber-space-2-2-heavenly-sky-no-pause-at-start",
		answer: "Cyber Space 2-2: Heavenly Sky - Sonic Frontiers",
		},
		{
		url: "https://soundcloud.com/sonic989/steel-cortex-titanic-monarch-zone-act-2",
		answer: "Steel Cortex (Titanic Monarch Zone Act 2) - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/faded_boo/boss-theme-2",
		answer: "Boss - Sonic Blast",
		},
		{
		url: "https://soundcloud.com/jonathan-lara-veliz-889662618/unknown-from-m-e-theme-of",
		answer: "Unknown from M.E. ...Theme of Knuckles - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/faded_boo/dreams-dreams",
		answer: "Dreams Dreams (NiGHTS into Dreams remix) - Sonic Pinball Party",
		},
		{
		url: "https://soundcloud.com/nathan-202274230/ice-cap-zone-act-1-sonic",
		answer: "Ice Cap Zone Act 1 - Sonic Origins",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/un-gravitify-crush-40-no-pause-at-start",
		answer: "Un-gravitify (Crush 40 version) - Sonic Riders: Zero Gravity (album remix)",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/on-the-edge-for-eternal-engine-no-pause-at-start",
		answer: "On the Edge ...for Eternal Engine - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/fawfulhasfury/34-wrapped-in-black-part-2",
		answer: "Wrapped in Black: Part 2 (final boss, pinch) - Sonic Rush",
		},
		{
		url: "https://soundcloud.com/neibarg-mylers/frozen-base-zone-act-1-sonic-superstars-ost",
		answer: "Frozen Base Zone Act 1 - Sonic Superstars",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/free-no-pause-at-start",
		answer: "Free (main theme) - Sonic Free Riders",
		},
		{
		url: "https://soundcloud.com/faded_boo/event-strategy-dark-story-ver",
		answer: "Event: Strategy (Dark Story cutscene) - Sonic Adventure 2",
		},
		{
		url: "https://soundcloud.com/james-smith-555071498/radical-highway-white-space",
		answer: "Gate: Radical Highway (White Space) - Shadow Generations",
		},
		{
		url: "https://soundcloud.com/live-from-null-space/vs-dark-gaia-no-pause-at-start",
		answer: "vs. Dark Gaia (phase 1) - Sonic Unleashed"
		},
		{
		url: "https://soundcloud.com/faded_boo/doomsday-zone",
		answer: "The Doomsday Zone - Sonic 3 & Knuckles",
		},
		{
		url: "https://soundcloud.com/user-79732114/im-here-revisited-sonic",
		answer: "I'm Here: Revisited (final boss) - Sonic Frontiers: Another Story",
		},
		{
		url: "https://soundcloud.com/faded_boo/event-finaleadventure-must-go-on",
		answer: "Event: Finale... Adventure Must Go On (ending cutscene) - Sonic Heroes",
		},
		{
		url: "https://soundcloud.com/faded_boo/credits-youre-my-number-one",
		answer: "You're My Number One (credits) - Sonic R",
		},
		{
		url: "https://soundcloud.com/faded_boo/live-learn-30th-anniversary-ver",
		answer: "Live & Learn (Live) - Sonic 30th Anniversary Symphony (Live)",
		},
		{
		url: "https://soundcloud.com/faded_boo/title-screen-1",
		answer: "Title (Sonic 1 remix) - Sonic Generations (consoles/PC)",
		},
		{
		url: "https://soundcloud.com/faded_boo/menu-1",
		answer: "Menu - Sonic Gems Collection",
		},
		{
		url: "https://soundcloud.com/faded_boo/race-to-win-1",
		answer: "Blue Coast Zone Act 1 (Race to Win remix) - Sonic Rivals 2",
		},
		{
		url: "https://soundcloud.com/radio-free-mobius/this-is-our-world-phase-1-no-pause-at-start",
		answer: "This is Our World: Phase 1 (world map, early game) - Sonic Forces",
		},
		{
		url: "https://soundcloud.com/faded_boo/sonic-advance-music-angel-1",
		answer: "Angel Island Zone Act 1 - Sonic Advance",
		},
		{
		url: "https://soundcloud.com/radio-free-mobius/dragon-road-day-no-pause-at-start",
		answer: "Dragon Road (Day) - Sonic Unleashed",
		},
		{
		url: "https://soundcloud.com/faded_boo/the-machine-1",
		answer: "The Machine - Sonic Spinball (8-bit)",
		},
		{
		url: "https://soundcloud.com/faded_boo/spring-stadium-zone-act-3",
		answer: "Spring Stadium Zone Act 2 - Sonic 3D Blast (32-bit)",
		},
		{
		url: "https://soundcloud.com/sonic-mania-456108433/sonic-mania-chemical-plant-1",
		answer: "Chemical Plant Zone Act 2 - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/sonic-cd-us/sonic-cd-us-stardust-2",
		answer: "Stardust Speedway (Bad Future) - Sonic CD (US)",
		},
		{
		url: "https://soundcloud.com/radio-free-mobius/ouranos-island-remix-no-pause-at-start",
		answer: "Ouranos Island (Remix) - Sonic Frontiers: Another Story",
		},
		{
		url: "https://soundcloud.com/faded_boo/sweet-mountain-act-5",
		answer: "Sweet Mountain Mission - Sonic Colors (DS)",
		},
		{
		url: "https://soundcloud.com/faded_boo/windy-valley-tornado",
		answer: "Tornado ...for Windy Valley - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/rando-kite/the-murder-of-sonic-the-7",
		answer: "Dining Car 1 - The Murder of Sonic the Hedgehog",
		},
		{
		url: "https://soundcloud.com/faded_boo/ending-13",
		answer: "Credits - Sonic Mega Collection",
		},
		{
		url: "https://soundcloud.com/faded_boo/game-land-6",
		answer: "Game Land 6 (Asteroid Coaster) - Sonic Colors (Wii)",
		},
		{
		url: "https://soundcloud.com/radio-free-mobius/titan-wyvern-no-pause-at-start",
		answer: "Titan: WYVERN - Sonic Frontiers",
		},
		{
		url: "https://soundcloud.com/faded_boo/invincibility-5",
		answer: "Invincibility (Sonic & Knuckles remix) - Sonic Pocket Adventure",
		},
		{
		url: "https://soundcloud.com/sonic-mania-456108433/sonic-mania-hydrocity-zone-1",
		answer: "Hydrocity Zone Act 2 - Sonic Mania",
		},
		{
		url: "https://soundcloud.com/faded_boo/seaside-beach-act-2",
		answer: "Seaside Beach Act 2 - Sonic Boom: Shattered Crystal",
		},
		{
		url: "https://soundcloud.com/user-427276937-751822898/64-perfect-chaos-revival-boss",
		answer: "Perfect Chaos Revival! ...Boss: Perfect Chaos - Sonic Adventure",
		},
		{
		url: "https://soundcloud.com/leonel-cisneros-378688411/sonic-superstars-ost-battle-mode-menu",
		answer: "Battle Mode: Menu - Sonic Superstars",
		},
		 {
			url: "https://soundcloud.com/faded_boo/caron-forest",
		    answer: "Caron Forest - Tails Adventure",
		 },
		 {
			url: "https://soundcloud.com/leonel-cisneros-378688411/sonic-superstars-ost-egg-fortress-act-1",
		    answer: "Egg Fortress Zone Act 1 - Sonic Superstars",
		 },
		 {
			url: "https://soundcloud.com/faded_boo/endless-mine",
		    answer: "Endless Mine - Sonic 3 & Knuckles",
		 },
		 {
			url: "https://soundcloud.com/faded_boo/sleeping-egg-zone",
		    answer: "Sleeping Egg Zone - Sonic Chaos",
		 },
		 {
			url: "https://soundcloud.com/faded_boo/shamar-night",
		    answer: "Shamar (Night) - Sonic Unleashed",
		 },
		 {
			url: "https://soundcloud.com/faded_boo/asteroid-coaster-act-3-remix",
		    answer: "Asteroid Coaster Act 3 (Remix) - Sonic Colors: Ultimate",
		 },
		 {
			url: "https://soundcloud.com/faded_boo/special-stage-2-2",
		    answer: "Special Stage (3D) - Sonic Triple Trouble",
		 },
		 {
			url: "https://soundcloud.com/nathan-202274230/launch-base-zone-act-1-sonic",
		    answer: "Launch Base Zone Act 1 - Sonic Origins",
		 },
		 {
			url: "https://soundcloud.com/faded_boo/erazor-djinn",
		    answer: "It Has Come to This (Erazor Djinn; Night Palace boss) - Sonic and the Secret Rings",
		 },
  ];
  shuffleMusic();
  var firstLoad = true;

  fetch(zipUrl).then((r) => {
    if (r.ok == false) {
      zipUrl = "";
    }
  });

  const Cn = ue(musicNameList),
    On = {
      subscribe: ue(musicListWithLinks, Pn).subscribe,
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
    if (currentIndex >= musicListWithLinks.length) {
      currentIndex = 0;
      shuffleMusic();
      firstLoad = true; // Problem: reset userStats
    }
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
    return {
      c() {
        (t = w("button")),
          o && o.c(),
          M(
            t,
            "class",
            "px-2 py-2 uppercase tracking-widest bg-custom-mg border-none flex items-center font-semibold text-sm svelte-1r54uzk"
          ),
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
        [
          {
            type: "script",
            url: `//www.googletagmanager.com/gtag/js?id=${r[0]}`,
          },
        ],
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

  function ke(e) {
    let t, n, r, s, i, o, a, l, u, c, d, h, f, m, b, ml, v;
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
            (u.textContent = artist + " Heardle Infinite"),
            (c = x()),
            (d = w("div")),
            Q(h.$$.fragment),
            (f = x()),
            Q(m.$$.fragment),
            (b = x()),
            Q(ml.$$.fragment),
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
            p(r, l),
            p(r, u),
            p(r, c),
            p(r, d),
            ee(h, d, null),
            p(d, f),
            ee(m, d, null),
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
        },
        i(e) {
          v ||
            (Z(i.$$.fragment, e),
            Z(a.$$.fragment, e),
            Z(h.$$.fragment, e),
            Z(m.$$.fragment, e),
            Z(ml.$$.fragment, e),
            (v = !0));
        },
        o(e) {
          q(i.$$.fragment, e),
            q(a.$$.fragment, e),
            q(h.$$.fragment, e),
            q(m.$$.fragment, e),
            q(ml.$$.fragment, e),
            (v = !1);
        },
        d(e) {
          e && y(t), te(i), te(a), te(h), te(m), te(ml);
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
            '<p>Tap the button below to start. If you need help, check the list up on the upper-right!</p> \n\n                <svg class="mt-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"></path></svg>'),
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
                var i = n ? o[n] : o,
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
            e.feedback.selection = t(
              {
                index: n,
              },
              e.feedback.results[n]
            );
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
          placeHolder: "Know it? Search for the artist / title",
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
                let r = xt(t, e.value.toLowerCase()),
                  s = xt(t, n.value.toLowerCase());
                return r === s ? (e.value > n.value ? -1 : 1) : s > r ? 1 : -1;
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
                  "width: fit-content; height: calc(100% - 80px); overflow-y: scroll;"
                )
              : M(
                  i,
                  "class",
                  "pointer-events-auto modal max-w-screen-xs w-full mx-auto top-20 relative rounded-sm "
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
            '<p class="mb-3">This is a clone of <a href="https://etrian-infinite-heardle.glitch.me">Etrian Odyssey Infinite Heardle</a> (which itself was based on <a href="https://joywave-heardle.glitch.me">Joywave Heardle</a>, which in turn was modeled on <a href="https://www.heardle.app" title="Heardle">Heardle</a> and <a href="https://heardle-kpop.glitch.me" title="Heardle">K-Pop Heardle</a>). As the name suggests, it focuses on music from the <i>Sonic the Hedgehog</i> series and can also be played forever, with no daily limit.</p> \n\n<p class="mb-3">Every song from volumes 1, 2 and 3 of the original <a href="https://sonic-heardle.netlify.app/">Sonic Heardle</a> is in the database, and I will gradually be adding the songlist of volume 3&K as I find the time. Most of them are from the games, with a few from adaptations (like the OVA or <i>SatAM</i>) thrown in as well.</p> \n\n\n\n <p class="mb-3"> For help making your own infinite Heardle, check out <a href="https://github.com/nterrien/etrian-infinite-heardle">the README</a>.</p> \n\n\n\n <p class="mb-3">Sonic Heardle originally created by <a href="https://twitter.com/laughandpeace11">@LaughAndPeace11</a>.</p>  \n\n\n\n <p class="mb-3"><a href="https://www.twitch.tv/velvetcoach">Check out VelvetCoach on twitch.tv</a>!</p> \n\n\n\n <p class="text-xs mb-3 text-custom-line">Prepared with <a href="https://developers.soundcloud.com">Soundcloud</a>,\n    <a href="https://svelte.dev">Svelte</a>,\n    <a href="https://tailwindcss.com">Tailwind</a>,\n    <a href="https://fonts.google.com/noto/specimen/Noto+Serif+Display">Noto Serif Display</a>, <a href="https://fonts.google.com/noto/specimen/Noto+Sans">Noto Sans</a>,\n    <a href="https://iconsvg.xyz">IconSVG</a>, <a href="https://momentjs.com">momentjs</a>,\n    <a href="https://tarekraafat.github.io/autoComplete.js/#/">autocomplete.js</a>, and powered by <a href="https://glitch.com/">Glitch</a>. <a href="https://omakase.studio" title="Studio Omakase">Served omakase / お任せ</a>. '),
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

  function getGameOrArtistFromMusicName(musicNameList) {
    return musicNameList.map((a) => {
      const splited = a.split("-");
      return splited[splited.length - 1].trim();
    });
  }

  function MLt(t) {
    let n;
    const mapUrl = new Map();
    musicListWithLinks.forEach((m) => mapUrl.set(m.answer, m.url));
    const musicNameListFiltered = musicNameList.filter(
      (s) => s != "" && mapUrl.has(s)
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
                  mapUrl.get(s) +
                  '">' +
                  s +
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
          M(i, "class", "text-custom-mg text-xs h-32 overflow-scroll relative"),
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

  function jt(e, t, n) {
    let r;
    return (
      P(async function () {
        (async function () {
          const e = await fetch(
            "https://wjsn-heardle.glitch.me/supporters.json"
          );
          return await e.json();
        })().then((e) => {
          n(0, (r = e.supporters));
        });
      }),
      [r]
    );
  }
  class Bt extends se {
    constructor(e) {
      super(), re(this, e, jt, Et, i, {});
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
              '<a href="https://www.twitch.tv/velvetcoach">Check out my wife VelvetCoach on twitch.tv</a>, who inspired me to revive this infinite heardle, and is my inspiration for so many other things in life.<br><br>Also, for a new Heardle every day, check out the updated <a href="https://sonic-heardle.netlify.app/" title="">Sonic Heardle Vol3&K</a>, the tracklist of which I will try to add over time here. (Up to date as of 30-07-2025)'),
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
        (t = _("You got this " + artist + " song within ")),
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
        n = _("You didn't get this " + artist + " song.");
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
          // + "https://joywave-heardle.glitch.me/"
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
              '<div class="mr-4 w-8 text-custom-line"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg></div> \n        <div><p>Skipped or incorrect attempts unlock more of the\n                intro.</p></div>'),
            (i = x()),
            (o = w("div")),
            (o.innerHTML =
              '<div class="mr-4 w-8 text-custom-line"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-7"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg></div> \n        <div><p>Answer in as few tries  as possible and share\n                your score!</p></div>'),
            (a = x()),
            (z = w("div")),
            (z.innerHTML =
              '<div class="mr-4 w-8 text-custom-line"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M 2.324219 3.484375 C 1.039062 3.484375 0 4.523438 0 5.804688 C 0 7.089844 1.039062 8.128906 2.324219 8.128906 C 3.605469 8.128906 4.644531 7.089844 4.644531 5.804688 C 4.644531 4.523438 3.605469 3.484375 2.324219 3.484375 Z M 2.324219 9.675781 C 1.039062 9.675781 0 10.71875 0 12 C 0 13.28125 1.039062 14.324219 2.324219 14.324219 C 3.605469 14.324219 4.644531 13.28125 4.644531 12 C 4.644531 10.71875 3.605469 9.675781 2.324219 9.675781 Z M 2.324219 15.871094 C 1.039062 15.871094 0 16.910156 0 18.195312 C 0 19.476562 1.039062 20.515625 2.324219 20.515625 C 3.605469 20.515625 4.644531 19.476562 4.644531 18.195312 C 4.644531 16.910156 3.605469 15.871094 2.324219 15.871094 Z M 7.742188 7.355469 L 22.453125 7.355469 C 23.308594 7.355469 24 6.660156 24 5.804688 C 24 4.949219 23.308594 4.257812 22.453125 4.257812 L 7.742188 4.257812 C 6.886719 4.257812 6.195312 4.949219 6.195312 5.804688 C 6.195312 6.660156 6.886719 7.355469 7.742188 7.355469 Z M 22.453125 10.453125 L 7.742188 10.453125 C 6.886719 10.453125 6.195312 11.144531 6.195312 12 C 6.195312 12.855469 6.886719 13.546875 7.742188 13.546875 L 22.453125 13.546875 C 23.308594 13.546875 24 12.855469 24 12 C 24 11.144531 23.308594 10.453125 22.453125 10.453125 Z M 22.453125 16.644531 L 7.742188 16.644531 C 6.886719 16.644531 6.195312 17.339844 6.195312 18.195312 C 6.195312 19.050781 6.886719 19.742188 7.742188 19.742188 L 22.453125 19.742188 C 23.308594 19.742188 24 19.050781 24 18.195312 C 24 17.339844 23.308594 16.644531 22.453125 16.644531 Z M 22.453125 16.644531 "></path></svg></div> \n        <div><p>You can use the top right button\n                to see the list of tracks.</p></div>'),
            (v = x()),
            (l = w("div")),
            Q(u.$$.fragment),
            M(n, "class", "flex items-center mb-6"),
            M(s, "class", "flex items-center mb-6"),
            M(o, "class", "flex items-center mb-6"),
            M(z, "class", "flex items-center mb-6"),
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
  var Yn = yt(function (e, t) {
    e.exports = (function () {
      var t, n;

      function r() {
        return t.apply(null, arguments);
      }

      function s(e) {
        t = e;
      }

      function i(e) {
        return (
          e instanceof Array ||
          "[object Array]" === Object.prototype.toString.call(e)
        );
      }

      function o(e) {
        return (
          null != e && "[object Object]" === Object.prototype.toString.call(e)
        );
      }

      function a(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }

      function l(e) {
        if (Object.getOwnPropertyNames)
          return 0 === Object.getOwnPropertyNames(e).length;
        var t;
        for (t in e) if (a(e, t)) return !1;
        return !0;
      }

      function u(e) {
        return void 0 === e;
      }

      function c(e) {
        return (
          "number" == typeof e ||
          "[object Number]" === Object.prototype.toString.call(e)
        );
      }

      function d(e) {
        return (
          e instanceof Date ||
          "[object Date]" === Object.prototype.toString.call(e)
        );
      }

      function h(e, t) {
        var n,
          r = [];
        for (n = 0; n < e.length; ++n) r.push(t(e[n], n));
        return r;
      }

      function f(e, t) {
        for (var n in t) a(t, n) && (e[n] = t[n]);
        return (
          a(t, "toString") && (e.toString = t.toString),
          a(t, "valueOf") && (e.valueOf = t.valueOf),
          e
        );
      }

      function m(e, t, n, r) {
        return Jn(e, t, n, r, !0).utc();
      }

      function p() {
        return {
          empty: !1,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: !1,
          invalidEra: null,
          invalidMonth: null,
          invalidFormat: !1,
          userInvalidated: !1,
          iso: !1,
          parsedDateParts: [],
          era: null,
          meridiem: null,
          rfc2822: !1,
          weekdayMismatch: !1,
        };
      }

      function g(e) {
        return null == e._pf && (e._pf = p()), e._pf;
      }

      function y(e) {
        if (null == e._isValid) {
          var t = g(e),
            r = n.call(t.parsedDateParts, function (e) {
              return null != e;
            }),
            s =
              !isNaN(e._d.getTime()) &&
              t.overflow < 0 &&
              !t.empty &&
              !t.invalidEra &&
              !t.invalidMonth &&
              !t.invalidWeekday &&
              !t.weekdayMismatch &&
              !t.nullInput &&
              !t.invalidFormat &&
              !t.userInvalidated &&
              (!t.meridiem || (t.meridiem && r));
          if (
            (e._strict &&
              (s =
                s &&
                0 === t.charsLeftOver &&
                0 === t.unusedTokens.length &&
                void 0 === t.bigHour),
            null != Object.isFrozen && Object.isFrozen(e))
          )
            return s;
          e._isValid = s;
        }
        return e._isValid;
      }

      function v(e) {
        var t = m(NaN);
        return null != e ? f(g(t), e) : (g(t).userInvalidated = !0), t;
      }
      n = Array.prototype.some
        ? Array.prototype.some
        : function (e) {
            var t,
              n = Object(this),
              r = n.length >>> 0;
            for (t = 0; t < r; t++)
              if (t in n && e.call(this, n[t], t, n)) return !0;
            return !1;
          };
      var w = (r.momentProperties = []),
        k = !1;

      function _(e, t) {
        var n, r, s;
        if (
          (u(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
          u(t._i) || (e._i = t._i),
          u(t._f) || (e._f = t._f),
          u(t._l) || (e._l = t._l),
          u(t._strict) || (e._strict = t._strict),
          u(t._tzm) || (e._tzm = t._tzm),
          u(t._isUTC) || (e._isUTC = t._isUTC),
          u(t._offset) || (e._offset = t._offset),
          u(t._pf) || (e._pf = g(t)),
          u(t._locale) || (e._locale = t._locale),
          w.length > 0)
        )
          for (n = 0; n < w.length; n++) u((s = t[(r = w[n])])) || (e[r] = s);
        return e;
      }

      function x(e) {
        _(this, e),
          (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
          this.isValid() || (this._d = new Date(NaN)),
          !1 === k && ((k = !0), r.updateOffset(this), (k = !1));
      }

      function b(e) {
        return e instanceof x || (null != e && null != e._isAMomentObject);
      }

      function S(e) {
        !1 === r.suppressDeprecationWarnings &&
          "undefined" != typeof console &&
          console.warn &&
          console.warn("Deprecation warning: " + e);
      }

      function M(e, t) {
        var n = !0;
        return f(function () {
          if (
            (null != r.deprecationHandler && r.deprecationHandler(null, e), n)
          ) {
            var s,
              i,
              o,
              l = [];
            for (i = 0; i < arguments.length; i++) {
              if (((s = ""), "object" == typeof arguments[i])) {
                for (o in ((s += "\n[" + i + "] "), arguments[0]))
                  a(arguments[0], o) &&
                    (s += o + ": " + arguments[0][o] + ", ");
                s = s.slice(0, -2);
              } else s = arguments[i];
              l.push(s);
            }
            S(
              e +
                "\nArguments: " +
                Array.prototype.slice.call(l).join("") +
                "\n" +
                new Error().stack
            ),
              (n = !1);
          }
          return t.apply(this, arguments);
        }, t);
      }
      var $,
        D = {};

      function T(e, t) {
        null != r.deprecationHandler && r.deprecationHandler(e, t),
          D[e] || (S(t), (D[e] = !0));
      }

      function Y(e) {
        return (
          ("undefined" != typeof Function && e instanceof Function) ||
          "[object Function]" === Object.prototype.toString.call(e)
        );
      }

      function C(e) {
        var t, n;
        for (n in e)
          a(e, n) && (Y((t = e[n])) ? (this[n] = t) : (this["_" + n] = t));
        (this._config = e),
          (this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
              "|" +
              /\d{1,2}/.source
          ));
      }

      function O(e, t) {
        var n,
          r = f({}, e);
        for (n in t)
          a(t, n) &&
            (o(e[n]) && o(t[n])
              ? ((r[n] = {}), f(r[n], e[n]), f(r[n], t[n]))
              : null != t[n]
              ? (r[n] = t[n])
              : delete r[n]);
        for (n in e) a(e, n) && !a(t, n) && o(e[n]) && (r[n] = f({}, r[n]));
        return r;
      }

      function P(e) {
        null != e && this.set(e);
      }
      (r.suppressDeprecationWarnings = !1),
        (r.deprecationHandler = null),
        ($ = Object.keys
          ? Object.keys
          : function (e) {
              var t,
                n = [];
              for (t in e) a(e, t) && n.push(t);
              return n;
            });
      var A = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L",
      };

      function L(e, t, n) {
        var r = this._calendar[e] || this._calendar.sameElse;
        return Y(r) ? r.call(t, n) : r;
      }

      function N(e, t, n) {
        var r = "" + Math.abs(e),
          s = t - r.length;
        return (
          (e >= 0 ? (n ? "+" : "") : "-") +
          Math.pow(10, Math.max(0, s)).toString().substr(1) +
          r
        );
      }
      var H =
          /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        I = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        W = {},
        R = {};

      function F(e, t, n, r) {
        var s = r;
        "string" == typeof r &&
          (s = function () {
            return this[r]();
          }),
          e && (R[e] = s),
          t &&
            (R[t[0]] = function () {
              return N(s.apply(this, arguments), t[1], t[2]);
            }),
          n &&
            (R[n] = function () {
              return this.localeData().ordinal(s.apply(this, arguments), e);
            });
      }

      function G(e) {
        return e.match(/\[[\s\S]/)
          ? e.replace(/^\[|\]$/g, "")
          : e.replace(/\\/g, "");
      }

      function E(e) {
        var t,
          n,
          r = e.match(H);
        for (t = 0, n = r.length; t < n; t++)
          R[r[t]] ? (r[t] = R[r[t]]) : (r[t] = G(r[t]));
        return function (t) {
          var s,
            i = "";
          for (s = 0; s < n; s++) i += Y(r[s]) ? r[s].call(t, e) : r[s];
          return i;
        };
      }

      function j(e, t) {
        return e.isValid()
          ? ((t = B(t, e.localeData())), (W[t] = W[t] || E(t)), W[t](e))
          : e.localeData().invalidDate();
      }

      function B(e, t) {
        var n = 5;

        function r(e) {
          return t.longDateFormat(e) || e;
        }
        for (I.lastIndex = 0; n >= 0 && I.test(e); )
          (e = e.replace(I, r)), (I.lastIndex = 0), (n -= 1);
        return e;
      }
      var z = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A",
      };

      function U(e) {
        var t = this._longDateFormat[e],
          n = this._longDateFormat[e.toUpperCase()];
        return t || !n
          ? t
          : ((this._longDateFormat[e] = n
              .match(H)
              .map(function (e) {
                return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e
                  ? e.slice(1)
                  : e;
              })
              .join("")),
            this._longDateFormat[e]);
      }
      var V = "Invalid date";

      function J() {
        return this._invalidDate;
      }
      var K = "%d",
        Z = /\d{1,2}/;

      function q(e) {
        return this._ordinal.replace("%d", e);
      }
      var X = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        w: "a week",
        ww: "%d weeks",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years",
      };

      function Q(e, t, n, r) {
        var s = this._relativeTime[n];
        return Y(s) ? s(e, t, n, r) : s.replace(/%d/i, e);
      }

      function ee(e, t) {
        var n = this._relativeTime[e > 0 ? "future" : "past"];
        return Y(n) ? n(t) : n.replace(/%s/i, t);
      }
      var te = {};

      function ne(e, t) {
        var n = e.toLowerCase();
        te[n] = te[n + "s"] = te[t] = e;
      }

      function re(e) {
        return "string" == typeof e ? te[e] || te[e.toLowerCase()] : void 0;
      }

      function se(e) {
        var t,
          n,
          r = {};
        for (n in e) a(e, n) && (t = re(n)) && (r[t] = e[n]);
        return r;
      }
      var ie = {};

      function oe(e, t) {
        ie[e] = t;
      }

      function ae(e) {
        var t,
          n = [];
        for (t in e)
          a(e, t) &&
            n.push({
              unit: t,
              priority: ie[t],
            });
        return (
          n.sort(function (e, t) {
            return e.priority - t.priority;
          }),
          n
        );
      }

      function le(e) {
        return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
      }

      function ue(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
      }

      function ce(e) {
        var t = +e,
          n = 0;
        return 0 !== t && isFinite(t) && (n = ue(t)), n;
      }

      function de(e, t) {
        return function (n) {
          return null != n
            ? (fe(this, e, n), r.updateOffset(this, t), this)
            : he(this, e);
        };
      }

      function he(e, t) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
      }

      function fe(e, t, n) {
        e.isValid() &&
          !isNaN(n) &&
          ("FullYear" === t &&
          le(e.year()) &&
          1 === e.month() &&
          29 === e.date()
            ? ((n = ce(n)),
              e._d["set" + (e._isUTC ? "UTC" : "") + t](
                n,
                e.month(),
                Qe(n, e.month())
              ))
            : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
      }

      function me(e) {
        return Y(this[(e = re(e))]) ? this[e]() : this;
      }

      function pe(e, t) {
        if ("object" == typeof e) {
          var n,
            r = ae((e = se(e)));
          for (n = 0; n < r.length; n++) this[r[n].unit](e[r[n].unit]);
        } else if (Y(this[(e = re(e))])) return this[e](t);
        return this;
      }
      var ge,
        ye = /\d/,
        ve = /\d\d/,
        we = /\d{3}/,
        ke = /\d{4}/,
        _e = /[+-]?\d{6}/,
        xe = /\d\d?/,
        be = /\d\d\d\d?/,
        Se = /\d\d\d\d\d\d?/,
        Me = /\d{1,3}/,
        $e = /\d{1,4}/,
        De = /[+-]?\d{1,6}/,
        Te = /\d+/,
        Ye = /[+-]?\d+/,
        Ce = /Z|[+-]\d\d:?\d\d/gi,
        Oe = /Z|[+-]\d\d(?::?\d\d)?/gi,
        Pe = /[+-]?\d+(\.\d{1,3})?/,
        Ae =
          /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

      function Le(e, t, n) {
        ge[e] = Y(t)
          ? t
          : function (e, r) {
              return e && n ? n : t;
            };
      }

      function Ne(e, t) {
        return a(ge, e) ? ge[e](t._strict, t._locale) : new RegExp(He(e));
      }

      function He(e) {
        return Ie(
          e
            .replace("\\", "")
            .replace(
              /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
              function (e, t, n, r, s) {
                return t || n || r || s;
              }
            )
        );
      }

      function Ie(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      }
      ge = {};
      var We = {};

      function Re(e, t) {
        var n,
          r = t;
        for (
          "string" == typeof e && (e = [e]),
            c(t) &&
              (r = function (e, n) {
                n[t] = ce(e);
              }),
            n = 0;
          n < e.length;
          n++
        )
          We[e[n]] = r;
      }

      function Fe(e, t) {
        Re(e, function (e, n, r, s) {
          (r._w = r._w || {}), t(e, r._w, r, s);
        });
      }

      function Ge(e, t, n) {
        null != t && a(We, e) && We[e](t, n._a, n, e);
      }
      var Ee,
        je = 0,
        Be = 1,
        ze = 2,
        Ue = 3,
        Ve = 4,
        Je = 5,
        Ke = 6,
        Ze = 7,
        qe = 8;

      function Xe(e, t) {
        return ((e % t) + t) % t;
      }

      function Qe(e, t) {
        if (isNaN(e) || isNaN(t)) return NaN;
        var n = Xe(t, 12);
        return (
          (e += (t - n) / 12), 1 === n ? (le(e) ? 29 : 28) : 31 - ((n % 7) % 2)
        );
      }
      (Ee = Array.prototype.indexOf
        ? Array.prototype.indexOf
        : function (e) {
            var t;
            for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
            return -1;
          }),
        F("M", ["MM", 2], "Mo", function () {
          return this.month() + 1;
        }),
        F("MMM", 0, 0, function (e) {
          return this.localeData().monthsShort(this, e);
        }),
        F("MMMM", 0, 0, function (e) {
          return this.localeData().months(this, e);
        }),
        ne("month", "M"),
        oe("month", 8),
        Le("M", xe),
        Le("MM", xe, ve),
        Le("MMM", function (e, t) {
          return t.monthsShortRegex(e);
        }),
        Le("MMMM", function (e, t) {
          return t.monthsRegex(e);
        }),
        Re(["M", "MM"], function (e, t) {
          t[Be] = ce(e) - 1;
        }),
        Re(["MMM", "MMMM"], function (e, t, n, r) {
          var s = n._locale.monthsParse(e, r, n._strict);
          null != s ? (t[Be] = s) : (g(n).invalidMonth = e);
        });
      var et =
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        tt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        nt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        rt = Ae,
        st = Ae;

      function it(e, t) {
        return e
          ? i(this._months)
            ? this._months[e.month()]
            : this._months[
                (this._months.isFormat || nt).test(t) ? "format" : "standalone"
              ][e.month()]
          : i(this._months)
          ? this._months
          : this._months.standalone;
      }

      function ot(e, t) {
        return e
          ? i(this._monthsShort)
            ? this._monthsShort[e.month()]
            : this._monthsShort[nt.test(t) ? "format" : "standalone"][e.month()]
          : i(this._monthsShort)
          ? this._monthsShort
          : this._monthsShort.standalone;
      }

      function at(e, t, n) {
        var r,
          s,
          i,
          o = e.toLocaleLowerCase();
        if (!this._monthsParse)
          for (
            this._monthsParse = [],
              this._longMonthsParse = [],
              this._shortMonthsParse = [],
              r = 0;
            r < 12;
            ++r
          )
            (i = m([2e3, r])),
              (this._shortMonthsParse[r] = this.monthsShort(
                i,
                ""
              ).toLocaleLowerCase()),
              (this._longMonthsParse[r] = this.months(
                i,
                ""
              ).toLocaleLowerCase());
        return n
          ? "MMM" === t
            ? -1 !== (s = Ee.call(this._shortMonthsParse, o))
              ? s
              : null
            : -1 !== (s = Ee.call(this._longMonthsParse, o))
            ? s
            : null
          : "MMM" === t
          ? -1 !== (s = Ee.call(this._shortMonthsParse, o)) ||
            -1 !== (s = Ee.call(this._longMonthsParse, o))
            ? s
            : null
          : -1 !== (s = Ee.call(this._longMonthsParse, o)) ||
            -1 !== (s = Ee.call(this._shortMonthsParse, o))
          ? s
          : null;
      }

      function lt(e, t, n) {
        var r, s, i;
        if (this._monthsParseExact) return at.call(this, e, t, n);
        for (
          this._monthsParse ||
            ((this._monthsParse = []),
            (this._longMonthsParse = []),
            (this._shortMonthsParse = [])),
            r = 0;
          r < 12;
          r++
        ) {
          if (
            ((s = m([2e3, r])),
            n &&
              !this._longMonthsParse[r] &&
              ((this._longMonthsParse[r] = new RegExp(
                "^" + this.months(s, "").replace(".", "") + "$",
                "i"
              )),
              (this._shortMonthsParse[r] = new RegExp(
                "^" + this.monthsShort(s, "").replace(".", "") + "$",
                "i"
              ))),
            n ||
              this._monthsParse[r] ||
              ((i = "^" + this.months(s, "") + "|^" + this.monthsShort(s, "")),
              (this._monthsParse[r] = new RegExp(i.replace(".", ""), "i"))),
            n && "MMMM" === t && this._longMonthsParse[r].test(e))
          )
            return r;
          if (n && "MMM" === t && this._shortMonthsParse[r].test(e)) return r;
          if (!n && this._monthsParse[r].test(e)) return r;
        }
      }

      function ut(e, t) {
        var n;
        if (!e.isValid()) return e;
        if ("string" == typeof t)
          if (/^\d+$/.test(t)) t = ce(t);
          else if (!c((t = e.localeData().monthsParse(t)))) return e;
        return (
          (n = Math.min(e.date(), Qe(e.year(), t))),
          e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n),
          e
        );
      }

      function ct(e) {
        return null != e
          ? (ut(this, e), r.updateOffset(this, !0), this)
          : he(this, "Month");
      }

      function dt() {
        return Qe(this.year(), this.month());
      }

      function ht(e) {
        return this._monthsParseExact
          ? (a(this, "_monthsRegex") || mt.call(this),
            e ? this._monthsShortStrictRegex : this._monthsShortRegex)
          : (a(this, "_monthsShortRegex") || (this._monthsShortRegex = rt),
            this._monthsShortStrictRegex && e
              ? this._monthsShortStrictRegex
              : this._monthsShortRegex);
      }

      function ft(e) {
        return this._monthsParseExact
          ? (a(this, "_monthsRegex") || mt.call(this),
            e ? this._monthsStrictRegex : this._monthsRegex)
          : (a(this, "_monthsRegex") || (this._monthsRegex = st),
            this._monthsStrictRegex && e
              ? this._monthsStrictRegex
              : this._monthsRegex);
      }

      function mt() {
        function e(e, t) {
          return t.length - e.length;
        }
        var t,
          n,
          r = [],
          s = [],
          i = [];
        for (t = 0; t < 12; t++)
          (n = m([2e3, t])),
            r.push(this.monthsShort(n, "")),
            s.push(this.months(n, "")),
            i.push(this.months(n, "")),
            i.push(this.monthsShort(n, ""));
        for (r.sort(e), s.sort(e), i.sort(e), t = 0; t < 12; t++)
          (r[t] = Ie(r[t])), (s[t] = Ie(s[t]));
        for (t = 0; t < 24; t++) i[t] = Ie(i[t]);
        (this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i")),
          (this._monthsShortRegex = this._monthsRegex),
          (this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")),
          (this._monthsShortStrictRegex = new RegExp(
            "^(" + r.join("|") + ")",
            "i"
          ));
      }

      function pt(e) {
        return le(e) ? 366 : 365;
      }
      F("Y", 0, 0, function () {
        var e = this.year();
        return e <= 9999 ? N(e, 4) : "+" + e;
      }),
        F(0, ["YY", 2], 0, function () {
          return this.year() % 100;
        }),
        F(0, ["YYYY", 4], 0, "year"),
        F(0, ["YYYYY", 5], 0, "year"),
        F(0, ["YYYYYY", 6, !0], 0, "year"),
        ne("year", "y"),
        oe("year", 1),
        Le("Y", Ye),
        Le("YY", xe, ve),
        Le("YYYY", $e, ke),
        Le("YYYYY", De, _e),
        Le("YYYYYY", De, _e),
        Re(["YYYYY", "YYYYYY"], je),
        Re("YYYY", function (e, t) {
          t[je] = 2 === e.length ? r.parseTwoDigitYear(e) : ce(e);
        }),
        Re("YY", function (e, t) {
          t[je] = r.parseTwoDigitYear(e);
        }),
        Re("Y", function (e, t) {
          t[je] = parseInt(e, 10);
        }),
        (r.parseTwoDigitYear = function (e) {
          return ce(e) + (ce(e) > 68 ? 1900 : 2e3);
        });
      var gt = de("FullYear", !0);

      function yt() {
        return le(this.year());
      }

      function wt(e, t, n, r, s, i, o) {
        var a;
        return (
          e < 100 && e >= 0
            ? ((a = new Date(e + 400, t, n, r, s, i, o)),
              isFinite(a.getFullYear()) && a.setFullYear(e))
            : (a = new Date(e, t, n, r, s, i, o)),
          a
        );
      }

      function kt(e) {
        var t, n;
        return (
          e < 100 && e >= 0
            ? (((n = Array.prototype.slice.call(arguments))[0] = e + 400),
              (t = new Date(Date.UTC.apply(null, n))),
              isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e))
            : (t = new Date(Date.UTC.apply(null, arguments))),
          t
        );
      }

      function _t(e, t, n) {
        var r = 7 + t - n;
        return (-(7 + kt(e, 0, r).getUTCDay() - t) % 7) + r - 1;
      }

      function xt(e, t, n, r, s) {
        var i,
          o,
          a = 1 + 7 * (t - 1) + ((7 + n - r) % 7) + _t(e, r, s);
        return (
          a <= 0
            ? (o = pt((i = e - 1)) + a)
            : a > pt(e)
            ? ((i = e + 1), (o = a - pt(e)))
            : ((i = e), (o = a)),
          {
            year: i,
            dayOfYear: o,
          }
        );
      }

      function bt(e, t, n) {
        var r,
          s,
          i = _t(e.year(), t, n),
          o = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;
        return (
          o < 1
            ? (r = o + St((s = e.year() - 1), t, n))
            : o > St(e.year(), t, n)
            ? ((r = o - St(e.year(), t, n)), (s = e.year() + 1))
            : ((s = e.year()), (r = o)),
          {
            week: r,
            year: s,
          }
        );
      }

      function St(e, t, n) {
        var r = _t(e, t, n),
          s = _t(e + 1, t, n);
        return (pt(e) - r + s) / 7;
      }

      function Mt(e) {
        return bt(e, this._week.dow, this._week.doy).week;
      }
      F("w", ["ww", 2], "wo", "week"),
        F("W", ["WW", 2], "Wo", "isoWeek"),
        ne("week", "w"),
        ne("isoWeek", "W"),
        oe("week", 5),
        oe("isoWeek", 5),
        Le("w", xe),
        Le("ww", xe, ve),
        Le("W", xe),
        Le("WW", xe, ve),
        Fe(["w", "ww", "W", "WW"], function (e, t, n, r) {
          t[r.substr(0, 1)] = ce(e);
        });
      var $t = {
        dow: 0,
        doy: 6,
      };

      function Dt() {
        return this._week.dow;
      }

      function Tt() {
        return this._week.doy;
      }

      function Yt(e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), "d");
      }

      function Ct(e) {
        var t = bt(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), "d");
      }

      function Ot(e, t) {
        return "string" != typeof e
          ? e
          : isNaN(e)
          ? "number" == typeof (e = t.weekdaysParse(e))
            ? e
            : null
          : parseInt(e, 10);
      }

      function Pt(e, t) {
        return "string" == typeof e
          ? t.weekdaysParse(e) % 7 || 7
          : isNaN(e)
          ? null
          : e;
      }

      function At(e, t) {
        return e.slice(t, 7).concat(e.slice(0, t));
      }
      F("d", 0, "do", "day"),
        F("dd", 0, 0, function (e) {
          return this.localeData().weekdaysMin(this, e);
        }),
        F("ddd", 0, 0, function (e) {
          return this.localeData().weekdaysShort(this, e);
        }),
        F("dddd", 0, 0, function (e) {
          return this.localeData().weekdays(this, e);
        }),
        F("e", 0, 0, "weekday"),
        F("E", 0, 0, "isoWeekday"),
        ne("day", "d"),
        ne("weekday", "e"),
        ne("isoWeekday", "E"),
        oe("day", 11),
        oe("weekday", 11),
        oe("isoWeekday", 11),
        Le("d", xe),
        Le("e", xe),
        Le("E", xe),
        Le("dd", function (e, t) {
          return t.weekdaysMinRegex(e);
        }),
        Le("ddd", function (e, t) {
          return t.weekdaysShortRegex(e);
        }),
        Le("dddd", function (e, t) {
          return t.weekdaysRegex(e);
        }),
        Fe(["dd", "ddd", "dddd"], function (e, t, n, r) {
          var s = n._locale.weekdaysParse(e, r, n._strict);
          null != s ? (t.d = s) : (g(n).invalidWeekday = e);
        }),
        Fe(["d", "e", "E"], function (e, t, n, r) {
          t[r] = ce(e);
        });
      var Lt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
          "_"
        ),
        Nt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        Ht = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        It = Ae,
        Wt = Ae,
        Rt = Ae;

      function Ft(e, t) {
        var n = i(this._weekdays)
          ? this._weekdays
          : this._weekdays[
              e && !0 !== e && this._weekdays.isFormat.test(t)
                ? "format"
                : "standalone"
            ];
        return !0 === e ? At(n, this._week.dow) : e ? n[e.day()] : n;
      }

      function Gt(e) {
        return !0 === e
          ? At(this._weekdaysShort, this._week.dow)
          : e
          ? this._weekdaysShort[e.day()]
          : this._weekdaysShort;
      }

      function Et(e) {
        return !0 === e
          ? At(this._weekdaysMin, this._week.dow)
          : e
          ? this._weekdaysMin[e.day()]
          : this._weekdaysMin;
      }

      function jt(e, t, n) {
        var r,
          s,
          i,
          o = e.toLocaleLowerCase();
        if (!this._weekdaysParse)
          for (
            this._weekdaysParse = [],
              this._shortWeekdaysParse = [],
              this._minWeekdaysParse = [],
              r = 0;
            r < 7;
            ++r
          )
            (i = m([2e3, 1]).day(r)),
              (this._minWeekdaysParse[r] = this.weekdaysMin(
                i,
                ""
              ).toLocaleLowerCase()),
              (this._shortWeekdaysParse[r] = this.weekdaysShort(
                i,
                ""
              ).toLocaleLowerCase()),
              (this._weekdaysParse[r] = this.weekdays(
                i,
                ""
              ).toLocaleLowerCase());
        return n
          ? "dddd" === t
            ? -1 !== (s = Ee.call(this._weekdaysParse, o))
              ? s
              : null
            : "ddd" === t
            ? -1 !== (s = Ee.call(this._shortWeekdaysParse, o))
              ? s
              : null
            : -1 !== (s = Ee.call(this._minWeekdaysParse, o))
            ? s
            : null
          : "dddd" === t
          ? -1 !== (s = Ee.call(this._weekdaysParse, o)) ||
            -1 !== (s = Ee.call(this._shortWeekdaysParse, o)) ||
            -1 !== (s = Ee.call(this._minWeekdaysParse, o))
            ? s
            : null
          : "ddd" === t
          ? -1 !== (s = Ee.call(this._shortWeekdaysParse, o)) ||
            -1 !== (s = Ee.call(this._weekdaysParse, o)) ||
            -1 !== (s = Ee.call(this._minWeekdaysParse, o))
            ? s
            : null
          : -1 !== (s = Ee.call(this._minWeekdaysParse, o)) ||
            -1 !== (s = Ee.call(this._weekdaysParse, o)) ||
            -1 !== (s = Ee.call(this._shortWeekdaysParse, o))
          ? s
          : null;
      }

      function Bt(e, t, n) {
        var r, s, i;
        if (this._weekdaysParseExact) return jt.call(this, e, t, n);
        for (
          this._weekdaysParse ||
            ((this._weekdaysParse = []),
            (this._minWeekdaysParse = []),
            (this._shortWeekdaysParse = []),
            (this._fullWeekdaysParse = [])),
            r = 0;
          r < 7;
          r++
        ) {
          if (
            ((s = m([2e3, 1]).day(r)),
            n &&
              !this._fullWeekdaysParse[r] &&
              ((this._fullWeekdaysParse[r] = new RegExp(
                "^" + this.weekdays(s, "").replace(".", "\\.?") + "$",
                "i"
              )),
              (this._shortWeekdaysParse[r] = new RegExp(
                "^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$",
                "i"
              )),
              (this._minWeekdaysParse[r] = new RegExp(
                "^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$",
                "i"
              ))),
            this._weekdaysParse[r] ||
              ((i =
                "^" +
                this.weekdays(s, "") +
                "|^" +
                this.weekdaysShort(s, "") +
                "|^" +
                this.weekdaysMin(s, "")),
              (this._weekdaysParse[r] = new RegExp(i.replace(".", ""), "i"))),
            n && "dddd" === t && this._fullWeekdaysParse[r].test(e))
          )
            return r;
          if (n && "ddd" === t && this._shortWeekdaysParse[r].test(e)) return r;
          if (n && "dd" === t && this._minWeekdaysParse[r].test(e)) return r;
          if (!n && this._weekdaysParse[r].test(e)) return r;
        }
      }

      function zt(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e
          ? ((e = Ot(e, this.localeData())), this.add(e - t, "d"))
          : t;
      }

      function Ut(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? t : this.add(e - t, "d");
      }

      function Vt(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        if (null != e) {
          var t = Pt(e, this.localeData());
          return this.day(this.day() % 7 ? t : t - 7);
        }
        return this.day() || 7;
      }

      function Jt(e) {
        return this._weekdaysParseExact
          ? (a(this, "_weekdaysRegex") || qt.call(this),
            e ? this._weekdaysStrictRegex : this._weekdaysRegex)
          : (a(this, "_weekdaysRegex") || (this._weekdaysRegex = It),
            this._weekdaysStrictRegex && e
              ? this._weekdaysStrictRegex
              : this._weekdaysRegex);
      }

      function Kt(e) {
        return this._weekdaysParseExact
          ? (a(this, "_weekdaysRegex") || qt.call(this),
            e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
          : (a(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Wt),
            this._weekdaysShortStrictRegex && e
              ? this._weekdaysShortStrictRegex
              : this._weekdaysShortRegex);
      }

      function Zt(e) {
        return this._weekdaysParseExact
          ? (a(this, "_weekdaysRegex") || qt.call(this),
            e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
          : (a(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Rt),
            this._weekdaysMinStrictRegex && e
              ? this._weekdaysMinStrictRegex
              : this._weekdaysMinRegex);
      }

      function qt() {
        function e(e, t) {
          return t.length - e.length;
        }
        var t,
          n,
          r,
          s,
          i,
          o = [],
          a = [],
          l = [],
          u = [];
        for (t = 0; t < 7; t++)
          (n = m([2e3, 1]).day(t)),
            (r = Ie(this.weekdaysMin(n, ""))),
            (s = Ie(this.weekdaysShort(n, ""))),
            (i = Ie(this.weekdays(n, ""))),
            o.push(r),
            a.push(s),
            l.push(i),
            u.push(r),
            u.push(s),
            u.push(i);
        o.sort(e),
          a.sort(e),
          l.sort(e),
          u.sort(e),
          (this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i")),
          (this._weekdaysShortRegex = this._weekdaysRegex),
          (this._weekdaysMinRegex = this._weekdaysRegex),
          (this._weekdaysStrictRegex = new RegExp(
            "^(" + l.join("|") + ")",
            "i"
          )),
          (this._weekdaysShortStrictRegex = new RegExp(
            "^(" + a.join("|") + ")",
            "i"
          )),
          (this._weekdaysMinStrictRegex = new RegExp(
            "^(" + o.join("|") + ")",
            "i"
          ));
      }

      function Xt() {
        return this.hours() % 12 || 12;
      }

      function Qt() {
        return this.hours() || 24;
      }

      function en(e, t) {
        F(e, 0, 0, function () {
          return this.localeData().meridiem(this.hours(), this.minutes(), t);
        });
      }

      function tn(e, t) {
        return t._meridiemParse;
      }

      function nn(e) {
        return "p" === (e + "").toLowerCase().charAt(0);
      }
      F("H", ["HH", 2], 0, "hour"),
        F("h", ["hh", 2], 0, Xt),
        F("k", ["kk", 2], 0, Qt),
        F("hmm", 0, 0, function () {
          return "" + Xt.apply(this) + N(this.minutes(), 2);
        }),
        F("hmmss", 0, 0, function () {
          return (
            "" + Xt.apply(this) + N(this.minutes(), 2) + N(this.seconds(), 2)
          );
        }),
        F("Hmm", 0, 0, function () {
          return "" + this.hours() + N(this.minutes(), 2);
        }),
        F("Hmmss", 0, 0, function () {
          return (
            "" + this.hours() + N(this.minutes(), 2) + N(this.seconds(), 2)
          );
        }),
        en("a", !0),
        en("A", !1),
        ne("hour", "h"),
        oe("hour", 13),
        Le("a", tn),
        Le("A", tn),
        Le("H", xe),
        Le("h", xe),
        Le("k", xe),
        Le("HH", xe, ve),
        Le("hh", xe, ve),
        Le("kk", xe, ve),
        Le("hmm", be),
        Le("hmmss", Se),
        Le("Hmm", be),
        Le("Hmmss", Se),
        Re(["H", "HH"], Ue),
        Re(["k", "kk"], function (e, t, n) {
          var r = ce(e);
          t[Ue] = 24 === r ? 0 : r;
        }),
        Re(["a", "A"], function (e, t, n) {
          (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
        }),
        Re(["h", "hh"], function (e, t, n) {
          (t[Ue] = ce(e)), (g(n).bigHour = !0);
        }),
        Re("hmm", function (e, t, n) {
          var r = e.length - 2;
          (t[Ue] = ce(e.substr(0, r))),
            (t[Ve] = ce(e.substr(r))),
            (g(n).bigHour = !0);
        }),
        Re("hmmss", function (e, t, n) {
          var r = e.length - 4,
            s = e.length - 2;
          (t[Ue] = ce(e.substr(0, r))),
            (t[Ve] = ce(e.substr(r, 2))),
            (t[Je] = ce(e.substr(s))),
            (g(n).bigHour = !0);
        }),
        Re("Hmm", function (e, t, n) {
          var r = e.length - 2;
          (t[Ue] = ce(e.substr(0, r))), (t[Ve] = ce(e.substr(r)));
        }),
        Re("Hmmss", function (e, t, n) {
          var r = e.length - 4,
            s = e.length - 2;
          (t[Ue] = ce(e.substr(0, r))),
            (t[Ve] = ce(e.substr(r, 2))),
            (t[Je] = ce(e.substr(s)));
        });
      var rn = /[ap]\.?m?\.?/i,
        sn = de("Hours", !0);

      function on(e, t, n) {
        return e > 11 ? (n ? "pm" : "PM") : n ? "am" : "AM";
      }
      var an,
        ln = {
          calendar: A,
          longDateFormat: z,
          invalidDate: V,
          ordinal: K,
          dayOfMonthOrdinalParse: Z,
          relativeTime: X,
          months: et,
          monthsShort: tt,
          week: $t,
          weekdays: Lt,
          weekdaysMin: Ht,
          weekdaysShort: Nt,
          meridiemParse: rn,
        },
        un = {},
        cn = {};

      function dn(e, t) {
        var n,
          r = Math.min(e.length, t.length);
        for (n = 0; n < r; n += 1) if (e[n] !== t[n]) return n;
        return r;
      }

      function hn(e) {
        return e ? e.toLowerCase().replace("_", "-") : e;
      }

      function fn(e) {
        for (var t, n, r, s, i = 0; i < e.length; ) {
          for (
            t = (s = hn(e[i]).split("-")).length,
              n = (n = hn(e[i + 1])) ? n.split("-") : null;
            t > 0;

          ) {
            if ((r = mn(s.slice(0, t).join("-")))) return r;
            if (n && n.length >= t && dn(s, n) >= t - 1) break;
            t--;
          }
          i++;
        }
        return an;
      }

      function mn(t) {
        var n = null;
        if (void 0 === un[t] && e && e.exports)
          try {
            (n = an._abbr), vt("./locale/" + t), pn(n);
          } catch (e) {
            un[t] = null;
          }
        return un[t];
      }

      function pn(e, t) {
        var n;
        return (
          e &&
            ((n = u(t) ? vn(e) : gn(e, t))
              ? (an = n)
              : "undefined" != typeof console &&
                console.warn &&
                console.warn(
                  "Locale " + e + " not found. Did you forget to load it?"
                )),
          an._abbr
        );
      }

      function gn(e, t) {
        if (null !== t) {
          var n,
            r = ln;
          if (((t.abbr = e), null != un[e]))
            T(
              "defineLocaleOverride",
              "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
            ),
              (r = un[e]._config);
          else if (null != t.parentLocale)
            if (null != un[t.parentLocale]) r = un[t.parentLocale]._config;
            else {
              if (null == (n = mn(t.parentLocale)))
                return (
                  cn[t.parentLocale] || (cn[t.parentLocale] = []),
                  cn[t.parentLocale].push({
                    name: e,
                    config: t,
                  }),
                  null
                );
              r = n._config;
            }
          return (
            (un[e] = new P(O(r, t))),
            cn[e] &&
              cn[e].forEach(function (e) {
                gn(e.name, e.config);
              }),
            pn(e),
            un[e]
          );
        }
        return delete un[e], null;
      }

      function yn(e, t) {
        if (null != t) {
          var n,
            r,
            s = ln;
          null != un[e] && null != un[e].parentLocale
            ? un[e].set(O(un[e]._config, t))
            : (null != (r = mn(e)) && (s = r._config),
              (t = O(s, t)),
              null == r && (t.abbr = e),
              ((n = new P(t)).parentLocale = un[e]),
              (un[e] = n)),
            pn(e);
        } else
          null != un[e] &&
            (null != un[e].parentLocale
              ? ((un[e] = un[e].parentLocale), e === pn() && pn(e))
              : null != un[e] && delete un[e]);
        return un[e];
      }

      function vn(e) {
        var t;
        if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e))
          return an;
        if (!i(e)) {
          if ((t = mn(e))) return t;
          e = [e];
        }
        return fn(e);
      }

      function wn() {
        return $(un);
      }

      function kn(e) {
        var t,
          n = e._a;
        return (
          n &&
            -2 === g(e).overflow &&
            ((t =
              n[Be] < 0 || n[Be] > 11
                ? Be
                : n[ze] < 1 || n[ze] > Qe(n[je], n[Be])
                ? ze
                : n[Ue] < 0 ||
                  n[Ue] > 24 ||
                  (24 === n[Ue] && (0 !== n[Ve] || 0 !== n[Je] || 0 !== n[Ke]))
                ? Ue
                : n[Ve] < 0 || n[Ve] > 59
                ? Ve
                : n[Je] < 0 || n[Je] > 59
                ? Je
                : n[Ke] < 0 || n[Ke] > 999
                ? Ke
                : -1),
            g(e)._overflowDayOfYear && (t < je || t > ze) && (t = ze),
            g(e)._overflowWeeks && -1 === t && (t = Ze),
            g(e)._overflowWeekday && -1 === t && (t = qe),
            (g(e).overflow = t)),
          e
        );
      }
      var _n =
          /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        xn =
          /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        bn = /Z|[+-]\d\d(?::?\d\d)?/,
        Sn = [
          ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
          ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
          ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
          ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
          ["YYYY-DDD", /\d{4}-\d{3}/],
          ["YYYY-MM", /\d{4}-\d\d/, !1],
          ["YYYYYYMMDD", /[+-]\d{10}/],
          ["YYYYMMDD", /\d{8}/],
          ["GGGG[W]WWE", /\d{4}W\d{3}/],
          ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
          ["YYYYDDD", /\d{7}/],
          ["YYYYMM", /\d{6}/, !1],
          ["YYYY", /\d{4}/, !1],
        ],
        Mn = [
          ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
          ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
          ["HH:mm:ss", /\d\d:\d\d:\d\d/],
          ["HH:mm", /\d\d:\d\d/],
          ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
          ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
          ["HHmmss", /\d\d\d\d\d\d/],
          ["HHmm", /\d\d\d\d/],
          ["HH", /\d\d/],
        ],
        $n = /^\/?Date\((-?\d+)/i,
        Dn =
          /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        Tn = {
          UT: 0,
          GMT: 0,
          EDT: -240,
          EST: -300,
          CDT: -300,
          CST: -360,
          MDT: -360,
          MST: -420,
          PDT: -420,
          PST: -480,
        };

      function Yn(e) {
        var t,
          n,
          r,
          s,
          i,
          o,
          a = e._i,
          l = _n.exec(a) || xn.exec(a);
        if (l) {
          for (g(e).iso = !0, t = 0, n = Sn.length; t < n; t++)
            if (Sn[t][1].exec(l[1])) {
              (s = Sn[t][0]), (r = !1 !== Sn[t][2]);
              break;
            }
          if (null == s) return void (e._isValid = !1);
          if (l[3]) {
            for (t = 0, n = Mn.length; t < n; t++)
              if (Mn[t][1].exec(l[3])) {
                i = (l[2] || " ") + Mn[t][0];
                break;
              }
            if (null == i) return void (e._isValid = !1);
          }
          if (!r && null != i) return void (e._isValid = !1);
          if (l[4]) {
            if (!bn.exec(l[4])) return void (e._isValid = !1);
            o = "Z";
          }
          (e._f = s + (i || "") + (o || "")), Gn(e);
        } else e._isValid = !1;
      }

      function Cn(e, t, n, r, s, i) {
        var o = [
          On(e),
          tt.indexOf(t),
          parseInt(n, 10),
          parseInt(r, 10),
          parseInt(s, 10),
        ];
        return i && o.push(parseInt(i, 10)), o;
      }

      function On(e) {
        var t = parseInt(e, 10);
        return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
      }

      function Pn(e) {
        return e
          .replace(/\([^)]*\)|[\n\t]/g, " ")
          .replace(/(\s\s+)/g, " ")
          .replace(/^\s\s*/, "")
          .replace(/\s\s*$/, "");
      }

      function An(e, t, n) {
        return (
          !e ||
          Nt.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() ||
          ((g(n).weekdayMismatch = !0), (n._isValid = !1), !1)
        );
      }

      function Ln(e, t, n) {
        if (e) return Tn[e];
        if (t) return 0;
        var r = parseInt(n, 10),
          s = r % 100;
        return ((r - s) / 100) * 60 + s;
      }

      function Nn(e) {
        var t,
          n = Dn.exec(Pn(e._i));
        if (n) {
          if (((t = Cn(n[4], n[3], n[2], n[5], n[6], n[7])), !An(n[1], t, e)))
            return;
          (e._a = t),
            (e._tzm = Ln(n[8], n[9], n[10])),
            (e._d = kt.apply(null, e._a)),
            e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            (g(e).rfc2822 = !0);
        } else e._isValid = !1;
      }

      function Hn(e) {
        var t = $n.exec(e._i);
        null === t
          ? (Yn(e),
            !1 === e._isValid &&
              (delete e._isValid,
              Nn(e),
              !1 === e._isValid &&
                (delete e._isValid,
                e._strict ? (e._isValid = !1) : r.createFromInputFallback(e))))
          : (e._d = new Date(+t[1]));
      }

      function In(e, t, n) {
        return null != e ? e : null != t ? t : n;
      }

      function Wn(e) {
        var t = new Date(r.now());
        return e._useUTC
          ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
          : [t.getFullYear(), t.getMonth(), t.getDate()];
      }

      function Rn(e) {
        var t,
          n,
          r,
          s,
          i,
          o = [];
        if (!e._d) {
          for (
            r = Wn(e),
              e._w && null == e._a[ze] && null == e._a[Be] && Fn(e),
              null != e._dayOfYear &&
                ((i = In(e._a[je], r[je])),
                (e._dayOfYear > pt(i) || 0 === e._dayOfYear) &&
                  (g(e)._overflowDayOfYear = !0),
                (n = kt(i, 0, e._dayOfYear)),
                (e._a[Be] = n.getUTCMonth()),
                (e._a[ze] = n.getUTCDate())),
              t = 0;
            t < 3 && null == e._a[t];
            ++t
          )
            e._a[t] = o[t] = r[t];
          for (; t < 7; t++)
            e._a[t] = o[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t];
          24 === e._a[Ue] &&
            0 === e._a[Ve] &&
            0 === e._a[Je] &&
            0 === e._a[Ke] &&
            ((e._nextDay = !0), (e._a[Ue] = 0)),
            (e._d = (e._useUTC ? kt : wt).apply(null, o)),
            (s = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
            null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            e._nextDay && (e._a[Ue] = 24),
            e._w &&
              void 0 !== e._w.d &&
              e._w.d !== s &&
              (g(e).weekdayMismatch = !0);
        }
      }

      function Fn(e) {
        var t, n, r, s, i, o, a, l, u;
        null != (t = e._w).GG || null != t.W || null != t.E
          ? ((i = 1),
            (o = 4),
            (n = In(t.GG, e._a[je], bt(Kn(), 1, 4).year)),
            (r = In(t.W, 1)),
            ((s = In(t.E, 1)) < 1 || s > 7) && (l = !0))
          : ((i = e._locale._week.dow),
            (o = e._locale._week.doy),
            (u = bt(Kn(), i, o)),
            (n = In(t.gg, e._a[je], u.year)),
            (r = In(t.w, u.week)),
            null != t.d
              ? ((s = t.d) < 0 || s > 6) && (l = !0)
              : null != t.e
              ? ((s = t.e + i), (t.e < 0 || t.e > 6) && (l = !0))
              : (s = i)),
          r < 1 || r > St(n, i, o)
            ? (g(e)._overflowWeeks = !0)
            : null != l
            ? (g(e)._overflowWeekday = !0)
            : ((a = xt(n, r, s, i, o)),
              (e._a[je] = a.year),
              (e._dayOfYear = a.dayOfYear));
      }

      function Gn(e) {
        if (e._f !== r.ISO_8601)
          if (e._f !== r.RFC_2822) {
            (e._a = []), (g(e).empty = !0);
            var t,
              n,
              s,
              i,
              o,
              a,
              l = "" + e._i,
              u = l.length,
              c = 0;
            for (
              s = B(e._f, e._locale).match(H) || [], t = 0;
              t < s.length;
              t++
            )
              (i = s[t]),
                (n = (l.match(Ne(i, e)) || [])[0]) &&
                  ((o = l.substr(0, l.indexOf(n))).length > 0 &&
                    g(e).unusedInput.push(o),
                  (l = l.slice(l.indexOf(n) + n.length)),
                  (c += n.length)),
                R[i]
                  ? (n ? (g(e).empty = !1) : g(e).unusedTokens.push(i),
                    Ge(i, n, e))
                  : e._strict && !n && g(e).unusedTokens.push(i);
            (g(e).charsLeftOver = u - c),
              l.length > 0 && g(e).unusedInput.push(l),
              e._a[Ue] <= 12 &&
                !0 === g(e).bigHour &&
                e._a[Ue] > 0 &&
                (g(e).bigHour = void 0),
              (g(e).parsedDateParts = e._a.slice(0)),
              (g(e).meridiem = e._meridiem),
              (e._a[Ue] = En(e._locale, e._a[Ue], e._meridiem)),
              null !== (a = g(e).era) &&
                (e._a[je] = e._locale.erasConvertYear(a, e._a[je])),
              Rn(e),
              kn(e);
          } else Nn(e);
        else Yn(e);
      }

      function En(e, t, n) {
        var r;
        return null == n
          ? t
          : null != e.meridiemHour
          ? e.meridiemHour(t, n)
          : null != e.isPM
          ? ((r = e.isPM(n)) && t < 12 && (t += 12),
            r || 12 !== t || (t = 0),
            t)
          : t;
      }

      function jn(e) {
        var t,
          n,
          r,
          s,
          i,
          o,
          a = !1;
        if (0 === e._f.length)
          return (g(e).invalidFormat = !0), void (e._d = new Date(NaN));
        for (s = 0; s < e._f.length; s++)
          (i = 0),
            (o = !1),
            (t = _({}, e)),
            null != e._useUTC && (t._useUTC = e._useUTC),
            (t._f = e._f[s]),
            Gn(t),
            y(t) && (o = !0),
            (i += g(t).charsLeftOver),
            (i += 10 * g(t).unusedTokens.length),
            (g(t).score = i),
            a
              ? i < r && ((r = i), (n = t))
              : (null == r || i < r || o) && ((r = i), (n = t), o && (a = !0));
        f(e, n || t);
      }

      function Bn(e) {
        if (!e._d) {
          var t = se(e._i),
            n = void 0 === t.day ? t.date : t.day;
          (e._a = h(
            [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
            function (e) {
              return e && parseInt(e, 10);
            }
          )),
            Rn(e);
        }
      }

      function zn(e) {
        var t = new x(kn(Un(e)));
        return t._nextDay && (t.add(1, "d"), (t._nextDay = void 0)), t;
      }

      function Un(e) {
        var t = e._i,
          n = e._f;
        return (
          (e._locale = e._locale || vn(e._l)),
          null === t || (void 0 === n && "" === t)
            ? v({
                nullInput: !0,
              })
            : ("string" == typeof t && (e._i = t = e._locale.preparse(t)),
              b(t)
                ? new x(kn(t))
                : (d(t) ? (e._d = t) : i(n) ? jn(e) : n ? Gn(e) : Vn(e),
                  y(e) || (e._d = null),
                  e))
        );
      }

      function Vn(e) {
        var t = e._i;
        u(t)
          ? (e._d = new Date(r.now()))
          : d(t)
          ? (e._d = new Date(t.valueOf()))
          : "string" == typeof t
          ? Hn(e)
          : i(t)
          ? ((e._a = h(t.slice(0), function (e) {
              return parseInt(e, 10);
            })),
            Rn(e))
          : o(t)
          ? Bn(e)
          : c(t)
          ? (e._d = new Date(t))
          : r.createFromInputFallback(e);
      }

      function Jn(e, t, n, r, s) {
        var a = {};
        return (
          (!0 !== t && !1 !== t) || ((r = t), (t = void 0)),
          (!0 !== n && !1 !== n) || ((r = n), (n = void 0)),
          ((o(e) && l(e)) || (i(e) && 0 === e.length)) && (e = void 0),
          (a._isAMomentObject = !0),
          (a._useUTC = a._isUTC = s),
          (a._l = n),
          (a._i = e),
          (a._f = t),
          (a._strict = r),
          zn(a)
        );
      }

      function Kn(e, t, n, r) {
        return Jn(e, t, n, r, !1);
      }
      (r.createFromInputFallback = M(
        "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
        function (e) {
          e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
        }
      )),
        (r.ISO_8601 = function () {}),
        (r.RFC_2822 = function () {});
      var Zn = M(
          "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
          function () {
            var e = Kn.apply(null, arguments);
            return this.isValid() && e.isValid() ? (e < this ? this : e) : v();
          }
        ),
        qn = M(
          "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
          function () {
            var e = Kn.apply(null, arguments);
            return this.isValid() && e.isValid() ? (e > this ? this : e) : v();
          }
        );

      function Xn(e, t) {
        var n, r;
        if ((1 === t.length && i(t[0]) && (t = t[0]), !t.length)) return Kn();
        for (n = t[0], r = 1; r < t.length; ++r)
          (t[r].isValid() && !t[r][e](n)) || (n = t[r]);
        return n;
      }

      function Qn() {
        return Xn("isBefore", [].slice.call(arguments, 0));
      }

      function er() {
        return Xn("isAfter", [].slice.call(arguments, 0));
      }
      var tr = function () {
          return Date.now ? Date.now() : +new Date();
        },
        nr = [
          "year",
          "quarter",
          "month",
          "week",
          "day",
          "hour",
          "minute",
          "second",
          "millisecond",
        ];

      function rr(e) {
        var t,
          n,
          r = !1;
        for (t in e)
          if (
            a(e, t) &&
            (-1 === Ee.call(nr, t) || (null != e[t] && isNaN(e[t])))
          )
            return !1;
        for (n = 0; n < nr.length; ++n)
          if (e[nr[n]]) {
            if (r) return !1;
            parseFloat(e[nr[n]]) !== ce(e[nr[n]]) && (r = !0);
          }
        return !0;
      }

      function sr() {
        return this._isValid;
      }

      function ir() {
        return Tr(NaN);
      }

      function or(e) {
        var t = se(e),
          n = t.year || 0,
          r = t.quarter || 0,
          s = t.month || 0,
          i = t.week || t.isoWeek || 0,
          o = t.day || 0,
          a = t.hour || 0,
          l = t.minute || 0,
          u = t.second || 0,
          c = t.millisecond || 0;
        (this._isValid = rr(t)),
          (this._milliseconds = +c + 1e3 * u + 6e4 * l + 1e3 * a * 60 * 60),
          (this._days = +o + 7 * i),
          (this._months = +s + 3 * r + 12 * n),
          (this._data = {}),
          (this._locale = vn()),
          this._bubble();
      }

      function ar(e) {
        return e instanceof or;
      }

      function lr(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
      }

      function ur(e, t, n) {
        var r,
          s = Math.min(e.length, t.length),
          i = Math.abs(e.length - t.length),
          o = 0;
        for (r = 0; r < s; r++)
          ((n && e[r] !== t[r]) || (!n && ce(e[r]) !== ce(t[r]))) && o++;
        return o + i;
      }

      function cr(e, t) {
        F(e, 0, 0, function () {
          var e = this.utcOffset(),
            n = "+";
          return (
            e < 0 && ((e = -e), (n = "-")),
            n + N(~~(e / 60), 2) + t + N(~~e % 60, 2)
          );
        });
      }
      cr("Z", ":"),
        cr("ZZ", ""),
        Le("Z", Oe),
        Le("ZZ", Oe),
        Re(["Z", "ZZ"], function (e, t, n) {
          (n._useUTC = !0), (n._tzm = hr(Oe, e));
        });
      var dr = /([\+\-]|\d\d)/gi;

      function hr(e, t) {
        var n,
          r,
          s = (t || "").match(e);
        return null === s
          ? null
          : 0 ===
            (r =
              60 *
                (n = ((s[s.length - 1] || []) + "").match(dr) || [
                  "-",
                  0,
                  0,
                ])[1] +
              ce(n[2]))
          ? 0
          : "+" === n[0]
          ? r
          : -r;
      }

      function fr(e, t) {
        var n, s;
        return t._isUTC
          ? ((n = t.clone()),
            (s = (b(e) || d(e) ? e.valueOf() : Kn(e).valueOf()) - n.valueOf()),
            n._d.setTime(n._d.valueOf() + s),
            r.updateOffset(n, !1),
            n)
          : Kn(e).local();
      }

      function mr(e) {
        return -Math.round(e._d.getTimezoneOffset());
      }

      function pr(e, t, n) {
        var s,
          i = this._offset || 0;
        if (!this.isValid()) return null != e ? this : NaN;
        if (null != e) {
          if ("string" == typeof e) {
            if (null === (e = hr(Oe, e))) return this;
          } else Math.abs(e) < 16 && !n && (e *= 60);
          return (
            !this._isUTC && t && (s = mr(this)),
            (this._offset = e),
            (this._isUTC = !0),
            null != s && this.add(s, "m"),
            i !== e &&
              (!t || this._changeInProgress
                ? Ar(this, Tr(e - i, "m"), 1, !1)
                : this._changeInProgress ||
                  ((this._changeInProgress = !0),
                  r.updateOffset(this, !0),
                  (this._changeInProgress = null))),
            this
          );
        }
        return this._isUTC ? i : mr(this);
      }

      function gr(e, t) {
        return null != e
          ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this)
          : -this.utcOffset();
      }

      function yr(e) {
        return this.utcOffset(0, e);
      }

      function vr(e) {
        return (
          this._isUTC &&
            (this.utcOffset(0, e),
            (this._isUTC = !1),
            e && this.subtract(mr(this), "m")),
          this
        );
      }

      function wr() {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) {
          var e = hr(Ce, this._i);
          null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
        }
        return this;
      }

      function kr(e) {
        return (
          !!this.isValid() &&
          ((e = e ? Kn(e).utcOffset() : 0), (this.utcOffset() - e) % 60 == 0)
        );
      }

      function _r() {
        return (
          this.utcOffset() > this.clone().month(0).utcOffset() ||
          this.utcOffset() > this.clone().month(5).utcOffset()
        );
      }

      function xr() {
        if (!u(this._isDSTShifted)) return this._isDSTShifted;
        var e,
          t = {};
        return (
          _(t, this),
          (t = Un(t))._a
            ? ((e = t._isUTC ? m(t._a) : Kn(t._a)),
              (this._isDSTShifted =
                this.isValid() && ur(t._a, e.toArray()) > 0))
            : (this._isDSTShifted = !1),
          this._isDSTShifted
        );
      }

      function br() {
        return !!this.isValid() && !this._isUTC;
      }

      function Sr() {
        return !!this.isValid() && this._isUTC;
      }

      function Mr() {
        return !!this.isValid() && this._isUTC && 0 === this._offset;
      }
      r.updateOffset = function () {};
      var $r = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
        Dr =
          /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

      function Tr(e, t) {
        var n,
          r,
          s,
          i = e,
          o = null;
        return (
          ar(e)
            ? (i = {
                ms: e._milliseconds,
                d: e._days,
                M: e._months,
              })
            : c(e) || !isNaN(+e)
            ? ((i = {}), t ? (i[t] = +e) : (i.milliseconds = +e))
            : (o = $r.exec(e))
            ? ((n = "-" === o[1] ? -1 : 1),
              (i = {
                y: 0,
                d: ce(o[ze]) * n,
                h: ce(o[Ue]) * n,
                m: ce(o[Ve]) * n,
                s: ce(o[Je]) * n,
                ms: ce(lr(1e3 * o[Ke])) * n,
              }))
            : (o = Dr.exec(e))
            ? ((n = "-" === o[1] ? -1 : 1),
              (i = {
                y: Yr(o[2], n),
                M: Yr(o[3], n),
                w: Yr(o[4], n),
                d: Yr(o[5], n),
                h: Yr(o[6], n),
                m: Yr(o[7], n),
                s: Yr(o[8], n),
              }))
            : null == i
            ? (i = {})
            : "object" == typeof i &&
              ("from" in i || "to" in i) &&
              ((s = Or(Kn(i.from), Kn(i.to))),
              ((i = {}).ms = s.milliseconds),
              (i.M = s.months)),
          (r = new or(i)),
          ar(e) && a(e, "_locale") && (r._locale = e._locale),
          ar(e) && a(e, "_isValid") && (r._isValid = e._isValid),
          r
        );
      }

      function Yr(e, t) {
        var n = e && parseFloat(e.replace(",", "."));
        return (isNaN(n) ? 0 : n) * t;
      }

      function Cr(e, t) {
        var n = {};
        return (
          (n.months = t.month() - e.month() + 12 * (t.year() - e.year())),
          e.clone().add(n.months, "M").isAfter(t) && --n.months,
          (n.milliseconds = +t - +e.clone().add(n.months, "M")),
          n
        );
      }

      function Or(e, t) {
        var n;
        return e.isValid() && t.isValid()
          ? ((t = fr(t, e)),
            e.isBefore(t)
              ? (n = Cr(e, t))
              : (((n = Cr(t, e)).milliseconds = -n.milliseconds),
                (n.months = -n.months)),
            n)
          : {
              milliseconds: 0,
              months: 0,
            };
      }

      function Pr(e, t) {
        return function (n, r) {
          var s;
          return (
            null === r ||
              isNaN(+r) ||
              (T(
                t,
                "moment()." +
                  t +
                  "(period, number) is deprecated. Please use moment()." +
                  t +
                  "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
              ),
              (s = n),
              (n = r),
              (r = s)),
            Ar(this, Tr(n, r), e),
            this
          );
        };
      }

      function Ar(e, t, n, s) {
        var i = t._milliseconds,
          o = lr(t._days),
          a = lr(t._months);
        e.isValid() &&
          ((s = null == s || s),
          a && ut(e, he(e, "Month") + a * n),
          o && fe(e, "Date", he(e, "Date") + o * n),
          i && e._d.setTime(e._d.valueOf() + i * n),
          s && r.updateOffset(e, o || a));
      }
      (Tr.fn = or.prototype), (Tr.invalid = ir);
      var Lr = Pr(1, "add"),
        Nr = Pr(-1, "subtract");

      function Hr(e) {
        return "string" == typeof e || e instanceof String;
      }

      function Ir(e) {
        return b(e) || d(e) || Hr(e) || c(e) || Rr(e) || Wr(e) || null == e;
      }

      function Wr(e) {
        var t,
          n,
          r = o(e) && !l(e),
          s = !1,
          i = [
            "years",
            "year",
            "y",
            "months",
            "month",
            "M",
            "days",
            "day",
            "d",
            "dates",
            "date",
            "D",
            "hours",
            "hour",
            "h",
            "minutes",
            "minute",
            "m",
            "seconds",
            "second",
            "s",
            "milliseconds",
            "millisecond",
            "ms",
          ];
        for (t = 0; t < i.length; t += 1) (n = i[t]), (s = s || a(e, n));
        return r && s;
      }

      function Rr(e) {
        var t = i(e),
          n = !1;
        return (
          t &&
            (n =
              0 ===
              e.filter(function (t) {
                return !c(t) && Hr(e);
              }).length),
          t && n
        );
      }

      function Fr(e) {
        var t,
          n,
          r = o(e) && !l(e),
          s = !1,
          i = [
            "sameDay",
            "nextDay",
            "lastDay",
            "nextWeek",
            "lastWeek",
            "sameElse",
          ];
        for (t = 0; t < i.length; t += 1) (n = i[t]), (s = s || a(e, n));
        return r && s;
      }

      function Gr(e, t) {
        var n = e.diff(t, "days", !0);
        return n < -6
          ? "sameElse"
          : n < -1
          ? "lastWeek"
          : n < 0
          ? "lastDay"
          : n < 1
          ? "sameDay"
          : n < 2
          ? "nextDay"
          : n < 7
          ? "nextWeek"
          : "sameElse";
      }

      function Er(e, t) {
        1 === arguments.length &&
          (arguments[0]
            ? Ir(arguments[0])
              ? ((e = arguments[0]), (t = void 0))
              : Fr(arguments[0]) && ((t = arguments[0]), (e = void 0))
            : ((e = void 0), (t = void 0)));
        var n = e || Kn(),
          s = fr(n, this).startOf("day"),
          i = r.calendarFormat(this, s) || "sameElse",
          o = t && (Y(t[i]) ? t[i].call(this, n) : t[i]);
        return this.format(o || this.localeData().calendar(i, this, Kn(n)));
      }

      function jr() {
        return new x(this);
      }

      function Br(e, t) {
        var n = b(e) ? e : Kn(e);
        return (
          !(!this.isValid() || !n.isValid()) &&
          ("millisecond" === (t = re(t) || "millisecond")
            ? this.valueOf() > n.valueOf()
            : n.valueOf() < this.clone().startOf(t).valueOf())
        );
      }

      function zr(e, t) {
        var n = b(e) ? e : Kn(e);
        return (
          !(!this.isValid() || !n.isValid()) &&
          ("millisecond" === (t = re(t) || "millisecond")
            ? this.valueOf() < n.valueOf()
            : this.clone().endOf(t).valueOf() < n.valueOf())
        );
      }

      function Ur(e, t, n, r) {
        var s = b(e) ? e : Kn(e),
          i = b(t) ? t : Kn(t);
        return (
          !!(this.isValid() && s.isValid() && i.isValid()) &&
          ("(" === (r = r || "()")[0]
            ? this.isAfter(s, n)
            : !this.isBefore(s, n)) &&
          (")" === r[1] ? this.isBefore(i, n) : !this.isAfter(i, n))
        );
      }

      function Vr(e, t) {
        var n,
          r = b(e) ? e : Kn(e);
        return (
          !(!this.isValid() || !r.isValid()) &&
          ("millisecond" === (t = re(t) || "millisecond")
            ? this.valueOf() === r.valueOf()
            : ((n = r.valueOf()),
              this.clone().startOf(t).valueOf() <= n &&
                n <= this.clone().endOf(t).valueOf()))
        );
      }

      function Jr(e, t) {
        return this.isSame(e, t) || this.isAfter(e, t);
      }

      function Kr(e, t) {
        return this.isSame(e, t) || this.isBefore(e, t);
      }

      function Zr(e, t, n) {
        var r, s, i;
        if (!this.isValid()) return NaN;
        if (!(r = fr(e, this)).isValid()) return NaN;
        switch (((s = 6e4 * (r.utcOffset() - this.utcOffset())), (t = re(t)))) {
          case "year":
            i = qr(this, r) / 12;
            break;
          case "month":
            i = qr(this, r);
            break;
          case "quarter":
            i = qr(this, r) / 3;
            break;
          case "second":
            i = (this - r) / 1e3;
            break;
          case "minute":
            i = (this - r) / 6e4;
            break;
          case "hour":
            i = (this - r) / 36e5;
            break;
          case "day":
            i = (this - r - s) / 864e5;
            break;
          case "week":
            i = (this - r - s) / 6048e5;
            break;
          default:
            i = this - r;
        }
        return n ? i : ue(i);
      }

      function qr(e, t) {
        if (e.date() < t.date()) return -qr(t, e);
        var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
          r = e.clone().add(n, "months");
        return (
          -(
            n +
            (t - r < 0
              ? (t - r) / (r - e.clone().add(n - 1, "months"))
              : (t - r) / (e.clone().add(n + 1, "months") - r))
          ) || 0
        );
      }

      function Xr() {
        return this.clone()
          .locale("en")
          .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
      }

      function Qr(e) {
        if (!this.isValid()) return null;
        var t = !0 !== e,
          n = t ? this.clone().utc() : this;
        return n.year() < 0 || n.year() > 9999
          ? j(
              n,
              t
                ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
            )
          : Y(Date.prototype.toISOString)
          ? t
            ? this.toDate().toISOString()
            : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
                .toISOString()
                .replace("Z", j(n, "Z"))
          : j(
              n,
              t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
            );
      }

      function es() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var e,
          t,
          n,
          r,
          s = "moment",
          i = "";
        return (
          this.isLocal() ||
            ((s = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
            (i = "Z")),
          (e = "[" + s + '("]'),
          (t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
          (n = "-MM-DD[T]HH:mm:ss.SSS"),
          (r = i + '[")]'),
          this.format(e + t + n + r)
        );
      }

      function ts(e) {
        e || (e = this.isUtc() ? r.defaultFormatUtc : r.defaultFormat);
        var t = j(this, e);
        return this.localeData().postformat(t);
      }

      function ns(e, t) {
        return this.isValid() && ((b(e) && e.isValid()) || Kn(e).isValid())
          ? Tr({
              to: this,
              from: e,
            })
              .locale(this.locale())
              .humanize(!t)
          : this.localeData().invalidDate();
      }

      function rs(e) {
        return this.from(Kn(), e);
      }

      function ss(e, t) {
        return this.isValid() && ((b(e) && e.isValid()) || Kn(e).isValid())
          ? Tr({
              from: this,
              to: e,
            })
              .locale(this.locale())
              .humanize(!t)
          : this.localeData().invalidDate();
      }

      function is(e) {
        return this.to(Kn(), e);
      }

      function os(e) {
        var t;
        return void 0 === e
          ? this._locale._abbr
          : (null != (t = vn(e)) && (this._locale = t), this);
      }
      (r.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
        (r.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
      var as = M(
        "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
        function (e) {
          return void 0 === e ? this.localeData() : this.locale(e);
        }
      );

      function ls() {
        return this._locale;
      }
      var us = 1e3,
        cs = 60 * us,
        ds = 60 * cs,
        hs = 3506328 * ds;

      function fs(e, t) {
        return ((e % t) + t) % t;
      }

      function ms(e, t, n) {
        return e < 100 && e >= 0
          ? new Date(e + 400, t, n) - hs
          : new Date(e, t, n).valueOf();
      }

      function ps(e, t, n) {
        return e < 100 && e >= 0
          ? Date.UTC(e + 400, t, n) - hs
          : Date.UTC(e, t, n);
      }

      function gs(e) {
        var t, n;
        if (void 0 === (e = re(e)) || "millisecond" === e || !this.isValid())
          return this;
        switch (((n = this._isUTC ? ps : ms), e)) {
          case "year":
            t = n(this.year(), 0, 1);
            break;
          case "quarter":
            t = n(this.year(), this.month() - (this.month() % 3), 1);
            break;
          case "month":
            t = n(this.year(), this.month(), 1);
            break;
          case "week":
            t = n(this.year(), this.month(), this.date() - this.weekday());
            break;
          case "isoWeek":
            t = n(
              this.year(),
              this.month(),
              this.date() - (this.isoWeekday() - 1)
            );
            break;
          case "day":
          case "date":
            t = n(this.year(), this.month(), this.date());
            break;
          case "hour":
            (t = this._d.valueOf()),
              (t -= fs(t + (this._isUTC ? 0 : this.utcOffset() * cs), ds));
            break;
          case "minute":
            (t = this._d.valueOf()), (t -= fs(t, cs));
            break;
          case "second":
            (t = this._d.valueOf()), (t -= fs(t, us));
        }
        return this._d.setTime(t), r.updateOffset(this, !0), this;
      }

      function ys(e) {
        var t, n;
        if (void 0 === (e = re(e)) || "millisecond" === e || !this.isValid())
          return this;
        switch (((n = this._isUTC ? ps : ms), e)) {
          case "year":
            t = n(this.year() + 1, 0, 1) - 1;
            break;
          case "quarter":
            t = n(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
            break;
          case "month":
            t = n(this.year(), this.month() + 1, 1) - 1;
            break;
          case "week":
            t =
              n(this.year(), this.month(), this.date() - this.weekday() + 7) -
              1;
            break;
          case "isoWeek":
            t =
              n(
                this.year(),
                this.month(),
                this.date() - (this.isoWeekday() - 1) + 7
              ) - 1;
            break;
          case "day":
          case "date":
            t = n(this.year(), this.month(), this.date() + 1) - 1;
            break;
          case "hour":
            (t = this._d.valueOf()),
              (t +=
                ds - fs(t + (this._isUTC ? 0 : this.utcOffset() * cs), ds) - 1);
            break;
          case "minute":
            (t = this._d.valueOf()), (t += cs - fs(t, cs) - 1);
            break;
          case "second":
            (t = this._d.valueOf()), (t += us - fs(t, us) - 1);
        }
        return this._d.setTime(t), r.updateOffset(this, !0), this;
      }

      function vs() {
        return this._d.valueOf() - 6e4 * (this._offset || 0);
      }

      function ws() {
        return Math.floor(this.valueOf() / 1e3);
      }

      function ks() {
        return new Date(this.valueOf());
      }

      function _s() {
        var e = this;
        return [
          e.year(),
          e.month(),
          e.date(),
          e.hour(),
          e.minute(),
          e.second(),
          e.millisecond(),
        ];
      }

      function xs() {
        var e = this;
        return {
          years: e.year(),
          months: e.month(),
          date: e.date(),
          hours: e.hours(),
          minutes: e.minutes(),
          seconds: e.seconds(),
          milliseconds: e.milliseconds(),
        };
      }

      function bs() {
        return this.isValid() ? this.toISOString() : null;
      }

      function Ss() {
        return y(this);
      }

      function Ms() {
        return f({}, g(this));
      }

      function $s() {
        return g(this).overflow;
      }

      function Ds() {
        return {
          input: this._i,
          format: this._f,
          locale: this._locale,
          isUTC: this._isUTC,
          strict: this._strict,
        };
      }

      function Ts(e, t) {
        var n,
          s,
          i,
          o = this._eras || vn("en")._eras;
        for (n = 0, s = o.length; n < s; ++n)
          switch (
            ("string" == typeof o[n].since &&
              ((i = r(o[n].since).startOf("day")), (o[n].since = i.valueOf())),
            typeof o[n].until)
          ) {
            case "undefined":
              o[n].until = 1 / 0;
              break;
            case "string":
              (i = r(o[n].until).startOf("day").valueOf()),
                (o[n].until = i.valueOf());
          }
        return o;
      }

      function Ys(e, t, n) {
        var r,
          s,
          i,
          o,
          a,
          l = this.eras();
        for (e = e.toUpperCase(), r = 0, s = l.length; r < s; ++r)
          if (
            ((i = l[r].name.toUpperCase()),
            (o = l[r].abbr.toUpperCase()),
            (a = l[r].narrow.toUpperCase()),
            n)
          )
            switch (t) {
              case "N":
              case "NN":
              case "NNN":
                if (o === e) return l[r];
                break;
              case "NNNN":
                if (i === e) return l[r];
                break;
              case "NNNNN":
                if (a === e) return l[r];
            }
          else if ([i, o, a].indexOf(e) >= 0) return l[r];
      }

      function Cs(e, t) {
        var n = e.since <= e.until ? 1 : -1;
        return void 0 === t
          ? r(e.since).year()
          : r(e.since).year() + (t - e.offset) * n;
      }

      function Os() {
        var e,
          t,
          n,
          r = this.localeData().eras();
        for (e = 0, t = r.length; e < t; ++e) {
          if (
            ((n = this.clone().startOf("day").valueOf()),
            r[e].since <= n && n <= r[e].until)
          )
            return r[e].name;
          if (r[e].until <= n && n <= r[e].since) return r[e].name;
        }
        return "";
      }

      function Ps() {
        var e,
          t,
          n,
          r = this.localeData().eras();
        for (e = 0, t = r.length; e < t; ++e) {
          if (
            ((n = this.clone().startOf("day").valueOf()),
            r[e].since <= n && n <= r[e].until)
          )
            return r[e].narrow;
          if (r[e].until <= n && n <= r[e].since) return r[e].narrow;
        }
        return "";
      }

      function As() {
        var e,
          t,
          n,
          r = this.localeData().eras();
        for (e = 0, t = r.length; e < t; ++e) {
          if (
            ((n = this.clone().startOf("day").valueOf()),
            r[e].since <= n && n <= r[e].until)
          )
            return r[e].abbr;
          if (r[e].until <= n && n <= r[e].since) return r[e].abbr;
        }
        return "";
      }

      function Ls() {
        var e,
          t,
          n,
          s,
          i = this.localeData().eras();
        for (e = 0, t = i.length; e < t; ++e)
          if (
            ((n = i[e].since <= i[e].until ? 1 : -1),
            (s = this.clone().startOf("day").valueOf()),
            (i[e].since <= s && s <= i[e].until) ||
              (i[e].until <= s && s <= i[e].since))
          )
            return (this.year() - r(i[e].since).year()) * n + i[e].offset;
        return this.year();
      }

      function Ns(e) {
        return (
          a(this, "_erasNameRegex") || Es.call(this),
          e ? this._erasNameRegex : this._erasRegex
        );
      }

      function Hs(e) {
        return (
          a(this, "_erasAbbrRegex") || Es.call(this),
          e ? this._erasAbbrRegex : this._erasRegex
        );
      }

      function Is(e) {
        return (
          a(this, "_erasNarrowRegex") || Es.call(this),
          e ? this._erasNarrowRegex : this._erasRegex
        );
      }

      function Ws(e, t) {
        return t.erasAbbrRegex(e);
      }

      function Rs(e, t) {
        return t.erasNameRegex(e);
      }

      function Fs(e, t) {
        return t.erasNarrowRegex(e);
      }

      function Gs(e, t) {
        return t._eraYearOrdinalRegex || Te;
      }

      function Es() {
        var e,
          t,
          n = [],
          r = [],
          s = [],
          i = [],
          o = this.eras();
        for (e = 0, t = o.length; e < t; ++e)
          r.push(Ie(o[e].name)),
            n.push(Ie(o[e].abbr)),
            s.push(Ie(o[e].narrow)),
            i.push(Ie(o[e].name)),
            i.push(Ie(o[e].abbr)),
            i.push(Ie(o[e].narrow));
        (this._erasRegex = new RegExp("^(" + i.join("|") + ")", "i")),
          (this._erasNameRegex = new RegExp("^(" + r.join("|") + ")", "i")),
          (this._erasAbbrRegex = new RegExp("^(" + n.join("|") + ")", "i")),
          (this._erasNarrowRegex = new RegExp("^(" + s.join("|") + ")", "i"));
      }

      function js(e, t) {
        F(0, [e, e.length], 0, t);
      }

      function Bs(e) {
        return Zs.call(
          this,
          e,
          this.week(),
          this.weekday(),
          this.localeData()._week.dow,
          this.localeData()._week.doy
        );
      }

      function zs(e) {
        return Zs.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
      }

      function Us() {
        return St(this.year(), 1, 4);
      }

      function Vs() {
        return St(this.isoWeekYear(), 1, 4);
      }

      function Js() {
        var e = this.localeData()._week;
        return St(this.year(), e.dow, e.doy);
      }

      function Ks() {
        var e = this.localeData()._week;
        return St(this.weekYear(), e.dow, e.doy);
      }

      function Zs(e, t, n, r, s) {
        var i;
        return null == e
          ? bt(this, r, s).year
          : (t > (i = St(e, r, s)) && (t = i), qs.call(this, e, t, n, r, s));
      }

      function qs(e, t, n, r, s) {
        var i = xt(e, t, n, r, s),
          o = kt(i.year, 0, i.dayOfYear);
        return (
          this.year(o.getUTCFullYear()),
          this.month(o.getUTCMonth()),
          this.date(o.getUTCDate()),
          this
        );
      }

      function Xs(e) {
        return null == e
          ? Math.ceil((this.month() + 1) / 3)
          : this.month(3 * (e - 1) + (this.month() % 3));
      }
      F("N", 0, 0, "eraAbbr"),
        F("NN", 0, 0, "eraAbbr"),
        F("NNN", 0, 0, "eraAbbr"),
        F("NNNN", 0, 0, "eraName"),
        F("NNNNN", 0, 0, "eraNarrow"),
        F("y", ["y", 1], "yo", "eraYear"),
        F("y", ["yy", 2], 0, "eraYear"),
        F("y", ["yyy", 3], 0, "eraYear"),
        F("y", ["yyyy", 4], 0, "eraYear"),
        Le("N", Ws),
        Le("NN", Ws),
        Le("NNN", Ws),
        Le("NNNN", Rs),
        Le("NNNNN", Fs),
        Re(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, n, r) {
          var s = n._locale.erasParse(e, r, n._strict);
          s ? (g(n).era = s) : (g(n).invalidEra = e);
        }),
        Le("y", Te),
        Le("yy", Te),
        Le("yyy", Te),
        Le("yyyy", Te),
        Le("yo", Gs),
        Re(["y", "yy", "yyy", "yyyy"], je),
        Re(["yo"], function (e, t, n, r) {
          var s;
          n._locale._eraYearOrdinalRegex &&
            (s = e.match(n._locale._eraYearOrdinalRegex)),
            n._locale.eraYearOrdinalParse
              ? (t[je] = n._locale.eraYearOrdinalParse(e, s))
              : (t[je] = parseInt(e, 10));
        }),
        F(0, ["gg", 2], 0, function () {
          return this.weekYear() % 100;
        }),
        F(0, ["GG", 2], 0, function () {
          return this.isoWeekYear() % 100;
        }),
        js("gggg", "weekYear"),
        js("ggggg", "weekYear"),
        js("GGGG", "isoWeekYear"),
        js("GGGGG", "isoWeekYear"),
        ne("weekYear", "gg"),
        ne("isoWeekYear", "GG"),
        oe("weekYear", 1),
        oe("isoWeekYear", 1),
        Le("G", Ye),
        Le("g", Ye),
        Le("GG", xe, ve),
        Le("gg", xe, ve),
        Le("GGGG", $e, ke),
        Le("gggg", $e, ke),
        Le("GGGGG", De, _e),
        Le("ggggg", De, _e),
        Fe(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, r) {
          t[r.substr(0, 2)] = ce(e);
        }),
        Fe(["gg", "GG"], function (e, t, n, s) {
          t[s] = r.parseTwoDigitYear(e);
        }),
        F("Q", 0, "Qo", "quarter"),
        ne("quarter", "Q"),
        oe("quarter", 7),
        Le("Q", ye),
        Re("Q", function (e, t) {
          t[Be] = 3 * (ce(e) - 1);
        }),
        F("D", ["DD", 2], "Do", "date"),
        ne("date", "D"),
        oe("date", 9),
        Le("D", xe),
        Le("DD", xe, ve),
        Le("Do", function (e, t) {
          return e
            ? t._dayOfMonthOrdinalParse || t._ordinalParse
            : t._dayOfMonthOrdinalParseLenient;
        }),
        Re(["D", "DD"], ze),
        Re("Do", function (e, t) {
          t[ze] = ce(e.match(xe)[0]);
        });
      var Qs = de("Date", !0);

      function ei(e) {
        var t =
          Math.round(
            (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
          ) + 1;
        return null == e ? t : this.add(e - t, "d");
      }
      F("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
        ne("dayOfYear", "DDD"),
        oe("dayOfYear", 4),
        Le("DDD", Me),
        Le("DDDD", we),
        Re(["DDD", "DDDD"], function (e, t, n) {
          n._dayOfYear = ce(e);
        }),
        F("m", ["mm", 2], 0, "minute"),
        ne("minute", "m"),
        oe("minute", 14),
        Le("m", xe),
        Le("mm", xe, ve),
        Re(["m", "mm"], Ve);
      var ti = de("Minutes", !1);
      F("s", ["ss", 2], 0, "second"),
        ne("second", "s"),
        oe("second", 15),
        Le("s", xe),
        Le("ss", xe, ve),
        Re(["s", "ss"], Je);
      var ni,
        ri,
        si = de("Seconds", !1);
      for (
        F("S", 0, 0, function () {
          return ~~(this.millisecond() / 100);
        }),
          F(0, ["SS", 2], 0, function () {
            return ~~(this.millisecond() / 10);
          }),
          F(0, ["SSS", 3], 0, "millisecond"),
          F(0, ["SSSS", 4], 0, function () {
            return 10 * this.millisecond();
          }),
          F(0, ["SSSSS", 5], 0, function () {
            return 100 * this.millisecond();
          }),
          F(0, ["SSSSSS", 6], 0, function () {
            return 1e3 * this.millisecond();
          }),
          F(0, ["SSSSSSS", 7], 0, function () {
            return 1e4 * this.millisecond();
          }),
          F(0, ["SSSSSSSS", 8], 0, function () {
            return 1e5 * this.millisecond();
          }),
          F(0, ["SSSSSSSSS", 9], 0, function () {
            return 1e6 * this.millisecond();
          }),
          ne("millisecond", "ms"),
          oe("millisecond", 16),
          Le("S", Me, ye),
          Le("SS", Me, ve),
          Le("SSS", Me, we),
          ni = "SSSS";
        ni.length <= 9;
        ni += "S"
      )
        Le(ni, Te);

      function ii(e, t) {
        t[Ke] = ce(1e3 * ("0." + e));
      }
      for (ni = "S"; ni.length <= 9; ni += "S") Re(ni, ii);

      function oi() {
        return this._isUTC ? "UTC" : "";
      }

      function ai() {
        return this._isUTC ? "Coordinated Universal Time" : "";
      }
      (ri = de("Milliseconds", !1)),
        F("z", 0, 0, "zoneAbbr"),
        F("zz", 0, 0, "zoneName");
      var li = x.prototype;

      function ui(e) {
        return Kn(1e3 * e);
      }

      function ci() {
        return Kn.apply(null, arguments).parseZone();
      }

      function di(e) {
        return e;
      }
      (li.add = Lr),
        (li.calendar = Er),
        (li.clone = jr),
        (li.diff = Zr),
        (li.endOf = ys),
        (li.format = ts),
        (li.from = ns),
        (li.fromNow = rs),
        (li.to = ss),
        (li.toNow = is),
        (li.get = me),
        (li.invalidAt = $s),
        (li.isAfter = Br),
        (li.isBefore = zr),
        (li.isBetween = Ur),
        (li.isSame = Vr),
        (li.isSameOrAfter = Jr),
        (li.isSameOrBefore = Kr),
        (li.isValid = Ss),
        (li.lang = as),
        (li.locale = os),
        (li.localeData = ls),
        (li.max = qn),
        (li.min = Zn),
        (li.parsingFlags = Ms),
        (li.set = pe),
        (li.startOf = gs),
        (li.subtract = Nr),
        (li.toArray = _s),
        (li.toObject = xs),
        (li.toDate = ks),
        (li.toISOString = Qr),
        (li.inspect = es),
        "undefined" != typeof Symbol &&
          null != Symbol.for &&
          (li[Symbol.for("nodejs.util.inspect.custom")] = function () {
            return "Moment<" + this.format() + ">";
          }),
        (li.toJSON = bs),
        (li.toString = Xr),
        (li.unix = ws),
        (li.valueOf = vs),
        (li.creationData = Ds),
        (li.eraName = Os),
        (li.eraNarrow = Ps),
        (li.eraAbbr = As),
        (li.eraYear = Ls),
        (li.year = gt),
        (li.isLeapYear = yt),
        (li.weekYear = Bs),
        (li.isoWeekYear = zs),
        (li.quarter = li.quarters = Xs),
        (li.month = ct),
        (li.daysInMonth = dt),
        (li.week = li.weeks = Yt),
        (li.isoWeek = li.isoWeeks = Ct),
        (li.weeksInYear = Js),
        (li.weeksInWeekYear = Ks),
        (li.isoWeeksInYear = Us),
        (li.isoWeeksInISOWeekYear = Vs),
        (li.date = Qs),
        (li.day = li.days = zt),
        (li.weekday = Ut),
        (li.isoWeekday = Vt),
        (li.dayOfYear = ei),
        (li.hour = li.hours = sn),
        (li.minute = li.minutes = ti),
        (li.second = li.seconds = si),
        (li.millisecond = li.milliseconds = ri),
        (li.utcOffset = pr),
        (li.utc = yr),
        (li.local = vr),
        (li.parseZone = wr),
        (li.hasAlignedHourOffset = kr),
        (li.isDST = _r),
        (li.isLocal = br),
        (li.isUtcOffset = Sr),
        (li.isUtc = Mr),
        (li.isUTC = Mr),
        (li.zoneAbbr = oi),
        (li.zoneName = ai),
        (li.dates = M("dates accessor is deprecated. Use date instead.", Qs)),
        (li.months = M("months accessor is deprecated. Use month instead", ct)),
        (li.years = M("years accessor is deprecated. Use year instead", gt)),
        (li.zone = M(
          "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
          gr
        )),
        (li.isDSTShifted = M(
          "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
          xr
        ));
      var hi = P.prototype;

      function fi(e, t, n, r) {
        var s = vn(),
          i = m().set(r, t);
        return s[n](i, e);
      }

      function mi(e, t, n) {
        if ((c(e) && ((t = e), (e = void 0)), (e = e || ""), null != t))
          return fi(e, t, n, "month");
        var r,
          s = [];
        for (r = 0; r < 12; r++) s[r] = fi(e, r, n, "month");
        return s;
      }

      function pi(e, t, n, r) {
        "boolean" == typeof e
          ? (c(t) && ((n = t), (t = void 0)), (t = t || ""))
          : ((n = t = e),
            (e = !1),
            c(t) && ((n = t), (t = void 0)),
            (t = t || ""));
        var s,
          i = vn(),
          o = e ? i._week.dow : 0,
          a = [];
        if (null != n) return fi(t, (n + o) % 7, r, "day");
        for (s = 0; s < 7; s++) a[s] = fi(t, (s + o) % 7, r, "day");
        return a;
      }

      function gi(e, t) {
        return mi(e, t, "months");
      }

      function yi(e, t) {
        return mi(e, t, "monthsShort");
      }

      function vi(e, t, n) {
        return pi(e, t, n, "weekdays");
      }

      function wi(e, t, n) {
        return pi(e, t, n, "weekdaysShort");
      }

      function ki(e, t, n) {
        return pi(e, t, n, "weekdaysMin");
      }
      (hi.calendar = L),
        (hi.longDateFormat = U),
        (hi.invalidDate = J),
        (hi.ordinal = q),
        (hi.preparse = di),
        (hi.postformat = di),
        (hi.relativeTime = Q),
        (hi.pastFuture = ee),
        (hi.set = C),
        (hi.eras = Ts),
        (hi.erasParse = Ys),
        (hi.erasConvertYear = Cs),
        (hi.erasAbbrRegex = Hs),
        (hi.erasNameRegex = Ns),
        (hi.erasNarrowRegex = Is),
        (hi.months = it),
        (hi.monthsShort = ot),
        (hi.monthsParse = lt),
        (hi.monthsRegex = ft),
        (hi.monthsShortRegex = ht),
        (hi.week = Mt),
        (hi.firstDayOfYear = Tt),
        (hi.firstDayOfWeek = Dt),
        (hi.weekdays = Ft),
        (hi.weekdaysMin = Et),
        (hi.weekdaysShort = Gt),
        (hi.weekdaysParse = Bt),
        (hi.weekdaysRegex = Jt),
        (hi.weekdaysShortRegex = Kt),
        (hi.weekdaysMinRegex = Zt),
        (hi.isPM = nn),
        (hi.meridiem = on),
        pn("en", {
          eras: [
            {
              since: "0001-01-01",
              until: 1 / 0,
              offset: 1,
              name: "Anno Domini",
              narrow: "AD",
              abbr: "AD",
            },
            {
              since: "0000-12-31",
              until: -1 / 0,
              offset: 1,
              name: "Before Christ",
              narrow: "BC",
              abbr: "BC",
            },
          ],
          dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
          ordinal: function (e) {
            var t = e % 10;
            return (
              e +
              (1 === ce((e % 100) / 10)
                ? "th"
                : 1 === t
                ? "st"
                : 2 === t
                ? "nd"
                : 3 === t
                ? "rd"
                : "th")
            );
          },
        }),
        (r.lang = M(
          "moment.lang is deprecated. Use moment.locale instead.",
          pn
        )),
        (r.langData = M(
          "moment.langData is deprecated. Use moment.localeData instead.",
          vn
        ));
      var _i = Math.abs;

      function xi() {
        var e = this._data;
        return (
          (this._milliseconds = _i(this._milliseconds)),
          (this._days = _i(this._days)),
          (this._months = _i(this._months)),
          (e.milliseconds = _i(e.milliseconds)),
          (e.seconds = _i(e.seconds)),
          (e.minutes = _i(e.minutes)),
          (e.hours = _i(e.hours)),
          (e.months = _i(e.months)),
          (e.years = _i(e.years)),
          this
        );
      }

      function bi(e, t, n, r) {
        var s = Tr(t, n);
        return (
          (e._milliseconds += r * s._milliseconds),
          (e._days += r * s._days),
          (e._months += r * s._months),
          e._bubble()
        );
      }

      function Si(e, t) {
        return bi(this, e, t, 1);
      }

      function Mi(e, t) {
        return bi(this, e, t, -1);
      }

      function $i(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e);
      }

      function Di() {
        var e,
          t,
          n,
          r,
          s,
          i = this._milliseconds,
          o = this._days,
          a = this._months,
          l = this._data;
        return (
          (i >= 0 && o >= 0 && a >= 0) ||
            (i <= 0 && o <= 0 && a <= 0) ||
            ((i += 864e5 * $i(Yi(a) + o)), (o = 0), (a = 0)),
          (l.milliseconds = i % 1e3),
          (e = ue(i / 1e3)),
          (l.seconds = e % 60),
          (t = ue(e / 60)),
          (l.minutes = t % 60),
          (n = ue(t / 60)),
          (l.hours = n % 24),
          (o += ue(n / 24)),
          (a += s = ue(Ti(o))),
          (o -= $i(Yi(s))),
          (r = ue(a / 12)),
          (a %= 12),
          (l.days = o),
          (l.months = a),
          (l.years = r),
          this
        );
      }

      function Ti(e) {
        return (4800 * e) / 146097;
      }

      function Yi(e) {
        return (146097 * e) / 4800;
      }

      function Ci(e) {
        if (!this.isValid()) return NaN;
        var t,
          n,
          r = this._milliseconds;
        if ("month" === (e = re(e)) || "quarter" === e || "year" === e)
          switch (
            ((t = this._days + r / 864e5), (n = this._months + Ti(t)), e)
          ) {
            case "month":
              return n;
            case "quarter":
              return n / 3;
            case "year":
              return n / 12;
          }
        else
          switch (((t = this._days + Math.round(Yi(this._months))), e)) {
            case "week":
              return t / 7 + r / 6048e5;
            case "day":
              return t + r / 864e5;
            case "hour":
              return 24 * t + r / 36e5;
            case "minute":
              return 1440 * t + r / 6e4;
            case "second":
              return 86400 * t + r / 1e3;
            case "millisecond":
              return Math.floor(864e5 * t) + r;
            default:
              throw new Error("Unknown unit " + e);
          }
      }

      function Oi() {
        return this.isValid()
          ? this._milliseconds +
              864e5 * this._days +
              (this._months % 12) * 2592e6 +
              31536e6 * ce(this._months / 12)
          : NaN;
      }

      function Pi(e) {
        return function () {
          return this.as(e);
        };
      }
      var Ai = Pi("ms"),
        Li = Pi("s"),
        Ni = Pi("m"),
        Hi = Pi("h"),
        Ii = Pi("d"),
        Wi = Pi("w"),
        Ri = Pi("M"),
        Fi = Pi("Q"),
        Gi = Pi("y");

      function Ei() {
        return Tr(this);
      }

      function ji(e) {
        return (e = re(e)), this.isValid() ? this[e + "s"]() : NaN;
      }

      function Bi(e) {
        return function () {
          return this.isValid() ? this._data[e] : NaN;
        };
      }
      var zi = Bi("milliseconds"),
        Ui = Bi("seconds"),
        Vi = Bi("minutes"),
        Ji = Bi("hours"),
        Ki = Bi("days"),
        Zi = Bi("months"),
        qi = Bi("years");

      function Xi() {
        return ue(this.days() / 7);
      }
      var Qi = Math.round,
        eo = {
          ss: 44,
          s: 45,
          m: 45,
          h: 22,
          d: 26,
          w: null,
          M: 11,
        };

      function to(e, t, n, r, s) {
        return s.relativeTime(t || 1, !!n, e, r);
      }

      function no(e, t, n, r) {
        var s = Tr(e).abs(),
          i = Qi(s.as("s")),
          o = Qi(s.as("m")),
          a = Qi(s.as("h")),
          l = Qi(s.as("d")),
          u = Qi(s.as("M")),
          c = Qi(s.as("w")),
          d = Qi(s.as("y")),
          h =
            (i <= n.ss && ["s", i]) ||
            (i < n.s && ["ss", i]) ||
            (o <= 1 && ["m"]) ||
            (o < n.m && ["mm", o]) ||
            (a <= 1 && ["h"]) ||
            (a < n.h && ["hh", a]) ||
            (l <= 1 && ["d"]) ||
            (l < n.d && ["dd", l]);
        return (
          null != n.w && (h = h || (c <= 1 && ["w"]) || (c < n.w && ["ww", c])),
          ((h = h ||
            (u <= 1 && ["M"]) ||
            (u < n.M && ["MM", u]) ||
            (d <= 1 && ["y"]) || ["yy", d])[2] = t),
          (h[3] = +e > 0),
          (h[4] = r),
          to.apply(null, h)
        );
      }

      function ro(e) {
        return void 0 === e ? Qi : "function" == typeof e && ((Qi = e), !0);
      }

      function so(e, t) {
        return (
          void 0 !== eo[e] &&
          (void 0 === t
            ? eo[e]
            : ((eo[e] = t), "s" === e && (eo.ss = t - 1), !0))
        );
      }

      function io(e, t) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var n,
          r,
          s = !1,
          i = eo;
        return (
          "object" == typeof e && ((t = e), (e = !1)),
          "boolean" == typeof e && (s = e),
          "object" == typeof t &&
            ((i = Object.assign({}, eo, t)),
            null != t.s && null == t.ss && (i.ss = t.s - 1)),
          (r = no(this, !s, i, (n = this.localeData()))),
          s && (r = n.pastFuture(+this, r)),
          n.postformat(r)
        );
      }
      var oo = Math.abs;

      function ao(e) {
        return (e > 0) - (e < 0) || +e;
      }

      function lo() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e,
          t,
          n,
          r,
          s,
          i,
          o,
          a,
          l = oo(this._milliseconds) / 1e3,
          u = oo(this._days),
          c = oo(this._months),
          d = this.asSeconds();
        return d
          ? ((e = ue(l / 60)),
            (t = ue(e / 60)),
            (l %= 60),
            (e %= 60),
            (n = ue(c / 12)),
            (c %= 12),
            (r = l ? l.toFixed(3).replace(/\.?0+$/, "") : ""),
            (s = d < 0 ? "-" : ""),
            (i = ao(this._months) !== ao(d) ? "-" : ""),
            (o = ao(this._days) !== ao(d) ? "-" : ""),
            (a = ao(this._milliseconds) !== ao(d) ? "-" : ""),
            s +
              "P" +
              (n ? i + n + "Y" : "") +
              (c ? i + c + "M" : "") +
              (u ? o + u + "D" : "") +
              (t || e || l ? "T" : "") +
              (t ? a + t + "H" : "") +
              (e ? a + e + "M" : "") +
              (l ? a + r + "S" : ""))
          : "P0D";
      }
      var uo = or.prototype;
      return (
        (uo.isValid = sr),
        (uo.abs = xi),
        (uo.add = Si),
        (uo.subtract = Mi),
        (uo.as = Ci),
        (uo.asMilliseconds = Ai),
        (uo.asSeconds = Li),
        (uo.asMinutes = Ni),
        (uo.asHours = Hi),
        (uo.asDays = Ii),
        (uo.asWeeks = Wi),
        (uo.asMonths = Ri),
        (uo.asQuarters = Fi),
        (uo.asYears = Gi),
        (uo.valueOf = Oi),
        (uo._bubble = Di),
        (uo.clone = Ei),
        (uo.get = ji),
        (uo.milliseconds = zi),
        (uo.seconds = Ui),
        (uo.minutes = Vi),
        (uo.hours = Ji),
        (uo.days = Ki),
        (uo.weeks = Xi),
        (uo.months = Zi),
        (uo.years = qi),
        (uo.humanize = io),
        (uo.toISOString = lo),
        (uo.toString = lo),
        (uo.toJSON = lo),
        (uo.locale = os),
        (uo.localeData = ls),
        (uo.toIsoString = M(
          "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
          lo
        )),
        (uo.lang = as),
        F("X", 0, 0, "unix"),
        F("x", 0, 0, "valueOf"),
        Le("x", Ye),
        Le("X", Pe),
        Re("X", function (e, t, n) {
          n._d = new Date(1e3 * parseFloat(e));
        }),
        Re("x", function (e, t, n) {
          n._d = new Date(ce(e));
        }),
        //! moment.js
        (r.version = "2.29.1"),
        s(Kn),
        (r.fn = li),
        (r.min = Qn),
        (r.max = er),
        (r.now = tr),
        (r.utc = m),
        (r.unix = ui),
        (r.months = gi),
        (r.isDate = d),
        (r.locale = pn),
        (r.invalid = v),
        (r.duration = Tr),
        (r.isMoment = b),
        (r.weekdays = vi),
        (r.parseZone = ci),
        (r.localeData = vn),
        (r.isDuration = ar),
        (r.monthsShort = yi),
        (r.weekdaysMin = ki),
        (r.defineLocale = gn),
        (r.updateLocale = yn),
        (r.locales = wn),
        (r.weekdaysShort = wi),
        (r.normalizeUnits = re),
        (r.relativeTimeRounding = ro),
        (r.relativeTimeThreshold = so),
        (r.calendarFormat = Gr),
        (r.prototype = li),
        (r.HTML5_FMT = {
          DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
          DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
          DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
          DATE: "YYYY-MM-DD",
          TIME: "HH:mm",
          TIME_SECONDS: "HH:mm:ss",
          TIME_MS: "HH:mm:ss.SSS",
          WEEK: "GGGG-[W]WW",
          MONTH: "YYYY-MM",
        }),
        r
      );
    })();
  });

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

  function Fn(e) {
    let t, n, r, s;
    const i = [Rn, Wn, In, Hn, MLn],
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
          (An.title = artist + " Heardle Infinite"),
          M(t, "name", "description"),
          M(
            t,
            "content",
            "Guess the " +
              artist +
              " song from the intro in as few tries as possible"
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
    u(e, Cn, (e) => n(26, (r = [...musicNameList]))),
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
    } else {
      if (firstLoad) {
        h = [];
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
        // console.log("current song", l);
        n(2, (l.artist = l.correctAnswer.split(" - ")[1]), l),
          n(2, (l.title = l.correctAnswer.split(" - ")[0]), l),
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
        r ||
          t != l.correctAnswer ||
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
