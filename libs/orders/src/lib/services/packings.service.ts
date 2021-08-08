import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Packing } from "../models/packing";

@Injectable({
  providedIn: 'root'
})
export class PackingsService {

  constructor() { }

  getPackings(): Observable<Packing[]> {
    const ps: Packing[] = [
      {
        id: '1',
        name: 'Packet Flat',
        width: 15,
        height: 25,
        depth: 1
      },
      {
        id: '2',
        name: 'Packet S',
        width: 15,
        height: 25,
        depth: 15
      },
      {
        id: '3',
        name: 'Packet M',
        width: 25,
        height: 35,
        depth: 25
      }
    ];
    return of(ps);
  }
}
