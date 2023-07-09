import { configureStore } from "@reduxjs/toolkit";
import { bookingTicketReducer } from "./reducer/BookingTicketReducer";

export const store = configureStore({
  reducer: {
    tickets: bookingTicketReducer,
  },
});
