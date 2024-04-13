import CustomerHeader from "./_component/CustomerHeader";
import Footer from "./_component/Footer";

export default function Home() {
  return (
    <main>
      <CustomerHeader />

      <div className="main-page-banner">
        <h1>FOOD WEBSITE</h1>
        <div className="input-wraper">
          <input type="text" className="select-input" placeholder="Select Place" />
          <input type="text" className="search-input" placeholder="Enter Food or Retaurant Name" />
        </div>
      </div>

      <Footer />
    </main>
  );
}
