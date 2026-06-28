// Sections
import PandaPlanCaseStudies from '../../components/sections/case-studies/pandaplan'

import Color  from '../../components/utils/page.colors.util'

import colors from '../../content/case-studies/_colors.json'

//
export default function CaseStudies({}) {
	return (
		<>	
			<Color colors={colors} />
			<PandaPlanCaseStudies />
		</>
	)
}
