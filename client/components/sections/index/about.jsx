// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="With a diverse skill set that spans food technology, nutritional science, quality assurance, project management, and innovative product development, I am a well-rounded professional in the food industry."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/family-photo.jpg" alt="Nelson family photo"/>
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Softskills that pay the bills"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="In addition to my technical expertise in food technology and nutrition—I also possess strong leadership, project management, and problem-solving skills—sharpened through years of managing complex quality assurance processes and R&D initiatives. Outside of work, I am dedicated to lifelong learning and continuous improvement in my field. I am confident in my ability to bring innovation and value to every endeavor."
						/>
						<BadgesBlock 
							title="Research and Planning" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="One of my favorite aspects of innovation is planning the architecture of a project. From developing new food products to implementing quality assurance systems—I enjoy working with the many touchpoints of food science and technology. This allows me to enhance the nutritional value and safety of food products, ensuring a positive impact on consumer health."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'Leadership', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'Problem Solving', 	type: 'fad' },
	{ key: 'window', 			name: 'Project Management', 	type: 'fad' },
	{ key: 'cubes', 			name: 'Communication', 	type: 'far' },
	{ key: 'layer-plus', 		name: 'Adaptability', 	type: 'fad' },
	{ key: 'solar-system', 		name: 'Attention to Detail', 		type: 'fad' },
]