import React from "react";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { Button } from "react-scroll";

const DishesCard = (props) => {
    return (
        <div className="w-full lg:w-[55vh]  p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
            <div className="flex items-center justify-center">
                <img className=" rounded-xl flex h-[38vh] lg:h-[40vh] " src={props.img} alt="img" />
            </div>
            <div className="space-y-4">
                <div className="flex flex-col justify-center items-center pt-6 text-lg text-red-600">
                    <div>{props.name}</div>
                    <h3 className="italic font-thin font-serif text-violet-500">{props.cuisine}</h3>
                </div>
                <h3 className="font-semibold text-sm text-center pt-2 lg:text-lg">{props.title}</h3>

                <div className=" flex flex-row items-center justify-center gap-4">
                    <Button title="Make Reservation" />
                </div>
            </div>
        </div>
    );
};

export default DishesCard;
