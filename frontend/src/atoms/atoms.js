// src/atoms.js
import { atom } from 'recoil';

export const productsState = atom({
  key: 'productsState',
  default: [],
});


export const imageAtom = atom({
  key: 'imageState',
  default: ["https://images.unsplash.com/photo-1663269532290-70aa9866fe5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMHByb2R1Y3RzfGVufDB8fDB8fHww","https://images.unsplash.com/photo-1660820936286-e373574178d7?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://plus.unsplash.com/premium_photo-1681147271705-3555a5209048?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRlY2glMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D","https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D"],
})