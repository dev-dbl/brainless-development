import { Order } from "../models/order";

export const ORDERS_DUMMY: Order[] = [
  {
    id: '1',
    orderName: 'Order1',
    orderIdentifier: '12345',
    orderDate: new Date(),
    address: 'Text field address',
    status: 0,
    amount: 5.00,
    orderItem: {
      id: '1',
      name: 'something thats nice',
      quantity: 1,
      image: 'https://media-exp1.licdn.com/dms/image/C4D0BAQEKsNLpjydDpg/company-logo_200_200/0/1570557688920?e=2159024400&v=beta&t=DyZzu4ggpBJzjU8zNxHHRcXJQpnz0Y2NAAOL4A0HveQ'
    },
    orderAddress: {
      name: 'object address1',
      addressLine1: 'ad1',
      addressLine2: 'ad2',
      addressLine3: 'ad3',
      city: 'City1',
      county: 'County1',
      district: 'District1',
      stateOrRegion: 'sateOrRegion1',
      postalCode: 'zip1',
      countryCode: 'AUT1',
      phone: '+43xxx1'
    }
  },
  {
    id: '2',
    orderName: 'Order2',
    orderIdentifier: '23456',
    orderDate: new Date(),
    address: 'some text address 2',
    status: 1,
    amount: 10.50,
    orderItem: {
      id: '2',
      name: 'something thats awesome',
      quantity: 1,
      image: 'https://image.shutterstock.com/image-vector/awesome-fireworks-message-quote-sign-600w-718630882.jpgo'
    },
    orderAddress: {
      name: 'object address2',
      addressLine1: 'ad1',
      addressLine2: 'ad2',
      addressLine3: 'ad3',
      city: 'City2',
      county: 'County2',
      district: 'District2',
      stateOrRegion: 'sateOrRegion2',
      postalCode: 'zip2',
      countryCode: 'AUT2',
      phone: '+43xxx2'
    }
  },
  {
    id: '3',
    orderName: 'Order3',
    orderIdentifier: '34567',
    orderDate: new Date(),
    address: 'Test User',
    status: 1,
    amount: 10.50,
    orderItem: {
      id: '2',
      name: 'something thats awesome',
      quantity: 1,
      image: 'https://image.shutterstock.com/image-vector/awesome-fireworks-message-quote-sign-600w-718630882.jpgo'
    },
    orderAddress: {
      name: 'Hauptstr. 3',
      addressLine1: 'Tür 3',
      city: 'Teststadt',
      county: 'Testland',
      postalCode: '3333',
      countryCode: 'TLA',
      phone: '+43xxx3'
    }
  },
  {
    id: '4',
    orderName: 'Order4',
    orderIdentifier: '45678',
    orderDate: new Date(),
    status: 1,
    amount: 10.50,
    orderItem: {
      id: '2',
      name: 'something thats awesome',
      quantity: 1,
      image: 'https://image.shutterstock.com/image-vector/awesome-fireworks-message-quote-sign-600w-718630882.jpgo'
    }
  }
];
