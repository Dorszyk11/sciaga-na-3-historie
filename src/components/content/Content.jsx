import './Content.css';
import { Topics } from '../../db/topics';

const Content = () => {
    return(
        <div className="container content">
            {Topics.map(topic => {
            return <div key={topic.id}>
                <p className="topic">{topic.temat}</p>
                <p className="topic-desc">{topic.opis}</p>
                <p className="topic-date">{topic.daty}</p>
            </div>})}
        </div>
    )
}

export default Content;
