

export const Statistics = ({stats, title}) => {
    return (
        <section className="statistic">
            <h2 className="title">{title}</h2>
            <ul className="stat-list">{stats.map((item, index) => (
                <li className="item" key={item.id} id={item.id}>
                    <span className="label">{item.label}</span>
                    <span className="percentage">{item.percentage}%</span>
                </li>))}
            </ul>
        </section>
    )
}