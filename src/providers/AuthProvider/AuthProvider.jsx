import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { auth } from '../../firebase/firebase.config';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			setUser(user);
		});
		return () => unsubscribe();
	}, []);

	const createUser = ({ email, password }) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const signInUser = ({ email, password }) => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	const logOutUser = () => {
		return signOut(auth);
	};
	const authInfo = {
		user,
		createUser,
		signInUser,
		logOutUser,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node,
};

export default AuthProvider;
