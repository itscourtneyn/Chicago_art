let art;
let showArtInfo;


/**
 * 
 * @param img_index 
 * @param info_index 
 */

async function  clickedEvent(img_index, info_index) {
    let elem = document.getElementsByTagName('img')[img_index]
    let id = elem.attributes[2].value;

    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json']
      ]);


    let request = new Request(`https://api.artic.edu/api/v1/artworks/${id}?fields=title,artist_display,date_display,artist_titles,place_of_origin`, {
        method: 'GET', 
        headers: headers
    });

    let result = await fetch(request);
    let response = await result.json();
    console.log(response);

    if (showArtInfo) {
        stopShow();
    } else {
        let showInfo = document.getElementById("showinfo")
        let title = response.data.title
        let artist = response.data['artist_titles']
        let display = response.data['artist_display']
        let date = response.data['date_display']
        let origin = response.data['place_of_origin']
        showInfo.innerHTML = `Title: ${title}<br>Artist: ${artist}<br>Display Date: ${date}<br>Artist Display: ${display}<br>Place of Origin: ${origin}`;
    }
}

/**
 * 
 * @param id
 * @param event 
 */

function getInfo(id, event) {
    switch(id){
        case 'fig1': { 
            event.stopPropagation();
            clickedEvent(0,0)
            break;
        }
        case 'fig2': { 
            event.stopPropagation();
            clickedEvent(1,0)
            break;
        }
        case 'fig3': { 
            event.stopPropagation();
            clickedEvent(2,0)
            break;
        }
        case 'fig4': { 
            event.stopPropagation();
            clickedEvent(3,0)
            break;
        }
        case 'fig5': { 
            event.stopPropagation();
            clickedEvent(4,0)
            break;
        }
        case 'fig6': { 
            event.stopPropagation();
            clickedEvent(5,0)
            break;
        }
        case 'fig7': { 
            event.stopPropagation();
            clickedEvent(6,0)
            break;
        }
        case 'fig8': { 
            event.stopPropagation();
            clickedEvent(7,0)
            break;
        }
    }
}

