import { Minus, Archive, Home, Settings, Users, CreditCard, Info, Search, Truck, User  } from 'lucide-react';

export default function Page() {
    var sager = 87;
    var warrents = 67;
    var people = 43;
    var cars = 56;
    var latestkr = [
        {name: "Jørgen", date: "01/01/2000", officer: "Jesper", fine: "100 kr", jail: "100 år"},
        {name: "Kasper", date: "01/01/2000", officer: "Jeppe", fine: "100 kr", jail: "100 år"},
    ];
    return (
        <div className="w-full h-full flex flex-col gap-[1vh]">
            <div className="w-full h-1/5 flex flex-row gap-[1vh]">
                <div className="w-1/4 h-full bg-lightback rounded-[0.5vh] p-[0.5vh] py-[1.3vh] border-[0.2vh] border-lightborder flex flex-row items-center justify-center">
                    <Archive className='w-[5vh] h-[5vh] mr-[2vh]' color='#57BAFE'/>
                    <div className='flex flex-col items-center font-bold text-[1.75vh]'>
                        <div className='text-[1.5vh]'>Antal Sager:</div>
                        <div className='text-white'>{sager}</div>
                    </div>
                </div> 
                <div className="w-1/4 h-full bg-lightback rounded-[0.5vh] p-[0.5vh] py-[1.3vh] border-[0.2vh] border-lightborder flex flex-row items-center justify-center">
                    <Search className='w-[5vh] h-[5vh] mr-[1vh]' color='#57BAFE'/>
                    <div className='flex flex-col items-center font-bold text-[1.75vh]'>
                        <div className='text-[1.5vh]'>Antal Efterlysninger</div>
                        <div className='text-white'>{warrents}</div>
                    </div>
                </div> 
                <div className="w-1/4 h-full bg-lightback rounded-[0.5vh] p-[0.5vh] py-[1.3vh] border-[0.2vh] border-lightborder flex flex-row items-center justify-center">
                    <User className='w-[5vh] h-[5vh] mr-[1vh]' color='#57BAFE'/>
                    <div className='flex flex-col items-center font-bold text-[1.75vh]'>
                        <div className='text-[1.5vh]'>Antal personer</div>
                        <div className='text-white'>{people}</div>
                    </div>
                </div> 
                <div className="w-1/4 h-full bg-lightback rounded-[0.5vh] p-[0.5vh] py-[1.3vh] border-[0.2vh] border-lightborder flex flex-row items-center justify-center">
                    <Truck className='w-[5vh] h-[5vh] mr-[1vh]' color='#57BAFE'/>
                    <div className='flex flex-col items-center font-bold text-[1.75vh]'>
                        <div className='text-[1.5vh]'>Antal Køretøjer</div>
                        <div className='text-white'>{cars}</div>
                    </div>
                </div> 
            </div>
            <div className="w-full h-2/5 flex flex-row gap-[1vh]">
                <div className="w-3/4 h-full bg-lightback rounded-[0.5vh] p-[1vh] border-[0.2vh] border-lightborder">
                    <div className='font-bold text-[1.75vh] leading-4 mb-[1vh]'>Seneste KR Indlæg</div>
                    <div className='w-full h-[23vh] bg-lighterback border-[0.2vh] border-lightborder rounded-[0.3vh] text-[1.5vh'>
                        <div>
                            <div className='flex flex-row bg-lightborder text-[1.7vh] font-bold px-[1vh]'>
                                <div className='overflow-hidden w-[16.5vh]'>Navn</div>
                                <div className='overflow-hidden w-[14.2vh]'>Dato</div>
                                <div className='overflow-hidden w-[15.75vh]'>Betjent</div>
                                <div className='overflow-hidden w-[14.5vh]'>Bøde</div>
                                <div className='overflow-hidden w-[9vh]'>Fængsel</div>
                            </div>
                            <div id='latestkr' className='flex flex-col overflow-hidden h-[20vh]'>
                                <div id='2352' className='h-[2.5vh] flex flex-row items-center px-[1vh] text-[1.5vh] border-b-[0.2vh] border-lightborder'><div className='overflow-hidden w-[16.5vh]'>Jørgen Pjelsø</div><div className='overflow-hidden w-[14.2vh]'>01/01/2000</div><div className='overflow-hidden w-[15.75vh]'>Jeppe Ølgåård</div><div className='overflow-hidden w-[14.5vh]'>1000kr</div><div className='overflow-hidden w-[5vh]'>50år</div></div>
                                <div id='2324' className='h-[2.5vh] flex flex-row items-center px-[1vh] text-[1.5vh] border-b-[0.2vh] border-lightborder'><div className='overflow-hidden w-[16.5vh]'>Jørgen Pjelsø</div><div className='overflow-hidden w-[14.2vh]'>01/01/2000</div><div className='overflow-hidden w-[15.75vh]'>Jeppe Ølgåård</div><div className='overflow-hidden w-[14.5vh]'>1000kr</div><div className='overflow-hidden w-[5vh]'>50år</div></div>
                                <div id='2342' className='h-[2.5vh] flex flex-row items-center px-[1vh] text-[1.5vh] border-b-[0.2vh] border-lightborder'><div className='overflow-hidden w-[16.5vh]'>Jørgen Pjelsø</div><div className='overflow-hidden w-[14.2vh]'>01/01/2000</div><div className='overflow-hidden w-[15.75vh]'>Jeppe Ølgåård</div><div className='overflow-hidden w-[14.5vh]'>1000kr</div><div className='overflow-hidden w-[5vh]'>50år</div></div>
                                <div id='3245' className='h-[2.5vh] flex flex-row items-center px-[1vh] text-[1.5vh] border-b-[0.2vh] border-lightborder'><div className='overflow-hidden w-[16.5vh]'>Jørgen Pjelsø</div><div className='overflow-hidden w-[14.2vh]'>01/01/2000</div><div className='overflow-hidden w-[15.75vh]'>Jeppe Ølgåård</div><div className='overflow-hidden w-[14.5vh]'>1000kr</div><div className='overflow-hidden w-[5vh]'>50år</div></div>
                                <div id='2352' className='h-[2.5vh] flex flex-row items-center px-[1vh] text-[1.5vh] border-b-[0.2vh] border-lightborder'><div className='overflow-hidden w-[16.5vh]'>Jørgen Pjelsø</div><div className='overflow-hidden w-[14.2vh]'>01/01/2000</div><div className='overflow-hidden w-[15.75vh]'>Jeppe Ølgåård</div><div className='overflow-hidden w-[14.5vh]'>1000kr</div><div className='overflow-hidden w-[5vh]'>50år</div></div>
                                <div id='2324' className='h-[2.5vh] flex flex-row items-center px-[1vh] text-[1.5vh] border-b-[0.2vh] border-lightborder'><div className='overflow-hidden w-[16.5vh]'>Jørgen Pjelsø</div><div className='overflow-hidden w-[14.2vh]'>01/01/2000</div><div className='overflow-hidden w-[15.75vh]'>Jeppe Ølgåård</div><div className='overflow-hidden w-[14.5vh]'>1000kr</div><div className='overflow-hidden w-[5vh]'>50år</div></div>
                                <div id='2342' className='h-[2.5vh] flex flex-row items-center px-[1vh] text-[1.5vh] border-b-[0.2vh] border-lightborder'><div className='overflow-hidden w-[16.5vh]'>Jørgen Pjelsø</div><div className='overflow-hidden w-[14.2vh]'>01/01/2000</div><div className='overflow-hidden w-[15.75vh]'>Jeppe Ølgåård</div><div className='overflow-hidden w-[14.5vh]'>1000kr</div><div className='overflow-hidden w-[5vh]'>50år</div></div>
                                <div id='3245' className='h-[2.5vh] flex flex-row items-center px-[1vh] text-[1.5vh] border-b-[0.2vh] border-lightborder'><div className='overflow-hidden w-[16.5vh]'>Jørgen Pjelsø</div><div className='overflow-hidden w-[14.2vh]'>01/01/2000</div><div className='overflow-hidden w-[15.75vh]'>Jeppe Ølgåård</div><div className='overflow-hidden w-[14.5vh]'>1000kr</div><div className='overflow-hidden w-[5vh]'>50år</div></div>
                                <div id='2352' className='h-[2.5vh] flex flex-row items-center px-[1vh] text-[1.5vh] border-b-[0.2vh] border-lightborder'><div className='overflow-hidden w-[16.5vh]'>Jørgen Pjelsø</div><div className='overflow-hidden w-[14.2vh]'>01/01/2000</div><div className='overflow-hidden w-[15.75vh]'>Jeppe Ølgåård</div><div className='overflow-hidden w-[14.5vh]'>1000kr</div><div className='overflow-hidden w-[5vh]'>50år</div></div>
                                <div id='2324' className='h-[2.5vh] flex flex-row items-center px-[1vh] text-[1.5vh] border-b-[0.2vh] border-lightborder'><div className='overflow-hidden w-[16.5vh]'>Jørgen Pjelsø</div><div className='overflow-hidden w-[14.2vh]'>01/01/2000</div><div className='overflow-hidden w-[15.75vh]'>Jeppe Ølgåård</div><div className='overflow-hidden w-[14.5vh]'>1000kr</div><div className='overflow-hidden w-[5vh]'>50år</div></div>
                                <div id='2342' className='h-[2.5vh] flex flex-row items-center px-[1vh] text-[1.5vh] border-b-[0.2vh] border-lightborder'><div className='overflow-hidden w-[16.5vh]'>Jørgen Pjelsø</div><div className='overflow-hidden w-[14.2vh]'>01/01/2000</div><div className='overflow-hidden w-[15.75vh]'>Jeppe Ølgåård</div><div className='overflow-hidden w-[14.5vh]'>1000kr</div><div className='overflow-hidden w-[5vh]'>50år</div></div>
                                <div id='3245' className='h-[2.5vh] flex flex-row items-center px-[1vh] text-[1.5vh] border-b-[0.2vh] border-lightborder'><div className='overflow-hidden w-[16.5vh]'>Jørgen Pjelsø</div><div className='overflow-hidden w-[14.2vh]'>01/01/2000</div><div className='overflow-hidden w-[15.75vh]'>Jeppe Ølgåård</div><div className='overflow-hidden w-[14.5vh]'>1000kr</div><div className='overflow-hidden w-[5vh]'>50år</div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/4 h-full bg-lightback rounded-[0.5vh] p-[1vh] py-[1vh] border-[0.2vh] border-lightborder">
                    <div className="text-center font-bold mb-[1vh]">Seneste Ansatte</div>
                    <div className='w-full h-[20vh] flex flex-col items-center gap-[1vh] overflow-hidden text-[1.75vh]'>
                        <div className='h-[3.5vh] border-b-[0.2vh] border-lightborder'><div>10-01 Jørgen Jørgsen</div></div>
                        <div className='h-[3.5vh] border-b-[0.2vh] border-lightborder'><div>10-01 Jørgen Jørgsen</div></div>
                        <div className='h-[3.5vh] border-b-[0.2vh] border-lightborder'><div>10-01 Jørgen Jørgsen</div></div>
                        <div className='h-[3.5vh] border-b-[0.2vh] border-lightborder'><div>10-01 Jørgen Jørgsen</div></div>
                        <div className='h-[3.5vh] border-b-[0.2vh] border-lightborder'><div>10-01 Jørgen Jørgsen</div></div>
                    </div>
                </div>
            </div>
            <div className="w-full h-2/5 flex flex-row gap-[1vh]">
                <div className="w-2/4 h-full bg-lightback rounded-[0.5vh] p-[1vh] border-[0.2vh] border-lightborder"> 
                    <div className='font-bold text-[1.75vh] leading-4 mb-[1vh]'>Ansatte</div>
                    <div className='w-full h-[23vh] bg-lighterback border-[0.2vh] border-lightborder rounded-[0.3vh] text-[1.5vh'>
                        <div>
                            <div className='flex flex-row bg-lightborder text-[1.7vh] font-bold px-[1vh]'>
                                <div className='overflow-hidden w-[12.5vh]'>Navn</div>
                                <div className='overflow-hidden w-[12.5vh]'>Rank</div>
                                <div className='overflow-hidden w-[12.5vh]'>On Duty</div>
                                <div className='overflow-hidden w-[7vh]'>Detaljer</div>
                            </div>
                            <div id='latestkr' className='flex flex-col overflow-hidden h-[20vh]'>
                            <div id='2352' className='h-[3.5vh] flex flex-row items-center px-[1vh] text-[1.5vh] border-b-[0.2vh] border-lightborder'><div className='w-[12.5vh]'>Jeppe Jølsen</div><div className='w-[13vh]'>10-01</div><div className='px-4 rounded-full bg-lightsuccess text-lightback font-semibold'>YES</div><div className='px-4 rounded-full bg-lightsecondcontrast text-lightback font-semibold ml-[6.4vh] cursor-pointer'>Åbn</div></div>
                            <div id='2352' className='h-[3.5vh] flex flex-row items-center px-[1vh] text-[1.5vh] border-b-[0.2vh] border-lightborder'><div className='w-[12.5vh]'>Karsten Kantsten</div><div className='w-[13vh]'>10-01</div><div className='px-4 rounded-full bg-lighterror text-lightback font-semibold'>NO</div><div className='px-4 rounded-full bg-lightsecondcontrast text-lightback font-semibold ml-[6.5vh] cursor-pointer'>Åbn</div></div>
                            <div id='2352' className='h-[3.5vh] flex flex-row items-center px-[1vh] text-[1.5vh] border-b-[0.2vh] border-lightborder'><div className='w-[12.5vh]'>Jeppe Jølsen</div><div className='w-[13vh]'>10-01</div><div className='px-4 rounded-full bg-lighterror text-lightback font-semibold'>NO</div><div className='px-4 rounded-full bg-lightsecondcontrast text-lightback font-semibold ml-[6.5vh] cursor-pointer'>Åbn</div></div>
                            <div id='2352' className='h-[3.5vh] flex flex-row items-center px-[1vh] text-[1.5vh] border-b-[0.2vh] border-lightborder'><div className='w-[12.5vh]'>Jeppe Jølsen</div><div className='w-[13vh]'>10-01</div><div className='px-4 rounded-full bg-lightsuccess text-lightback font-semibold'>YES</div><div className='px-4 rounded-full bg-lightsecondcontrast text-lightback font-semibold ml-[6.4vh] cursor-pointer'>Åbn</div></div>
                            <div id='2352' className='h-[3.5vh] flex flex-row items-center px-[1vh] text-[1.5vh] border-b-[0.2vh] border-lightborder'><div className='w-[12.5vh]'>Jeppe Jølsen</div><div className='w-[13vh]'>10-01</div><div className='px-4 rounded-full bg-lightsuccess text-lightback font-semibold'>YES</div><div className='px-4 rounded-full bg-lightsecondcontrast text-lightback font-semibold ml-[6.4vh] cursor-pointer'>Åbn</div></div>
                            <div id='2352' className='h-[3.5vh] flex flex-row items-center px-[1vh] text-[1.5vh] border-b-[0.2vh] border-lightborder'><div className='w-[12.5vh]'>Jeppe Jølsen</div><div className='w-[13vh]'>10-01</div><div className='px-4 rounded-full bg-lighterror text-lightback font-semibold'>NO</div><div className='px-4 rounded-full bg-lightsecondcontrast text-lightback font-semibold ml-[6.5vh] cursor-pointer'>Åbn</div></div>
                            </div>
                        </div>
                    </div> 
                </div> 
                <div className="w-2/4 h-full bg-lightback rounded-[0.5vh] p-[0.5vh] py-[1.3vh] border-[0.2vh] border-lightborder flex flex-row items-center justify-center">
                    <div>Dagens Besked</div>
                    
                </div> 
            </div>
        </div>
    );
}