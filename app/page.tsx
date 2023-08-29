import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";

export default async function Home() {
	const allCars = await fetchCars()


	const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars 
	

  return (
    <main className="overflow-hidden">
      <Hero/>

      <div className="mt-12 px-0 py-0 w-full ml-16" id="discover">
        <div className="home__text-container">
            <h1 className=" text-4xl font-extrabold">Car Catalog</h1>
            <p>EXplore cars which you like</p>
        </div>

        <div className="home__filters">
          <SearchBar/>
          <div className="home__filter-container">
            <CustomFilter title='fuel'/>
            <CustomFilter title='year'/>
          </div>
        </div>

				{!isDataEmpty ? (
					<section className="home__cars-wrapper">
						{allCars.map((car) => (
						<CarCard car={car}/>
						)
						)}
					</section>
				): (
					<div className="home__error-container">
						<h2 className="text-xl text-black font-bold">No cars...</h2>
						<p>{allCars?.message}</p>
					</div>
				)}

      </div>
    </main>
  )
}
