import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContacts,
  deleteContacts,
  updateContact,
} from './contactsOperation';

const extraActions = [
  fetchContacts,
  addContacts,
  deleteContacts,
  updateContact,
];

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addMatcher(
        isAnyOf(...extraActions.map(action => action.pending)),
        handlePending
      )
      .addMatcher(
        isAnyOf(...extraActions.map(action => action.fulfilled)),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(...extraActions.map(action => action.rejected)),
        handleRejected
      );
  },
});

export default contactSlice.reducer;
