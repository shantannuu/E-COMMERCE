import React, { useContext } from 'react'
import { GlobalState } from '../../../GlobalState'
import { Link } from 'react-router-dom'
function History() {
    const state = useContext(GlobalState);
    const [history] = state.userAPI.history
    return (
        <div className="history-page">
            <h2>ORDER HISTORY</h2>
            <h4>You have {history.length} ordered</h4>


            <table>
                <thead>
                    <tr>
                        <th>Payment ID</th>
                        <th>Date of Purchased</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        history.map(items => (
                            <tr key={items._id}>
                                <td>{items.paymentID}</td>
                                <td>{items.createdAt}</td>
                                <td><Link to={`/history/${items._id}`}>View</Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    )
}

export default History
