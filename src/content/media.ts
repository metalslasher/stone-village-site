import type { ProductId } from './products';

export interface MediaRecord {
  id: string;
  kind: 'photo' | 'developer-render' | 'ai-visualization' | 'plan' | 'video';
  source: string;
  alt: string;
  width: number;
  height: number;
  product?: ProductId;
  focalPoint?: { desktop: string; mobile: string };
  publicUse: 'pending' | 'approved';
}

// Research downloads are not automatically promoted into production assets.
export const mediaManifest: readonly MediaRecord[] = [
  {
    "id": "village-entrance",
    "kind": "developer-render",
    "source": "https://static.tildacdn.net/tild3933-3434-4564-b636-373635383032/Render_2_21.jpg",
    "alt": "Візуалізація: В’їзд до Stone Village",
    "width": 1680,
    "height": 972,
    "publicUse": "pending"
  },
  {
    "id": "duplex-terrace",
    "kind": "developer-render",
    "source": "https://static.tildacdn.net/tild3934-6264-4436-b962-303165306562/Render_4.jpg",
    "alt": "Візуалізація: Дуплекс із терасою",
    "width": 1680,
    "height": 945,
    "publicUse": "pending"
  },
  {
    "id": "cottage-garden",
    "kind": "developer-render",
    "source": "https://static.tildacdn.net/tild6237-3233-4766-b032-316531376563/fin21_4.jpg",
    "alt": "Візуалізація: Окремий котедж із подвір’ям",
    "width": 1680,
    "height": 1129,
    "publicUse": "pending"
  },
  {
    "id": "duplex-facade",
    "kind": "developer-render",
    "source": "https://static.tildacdn.net/tild3962-3837-4633-a164-376230666564/Render_1-min.jpg",
    "alt": "Візуалізація: Фасад дуплекса",
    "width": 1400,
    "height": 788,
    "publicUse": "pending"
  },
  {
    "id": "village-forest",
    "kind": "developer-render",
    "source": "https://static.tildacdn.net/tild6134-3665-4538-a338-396661356562/_-min.jpg",
    "alt": "Візуалізація: Містечко поруч із лісом",
    "width": 1680,
    "height": 945,
    "publicUse": "pending"
  },
  {
    "id": "village-street",
    "kind": "developer-render",
    "source": "https://static.tildacdn.net/tild3634-3463-4136-b262-373532346463/Render_4_2.jpg",
    "alt": "Візуалізація: Вулиця містечка",
    "width": 1680,
    "height": 944,
    "publicUse": "pending"
  },
  {
    "id": "gardens",
    "kind": "developer-render",
    "source": "https://static.tildacdn.net/tild3634-6434-4564-b034-623166303539/Render_7.jpg",
    "alt": "Візуалізація: Подвір’я і тераси",
    "width": 1680,
    "height": 944,
    "publicUse": "pending"
  },
  {
    "id": "living-room",
    "kind": "developer-render",
    "source": "https://static.tildacdn.net/tild3637-3434-4436-a531-393837323163/File_3.jpg",
    "alt": "Візуалізація: Варіант інтер’єру",
    "width": 800,
    "height": 1280,
    "publicUse": "pending"
  },
  {
    "id": "winter-street",
    "kind": "developer-render",
    "source": "https://static.tildacdn.net/tild3965-3361-4134-b136-646662663833/2_250_night_1.jpg",
    "alt": "Візуалізація: Зимовий вечір у містечку",
    "width": 1680,
    "height": 945,
    "publicUse": "pending"
  },
{
  "id": "street-april-2024",
  "kind": "photo",
  "source": "https://static.tildacdn.one/tild3563-6637-4766-a136-316635353435/IMG_0444-min.jpeg",
  "alt": "Внутрішня вулиця Stone Village, фотозвіт квітень 2024",
  "width": 1680,
  "height": 2240,
  "publicUse": "pending"
},
{
  "id": "facade-april-2024",
  "kind": "photo",
  "source": "https://static.tildacdn.one/tild3035-6665-4163-a638-376139333664/-min.jpeg",
  "alt": "Фасад біля лісу, фотозвіт квітень 2024",
  "width": 1680,
  "height": 2240,
  "publicUse": "pending"
}
,{"id":"facade-detail-april-2024","kind":"photo","source":"https://static.tildacdn.one/tild3532-3131-4336-a433-363132646365/IMG_0481-min.jpeg","alt":"Деталь фасаду, архів забудовника квітень 2024","width":1680,"height":2240,"publicUse":"pending"},{"id":"shared-spaces","kind":"developer-render","source":"https://static.tildacdn.net/tild3939-3330-4865-a238-333165313762/Render_8.jpg","alt":"Майданчики й спільні простори Stone Village","width":1680,"height":944,"publicUse":"pending"},{"id":"evening-street","kind":"developer-render","source":"https://static.tildacdn.net/tild3535-6537-4633-b864-343866346230/Render_14_1.jpg","alt":"Вулиця Stone Village","width":1680,"height":944,"publicUse":"pending"}
];
