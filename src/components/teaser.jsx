
export default function Teaser(x) {
    return (
        <div key={x.teaserObj.id} className="bg-slate-white shadow-xl rounded-xl flex flex-col">
            <img src={x.teaserObj.imgsrc} alt={x.teaserObj.imgalt} className="rounded-t-xl"/>
            <div className="w-5/6 mx-auto mt-0 mb-3">
                <p className="text-xl font-bold">{x.teaserObj.name}</p>
                <p className="mt-1">{x.teaserObj.des}</p>
                <p className="mt-2">{x.teaserObj.locale.country}, {x.teaserObj.locale.province}, {x.teaserObj.locale.city}</p>
                <ul className="mt-2 list-disc">
                    {x.teaserObj && x.teaserObj.uspList.map(data => <li key="" className="text-left">{data}</li>)}
                </ul>
            </div>
        </div>
    )
}