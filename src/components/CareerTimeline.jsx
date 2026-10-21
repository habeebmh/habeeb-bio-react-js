import { Typography, Link, styled, Divider } from '@mui/material';
import { TimelineOppositeContent, TimelineDot, Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent } from '@mui/lab';

import styles from './CareerTimeline.module.css'

const Description = styled('div')(({ theme }) => ({
  ...theme.typography.body1,
}));

const ImageLink = styled(Link)(() => ({
  display: 'flex',
  height: '32px',
  width: '32px'
}));

const SpecialDivider = styled(Divider)(() => ({
  marginTop: '8px'
}))

const Position = ({ date, title, description }) => (
  <div className={styles.positionContainer}>
    <Typography variant='overline'>{title}</Typography> &#47;&#47; <Typography variant='overline'>{date}</Typography>
    <Description>{description}</Description>
  </div>
)

const CareerTimeline = () => {
  return (
    <section className={styles.container}>
      <Timeline position="right">
        <TimelineItem>
          <TimelineOppositeContent
            className={styles.leftText}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            Feb 2022 &mdash; Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: '#00adee', padding: '8px' }}>
              <ImageLink target='_blank' rel='noopener noreferrer' href='https://self.inc'>
                <img width={'32px'} src={'/assets/SelfLogo.webp'} alt="self inc logo" />
              </ImageLink>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography component="h3" variant="h6">Self</Typography>
            <Typography variant='caption' className={styles.rightDateText}>Feb 2022 &mdash; Present</Typography>
            <SpecialDivider className={styles.rightDateText}/>
            <Position title={'Staff Software Engineer'} date={'Mar 2024 to Present'} description={(
              <ul>
                <li>Staff Engineer leading the Customer Experience team.</li>
                <li>Owner of the Self App and Web experiences.</li>
                <li>Company AI Champion.</li>
                <li>Responsible for cross-sell and up-sell initiatives and integrations with third-party vendors.</li>
                <li>Stack: React.js and React Native (front end); Python and Node.js (back end); Bitrise (builds); AWS; LaunchDarkly (experimentation); Contentful (CMS).</li>
              </ul>
            )} />
            <Divider />
            <Position title={'Senior Software Engineer'} date={'Feb 2022 to Mar 2024'} description={(
              <ul>
                <li>Senior Front End Engineer on the Marketplace team.</li>
                <li>Leader of projects in the front end work-stream on the App and Website.</li>
                <li>Integrating with several third parties to bring offers to customers.</li>
              </ul>
            )}/>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent align="right" variant="body2" color="text.secondary" className={styles.leftText}>
            June 2026 &mdash; Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{ padding: '8px', backgroundColor: '#ffffff' }}>
              <img width='32' height='32' src='/assets/FamousInDallasLogo.webp' alt='Famous in Dallas logo' />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography component="h3" variant="h6">Famous in Dallas</Typography>
            <Typography variant='caption' className={styles.rightDateText}>June 2026 &mdash; Present</Typography>
            <SpecialDivider className={styles.rightDateText}/>
            <Position title={'Investor'} date={'June 2026 to Present'} description={(
              <>
                <Typography>Investor in an independent fashion brand based in Dallas, Texas.</Typography>
                <Link href='https://famousindallas.com' target='_blank' rel='noopener noreferrer'>View the collection</Link>
              </>
            )} />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            align="right"
            variant="body2"
            color="text.secondary"
            className={styles.leftText}
          >
            May 2022 &mdash; Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color='primary' sx={{ padding: '8px', backgroundColor: '#013C7B' }}>
              <ImageLink target='_blank' rel='noopener noreferrer' href='https://hooshmandenterprises.com'>
                <img width={'32px'} src='/assets/HooshmandEnterprisesLogo.webp' alt="hooshmand enterprises logo" />
              </ImageLink>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography component="h3" variant="h6">Hooshmand Enterprises</Typography>
            <Typography variant='caption' className={styles.rightDateText}>Founded May 2022</Typography>
            <SpecialDivider className={styles.rightDateText}/>
            <Position
              date={'May 2022 to Present'}
              title={'Founder'}
              description={(
                <>
                  <Typography>Projects & Partnerships:</Typography>
                  <ul>
                    <li><Link href='https://logicmosaic.app' target='_blank' rel='noopener noreferrer'>Logic Mosaic</Link> &mdash; A geometric block puzzle game with solo play, daily challenges, and multiplayer.</li>
                    <li><Link href='https://refereport.net' target='_blank' rel='noopener noreferrer'>RefReport</Link> &mdash; Digital reporting for sports officials.</li>
                    <li><Link href='https://www.dfoa.com/' target='_blank' rel='noopener noreferrer'>DFOA</Link> &mdash; Football official draft software.</li>
                    <li><Link href="https://apps.apple.com/us/app/refclock-timer/id6476637373" target='_blank' rel='noopener noreferrer'>RefClock Timer</Link> &mdash; Timer app for soccer referees.</li>
                  </ul>
                </>
              )}
            />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            className={styles.leftText}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            Aug 2019 &mdash; Feb 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: '#fafaff', padding: '8px' }}>
              <ImageLink target='_blank' rel='noopener noreferrer' href='https://capitalone.com'>
                <img width={'32px'} height={'32px'} src={'/assets/CapitalOneLogo.webp'} alt="capital one logo" />
              </ImageLink>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography component="h3" variant="h6">Capital One</Typography>
            <Typography variant='caption' className={styles.rightDateText}>Aug 2019 &mdash; Feb 2022</Typography>
            <SpecialDivider className={styles.rightDateText}/>
            <Position title={'Software Engineer'} date={'Jul 2020 to Feb 2022'} description={(
              <ul>
                <li>Front end lead working in Shared Tech.</li>
                <li>Subject matter expert on Web Components (using <Link target='_blank' rel='noopener noreferrer' href='https://lit.dev'>Lit</Link>).</li>
                <li>Building AI driven solution for compliance advisors to easily consume trending FTC/FDIC data.</li>
              </ul>
            )} />
            <Divider />
            <Position title={'Associate Software Engineer'} date={'Aug 2019 to Jul 2020'} description={(
              <ul>
                <li>Working on post-origination flow for <Link target='_blank' rel='noopener noreferrer' href='https://autorefi.capitalone.com/'>Auto Refinance</Link>.</li>
              </ul>
            )} />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            className={styles.leftText}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            Jan 2017 &mdash; Jun 2019
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: '#fafaff', padding: '9px 8px' }}>
              <span className={styles.universityMark} aria-label="Texas A&M University">A&amp;M</span>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography component="h3" variant="h6">Texas A&M University (InfoLab)</Typography>
            <Typography variant='caption' className={styles.rightDateText}>Jan 2017 &mdash; Jun 2019</Typography>
            <SpecialDivider className={styles.rightDateText}/>
            <Position title={'Research Assistant'} date={'Jan 2017 to May 2019'} description={(
              <ul>
                <li>Research Assistant for <Link target='_blank' rel='noopener noreferrer' href="https://infolab.tamu.edu/">InfoLab</Link>.</li>
                <li>Advised by <Link target='_blank' rel='noopener noreferrer' href='https://people.engr.tamu.edu/caverlee/index.html'>Dr. James Caverlee</Link>.</li>
                <li>Researched user misbehavior on social media.</li>
              </ul>
            )}/>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </section>
  )
}

export default CareerTimeline
