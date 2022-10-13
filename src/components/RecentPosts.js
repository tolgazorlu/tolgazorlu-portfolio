import React from 'react';
import '../App.css';

function RecentPosts() {


  return (
    <div className="recent-posts">
      <div className="flex items-baseline justify-between">
        <div>
          Recent Posts
        </div>

        <div className="text-sm">
          <a href="https://kiraathane.dev/">View all Posts →</a>
        </div>
      </div>

      <div id="posts" className="posts flex justify-between mt-6">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black-500	">
          <img className="w-full" src={require("../assets/recent-post/blockchain.png")} alt="Blockchain" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2"><a href="#">Blockchain Ağları</a></div>
            <p className="text-gray-400 text-base">
              Günümüz teknolojisi olarak büyük ses getiren Blockchain, yeni ve iddialı güvenlik önlemleri ile oldukça popülerleşmiştir. Birçok büyük kuruluş, ödeme sistemlerini bu teknoloji doğrultusunda güncellemiş ve güvenlik yöntemlerini bu sayede arttırmışlardır. Bu makalede Blockchain Ağları’nı ve nasıl bir yapıda olduklarını, türlerini ve nasıl çalıştığı ele alınmıştır.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#blockchain</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#blokzinciri</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#bitcoin</span>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black-500">
          <img className="w-full" src={require("../assets/recent-post/web-tabanlı.png")} alt="Blockchain" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2"><a href="#">Web Tabanlı Uygulama Nedir?</a></div>
            <p className="text-gray-400 text-base">
              Web tabanlı uygulamalar, kullanıcıların bir tarayıcı vasıtasıyla uzak bir sunucuyla etkileşime girmesini sağlayan belirli yazılım türleridir. Pandeminin de artışıyla son yıllarda büyük bir ilgi görülmeye başlandı. Ayrıca insan ilişkileri ve iletişimler web tabanlı uygulamalar vasıtasıyla daha hızlı ve pratik şekilde gerçekleştirilmeye başlandı. Bu nedenle dünya çapında...</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#web</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#uygulama</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#js</span>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black-500">
          <img className="w-full" src={require("../assets/recent-post/hukukta-ai.png")} alt="Blockchain" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2"><a href="#">Hukuk Alanında Yapay Zeka</a></div>
            <p className="text-gray-400 text-base">
              Günümüzde bilgisayar işlem gücünün artmasıyla birlikte yapay zeka kavramını neredeyse her sektörde duymaya başladık. Bunun temel nedeni yapay zekanın insana benzer bir şekilde öğrenme modelinin olması ve sonucunda insana yakın cevaplar türetebilmesidir. Yapay zeka çok farklı konularda hayatımızı kolaylaştıran yenilikler ve çözümler sunmaktadır.</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ai</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#yapay zeka</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#hukuk</span>
          </div>
        </div>
      </div>
    </div>
  )
}

window.addEventListener('scroll', function(){

  let posts = document.getElementById('posts');
  var scrollPos = window.scrollY;
  if( 200 < scrollPos ){
    
    posts.style.opacity = scrollPos * 0.001;
  }
  else{
    posts.style.opacity = -scrollPos * 0.001;
  }
})

export default RecentPosts;