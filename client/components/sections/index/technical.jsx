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
import about from '../../../styles/sections/index/about.module.scss'

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
	return (
		<Section classProp={`${about.section} borderBottom`}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Technical"
					preTitle="Hardskills"
					subTitle="As a food technology innovator, I craft cutting-edge food solutions using a diverse set of scientific methodologies and quality assurance techniques."
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<CopyBlock 
							title="Innovation foundations"
							icon={[ 'fat', 'chart-network' ]}
							copy="With a strong foundation in nutritional innovation and food technology, I bring a specialized perspective to every project, constantly learning and evolving to stay ahead of the latest advancements in food safety and product development."
							iconClass={about.icon}
							containerClass={about.container}
						/>
						<BadgesBlock 
							title="Products I love to work with" 
							copy="With over 10 years of experience in manufacturing, I have a deep and intuitive understanding of production optimization and innovation. My passion for improving manufacturing processes has driven me to continuously enhance product quality and efficiency throughout my career."
							list={software}
							block="software" 
							fullContainer="fullContainer"
							icon="grid-2-plus"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>
						<BadgesBlock 
							title="Technologies I love to build with" 
							copy="I am committed to solving problems through innovative technology, utilizing digital monitoring systems, cloud-based solutions, and advanced food production techniques to enhance the food technology process."
							list={tech} 
							block="tech"
							fullContainer="fullContainer" 
							icon="laptop-code"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>							
					</div>
					<div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b" />
					</div>
				</section>	
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}

const software = [
	{ key: 'photoshop', 	name: 'Processed Cheese', 					type: 'devicon' },
	{ key: 'illustrator', 	name: 'Phosphates and Hydrocolloids', 		type: 'devicon' },
	{ key: 'figma', 		name: 'Starch Blends', 						type: 'devicon' },
	{ key: 'vscode', 		name: 'Flavors and its Enhancers', 			type: 'devicon' },
	{ key: 'mailbox', 		name: 'Milk Proteins and Powders', 			type: 'fas' },
	{ key: 'computer-mouse',name: 'Fats and Oils', 						type: 'fas' },
	{ key: 'list-music',	name: 'Chocolates', 						type: 'fas' },
	{ key: 'aftereffects',	name: 'Colorants', 							type: 'devicon' },
	{ key: 'premierepro',	name: 'Glycerides', 						type: 'devicon' },
]

const tech	= [
	{ key: 'javascript', 	name: 'Digital Monitoring Systems', 						type: 'devicon' },
	{ key: 'nodejs', 		name: 'Cloud-Based Accounting Software', 					type: 'devicon' },
	{ key: 'react', 		name: 'Innovative Food Production Techniques', 				type: 'devicon' },

]