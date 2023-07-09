import { DAT_GHE, HUY_GHE } from "../types/BookingTicketTypes";

const initialState = {
  danhSachGheDangDat: [],
};

export const bookingTicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case DAT_GHE: {
      let newDanhSachGheDangDat = [...state.danhSachGheDangDat];
      let index = newDanhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe
      );
      if (index !== -1) {
        newDanhSachGheDangDat.splice(index, 1);
      } else {
        newDanhSachGheDangDat.push(action.ghe);
      }
      return {
        ...state,
        danhSachGheDangDat: newDanhSachGheDangDat,
      };
    }
    case HUY_GHE: {
      let newDanhSachGheDangDat = [...state.danhSachGheDangDat];
      let index = newDanhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.soGhe
      );
      if (index !== -1) {
        newDanhSachGheDangDat.splice(index, 1);
      } else {
        newDanhSachGheDangDat.push(action.ghe);
      }
      return {
        ...state,
        danhSachGheDangDat: newDanhSachGheDangDat,
      };
    }

    default:
      return state;
  }
};
