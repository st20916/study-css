import MainPage from './pages/MainPage'
import { Route, Routes } from 'react-router-dom'
import Position from './components/menu/Position'
import Display from './components/menu/Display'

const EmptyContent = () => {
	return (
		<h1>테스트</h1>
	)
}

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<MainPage />}>
					<Route index element={<EmptyContent />} />
					<Route path='position' element={<Position />}></Route>
					<Route path='display' element={<Display />}></Route>
				</Route>
			</Routes>
		</>
	)
}

export default App