let initialState = {
  products: [],
  isAuth: false,
  isLoading: false,
  isErr: false,
};

const reducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    default: {
      return state;
    }
  }
};

export default reducer;
