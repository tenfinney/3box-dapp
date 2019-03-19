import React from 'react';
import PropTypes from 'prop-types';

import Info from '../../../assets/Details.svg';
import Loading from '../../../assets/Loading.svg';
import '../styles/Spaces.css';

const Header = ({ spaceToDisplay, isSpacesLoading, sortBy, sortData, sortDirection }) => (
  <header className="data__header">
    <section className="data__space">
      <span className="data__space__context">
        <h2>{spaceToDisplay}</h2>
        {isSpacesLoading && <img className="data__space__loading" src={Loading} alt="info" />}
      </span>
      <img className="data__space__info" src={Info} alt="info" />
    </section>

    <section className="data__categories">
      <span
        className={`data__categories__title spaceRow__key ${sortBy === 'name' ? 'activeSort' : ''}`}
        onClick={() => sortData('name', false, spaceToDisplay, false)}
        onKeyPress={() => sortData('name', false, spaceToDisplay, false)}
        role="button"
        tabIndex={0}
      >
        Name
        {sortBy === 'name' && (
          sortDirection ? (
            <p className="data__categories__title__arrow">
              &#9660;
            </p>
          ) : (
              <p className="data__categories__title__arrow">
                &#9650;
              </p>
            )
        )}
      </span>
      <span
        className={`data__categories__title spaceRow__content ${sortBy === 'content' ? 'activeSort' : ''}`}
        onClick={() => sortData('content', false, spaceToDisplay, false)}
        onKeyPress={() => sortData('content', false, spaceToDisplay, false)}
        role="button"
        tabIndex={0}
      >
        Content
        {sortBy === 'content' && (
          sortDirection ? (
            <p className="data__categories__title__arrow">
              &#9660;
            </p>
          ) : (
              <p className="data__categories__title__arrow">
                &#9650;
              </p>
            )
        )}
      </span>
      <span
        className={`data__categories__title spaceRow__space ${sortBy === 'space' ? 'activeSort' : ''}`}
        onClick={() => sortData('space', false, spaceToDisplay, false)}
        onKeyPress={() => sortData('space', false, spaceToDisplay, false)}
        role="button"
        tabIndex={0}
      >
        Space
        {sortBy === 'space' && (
          sortDirection ? (
            <p className="data__categories__title__arrow">
              &#9660;
            </p>
          ) : (
              <p className="data__categories__title__arrow">
                &#9650;
              </p>
            ))}
      </span>
      <span
        className={`data__categories__title spaceRow__type ${sortBy === 'type' ? 'activeSort' : ''}`}
        onClick={() => sortData('type', false, spaceToDisplay, false)}
        onKeyPress={() => sortData('type', false, spaceToDisplay, false)}
        role="button"
        tabIndex={0}
      >
        Type
        {sortBy === 'type' && (
          sortDirection ? (
            <p className="data__categories__title__arrow">
              &#9660;
            </p>
          ) : (
              <p className="data__categories__title__arrow">
                &#9650;
              </p>
            ))}
      </span>
      <span
        className={`data__categories__title spaceRow__privacy ${sortBy === 'privacy' ? 'activeSort' : ''}`}
        onClick={() => sortData('privacy', false, spaceToDisplay, false)}
        onKeyPress={() => sortData('privacy', false, spaceToDisplay, false)}
        role="button"
        tabIndex={0}
      >
        Privacy
        {sortBy === 'privacy' && (
          sortDirection ? (
            <p className="data__categories__title__arrow">
              &#9660;
            </p>
          ) : (
              <p className="data__categories__title__arrow">
                &#9650;
              </p>
            ))}
      </span>
      <span
        className={`data__categories__title spaceRow__updated ${sortBy === 'lastUpdated' ? 'activeSort' : ''}`}
        onClick={() => sortData('lastUpdated', false, spaceToDisplay, false)}
        onKeyPress={() => sortData('lastUpdated', false, spaceToDisplay, false)}
        role="button"
        tabIndex={0}
      >
        Last Updated
        {sortBy === 'lastUpdated' && (
          sortDirection ? (
            <p className="data__categories__title__arrow">
              &#9660;
            </p>
          ) : (
              <p className="data__categories__title__arrow">
                &#9650;
              </p>
            ))}
      </span>
    </section>
  </header >
);

Header.propTypes = {
  spaceToDisplay: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired,
  isSpacesLoading: PropTypes.bool.isRequired,
  sortDirection: PropTypes.bool.isRequired,
  sortData: PropTypes.func.isRequired,
};

export default Header;