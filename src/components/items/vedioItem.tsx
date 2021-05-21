import Vedio from '../../models/video';

const VedioItem = (props: Props) => {
    return (
        <li>
            <h1>
                { props.vedio.snippet.title }
            </h1>
        </li>
    );
}

interface Props {
    vedio: Vedio
}

export default VedioItem;