import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../interfaces/User';

interface UserState {
    user: User | null;
}

const initialState: UserState = {
    user: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        createUser: (state, action: PayloadAction<{
            name: string, date: string, email: string;
            password: string;
            city: string;
            country: string;
            address: string;
            zipCode: string;
        }>) => {
            
            return {
                ...state,
                name: action.payload.name,
                date: action.payload.date,
                email: action.payload.email,
                password: action.payload.password,
                city: action.payload.city,
                country: action.payload.country,
                address: action.payload.address,
                zipCode: action.payload.zipCode,
            }
        },
        loginUser: (state, action: PayloadAction<{ email: string, password: string }>) => {
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
            }
        },
        logoutUser: (state) => {
            return {
                ...state,
                user: null,
            }
        },
    }
});

export const { createUser, loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;