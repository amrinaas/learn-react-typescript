import { Child, ChildAsFc } from './Child';

const Parent = () => {
    // return <Child color='orange' onClick={() => console.log('Clicked!')} />
    <div>
        <ChildAsFc color='orange' onClick={() => console.log('Clicked!')}>
            sd
        </ChildAsFc>
    </div>
}


export default Parent;