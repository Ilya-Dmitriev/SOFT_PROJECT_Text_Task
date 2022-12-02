import { AppRouter } from "./router/AppRouter";
import { StoredProvider } from "./store/StoredProvider";

export const App: React.FC = () => {
  return (
    <StoredProvider>
      <AppRouter />
    </StoredProvider>
  );
};
