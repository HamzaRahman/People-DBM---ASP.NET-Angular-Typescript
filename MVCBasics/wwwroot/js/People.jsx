﻿class PeopleTable extends React.Component {
    state = { data: this.props.initialData };

    //loadPeopleFromServer = () => {
    //    var xhr = new XMLHttpRequest();
    //    xhr.open('get', this.props.url, true);
    //    xhr.onload = function () {
    //        var data = JSON.parse(xhr.responseText);
    //        this.setState({ data: data });
    //    }.bind(this);
    //    xhr.send();
    //};

    //handleCommentSubmit = person => {
    //    var people = this.state.data;
    //    // Optimistically set an id on the new comment. It will be replaced by an
    //    // id generated by the server. In a production application you would likely
    //    // not use Date.now() for this and would have a more robust system in place.
    //    person.ID = Date.now();
    //    var newPeople = people.concat([person]);
    //    this.setState({ data: newPeople });

    //    var data = new FormData();
    //    data.append('ID', person.ID);
    //    data.append('Name', person.Name);
    //    data.append('PhoneNumber', person.PhoneNumber);
    //    data.append('City', person.City);

    //    var xhr = new XMLHttpRequest();
    //    xhr.open('post', this.props.submitUrl, true);
    //    xhr.onload = function () {
    //        this.loadPeopleFromServer();
    //    }.bind(this);
    //    xhr.send(data);
    //};

    //componentDidMount() {
    //    window.setInterval(this.loadPeopleFromServer, this.props.pollInterval);
    //}

    render() {
        return (
            <div className="peopleTable">
                <h1>People</h1>
                <div>
                    <hr />
                    <div class="row">
                        <div class="col-sm-2">
                            ID
                    </div>
                        <div class="col-sm-2">
                            Name
                    </div>
                        <div class="col-sm-2">
                            PhoneNumber
                    </div>
                        <div class="col-sm-2">
                            City
                    </div>
                    </div>
                </div>
                <PeopleList data={this.state.data} />
                
            </div>
        );
    }
}



class PeopleList extends React.Component {
    render() {
        //const { person, city } = this.props.data;
        var personNodes = this.props.data.map(function (person) {
            return (
                <PersonItem EE={person.id} Name={person.name} PhoneNumber={person.phoneNumber} City={person.city}></PersonItem>
                
            );
        });
        return (
            <div className="peopleList">{personNodes}</div>
            );
    }
}

class PersonItem extends React.Component
{
    
    render()
    {
        
        return (
            <div className="personItem">
                <hr />
                    <div class="row">
                    <div class="col-sm-2">
                        {this.props.EE}
                    </div>
                    <div class="col-sm-2">
                        {this.props.Name}
                    </div>
                    <div class="col-sm-2">
                        {this.props.PhoneNumber}
                    </div>
                    <div class="col-sm-2">
                        {this.props.City}
                    </div>
                    <div class="col-sm-1">
                        Edit
                    </div>
                    <div class="col-sm-1">
                        Details
                    </div>
                    <div class="col-sm-1">
                       Delete
                    </div>
                    {/*<span dangerouslySetInnerHTML={this.rawMarkup()} />*/}
                </div>
            </div>
            )
    }
}

//ReactDOM.render(<PeopleTable />, document.getElementById('PersonTable'))