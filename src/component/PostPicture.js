import React from 'react';
import moment from 'moment';
import 'moment/locale/ru'

export default function PostPicture(props) {
    const { item } = props;
    moment.locale('ru');
    return (
        <div className='post-picture'>
            <img src='https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/280x178_2' alt={item.id}></img>
            <div>
                <div>Author: Name Surname</div>
                <div className='time'>{moment(item.created).startOf('hour').fromNow()}</div>
            </div>
        </div>
    )

}