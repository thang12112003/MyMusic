const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const playlist = $('.sidebar-main')
const carousel = $('.row')
const sectionContainer = $('.section-container')

const app ={

    songs: [
        {
            name: 'Let Me Love You',
            singer: 'DJ Snake, Justin Bieber',
            path: './assets/music/song1.mp3',
            image: './assets/img/song1.jpg',
        },
        {
            name: 'Marry You',
            singer: 'Bruno Mars',
            path: './assets/music/song2.mp3',
            image: './assets/img/song2.jpg',
        },
        {
            name: 'Bật Tình Yêu Lên',
            singer: 'Tăng Duy Tân, Hòa Minzy',
            path: './assets/music/song3.mp3',
            image: './assets/img/song3.jpg',
        },
        {
            name: 'Nơi Tình Yêu Bắt Đầu',
            singer: 'Lam Anh, Bằng Kiều',
            path: './assets/music/song4.mp3',
            image: './assets/img/song4.jpg',
        },
        {
            name: 'Cơn Mơ Băng Giá',
            singer: 'Bằng Kiều',
            path: './assets/music/song5.mp3',
            image: './assets/img/song5.jpg',
        },
        {
            name: 'Ngày Mai Người Ta Lấy Chồng',
            singer: 'Thành Đạt',
            path: './assets/music/song6.mp3',
            image: './assets/img/song6.jpg',
        },
        {
            name: 'See Tình',
            singer: 'Hoang Thuy Linh',
            path: './assets/music/song7.mp3',
            image: './assets/img/song7.jpg',
        },
        {
            name: 'Cảm Ơn Vì Tất Cả',
            singer: 'Anh Quân Idol',
            path: './assets/music/song8.mp3',
            image: './assets/img/song8.jpg',
        },
        {
            name: 'Anh Mệt Rồi',
            singer: 'Anh Quân Idol',
            path: './assets/music/song9.mp3',
            image: './assets/img/song9.jpg',
        },
        {
            name: 'Hoa Cỏ Lau',
            singer: 'Phong Max',
            path: './assets/music/song10.mp3',
            image: './assets/img/song10.jpg',
        },
        {
            name: 'Nevada',
            singer: 'Vicetone',
            path: './assets/music/song11.mp3',
            image: './assets/img/song11.jpg',
        },
        {
            name: 'Sumertime',
            singer: 'K-391',
            path: './assets/music/song12.mp3',
            image: './assets/img/song12.jpg',
        },
    ],
    rendersong:function(){
        const htmls = this.songs.map((song, index) =>{
            const count = (index + 1).toString().padStart(2, '0');
            return `
            <div class="song d-flex">
                <div class="left d-flex">
                    <div class="count">${count}</div>
                        <a href="#player">
                            <div class="image-container play-pause">
                                <img src=${song.image} alt="" />
                            </div>
                        </a>
                    <div class="name d-flex">
                        <div class="song-name">${song.name}</div>
                        <div class="singer-name">${song.singer}</div>
                    </div>
                </div>
                <div class="right">
                    <input type="checkbox" class="toggle-button">
                    <div class="favourite">
                </div>
            </div>
            </div>
            `
        })
        $('.sidebar-main').innerHTML = htmls.join('')
    },
    renderCarousel:function(){
        const CarouselSongs = this.songs.slice(0, 3); // Chỉ lấy 4 bài hát đầu tiên
        const htmls = CarouselSongs.map(song => {
            return `
                        <div class="carousel-item active">
                            <img src="${song.image}" alt="">
                        </div>
            `
        })
        $('.row').innerHTML = htmls.join('')
    },
    renderLatestRelease: function() {
        const latestSongs = this.songs.slice(0, 4); // Chỉ lấy 4 bài hát đầu tiên
        const htmls = latestSongs.map(song => {
            return `
            <div class="latest-artist d-flex">
                <div class="left d-flex">
                    <a href="#player">
                        <div class="image-container play-pause" tabindex="1">
                            <img src="${song.image}" alt="">
                        </div>
                    </a>
                    <div class="details">
                        <p class="name">${song.name}</p>
                        <p class="date">AUG 11, 2020</p>
                    </div>
                </div>
                <div class="right d-flex">
                    <div class="dropdown-container" tabindex="1">
                        <div class="dropdown">
                            <ul class="list">
                                <li>
                                    <a href="#player">
                                        <span class="material-icons-round ">
                                            play_arrow
                                        </span>
                                        <span> Play Now</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#player">
                                        <span class="material-icons-round ">
                                            add
                                        </span>
                                        <span> Add to Queue</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#player">
                                        <span class="material-icons-round ">
                                            playlist_add
                                        </span>
                                        <span> Add to Favourites</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#player">
                                        <span class="material-icons-round ">
                                            info
                                        </span>
                                        <span> Get Info</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="menu-icon">
                            <span class="material-icons-round">
                                more_horiz
                            </span>
                        </div>
                    </div>
                    <div class="length">
                        4:44
                    </div>
                </div>
            </div>
            `;
        });
        $('.section-container').innerHTML = htmls.join('');
    },
    
    start:function(){
        //render phần Queue
        this.rendersong()
        //render phần đầu
        this.renderCarousel()
        //render phần Latest Release
        this.renderLatestRelease()

    }
}

app.start()

