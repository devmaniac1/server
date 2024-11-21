const City = require("../models/citySchema")

const getCities= async(req,res)=>{
	try{
		const cities = await City.find();
		res.json(cities)
	} catch(error){
		res.status(404).json({
			message:error.message
		})
	}
}

const getCity = async(req,res)=>{
	try{
		const cityId = req.params.id
		const city = await City.findById(cityId)
		res.json(city)
	} catch(error){
		res.status(404).json({
			message:error.message
		})	
	}
}

const createCity = async (req, res) => {
  try {
    const newCity = new City(req.body);
    
    await newCity.save();
    
    res.status(201).json(newCity);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const deleteCity = async(req,res) => {
	try{
		const { id } = req.params;
    
	    const deletedCity = await City.findByIdAndDelete(id);
    
    	if (!deletedCity) {
      		return res.status(404).json({ message: 'City not found' });
    	}

    	res.status(200).json({ message: 'City deleted successfully', city: deletedCity });
	}catch(error){
		res.status(400).json({
      		message: error.message,
    	});	
	}
}

module.exports = {getCities,getCity,createCity,deleteCity}