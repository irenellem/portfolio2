// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';
import Badges from '../../utils/badge.list.util'
import Icon from '../../utils/icon.util'
import SectionTitle from '../../blocks/section.title.block'

import css from '../../../styles/sections/projects/featured.module.scss'

export default function PandaPlanCaseStudies() {

	return (
		<Section classProp={css.hasBg}>	
			<Container spacing={'verticalXXXXLrg'}>
				<SectionTitle
					title="Case Studies"
					preTitle="PandaPlan"
					subTitle="Real systems built for real operations — delivering clarity, convenience, and control."
				/>
				
				<section className={css.project}>
					<div className={css.details}>
						<div className={css.projectHeader}>
							<div className={css.header}>
								<h3 className="highlight">PandaPlan — Online Operations Platform</h3>
							</div>
							<div className={css.description}>
								<p><strong>Building an operations platform from the ground up</strong> — born from 12 years of firsthand experience with the chaos of unorganized food manufacturing operations.</p>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div style={{padding: '2rem 0'}}>
						<h3 style={{marginBottom: '1rem', fontSize: '1.4rem'}}>The Problem</h3>
						<p style={{lineHeight: 1.8, maxWidth: '700px'}}>
						After years of building operational systems from scratch at a food manufacturing plant, one pattern kept repeating: work was getting lost between handwritten notes, scattered spreadsheets, and verbal instructions. There was no single source of truth for who was doing what, when, or where things stood. Equipment broke down because maintenance schedules were forgotten. Purchase requests vanished into thin air. The cost of disorganization was measured in downtime, delays, and frustration.
						</p>
					</div>
				</section>

				<section>
					<div style={{padding: '2rem 0'}}>
						<h3 style={{marginBottom: '1rem', fontSize: '1.4rem'}}>The Solution</h3>
						<p style={{lineHeight: 1.8, maxWidth: '700px'}}>
						PandaPlan was built as a side project — not a corporation chasing metrics, but a practical answer to a real problem. It is an online platform that organizes work ordering, purchasing, and engineering workflows into one clear system. No complicated software. No sales pitch. Just clear, honest systems that actually work.
						</p>
					</div>
				</section>

				<section>
					<div style={{padding: '2rem 0'}}>
						<h3 style={{marginBottom: '1rem', fontSize: '1.4rem'}}>Key Modules</h3>
						
						<div style={{marginBottom: '1.5rem'}}>
							<h4 style={{marginBottom: '0.5rem', color: 'var(--color-primary)'}}>🔧 Engineering Module</h4>
							<p style={{lineHeight: 1.8, maxWidth: '700px'}}>
							A structured system for managing equipment maintenance, repair requests, and engineering projects. Each request is tracked from submission to completion — eliminating the black hole of verbal instructions and lost paper forms. Preventive maintenance schedules keep equipment running and reduce costly downtime.
							</p>
						</div>
						
						<div style={{marginBottom: '1.5rem'}}>
							<h4 style={{marginBottom: '0.5rem', color: 'var(--color-primary)'}}>📦 Purchasing Module</h4>
							<p style={{lineHeight: 1.8, maxWidth: '700px'}}>
							A streamlined purchasing workflow that connects requesters with suppliers. Purchase orders, approvals, and delivery tracking are all handled within the platform — replacing the chaos of scattered emails and manual follow-ups.
							</p>
						</div>
						
						<div>
							<h4 style={{marginBottom: '0.5rem', color: 'var(--color-primary)'}}>📋 Work Order Module</h4>
							<p style={{lineHeight: 1.8, maxWidth: '700px'}}>
							Daily work orders are created, assigned, and tracked in real time. Staff know exactly what to do and when. Supervisors can see the status of every task at a glance. No more guessing. No more duplicate work. No more things falling through the cracks.
							</p>
						</div>
					</div>
				</section>

				<section>
					<div style={{padding: '2rem 0'}}>
						<h3 style={{marginBottom: '1rem', fontSize: '1.4rem'}}>Built on Honesty & Integrity</h3>
						<p style={{lineHeight: 1.8, maxWidth: '700px'}}>
						PandaPlan is a side project rooted in transparency. No upsells. No lock-ins. No promises that can't be kept. Every feature was built because someone actually needed it — not because a roadmap said so. The platform grows one honest conversation at a time, and that is exactly how it will stay.
						</p>
					</div>
				</section>

				<section>
					<div style={{padding: '2rem 0'}}>
						<h3 style={{marginBottom: '1rem', fontSize: '1.4rem'}}>The Result</h3>
						<div style={{display: 'flex', gap: '2rem', flexWrap: 'wrap'}}>
							<div style={{padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', minWidth: '200px'}}>
								<h4 style={{fontSize: '2rem', color: 'var(--color-primary)'}}>✓</h4>
								<p>Clear accountability — every task has an owner and a status</p>
							</div>
							<div style={{padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', minWidth: '200px'}}>
								<h4 style={{fontSize: '2rem', color: 'var(--color-primary)'}}>✓</h4>
								<p>Reduced equipment downtime through systematic maintenance tracking</p>
							</div>
							<div style={{padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', minWidth: '200px'}}>
								<h4 style={{fontSize: '2rem', color: 'var(--color-primary)'}}>✓</h4>
								<p>Streamlined purchasing from request to delivery</p>
							</div>
						</div>
					</div>
				</section>

			</Container>
			<div className={css.bgContainer}>
				<span className={css.orbitalBg}>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span></span>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroCenter}`}></span></span>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span></span>
				</span>
				<span className={css.afterGlowBg}></span>
			</div>
		</Section>
	)
}
