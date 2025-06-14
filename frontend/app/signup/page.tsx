"use client"
export default function signup () {



    function handleclick () {


        alert("the button is clicked")
    }
    return (
        <div className="flex flex-col">
            <form className="flex flex-col">
                <h1>sign up</h1>
                <label >name</label>
                <input type="text"/>
                <label>email</label>
                <input type="mail"/>
                <label>password</label>
                <input type="password"/>
                <button className="bg-black text-white mx-120" onClick={handleclick }>sign up</button>
            </form>

        </div>
    )
}