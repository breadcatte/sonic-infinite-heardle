# etrian-infinite-heardle

A clone of [Heardle](https://www.heardle.app/), and [K-Pop Heardle](https://heardle-kpop.glitch.me/) which can be played infinitely and with Etrian Odyssey's musics. Based on [Joywave Heardle](https://joywave-heardle.glitch.me/)

Each music is randomly chosen from Etrian Odyssey's soundtrack. The code for the volume bar come from [Video Games Infinite Heardle](https://keraloon.github.io/infinitevideogame/).

code edited from: [WJSN Heardle](https://github.com/jeroldcamacho/wjsn-heardle)
<br />
<br />
HOW TO RUN INFINITE HEARDLE LOCALLY:
Open **index.html** with your browser (Firefox, Chromium)
<br />
<br />
HOW TO MAKE YOUR OWN INFINITE HEARDLE (UDPATED on **2026/01/09**)
(If you want an infinite heardle that includes translations you can check the readme of [Pokémon Infinite Heardle](https://github.com/nterrien/pkmn-infinite-heardle))

1. **Fork this project** to create your own copy of the code
2. **Rename the project** with the URL that you'd like to Heardle to live at, by going to **Settings > Repository name**
3. Use Github as host by going to **Settings > Pages**. In Source, choose "Deploy from a branch" and in branch choose "master".
4. Open the **index.html** file & replace **"Etrian Odyssey"** with the artist/genre of your heardle.
5. In the **index.html** file, you can update the image that gets shared with your link by updating lines **18-27**.
6. You can update the icon in your browser's tab by updating the favicon.png image.
7. On line **2** of **main.js** file and update **artist** with the **artist/genre** of your heardle - This will update all the text boxes & titles where "Etrian Odyssey" shows up up
8. On line **2** of **music-list.js**, "const **allTags**" is initialized. It allows to use a tag system to filter musics. You can replace them with [] if you don't want to use tags.
9. On line **5** of **music-list.js**, "var **musicNameList**" is initialized. Replace the text with a list of {id: number, name: "music title"}, name being the music titles that you want to show up as options in your Heardle and id an unique number for the music. Music titles should follow the format **"music - Artist/Game".** Make sure each music is in quotes and has a comma after it.
10. On line **1** of **music-links.js**, "var **musicListWithLinks**" is initialized. Here you'll have to replace the links with links to your musics. Only Soundcloud links at the moment. Each link will have to follow the following format: **`{ url: "<link>", answer: id of the music },`**. Make sure to have **at least 10 musics** in your lists otherwise you'll run into issues with the search bar!
11. If you want to edit the text in the **info button (About)** on the top left, in **main.js**, around **line 4066**, you can update the text that shows up there. Search for **"A clone of..."** to find the line easier.
12. If you want to edit the text in the **heart button** next to the info button, in **main.js**, around **line 4543**, you can update the text that shows up there. Search for **"Have questions..."** to find the line easier.

**KNOWN ISSUES**

- This code is specific to Soundcloud links.

  - There is a [youtube](https://glitch.com/~youtube-heardle-template) \[NOTE: this link doesn't work anymore\] version, but its very basic and may have bugs; youtube links can be weird depending on your location, so it messes things up.

  - If you want to use a Spotify playlist, visit [https://audial.mogdan.xyz/custom](https://audial.mogdan.xyz/custom). You'll be able to add a link to your playlist and it seems to work similarly to Heardle.
