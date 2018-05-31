import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class Errorbox extends Component {
    constructor(props) {
        super(props);
    }

    //Use this.props.data to load table data
    render() {
        return (
            <div id="append_text">
                <h2>Pylint Output Info</h2>
                 <div id="errorslist">
                    <BootstrapTable data={this.props.data}>
                        <TableHeaderColumn isKey dataField='id'>
                            Line
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='name'>
                            Severity
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='value'>
                            Error
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='value'>
                            More Info
                        </TableHeaderColumn>
                    </BootstrapTable>
                </div>
            </div>
        );
    }
}
export default Errorbox;
