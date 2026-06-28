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

import content from '../../../content/index/about.json'

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	const s = content
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title={s.title}
					preTitle={s.preTitle}
					subTitle={s.subTitle}
				/>
				<section className={about.content}>
				<div className={about.image}>
						<img src="/img/family-photo.webp" alt="Irenelle 2024"/>
						{/* <Image src="/img/family-photo." width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title={s.softskills.title}
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy={s.softskills.copy}
						/>
						<BadgesBlock 
							title={s.planning.title} 
							containerClass={about.container}
							list={s.planning.badges} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy={s.planning.copy}
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}
