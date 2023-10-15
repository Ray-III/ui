const Positions = () => {
    return (
        <div>
            <h1>Positions</h1>

            <table class="table-auto">
                <thead>
                    <tr>
                    <th>Position</th>
                    <th>Entry Price (USDT)</th>
                    <th>Current Price (USDT)</th>
                    <th>PNL (USDT)</th>
                    <th>Date</th>
                    <th>Leverage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Long</td>
                    <td>5.50</td>
                    <td>6.00</td>
                    <td>2.50</td>
                    <td>2023-10-01</td>
                    <td>x10</td>
                    </tr>
                    <tr>
                    <td>Short</td>
                    <td>7.00</td>
                    <td>6.50</td>
                    <td>5.00</td>
                    <td>2023-10-08</td>
                    <td>x20</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}