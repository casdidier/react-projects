import React, { useState, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

const App = () => {
	// HINT: each "item" in our list names a name, a boolean to tell if its been completed, and a quantity
	const [items, setItems] = useState([
		{ itemName: 'item 1', quantity: 2, isSelected: false },
		{ itemName: 'item 2', quantity: 2, isSelected: false },
		{ itemName: 'item 3', quantity: 2, isSelected: false }
	]);

	const [inputValue, setInputValue] = useState("");
	const [totalItemCount, setTotalItemCount] = useState(6);

	const handleAddButtonClick = () => {
		const newItems = [...items, { itemName: inputValue, quantity: 1, isSelected: false }];
		setItems(newItems);
	}

	const decrementQuantity = (index) => {
		const newItems = [...items];

		if (newItems[index].quantity === 1) {
			newItems[index].quantity = 1
		} else {
			newItems[index].quantity -= 1;
		}

		setItems(newItems);
		calculateTotal();
	}

	const incrementQuantity = (index) => {
		const newItems = [...items];
		newItems[index].quantity += 1;

		setItems(newItems);
		calculateTotal();
	}

	const handleComplete = (index) => {
		const newItems = [...items];

		newItems[index].isSelected = !newItems[index].isSelected;

		setItems(newItems);
	}

	const calculateTotal = () => {
		const totalItemCount = items.reduce((total, item) => {
			return total += item.quantity;
		}, 0)

		setTotalItemCount(totalItemCount);

	}

	return (
		<div className='app-background'>
			<div className='main-container'>
				<div className='add-item-box'>
					<input className='add-item-input'
						placeholder='Add an item...'
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)} />
					<FontAwesomeIcon icon={faPlus} onClick={handleAddButtonClick} />
				</div>
				<div className='item-list'>
					{items.map((item, index) => {
						return <div className='item-container' key={index}>
							<div className='item-name'>
								{/* HINT: replace false with a boolean indicating the item has been completed or not */}
								{item.isSelected ? (
									<>
										<FontAwesomeIcon icon={faCheckCircle} onClick={() => handleComplete(index)} />
										<span className='completed'>{item.itemName}</span>
									</>
								) : (
										<>
											<FontAwesomeIcon icon={faCircle} onClick={() => handleComplete(index)} />
											<span>{item.itemName}</span>
										</>
									)}
							</div>
							<div className='quantity'>
								<button onClick={() => decrementQuantity(index)}>
									<FontAwesomeIcon icon={faChevronLeft} />
								</button>
								<span>{item.quantity}</span>
								<button onClick={() => incrementQuantity(index)}>
									<FontAwesomeIcon icon={faChevronRight} />
								</button>
							</div>
						</div>
					})}
				</div>
				<div className='total'>Total: {totalItemCount}</div>
			</div>
		</div>
	);
};

export default App;
