import type { LocalizedText } from '$lib/i18n';

import photo01 from '$lib/assets/res/gallery/interior-01.webp?enhanced';
import photo02 from '$lib/assets/res/gallery/interior-02.webp?enhanced';
import photo03 from '$lib/assets/res/gallery/interior-03.webp?enhanced';
import photo04 from '$lib/assets/res/gallery/interior-04.webp?enhanced';
import photo05 from '$lib/assets/res/gallery/interior-05.webp?enhanced';
import photo06 from '$lib/assets/res/gallery/interior-06.webp?enhanced';
import photo07 from '$lib/assets/res/gallery/interior-07.webp?enhanced';
import photo08 from '$lib/assets/res/gallery/interior-08.webp?enhanced';
import photo09 from '$lib/assets/res/gallery/interior-09.webp?enhanced';

export interface GalleryPhoto {
	src: typeof photo01;
	alt: LocalizedText;
}

export const galleryPhotos: GalleryPhoto[] = [
	{
		src: photo01,
		alt: {
			en: 'Dining room with exposed brick walls, a glowing red pendant lamp, and a wall-mounted sitar and mandolin.',
			hu: 'Étkezőtér tégla falakkal, izzó vörös függőlámpával, valamint a falon díszelgő sitárral és mandolinnal.'
		}
	},
	{
		src: photo02,
		alt: {
			en: 'Cozy dining corner with sheer patterned curtains and a red glass pendant lamp.',
			hu: 'Hangulatos étkezősarok mintás függönyökkel és vörös üveg függőlámpával.'
		}
	},
	{
		src: photo03,
		alt: {
			en: 'Dining room with mounted TV, woven wall art, and tables set with colorful mandala placemats.',
			hu: 'Étkezőtér felszerelt TV-vel, szövött falképpel és színes mandala terítővel megterített asztalokkal.'
		}
	},
	{
		src: photo04,
		alt: {
			en: 'Outdoor terrace seating with a large umbrella on a paved patio.',
			hu: 'Kültéri terasz nagy napernyővel, kövezett teraszon.'
		}
	},
	{
		src: photo05,
		alt: {
			en: 'Warmly lit dining room with a shepherd tapestry and tables dressed in mandala-print linens.',
			hu: 'Meghitt fényű étkezőtér pásztorjelenetes faliszőnyeggel és mandala mintás terítőkkel megterített asztalokkal.'
		}
	},
	{
		src: photo06,
		alt: {
			en: 'Outdoor terrace with lounge seating and dining tables under the trees.',
			hu: 'Kültéri terasz pihenő ülőgarnitúrával és étkezőasztalokkal a fák alatt.'
		}
	},
	{
		src: photo07,
		alt: {
			en: 'Restaurant entrance with the Masala Garden sign and opening hours by the front door.',
			hu: 'Az étterem bejárata a Masala Garden felirattal és a nyitvatartással a bejárati ajtó mellett.'
		}
	},
	{
		src: photo08,
		alt: {
			en: 'Golden-hued dining room with embroidered curtains and a wall-mounted sitar.',
			hu: 'Aranyló fényű étkezőtér hímzett függönyökkel és a falra szerelt sitárral.'
		}
	},
	{
		src: photo09,
		alt: {
			en: 'View of the terrace and restaurant building from the garden.',
			hu: 'Kilátás a teraszra és az étterem épületére a kertből.'
		}
	}
];
