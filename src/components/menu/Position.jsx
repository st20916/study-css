import React from 'react'
import PageStyle from '../../styles/pages/Page.module.scss';

const Position = () => {
	return (
		<div>
			<h2 className={PageStyle.title}>Position</h2>
			<p className={PageStyle.explain}>
				HTML 문서 상에서 요소가 배치되는 방식 결정 <br />
				정확한 위치 지정을 위해
				<span>top</span>,
				<span>left</span>,
				<span>bottom</span>,
				<span>right</span> 속성 사용
			</p>
			{/*  */}
			<div className={PageStyle.explain__grid}>
				<div className={PageStyle.description}>
					<strong>static</strong>
					<ul>
						<li>가장 기본 값인 static</li>
						<li>HTML 문서 상에서 원래 있어야 하는 위치에 배치</li>
						<li>작성된 순서에 따라 브라우저 화면에 표시되기 때문에 top, left, bottom, right 속성 무시</li>
					</ul>
				</div>
				<div className={PageStyle.test__background}>
					<div data-attr="static">position: static;</div>
					<div data-attr="static">position: static;</div>
					<div data-attr="static">position: static;</div>
				</div>
			</div>
			{/*  */}
			<div className={PageStyle.explain__grid}>
				<div>
					<strong>relative</strong>
				</div>
				<div className={PageStyle.test__background}>

				</div>
			</div>
		</div>
	)
}

export default Position