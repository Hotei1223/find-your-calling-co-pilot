const Indicator = () => {
    return (
        <div className="justify-between items-center inline-flex">
            <div className="h-[30px] px-[11px] py-0.5 bg-white rounded-[15px] flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-normal leading-[25px]">1</div>
            </div>
            <div data-svg-wrapper>
                <svg width="100%" height="12" viewBox="0 0 163 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.726497 6L6.5 11.7735L12.2735 6L6.5 0.226497L0.726497 6ZM6.5 7H162.5V5H6.5V7Z" fill="#fff" />
                </svg>
            </div>
            <div className="h-[30px] px-[11px] py-0.5 bg-white rounded-[15px] flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-normal leading-[25px]">2</div>
            </div>
            <div data-svg-wrapper>
                <svg width="100%" height="12" viewBox="0 0 167 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.726497 6L6.5 11.7735L12.2735 6L6.5 0.226497L0.726497 6ZM6.5 7L166.5 7.00001L166.5 5.00001L6.5 5L6.5 7Z" fill="white" />
                </svg>
            </div>
            <div className="h-[30px] px-[11px] py-0.5 bg-white rounded-[15px] flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-normal leading-[25px]">3</div>
            </div>
        </div>
    )
}

export default Indicator