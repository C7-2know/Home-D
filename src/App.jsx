import Header from './components/header';
import Sidebar from './components/side_bar';
import Feed from './page/feed';

function App() {
  return (
    <div className='flex flex-col min-h-screen bg-gray-100 gap-6'>
      <Header />
      <div className='flex mt-4'>
        <Sidebar className='h-screen' />
        <div className="ml-64 flex-1 bg-gray-50 p-4 items-center justify-center align-center">
          <Feed />
        </div>
      </div>
    </div>
    
  );
}

export default App;
