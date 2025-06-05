import Image from 'next/image';
// ...existing code...
function Home () {
  return (
    <div>
      <h1>Mom. I Just Wanna Say: I Love You! :)</h1>
      <p> Versículo Bíblico: "Ela veste de força e dignidade, e rir-se-á do dia que está por vir". "Abre a sua mão ao aflito, e ao necessitado estende as suas mãos." </p>
      <Image 
        src="https://images.pexels.com/photos/51953/pexels-photo-51953.jpeg"
        alt="Mulher carregando bebê na praia durante o pôr do sol"
        width={600}
        height={400}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
}