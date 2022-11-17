import PlaceCard from '../place-card/place-card';
import {OfferType, City} from '../../types/types';
import {useState} from 'react';
import Map from '../map/map';

type CardListOffers = {
  offers: OfferType[];
  city: City;
}

function CardList({offers, city}: CardListOffers): JSX.Element {
  const [activeCard, setActiveCard] = useState<OfferType| undefined>(undefined);
  const handleActiveCard = (card: OfferType):void => {
    setActiveCard(card);
  };

  return (
    <div className="cities">
      <div className="cities__places-container container">

        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {city.name}</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
                  Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex={0}>Popular</li>
              <li className="places__option" tabIndex={0}>Price: low to high</li>
              <li className="places__option" tabIndex={0}>Price: high to low</li>
              <li className="places__option" tabIndex={0}>Top rated first</li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">
            {offers.map((item) => <PlaceCard offer={item} key={item.id} onActiveChange={handleActiveCard}/>)}
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map points= {offers} city = {city} activeCard={activeCard} ></Map>
          </section>
        </div>
      </div>
    </div>


  );
}

export default CardList;
