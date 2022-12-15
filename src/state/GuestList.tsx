import { useState } from "react"

// const GuestList: React.FC<> -> not putting angle bracket bcs we're not going to expect to receive any props to our guest list 
const GuestList: React.FC = () => {
    const [name, setName] = useState(''); // init value empty string
    const [guests, setGuests] = useState<string[]>([]); // init empty array bcs we're going to have an array of guests that we want to invite
                                // string angle bracket to tell typescript the type of data that we wanted to store
    
    const onClick = () => {
        setName('');
        setGuests([...guests, name]);
    }

    return (
        <div>
            <h3>Guest List</h3>
            <ul>
                {guests.map((guest) => (
                    <li key={guest}>{guest}</li>
                ))}
            </ul>


            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onClick}>Add Guest</button>
        </div>
    )
}

export default GuestList