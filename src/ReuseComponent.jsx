function ReuseComponent({ user }) {
    return(
        <div style={{ border: "1px solid blue", padding: "10px", margin: "10px", width: "480px", borderRadius: "10px"}}>
            
            <h3>ID: <span style={{ color: "blue" }}>{user.id}</span></h3>
            <h3>Name: <span style={{ color: "blue" }}>{user.name}</span></h3>
            <h3>Age: <span style={{ color: "blue" }}>{user.age}</span></h3>
            <h3>Email: <span style={{ color: "blue" }}>{user.email}</span></h3>
            
        </div>
    )
}


export default ReuseComponent;
