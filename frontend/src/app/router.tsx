import { createBrowserRouter } from "react-router-dom";

import { AppShell } from "./shell";
import { ActivityPage } from "../features/activity/ActivityPage";
import { AdminPage } from "../features/admin/AdminPage";
import { DashboardPage } from "../features/dashboard/DashboardPage";
import { DrivePage } from "../features/drive/DrivePage";
import { VaultPage } from "../features/vault/VaultPage";
import { WorkspacesPage } from "../features/workspaces/WorkspacesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShell />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "workspaces", element: <WorkspacesPage /> },
      { path: "drive", element: <DrivePage /> },
      { path: "vault", element: <VaultPage /> },
      { path: "activity", element: <ActivityPage /> },
      { path: "admin", element: <AdminPage /> }
    ]
  }
]);

