
/*
 * Representation of one trip as teaser
 */
export default function Teaser(x) {
    function handleClick() {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1","_self")
    }

    return (
        <div key={x.teaserObj.id} className="bg-slate-white shadow-xl rounded-xl flex flex-col">
            <span className="bg-red-400 text-white text-s font-bold mx-auto -mb-10 me-2 px-3 py-0.5 rounded-full z-10">{x.teaserObj.badge}</span>
            <img src={x.teaserObj.imgsrc} alt={x.teaserObj.imgalt} className="rounded-t-xl"/>
            <div className="w-5/6 mx-auto mt-0 mb-3">
                <p className="text-xl font-bold">{x.teaserObj.name}</p>
                <Stars count={x.teaserObj.stars}/>
                <p className="mt-1">{x.teaserObj.des}</p>
                <p className="mt-2">{x.teaserObj.locale.country}, {x.teaserObj.locale.province}, {x.teaserObj.locale.city}</p>
                <ul className="mt-2 list-disc">
                    {x.teaserObj && x.teaserObj.uspList.map((data, index) => (
                        <li key={index} className="text-left">{data}</li>
                    ))}
                </ul>
                <p className="mt-3 font-bold">ab {x.teaserObj.startingPrice}€ p.p.</p>
                <button className="mt-2 text-xl font-bold bg-cyan-900 text-white py-1 rounded-xl px-8" onClick={handleClick}>
                    Jetzt Buchen
                </button>
            </div>
        </div>
    )
}

/*
 * Draws n yellow stars according to trip data "stars"
 * Draws 5-n grey stars according to trip data "stars"
 */
function Stars(x) {
    const yellowStars = x.count;
    const greyStars = (5 - x.count);
    return (
        <div className="flex justify-center mt-1">
            <div className="flex items-center">
                {/*Yellow Stars*/}
                {
                    [...Array(yellowStars)].map((e,i) => (
                        <svg className="w-4 h-4 text-yellow-300 ms-1" key={i} aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg"
                             fill="currentColor" viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                    ))
                }
                {
                    [...Array(greyStars)].map((e,i) => (
                        <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" key={i} aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                    ))
                }
            </div>
        </div>
    )
}