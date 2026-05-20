import { useState } from 'react';
import DownloadLogo from "../assets/downloadLogo.svg"
import toast from 'react-hot-toast';
import { useRateLimit } from './RateLimitProvider.tsx';

function PromptBox(){

    const {setIsRateLimited}= useRateLimit();

    const [text,setText]=useState(""); // promptbox text change
    const [Image,setImage]=useState<string | null>(null); // setting img
    const[Loading,setLoading]=useState(false); // displaying generating img
    const[Disabled,setDisabled]=useState(false); //disabling generate btn

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    const handleRequest = async() =>{
        if (!text || text.length<=30) return;

        setImage(null);
        setDisabled(true);
        setLoading(true);

        const response = await fetch("https://img-gen.hayd.workers.dev",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": "Bearer 12345678"
            },
            body:JSON.stringify({prompt: text})

        });

        setDisabled(true);

        const blob = await response.blob();

        if(response.status ===429){
            setIsRateLimited(true);
        }

        const imageUrl = URL.createObjectURL(blob);
        
        setImage(imageUrl);
        toast.success("Image Created")
        setLoading(false);
        setDisabled(false);
        setText("");
    };

    return(
        <> 
            <h1 className="text-3xl md:text-5xl font-bold p-3 text-center text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 mb- font-mono tracking-tight">
                Img-Gene
            </h1>
            
        
            <textarea
                value={text}
                onChange={handleTextChange}
                placeholder="Enter your prompt (minimum 30 characters)..."
                rows={3}
                className="text-lg md:text-xl p-4 h-32 resize-none flex w-11/12 md:w-7/12 mt-6 mx-auto rounded-2xl border border-purple-500/40 bg-black/20 backdrop-blur-md shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
            
           <button
                className={`flex text-center p-3 px-6 mx-auto bg-linear-to-r from-purple-600 to-pink-500 text-white text-lg font-semibold mt-5 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50 active:scale-95 ${
                    Disabled ? "cursor-not-allowed opacity-70 animate-pulse" : "cursor-pointer"
                }`}
                onClick={handleRequest}
                >
                {Disabled ? "Generating..." : "Generate Image"}
            </button>
            
            <div
                data-theme="abyss"
                tabIndex={1}
                className="mx-auto w-11/12 md:w-7/12 my-6 collapse collapse-arrow bg-base-100 border border-purple-500/30 rounded-2xl shadow-md"
             >
                
                <div className="text-center p-4 leading-relaxed">How do I Generate a Image?</div>
                <p className="collapse-content text-sm md:text-base text-gray-300">Type a prompt above, then click "Generate" to see your AI image. Once satisfied, use the download button below. Click “Download” once your image is generated. Pro tip: Adding specific adjectives like “cinematic”, “vintage”, or “vibrant” can produce amazing results. Want more detail? Describe the character, background, or objects you want to see in your image.</p>
            </div>
                     
           
        
                {

                    !Image && !Loading &&
                    
                    <label className="flex flex-col h-56 lg:h-96 items-center justify-center m-4 border-2 border-dashed border-purple-400/50 w-4/6 place-self-center relative cursor-pointer mx-auto rounded-2xl bg-black/10 backdrop-blur-md hover:bg-black/20 transition">
                        <img src={DownloadLogo} className="w-20 h-20 opacity-70" />
                        <h3 className="absolute bottom-6 text-lg md:text-xl text-white font-semibold opacity-80">Generated Image will appear here</h3>
                    
                    </label>
                    
                }
                {
                    Loading && 
                        <label className="flex flex-col h-56 lg:h-96 items-center justify-center m-4 w-4/6 place-self-center relative mx-auto rounded-2xl bg-black/10 backdrop-blur-md">
                            <h3 className="animate-pulse text-lg md:text-xl text-white font-semibold">Generating Image...</h3>
                        </label>
                }
                {
                    Image &&
                        <label className="flex flex-col h-56 lg:h-96 items-center justify-center m-4 w-fit place-self-center relative mx-auto rounded-2xl overflow-hidden shadow-xl">
                            <img src={Image} className="w-full h-full object-cover" />
                        </label>
                }
            <a href={Image!} download="Generated-Image.jpg">
                <button
                    className={`flex mb-4 text-center p-3 px-6 mx-auto bg-linear-to-r from-purple-600 to-blue-500 text-white text-lg font-semibold mt-4 shadow-lg rounded-2xl transition hover:scale-105 active:scale-95 ${
                        Disabled ? "cursor-not-allowed opacity-70" : "cursor-pointer"
                    }`}
                >{Disabled ? <span className="loading loading-spinner"></span> : "Download"}{Disabled ? "Generating":""}</button>
            </a>
        </>
    );
}
export default PromptBox