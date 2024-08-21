import Button from "./ui/Button";
import { useSelector , useDispatch} from "react-redux";
import {RootState} from "../app/store";
import { increment , decrement , incrementByAmount} from "../features/counter/counterSlice";

interface IProps {

}

const Counter = ({} : IProps) => {

    const {value , increaseText , decrementText , amonutText} = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch()

    return(
        <div>
            <h1 >Counter: {value} </h1>
            <Button onClick={() => dispatch(increment() , decrement(1) )} className="bg-indigo-700 hover:bg-indigo-800 m-5"> {increaseText}</Button>
            <Button onClick={() => dispatch(decrement() )} className="bg-indigo-700 hover:bg-indigo-800 m-5"> {decrementText}</Button>
            <Button onClick={() => dispatch(incrementByAmount(5) )} className="bg-indigo-700 hover:bg-indigo-800"> {amonutText}</Button>
        </div>
    )

}

export default Counter