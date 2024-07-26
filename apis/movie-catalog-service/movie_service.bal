import ballerina/http;

type Catergory record {
    string catergoryId;
    string catergoryName;
    json[] resources;
};

service /movies on new http:Listener(9090) {
    resource function get categories() returns Catergory[]|error {
        Catergory[] movieCategories = [
            {
                "catergoryId": "trending",
                "catergoryName": "Trending",
                "resources": [
                    {
                        "id": "23r23r23rwt",
                        "name": "One piece",
                        "image": "https://www.toei-animation.com/wp-content/uploads/2019/02/one_piece_product.jpg",
                        "description": "Adventures of Monkey D. Luffy and his pirate crew in search of the legendary treasure."
                    },
                    {
                        "id": "23r23r23rwt",
                        "name": "Demon slayer",
                        "image": "https://www.sheknows.com/wp-content/uploads/2024/03/how-to-watch-demon-slayer-season-4-FI.jpg",
                        "description": "A young boy who becomes a demon slayer after his family is slaughtered by demons."
                    },
                    {
                        "id": "23r23r23rwt",
                        "name": "Jujutsu kaisen",
                        "image": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F12%2Fgege-akutami-jujutsu-kaisen-manga-end-in-year-announcement-info-0.jpg?cbr=1&q=90",
                        "description": "A story of a high school student who joins a secret organization of sorcerers."
                    },
                    {
                        "id": "23r23r23rwt",
                        "name": "Spy × Family",
                        "image": "https://static.bandainamcoent.eu/high/spyxfamily/spyxanya-operation-memories/00-page-setup/BOND-header-mobile.jpg",
                        "description": "Centers on the spy Twilight, who must create a fake family to infiltrate an elite school."
                    },
                    {
                        "id": "23r23r23rwt",
                        "name": "Castlevania",
                        "image": "https://e0.pxfuel.com/wallpapers/334/965/desktop-wallpaper-fantasy-castlevania-alucard-sypha-belnades-trevor-belmont-jen-santos-alucard-castlevania.jpg",
                        "description": "Dark fantasy series on Trevor Belmont, the last surviving member of the Belmont clan."
                    }
                ]

            },
            {
                "catergoryId": "recommended",
                "catergoryName": "Recommended",
                "resources": [
                    {
                        "id": "23r23r23rwt",
                        "name": "Arcane",
                        "image": "https://images.hdqwalls.com/download/jinx-in-arcane-kd-2560x1700.jpg",
                        "description": "Explores the origins of two iconic League of Legends champions."
                    },
                    {
                        "id": "23r23r23rwt",
                        "name": "Blue Eye Samurai",
                        "image": "https://images.alphacoders.com/134/1346645.png",
                        "description": "A young boy who becomes a demon slayer after his family is slaughtered by demons."
                    },
                    {
                        "id": "23r23r23rwt",
                        "name": "Tokyo revengers",
                        "image": "https://images2.alphacoders.com/133/1336179.jpeg",
                        "description": "Features Takemichi's time-traveling quest to save his girlfriend."
                    },
                    {
                        "id": "23r23r23rwt",
                        "name": "Blue lock",
                        "image": "https://w0.peakpx.com/wallpaper/690/421/HD-wallpaper-anime-blue-lock-bachira-meguru-chigiri-hyouma.jpg",
                        "description": "Showcases Yoichi Isagi's journey through an intense soccer training program."
                    },
                    {
                        "id": "23r23r23rwt",
                        "name": "Cyberpunk",
                        "image": "https://img.goodfon.com/original/2560x1307/d/75/sci-fi-thriller-anime-streaming-television-series-2022-netfl.jpg",
                        "description": "Tells the story of David Martinez, a street kid aiming to survive."
                    }
                ]
            }
        ];

        return movieCategories;
    }
}
