export interface Cam {
  id: string;
  name: string;
  streamUrl: string;
  thumbnailUrl: string;
}

export const cams: Cam[] = [
  {
    id: 'biarritz-cote-des-basques',
    name: 'Biarritz - La Côte des Basques',
    streamUrl: 'https://ds1-cache.quanteec.com/contents/encodings/live/4ec957fc-fea2-49f2-3530-3130-6d61-63-872c-0869d3d9cef1d/media_1.m3u8',
    thumbnailUrl: 'https://placehold.co/1280x720/0f172a/white?text=Biarritz'
  },
  {
    id: 'bidart-plage-du-centre',
    name: 'Bidart - Plage du Centre',
    streamUrl: 'https://ds2-cache.quanteec.com/contents/encodings/live/36f2d43a-6345-4afd-3031-3130-6d61-63-8139-e6d142b8a4c3d/master.m3u8',
    thumbnailUrl: 'https://placehold.co/1280x720/0284c7/white?text=Bidart'
  }
];
