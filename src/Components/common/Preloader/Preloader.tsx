import loader from "../../../assets/Spinner.svg";


type PreloaderPropsType = {
    style?: string
}

export const Preloader = (props: PreloaderPropsType) => {
    return (
        <div className={props.style ? props.style : ''}><img src={loader} alt='preloader'/></div>
    );
};

