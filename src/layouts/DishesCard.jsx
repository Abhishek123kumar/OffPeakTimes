import React from "react";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { Button } from "react-scroll";

const DishesCard = (props) => {
    return (
        <div className=" w-full lg:w-[100vh] p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
            <img className=" rounded-xl" src={props.img} alt="img" />
            <div className=" space-y-4">
                <div className=" flex flex-row justify-center pt-6 text-lg text-red-600">
                    Restaurant Name(Italian)
                </div>
                <h3 className=" font-semibold text-center text-lg pt-2">{props.title}</h3>

                <div className=" flex flex-row items-center justify-center gap-4">
                    <Button title="Make Reservation" />
                </div>
            </div>
        </div>
    );
};

export default DishesCard;
