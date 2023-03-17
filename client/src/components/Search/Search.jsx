import './Search.scss';
import { useState } from 'react';

function Search() {

const [isSelected, setIsSelected] = useState(false);
const [showOptions, setShowOptions] = useState(false);

const handleClick = () => {
  setIsSelected(!isSelected);
  setShowOptions(!showOptions);
};

  return (
    <div className="search">
      <div className="search__ribbon">
        <div className="search__container">
          <p className="search__title">Browse Opportunities</p>
          <p className="search__title">Browse Organizations</p>
        </div>
        <div className="search__container">
          <p className="search__sub-title">Regional Partners</p>
          <p className="search__sub-title">Latest News</p>
        </div>
      </div>
      <p className="search__header">
        Use THE SAMARITANS platform to volunteer with friends
      </p>
      <div className="search__form">
        <div className="search__card">
          <button
            className={`search__options ${isSelected ? "selected" : ""}`}
            onClick={handleClick} >
            Explore Interests and Locations
          </button>
        </div>
      {showOptions && ( 
      <div>
          <p className="search__text">Categories:</p>
            <div className="search__dropdown">
                <label className='search__label' >
                    <input className='search__radio' type="checkbox" name="interests" value="animals" />
                    Animals
                </label>
                <label className='search__label' >
                    <input className='search__radio' type="checkbox" name="interests" value="arts" />
                    Arts
                </label>
                <label className='search__label' >
                    <input className='search__radio' type="checkbox" name="interests" value="teaching" />
                    Teaching
                </label>
                <label className='search__label' >
                    <input className='search__radio' type="checkbox" name="interests" value="help-seniors" />
                    Help Seniors
                </label>
                <label className='search__label' >
                    <input className='search__radio' type="checkbox" name="interests" value="environment" />
                    Environment
                </label>
                <label className='search__label' >
                    <input className='search__radio' type="checkbox" name="interests" value="homelessness" />
                    Homelessness
                </label>
                <label className='search__label' >
                    <input className='search__radio' type="checkbox" name="interests" value="spirituality" />
                    Spirituality
                </label>
                <label className='search__label' >
                    <input className='search__radio' type="checkbox" name="interests" value="sports" />
                    Sports
                </label>
                <label className='search__label' >
                    <input className='search__radio' type="checkbox" name="interests" value="disaster-relief" />
                    Disaster Relief
                </label>
            </div>
        <p className="search__text">Locations:</p>
            <div className="search__dropdown">
                <label className='search__label' >
                    <input className='search__radio' type="checkbox" name="locations" value="vancouver" />
                    Vancouver
                </label>
                <label className='search__label' >
                    <input className='search__radio' type="checkbox" name="locations" value="richmond" />
                    Richmond
                </label>
                <label className='search__label' >
                    <input className='search__radio' type="checkbox" name="locations" value="burnaby" />
                    Burnaby
                </label>
                <label className='search__label' >
                    <input className='search__radio' type="checkbox" name="locations" value="west-vancouver" />
                    West-Vancouver
                </label>
                <label className='search__label' >
                    <input className='search__radio' type="checkbox" name="locations" value="north-vancouver" />
                    North-Vancouver
                </label>
                <label className='search__label' >
                    <input className='search__radio' type="checkbox" name="locations" value="surrey" />
                    Surrey
                </label>
            </div>
      <div className="search__card">
        <button className="search__submit">submit</button>
      </div>
      </div> )}
    </div>
  );
}

export default Search



{/* 

{/* // import './Search.scss';
// import { useState } from 'react';

// function Search() { */}

// const [isSelected, setIsSelected] = useState(false);
// const [showOptions, setShowOptions] = useState(false);

// const handleClick = () => {
//   setIsSelected(!isSelected);
//   setShowOptions(!showOptions);
// };

//   return (
//     <div className="search">
//       <div className="search__ribbon">
//         <div className="search__container">
//           <p className="search__title">Browse Opportunities</p>
//           <p className="search__title">Browse Organizations</p>
//         </div>
//         <div className="search__container">
//           <p className="search__sub-title">Regional Partners</p>
//           <p className="search__sub-title">Latest News</p>
//         </div>
//       </div>
//       <p className="search__header">
//         Use THE SAMARITANS platform to volunteer with friends
//       </p>
//       <div className="search__form">
//         <div className="search__card">
//           <button
//             className={`search__options ${isSelected ? "selected" : ""}`}
//             onClick={handleClick} >
//             Explore Interests and Locations
//           </button>
//         </div>
//         <p className="search__text">Categories:</p>
//         <div className="search__dropdown">
//             {showOptions && (
//             <div className="search__options-list">
//                 <label className='search__label' >
//                     <input className='search__radio' type="checkbox" name="interests" value="animals" />
//                     Animals
//                 </label>
//                 <label className='search__label' >
//                     <input className='search__radio' type="checkbox" name="interests" value="arts" />
//                     Arts
//                 </label>
//                 <label className='search__label' >
//                     <input className='search__radio' type="checkbox" name="interests" value="teaching" />
//                     Teaching
//                 </label>
//                 <label className='search__label' >
//                     <input className='search__radio' type="checkbox" name="interests" value="help-seniors" />
//                     Help Seniors
//                 </label>
//                 <label className='search__label' >
//                     <input className='search__radio' type="checkbox" name="interests" value="environment" />
//                     Environment
//                 </label>
//                 <label className='search__label' >
//                     <input className='search__radio' type="checkbox" name="interests" value="homelessness" />
//                     Homelessness
//                 </label>
//                 <label className='search__label' >
//                     <input className='search__radio' type="checkbox" name="interests" value="spirituality" />
//                     Spirituality
//                 </label>
//                 <label className='search__label' >
//                     <input className='search__radio' type="checkbox" name="interests" value="sports" />
//                     Sports
//                 </label>
//                 <label className='search__label' >
//                     <input className='search__radio' type="checkbox" name="interests" value="disaster-relief" />
//                     Disaster Relief
//                 </label>
//             </div>
//             )}
//         </div>
//         <p className="search__text">Locations:</p>
//         <div className="search__dropdown">
//             {showOptions && (
//             <div className="search__options-list">
//                 <label className='search__label' >
//                     <input className='search__radio' type="checkbox" name="locations" value="vancouver" />
//                     Vancouver
//                 </label>
//                 <label className='search__label' >
//                     <input className='search__radio' type="checkbox" name="locations" value="richmond" />
//                     Richmond
//                 </label>
//                 <label className='search__label' >
//                     <input className='search__radio' type="checkbox" name="locations" value="burnaby" />
//                     Burnaby
//                 </label>
//                 <label className='search__label' >
//                     <input className='search__radio' type="checkbox" name="locations" value="west-vancouver" />
//                     West-Vancouver
//                 </label>
//                 <label className='search__label' >
//                     <input className='search__radio' type="checkbox" name="locations" value="north-vancouver" />
//                     North-Vancouver
//                 </label>
//                 <label className='search__label' >
//                     <input className='search__radio' type="checkbox" name="locations" value="surrey" />
//                     Surrey
//                 </label>
//             </div>
//             )}
//         </div>
//       </div>
//       <div className="search__card">
//         <button className="search__submit">submit</button>
//       </div>
//     </div>
//   );
// }

// export default Search */}