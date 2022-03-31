import React from 'react';
import './Navbar.css';
const Navbar = () => {
    let count = window.localStorage.getItem("items");
    return (
        // <div className="navbar">
        //     <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
        //     <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
        //     <p style={{color: 'red'}} className="avatar">cart {x}</p>
        // </div>
        <div className="header navigation">
            <div className="col-xl-3 col-lg-2 col-sm-4 col-5 pt-3">
                {/* <a href="/">
                    <img alt="Logo" className="img-fluid py-3 logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAB4CAMAAADompjIAAAAMFBMVEX///8AAACIiIhERES7u7vu7u5mZmaZmZkREREiIiKqqqrd3d3MzMwzMzNVVVV3d3faQilfAAADQklEQVR4nO3cbbeiIBSG4UTE1/L//9sx0BIkpJmyWdv7+tTobq+znsUhwM5cLgAAAAAAAAAAAAAAAAAAAAAA/Oe0mtS//ilOQBWT8tc/xQkQ9EEI+iAEfRCCPghBH4SgD0LQByHogxD0QXKDHu579U6nSvpuKtHVP/eRKStobZpiduviJZVq54rr/eRE31+pv+gjVkbQQ1msXWPDUTXrij4adE4fufaDrovQZqRWN7+gGWzQ+t0+ku0GPc6plNPcugxJE9Rc53xvSo32ddttgs7pI9le0G4cNsp9xlXKJeQfYBtXM1+0M0QbBp3TR7SdoIdl0n1csJNx069qOlfzXG6YecDq9/rIthO0/SVv1ks2XYTvsKO3XdeYTdA5fWRLB61fThTPoViHoU4zQxNcy+kjXDroW+SuS3H0a26Rrqugc/oIlw46+ollh2K7/KuyNcH2YwiCzugjXTJo9xsfbqo776qtacJ3+kHn9JEuGbS9eQ2vVl6K8QZ+0Dl9pEsGbTcZ212FXWYs2zoTnWn9DHP6SJcMuown4V2O1/hB5/SRjqAPQtAHSQZ9S8yty4LORGv8oHP6SLe/6tjcjKw6NiuKyKpjp490yaDjK113NVkTbFhy+kiXDLq3UUR3dI+3uHEZzLTBFjynj3TpLfg1Mi/0QbJ2Am794doGs0JOH+HSQdeRMGywqxPPSM18rK9TNZs+wqWDruzQbIbVpW1m13BiWJ4OPoPO6iPbzsG/+8BaJeTyabdH+MU4X6uWp4PrBUVOH9ls0K0KPe7PzwPnZ339/Lh72PaYikytdW2/ujGGQWf1EU0VUc+C5QFguTzhLl6sH1ZMsI7O7SPZbtCbFP2p1qnX35+5n+Vtg87qI9h+0Jeu9W6Z2LzaP2Ms7/naV0GQOX3kygh6GrCPbyK16tXT1KpTZVmO8/1Ik8w+Z6frjK+KPlTxoN/ugx12xXea3fUPvXh2hU871UnzD7ltHxPxt7kvMDJzfFw/eoN3cOtl1m8fVxeNeUzI/bwyP8+53HHcNqQ00wrZLMcYTByfV0V2luT8BdXmuKg9y6Pto/Vq9ZdtrSHmb+rdf4OlWWwAAAAAAAAAAAAAAAAAAAAAAMT5A5SnEtaeQ3hRAAAAAElFTkSuQmCC" aria-role="logo" />
                </a> */}
                <p style={{textDecoration:"no"}}>UNI Resto Cafe</p>
            </div>
            <div className="col-xl-7 col-lg-10 col-sm-8 col-7">

                <ul className="navbar-nav flex-row justify-content-end flex-wrap align-items-center mr-lg-4 mr-xl-0">
                    
                    <li className="nav-item px-3 text-uppercase mb-0 position-relative d-lg-flex">
                        <div id="cart" className="d-none">

                        </div>
                        <a href="/" className="cart position-relative d-inline-flex" aria-label="View your shopping cart">
                            <i className="fas fa fa-shopping-cart fa-lg"></i>
                            <span className="cart-basket d-flex align-items-center justify-content-center">
                                {count}
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;