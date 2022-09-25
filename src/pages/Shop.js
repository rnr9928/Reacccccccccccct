import React from 'react'
import "../styles/Shop.css"
import {Link} from "react-router-dom"

const Shop = () => {
  return (
    <>
    <div className="Section_Main">
		<div className="Section_1">
			<div className="Section_2">
				<div className="Section"  >
					<div className="Section_3">
					<Link to='/cart'>
						<img src="https://i.ytimg.com/vi/GPH2bDTnUCc/maxresdefault.jpg"  />
						</Link>
					</div>
				</div>
			</div>
			<div className="hover-text">
				<h2>야스오</h2>
			</div>
			<div className="Section_2">
				<div className="Section">
					<div className="Section_3">
					<Link to='/cart'>
						<img src="https://i.ytimg.com/vi/FOUbN1yjvXc/maxresdefault.jpg" />
						</Link>
					</div>
				</div>
			</div>
			<div className="hover-text">
				<h2>유미</h2>
			</div>
			<div className="Section_2">
				<div className="Section">
					<div className="Section_3">
					<Link to='/cart'>
						<img src="http://event.leagueoflegends.co.kr/beemo-Teemo/img/beemo-wp.jpg" />
						</Link>
					</div>
				</div>
			</div>
			<div className="hover-text">
				<h2>티모</h2>
			</div>
			<div className="Section_2">
				<div className="Section">
					<div className="Section_3">
					<Link to='/cart'>
						<img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vayne_0.jpg" />
						</Link>
					</div>
				</div>
			</div>
			<div className="hover-text">
				<h2>베인</h2>
			</div>
			<div className="Section_2">
				<div className="Section">
					<div className="Section_3">
					<Link to='/cart'>
						<img src="https://url.kr/a9ljpf" />
						</Link>
					</div>
				</div>
			</div>
			<div className="hover-text">
				<h2>마스터이</h2>
			</div>
			<div className="Section_2">
				<div className="Section">
					<div className="Section_3">
					<Link to='/cart'>
						<img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zoe_0.jpg" />
						</Link>
					</div>
				</div>
			</div>
			<div className="hover-text">
				<h2>조이</h2>
			</div>
		</div>	
	</div>
    
 </>
  )
}

export default Shop