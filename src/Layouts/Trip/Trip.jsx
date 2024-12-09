import { Input } from '@/Components/ui/input'
import React from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { SelectTravelsList, SelectBudgetOptions } from '../../Constants/options'
import  {Button}  from '@/Components/ui/button'
import { useState } from 'react'
import { useEffect } from 'react'
const Trip = () => {
	const [location, setLocation] = useState('')
	const [formData, setFormData] = useState([]);

	const handleInputData = (name, value) => {
		setFormData({
			...formData,
			[name]: value
		})

		useEffect(() => {
			console.log(formData);
		}, [formData])
	}


  return (
    <>
		<div className='p-10 mt-5'>
			<h1 className='text-[40px] font-bold'>
				Tell us your travel preferences
			</h1>
			<p className='mt-7 font-bold'>
				Just provide some basic information, and out trip planner will generate a customized itinerary based on your preferences.
			</p>
			<div className='mt-10'>
				<h2> What is destination of choice?</h2>
				<GooglePlacesAutocomplete 
					apiKey={import.meta.env.VITE_GOOGLE_PLACE_API}
					selectProps={{
					location,
					onChange:(v)=>{
						setLocation(v); handleInputData('location', v) }
					}}
				/>
			</div>
				<div className='mt-10'>
					<h2> How many days do you want to travel?</h2>
					<Input  placeholder={'Ex.4'} type='number'
					onClick={(e) => handleInputData('noOfDays', e.target.value)}
					/>
				</div>
				<h2 className='font-bold text-lg mt-10'> What is your budget?</h2>
				<div className='grid grid-cols-3 gap-4 mt-4'>
					{
						SelectBudgetOptions.map((item, index) => (
							<div key={index} 
							onClick={(e) => handleInputData('budget', item.title)}
							className={`p-4 border rounded-lg hover:shadow-lg ${
								formData?.budget == item.title && 'shadow-lg border-black'
							}`}
							>
								 <h2 className='text-4xl'> {item.icon}</h2>
								 <h2 className='font-bold text-lg'> {item.title}</h2>
								 <h2 className='text-sm text-gray-500'> {item.decs}</h2>
							</div>
						))
					}
				</div>
				<h2 className='font-bold text-lg mt-10'> Who do you plan on traveling with on next adventure?</h2>
				<div className='grid grid-cols-3 gap-4 mt-4'>
					{
						SelectTravelsList.map((item, index) => (
							<div key={index} 
							onClick={(e) => handleInputData('travelers', item.title)}
							className={`p-4 border rounded-lg hover:shadow-lg ${
								formData?.travelers == item.title && 'shadow-lg border-black'
							}`}>
								 <h2 className='text-4xl'> {item.icon}</h2>
								 <h2 className='font-bold text-lg'> {item.title}</h2>
								 <h2 className='text-sm text-gray-500'> {item.decs}</h2>
							</div>
						))
					}
				</div>
				<div className='my-10 flex justify-end'>
					<Button> Generate Trip</Button>
				</div>
		</div>
    </>
  )
}

export default Trip