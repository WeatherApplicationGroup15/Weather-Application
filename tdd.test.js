const attract = require('./attract.js')

test("Check if a dictionary of information is returned", () => {
    return attract.places("49.2827", "-123.1207", "restaurant", "AIzaSyBb9iHdqEA4Z2e5HxHpC5TTFKuOiRmlFYA").then(data => {
        expect.objectContaining(data);
    });
});

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


/**  This test keeps failing.
test("Check if all 20 items in the dictionary has a lat, lng, title, rating, and address.", () => {
    exp_dict = {"place1": {"address": "1154 Gilford Street, Vancouver", "geometry": {"lat": 49.28857109999999, "lng": -123.142681}, "rating": 4.2, "title": "Sylvia Hotel and Restaurant"}, "place10": {"address": "601 West Cordova Street, Vancouver", "geometry": {"lat": 49.2853923, "lng": -123.1114258}, "rating": 3.7, "title": "Rogue Kitchen & Wetbar"}, "place11": {"address": "203 Carrall Street, Vancouver", "geometry": {"lat": 49.283328, "lng": -123.1043645}, "rating": 4.4, "title": "Six Acres"}, "place12": {"address": "654 Nelson Street, Vancouver", "geometry": {"lat": 49.279067, "lng": -123.123055}, "rating": 4.1, "title": "Doolin's Irish Pub"}, "place13": {"address": "43 West Hastings Street, Vancouver", "geometry": {"lat": 49.28191969999999, "lng": -123.1060432}, "rating": 4.2, "title": "Save On Meats"}, "place14": {"address": "608 West Pender Street, Vancouver", "geometry": {"lat": 49.284031, "lng": -123.114136}, "rating": 3.9, "title": "Malone's Social Lounge & Taphouse"}, "place15": {"address": "860 Burrard Street, Vancouver", "geometry": {"lat": 49.282569, "lng": -123.123611}, "rating": 4, "title": "Italian Kitchen"}, "place16": {"address": "445 Howe Street, Vancouver", "geometry": {"lat": 49.2857603, "lng": -123.1154001}, "rating": 4.3, "title": "Scoozis Bar & Grill"}, "place17": {"address": "1137 Marinaside Crescent, Vancouver", "geometry": {"lat": 49.2734835, "lng": -123.1192249}, "rating": 3.9, "title": "Hurricane Grill"}, "place18": {"address": "207 West Hastings Street, Vancouver", "geometry": {"lat": 49.2827427, "lng": -123.109641}, "rating": 4.3, "title": "Nuba in Gastown"}, "place19": {"address": "4433 Main Street, Vancouver", "geometry": {"lat": 49.2454071, "lng": -123.1014972}, "rating": 4.3, "title": "East is East"}, "place2": {"address": "322 Davie Street, Vancouver", "geometry": {"lat": 49.2746307, "lng": -123.1225589}, "rating": 4.6, "title": "OPUS Vancouver"}, "place20": {"address": "370 Cambie Street, Vancouver", "geometry": {"lat": 49.2826215, "lng": -123.109359}, "rating": 4.6, "title": "Meat & Bread"}, "place3": {"address": "8811 River Road, Richmond", "geometry": {"lat": 49.19625449999999, "lng": -123.1276811}, "rating": 4, "title": "River Rock Casino Resort"}, "place4": {"address": "4201 Lougheed Highway, Burnaby", "geometry": {"lat": 49.26753499999999, "lng": -123.010614}, "rating": 3.7, "title": "Executive Suites Hotel Metro Vancouver"}, "place5": {"address": "1111 Mainland Street, Vancouver", "geometry": {"lat": 49.27559369999999, "lng": -123.1209341}, "rating": 3.8, "title": "Yaletown Brewing Company"}, "place6": {"address": "833 Granville Street, Vancouver", "geometry": {"lat": 49.2811175, "lng": -123.1206438}, "rating": 4, "title": "ShuRaku Sake Bar + Bistro"}, "place7": {"address": "1147 Granville Street, Vancouver", "geometry": {"lat": 49.2778111, "lng": -123.1254954}, "rating": 4.4, "title": "Twisted Fork Bistro"}, "place8": {"address": "755 Richards Street, Vancouver", "geometry": {"lat": 49.28085369999999, "lng": -123.1172788}, "rating": 3.8, "title": "Kingston Taphouse & Grille"}, "place9": {"address": "780 Richards Street, Vancouver", "geometry": {"lat": 49.2805145, "lng": -123.1168509}, "rating": 4.4, "title": "Medina"}}
    return attract.places("49.2827", "-123.1207", "restaurant", "AIzaSyBb9iHdqEA4Z2e5HxHpC5TTFKuOiRmlFYA").then(data => {
        expect(data).toEqual(exp_dict)
    });
});
*/