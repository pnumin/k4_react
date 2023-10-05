import Hh1 from '../comm/Hh1';

const MyRef = () => {
    const title='useRef Hook' ;
    return (
        <main className='container'>
            <article>
                <Hh1 title={title} /> 
                
                <footer>
                    <div className='grid'>
                        <button>state 변수 증가</button>
                    </div>
                </footer>
                
            </article>
            
        </main>
    )
}

export default MyRef
