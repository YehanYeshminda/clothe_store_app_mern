export const actionType = {
	SET_USER: 'SET_USER',
	SET_ISLOGGED_IN: 'SET_ISLOGGED_IN',
	SET_ITEMPRODUCTS: 'SET_ITEMPRODUCTS',
};

const reducer = (state, action) => {
	switch (action.type) {
		case actionType.SET_USER:
			return {
				...state,
				user: action.user,
			};
		case actionType.SET_ISLOGGED_IN:
			return {
				...state,
				isLoggedIn: action.isLoggedIn,
			};

		case actionType.SET_ITEMPRODUCTS:
			return {
				...state,
				ItemProducts: action.ItemProducts,
			};

		default:
			return state;
	}
};

export default reducer;
