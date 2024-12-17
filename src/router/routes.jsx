import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";

import GuestLayout from "../layouts/GuestLayout";

/**
 * Elecom Pages
 */
import ElecomLoginPage from "../pages/elecom/ElecomLoginPage";
import OfficerLoginPage from "../pages/officer/OfficerLoginPage";
import ElecomHomePage from "../pages/elecom/ElecomHomePage";
import SidebarLayout from "../layouts/SidebarLayout";
import ElecomCandidatePage from "../pages/elecom/ElecomCandidatePage";
import ElecomVotesPage from "../pages/elecom/ElecomVotesPage";
import ElecomViewVotePage from "../pages/elecom/ElecomViewVotePage";
import AdminLoginPage from "../pages/admin/AdminLoginPage";
import AdminOrganizationsPage from "../pages/admin/AdminOrganizationsPage";
import AdminAccountsPage from "../pages/admin/AdminAccountsPage";
import OfficerDashboardPage from "../pages/officer/OfficerDashboardPage";
import OfficerMembersPage from "../pages/officer/OfficerMembersPage";
import OfficerPostsPage from "../pages/officer/OfficerPostsPage";
import ViewAccountSettingsPage from "../pages/ViewAccountSettingsPage";
import HomePage from "../pages/visitors/HomePage";
import VisitorLayout from "../layouts/VisitorLayout";
import ShoppingPage from "../pages/ShoppingPage";
import TrackingProductsPage from "../pages/TrackingProductsPage";
import ViewProductOverviewPage from "../pages/ViewProductOverviewPage";

/**
 * Elecom Routes
 */
const elecomRoutes = {
  path: "/e",
  element: <Outlet />,
  children: [
    {
      path: "/e",
      element: <SidebarLayout role={"elecom"} />,
      children: [
        {
          index: true,
          element: <ElecomHomePage />,
        },
        {
          path: "candidates",
          element: <ElecomCandidatePage />,
        },
        {
          path: "votes",
          element: <Outlet />,
          children: [
            {
              index: true,
              element: <ElecomVotesPage />,
            },
            {
              path: ":id",
              element: <ElecomViewVotePage />,
            },
          ],
        },
        {
          path: "account-settings",
          element: <ViewAccountSettingsPage role={"elecom"} />,
        },
      ],
    },
    {
      path: "login",
      element: <ElecomLoginPage />,
    },
  ],
};

/**
 * Officer Routes
 */
const officerRoutes = {
  path: "/officer",
  element: <Outlet />,
  children: [
    {
      path: "/officer",
      element: <SidebarLayout role={"officer"} />,
      children: [
        {
          index: true,
          element: <OfficerDashboardPage />,
        },
        {
          path: "posts",
          element: <OfficerPostsPage />,
        },
        {
          path: "members",
          element: <OfficerMembersPage />,
        },
        {
          path: "account-settings",
          element: <ViewAccountSettingsPage role={"officer"} />,
        },
      ],
    },
    {
      path: "login",
      element: <OfficerLoginPage role={"officer"} />,
    },
  ],
};

/**
 * Admin Routes
 */
const adminRoutes = {
  path: "/ad",
  element: <Outlet />,
  children: [
    {
      path: "/ad",
      element: <SidebarLayout role={"admin"} />,
      children: [
        {
          index: true,
          element: <AdminOrganizationsPage />,
        },
        {
          path: "accounts",
          element: <AdminAccountsPage />,
        },
        {
          path: "account-settings",
          element: <ViewAccountSettingsPage role={"admin"} />,
        },
      ],
    },
    {
      path: "login",
      element: <AdminLoginPage />,
    },
  ],
};

/**
 * User Routes
 */

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <VisitorLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "shops",
            element: <ShoppingPage page={"landing"} />,
          },
          {
            path: "trackings",
            element: <TrackingProductsPage />,
          },
          {
            path: "products/:id",
            element: <ViewProductOverviewPage />,
          },
        ],
      },

      /**
       * Admin Routes
       */
      adminRoutes,

      /**
       * Elecom Pages
       */
      elecomRoutes,

      /**
       * Officer Pages
       */
      officerRoutes,

      /**
       * Visitor pages
       */
    ],
  },
]);

// Export router
export default router;
