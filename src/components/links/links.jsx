import React from "react";
import './links.scss'
function Links() {
    return (
        <React.Fragment>
            <div className="links">
                <div className="container">
                    <div className="content">
                        <span className="title">Другие материалы</span>
                        <div className="items">
                            <a href="https://изв-щебень.рф/" target="_blank">
                                <img src="links_img/1.png" alt="https://изв-щебень.рф/" />
                                <span>Известняковый щебень <i>от 520₽/м³</i></span>
                            </a>
                            <a href="https://грав-щебень.рф/" target="_blank">
                                <img src="links_img/2.png" alt="https://изв-щебень.рф/" />
                                <span>Известняковый щебень <i>от 520₽/м³</i></span>
                            </a>
                            <a href="https://щебень-гранитный.рф/" target="_blank">
                                <img src="links_img/3.png" alt="https://изв-щебень.рф/" />
                                <span>Известняковый щебень <i>от 520₽/м³</i></span>
                            </a>
                            <a href="https://pesok-ass.ru/" target="_blank">
                                <img src="links_img/4.png" alt="https://изв-щебень.рф/" />
                                <span>Известняковый щебень <i>от 520₽/м³</i></span>
                            </a>
                            <a href="https://keramzit-ass.ru/" target="_blank">
                                <img src="links_img/5.png" alt="https://изв-щебень.рф/" />
                                <span>Известняковый щебень <i>от 520₽/м³</i></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Links;