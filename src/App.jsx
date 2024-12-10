import './index.css'
import Section1 from './sections/Section1';
import Section2 from './sections/Section2';

function App() {

  return (
    <div className="max-container h-[100vah] flex gap-4 p-4 flex-col md:flex-row-reverse">

      <div className="bg-gray-100 items-center justify-center basis-3/4">
        <Section1 />
        </div>

      <div className="items-center justify-center basis-1/4">
      <Section2 />
      </div>

      

    </div>
  )
}

export default App;
