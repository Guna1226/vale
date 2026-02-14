import { useState } from "react";
import photo1 from "./assets/photos/photo1.jpeg";
import photo2 from "./assets/photos/photo2.jpeg";
import photo3 from "./assets/photos/photo3.jpeg";
import photo4 from "./assets/photos/photo4.jpeg";


function App() {
  const [step, setStep] = useState("gift");
  const [answers, setAnswers] = useState({
    movie: "",
    food: "",
    place: "",
    song: "",
    memory: "",
  });
  const saved = JSON.parse(localStorage.getItem("loveAnswers"));


  const [noPosition, setNoPosition] = useState({ top: "60%", left: "55%" });

  const moveNoButton = () => {
    const randomTop = Math.floor(Math.random() * 70);
    const randomLeft = Math.floor(Math.random() * 70);

    setNoPosition({
      top: randomTop + "%",
      left: randomLeft + "%",
    });
  };

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-red-200 to-pink-300 p-4 relative overflow-hidden">

      {/* Floating Hearts */}
      <div className="absolute text-5xl animate-bounce top-10 left-10">❤️</div>
      <div className="absolute text-4xl animate-pulse top-20 right-20">💖</div>
      <div className="absolute text-3xl animate-bounce bottom-10 left-20">💕</div>
      <div className="absolute text-4xl animate-pulse bottom-20 right-10">💘</div>

      {/* Gift Page */}
      {step === "gift" && (
        <div onClick={() => setStep("question")} className="cursor-pointer text-center">
          <div className="text-9xl animate-bounce">🎁</div>
          <p className="text-2xl mt-4 font-semibold text-red-700">
            Click to Open Your Valentine Surprise 💝
          </p>
        </div>
      )}

      {/* Proposal Page */}
      {step === "question" && (
        <div className="text-center bg-white bg-opacity-70 p-8 rounded-3xl shadow-xl relative">
          <h1 className="text-4xl font-bold text-red-600 mb-6">
            Will You Be My Valentine? 💘
          </h1>

          <button
            onClick={() => setStep("letter")}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-xl mr-6 transition hover:scale-110"
          >
            Yes 💖
          </button>

          <button
            onMouseEnter={moveNoButton}
            style={{ position: "absolute", ...noPosition }}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-xl transition hover:scale-110"
          >
            No 😜
          </button>
        </div>
      )}

      {/* Love Letter */}
      {step === "letter" && (
        <div className="bg-white bg-opacity-80 backdrop-blur-md p-8 rounded-3xl shadow-2xl max-w-xl text-center">
          <h2 className="text-3xl font-bold text-pink-600 mb-4">
            My Love Letter 💌
          </h2>

          <p className="text-gray-700 leading-relaxed">
  From the moment you walked into my life, everything felt softer, brighter, and more meaningful.  
  You are not just a part of my story — you are the reason it feels beautiful.  

  Your smile is my peace, your voice is my comfort, and your love is the strength that carries me through every day.  
  In your presence, I found a home I never knew I was searching for.  

  I promise to stand beside you in every joy and every storm, to hold your hand through every chapter life writes for us.  
  No matter where life takes us, my heart will always choose you — again and again, every single day.  

  You are my today, my tomorrow, and my forever ❤️
</p>


          <button
            onClick={() => setStep("photos")}
            className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition hover:scale-110"
          >
            See Our Memories 📸
          </button>
        </div>
      )}

      {/* 4️⃣ Couple Photos Page — Designed & Animated */}
{step === "photos" && (
  <div className="w-full max-w-4xl text-center">

    <h2 className="text-4xl font-bold text-pink-600 mb-4 animate-pulse">
      Our Beautiful Memories 💕
    </h2>

    <div className="grid md:grid-cols-2 gap-6">

      {/* Photo Card */}
      <div className="group relative overflow-hidden rounded-3xl shadow-xl bg-white/40 backdrop-blur-md transition duration-500 hover:scale-105">
        <img
          src={photo1}
          className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-pink-500/20 opacity-0 group-hover:opacity-100 transition"></div>
      </div>

      <div className="group relative overflow-hidden rounded-3xl shadow-xl bg-white/40 backdrop-blur-md transition duration-500 hover:scale-105">
        <img
          src={photo2}
          className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-pink-500/20 opacity-0 group-hover:opacity-100 transition"></div>
      </div>

      <div className="group relative overflow-hidden rounded-3xl shadow-xl bg-white/40 backdrop-blur-md transition duration-500 hover:scale-105">
        <img
          src={photo3}
          className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-pink-500/20 opacity-0 group-hover:opacity-100 transition"></div>
      </div>

      <div className="group relative overflow-hidden rounded-3xl shadow-xl bg-white/40 backdrop-blur-md transition duration-500 hover:scale-105">
        <img
          src={photo4}
          className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-pink-500/20 opacity-0 group-hover:opacity-100 transition"></div>
      </div>

    </div>

    <button
      onClick={() => setStep("questions")}
      className="mt-4 bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-3 rounded-full text-lg shadow-lg hover:scale-110 transition"
    >
      Answer My Love Questions 💕
    </button>

  </div>
)}


      {/* Questions Page */}
{/* Questions Page */}
{step === "questions" && (
  <div className="bg-white bg-opacity-90 p-8 rounded-3xl shadow-2xl w-full max-w-xl text-center">

    <h2 className="text-3xl font-bold text-pink-600 mb-6">
      Just 5 Cute Questions 💖
    </h2>

    <div className="space-y-4">

      <select name="movie" onChange={handleChange} className="w-full p-3 rounded-xl border bg-white" defaultValue="">
        <option value="" disabled>🎬 Choose Your Favorite Movie</option>
        <option value="3">3</option>
        <option value="Thandavam">Thandavam</option>
        <option value="Sirai">Sirai</option>
      </select>

      <select name="food" onChange={handleChange} className="w-full p-3 rounded-xl border bg-white" defaultValue="">
        <option value="" disabled>🍕 Choose Your Favorite Food</option>
        <option value="Biryani">Biryani</option>
        <option value="Pizza">Pizza</option>
        <option value="Ice Cream">Ice Cream</option>
      </select>

      <select name="place" onChange={handleChange} className="w-full p-3 rounded-xl border bg-white" defaultValue="">
        <option value="" disabled>🌍 Choose Dream Place</option>
        <option value="Australia">Australia</option>
        <option value="Paris">Paris</option>
        <option value="Switzerland">Switzerland</option>
      </select>

      <select name="song" onChange={handleChange} className="w-full p-3 rounded-xl border bg-white" defaultValue="">
        <option value="" disabled>🎵 Choose Our Song</option>
        <option value="Uyirey - Amaran">Uyirey (Amaran)</option>
        <option value="Nee Partha Vizhigal - 3">Nee Partha Vizhigal (3)</option>
        <option value="Oru Paadhi Kadhavu - Thandavam">Oru Paadhi Kadhavu (Thandavam)</option>
      </select>

      <select name="memory" onChange={handleChange} className="w-full p-3 rounded-xl border bg-white" defaultValue="">
        <option value="" disabled>💞 Choose Our Memory</option>
        <option value="Jan 22 2024">Jan 22 2024</option>
        <option value="Aug 26 2024">Aug 26 2024</option>
        <option value="Nov 12 2024">Nov 12 2024</option>
      </select>

    </div>

    <button
      onClick={() => {
        if (!answers.movie || !answers.food || !answers.place || !answers.song || !answers.memory) {
          alert("Please answer all questions 💕");
          return;
        }

        localStorage.setItem("loveAnswers", JSON.stringify(answers));
        setStep("final");
      }}
      className="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-full transition hover:scale-105"
    >
      Submit My Love 💌
    </button>

  </div>
)}



      {/* Final Page */}
   {/* Final Page */}
{step === "final" && (
  <div className="flex items-center justify-center min-h-screen">
    <div className="bg-white bg-opacity-90 p-10 rounded-3xl shadow-2xl text-center max-w-lg w-full animate-fadeIn">

      <h1 className="text-5xl font-bold text-pink-700 mb-4">
        I Love You Forever ❤️
      </h1>

      <p className="text-xl text-red-600 mb-6">
        Thank you for answering my love questions 💕
      </p>

      <div className="bg-pink-50 p-6 rounded-2xl text-left text-lg text-gray-700 space-y-2 shadow-inner">
        <p>🎬 Our Movie: <span className="font-semibold text-pink-600">{saved?.movie}</span></p>
        <p>🍕 Favorite Food: <span className="font-semibold text-pink-600">{saved?.food}</span></p>
        <p>🌍 Dream Place: <span className="font-semibold text-pink-600">{saved?.place}</span></p>
        <p>🎵 Our Song: <span className="font-semibold text-pink-600">{saved?.song}</span></p>
        <p>💞 Best Memory: <span className="font-semibold text-pink-600">{saved?.memory}</span></p>
      </div>

      <div className="text-7xl mt-6 animate-pulse">💑🌹💖</div>

    </div>
  </div>
)}
    </div>
  );
}

export default App;



