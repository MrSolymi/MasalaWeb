export const siteOrigin = 'https://masalagarden.hu';

const phoneDigits = '+36306803882';

export const restaurant = {
	name: 'Masala Garden',
	address: {
		en: { line1: '50 Darabos Street', line2: '4026 Debrecen, Hungary' },
		hu: { line1: 'Darabos utca 50.', line2: '4026 Debrecen' }
	},
	phone: '+36 30 680 3882',
	phoneHref: `tel:${phoneDigits}`,
	email: 'masalagarden75@gmail.com',
	// Open every day of the week, same hours.
	hours: { open: '11:00', close: '23:00' },
	seats: 40,
	coordinates: { lat: 47.5379055, lon: 21.6234849 },
	get mapEmbedSrc() {
		const { lat, lon } = this.coordinates;
		const dLat = 0.0025;
		const dLon = 0.004;
		const bbox = [lon - dLon, lat - dLat, lon + dLon, lat + dLat].join(',');
		return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`;
	},
	mapLinkHref: 'https://www.google.com/maps/search/?api=1&query=Darabos+utca+50,+4026+Debrecen,+Hungary',
	woltUrl: 'https://wolt.com/hu/hun/debrecen/restaurant/masala-garden-1',
	facebookUrl: 'https://www.facebook.com/p/Masala-Garden-61589839560438/',
	instagramUrl: 'https://www.instagram.com/masalagarden_restaurant/',
	popularDishIds: [
		'biryani-chicken',
		'main-butter-chicken',
		'bread-garlic-naan',
		'tandoor-lamb-seekh-kebab',
		'veg-chana-masala'
	] as const,
	highlights: [
		{ icon: 'users', label: { en: '40 seats', hu: '40 fő befogadóképesség' } },
		{ icon: 'trees', label: { en: 'Outdoor terrace (36 seats)', hu: 'Terasz (36 fő)' } },
		{ icon: 'car', label: { en: 'Parking available', hu: 'Parkolási lehetőség' } }
	]
};
