const attract = require('./attract.js')

test("Check if a dictionary of information is returned", () => {
    return attract.places("49.2827", "-123.1207", "restaurant", "AIzaSyBb9iHdqEA4Z2e5HxHpC5TTFKuOiRmlFYA").then(data => {
        expect.objectContaining(data);
    });
});
/*
test("Check if dictionary contains newly created place1", () => {
	return attract.places("49.2827", "-123.1207", "restaurant", "AIzaSyBb9iHdqEA4Z2e5HxHpC5TTFKuOiRmlFYA").then(data => {
		expect(data).toHaveProperty("place1")
	})
})

test("Check if the place1 dictionary contains lat", () => {
	return attract.places("49.2827", "-123.1207", "restaurant", "AIzaSyBb9iHdqEA4Z2e5HxHpC5TTFKuOiRmlFYA").then(data => {
		expect(data.place1.geometry).toHaveProperty("lat")
	})
})

test("Check if the place1 dictionary contains lng", () => {
	return attract.places("49.2827", "-123.1207", "restaurant", "AIzaSyBb9iHdqEA4Z2e5HxHpC5TTFKuOiRmlFYA").then(data => {
		expect(data.place1.geometry).toHaveProperty("lng")
	})
})

test("Check if the place1 dictionary contains title", () => {
	return attract.places("49.2827", "-123.1207", "restaurant", "AIzaSyBb9iHdqEA4Z2e5HxHpC5TTFKuOiRmlFYA").then(data => {
		expect(data.place1).toHaveProperty("title")
	})
})

test("Check if the place1 dictionary contains rating", () => {
	return attract.places("49.2827", "-123.1207", "restaurant", "AIzaSyBb9iHdqEA4Z2e5HxHpC5TTFKuOiRmlFYA").then(data => {
		expect(data.place1).toHaveProperty("rating")
	})
})

test("Check if the place1 dictionary contains address", () => {
	return attract.places("49.2827", "-123.1207", "restaurant", "AIzaSyBb9iHdqEA4Z2e5HxHpC5TTFKuOiRmlFYA").then(data => {
		expect(data.place1).toHaveProperty("address")
	})
})

test("Check if all 20 items in the dictionary has a lat, lng, title, rating, and address.", () => {
    exp_dict = {"place1": {"address": "1154 Gilford Street, Vancouver", "geometry": {"lat": 49.28857109999999, "lng": -123.142681}, "rating": 4.2, "title": "Sylvia Hotel and Restaurant"}, "place10": {"address": "568 Beatty Street, Vancouver", "geometry": {"lat": 49.2801271, "lng": -123.1099351}, "rating": 4.4, "title": "Chambar Restaurant"}, "place11": {"address": "1041 Southwest Marine Drive, Vancouver", "geometry": {"lat": 49.204754, "lng": -123.1307936}, "rating": 3.4, "title": "White Spot"}, "place12": {"address": "551 Howe Street, Vancouver", "geometry": {"lat": 49.2847945, "lng": -123.1168886}, "rating": 4.2, "title": "Joyeaux Café & Restaurant"}, "place13": {"address": "180 West Georgia Street, Vancouver", "geometry": {"lat": 49.27899299999999, "lng": -123.1131173}, "rating": 2.9, "title": "Moxie's Grill & Bar"}, "place14": {"address": "740 West Hastings Street, Vancouver", "geometry": {"lat": 49.28571079999999, "lng": -123.1147683}, "rating": 4, "title": "Caffe Artigiano"}, "place15": {"address": "1055 W Georgia St Royal Centre T1 Food Court, Unit 232, Vancouver", "geometry": {"lat": 49.2853401, "lng": -123.1215685}, "rating": 1, "title": "Subway"}, "place16": {"address": "2724 W 4th Ave, Vancouver", "geometry": {"lat": 49.2681884, "lng": -123.1670365}, "rating": 4.2, "title": "The Naam"}, "place17": {"address": "122 West Hastings Street, Vancouver", "geometry": {"lat": 49.2820404, "lng": -123.1080418}, "rating": 4.2, "title": "Catch 122 Cafe Bistro"}, "place18": {"address": "765 Beatty Street, Vancouver", "geometry": {"lat": 49.2781514, "lng": -123.1134082}, "rating": 4.1, "title": "Frankie's Italian Kitchen & Bar"}, "place19": {"address": "1689 Johnston Street, Vancouver", "geometry": {"lat": 49.272354, "lng": -123.134819}, "rating": 4.3, "title": "Stock Market"}, "place2": {"address": "322 Davie Street, Vancouver", "geometry": {"lat": 49.2746307, "lng": -123.1225589}, "rating": 4.6, "title": "OPUS Vancouver"}, "place20": {"address": "1087 Granville Street, Vancouver", "geometry": {"lat": 49.27848470000001, "lng": -123.1244726}, "rating": 4.3, "title": "The Templeton"}, "place3": {"address": "8811 River Road, Richmond", "geometry": {"lat": 49.19625449999999, "lng": -123.1276811}, "rating": 4, "title": "River Rock Casino Resort"}, "place4": {"address": "4201 Lougheed Highway, Burnaby", "geometry": {"lat": 49.26753499999999, "lng": -123.010614}, "rating": 3.7, "title": "Executive Suites Hotel Metro Vancouver"}, "place5": {"address": "1147 Granville Street, Vancouver", "geometry": {"lat": 49.2778111, "lng": -123.1254954}, "rating": 4.4, "title": "Twisted Fork Bistro"}, "place6": {"address": "780 Richards Street, Vancouver", "geometry": {"lat": 49.2805145, "lng": -123.1168509}, "rating": 4.4, "title": "Medina"}, "place7": {"address": "43 West Hastings Street, Vancouver", "geometry": {"lat": 49.28191969999999, "lng": -123.1060432}, "rating": 4.2, "title": "Save On Meats"}, "place8": {"address": "445 Howe Street, Vancouver", "geometry": {"lat": 49.2857603, "lng": -123.1154001}, "rating": 4.3, "title": "Scoozis Bar & Grill"}, "place9": {"address": "426 West Hastings Street, Vancouver", "geometry": {"lat": 49.28359039999999, "lng": -123.1115798}, "rating": 4.1, "title": "Bonchaz Bakery Cafe"}}
    return attract.places("49.2827", "-123.1207", "restaurant", "AIzaSyBb9iHdqEA4Z2e5HxHpC5TTFKuOiRmlFYA").then(data => {
        expect(data).toEqual(exp_dict)
    });
});
*/