import { useState, CSSProperties, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import SearchBar from '../molecules/SearchBar.molecules'
import ListInbox from './ListInbox.organisms'
import { MoonLoader } from "react-spinners";
import { AllUser, GetChat } from "../../lib/fetching";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

const CardListInbox = ({ onClick, dataChat }) => {
    const [isLoading, setIsLoading] = useState(false)
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setIsLoading(true)
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1000);
        return () => clearTimeout(timer);
    }, []);


    return (
        <div className={`absolute right-20 bottom-32 w-[734px] min-h-[500px] px-8 py-6 bg-white rounded h-[370px] overflow-y-auto ${isLoading ? " items-center justify-center" : null}`}>
            {
                isLoading ?
                    <div className="flex flex-col items-center justify-center">
                        <SearchBar />
                        <div className="mt-12">
                            <MoonLoader size={50} color={'#333'} loading={loading} />
                        </div>
                    </div>
                    : (
                        <>
                            <SearchBar />
                            {
                                dataChat.map(v => {
                                    return (
                                        <ListInbox onClickCard={onClick} chat={v.body} title={v.name} user={v.email} />
                                    )
                                })
                            }
                        </>
                    )

            }

        </div>
    )
}

export default CardListInbox