const genres = [
    "Comedy",
    "Fantasy",
    "Crime",
    "Drama",
    "Music",
    "Adventure",
    "History",
    "Thriller",
    "Animation",
    "Family",
    "Mystery",
    "Biography",
    "Action",
    "Film-Noir",
    "Romance",
    "Sci-Fi",
    "War",
    "Western",
    "Horror",
    "Musical",
    "Sport"]

export const movieData = [
    {
        nombre: 'John Wick',
        video: 'yjRHZEUamCc',
        img: 'https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_FMjpg_UY6001_.jpg',
        sinopsis: 'Después de los eventos de Spider-Man No Way Home, el Doctor Strange, sin darse cuenta, lanza un hechizo prohibido que accidentalmente abre el multiverso. Con la ayuda de Wong y Scarlet Witch, Strange se enfrenta a varias versiones de sí mismo y se une al joven América Chavez mientras viaja a través de varias realidades y trabaja para restaurar la realidad tal como la conoce. En el camino, Strange y sus aliados se dan cuenta de que deben enfrentarse a un nuevo y poderoso adversario que busca apoderarse del multiverso.',
        reparto: 'Benedict Cumberbatch, Elizabeth Olsen, Chiwetel Ejiofor',
        direccion: 'Sam Raimi',
        guion: 'Michael Waldron, Stan Lee,Steve Ditko',
        generos: 'Acción, Aventura, Fantasía, Terror, Ciencia ficción'
    },
    {
        nombre: 'Doctor Strange en el multiverso de la locura',
        video: 'cFHjZfy50Kk',
        img: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81eZzxbS3mL.jpg',
        sinopsis: 'Después de los eventos de Spider-Man No Way Home, el Doctor Strange, sin darse cuenta, lanza un hechizo prohibido que accidentalmente abre el multiverso. Con la ayuda de Wong y Scarlet Witch, Strange se enfrenta a varias versiones de sí mismo y se une al joven América Chavez mientras viaja a través de varias realidades y trabaja para restaurar la realidad tal como la conoce. En el camino, Strange y sus aliados se dan cuenta de que deben enfrentarse a un nuevo y poderoso adversario que busca apoderarse del multiverso.',
        reparto: 'Benedict Cumberbatch, Elizabeth Olsen, Chiwetel Ejiofor',
        direccion: 'Sam Raimi',
        guion: 'Michael Waldron, Stan Lee,Steve Ditko',
        generos: 'Acción, Aventura, Fantasía, Terror, Ciencia ficción'
    },
    {
        nombre: 'Los juegos del hambre',
        video: '_8Ktfs2mBDY',
        img: 'https://akns-images.eonline.com/eol_images/Entire_Site/2014810/rs_634x971-140910121501-634.mockingjay.cm.91114.jpg?fit=around%7C634:971&output-quality=90&crop=634:971;center,top',
        sinopsis: 'Después de los eventos de Spider-Man No Way Home, el Doctor Strange, sin darse cuenta, lanza un hechizo prohibido que accidentalmente abre el multiverso. Con la ayuda de Wong y Scarlet Witch, Strange se enfrenta a varias versiones de sí mismo y se une al joven América Chavez mientras viaja a través de varias realidades y trabaja para restaurar la realidad tal como la conoce. En el camino, Strange y sus aliados se dan cuenta de que deben enfrentarse a un nuevo y poderoso adversario que busca apoderarse del multiverso.',
        reparto: 'Benedict Cumberbatch, Elizabeth Olsen, Chiwetel Ejiofor',
        direccion: 'Sam Raimi',
        guion: 'Michael Waldron, Stan Lee,Steve Ditko',
        generos: 'Acción, Aventura, Fantasía, Terror, Ciencia ficción'
    },
    {
        id: 2,
        nombre: "The Cotton Club",
        video:"T7m4F5GlS5Q",
        year: "1984",
        runtime: "127",
        generos: [
            "Crime",
            "Drama",
            "Music"
        ],
        direccion: "Francis Ford Coppola",
        reparto: "Richard Gere, Gregory Hines, Diane Lane, Lonette McKee",
        sinopsis: "The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg"
    },
    {
        id: 4,
        nombre: "Crocodile Dundee",
        video:"_eED8IAv_Ac",
        year: "1986",
        runtime: "97",
        generos: [
            "Adventure",
            "Comedy"
        ],
        direccion: "Peter Faiman",
        reparto: "Paul Hogan, Linda Kozlowski, John Meillon, David Gulpilil",
        sinopsis: "An American reporter goes to the Australian outback to meet an eccentric crocodile poacher and invites him to New York City.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg"
    },
    {
        id: 6,
        nombre: "Ratatouille",
        video:"3YG4h5GbTqU",
        year: "2007",
        runtime: "111",
        generos: [
            "Animation",
            "Comedy",
            "Family"
        ],
        direccion: "Brad Bird, Jan Pinkava",
        reparto: "Patton Oswalt, Ian Holm, Lou Romano, Brian Dennehy",
        sinopsis: "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg"
    },
    {
        id: 7,
        nombre: "City of God",
        video:"dcUOO4Itgmw",
        year: "2002",
        runtime: "130",
        generos: [
            "Crime",
            "Drama"
        ],
        direccion: "Fernando Meirelles, Kátia Lund",
        reparto: "Alexandre Rodrigues, Leandro Firmino, Phellipe Haagensen, Douglas Silva",
        sinopsis: "Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX300.jpg"
    },
    {
        id: 10,
        nombre: "Stardust",
        video:"E7Cj7lXABmE",
        year: "2007",
        runtime: "127",
        generos: [
            "Adventure",
            "Family",
            "Fantasy"
        ],
        direccion: "Matthew Vaughn",
        reparto: "Ian McKellen, Bimbo Hart, Alastair MacIntosh, David Kelly",
        sinopsis: "In a countryside town bordering on a magical land, a young man makes a promise to his beloved that he'll retrieve a fallen star by venturing into the magical realm.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjkyMTE1OTYwNF5BMl5BanBnXkFtZTcwMDIxODYzMw@@._V1_SX300.jpg"
    },
    {
        id: 11,
        nombre: "Apocalypto",
        video:"ngWBddVNVZs",
        year: "2006",
        runtime: "139",
        generos: [
            "Action",
            "Adventure",
            "Drama"
        ],
        direccion: "Mel Gibson",
        reparto: "Rudy Youngblood, Dalia Hernández, Jonathan Brewer, Morris Birdyellowhead",
        sinopsis: "As the Mayan kingdom faces its decline, the rulers insist the key to prosperity is to build more temples and offer human sacrifices. Jaguar Paw, a young man captured for sacrifice, flees to avoid his fate.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BNTM1NjYyNTY5OV5BMl5BanBnXkFtZTcwMjgwNTMzMQ@@._V1_SX300.jpg"
    },
    {
        id: 13,
        nombre: "No Country for Old Men",
        video:"38A__WT3-o0",
        year: "2007",
        runtime: "122",
        generos: [
            "Crime",
            "Drama",
            "Thriller"
        ],
        direccion: "Ethan Coen, Joel Coen",
        reparto: "Tommy Lee Jones, Javier Bardem, Josh Brolin, Woody Harrelson",
        sinopsis: "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg"
    },
    {
        id: 17,
        nombre: "The Third Man",
        video:"r9yyDEDGlr0",
        year: "1949",
        runtime: "93",
        generos: [
            "Film-Noir",
            "Mystery",
            "Thriller"
        ],
        direccion: "Carol Reed",
        reparto: "Joseph Cotten, Alida Valli, Orson Welles, Trevor Howard",
        sinopsis: "Pulp novelist Holly Martins travels to shadowy, postwar Vienna, only to find himself investigating the mysterious death of an old friend, Harry Lime.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwNzMzMTQ0Ml5BMl5BanBnXkFtZTgwNjExMzUwNjE@._V1_SX300.jpg"
    },
    {
        id: 18,
        nombre: "The Beach",
        video:"7vSsx1RkGls",
        year: "2000",
        runtime: "119",
        generos: [
            "Adventure",
            "Drama",
            "Romance"
        ],
        direccion: "Danny Boyle",
        reparto: "Leonardo DiCaprio, Daniel York, Patcharawan Patarakijjanon, Virginie Ledoyen",
        sinopsis: "Twenty-something Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss - excited and intrigued, he sets out to find it.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BN2ViYTFiZmUtOTIxZi00YzIxLWEyMzUtYjQwZGNjMjNhY2IwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
    },
    {
        id: 19,
        nombre: "Scarface",
        video:"7pQQHnqBa2E",
        year: "1983",
        runtime: "170",
        generos: [
            "Crime",
            "Drama"
        ],
        direccion: "Brian De Palma",
        reparto: "Al Pacino, Steven Bauer, Michelle Pfeiffer, Mary Elizabeth Mastrantonio",
        sinopsis: "In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzOTM4MzEwNl5BMl5BanBnXkFtZTgwMzU1OTc1MDE@._V1_SX300.jpg"
    },
    {
        id: 20,
        nombre: "Sid and Nancy",
        video:"TubehkbjOuI",
        year: "1986",
        runtime: "112",
        generos: [
            "Biography",
            "Drama",
            "Music"
        ],
        direccion: "Alex Cox",
        reparto: "Gary Oldman, Chloe Webb, David Hayman, Debby Bishop",
        sinopsis: "Morbid biographical story of Sid Vicious, bassist with British punk group the Sex Pistols, and his girlfriend Nancy Spungen. When the Sex Pistols break up after their fateful US tour, ...",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjExNjA5NzY4M15BMl5BanBnXkFtZTcwNjQ2NzI5NA@@._V1_SX300.jpg"
    },
    {
        id: 21,
        nombre: "Black Swan",
        video:"5jaI1XOB-bs",
        year: "2010",
        runtime: "108",
        generos: [
            "Drama",
            "Thriller"
        ],
        direccion: "Darren Aronofsky",
        reparto: "Natalie Portman, Mila Kunis, Vincent Cassel, Barbara Hershey",
        sinopsis: "A committed dancer wins the lead role in a production of Tchaikovsky's \"Swan Lake\" only to find herself struggling to maintain her sanity.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SX300.jpg"
    },
    {
        id: 22,
        nombre: "Inception",
        video:"YoHD9XEInc0",
        year: "2010",
        runtime: "148",
        generos: [
            "Action",
            "Adventure",
            "Sci-Fi"
        ],
        direccion: "Christopher Nolan",
        reparto: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
        sinopsis: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
    },
    {
        id: 24,
        nombre: "Chasing Amy",
        video:"Thttps://www.youtube.com/watch?v=EiATQ04pH14",
        year: "1997",
        runtime: "113",
        generos: [
            "Comedy",
            "Drama",
            "Romance"
        ],
        direccion: "Kevin Smith",
        reparto: "Ethan Suplee, Ben Affleck, Scott Mosier, Jason Lee",
        sinopsis: "Holden and Banky are comic book artists. Everything's going good for them until they meet Alyssa, also a comic book artist. Holden falls for her, but his hopes are crushed when he finds out she's gay.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BZDM3MTg2MGUtZDM0MC00NzMwLWE5NjItOWFjNjA2M2I4YzgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
        id: 26,
        nombre: "The Silence of the Lambs",
        video:"W6Mm8Sbe__o",
        year: "1991",
        runtime: "118",
        generos: [
            "Crime",
            "Drama",
            "Thriller"
        ],
        direccion: "Jonathan Demme",
        reparto: "Jodie Foster, Lawrence A. Bonney, Kasi Lemmons, Lawrence T. Wrentz",
        sinopsis: "A young F.B.I. cadet must confide in an incarcerated and manipulative killer to receive his help on catching another serial killer who skins his victims.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NzkzMDI4OF5BMl5BanBnXkFtZTcwMDA0NzE1NA@@._V1_SX300.jpg"
    },
    {
        id: 29,
        nombre: "Midnight Express",
        video:"lhuutAnXBzQ",
        year: "1978",
        runtime: "121",
        generos: [
            "Crime",
            "Drama",
            "Thriller"
        ],
        direccion: "Alan Parker",
        reparto: "Brad Davis, Irene Miracle, Bo Hopkins, Paolo Bonacelli",
        sinopsis: "Billy Hayes, an American college student, is caught smuggling drugs out of Turkey and thrown into prison.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyMDA5MzkyOF5BMl5BanBnXkFtZTgwOTYwNTcxMTE@._V1_SX300.jpg"
    },
    {
        id: 30,
        nombre: "Pulp Fiction",
        video:"tGpTpVyI_OQ",
        year: "1994",
        runtime: "154",
        generos: [
            "Crime",
            "Drama"
        ],
        direccion: "Quentin Tarantino",
        reparto: "Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta",
        sinopsis: "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SX300.jpg"
    },
    {
        id: 31,
        nombre: "Lock, Stock and Two Smoking Barrels",
        video:"HY7mRdQuUSw",
        year: "1998",
        runtime: "107",
        generos: [
            "Comedy",
            "Crime"
        ],
        direccion: "Guy Ritchie",
        reparto: "Jason Flemyng, Dexter Fletcher, Nick Moran, Jason Statham",
        sinopsis: "A botched card game in London triggers four friends, thugs, weed-growers, hard gangsters, loan sharks and debt collectors to collide with each other in a series of unexpected events, all for the sake of weed, cash and two antique shotguns.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyN2JmZmEtNjAyMy00NzYwLThmY2MtYWQ3OGNhNjExMmM4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
    },
    {
        id: 33,
        nombre: "Rear Window",
        video:"m01YktiEZCw",
        year: "1954",
        runtime: "112",
        generos: [
            "Mystery",
            "Thriller"
        ],
        direccion: "Alfred Hitchcock",
        reparto: "James Stewart, Grace Kelly, Wendell Corey, Thelma Ritter",
        sinopsis: "A wheelchair-bound photographer spies on his neighbours from his apartment window and becomes convinced one of them has committed murder.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
        id: 35,
        nombre: "Shutter Island",
        video:"v8yrZSkKxTA",
        year: "2010",
        runtime: "138",
        generos: [
            "Mystery",
            "Thriller"
        ],
        direccion: "Martin Scorsese",
        reparto: "Leonardo DiCaprio, Mark Ruffalo, Ben Kingsley, Max von Sydow",
        sinopsis: "In 1954, a U.S. marshal investigates the disappearance of a murderess who escaped from a hospital for the criminally insane.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxMTIyNzMxMV5BMl5BanBnXkFtZTcwOTc4OTI3Mg@@._V1_SX300.jpg"
    },
    {
        id: 36,
        nombre: "Reservoir Dogs",
        video:"vayksn4Y93A",
        year: "1992",
        runtime: "99",
        generos: [
            "Crime",
            "Drama",
            "Thriller"
        ],
        direccion: "Quentin Tarantino",
        reparto: "Harvey Keitel, Tim Roth, Michael Madsen, Chris Penn",
        sinopsis: "After a simple jewelry heist goes terribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BNjE5ZDJiZTQtOGE2YS00ZTc5LTk0OGUtOTg2NjdjZmVlYzE2XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg"
    },
    {
        id: 41,
        nombre: "Moneyball",
        video:"-4QPVo0UIzc",
        year: "2011",
        runtime: "133",
        generos: [
            "Biography",
            "Drama",
            "Sport"
        ],
        direccion: "Bennett Miller",
        reparto: "Brad Pitt, Jonah Hill, Philip Seymour Hoffman, Robin Wright",
        sinopsis: "Oakland A's general manager Billy Beane's successful attempt to assemble a baseball team on a lean budget by employing computer-generated analysis to acquire new players.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxOTU3Mzc1M15BMl5BanBnXkFtZTcwMzk1ODUzNg@@._V1_SX300.jpg"
    },
    {
        id: 42,
        nombre: "The Hangover",
        video:"tcdUhdOlz9M",
        year: "2009",
        runtime: "100",
        generos: [
            "Comedy"
        ],
        direccion: "Todd Phillips",
        reparto: "Bradley Cooper, Ed Helms, Zach Galifianakis, Justin Bartha",
        sinopsis: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU1MDA1MTYwMF5BMl5BanBnXkFtZTcwMDcxMzA1Mg@@._V1_SX300.jpg"
    },
    {
        id: 43,
        nombre: "The Great Beauty",
        video:"Dyt430YkQn0",
        year: "2013",
        runtime: "141",
        generos: [
            "Drama"
        ],
        direccion: "Paolo Sorrentino",
        reparto: "Toni Servillo, Carlo Verdone, Sabrina Ferilli, Carlo Buccirosso",
        sinopsis: "Jep Gambardella has seduced his way through the lavish nightlife of Rome for decades, but after his 65th birthday and a shock from the past, Jep looks past the nightclubs and parties to find a timeless landscape of absurd, exquisite beauty.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ0ODg1OTQ2Nl5BMl5BanBnXkFtZTgwNTc2MDY1MDE@._V1_SX300.jpg"
    },
    {
        id: 45,
        nombre: "Mary and Max",
        video:"p1W_mpSydYI",
        year: "2009",
        runtime: "92",
        generos: [
            "Animation",
            "Comedy",
            "Drama"
        ],
        direccion: "Adam Elliot",
        reparto: "Toni Collette, Philip Seymour Hoffman, Barry Humphries, Eric Bana",
        sinopsis: "A tale of friendship between two unlikely pen pals: Mary, a lonely, eight-year-old girl living in the suburbs of Melbourne, and Max, a forty-four-year old, severely obese man living in New York.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ1NDIyNTA1Nl5BMl5BanBnXkFtZTcwMjc2Njk3OA@@._V1_SX300.jpg"
    },
    {
        id: 46,
        nombre: "Flight",
        video:"Aqn2L6kQQt8",
        year: "2012",
        runtime: "138",
        generos: [
            "Drama",
            "Thriller"
        ],
        direccion: "Robert Zemeckis",
        reparto: "Nadine Velazquez, Denzel Washington, Carter Cabassa, Adam C. Edwards",
        sinopsis: "An airline pilot saves almost all his passengers on his malfunctioning airliner which eventually crashed, but an investigation into the accident reveals something troubling.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMjI1OTMxNl5BMl5BanBnXkFtZTcwNjc3NTY1OA@@._V1_SX300.jpg"
    },
    {
        id: 47,
        nombre: "One Flew Over the Cuckoo's Nest",
        video:"OXrcDonY-B8",
        year: "1975",
        runtime: "133",
        generos: [
            "Drama"
        ],
        direccion: "Milos Forman",
        reparto: "Michael Berryman, Peter Brocco, Dean R. Brooks, Alonzo Brown",
        sinopsis: "A criminal pleads insanity after getting into trouble again and once in the mental institution rebels against the oppressive nurse and rallies up the scared patients.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BYmJkODkwOTItZThjZC00MTE0LWIxNzQtYTM3MmQwMGI1OWFiXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
    },
    {
        id: 48,
        nombre: "Requiem for a Dream",
        video:"QBwzN4v1vA0",
        year: "2000",
        runtime: "102",
        generos: [
            "Drama"
        ],
        direccion: "Darren Aronofsky",
        reparto: "Ellen Burstyn, Jared Leto, Jennifer Connelly, Marlon Wayans",
        sinopsis: "The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzODMzODYwOF5BMl5BanBnXkFtZTcwODM2NjA2NQ@@._V1_SX300.jpg"
    },
    {
        id: 49,
        nombre: "The Truman Show",
        video:"dlnmQbPGuls",
        year: "1998",
        runtime: "103",
        generos: [
            "Comedy",
            "Drama",
            "Sci-Fi"
        ],
        direccion: "Peter Weir",
        reparto: "Jim Carrey, Laura Linney, Noah Emmerich, Natascha McElhone",
        sinopsis: "An insurance salesman/adjuster discovers his entire life is actually a television show.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
    },
    {
        id: 50,
        nombre: "The Artist",
        video:"YB9Oq0hn5KY",
        year: "2011",
        runtime: "100",
        generos: [
            "Comedy",
            "Drama",
            "Romance"
        ],
        direccion: "Michel Hazanavicius",
        reparto: "Jean Dujardin, Bérénice Bejo, John Goodman, James Cromwell",
        sinopsis: "A silent movie star meets a young dancer, but the arrival of talking pictures sends their careers in opposite directions.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMzk0NzQxMTM0OV5BMl5BanBnXkFtZTcwMzU4MDYyNQ@@._V1_SX300.jpg"
    },
    {
        id: 52,
        nombre: "The Hobbit: The Desolation of Smaug",
        video:"OPVWy1tFXuc",
        year: "2013",
        runtime: "161",
        generos: [
            "Adventure",
            "Fantasy"
        ],
        direccion: "Peter Jackson",
        reparto: "Ian McKellen, Martin Freeman, Richard Armitage, Ken Stott",
        sinopsis: "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMzU0NDY0NDEzNV5BMl5BanBnXkFtZTgwOTIxNDU1MDE@._V1_SX300.jpg"
    },
    {
        id: 53,
        nombre: "Vicky Cristina Barcelona",
        video:"B-RdUcXAKiw",
        year: "2008",
        runtime: "96",
        generos: [
            "Drama",
            "Romance"
        ],
        direccion: "Woody Allen",
        reparto: "Rebecca Hall, Scarlett Johansson, Christopher Evan Welch, Chris Messina",
        sinopsis: "Two girlfriends on a summer holiday in Spain become enamored with the same painter, unaware that his ex-wife, with whom he has a tempestuous relationship, is about to re-enter the picture.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2NDQ4MTg2MV5BMl5BanBnXkFtZTcwNDUzNjU3MQ@@._V1_SX300.jpg"
    },
    {
        id: 55,
        nombre: "Lost in Translation",
        video:"W6iVPCRflQM",
        year: "2003",
        runtime: "101",
        generos: [
            "Drama"
        ],
        direccion: "Sofia Coppola",
        reparto: "Scarlett Johansson, Bill Murray, Akiko Takeshita, Kazuyoshi Minamimagoe",
        sinopsis: "A faded movie star and a neglected young woman form an unlikely bond after crossing paths in Tokyo.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI2NDI5ODk4N15BMl5BanBnXkFtZTYwMTI3NTE3._V1_SX300.jpg"
    },
    {
        id: 56,
        nombre: "Match Point",
        video:"Thttps://www.youtube.com/watch?v=Q0WaX80XY5w",
        year: "2005",
        runtime: "119",
        generos: [
            "Drama",
            "Romance",
            "Thriller"
        ],
        direccion: "Woody Allen",
        reparto: "Jonathan Rhys Meyers, Alexander Armstrong, Paul Kaye, Matthew Goode",
        sinopsis: "At a turning point in his life, a former tennis pro falls for an actress who happens to be dating his friend and soon-to-be brother-in-law.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzNzY4MzE5NF5BMl5BanBnXkFtZTcwMzQ1MDMzMQ@@._V1_SX300.jpg"
    },
    {
        id: 59,
        nombre: "Madagascar: Escape 2 Africa",
        video:"hLVjIhPYq7s",
        year: "2008",
        runtime: "89",
        generos: [
            "Animation",
            "Action",
            "Adventure"
        ],
        direccion: "Eric Darnell, Tom McGrath",
        reparto: "Ben Stiller, Chris Rock, David Schwimmer, Jada Pinkett Smith",
        sinopsis: "The animals try to fly back to New York City, but crash-land on an African wildlife refuge, where Alex is reunited with his parents.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjExMDA4NDcwMl5BMl5BanBnXkFtZTcwODAxNTQ3MQ@@._V1_SX300.jpg"
    },
    {
        id: 60,
        nombre: "Despicable Me 2",
        video:"yM9sKpQOuEw",
        year: "2013",
        runtime: "98",
        generos: [
            "Animation",
            "Adventure",
            "Comedy"
        ],
        direccion: "Pierre Coffin, Chris Renaud",
        reparto: "Steve Carell, Kristen Wiig, Benjamin Bratt, Miranda Cosgrove",
        sinopsis: "When Gru, the world's most super-bad turned super-dad has been recruited by a team of officials to stop lethal muscle and a host of Gru's own, He has to fight back with new gadgetry, cars, and more minion madness.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjExNjAyNTcyMF5BMl5BanBnXkFtZTgwODQzMjQ3MDE@._V1_SX300.jpg"
    },
    {
        id: 61,
        nombre: "Downfall",
        video:"xBWmkwaTQ0k",
        year: "2004",
        runtime: "156",
        generos: [
            "Biography",
            "Drama",
            "History"
        ],
        direccion: "Oliver Hirschbiegel",
        reparto: "Bruno Ganz, Alexandra Maria Lara, Corinna Harfouch, Ulrich Matthes",
        sinopsis: "Traudl Junge, the final secretary for Adolf Hitler, tells of the Nazi dictator's final days in his Berlin bunker at the end of WWII.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM1OTI1MjE2Nl5BMl5BanBnXkFtZTcwMTEwMzc4NA@@._V1_SX300.jpg"
    },
    {
        id: 62,
        nombre: "KHfQJH_Z7PI",
        year: "2005",
        runtime: "86",
        generos: [
            "Animation",
            "Adventure",
            "Comedy"
        ],
        direccion: "Eric Darnell, Tom McGrath",
        reparto: "Ben Stiller, Chris Rock, David Schwimmer, Jada Pinkett Smith",
        sinopsis: "Spoiled by their upbringing with no idea what wild life is really like, four animals from New York Central Zoo escape, unwittingly assisted by four absconding penguins, and find themselves in Madagascar, among a bunch of merry lemurs",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY4NDUwMzQxMF5BMl5BanBnXkFtZTcwMDgwNjgyMQ@@._V1_SX300.jpg"
    },
    {
        id: 63,
        nombre: "Madagascar 3: Europe's Most Wanted",
        video:"laNiRXqh82Q",
        year: "2012",
        runtime: "93",
        generos: [
            "Animation",
            "Adventure",
            "Comedy"
        ],
        direccion: "Eric Darnell, Tom McGrath, Conrad Vernon",
        reparto: "Ben Stiller, Chris Rock, David Schwimmer, Jada Pinkett Smith",
        sinopsis: "Alex, Marty, Gloria and Melman are still fighting to get home to their beloved Big Apple. Their journey takes them through Europe where they find the perfect cover: a traveling circus, which they reinvent - Madagascar style.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM2MTIzNzk2MF5BMl5BanBnXkFtZTcwMDcwMzQxNw@@._V1_SX300.jpg"
    },
    {
        id: 64,
        nombre: "God Bless America",
        video:"NaEjtiqCw4Q",
        year: "2011",
        runtime: "105",
        generos: [
            "Comedy",
            "Crime"
        ],
        direccion: "Bobcat Goldthwait",
        reparto: "Joel Murray, Tara Lynne Barr, Melinda Page Hamilton, Mackenzie Brooke Smith",
        sinopsis: "On a mission to rid society of its most repellent citizens, terminally ill Frank makes an unlikely accomplice in 16-year-old Roxy.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMTc1MzA4NF5BMl5BanBnXkFtZTcwNzQwMTgzNw@@._V1_SX300.jpg"
    },
    {
        id: 65,
        nombre: "The Social Network",
        video:"lB95KLmpLR4",
        year: "2010",
        runtime: "120",
        generos: [
            "Biography",
            "Drama"
        ],
        direccion: "David Fincher",
        reparto: "Jesse Eisenberg, Rooney Mara, Bryan Barter, Dustin Fitzsimons",
        sinopsis: "Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, but is later sued by two brothers who claimed he stole their idea, and the co-founder who was later squeezed out of the business.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM2ODk0NDAwMF5BMl5BanBnXkFtZTcwNTM1MDc2Mw@@._V1_SX300.jpg"
    },
    {
        id: 69,
        nombre: "American Gangster",
        video:"BV_nssS6Zkg",
        year: "2007",
        runtime: "157",
        generos: [
            "Biography",
            "Crime",
            "Drama"
        ],
        direccion: "Ridley Scott",
        reparto: "Denzel Washington, Russell Crowe, Chiwetel Ejiofor, Josh Brolin",
        sinopsis: "In 1970s America, a detective works to bring down the drug empire of Frank Lucas, a heroin kingpin from Manhattan, who is smuggling the drug into the country from the Far East.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkyNzY5MDA5MV5BMl5BanBnXkFtZTcwMjg4MzI3MQ@@._V1_SX300.jpg"
    },
    {
        id: 70,
        nombre: "Catch Me If You Can",
        video:"gFr0_ywVdhY",
        year: "2002",
        runtime: "141",
        generos: [
            "Biography",
            "Crime",
            "Drama"
        ],
        direccion: "Steven Spielberg",
        reparto: "Leonardo DiCaprio, Tom Hanks, Christopher Walken, Martin Sheen",
        sinopsis: "The true story of Frank Abagnale Jr. who, before his 19th birthday, successfully conned millions of dollars' worth of checks as a Pan Am pilot, doctor, and legal prosecutor.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_SX300.jpg"
    },
    {
        id: 71,
        nombre: "American History X",
        video:"XfQYHqsiN5g",
        year: "1998",
        runtime: "119",
        generos: [
            "Crime",
            "Drama"
        ],
        direccion: "Tony Kaye",
        reparto: "Edward Norton, Edward Furlong, Beverly D'Angelo, Jennifer Lien",
        sinopsis: "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BZjA0MTM4MTQtNzY5MC00NzY3LWI1ZTgtYzcxMjkyMzU4MDZiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"
    },
    {
        id: 73,
        nombre: "Pirates of the Caribbean: At World's End",
        video:"HKSZtp_OGHY",
        year: "2007",
        runtime: "169",
        generos: [
            "Action",
            "Adventure",
            "Fantasy"
        ],
        direccion: "Gore Verbinski",
        reparto: "Johnny Depp, Geoffrey Rush, Orlando Bloom, Keira Knightley",
        sinopsis: "Captain Barbossa, Will Turner and Elizabeth Swann must sail off the edge of the map, navigate treachery and betrayal, find Jack Sparrow, and make their final alliances for one last decisive battle.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyNjkxNzEyMl5BMl5BanBnXkFtZTYwMjc3MDE3._V1_SX300.jpg"
    },
    {
        id: 75,
        nombre: "Crash",
        video:"DEJH0hEoHc4",
        year: "2004",
        runtime: "112",
        generos: [
            "Crime",
            "Drama",
            "Thriller"
        ],
        direccion: "Paul Haggis",
        reparto: "Karina Arroyave, Dato Bakhtadze, Sandra Bullock, Don Cheadle",
        sinopsis: "Los Angeles citizens with vastly separate lives collide in interweaving stories of race, loss and redemption.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTk1OTA1MjIyNV5BMl5BanBnXkFtZTcwODQxMTkyMQ@@._V1_SX300.jpg"
    },
    {
        id: 76,
        nombre: "Pirates of the Caribbean: The Curse of the Black Pearl",
        video:"naQr0uTrH_s",
        year: "2003",
        runtime: "143",
        generos: [
            "Action",
            "Adventure",
            "Fantasy"
        ],
        direccion: "Gore Verbinski",
        reparto: "Johnny Depp, Geoffrey Rush, Orlando Bloom, Keira Knightley",
        sinopsis: "Blacksmith Will Turner teams up with eccentric pirate \"Captain\" Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAyNDM4MTc2N15BMl5BanBnXkFtZTYwNDk0Mjc3._V1_SX300.jpg"
    },
    {
        id: 78,
        nombre: "Oldboy",
        video:"2HkjrJ6IK5E",
        year: "2003",
        runtime: "120",
        generos: [
            "Drama",
            "Mystery",
            "Thriller"
        ],
        direccion: "Chan-wook Park",
        reparto: "Min-sik Choi, Ji-tae Yu, Hye-jeong Kang, Dae-han Ji",
        sinopsis: "After being kidnapped and imprisoned for 15 years, Oh Dae-Su is released, only to find that he must find his captor in 5 days.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_SX300.jpg"
    },
    {
        id: 79,
        nombre: "Chocolat",
        video:"32x33l2sLe8",
        year: "2000",
        runtime: "121",
        generos: [
            "Drama",
            "Romance"
        ],
        direccion: "Lasse Hallström",
        reparto: "Alfred Molina, Carrie-Anne Moss, Aurelien Parent Koenig, Antonio Gil",
        sinopsis: "A woman and her daughter open a chocolate shop in a small French village that shakes up the rigid morality of the community.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4MDI3NTQwMV5BMl5BanBnXkFtZTcwNjIzNDcyMQ@@._V1_SX300.jpg"
    },
    {
        id: 80,
        nombre: "Casino Royale",
        video:"36mnx8dBbGE",
        year: "2006",
        runtime: "144",
        generos: [
            "Action",
            "Adventure",
            "Thriller"
        ],
        direccion: "Martin Campbell",
        reparto: "Daniel Craig, Eva Green, Mads Mikkelsen, Judi Dench",
        sinopsis: "Armed with a licence to kill, Secret Agent James Bond sets out on his first mission as 007 and must defeat a weapons dealer in a high stakes game of poker at Casino Royale, but things are not what they seem.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM5MjI4NDExNF5BMl5BanBnXkFtZTcwMDM1MjMzMQ@@._V1_SX300.jpg"
    },
    {
        id: 81,
        nombre: "WALL·E",
        video:"CZ1CATNbXg0",
        year: "2008",
        runtime: "98",
        generos: [
            "Animation",
            "Adventure",
            "Family"
        ],
        direccion: "Andrew Stanton",
        reparto: "Ben Burtt, Elissa Knight, Jeff Garlin, Fred Willard",
        sinopsis: "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTczOTA3MzY2N15BMl5BanBnXkFtZTcwOTYwNjE2MQ@@._V1_SX300.jpg"
    },
    {
        id: 82,
        nombre: "The Wolf of Wall Street",
        video:"iszwuX1AK6A",
        year: "2013",
        runtime: "180",
        generos: [
            "Biography",
            "Comedy",
            "Crime"
        ],
        direccion: "Martin Scorsese",
        reparto: "Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey",
        sinopsis: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg"
    },
    {
        id: 83,
        nombre: "Hellboy II: The Golden Army",
        video: "Yjivaeh5YOk",
        year: "2008",
        runtime: "120",
        generos: [
            "Action",
            "Adventure",
            "Fantasy"
        ],
        direccion: "Guillermo del Toro",
        reparto: "Ron Perlman, Selma Blair, Doug Jones, John Alexander",
        sinopsis: "The mythical world starts a rebellion against humanity in order to rule the Earth, so Hellboy and his team must save the world from the rebellious creatures.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5NzgyMjc2Nl5BMl5BanBnXkFtZTcwOTU3MDI3MQ@@._V1_SX300.jpg"
    },
    {
        id: 85,
        nombre: "I-See-You.Com",
        video:"f13h-srw6do",
        year: "2006",
        runtime: "92",
        generos: [
            "Comedy"
        ],
        direccion: "Eric Steven Stahl",
        reparto: "Beau Bridges, Rosanna Arquette, Mathew Botuchis, Shiri Appleby",
        sinopsis: "A 17-year-old boy buys mini-cameras and displays the footage online at I-see-you.com. The cash rolls in as the site becomes a major hit. Everyone seems to have fun until it all comes crashing down....",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwMDUzNzA5Nl5BMl5BanBnXkFtZTcwMjQ2Njk3MQ@@._V1_SX300.jpg"
    },
    {
        id: 86,
        nombre: "The Grand Budapest Hotel",
        video:"zru-1DbbcsA",
        year: "2014",
        runtime: "99",
        generos: [
            "Adventure",
            "Comedy",
            "Crime"
        ],
        direccion: "Wes Anderson",
        reparto: "Ralph Fiennes, F. Murray Abraham, Mathieu Amalric, Adrien Brody",
        sinopsis: "The adventures of Gustave H, a legendary concierge at a famous hotel from the fictional Republic of Zubrowka between the first and second World Wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX300.jpg"
    },
    {
        id: 88,
        nombre: "Once Upon a Time in America",
        video:"LcpCRyNo8T8",
        year: "1984",
        runtime: "229",
        generos: [
            "Crime",
            "Drama"
        ],
        direccion: "Sergio Leone",
        reparto: "Robert De Niro, James Woods, Elizabeth McGovern, Joe Pesci",
        sinopsis: "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMGFkNWI4MTMtNGQ0OC00MWVmLTk3MTktOGYxN2Y2YWVkZWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
        id: 89,
        nombre: "Oblivion",
        video:"XmIIgE7eSak",
        year: "2013",
        runtime: "124",
        generos: [
            "Action",
            "Adventure",
            "Mystery"
        ],
        direccion: "Joseph Kosinski",
        reparto: "Tom Cruise, Morgan Freeman, Olga Kurylenko, Andrea Riseborough",
        sinopsis: "A veteran assigned to extract Earth's remaining resources begins to question what he knows about his mission and himself.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMDY0MTA4MF5BMl5BanBnXkFtZTcwNzI3MDgxOQ@@._V1_SX300.jpg"
    },
    {
        id: 90,
        nombre: "V for Vendetta",
        video:"lSA7mAHolAw",
        year: "2005",
        runtime: "132",
        generos: [
            "Action",
            "Drama",
            "Thriller"
        ],
        direccion: "James McTeigue",
        reparto: "Natalie Portman, Hugo Weaving, Stephen Rea, Stephen Fry",
        sinopsis: "In a future British tyranny, a shadowy freedom fighter, known only by the alias of \"V\", plots to overthrow it with the help of a young woman.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTI5ODc3NzExNV5BMl5BanBnXkFtZTcwNzYxNzQzMw@@._V1_SX300.jpg"
    },
    {
        id: 91,
        nombre: "Gattaca",
        video:"W_KruQhfvW4",
        year: "1997",
        runtime: "106",
        generos: [
            "Drama",
            "Sci-Fi",
            "Thriller"
        ],
        direccion: "Andrew Niccol",
        reparto: "Ethan Hawke, Uma Thurman, Gore Vidal, Xander Berkeley",
        sinopsis: "A genetically inferior man assumes the identity of a superior one in order to pursue his lifelong dream of space travel.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BNDQxOTc0MzMtZmRlOS00OWQ5LWI2ZDctOTAwNmMwOTYxYzlhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
        id: 92,
        nombre: "Silver Linings Playbook",
        video:"kVS-6k2tQAA",
        year: "2012",
        runtime: "122",
        generos: [
            "Comedy",
            "Drama",
            "Romance"
        ],
        direccion: "David O. Russell",
        reparto: "Bradley Cooper, Jennifer Lawrence, Robert De Niro, Jacki Weaver",
        sinopsis: "After a stint in a mental institution, former teacher Pat Solitano moves back in with his parents and tries to reconcile with his ex-wife. Things get more challenging when Pat meets Tiffany, a mysterious girl with problems of her own.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM2MTI5NzA3MF5BMl5BanBnXkFtZTcwODExNTc0OA@@._V1_SX300.jpg"
    },
    {
        id: 93,
        nombre: "Alice in Wonderland",
        video:"AaeiLj1CeIE",
        year: "2010",
        runtime: "108",
        generos: [
            "Adventure",
            "Family",
            "Fantasy"
        ],
        direccion: "Tim Burton",
        reparto: "Johnny Depp, Mia Wasikowska, Helena Bonham Carter, Anne Hathaway",
        sinopsis: "Nineteen-year-old Alice returns to the magical world from her childhood adventure, where she reunites with her old friends and learns of her true destiny: to end the Red Queen's reign of terror.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNjAxMTc0Nl5BMl5BanBnXkFtZTcwODc3ODk5Mg@@._V1_SX300.jpg"
    },
    {
        id: 95,
        nombre: "Pacific Rim",
        video:"5guMumPFBag",
        year: "2013",
        runtime: "131",
        generos: [
            "Action",
            "Adventure",
            "Sci-Fi"
        ],
        direccion: "Guillermo del Toro",
        reparto: "Charlie Hunnam, Diego Klattenhoff, Idris Elba, Rinko Kikuchi",
        sinopsis: "As a war between humankind and monstrous sea creatures wages on, a former pilot and a trainee are paired up to drive a seemingly obsolete special weapon in a desperate effort to save the world from the apocalypse.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY3MTI5NjQ4Nl5BMl5BanBnXkFtZTcwOTU1OTU0OQ@@._V1_SX300.jpg"
    },
    {
        id: 98,
        nombre: "Cloud Atlas",
        video:"hWnAqFyaQ5s",
        year: "2012",
        runtime: "172",
        generos: [
            "Drama",
            "Sci-Fi"
        ],
        direccion: "Tom Tykwer, Lana Wachowski, Lilly Wachowski",
        reparto: "Tom Hanks, Halle Berry, Jim Broadbent, Hugo Weaving",
        sinopsis: "An exploration of how the actions of individual lives impact one another in the past, present and future, as one soul is shaped from a killer into a hero, and an act of kindness ripples across centuries to inspire a revolution.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTczMTgxMjc4NF5BMl5BanBnXkFtZTcwNjM5MTA2OA@@._V1_SX300.jpg"
    },
    {
        id: 99,
        nombre: "The Impossible",
        video:"4d-EYIZAqXc",
        year: "2012",
        runtime: "114",
        generos: [
            "Drama",
            "Thriller"
        ],
        direccion: "J.A. Bayona",
        reparto: "Naomi Watts, Ewan McGregor, Tom Holland, Samuel Joslin",
        sinopsis: "The story of a tourist family in Thailand caught in the destruction and chaotic aftermath of the 2004 Indian Ocean tsunami.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5NTA3NzQ5Nl5BMl5BanBnXkFtZTcwOTYxNjY0OA@@._V1_SX300.jpg"
    },
    {
        id: 100,
        nombre: "All Quiet on the Western Front",
        video:"grapXipP3fM",
        year: "1930",
        runtime: "136",
        generos: [
            "Drama",
            "War"
        ],
        direccion: "Lewis Milestone",
        reparto: "Louis Wolheim, Lew Ayres, John Wray, Arnold Lucy",
        sinopsis: "A young soldier faces profound disillusionment in the soul-destroying horror of World War I.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BNTM5OTg2NDY1NF5BMl5BanBnXkFtZTcwNTQ4MTMwNw@@._V1_SX300.jpg"
    },
    {
        id: 102,
        nombre: "Dallas Buyers Club",
        video: "KDvPcBeOn8E",
        year: "2013",
        runtime: "117",
        generos: [
            "Biography",
            "Drama"
        ],
        direccion: "Jean-Marc Vallée",
        reparto: "Matthew McConaughey, Jennifer Garner, Jared Leto, Denis O'Hare",
        sinopsis: "In 1985 Dallas, electrician and hustler Ron Woodroof works around the system to help AIDS patients get the medication they need after he is diagnosed with the disease.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwMTA4MzgyNF5BMl5BanBnXkFtZTgwMjEyMjE0MDE@._V1_SX300.jpg"
    },
    {
        id: 104,
        nombre: "Before Sunrise",
        video:"6MUcuqbGTxc",
        year: "1995",
        runtime: "105",
        generos: [
            "Drama",
            "Romance"
        ],
        direccion: "Richard Linklater",
        reparto: "Ethan Hawke, Julie Delpy, Andrea Eckert, Hanno Pöschl",
        sinopsis: "A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyMTM3MTQxMl5BMl5BanBnXkFtZTcwMDAzNjQ4Mg@@._V1_SX300.jpg"
    },
    {
        id: 105,
        nombre: "The Rum Diary",
        video:"R8KblG1S0_A",
        year: "2011",
        runtime: "120",
        generos: [
            "Comedy",
            "Drama"
        ],
        direccion: "Bruce Robinson",
        reparto: "Johnny Depp, Aaron Eckhart, Michael Rispoli, Amber Heard",
        sinopsis: "American journalist Paul Kemp takes on a freelance job in Puerto Rico for a local newspaper during the 1960s and struggles to find a balance between island culture and the expatriates who live there.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM5ODA4MjYxM15BMl5BanBnXkFtZTcwMTM3NTE5Ng@@._V1_SX300.jpg"
    },
    {
        id: 107,
        nombre: "Chinatown",
        video:"7SZMEImptPQ",
        year: "1974",
        runtime: "130",
        generos: [
            "Drama",
            "Mystery",
            "Thriller"
        ],
        direccion: "Roman Polanski",
        reparto: "Jack Nicholson, Faye Dunaway, John Huston, Perry Lopez",
        sinopsis: "A private detective hired to expose an adulterer finds himself caught up in a web of deceit, corruption and murder.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BN2YyNDE5NzItMjAwNC00MGQxLTllNjktZGIzMWFkZjA3OWQ0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
    },
    {
        id: 108,
        nombre: "Calvary",
        video:"LGM5rq_vX4U",
        year: "2014",
        runtime: "102",
        generos: [
            "Comedy",
            "Drama"
        ],
        direccion: "John Michael McDonagh",
        reparto: "Brendan Gleeson, Chris O'Dowd, Kelly Reilly, Aidan Gillen",
        sinopsis: "After he is threatened during a confession, a good-natured priest must battle the dark forces closing in around him.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3MjQ1MjE2M15BMl5BanBnXkFtZTgwNTMzNjE4MTE@._V1_SX300.jpg"
    },
    {
        id: 110,
        nombre: "Spirited Away",
        video:"ByXuk9QqQkk",
        year: "2001",
        runtime: "125",
        generos: [
            "Animation",
            "Adventure",
            "Family"
        ],
        direccion: "Hayao Miyazaki",
        reparto: "Rumi Hiiragi, Miyu Irino, Mari Natsuki, Takashi Naitô",
        sinopsis: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjYxMDcyMzIzNl5BMl5BanBnXkFtZTYwNDg2MDU3._V1_SX300.jpg"
    },
    {
        id: 111,
        nombre: "Indochine",
        video:"9-zfrv3zYaA",
        year: "1992",
        runtime: "159",
        generos: [
            "Drama",
            "Romance"
        ],
        direccion: "Régis Wargnier",
        reparto: "Catherine Deneuve, Vincent Perez, Linh Dan Pham, Jean Yanne",
        sinopsis: "This story is set in 1930, at the time when French colonial rule in Indochina is ending. A widowed French woman who works in the rubber fields, raises a Vietnamese princess as if she was ...",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM1MTkzNzA3NF5BMl5BanBnXkFtZTYwNTI2MzU5._V1_SX300.jpg"
    },
    {
        id: 112,
        nombre: "Birdman or (The Unexpected Virtue of Ignorance)",
        video:"uJfLoE6hanc",
        year: "2014",
        runtime: "119",
        generos: [
            "Comedy",
            "Drama",
            "Romance"
        ],
        direccion: "Alejandro G. Iñárritu",
        reparto: "Michael Keaton, Emma Stone, Kenny Chin, Jamahl Garrison-Lowe",
        sinopsis: "Illustrated upon the progress of his latest Broadway play, a former popular actor's struggle to cope with his current life as a wasted actor is shown.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BODAzNDMxMzAxOV5BMl5BanBnXkFtZTgwMDMxMjA4MjE@._V1_SX300.jpg"
    },
    {
        id: 113,
        nombre: "Boyhood",
        video:"Y0oX0xiwOv8",
        year: "2014",
        runtime: "165",
        generos: [
            "Drama"
        ],
        direccion: "Richard Linklater",
        reparto: "Ellar Coltrane, Patricia Arquette, Elijah Smith, Lorelei Linklater",
        sinopsis: "The life of Mason, from early childhood to his arrival at college.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzNDc2MDc0N15BMl5BanBnXkFtZTgwOTcwMDQ5MTE@._V1_SX300.jpg"
    },
    {
        id: 114,
        nombre: "12 Angry Men",
        video: "TEN-2uTi2c0",
        year: "1957",
        runtime: "96",
        generos: [
            "Crime",
            "Drama"
        ],
        direccion: "Sidney Lumet",
        reparto: "Martin Balsam, John Fiedler, Lee J. Cobb, E.G. Marshall",
        sinopsis: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_SX300.jpg"
    },
    {
        id: 115,
        nombre: "The Imitation Game",
        video:"nuPZUUED5uk",
        year: "2014",
        runtime: "114",
        generos: [
            "Biography",
            "Drama",
            "Thriller"
        ],
        direccion: "Morten Tyldum",
        reparto: "Benedict Cumberbatch, Keira Knightley, Matthew Goode, Rory Kinnear",
        sinopsis: "During World War II, mathematician Alan Turing tries to crack the enigma code with help from fellow mathematicians.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BNDkwNTEyMzkzNl5BMl5BanBnXkFtZTgwNTAwNzk3MjE@._V1_SX300.jpg"
    },
    {
        id: 116,
        nombre: "Interstellar",
        video:"2LqzF5WauAw",
        year: "2014",
        runtime: "169",
        generos: [
            "Adventure",
            "Drama",
            "Sci-Fi"
        ],
        direccion: "Christopher Nolan",
        reparto: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        sinopsis: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg"
    },
    {
        id: 117,
        nombre: "Big Nothing",
        video:"ApSH4TbVOBM",
        year: "2006",
        runtime: "86",
        generos: [
            "Comedy",
            "Crime",
            "Thriller"
        ],
        direccion: "Jean-Baptiste Andrea",
        reparto: "David Schwimmer, Simon Pegg, Alice Eve, Natascha McElhone",
        sinopsis: "A frustrated, unemployed teacher joining forces with a scammer and his girlfriend in a blackmailing scheme.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5NTc2NjYwOV5BMl5BanBnXkFtZTcwMzk5OTY0MQ@@._V1_SX300.jpg"
    },
    {
        id: 118,
        nombre: "Das Boot",
        video:"97Gr4WKEkS0",
        year: "1981",
        runtime: "149",
        generos: [
            "Adventure",
            "Drama",
            "Thriller"
        ],
        direccion: "Wolfgang Petersen",
        reparto: "Jürgen Prochnow, Herbert Grönemeyer, Klaus Wennemann, Hubertus Bengsch",
        sinopsis: "The claustrophobic world of a WWII German U-boat; boredom, filth, and sheer terror.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE5Mzk5OTQ0Nl5BMl5BanBnXkFtZTYwNzUwMTQ5._V1_SX300.jpg"
    },
    {
        id: 119,
        nombre: "Shrek 2",
        video:"A_HjMIjzyMU",
        year: "2004",
        runtime: "93",
        generos: [
            "Animation",
            "Adventure",
            "Comedy"
        ],
        direccion: "Andrew Adamson, Kelly Asbury, Conrad Vernon",
        reparto: "Mike Myers, Eddie Murphy, Cameron Diaz, Julie Andrews",
        sinopsis: "Princess Fiona's parents invite her and Shrek to dinner to celebrate her marriage. If only they knew the newlyweds were both ogres.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4MTMwNjI4M15BMl5BanBnXkFtZTcwMjExMzUyMQ@@._V1_SX300.jpg"
    },
    {
        id: 120,
        nombre: "Sin City",
        video:"T2Dj6ktPU5c",
        year: "2005",
        runtime: "124",
        generos: [
            "Crime",
            "Thriller"
        ],
        direccion: "Frank Miller, Robert Rodriguez, Quentin Tarantino",
        reparto: "Jessica Alba, Devon Aoki, Alexis Bledel, Powers Boothe",
        sinopsis: "A film that explores the dark and miserable town, Basin City, and tells the story of three different people, all caught up in violent corruption.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BODZmYjMwNzEtNzVhNC00ZTRmLTk2M2UtNzE1MTQ2ZDAxNjc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
        id: 121,
        nombre: "Nebraska",
        video:"ZuIBvmxIN4w",
        year: "2013",
        runtime: "115",
        generos: [
            "Adventure",
            "Comedy",
            "Drama"
        ],
        direccion: "Alexander Payne",
        reparto: "Bruce Dern, Will Forte, June Squibb, Bob Odenkirk",
        sinopsis: "An aging, booze-addled father makes the trip from Montana to Nebraska with his estranged son in order to claim a million-dollar Mega Sweepstakes Marketing prize.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2Mjk2NDkyMl5BMl5BanBnXkFtZTgwNTk0NzcyMDE@._V1_SX300.jpg"
    },
    {
        id: 122,
        nombre: "Shrek",
        video: "HLQ1cK9Edhc",
        year: "2001",
        runtime: "90",
        generos: [
            "Animation",
            "Adventure",
            "Comedy"
        ],
        direccion: "Andrew Adamson, Vicky Jenson",
        reparto: "Mike Myers, Eddie Murphy, Cameron Diaz, John Lithgow",
        sinopsis: "After his swamp is filled with magical creatures, an ogre agrees to rescue a princess for a villainous lord in order to get his land back.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2NTE1NTE0M15BMl5BanBnXkFtZTgwNjY4NTYxMTE@._V1_SX300.jpg"
    },
    {
        id: 123,
        nombre: "Mr. & Mrs. Smith",
        video:"CZ0B22z22pI",
        year: "2005",
        runtime: "120",
        generos: [
            "Action",
            "Comedy",
            "Crime"
        ],
        direccion: "Doug Liman",
        reparto: "Brad Pitt, Angelina Jolie, Vince Vaughn, Adam Brody",
        sinopsis: "A bored married couple is surprised to learn that they are both assassins hired by competing agencies to kill each other.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMzcxNzQzOF5BMl5BanBnXkFtZTcwMzQxNjUyMw@@._V1_SX300.jpg"
    },
    {
        id: 124,
        nombre: "Original Sin",
        video: "M9h96PYT7GU",
        year: "2001",
        runtime: "116",
        generos: [
            "Drama",
            "Mystery",
            "Romance"
        ],
        direccion: "Michael Cristofer",
        reparto: "Antonio Banderas, Angelina Jolie, Thomas Jane, Jack Thompson",
        sinopsis: "A woman along with her lover, plan to con a rich man by marrying him and on earning his trust running away with all his money. Everything goes as planned until she actually begins to fall in love with him.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BODg3Mjg0MDY4M15BMl5BanBnXkFtZTcwNjY5MDQ2NA@@._V1_SX300.jpg"
    },
    {
        id: 127,
        nombre: "Despicable Me",
        video:"zzCZ1W_CUoI",
        year: "2010",
        runtime: "95",
        generos: [
            "Animation",
            "Adventure",
            "Comedy"
        ],
        direccion: "Pierre Coffin, Chris Renaud",
        reparto: "Steve Carell, Jason Segel, Russell Brand, Julie Andrews",
        sinopsis: "When a criminal mastermind uses a trio of orphan girls as pawns for a grand scheme, he finds their love is profoundly changing him for the better.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY3NjY0MTQ0Nl5BMl5BanBnXkFtZTcwMzQ2MTc0Mw@@._V1_SX300.jpg"
    },
    {
        id: 129,
        nombre: "The Hobbit: An Unexpected Journey",
        video:"SDnYMbYB-nU",
        year: "2012",
        runtime: "169",
        generos: [
            "Adventure",
            "Fantasy"
        ],
        direccion: "Peter Jackson",
        reparto: "Ian McKellen, Martin Freeman, Richard Armitage, Ken Stott",
        sinopsis: "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_SX300.jpg"
    },
    {
        id: 130,
        nombre: "The Great Gatsby",
        video:"FbfeiODKgRY",
        year: "2013",
        runtime: "143",
        generos: [
            "Drama",
            "Romance"
        ],
        direccion: "Baz Luhrmann",
        reparto: "Lisa Adam, Frank Aldridge, Amitabh Bachchan, Steve Bisley",
        sinopsis: "A writer and wall street trader, Nick, finds himself drawn to the past and lifestyle of his millionaire neighbor, Jay Gatsby.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_SX300.jpg"
    },
    {
        id: 131,
        nombre: "Ice Age",
        year: "2002",
        runtime: "81",
        generos: [
            "Animation",
            "Adventure",
            "Comedy"
        ],
        direccion: "Chris Wedge, Carlos Saldanha",
        reparto: "Ray Romano, John Leguizamo, Denis Leary, Goran Visnjic",
        sinopsis: "Set during the Ice Age, a sabertooth tiger, a sloth, and a wooly mammoth find a lost human infant, and they try to return him to his tribe.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyNzI1ODA0MF5BMl5BanBnXkFtZTYwODIxODY3._V1_SX300.jpg"
    },
    {
        id: 133,
        nombre: "The Lord of the Rings: The Two Towers",
        video:"LbfMDwc4azU",
        year: "2002",
        runtime: "179",
        generos: [
            "Action",
            "Adventure",
            "Drama"
        ],
        direccion: "Peter Jackson",
        reparto: "Bruce Allpress, Sean Astin, John Bach, Sala Baker",
        sinopsis: "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNDU0NjY4NTheQTJeQWpwZ15BbWU2MDk4MTY2Nw@@._V1_SX300.jpg"
    },
    {
        id: 134,
        nombre: "Ex Machina",
        video:"EoQuVnKhxaM",
        year: "2015",
        runtime: "108",
        generos: [
            "Drama",
            "Mystery",
            "Sci-Fi"
        ],
        direccion: "Alex Garland",
        reparto: "Domhnall Gleeson, Corey Johnson, Oscar Isaac, Alicia Vikander",
        sinopsis: "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a breath-taking humanoid A.I.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_SX300.jpg"
    },
    {
        id: 135,
        nombre: "The Theory of Everything",
        video:"Salz7uGp72c",
        year: "2014",
        runtime: "123",
        generos: [
            "Biography",
            "Drama",
            "Romance"
        ],
        direccion: "James Marsh",
        reparto: "Eddie Redmayne, Felicity Jones, Tom Prior, Sophie Perry",
        sinopsis: "A look at the relationship between the famous physicist Stephen Hawking and his wife.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAwMTU4MDA3NDNeQTJeQWpwZ15BbWU4MDk4NTMxNTIx._V1_SX300.jpg"
    },
    {
        id: 136,
        nombre: "Shogun",
        video: "hhteFxAvJJU",
        year: "1980",
        runtime: "60",
        generos: [
            "Adventure",
            "Drama",
            "History"
        ],
        direccion: "N/A",
        reparto: "Richard Chamberlain, Toshirô Mifune, Yôko Shimada, Furankî Sakai",
        sinopsis: "A English navigator becomes both a player and pawn in the complex political games in feudal Japan.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1ODI4NzYxMl5BMl5BanBnXkFtZTcwNDA4MzUxMQ@@._V1_SX300.jpg"
    },
    {
        id: 137,
        nombre: "Spotlight",
        video:"EwdCIpbTN5g",
        year: "2015",
        runtime: "128",
        generos: [
            "Biography",
            "Crime",
            "Drama"
        ],
        direccion: "Tom McCarthy",
        reparto: "Mark Ruffalo, Michael Keaton, Rachel McAdams, Liev Schreiber",
        sinopsis: "The true story of how the Boston Globe uncovered the massive scandal of child molestation and cover-up within the local Catholic Archdiocese, shaking the entire Catholic Church to its core.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyOTM5OTIzNV5BMl5BanBnXkFtZTgwMDkzODE2NjE@._V1_SX300.jpg"
    },
    {
        id: 139,
        nombre: "Whiplash",
        video:"7d_jQycdQGo",
        year: "2014",
        runtime: "107",
        generos: [
            "Drama",
            "Music"
        ],
        direccion: "Damien Chazelle",
        reparto: "Miles Teller, J.K. Simmons, Paul Reiser, Melissa Benoist",
        sinopsis: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU4OTQ3MDUyMV5BMl5BanBnXkFtZTgwOTA2MjU0MjE@._V1_SX300.jpg"
    },
    {
        id: 141,
        nombre: "Hotel Rwanda",
        video:"2x8UzELvKlY",
        year: "2004",
        runtime: "121",
        generos: [
            "Drama",
            "History",
            "War"
        ],
        direccion: "Terry George",
        reparto: "Xolani Mali, Don Cheadle, Desmond Dube, Hakeem Kae-Kazim",
        sinopsis: "Paul Rusesabagina was a hotel manager who housed over a thousand Tutsi refugees during their struggle against the Hutu militia in Rwanda.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI2MzQyNTc1M15BMl5BanBnXkFtZTYwMjExNjc3._V1_SX300.jpg"
    },
    {
        id: 142,
        nombre: "The Martian",
        video: "ej3ioOneTy8",
        year: "2015",
        runtime: "144",
        generos: [
            "Adventure",
            "Drama",
            "Sci-Fi"
        ],
        direccion: "Ridley Scott",
        reparto: "Matt Damon, Jessica Chastain, Kristen Wiig, Jeff Daniels",
        sinopsis: "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SX300.jpg"
    },
    {
        id: 144,
        nombre: "The Hateful Eight",
        video:"nIOmotayDMY",
        year: "2015",
        runtime: "187",
        generos: [
            "Crime",
            "Drama",
            "Mystery"
        ],
        direccion: "Quentin Tarantino",
        reparto: "Samuel L. Jackson, Kurt Russell, Jennifer Jason Leigh, Walton Goggins",
        sinopsis: "In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_SX300.jpg"
    },
    {
        id: 146,
        nombre: "The Big Short",
        video:"vgqG3ITMv1Q",
        year: "2015",
        runtime: "130",
        generos: [
            "Biography",
            "Comedy",
            "Drama"
        ],
        direccion: "Adam McKay",
        reparto: "Ryan Gosling, Rudy Eisenzopf, Casey Groves, Charlie Talbert",
        sinopsis: "Four denizens in the world of high-finance predict the credit and housing bubble collapse of the mid-2000s, and decide to take on the big banks for their greed and lack of foresight.",
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BNDc4MThhN2EtZjMzNC00ZDJmLThiZTgtNThlY2UxZWMzNjdkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
    }
]