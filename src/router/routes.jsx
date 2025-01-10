import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";

import GuestLayout from "../layouts/GuestLayout";

/**
 * Elecom Pages
 */
import ElecomHomePage from "../pages/elecom/ElecomHomePage";
import SidebarLayout from "../layouts/SidebarLayout";
import ElecomCandidatePage from "../pages/elecom/ElecomCandidatePage";
import ElecomVotesPage from "../pages/elecom/ElecomVotesPage";
import ElecomViewVotePage from "../pages/elecom/ElecomViewVotePage";

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
import LoginPage from "../pages/LoginPage";
import ManageOrganizationsPage from "../pages/ManageOrganizationsPage";
import ManageOrganizationPage from "../pages/ManageOrganizationPage";
import ViewMemberPage from "../pages/ViewMemberPage";

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
      element: <LoginPage role={"elecom"} />,
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
          path: "shops",
          element: <Outlet />,
          children: [
            {
              index: true,
              element: <ShoppingPage />,
            },
            {
              path: "products/:id",
              element: <ViewProductOverviewPage />,
            },
          ],
        },
        {
          path: "account-settings",
          element: <ViewAccountSettingsPage role={"officer"} />,
        },
      ],
    },
    {
      path: "login",
      element: <LoginPage role={"officer"} />,
    },
  ],
};

/**
 * Admin Routes
 */
const adminRoutes = {
  path: "/ad",
  element: <SidebarLayout role={"admin"} />,
  children: [
    {
      index: true,
      element: <ManageOrganizationsPage role={"admin"} />,
    },
    {
      path: ":id",
      element: <Outlet />,
      children: [
        {
          index: true,
          element: <ManageOrganizationPage role={"admin"} />,
        },
        {
          path: "members/:memberID",
          element: <ViewMemberPage role={"admin"} />,
        },
      ],
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
};

/**
 * User Routes
 */

const router = createBrowserRouter([
  adminRoutes,

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
            element: <Outlet />,
            children: [
              {
                index: true,
                element: <ShoppingPage />,
              },
              {
                path: "products/:id",
                element: <ViewProductOverviewPage />,
              },
            ],
          },
          {
            path: "trackings",
            element: <TrackingProductsPage />,
          },
        ],
      },

      /**
       * Admin Login
       */
      {
        path: "/ad/login",
        element: <LoginPage role={"admin"} />,
      },

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
