export function navigation(setHideHome, setHidePage, setChangePage){
    const path = window.location.pathname;

    console.log(path)
    switch (path){
        case '/':
            setHideHome(false)
            setHidePage(true);
            setChangePage({change: false, name: ''})
            return;

        case '/assets/mydoc/Cv-fr.pdf':
          setChangePage({
              change: true,
              name: "/assets/mydoc/Cv-fr.pdf"
          })
          setHideHome(true);
          return;

        case '/assets/mydoc/Cv-en.pdf':
            setChangePage({
                    change: true,
                    name: "/assets/mydoc/Cv-en.pdf"
            })
            setHideHome(true);
          return;

        case '/assets/mydoc/Motiv-fr.pdf':
            setChangePage({
                change: true,
                name: "/assets/mydoc/Motiv-fr.pdf"
            })
            setHideHome(true);
          return;

        case '/assets/mydoc/Motiv-en.pdf':
            setChangePage({
                change: true,
                name: "/assets/mydoc/Motiv-en.pdf"
            })
            setHideHome(true);
          return;

        case '/Solong':
            setChangePage({
                change: true,
                name: "So long"
            })
            setHidePage(false);
            setHideHome(true);
          return;

        case '/Minishell':
            setChangePage({
                change: true,
                name: "Minishell"
            })
            setHideHome(true);
          return;

        case '/Cub3D':
            setChangePage({
                change: true,
                name: "Cub3D"
            })
            setHideHome(true);
          return;

        case '/PiscineC++':
            setChangePage({
                change: true,
                name: "Piscine C++"
            })
            setHideHome(true);
          return;

        case '/IRC':
            setChangePage({
                change: true,
                name: "IRC"
            })
            setHideHome(true);
          return;

        case '/Transcendence':
            setChangePage({
                change: true,
                name: "Transcendence"
            })
            setHideHome(true);
          return;
    }
}

export function pushHistory(path){
    console.log('win=', window.location.pathname, 'path=' ,path)
    if (window.location.pathname === path)
        return
    else
        history.pushState(null, '', path);
}