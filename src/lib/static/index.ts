import { Domain } from "../store/domains/domains.types"
import { Category } from "../store/static/static.types";

export interface SortData {
  sortName: 'name' | 'date' | 'price' | 'expiration',
  sortTitle: string,
  sortType: 'asc' | 'desc' | ''
}

export const DomainsData: Domain[] = [
  {
    id: 'Makho.ge',
    domain: 'Makho.ge',
    price: 25,
    categoryId: 'id1',
    zoneId: '.ge',
    inCart: false,
    addDate: (new Date(2015, 11, 10)).toString(),
    expirationDate: (new Date(2022, 11, 10)).toString()
  },
  {
    id: 'Makho.com.ge',
    domain: 'Makho.com.ge',
    price: 50,
    categoryId: 'id2',
    zoneId: '.com.ge',
    inCart: false,
    addDate: (new Date(2019, 11, 15)).toString(),
    expirationDate: (new Date(2021, 11, 10)).toString()
  },
  {
    id: 'Makho.net.ge',
    domain: 'Makho.net.ge',
    price: 75,
    categoryId: 'id3',
    zoneId: '.net.ge',
    inCart: false,
    addDate: (new Date(2015, 11, 15)).toString(),
    expirationDate: (new Date(2020, 11, 10)).toString()
  },
  {
    id: 'Makho.org.ge',
    domain: 'Makho.org.ge',
    price: 50,
    categoryId: 'id4',
    zoneId: '.org.ge',
    inCart: false,
    addDate: (new Date(2023, 0, 0)).toString(),
    expirationDate: (new Date(2025, 11, 10)).toString()
  },
  {
    id: 'Makho.edu.ge',
    domain: 'Makho.edu.ge',
    price: 80,
    categoryId: 'id5',
    zoneId: '.edu.ge',
    inCart: false,
    addDate: (new Date(2023, 0, 1)).toString(),
    expirationDate: (new Date(2025, 11, 10)).toString()
  },
  {
    id: 'Makho.school.ge',
    domain: 'Makho.school.ge',
    price: 100,
    categoryId: 'id6',
    zoneId: '.school.ge',
    inCart: false,
    addDate: (new Date(2023, 10, 15)).toString(),
    expirationDate: (new Date(2025, 11, 10)).toString()
  }
];

export const zones: Category[]  = [
  {
    id: '.ge',
    text: '.ge',
    active: false
  },
  {
    id: '.com.ge',
    text: '.com.ge',
    active: false
  },
  {
    id: '.net.ge',
    text: '.net.ge',
    active: false
  },
  {
    id: '.org.ge',
    text: '.org.ge',
    active: false
  },
  {
    id: '.edu.ge',
    text: '.edu.ge',
    active: false
  },
  {
    id: '.school.ge',
    text: '.school.ge',
    active: false
  }
]

export const categories: Category[] = [
  {
    id: 'id1',
    text: 'ბიზნესი',
    active: false
  },
  {
    id: 'id2',
    text: 'უძრავი ქონება',
    active: false
  },
  {
    id: 'id3',
    text: 'მედიცინა',
    active: false
  },
  {
    id: 'id4',
    text: 'ტექნოლოგია',
    active: false
  },
  {
    id: 'id5',
    text: 'კომერცია',
    active: false
  },
  {
    id: 'id6',
    text: 'ფინანსები',
    active: false
  }
]

export const sortsData: SortData[] = [
  {
    sortName: 'date',
    sortTitle: 'დამატების თარიღით',
    sortType: ''
  },
  {
    sortName: 'expiration',
    sortTitle: 'ვადის ამოწურვით',
    sortType: ''
  },
  {
    sortName: 'price',
    sortTitle: 'ფასით',
    sortType: ''
  },
  {
    sortName: 'name',
    sortTitle: 'ანბანით',
    sortType: ''
  },
]

export const USD_TO_GEL = 2.66;