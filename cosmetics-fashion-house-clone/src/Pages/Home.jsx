import React from 'react'
import styles from './Home.module.css'
import { Link } from 'react-router-dom';
// import Navbar from '../Components/Navbar';







const Home = () => {
	return (
		<div className={styles.container}>
			<div className={styles.body}>
				<div className={styles.body_top}>
					<Link>
						<img src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0221_0222_D_01_CAR_b_FJ_Lagos.jpg?scl=1&fmt=webp&wid=1440" alt="" />
					</Link>
				</div>
			</div>

			<div className={styles.body_mid}>
				<div>
					<Link>
						<img style={{ width: '150%', height: 'auto' }} src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0215_D_02a_TB_RTW_ALC.jpg?scl=1&fmt=webp&wid=720" alt="" />
					</Link>
				</div>
				<div>
					<Link>
						<img src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0215_D_02b_TB_MULTI_RagNBone.jpg?scl=1&fmt=webp&wid=720" alt="" />
					</Link>
				</div>
			</div>
			{/* Body Mid Bottom */}
			<div className={styles.body_mid_bottom}>
				<Link>
					<img style={{ width: '100%' }} src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0215_D_03_MULTI_FeaturedShops.jpg?scl=1&fmt=webp&wid=1440" alt="" />
				</Link>
			</div>


			<div className={styles.founded_brands}>
				<div>
					<h1 style={{ fontSize: '25px', fontWeight: '600' }}>BLACK OWNED AND FOUNDED BRANDS</h1>
					<div className={styles.brandCards}>
						<Link>
							<div className={styles.bottom_end_single_card}>
								<img src="https://images.bloomingdalesassets.com/is/image/BLM/products/1/optimized/12522871_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg" alt="" />
								<div className={styles.brandCards_text}>
									<p>EleVen by Venus Williams</p>
									<h5 style={{ fontWeight: '550' }}>Now INR 4,761.00/-</h5>
									<h5 style={{ fontWeight: '550' }}>7,066/-</h5>
								</div>
							</div>
						</Link>
						<Link>
							<div className={styles.bottom_end_single_card}>
								<img src="https://images.bloomingdalesassets.com/is/image/BLM/products/3/optimized/12608733_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg" alt="" />
								<div className={styles.brandCards_text}>
									<p>EleVen by Venus Williams</p>
									<h5 style={{ fontWeight: '550' }}>Now INR 4,761.00/-</h5>
									<h5 style={{ fontWeight: '550' }}>7,066/-</h5>
								</div>
							</div>
						</Link>
						<Link>
							<div className={styles.bottom_end_single_card}>
								<img src="https://images.bloomingdalesassets.com/is/image/BLM/products/1/optimized/12608611_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg" alt="" />
								<div className={styles.brandCards_text}>
									<p>EleVen by Venus Williams</p>
									<h5 style={{ fontWeight: '550' }}>Now INR 4,761.00/-</h5>
									<h5 style={{ fontWeight: '550' }}>7,066/-</h5>
								</div>
							</div>
						</Link>
						<Link>
							<div className={styles.bottom_end_single_card}>
								<img src="https://images.bloomingdalesassets.com/is/image/BLM/products/8/optimized/12406798_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg" alt="" />
								<div className={styles.brandCards_text}>
									<p>EleVen by Venus Williams</p>
									<h5 style={{ fontWeight: '550' }}>Now INR 4,761.00/-</h5>
									<h5 style={{ fontWeight: '550' }}>7,066/-</h5>
								</div>
							</div>
						</Link>
						<Link>
							<div className={styles.bottom_end_single_card}>
								<img src="https://images.bloomingdalesassets.com/is/image/BLM/products/4/optimized/12442684_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg" alt="" />
								<div className={styles.brandCards_text}>
									<p>EleVen by Venus Williams</p>
									<h5 style={{ fontWeight: '550' }}>Now INR 4,761.00/-</h5>
									<h5 style={{ fontWeight: '550' }}>7,066/-</h5>
								</div>
							</div>
						</Link>
						<Link>
							<div className={styles.bottom_end_single_card}>
								<img src="https://images.bloomingdalesassets.com/is/image/BLM/products/3/optimized/11825273_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg" alt="" />
								<div className={styles.brandCards_text}>
									<p>EleVen by Venus Williams</p>
									<h5 style={{ fontWeight: '550' }}>Now INR 4,761.00/-</h5>
									<h5 style={{ fontWeight: '550' }}>7,066/-</h5>
								</div>
							</div>
						</Link>
					</div>
					<button className={styles.seeMore_btn}>See More&gt;</button>
				</div>
			</div>

			{/* Bottom-Banner */}
			<div className={styles.bottom_banner}>
				<Link>
					<img src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0215_D_05_MULTI_Essentials.jpg?scl=1&fmt=webp&wid=1440" alt="" />
				</Link>
			</div>

			{/* Bottom-End */}

			<div className={styles.bottom_end}>
				<h1 style={{ fontSize: '25px', fontWeight: '500' }}>BECAUSE YOU BROWSED SHOES</h1>
				<div className={styles.bottom_end_cards}>
					<Link>
						<div className={styles.bottom_end_single_card}>
							<img src="https://images.bloomingdalesassets.com/is/image/BLM/products/1/optimized/12522871_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg" alt="" />
							<div className={styles.brandCards_text}>
								<p>EleVen by Venus Williams</p>
								<h5 style={{ fontWeight: '550' }}>Now INR 4,761.00/-</h5>
								<h5 style={{ fontWeight: '550' }}>7,066/-</h5>
							</div>
						</div>
					</Link>
					<Link>
						<div className={styles.bottom_end_single_card}>
							<img src="https://images.bloomingdalesassets.com/is/image/BLM/products/3/optimized/12608733_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg" alt="" />
							<div className={styles.brandCards_text}>
								<p>EleVen by Venus Williams</p>
								<h5 style={{ fontWeight: '550' }}>Now INR 4,761.00/-</h5>
								<h5 style={{ fontWeight: '550' }}>7,066/-</h5>
							</div>
						</div>
					</Link>
					<Link>
						<div className={styles.bottom_end_single_card}>
							<img src="https://images.bloomingdalesassets.com/is/image/BLM/products/1/optimized/12608611_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg" alt="" />
							<div className={styles.brandCards_text}>
								<p>EleVen by Venus Williams</p>
								<h5 style={{ fontWeight: '550' }}>Now INR 4,761.00/-</h5>
								<h5 style={{ fontWeight: '550' }}>7,066/-</h5>
							</div>
						</div>
					</Link>
					<Link>
						<div className={styles.bottom_end_single_card}>
							<img src="https://images.bloomingdalesassets.com/is/image/BLM/products/8/optimized/12406798_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg" alt="" />
							<div className={styles.brandCards_text}>
								<p>EleVen by Venus Williams</p>
								<h5 style={{ fontWeight: '550' }}>Now INR 4,761.00/-</h5>
								<h5 style={{ fontWeight: '550' }}>7,066/-</h5>
							</div>
						</div>
					</Link>
					<Link>
						<div className={styles.bottom_end_single_card}>
							<img src="https://images.bloomingdalesassets.com/is/image/BLM/products/4/optimized/12442684_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg" alt="" />
							<div className={styles.brandCards_text}>
								<p>EleVen by Venus Williams</p>
								<h5 style={{ fontWeight: '550' }}>Now INR 4,761.00/-</h5>
								<h5 style={{ fontWeight: '550' }}>7,066/-</h5>
							</div>
						</div>
					</Link>
					<Link>
						<div className={styles.bottom_end_single_card}>
							<img src="https://images.bloomingdalesassets.com/is/image/BLM/products/3/optimized/11825273_fpx.tif?op_sharpen=1&wid=240&hei=300&fit=fit,1&qlt=50&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg" alt="" />
							<div className={styles.brandCards_text}>
								<p>EleVen by Venus Williams</p>
								<h5 style={{ fontWeight: '550' }}>Now INR 4,761.00/-</h5>
								<h5 style={{ fontWeight: '550' }}>7,066/-</h5>
							</div>
						</div>
					</Link>
				</div>
			</div>


		</div>
	)
}

export default Home