import React from "react";

export default function TableList({info}) {
    return (
        <div className="pack-container">
            <div className="header">
                <div className="price-container">
                    <span className="car-title">{info.Marca}</span>
                    <span className="car-model">/{info.AnoModelo}</span>
                </div>
                </div>
                <div>
                <ul className="lists">
                    <li className="list">
                    <span>
                        <svg
                        aria-hidden="true"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M4.5 12.75l6 6 9-13.5"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                        ></path>
                        </svg>
                    </span>
                    <p>Valor: {info.Valor}</p>
                    </li>
                    <li className="list">
                    <span>
                        <svg
                        aria-hidden="true"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M4.5 12.75l6 6 9-13.5"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                        ></path>
                        </svg>
                    </span>
                    <p>Marca: {info.Marca}</p>
                    </li>
                    <li className="list">
                    <span>
                        <svg
                        aria-hidden="true"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M4.5 12.75l6 6 9-13.5"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                        ></path>
                        </svg>
                    </span>
                    <p>Modelo: {info.Modelo}</p>
                    </li>
                    <li className="list">
                    <span>
                        <svg
                        aria-hidden="true"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M4.5 12.75l6 6 9-13.5"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                        ></path>
                        </svg>
                    </span>
                    <p>Ano Modelo: {info.AnoModelo}</p>
                    </li>
                    <li className="list">
                    <span>
                        <svg
                        aria-hidden="true"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M4.5 12.75l6 6 9-13.5"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                        ></path>
                        </svg>
                    </span>
                    <p>Combustível: {info.Combustivel}</p>
                    </li>
                    <li className="list">
                    <span>
                        <svg
                        aria-hidden="true"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M4.5 12.75l6 6 9-13.5"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                        ></path>
                        </svg>
                    </span>
                    <p>Código Fipe: {info.CodigoFipe}</p>
                    </li>
                </ul>
                </div>
            </div>

    )
}