export const animationName = {
    gitFadeIn : "fadeInGit 3s ease-in forwards",
    gitFadeOut : "fadeOutGit 3s ease-in forwards",
    linkedinFadeIn : "fadeInLinkedin 3s ease-in forwards",
    linkedinFadeOut : "fadeOutLinkedin 3s ease-in forwards"
}

export const links = {
    git: "https://github.com/bjmgales",
    linkedin: "https://linkedin.com/in/benjamin-gales-767873276",
    fortytwo: "https://www.42network.org/"
}

export const myDoc = [
    {
        title: "MY DOCUMENTS",
        submenu: [
            {
                title: "Resumee",
                submenu: [
                    {
                        title: "English resumee",
                        subtext: "My resumee in Common tongue",
                        link: "./src/assets/mydoc/Cv-en.pdf"
                    },
                    {
                        title: "French resumee",
                        subtext: "My resumee in 🥖",
                        link: "./src/assets/mydoc/Cv-fr.pdf"
                    }
                ]
            },
            {
                title: "Cover letter",
                submenu: [
                    {
                        title: "English cover letter",
                        subtext: "My cover letter in Common tongue",
                        link: "./src/assets/mydoc/Motiv-en.pdf"
                    },
                    {
                        title: "French cover letter",
                        subtext: "My cover letter in 🥖",
                        link: "./src/assets/mydoc/Motiv-fr.pdf"
                    }
                ]
            }
        ],

    }
]
export const myProj =
[
    {
        title: "MY PROJECTS",
        submenu: [
            {
                title:"C",
                submenu:[
                    {
                        title: "So long",
                        subtext: "A 2D game.",
                        steps: [
                            {
                                title: "Step 1",
                                subTitle: "Compile Minilibx",
                                description: "This project was done using the graphical library minilibx.\n\
                                In order to run the project, you will need to compile the minilibx first.",
                                video: "compile-mlx-sl"
                            },
                            {
                                title: "Step 2",
                                subTitle: "Compile So Long",
                                description: "Now that you successfully compiled the minilibx, you need \
                                to compile the game !",
                                video: "compile-so-long"
                            },
                            {
                                title: "Step 3",
                                subTitle: "Run the executable",
                                description: "Everything is setup, you're about to witness one of\
                                the greatest gaming experience ever made.\n\n Ready ? Buckle up.",
                                video: "run-so-long"
                            },
                            {
                                title: "About",
                                subTitle: "More about So Long",
                                description: "So Long is one of the first projects in the 42 common core.\n\
                                From where I am now, it seems like an easy ride. But by the time, it was quite challenging.\n\
                                Understanding how the graphical library works, the MinilibX, was a true nightmare.\n\
                                But it was definitely a funny project to do, with Cub3D and Transcendence, it's one of the few project \
                                at 42 where there's actually something visual displayed on screen. And since you're 100% free on the theme and assets you're using,\
                                the result is really enjoyable.",
                                video: "so-long"
                            },
                        ],
                        macLinuxOnly : true,
                        link: "So long",
                        github: "https://github.com/bjmgales/So_long.git"
                    },
                    {
                        title: "Cub3D",
                        subtext:"A raycasted game.",
                        steps: [
                            {
                                title: "Step 1",
                                subTitle: "Compile Cub3D",
                                description: "Contrarely to the So Long project, you don't need to compile the minilibx yourself.\
                                \nBy the time I made Cub3D, my skills in makefile skyrocketted, you now only need to «make» only once.\
                                \nThis is a testimony of progress. This is my legacy.\
                                This is John Cena.\n\n⚠️ Please compile using «make bonus» for the full experience ⚠",
                                video: "compile-cub3d"
                            },
                            {
                                title:"Step 2",
                                subTitle: "Run the executable.",
                                description: "Everything is setup, you're about to witness one of\
                                the greatest gaming experience ever made. Ready ? Buckle up.",
                                video: "run-cub3d"
                            },
                            {
                                title: "About",
                                subTitle: "More about Cub3D",
                                description: "Cub3D is the last C project of 42 common core.\n When you get to this point you are like «Oh my god finally I will do C++».\
                                \nBecause : YES, C is a pain in the ... , but learning to code with C makes you understand programming's fundamentals that you \
                                would'nt nescessary get if you went straight up for the newest programming languages and frameworks. \n\
                                Cub3D was a group project, made with former lumberjack (yes, lumberjack), Ctardy.\n He made most of the Ray Casting when I did the parsing\
                                and leaks fixing.\n\
                                If you ever read this Ctardy, know that this group project was the smoothest cooperation I had during the common core, truely enjoyed working with you.",
                                video: "cub3d"
                            },
                        ],

                        macLinuxOnly: true,
                        link: "Cub3D",
                        github: "https://github.com/bjmgales/cub3d.git"
                    },
                    {
                        title: "Minishell",
                        subtext:"As cute as a shell",
                        steps: [
                            {
                                title: "Step 1",
                                subTitle: "Install readline",
                                description: "This is the tedious part.\nBut first, you may try Step 3. If you are lucky enough,\
                                 everything is already set-up.\nMacOs: brew install readline\n Linux: sudo apt-get install libreadline-dev",
                                video: "install-readline",
                            },
                            {
                                title: "Step 2",
                                subTitle: "Add readline path",
                                description: "Now that you downloaded readline,\
                                 you must add the include and lib paths to the Makefile.",
                                video: "add-readline-path"
                            },
                            {
                                title: "Step 3",
                                subTitle: "Compile Minishell",
                                description: "Readline is finally set-up, if everything went well to\
                                 this point, you should now be able to compile Minishell!",
                                video: "compile-minishell"
                            },
                            {
                                title: "Step 4",
                                subTitle: "Run Minishell",
                                description: "Last step to run this if-it-wasnt-existing-we-should-invent-it of a shell : well, run it !",
                                video: "run-minishell"
                            },
                            {
                                title: "About",
                                subTitle: "More about Minishell",
                                description: "Minishell is the most popular project at 42.\n Not that people really like doing it. I mean some do,\
                                 I kind of did, but it's a true milestone of the common core. Like the first boss of a video game. When starting 42 \
                                 and seeing people doing Minishell, I though «Ok I'am not doing that», it really seemed too complex.\
                                 I mean you always have this kind of feeling when starting a new project, but Minishell emphasized it.\n\
                                 I made this project with Aguiri, seeing his code really made me progress, it was well-organized and structured, probably because\
                                 he got a nuclear physicist degree or something.\nI made the lexer and parsing, while Aguiri did the command execution. We both made the builtins \
                                 command and signals.",
                                video: "minishell"
                            },
                        ],
                        macLinuxOnly: true,
                        link: "Minishell",
                        github:"https://github.com/bjmgales/42_minishell.git"

                    },
                ]
            },
            {
                title:"C++",
                submenu:[
                    {
                        title: "IRC",
                        subtext:"Discord wasn't good enough.",
                        steps: [
                            {
                                title: "Step 1",
                                subTitle: "Install an IRC Client.",
                                description: "Depending on your OS, the client you'll install might vary.\nFYI this project was made with hexchat, linux only. \
                                \nOn MacOS, you can have an easy run with LimeChat.\nFor Windows users, Anakin you were the chosen one, I don't own a windows laptop\
                                so you will have to find what works best.\n",
                                video: "dl-irc-client"
                            },
                            {
                                title: "Step 2",
                                subTitle: "Compile and Run ft_irc",
                                description: "Now that you downloaded your IRC client, you have to compile and run the project.\n\
                                As usual, compile the project using the makefile and run the executable with ports and server password as arguments.",
                                video: "compile-run-irc"
                            },
                            {
                                title: "Step 3",
                                subTitle: "Connect to the server with your client",
                                description: "Now that everything is setup, you'll just have to connect to localhost using the port and password you chose. \n\
                                Once connected, you can create lobby, join existing one (spoiler : they are none, you're alone on the server)\
                                or spend some time enjoying a nice conversation with the server official chatbot : Gipiti !",
                                video: "run-irc"
                            },
                            {
                                title: "About",
                                subTitle: "More about IRC",
                                description: "You might think «IRC is kind of outdated». You are perfectly right.\n\
                                But nevertheless, IRC is a cool project to do : IF YOU CHOSE A GOOD CLIENT.\n\
                                If you ever plan on creating an IRC server (who knows) don't ever EVER even think of using HexChat.\
                                I mean, really, please : don't do that.\nBut more seriously, this project was okay, creating commands,\
                                handling user admin rights and more importantly multiplexing and home-made server creation was interesting.\n I made this project with\
                                 Pory and Pcapurro. we all did a bit of everything : creating a server, handling unexpected disconnection, fd monitoring (aka multiplexing), commands, chatbot...",
                                video: "irc"
                            },
                        ],

                        link: "IRC",
                        github: "https://github.com/bjmgales/ft_irc"
                    },
                    {
                        title: "Piscine C++",
                        subtext:"Wild functions & programs",
                        steps: [
                            {
                                title: "Step 1",
                                subTitle: "Run project and check usage",
                                description: "This project is a bit special, since it's a gathering of programs, algorithms and functions.\n\
                                In order to run one of the exercices, you will need to use it's Makefile. \nThen, if the projects need special arguments \
                                an error message will provide you the information on how to run the project. \n Most of the exercises here have premade test\
                                but you are free to create new ones !",
                                video: "cpp-piscine"

                            },
                            {
                                title: "Best Of",
                                subTitle: "The best exercices",
                                description: "Since there's A LOT of exercices in this project, let me pick for you the ones that I personally liked the most.\n\
                                On the tutorial video, you will find the paths to my favorite exercices, under the tree command, completed with a short summary of what the exercise is about.",
                                video: "best-of-cpp"
                            },
                            {
                                title: "About",
                                subTitle: "More about the C++ piscine",
                                description: "It's a new dawn, it's a new day, it's a new life for me.\nYes, finally we're doing C++. A lot of new syntax and\
                                 functionnality and «oh my god those String variables are so easy to use, I don't have to malloc everytime I write something longer than a letter».\
                                 Yes, C++ felt fresh, felt new, felt good.",
                                video: "cpp"
                            },
                        ],
                        link: "Piscine C++",
                        github: "https://github.com/bjmgales/CPP.git"
                    },
                ]
            },
            {
                title:"Web",
                submenu:[
                    {
                        title: "Transcendence",
                        subtext:"Metal Gear Pong Experience.",
                        steps: [
                            {
                                title: "Step 1",
                                subTitle:"Install and run Docker",
                                description: "Since you are here, you probably know how Docker works, and you certainly already have it installed on your computer.\n\
                                But for the sake of science: the tutorial video is for MacOsx, but you'll have no trouble finding how to install docker either on Linux or Windows.\n",
                                video:"install-docker"
                            },
                            {
                                title:"Step 2",
                                subTitle: "Run docker-compose",
                                description: " Now that docker is installed on your computer, get into the Transcendence directory, and run docker-compose.\n\
                                This might take a while, go get a coffee.",
                                video: "docker-start"
                            },
                            {
                                title:"Step 3",
                                subTitle: "Get on the website",
                                description: "Now that everithing is setup, all you have to do is connect to :\n\n\
                                https://127.0.0.1:1025/\n\nYou'll just have to accept the SSL certificate (yes, it is self-signed, I didn't pay for that).",
                                video: "run-transcendence"
                            },
                            {
                                title: "About",
                                subTitle: "More about Trasnscendence",
                                description: "The common core mastodont, The project, The challenge.\n\
                                Transcendence was quite the ride. Made in cooperation with Pcapurro, that you can also find on the IRC project,\
                                transcendence was really the right challenge to end our common core. It cames with a lot of new things : html, css, javascript. These are all\
                                languages that we never used during our training, and now we must make an online multiplayer pong game website. Quite challenging.\n\
                                I could go for an entire page about Transcendence, but to be short, for the biggest section: pcapurro and I  both made the  UI, the accessibility (that is truely hell),\
                                the RGPD and data-anonymization. Pcapurro made the game, the game statistics and the game customization. I made the 42 API authentification, the python-django \
                                backend and the  p2p multiplayer (that you sadly won't be able to use unless you own a 42 account).\
                                Transcendence was quite the ride. Made in cooperation with Pcapurro, that you can also find on the IRC project,\
                                transcendence was really the right challenge to end our common core. It cames with a lot of new things : html, css, javascript. These are all\
                                languages that we never used during our training, and now we must make an online multiplayer pong game website. Quite challenging.\n\
                                I could go for an entire page about Transcendence, but to be short, for the biggest section: pcapurro and I  both made the  UI, the accessibility (that is truely hell),\
                                the RGPD and data-anonymization. Pcapurro made the game, the game statistics and the game customization. I made the 42 API authentification, the python-django \
                                backend and the  p2p multiplayer (that you sadly won't be able to use unless you own a 42 account).",
                                video: "transcendence"
                            },
                        ],

                        link: "Transcendence",
                        github:"https://github.com/bjmgales/ft_transcendence.git"
                    }
                ]
            }
        ]
    }
]