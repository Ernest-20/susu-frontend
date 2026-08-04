// Mock for register/login functions
// This file stands for what will later be real API call e.g.:
// const res = awit apilClient.post("/auth/register", data);
// return res.data;

import { mockDelay } from "./mockDelay";

export async function registerUser(formData) {
  await mockDelay(1000);

    // What backend would send after successful registration:
    // user object plus a fake auth token.
    return{
        user: {
            fullName: formData.fullName,
            phone: formData.phone,
            accountType: formData.accountType,
            groupname: formData.accountType || null,
            verificationStatus: "unverified",
        },
       token: "mock-jwt-token-123",
     };

     // Once backend exists, replace the above with
     // const res = await apiClient.post("/auth/register", formData);
     //return res.data;
}

export async function loginUser(formData) {
    // Simulate a successful login response.
    return {
        user : {
            fullName: "David Apmah",
            phone: formData.phone,
            accountType: "individual",
            verificationStatus: "unverified",
        },
        token: "mock-jwt-token-123",
    };

    // Once backend exists, replace the abocve with:
    // const res =await apliClient.post("/auth/login", formData);
    // return res.data;
}