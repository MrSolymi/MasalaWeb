import type { LocalizedText } from '$lib/i18n';

export type Allergen = 'gluten' | 'lactose' | 'nuts' | 'legumes';

export interface MenuItem {
	id: string;
	name: LocalizedText;
	description?: LocalizedText;
	price: number;
	priceNote?: string;
	allergens?: Allergen[];
	image?: string;
}

export interface MenuCategory {
	id: string;
	name: LocalizedText;
	image?: string;
	items: MenuItem[];
}

// Dish photos live in src/lib/assets/res/dishes, named to match each item's id.
// Bulk-imported so menu.ts doesn't need 70+ individual import statements.
const dishImageModules = import.meta.glob('../assets/res/dishes/*.webp', {
	eager: true,
	import: 'default'
}) as Record<string, string>;

function dish(id: string): string | undefined {
	return dishImageModules[`../assets/res/dishes/${id}.webp`];
}

function item(
	id: string,
	name: LocalizedText,
	price: number,
	opts: { description?: LocalizedText; priceNote?: string; allergens?: Allergen[] } = {}
): MenuItem {
	return { id, name, price, image: dish(id), ...opts };
}

export const menuCategories: MenuCategory[] = [
	{
		id: 'soups',
		name: { en: 'Soups', hu: 'Levesek' },
		items: [
			item(
				'soup-lentil',
				{ en: 'Lentil Soup', hu: 'Lencsekrémleves' },
				2270,
				{
					description: {
						en: 'Spiced creamy lentil soup.',
						hu: 'Fűszerezett lencseleves.'
					},
					allergens: ['legumes']
				}
			),
			item('soup-tomato', { en: 'Tomato Soup', hu: 'Paradicsomleves' }, 2000, {
				description: {
					en: 'Rich tomato soup with Indian spices.',
					hu: 'Fűszeres paradicsomleves.'
				}
			}),
			item(
				'soup-chicken-curry',
				{ en: 'Curried Chicken Soup', hu: 'Currys csirkehúsos leves' },
				2530,
				{
					description: {
						en: 'Creamy chicken soup with curry spices.',
						hu: 'Curry alapú csirkehúsos leves.'
					}
				}
			)
		]
	},
	{
		id: 'starters',
		name: { en: 'Starters', hu: 'Előételek' },
		items: [
			item(
				'starter-veg-samosa',
				{ en: 'Vegetarian Samosa', hu: 'Zöldséges samosa' },
				1900,
				{
					description: {
						en: 'Crispy pastry filled with spiced vegetables.',
						hu: 'Ropogósra sült, háromszög alakú tésztabatyu fűszeres burgonyás-zöldséges töltelékkel.'
					},
					priceNote: '2 db',
					allergens: ['gluten']
				}
			),
			item(
				'starter-veg-pakora',
				{ en: 'Vegetarian Pakora', hu: 'Zöldséges pakora' },
				2525,
				{
					description: {
						en: 'Crispy vegetables fried in chickpea batter.',
						hu: 'Csicseriborsólisztes bundában sült, fűszeres zöldségfalatok.'
					},
					priceNote: '6 db',
					allergens: ['legumes']
				}
			),
			item(
				'starter-chicken-pakora',
				{ en: 'Chicken Pakora', hu: 'Csirkés pakora' },
				2900,
				{
					description: {
						en: 'Tender chicken in creamy butter-tomato sauce.',
						hu: 'Fűszeres, csicseriborsólisztes bundában ropogósra sült csirkefalatok.'
					},
					priceNote: '6 db',
					allergens: ['legumes']
				}
			),
			item(
				'starter-paneer-pakora',
				{ en: 'Paneer Pakora', hu: 'Sajtos pakora' },
				2535,
				{
					description: {
						en: 'Crispy paneer cheese in spiced chickpea batter.',
						hu: 'Fűszeres bundában sült indiai sajtfalatok.'
					},
					priceNote: '6 db',
					allergens: ['lactose', 'legumes']
				}
			),
			item(
				'starter-onion-bhaija',
				{ en: 'Onion Bhaija', hu: 'Hagyma batyu' },
				2000,
				{
					description: {
						en: 'Crispy spiced onion fritters fried to golden perfection.',
						hu: 'Fűszeres hagymacsíkok csicseriborsóliszttel bundázva.'
					},
					allergens: ['legumes']
				}
			),
			item(
				'starter-potato-bhaija',
				{ en: 'Potato Bhaija', hu: 'Burgonya batyu' },
				2000,
				{
					description: {
						en: 'Spicy potato strips coated with chickpea flour.',
						hu: 'Fűszeres burgonyacsíkok csicseriborsóliszttel bundázva.'
					},
					allergens: ['legumes']
				}
			),
			item('starter-papadam', { en: 'Papadam', hu: 'Papadam' }, 1500, {
				description: {
					en: 'Thin, crispy chips made from lentil flour.',
					hu: 'Vékony, ropogós lencseliszből készült chips.'
				},
				priceNote: '2 db',
				allergens: ['legumes']
			}),
			item(
				'starter-chicken-tikka',
				{ en: 'Chicken Tikka', hu: 'Csirke Tikka' },
				3900,
				{
					description: {
						en: 'Chicken nuggets marinated in spicy yogurt, roasted in tandoor.',
						hu: 'Fűszeres joghurtban pácolt, tandoorban sült csirkefalatok.'
					},
					priceNote: '6 db',
					allergens: ['lactose']
				}
			)
		]
	},
	{
		id: 'main-course',
		name: { en: 'Main Course', hu: 'Főételek' },
		items: [
			item('main-butter-chicken', { en: 'Butter Chicken', hu: 'Vajas csirke' }, 4800, {
				description: {
					en: 'Mildly seasoned chicken cooked in a creamy, tomato-butter sauce.',
					hu: 'Krémes, paradicsomos-vajas szószban főtt, lágyan fűszerezett csirkehús.'
				},
				allergens: ['lactose']
			}),
			item(
				'main-airline-chicken-breast',
				{ en: 'Airline Chicken Breast', hu: 'Airline csirkemell' },
				5200,
				{
					description: {
						en: 'Juicy fried spicy chicken breast served with bone and small wing tips.',
						hu: 'Csonttal és kis szárnyvéggel tálalt, szaftosan sült fűszeres csirkemell.'
					},
					allergens: ['lactose']
				}
			),
			item(
				'main-chicken-tikka-masala',
				{ en: 'Chicken Tikka Masala', hu: 'Csirkés tikka Masala' },
				4800,
				{
					description: {
						en: 'Marinated chicken breast fillet in spicy onion tomato sauce.',
						hu: 'Pácolt csirkemellfilé csípős hagymás paradicsomos mártásban.'
					},
					allergens: ['lactose']
				}
			),
			item('main-chicken-korma', { en: 'Chicken Korma', hu: 'Csirkés korma' }, 5000, {
				description: {
					en: 'Mildly seasoned chicken in a silky, creamy cashew sauce.',
					hu: 'Lágyan fűszerezett csirke, selymes, tejszínes-kesudiós szószban.'
				},
				allergens: ['lactose', 'nuts']
			}),
			item(
				'main-chicken-coconut-curry',
				{ en: 'Chicken Coconut Curry', hu: 'Kókuszos-currys csirke' },
				4800,
				{
					description: {
						en: 'Creamy chicken curry made with fragrant spices and coconut milk.',
						hu: 'Illatos fűszerekkel és kókusztejjel készült krémes csirkecurry.'
					},
					allergens: ['lactose', 'nuts']
				}
			),
			item(
				'main-chicken-vindaloo',
				{ en: 'Chicken Vindaloo', hu: 'Csirkés Vindaloo' },
				5130,
				{
					description: {
						en: 'Chicken breast cooked in a spicy sour sauce.',
						hu: 'Csípős savanyú szószban főzött csirkemell.'
					}
				}
			),
			item('main-chicken-curry', { en: 'Chicken Curry', hu: 'Currys csirke' }, 4800, {
				description: {
					en: 'Tender chicken cooked in a spicy sauce.',
					hu: 'Fűszeres szószban főtt omlós csirkehús.'
				}
			}),
			item(
				'main-lamb-roghan-josh',
				{ en: 'Lamb Roghan Josh', hu: 'Bárány Roghan Josh' },
				6000,
				{
					description: {
						en: 'Lamb leg cubes in a rich onion-tomato sauce.',
						hu: 'Báránycomb kockák, gazdag hagymás-paradicsomos szószban.'
					}
				}
			),
			item('main-lamb-curry', { en: 'Lamb Curry', hu: 'Bárányhúsos curry' }, 5500, {
				description: {
					en: 'Tender lamb slowly cooked in a spicy sauce.',
					hu: 'Fűszeres szószban lassan főtt, omlós bárányhús.'
				}
			}),
			item(
				'main-lamb-shank',
				{ en: 'Lamb Shank (Butter/Vindaloo Sauce)', hu: 'Bárány csülök (Vajas/Vindaloo szósz)' },
				6200,
				{
					description: {
						en: 'Slow-braised lamb shank with tender meat and rich seasoning.',
						hu: 'Lassan párolt báránycsülök, omlós hússal és gazdag fűszerezéssel.'
					},
					allergens: ['lactose']
				}
			),
			item('main-lamb-spinach', { en: 'Lamb Spinach', hu: 'Spenótos bárány' }, 5850, {
				description: {
					en: 'Spicy lamb in creamy spinach sauce.',
					hu: 'Fűszeres bárányhús krémes spenótos szószban.'
				}
			}),
			item('main-calf-curry', { en: 'Calf Curry', hu: 'Currys borjú' }, 5520, {
				description: {
					en: 'Slow-cooked, tender calf in a fragrant, spicy sauce.',
					hu: 'Lassú főzésű, omlós borjúhús, illatos, fűszeres mártásban.'
				}
			}),
			item('main-calf-vindaloo', { en: 'Calf Vindaloo', hu: 'Vindaloo szószos borjú' }, 5700, {
				description: {
					en: 'Powerful, hot and spicy calf curry with a piquant vinegar-tomato sauce.',
					hu: 'Erőteljes, csípős és fűszeres borjúcurry, pikáns ecetes-paradicsom szósszal.'
				}
			}),
			item(
				'main-calf-tikka-masala',
				{ en: 'Calf Tikka Masala', hu: 'Borjú Tikka Masala' },
				5600,
				{
					description: {
						en: 'Grilled calf pieces in a rich, creamy tomato-spice sauce.',
						hu: 'Grillezett borjúfalatok gazdag, krémes paradicsomos-fűszeres szószban.'
					}
				}
			),
			item(
				'main-calf-roghan-josh',
				{ en: 'Calf Roghan Josh', hu: 'Borjú Roghan Josh' },
				5600,
				{
					description: {
						en: 'Tender calf in an aromatic, thick tomato-spice sauce with a deep, rich flavor.',
						hu: 'Omlós borjúhús aromás, sűrű paradicsomos-fűszeres szószban, mély, gazdag ízvilággal.'
					}
				}
			),
			item('main-duck-leg', { en: 'Duck Leg', hu: 'Kacsa comb' }, 5000, {
				description: {
					en: 'Grilled duck leg marinated in rich Indian spices.',
					hu: 'Grillezett kacsa comb, gazdag indiai fűszerrel pácolva.'
				},
				allergens: ['lactose']
			})
		]
	},
	{
		id: 'vegetarian',
		name: { en: 'Vegetarian', hu: 'Vegetáriánus' },
		items: [
			item(
				'veg-mushroom-peas',
				{ en: 'Mushroom and Peas', hu: 'Gomba curry' },
				3300,
				{
					description: {
						en: 'Mushrooms and green peas in a spicy, silky sauce.',
						hu: 'Fűszeres, selymes mártásban készült gomba és zöldborsó.'
					},
					allergens: ['legumes']
				}
			),
			item(
				'veg-mix-paneer-curry',
				{ en: 'Mix Vegetarian Curry with Paneer', hu: 'Zöldséges curry' },
				3000,
				{
					description: {
						en: 'A variety of vegetables with spicy, rich Indian cheese.',
						hu: 'Változatos zöldségek fűszeres, gazdag indiai sajttal.'
					},
					allergens: ['lactose', 'legumes']
				}
			),
			item('veg-chana-masala', { en: 'Chana Masala', hu: 'Csicseriborsós Masala' }, 3500, {
				description: {
					en: 'Chickpeas seasoned with tomatoes and onions.',
					hu: 'Paradicsommal és hagymával fűszerezett csicseriborsó.'
				},
				allergens: ['legumes']
			}),
			item('veg-aloo-gobi', { en: 'Aloo Gobi', hu: 'Fűszeres karfiol' }, 3300, {
				description: {
					en: 'Cauliflower and potatoes cooked in a spicy, gingery tomato base.',
					hu: 'Fűszeres, gyömbéres paradicsomalapban készült karfiol és burgonya.'
				}
			}),
			item('veg-palak-chana', { en: 'Palak Chana', hu: 'Spenótos csicseriborsó' }, 3315, {
				description: {
					en: 'Chickpeas cooked on a bed of creamy spinach.',
					hu: 'Krémes spenótágyon főtt csicseriborsó.'
				},
				allergens: ['legumes']
			}),
			item('veg-palak-paneer', { en: 'Palak Paneer', hu: 'Spenótos sajt' }, 3850, {
				description: {
					en: 'Fresh Indian cheese cubes cooked in a silky, spicy spinach sauce.',
					hu: 'Selymes, fűszeres spenótszószban készült friss indiai sajtkockák.'
				},
				allergens: ['lactose']
			}),
			item('veg-paneer-masala', { en: 'Paneer Masala', hu: 'Sajtos Masala' }, 3850, {
				description: {
					en: 'Indian cheese cubes cooked in a spicy, thick tomato sauce.',
					hu: 'Fűszeres, sűrű paradicsomos mártásban készült indiai sajtkockák.'
				},
				allergens: ['lactose']
			}),
			item(
				'veg-paneer-tikka-masala',
				{ en: 'Paneer Tikka Masala', hu: 'Sajtos Tikka Masala' },
				3850,
				{
					description: {
						en: 'Indian, homemade cheese, grilled on a skewer, in tomato sauce.',
						hu: 'Nyárson sütött indiai, házi készítésű sajt, paradicsom szószban.'
					},
					allergens: ['lactose']
				}
			),
			item(
				'veg-paneer-butter-masala',
				{ en: 'Paneer Butter Masala', hu: 'Sajtos-Vajas Masala' },
				3850,
				{
					description: {
						en: 'Indian cheese cubes bathed in a silky, buttery tomato sauce.',
						hu: 'Selymes, vajas-paradicsomos mártásban fürdő indiai sajtkockák.'
					},
					allergens: ['lactose']
				}
			),
			item('veg-dal-makhani', { en: 'Dal Makhani', hu: 'Fekete vajas lencse' }, 4200, {
				description: {
					en: 'Long-cooked black lentils in a silky, buttery, creamy, spicy Indian sauce.',
					hu: 'Hosszan főzött fekete lencse selymes, vajas-krémes, fűszeres indiai szószban.'
				},
				allergens: ['lactose', 'legumes']
			}),
			item('veg-dal-tadka', { en: 'Dal Tadka', hu: 'Sárga lencse' }, 3000, {
				description: {
					en: 'Slightly spicy, fragrant yellow lentils tossed with golden spice oil.',
					hu: 'Aranyszínű fűszerolajjal megbolondított, enyhén csípős, illatos sárga lencse.'
				},
				allergens: ['legumes']
			})
		]
	},
	{
		id: 'tandoor-grill-fish',
		name: { en: 'Tandoor, Grill & Fish', hu: 'Tandoor, Grill, Tenger Gyümölcsei' },
		items: [
			item('tandoor-paneer-tikka', { en: 'Paneer Tikka', hu: 'Sajtos Tikka' }, 4200, {
				description: {
					en: 'Grilled Indian cheese cubes marinated in spicy yogurt, with a slightly smoky, spicy flavor.',
					hu: 'Fűszeres joghurtban pácolt, grillezett indiai sajtkockák, enyhén füstös, pikáns ízvilággal.'
				},
				priceNote: '6 db',
				allergens: ['lactose']
			}),
			item(
				'tandoor-chicken-malai-tikka',
				{ en: 'Chicken Malai Tikka', hu: 'Csirke malaj Tikka' },
				3900,
				{
					description: {
						en: 'Juicy grilled chicken bites marinated in creamy, slightly spicy yogurt, with a soft, buttery flavor.',
						hu: 'Krémes, enyhén fűszeres joghurtban pácolt, szaftosan grillezett csirkefalatok, lágy, vajas ízvilággal.'
					},
					allergens: ['lactose']
				}
			),
			item(
				'tandoor-chicken-hara-bhara-kebab',
				{ en: 'Chicken Hara Bhara Kebab', hu: 'Csirke Hara Bhara Kebab' },
				3900,
				{
					description: {
						en: 'Grilled chicken breast marinated with mint and fresh coriander.',
						hu: 'Mentával és friss koriander pácolt csirkemell, grillezve.'
					}
				}
			),
			item(
				'tandoor-lamb-seekh-kebab',
				{ en: 'Lamb Seekh Kebab', hu: 'Bárány csevapi' },
				5800,
				{
					description: {
						en: 'A skewered kebab made from spicy minced lamb, with a juicy and intense flavor.',
						hu: 'Fűszeres darált bárányból formázott, nyárson sült kebab, szaftos és intenzív ízvilággal.'
					}
				}
			),
			item('tandoor-shrimp-curry', { en: 'Shrimp Curry', hu: 'Garnélarákos curry' }, 4550),
			item('tandoor-salmon', { en: 'Tandoor Salmon', hu: 'Lazac Tandoorban' }, 5800),
			item('tandoor-salmon-curry', { en: 'Salmon Curry', hu: 'Currys lazac' }, 5800)
		]
	},
	{
		id: 'sides',
		name: { en: 'Sides', hu: 'Köretek' },
		items: [
			item('rice-steam-basmati', { en: 'Steam Basmati Rice', hu: 'Párolt Basmati rizs' }, 1100),
			item('rice-cumin-basmati', { en: 'Cumin Basmati Rice', hu: 'Köményes párolt rizs' }, 1300),
			item('rice-lemon-basmati', { en: 'Lemon Basmati Rice', hu: 'Citromos Basmati rizs' }, 1500),
			item('rice-green-pea-pulao', { en: 'Green Pea Pulao', hu: 'Zöldborsós rizs' }, 1200),
			item(
				'rice-mix-veg-pulao',
				{ en: 'Mix Vegetarian Pulao', hu: 'Vegyes zöldséges rizs' },
				1500
			),
			item('rice-channa-pulao', { en: 'Channa Pulao', hu: 'Csicseriborsós rizs' }, 1350, {
				allergens: ['legumes']
			}),
			item('rice-paneer-pulao', { en: 'Paneer Pulao', hu: 'Sajtos rizs' }, 2200, {
				allergens: ['lactose']
			})
		]
	},
	{
		id: 'breads',
		name: { en: 'Breads', hu: 'Kenyerek' },
		items: [
			item('bread-butter-naan', { en: 'Butter Naan', hu: 'Vajas lepénykenyér' }, 1100, {
				description: {
					en: 'Tandoor-baked Indian bread with melted butter.',
					hu: 'Tandoor kemencében sült indiai lepénykenyér olvasztott vajjal.'
				},
				allergens: ['gluten', 'lactose']
			}),
			item('bread-garlic-naan', { en: 'Garlic Naan', hu: 'Fokhagymás lepénykenyér' }, 1100, {
				description: {
					en: 'Tandoor-baked Indian bread topped with garlic and butter.',
					hu: 'Tandoor kemencében sült indiai lepénykenyér fokhagymával és vajjal.'
				},
				allergens: ['gluten', 'lactose']
			}),
			item(
				'bread-spicy-garlic-naan',
				{ en: 'Spicy Garlic Naan', hu: 'Csípős-fokhagymás lepénykenyér' },
				1100,
				{
					description: {
						en: 'Tandoor-baked Indian bread with spicy garlic and butter.',
						hu: 'Tandoor kemencében sült indiai lepénykenyér csípős fokhagymával és vajjal.'
					},
					allergens: ['gluten', 'lactose']
				}
			),
			item('bread-plain-naan', { en: 'Plain Naan', hu: 'Sima lepénykenyér' }, 990, {
				description: {
					en: 'Traditional soft Indian bread baked in a tandoor oven.',
					hu: 'Hagyományos puha indiai lepénykenyér tandoor kemencében sütve.'
				},
				allergens: ['gluten']
			}),
			item('bread-paneer-naan', { en: 'Paneer Naan', hu: 'Sajtos lepénykenyér' }, 1500, {
				description: {
					en: 'Tandoor-baked Indian bread stuffed with seasoned paneer cheese.',
					hu: 'Tandoor kemencében sült indiai lepénykenyér fűszeres paneer sajttal töltve.'
				},
				allergens: ['gluten', 'lactose']
			}),
			item('bread-brown-rooti', { en: 'Brown Rooti', hu: 'Rooti kenyér' }, 800, {
				description: { en: 'Soft whole-wheat flatbread.', hu: 'Puha, teljes kiőrlésű lepénykenyér.' },
				allergens: ['gluten']
			})
		]
	},
	{
		id: 'biryani',
		name: { en: 'Biryani', hu: 'Biryani' },
		items: [
			item('biryani-chicken', { en: 'Chicken Biryani', hu: 'Csirkés biryani' }, 4200, {
				description: {
					en: 'Fragrant basmati rice with chicken breast, slow-cooked in rich Indian spices.',
					hu: 'Illatos basmati rizs omlós csirkével, aromás indiai fűszerekkel lassan főzve.'
				}
			}),
			item('biryani-lamb', { en: 'Lamb Biryani', hu: 'Bárány biryani' }, 6200, {
				description: {
					en: 'Fragrant basmati rice with lamb, slow-cooked in aromatic Indian spices.',
					hu: 'Illatos basmati rizs omlós báránnyal, aromás indiai fűszerekkel lassan főzve.'
				}
			}),
			item('biryani-calf', { en: 'Calf Biryani', hu: 'Borjú biryani' }, 5200, {
				description: {
					en: 'Slow-cooked calf layered with aromatic rice and bold Indian spices.',
					hu: 'Lassan főtt borjúhús illatos rizzsel és karakteres indiai fűszerekkel rétegezve.'
				}
			})
		]
	},
	{
		id: 'dessert',
		name: { en: 'Dessert', hu: 'Desszertek' },
		items: [
			item('dessert-mango-kulfi', { en: 'Mango Kulfi', hu: 'Mangó Kulfi' }, 1650, {
				description: {
					en: 'Creamy Indian ice cream flavored with sweet ripe mango.',
					hu: 'Krémes indiai fagylalt édes, érett mangóval ízesítve.'
				},
				allergens: ['lactose']
			}),
			item('dessert-pistachio-kulfi', { en: 'Pistachio Kulfi', hu: 'Pisztácia Kulfi' }, 1990, {
				description: {
					en: 'Creamy Indian ice cream blended with rich pistachios.',
					hu: 'Krémes indiai fagylalt gazdag pisztáciával készítve.'
				},
				allergens: ['lactose', 'nuts']
			}),
			item('dessert-gulab-jamun', { en: 'Gulab Jamun', hu: 'Gulab Jamun' }, 1750, {
				description: {
					en: 'Soft milk dumplings soaked in warm sweet syrup.',
					hu: 'Puha tejgombócok meleg, édes szirupban áztatva.'
				},
				allergens: ['lactose']
			})
		]
	},
	{
		id: 'lassi',
		name: { en: 'Lassi', hu: 'Joghurtital' },
		items: [
			item('lassi-classic', { en: 'Classic Lassi', hu: 'Klasszikus Lassi' }, 1350, {
				priceNote: '4 dl',
				allergens: ['lactose']
			}),
			item('lassi-mango', { en: 'Mango Lassi', hu: 'Mangós Lassi' }, 1800, {
				priceNote: '4 dl',
				allergens: ['lactose']
			}),
			item('lassi-coconut', { en: 'Coconut Lassi', hu: 'Kókuszos Lassi' }, 1850, {
				priceNote: '4 dl',
				allergens: ['lactose', 'nuts']
			}),
			item(
				'lassi-mango-coconut',
				{ en: 'Mango Coconut Lassi', hu: 'Mangós-Kókuszos Lassi' },
				2150,
				{ priceNote: '4 dl', allergens: ['lactose', 'nuts'] }
			)
		]
	},
	{
		id: 'salads',
		name: { en: 'Salads', hu: 'Saláták' },
		items: [
			item(
				'salad-cucumber-yoghurt',
				{ en: 'Cucumber Salad with Spiced Yoghurt', hu: 'Joghurtos uborkasaláta' },
				1500,
				{
					description: {
						en: 'Fresh cucumber salad served with creamy spiced yoghurt.',
						hu: 'Friss uborkasaláta krémes, fűszeres joghurttal tálalva.'
					},
					allergens: ['lactose']
				}
			),
			item(
				'salad-onion-chili',
				{ en: 'Onion Salad with Green Chili', hu: 'Hagyma saláta zöld chilivel' },
				1200,
				{
					description: {
						en: 'Fresh sliced onions tossed with green chili and aromatic spices.',
						hu: 'Friss szeletelt hagyma zöld chilivel és aromás fűszerekkel összeforgatva.'
					}
				}
			),
			item(
				'salad-green-mix',
				{ en: 'Fresh Green Salad Mix', hu: 'Friss zöldséges saláta' },
				1500,
				{
					description: {
						en: 'Crisp mixed greens served fresh with seasonal vegetables.',
						hu: 'Ropogós vegyes zöldsaláta friss szezonális zöldségekkel.'
					}
				}
			)
		]
	},
	{
		id: 'sauces',
		name: { en: 'Sauces', hu: 'Szószok' },
		image: dish('sauces-group'),
		items: [
			item('sauce-mint', { en: 'Mint Fresh Sauce', hu: 'Mentás friss szósz' }, 800, {
				description: {
					en: 'Refreshing mint sauce with fresh herbs and aromatic spices.',
					hu: 'Frissítő mentaszósz friss fűszernövényekkel és aromás fűszerekkel.'
				}
			}),
			item('sauce-mango-chutney', { en: 'Mango Chutney', hu: 'Mangó chutney' }, 990, {
				description: {
					en: 'Sweet and tangy mango chutney with authentic Indian spices.',
					hu: 'Édes és pikáns mangó chutney autentikus indiai fűszerekkel.'
				}
			}),
			item(
				'sauce-sweet-sour',
				{ en: 'Sweet Sour Sauce', hu: 'Édes-savanyú szósz' },
				800
			)
		]
	},
	{
		id: 'kids',
		name: { en: 'Kids Menu', hu: 'Gyerek menü' },
		items: [
			item(
				'kids-fries-nuggets',
				{ en: 'French Fries + Chicken Nuggets', hu: 'Sült hasábburgonya csirke falatokkal' },
				2990
			)
		]
	}
];

export interface LunchDay {
	day: LocalizedText;
	soup: LocalizedText;
	vegetarian: LocalizedText;
	chicken: LocalizedText;
}

export const lunchMenu = {
	price: 3000,
	time: '11:30–14:00',
	note: {
		en: 'Served with rice or naan.',
		hu: 'Rizzsel vagy lepénykenyérrel tálalva.'
	},
	days: [
		{
			day: { en: 'Monday', hu: 'Hétfő' },
			soup: { en: 'Lentil Soup', hu: 'Lencse leves' },
			vegetarian: { en: 'Chana Masala', hu: 'Csicseriborsós Masala' },
			chicken: { en: 'Chicken Curry', hu: 'Currys csirke' }
		},
		{
			day: { en: 'Tuesday', hu: 'Kedd' },
			soup: { en: 'Tomato Soup', hu: 'Paradicsom leves' },
			vegetarian: { en: 'Aloo Palak', hu: 'Spenótos burgonya' },
			chicken: { en: 'Chicken Tikka Masala', hu: 'Csirkés Tikka Masala' }
		},
		{
			day: { en: 'Wednesday', hu: 'Szerda' },
			soup: { en: 'Pumpkin Soup', hu: 'Sütőtök krémleves' },
			vegetarian: { en: 'Aloo Ghobi', hu: 'Fűszeres burgonya karfiollal' },
			chicken: { en: 'Chicken Masala', hu: 'Csirkés Masala' }
		},
		{
			day: { en: 'Thursday', hu: 'Csütörtök' },
			soup: { en: 'Mix Vegetarian Soup', hu: 'Vegyes zöldségleves' },
			vegetarian: { en: 'Soyabean Peas', hu: 'Szójabab' },
			chicken: { en: 'Chicken Korma', hu: 'Csirkés korma' }
		},
		{
			day: { en: 'Friday', hu: 'Péntek' },
			soup: { en: 'Yellow Split Pea Soup', hu: 'Sárgaborsó leves' },
			vegetarian: { en: 'Mix Veggies', hu: 'Vegyes zöldségek' },
			chicken: { en: 'Kadai Chicken', hu: 'Csirke Kadai' }
		}
	] satisfies LunchDay[]
};

export interface DrinkItem {
	name: LocalizedText;
	price: number;
	size?: string;
}

export interface DrinkGroup {
	id: string;
	name: LocalizedText;
	items: DrinkItem[];
	note?: LocalizedText;
}

export const drinksMenu: DrinkGroup[] = [
	{
		id: 'soft-drinks',
		name: { en: 'Soft Drinks', hu: 'Üdítők' },
		items: [
			{ name: { en: 'Coca-Cola', hu: 'Coca-Cola' }, price: 850, size: '250 ml' },
			{ name: { en: 'Coca-Cola Zero', hu: 'Coca-Cola Zero' }, price: 850, size: '250 ml' },
			{
				name: { en: 'FuzeTea (Lemon Grass / Peach)', hu: 'FuzeTea (citromfű / barack)' },
				price: 850,
				size: '250 ml'
			},
			{ name: { en: 'Fanta', hu: 'Fanta' }, price: 850, size: '250 ml' },
			{ name: { en: 'Sprite', hu: 'Sprite' }, price: 850, size: '250 ml' },
			{ name: { en: 'Ginger', hu: 'Gyömbér' }, price: 850, size: '250 ml' },
			{
				name: { en: 'Water (Sparkling / Still)', hu: 'Víz (szénsavas / mentes)' },
				price: 700,
				size: '330 ml'
			},
			{
				name: { en: 'Cappy (Apple / Peach / Pineapple)', hu: 'Cappy (alma / barack / ananász)' },
				price: 990,
				size: '250 ml'
			}
		]
	},
	{
		id: 'coffee',
		name: { en: 'Coffee', hu: 'Kávé' },
		note: {
			en: 'Optional syrup +200 Ft (caramel, vanilla, hazelnut). Lactose-free available at no extra cost. Whipped cream +150 Ft.',
			hu: 'Választható szirup +200 Ft (karamell, vanília, mogyoró). Laktózmentes felár nélkül kérhető. Tejszínhab +150 Ft.'
		},
		items: [
			{ name: { en: 'Espresso', hu: 'Espresso' }, price: 800 },
			{ name: { en: 'Double Espresso', hu: 'Dupla espresso' }, price: 890 },
			{ name: { en: 'Cappuccino', hu: 'Cappuccino' }, price: 900 },
			{ name: { en: 'Long Coffee', hu: 'Hosszú kávé' }, price: 1000 },
			{ name: { en: 'Caffe Latte', hu: 'Caffe Latte' }, price: 1200 }
		]
	},
	{
		id: 'tea',
		name: { en: 'Tea', hu: 'Tea' },
		items: [{ name: { en: 'Masala Chai', hu: 'Masala Chai' }, price: 800 }]
	},
	{
		id: 'lemonade',
		name: { en: 'Lemonades', hu: 'Limonádék' },
		items: [
			{ name: { en: 'Mango Lemonade', hu: 'Mangó limonádé' }, price: 1550, size: '4 dl' },
			{ name: { en: 'Strawberry Lemonade', hu: 'Epres limonádé' }, price: 1550, size: '4 dl' },
			{ name: { en: 'Elderflower Lemonade', hu: 'Bodza limonádé' }, price: 1550, size: '4 dl' },
			{ name: { en: 'Rose Lemonade', hu: 'Rózsa limonádé' }, price: 1550, size: '4 dl' }
		]
	}
];

const priceFormatter = new Intl.NumberFormat('hu-HU');

export function formatPrice(price: number): string {
	return `${priceFormatter.format(price)} Ft`;
}

export function findMenuItem(id: string): MenuItem | undefined {
	for (const category of menuCategories) {
		const found = category.items.find((menuItem) => menuItem.id === id);
		if (found) return found;
	}
	return undefined;
}

export const allergenLabels: Record<Allergen, LocalizedText> = {
	gluten: { en: 'Gluten', hu: 'Glutén' },
	lactose: { en: 'Lactose', hu: 'Laktóz' },
	nuts: { en: 'Walnut, Hazelnut', hu: 'Dió, Mogyoró' },
	legumes: { en: 'Leguminous', hu: 'Hüvelyes' }
};
