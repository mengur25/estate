import "./filter.scss"

function Filter() {
    return (
        <div className="filter">
            <h1>Serach results for</h1>
            <div className="top">
                <div className="item">
                    <label htmlFor="city">Location</label>
                    <input type="text" id="city" name="city" placeholder="City location" />
                </div>
            </div>
            <div className="bottom">
                <div className="item">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type">
                        <option value="">Any</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="property">Property</label>
                    <select name="property" id="property">
                        <option value="">Any</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="condo">Condo</option>
                        <option value="land">Land</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="minPrice">Min Price</label>
                    <input type="number" id="minPrice" name="minPrice" placeholder="0" min={0}/>
                </div>
                <div className="item">
                    <label htmlFor="maxPrice">Max Price</label>
                    <input type="number" id="maxPrice" name="maxPrice" placeholder="0" min={0}/>
                </div>
                <div className="item">
                    <label htmlFor="bedRoom">Bedroom</label>
                    <input type="number" id="bedRoom" name="bedRoom" placeholder="0" />
                </div>
                <button>
                    <img src="search.png" alt="" />
                </button>
            </div>
        </div>
    )
}

export default Filter