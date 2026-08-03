// zustand is a small state management library. It will this app to read and update without
// passing a props down every leve.

// this store will hold information about logged-in user that many screens need
// Dashboard with user name, Profile needs verification status, etc

import {create} from "zustand";

// Building  our store. The function passed in return the
// initial state PLUS any functions("actions") that change that state.
const userAuthStore = create((set) => ({
    // --- STATE---
    // This will be populated after a real login API call instead.
    user: {
        fullName: "Ernest Acquah",
        phone: "+233 XX XXX XXXX",
        accountType: "Individual",  // "individual or "group
        verificationStatus: "Unverified",   // "unverified", "pending", "verified"
    },
    isloggedIn: true,  // will be false until a real login API call succeeds

    // --- ACTIONS ---
    // Setting how update state in Zustand. Each action below is a
    // function components can call to change something in the state.

    // After a successful login/register API call later.
    setUser: (userData) =>
        set(() => ({
            user:userData,
            isloggedIn: true,
        })),

        // When a user logs out - clears their data.
        logout: () =>
            set(() => ({
                user: null,
                isloggedIn: false,
            })),

            // Called after KYC is submitted, move status from "unverified" to "pending".
            setVerificationStatus: (status) =>
                set((state) => ({
                    user: { ...state.user, verificationStatus: status },
                })),
}));

export default userAuthStore;