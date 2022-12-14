import { City } from './types/types';

export enum AppRoute {
  Login = '/login',
  Root = '/',
  Room = '/offer',
  Id = ':id'
}

export enum SortTypes {
  POPULAR = 'Popular',
  LOW = 'Price: low to high',
  HIGH = 'Price: high to low',
  TOP = 'Top rated first'
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum NameSpace {
  Offers = 'OFFERS',
  Comments = 'COMMENTS',
  User = 'USER',
  App = 'APP',
}

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const cities: City[] = [
  {
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: 13,
    },
    name: 'Paris',
  },
  {
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 13,
    },
    name: 'Cologne',
  },
  {
    location: {
      latitude: 50.8505,
      longitude: 4.3488,
      zoom: 13,
    },
    name: 'Brussels',
  },
  {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 13,
    },
    name: 'Amsterdam',
  },
  {
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 13,
    },
    name: 'Hamburg',
  },
  {
    location: {
      latitude: 51.233334,
      longitude: 6.783333,
      zoom: 13,
    },
    name: 'Dusseldorf',
  },
];

export const ratingsList: { value: number; title: string }[] = [
  {
    value: 5,
    title: 'perfect',
  },
  {
    value: 4,
    title: 'good',
  },
  {
    value: 3,
    title: 'not bad',
  },
  {
    value: 2,
    title: 'badly',
  },
  {
    value: 1,
    title: 'terribly',
  },
];


