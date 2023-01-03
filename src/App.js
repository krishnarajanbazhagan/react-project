import React, { useState, useEffect } from 'react';

function ListView() {
    const [employees, setEmployees] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        async function fetchEmployees() {
            const response = await fetch('https://reqres.in/api/users?page=2');
            const data = await response.json();
            setEmployees(data.data);
        }
        fetchEmployees();
    }, []);

    // function to handle search
    function handleSearch(event) {
        setSearchTerm(event.target.value);
    }

    // filter employees by search term
    const filteredEmployees = employees.filter(employee =>
        employee.first_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return ( <
        div >
        <
        input type = "text"
        placeholder = "Search by first name"
        value = { searchTerm }
        onChange = { handleSearch }
        /> <
        table >
        <
        thead >
        <
        tr >
        <
        th > ID < /th> <
        th > First Name < /th> <
        th > Last Name < /th> <
        th > Email < /th> < /
        tr > <
        /thead> <
        tbody > {
            filteredEmployees.map(employee => ( <
                tr key = { employee.id } >
                <
                td > { employee.id } < /td> <
                td > { employee.first_name } < /td> <
                td > { employee.last_name } < /td> <
                td > { employee.email } < /td> < /
                tr >
            ))
        } <
        /tbody> < /
        table > <
        /div>
    );
}

export default ListView;