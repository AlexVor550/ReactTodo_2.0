import React, { Component } from 'react';

export default class Drinks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoad: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://random-data-api.com/api/v2/blood_types?size=20")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoad: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoad: true,
                        error
                    });
                }
            );
    }

    render() {
        const { error, isLoad, items } = this.state;
        if (error) {
            return <p>Ошибка {error.message}</p>;
        } 
        else if (!isLoad) {
            return <p>Загрузка...</p>;
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.Blood} className="mt-6 w-96"  >
                            <p>У пациента:</p>
                            <p>Тип крови=[{item.type}]</p>
                            <p>Резус фактор=[{item.rh_factor}]</p>
                            <p>Группа=[{item.group}]</p>
                        </li>
                        
                    ))}
                </ul>
            );
        }
    }
}
