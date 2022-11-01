import { FormArrayState } from 'ngrx-forms';

export interface ElderScroll {
  imageUrl: string;
  cardName: string;
  type: string;
  setName: string;
  cardText: string;
}
export interface ElderScrollApiResponse {
  cards: [
    {
      name: string;
      rarity: string;
      type: string;
      cost: number;
      set: {
        id: string;
        name: string;
        _self: string;
      };
      collectible: boolean;
      text: string;
      attributes: string[];
      unique: boolean;
      imageUrl: string;
      id: string;
    }
  ];
  _links: {
    next: string | undefined;
    prev: string | undefined;
  };
  _pageSize: number;
  _totalCount: number;
}

export interface Api {
  nextLink: string | undefined;
  previousLink: string | undefined;
}

export interface ElderScrollsState {
  cards: FormArrayState<ElderScroll>;
  api: Api;
  totalCount: number;
}
