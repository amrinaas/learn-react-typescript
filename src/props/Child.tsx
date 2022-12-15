interface ChildProps {
    color: string;
    onClick: () => void;
    children?: React.ReactNode;
}

export const Child = ({ color, onClick }: ChildProps) => {
    return (
        <div>
            <button onClick={onClick}>Click Me!</button>
        </div>
    )
}

export const ChildAsFc: React.FC<ChildProps> = ({ color, onClick, children }) => {
    return (
        <div>
            <button onClick={onClick}>Click Me!</button>
        </div>
    )
}