import React, { Component } from 'react';

export class AddDayForm extends Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
    }
    submit(e) {
        e.preventDefault()
        console.log('resort', this.refs.resort.value);
        console.log('resort', this.refs.date.value);
        console.log('resort', this.refs.powder.checked);
        console.log('resort', this.refs.backcountry.checked);
    }
    render() {
        const { resort, date, powder, backcountry } = this.props
        return (
            <form onSubmit={this.submit} className="" add-day-form>

                <label htmlFor="resort">Resort Name</label>
                <input id="resort"
                    type="text"
                    required
                    defaultValue={resort}
                    ref="resort" />

                <label htmlFor="date">Date</label>
                <input id="date"
                    type="date"
                    required
                    defaultValue={date}
                    ref="date" />

                <div>
                    <input id="powder"
                        type="checkbox"
                        defaultChecked={powder}
                        ref="powder" />
                    <label htmlFor="powder">Powder Day

                </label>
                </div>

                <div>
                    <input id="backCountry"
                        type="checkbox"
                        defaultChecked={backcountry}
                        ref="backcountry" />
                    <lable htmlFor="BackCountry">
                        BackCountry Day
                </lable>
                </div>
                <button>Add Day</button>
            </form>
        );
    }
}
AddDayForm.defaultProps = {
    resort: "kirkwood",
    date: "2018-06-21",
    powder: true,
    backcountry: true

}

// AddDayForm.propTypes = {
//     resort : PropTypes.string.isRequired,
//     date : PropTypes.string.isRequired,
//     powder : PropTypes.bool.isRequired,
//     backcountry : PropTypes.bool.isRequired
// }

export default AddDayForm;