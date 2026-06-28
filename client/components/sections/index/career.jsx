// Core packages
import Image from 'next/image'

import Badges 		from '../../utils/badge.list.util'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Career scss
import career from '../../../styles/sections/index/career.module.scss'

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
	return (
		<Section classProp={`${career.section} borderBottom`}>
			<Container spacing={['verticalXXXXLrg']}>
				<SectionTitle
					title="Experience"
					preTitle="Career"
					subTitle="12 years of building food manufacturing systems from scratch — leading R&D, QA, engineering, and production operations."
				/>
				<section className={career.area}>
					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Dairy Technologies Corporation</h3>
								<h4>Permanent Full-time</h4>
								<h4>2014 - Present · 12 yrs</h4>
								<h5>Manila, Philippines</h5>
							</span>
							<p>
							Dairy Technologies Corporation is a food manufacturing company specializing in processed cheese products and related dairy innovations. As the Tech Head, I oversee all technical operations — from R&D to production, quality assurance, and engineering services.
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.companyPositions}>
						<div className={career.position}>
							<div className={career.positionContent}>
								<span class={career.positionHeader}>
									<h3>Tech Head</h3>
									<h4>2014 - Present · 12 yrs</h4>
								</span>
								<p>
								As Tech Head, I am responsible for the overall technical direction of the company — leading research and development, quality assurance, engineering services, production optimization, and raw material sourcing. My role bridges food science and operations, ensuring that every product meets the highest standards of safety, quality, and consistency.
								</p>
								<p>
								Key achievements during my tenure 👇
								</p>
								<ul className={career.list}>
									<li>
										Pioneered a processed cheese manufacturing plant from the ground up
										<span className={career.subList}><span className={career.bullet}></span>Optimized traditional techniques for zero downtime and enhanced product quality</span>
									</li>
									<li>
										Developed a full product line including cheese blocks, spreads, melting cheeses, shreddable cheeses, pumpable cheese, and cheese sauces
										<span className={career.subList}><span className={career.bullet}></span>Built complete HACCP and GMP compliance frameworks</span>
									</li>
									<li>
										Established engineering services and spare parts sourcing operations 
										<span className={career.subList}><span className={career.bullet}></span>Reduced equipment downtime through systematic preventive maintenance</span>
									</li>
									<li>
										Created an online operations platform (PandaPlan)
										<span className={career.subList}><span className={career.bullet}></span>Streamlined work ordering, purchasing, and engineering workflows</span>
									</li>
									<li>
										Achieved UP-ISSI certification with distinction
										<span className={career.subList}><span className={career.bullet}></span>Recognized with Best BHAP Award and Certificate of Distinction</span>
									</li>
								</ul>
								<Badges list={foodTech} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div>
					
						<div className={career.position}>
							<div className={career.positionContent}>
									<span class={career.positionHeader}>
										<h3>Registered Nutritionist-Dietitian & Professional Food Technologist</h3>
										<h4>Ongoing licensure and certifications</h4>
									</span>
								<p>
									I hold full professional licensure as a Registered Nutritionist-Dietitian (RND) and Professional Food Technologist (PFT). These credentials, combined with years of hands-on manufacturing experience, give me a unique perspective that bridges nutritional science with practical food production.
								</p>
							</div>
							<div className={career.positionAlt}></div>
						</div>
					</article>
				</section>
			</Container>
		</Section>
	)
}

const foodTech	= [
	{ key: 'javascript', 	name: 'Processed Cheese', 		type: 'devicon' },
	{ key: 'nodejs', 		name: 'HACCP & GMP', 			type: 'devicon' },
	{ key: 'react', 		name: 'Quality Assurance', 		type: 'devicon' },
	{ key: 'nextjs', 		name: 'R&D', 					type: 'devicon' },
	{ key: 'php', 			name: 'Production Optimization',type: 'devicon' },
	{ key: 'wordpress', 	name: 'Engineering Services', 	type: 'devicon' },
	{ key: 'woocommerce', 	name: 'Operations Management',  type: 'devicon' },
	{ key: 'html5',			name: 'SOP Development', 		type: 'devicon' },
	{ key: 'css3',			name: 'Food Safety', 			type: 'devicon' },
	{ key: 'sass',			name: 'Supplier Sourcing', 		type: 'devicon' },
	{ key: 'git',			name: 'Project Management', 	type: 'devicon' },
	{ key: 'mysql', 		name: 'Nutritional Labeling', 	type: 'devicon' },
	{ key: 'mongodb', 		name: 'PandaPlan Platform', 	type: 'devicon' },
]
