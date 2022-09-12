import React from 'react'
import './App.css'
import './css/bootstrap.min.css';

 const TableView = (props) => {
    // const nav_bar=(
    // ); 
    return(
        <div className="gen-page container-*">
            <div className="search-form">
                <form className="s-form">
                    <table className="SearchTable table container-*">
                        <tr className="s-tr">
                            <th className="s-th" colspan="3">Time Table Filter</th>
                        </tr>
                        <tr className="s-tr">
                            <td className="s-td"><input className="s-input form-control" type="text" name="search-input" placeholder="--Select Category--" required/></td>
                            <td className="s-td"><input className="s-input form-control" type="text" name="search-input" placeholder="-- Please Select --" required/></td>
                            <td className="s-td"><input className="s-btn btn " type="button" name="gen-btn" value=" Generate "/></td>
                        </tr>
                    </table>
                </form>
            </div>
            <div className="viewResult">
                <table className="tableView2 table table-hover  container-*">
                    <thead className="thead">
                        <tr className="v-tr">
                            <th className="v-th">week</th>
                            <th className="v-th">Days</th>
                            <th className="v-th">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="v-tr">
                            <td className="v-td">first</td>
                            <td className="v-td">Monday</td>
                            <td className="v-td">morning</td>
                        </tr>
                        <tr className="v-tr">
                            <td className="v-td">Second</td>
                            <td className="v-td">Tesday</td>
                            <td className="v-td">Afternoon</td>
                        </tr>
                        <tr className="v-tr">
                            <td className="v-td">Third</td>
                            <td className="v-td">Wednesday</td>
                            <td className="v-td">Evening</td>
                        </tr>
                        <tr className="v-tr">
                            <td className="v-td">Fourth</td>
                            <td className="v-td">Thusday</td>
                            <td className="v-td">Night</td>
                        </tr>
                        <tr className="v-tr">
                            <td className="v-td">first</td>
                            <td className="v-td">Monday</td>
                            <td className="v-td">morning</td>
                        </tr>
                        <tr className="v-tr">
                            <td className="v-td">Second</td>
                            <td className="v-td">Tesday</td>
                            <td className="v-td">Afternoon</td>
                        </tr>
                    </tbody>
                    <tfoot className="tfoot">
                        <tr className="v-tr">
                            <th className="v-th">week</th>
                            <th className="v-th">Days</th>
                            <th className="v-th">Time</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}
export default TableView;
