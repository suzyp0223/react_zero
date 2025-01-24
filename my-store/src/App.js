import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import { QueryClientProvider, QueryClient } from 'react-query';
import { Suspense } from 'react';


const queryClient = new QueryClient(
  {
  // // staleTime- 페이지 이전,뒤로시 캐시 사용(정해진 시간동안)
  // // 네트워크 요청을 줄이고, 사용자 경험이 더 빨라짐, 서버재용청X.
  defaultOptions: {
    queries: {
      // staleTime: 1000 * 60 * 5, // 5분 동안 데이터를 신선하다고 간주
      suspense: true, 
    },
  },
  }
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<span>Loading...</span>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit" element={<Edit />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
