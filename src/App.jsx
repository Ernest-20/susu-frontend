// This codes defines route in the app
// This file the "map" of the whole app: it says which component
// should render for each URL path. it displays all the screen built

import { Routes, Route, Navigate } from "react-router-dom";

// layout
import AppLayout from "./layouts/AppLayouts";

// Auth screens
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

// Screens that Do show tab bar
import Dashboard from "./pages/dashboard/Dashboard";
import CreatePlan from "./pages/plans/CreatePlan";
import GroupDashboard from "./pages/groups/GroupDashboard";
import AdminApproval from "./pages/groups/AdminApproval";
import Marketplace from "./pages/marketplace/Marketplace";
import TransactionHistory from "./pages/transactions/TransactionHistory";
// Notifications
import Profile from "./pages/profile/Profile";
import KycVerification from "./pages/profile/KycVerification";
import Notifications from "./pages/notifications/Notifications";

export default function App () {
  return (
    <Routes>
      {/* Auth routes - standalone, no tab bar wrapping them */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/kyc" element={<KycVerification />} />

      {/*
      Nesting everthing in this <Route>  automatically get wrapped
      in AppLayout (meaning: it gets the bottom tabbar for free).
      This is what "element={<AppLayout />}" + nested <Route> children means
       */}
      <Route element={<AppLayout />}>
       <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/plans/new" element={<CreatePlan />} />
       <Route path="/groups" element={<GroupDashboard />} />
       <Route path="/groups/approvals" element={<AdminApproval />} />
       <Route path="/marketplace" element={<Marketplace />} />
       <Route path="/transactions" element={<TransactionHistory />} />
       <Route path="/notifications" element={<Notifications />} />
       <Route path="/profile" element={<Profile />} />
       </Route>

       {/*
       Catch-all: if someone visits a URL that doesn't match above (or just opens sute at "/"), send them to the dashboard instead of showing broken/ blank page.
        */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
