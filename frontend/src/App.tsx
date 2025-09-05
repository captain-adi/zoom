import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Toaster } from "sonner";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { AuthContextProvider } from "./context/authContext";
import  { SocketContextProvider } from "./context/soketContext";

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <SocketContextProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Toaster position="top-center" theme="dark" />
          <Outlet />
        </main>
        <Footer /> 
      </div>
    </SocketContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
