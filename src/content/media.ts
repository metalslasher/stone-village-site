import type { ProductId } from './products';

export interface MediaRecord {
  file: string;
  kind: 'photo' | 'developer-render' | 'interior-visualization' | 'plan' | 'video';
  source: string;
  usedIn: string[];
  note?: string;
  product?: ProductId;
}

// Inventory of production media: origin and kind stay here and in alt text, not in visible captions.
// Photos are archive material from the developer — never present them as the current state.
// Interiors are design visualizations; homes are handed over with rough finish.
const tilda = 'https://static.tildacdn.net/';
export const mediaManifest: readonly MediaRecord[] = [
  { file: 'public/media/hero/hero-video.mp4', kind: 'video', source: 'hero_video provided by the project owner', usedIn: ['home hero'] },
  { file: 'environment/village-forest.jpg', kind: 'developer-render', source: `${tilda}tild6134-3665-4538-a338-396661356562/_-min.jpg`, usedIn: ['home territory'] },
  { file: 'environment/village-street.jpg', kind: 'developer-render', source: `${tilda}tild3634-3463-4136-b262-373532346463/Render_4_2.jpg`, usedIn: ['home closing'] },
  { file: 'environment/evening-street.jpg', kind: 'developer-render', source: `${tilda}tild3535-6537-4633-b864-343866346230/Render_14_1.jpg`, usedIn: ['home gallery'] },
  { file: 'infrastructure/shared-spaces.jpg', kind: 'developer-render', source: `${tilda}tild3939-3330-4865-a238-333165313762/Render_8.jpg`, usedIn: ['home infrastructure camera'], note: 'Court, gym, playground and guard post identified via presentation p. 6.' },
  { file: 'infrastructure/village-entrance.jpg', kind: 'developer-render', source: `${tilda}tild3933-3434-4564-b636-373635383032/Render_2_21.jpg`, usedIn: ['home care'] },
  { file: 'architecture/duplex-facade.jpg', kind: 'developer-render', source: `${tilda}tild3962-3837-4633-a164-376230666564/Render_1-min.jpg`, usedIn: ['duplex opening'], product: 'duplex-185' },
  { file: 'products/duplex-terrace.jpg', kind: 'developer-render', source: `${tilda}tild3934-6264-4436-b962-303165306562/Render_4.jpg`, usedIn: ['home duplex', 'duplex terrace', 'cottage cross-link'], product: 'duplex-185' },
  { file: 'products/cottage-garden.jpg', kind: 'developer-render', source: `${tilda}tild6237-3233-4766-b032-316531376563/fin21_4.jpg`, usedIn: ['home cottage', 'cottage opening', 'duplex cross-link'], product: 'cottage-228', note: 'Pool is a landscaping option, not included equipment.' },
  { file: 'products/cottage-aerial.jpg', kind: 'developer-render', source: `${tilda}tild6437-3738-4630-a338-666665393533/File_1.jpg`, usedIn: ['cottage rarity'], product: 'cottage-228' },
  { file: 'products/cottage-yard.jpg', kind: 'developer-render', source: `${tilda}tild3666-6538-4431-b337-623334643036/File.jpg`, usedIn: ['cottage yard', 'home gallery'], product: 'cottage-228' },
  { file: 'products/cottage-carport.jpg', kind: 'developer-render', source: `${tilda}tild3262-6234-4330-a537-346662663730/File_2.jpg`, usedIn: ['cottage details'], product: 'cottage-228' },
  { file: 'products/cottage-evening.jpg', kind: 'developer-render', source: `${tilda}tild3463-6338-4366-b761-343631363463/1-min.jpeg`, usedIn: ['cottage evening', 'home gallery'], note: 'Cottage block of the official page; exact house type not labelled.' },
  { file: 'gallery/gardens.jpg', kind: 'developer-render', source: `${tilda}tild3634-6434-4564-b034-623166303539/Render_7.jpg`, usedIn: ['home gallery'] },
  { file: 'gallery/winter-street.jpg', kind: 'developer-render', source: `${tilda}tild3965-3361-4134-b136-646662663833/2_250_night_1.jpg`, usedIn: ['home gallery'] },
  { file: 'interiors/living-room.jpg', kind: 'interior-visualization', source: `${tilda}tild3637-3434-4436-a531-393837323163/File_3.jpg`, usedIn: ['home gallery', 'duplex interiors'] },
  { file: 'interiors/kitchen.jpg', kind: 'interior-visualization', source: `${tilda}tild6461-3662-4131-b738-383264363565/File_2.jpg`, usedIn: ['home gallery', 'duplex interiors'] },
  { file: 'interiors/study.jpg', kind: 'interior-visualization', source: `${tilda}tild6638-6466-4634-b035-356235656631/File_4.jpg`, usedIn: ['duplex interiors'] },
  { file: 'interiors/living-stairs.jpg', kind: 'interior-visualization', source: `${tilda}tild3931-3463-4364-a136-636232633765/File_1.jpg`, usedIn: ['home gallery', 'cottage interiors'] },
  { file: 'interiors/bedroom.jpg', kind: 'interior-visualization', source: `${tilda}tild3262-6263-4462-b961-613738353936/File_4.jpg`, usedIn: ['cottage interiors'] },
  { file: 'interiors/kids-room.jpg', kind: 'interior-visualization', source: `${tilda}tild3964-6434-4433-b962-383536303533/File_2.jpg`, usedIn: ['cottage interiors'] },
  { file: 'architecture/facade-detail-april-2024.jpg', kind: 'photo', source: 'https://static.tildacdn.one/tild3532-3131-4336-a433-363132646365/IMG_0481-min.jpeg', usedIn: ['home quality'], note: 'Developer progress report, April 2024.' },
  { file: 'proof/row-by-forest-april-2024.jpg', kind: 'photo', source: 'https://static.tildacdn.one/tild6566-3566-4439-b238-643066613965/IMG_0613-min.jpeg', usedIn: ['home proof'], note: 'Developer progress report, April 2024.' },
  { file: 'proof/street-april-2024.jpg', kind: 'photo', source: 'https://static.tildacdn.one/tild3563-6637-4766-a136-316635353435/IMG_0444-min.jpeg', usedIn: ['home proof'], note: 'Developer progress report, April 2024.' },
  { file: 'proof/winter-duplexes.jpg', kind: 'photo', source: 'assets/research/progress/2.jpg (stonedevelopment.com.ua/projects/stone_village/building24_04_1)', usedIn: ['home proof', 'duplex proof'], note: 'Archive photo; exact date unknown.' },
  { file: 'public/media/plans/*.jpg', kind: 'plan', source: 'LUN developer layouts Duplex185/Type3 and Cottage228/Type5-12', usedIn: ['residence plans'] },
];
