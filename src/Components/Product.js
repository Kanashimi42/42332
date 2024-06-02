import React from 'react';

const products = [
  {
    imgSrc: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/noutbuki.png',
    imgAlt: 'laptops',
    title: 'Ноутбуки',
    isCenter: true,
    addInfo: []
  },
  {
    imgSrc: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/kompyutery.png',
    imgAlt: 'computers',
    title: 'Компьютеры',
    isCenter: true,
    addInfo: []
  },
  {
    imgSrc: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/monitory.png',
    imgAlt: 'screens',
    title: 'Мониторы',
    isCenter: true,
    addInfo: []
  },
  {
    imgSrc: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/tovary-dlya-gejmerov.png',
    imgAlt: 'gaming',
    title: 'Gaming',
    isCenter: true,
    addInfo: []
  },
  {
    imgSrc: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/planshety.png',
    imgAlt: 'tablets',
    title: 'Планшеты',
    isCenter: true,
    addInfo: []
  },
  {
    imgSrc: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/kabeli-i-perekhodniki.png',
    imgAlt: 'CablesAndAdapters',
    title: 'Кабели и переходники',
    isCenter: true,
    addInfo: []
  },
  {
    imgSrc: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/kompyuternye-komplektuyushchie.png',
    imgAlt: 'computerAccessories',
    title: 'Компьютерные комплектующие',
    isCenter: false,
    addInfo: ['SSD', 'Системы охлаждения', 'Видеокарты', 'ОЗУ', 'Процессоры', 'Материнские платы', 'Жесткие диски и дисковые массивы', 'Блоки питания']
  },
  {
    imgSrc: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/setevoe-oborudovanie.png',
    imgAlt: 'networkEquipment',
    title: 'Сетевое оборудование',
    isCenter: false,
    addInfo: ['Маршрутизаторы', 'Коммутаторы', 'Сетевые адаптеры', 'Пассивное сетевое оборудование', 'Беспроводные точки доступа', 'Ретранслятор WI-FI', 'Патч-корды']
  },
  {
    imgSrc: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/naushniki-i-aksessuary.png',
    imgAlt: 'headphonesAndAccessories',
    title: 'Наушники и аксессуары',
    isCenter: false,
    addInfo: ['Наушники', 'TWS', 'Игровые гарнитуры', 'Вакуумные наушники', 'Наушники вкладыши', 'Накладные наушники', 'Полноразмерные наушники', 'Усилители для наушников', 'Аксессуары для наушников']
  },
  {
    imgSrc: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/klaviatury-i-myshi.png',
    imgAlt: 'keyboardAndMouse',
    title: 'Клавиатуры и мыши',
    isCenter: false,
    addInfo: ['Компьютерные мыши', 'Игровые поверхности', 'Клавиатуры', 'Комплект: клавиатура и мышь', 'Аксессуары для клавиатур и мышек']
  },
  {
    imgSrc: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/aksessuari-dlia-elektronyky.png',
    imgAlt: 'accessoriesForElectronics',
    title: 'Аксессуары для электроники',
    isCenter: false,
    addInfo: ['Флеш память USD', 'Хабы и кадридеры', 'Аксессуары для ПК и ноутбуков', 'Сетевые фильтры, адаптеры и удлинители', 'Чехлы для планшетов', 'Сумки, рюкзаки и чехлы для ноутбуков', 'Чистящие средства']
  },
  {
    imgSrc: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/ofisnaya-tekhnika.png',
    imgAlt: 'office',
    title: 'Оргтехника',
    isCenter: false,
    addInfo: ['МФУ/Принтеры', 'Сканеры', 'Расходные материалы для принтеров', 'Доски, флипчарты']
  }
];

function IsAddList(props) {
  console.log(props);

  if (props.addInfo.length != 0)
    return (
      <ul className='list'>
        {props.addInfo.map((addInfoItem, index) => (
            <li className="list__item">{addInfoItem}</li>
        ))}
      </ul>
    )
}

function AddItem(index) {
  return (
    <div className="wrapper">
      <div className="wrapper__content">
          <img className="wrapper__img" src={products[index].imgSrc} alt={products[index].imgAlt}/>
          <h2 className={products[index].isCenter ? "wrapper__title wrapper__title--center" : "wrapper__title"}>{products[index].title}</h2>
          {IsAddList(products[index])}
      </div>
    </div>
  )
}

export class Product extends React.Component {
    render() {
      return (
        products.map((item, index) => {
          return AddItem(index)
        })
      )
    }
}