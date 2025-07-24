import React from 'react'
import PageStyle from '../../styles/pages/Page.module.scss';

const Display = () => {
	return (
		<div>
			<h2 className={PageStyle.title}>Display</h2>
			<p className={PageStyle.explain}>
				Flexible Box <br />
				레이아웃 배치 전용 기능
			</p>
			{/*  */}
			<div className={PageStyle.explain__grid}>
				<div className={PageStyle.description}>
					<strong>display: flex;</strong>
					<ul>
						<li>Flex 아이템들은 가로 방향으로 배치</li>
						<li>자신이 가진 내용물의 width 만큼 차지 / height 는 컨테이너의 높이만큼 늘어난다.</li>
						<li>아이템들이 배치된 방향의 축 : 메인 축</li>
						<li>메인 축과 수직인 축 : 교차 축</li>
					</ul>
				</div>
				<div className={PageStyle.test__background}>
					<div data-attr="flex">
						<div>position: flex;</div>
						<div>position: flex;</div>
						<div>position: flex;</div>
					</div>
					<div data-attr="flex" data-flex-direction="column">
						<div>position: flex;</div>
						<div>position: flex;</div>
						<div>position: flex;</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Display