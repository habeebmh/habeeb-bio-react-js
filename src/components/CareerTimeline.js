import { Typography, Link, styled, Divider } from '@mui/material'; 
import { TimelineOppositeContent, TimelineDot, Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent } from '@mui/lab';

import HooshmandEnterprisesLogo from '../assets/HooshmandEnterprisesLogo.png'
import styles from './CareerTimeline.module.css'

const Description = styled('div')(({ theme }) => ({
  ...theme.typography.body1,
}));

const ImageLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  height: '32px',
  width: '32px'
}));

const SpecialDivider = styled(Divider)(() => ({
  marginTop: '8px'
}))

const Position = ({ date, title, description }) => (
  <div className={styles.positionContainer}>
    <Typography variant='overline'>{title}</Typography> &mdash; <Typography variant='overline'>{date}</Typography>
    <Description>{description}</Description>
  </div>
)

const CareerTimeline = () => {
  return (
    <section className={styles.container}>
      <Timeline position="right">
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
                <img width={'32px'} src={HooshmandEnterprisesLogo} alt="hooshmand enterprises logo" />
              </ImageLink>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6">Hooshmand Enterprises</Typography>
            <Typography variant='caption' className={styles.rightDateText}>Founded May 2022</Typography>
            <SpecialDivider className={styles.rightDateText}/>
            <Position 
              date={'May 2022 to Present'} 
              title={'Founder'} 
              description={(
                <ul>
                  <li>Independent venture founded in 2022.</li>
                  <li>Owner of <Link target='_blank' rel='noopener noreferrer' href="https://refreport.net">Ref Report</Link> for digital reporting.</li>
                  <li>Creator of <Link target='_blank' rel='noopener noreferrer' href="https://apps.apple.com/us/app/refclock-timer/id6476637373">RefClock Timer</Link> for soccer referees.</li>
                </ul>
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
            Feb 2022 &mdash; Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: '#00adee', padding: '8px' }}>
              <ImageLink target='_blank' rel='noopener noreferrer' href='https://self.inc'>
                <img width={'32px'} src={'https://www.self.inc/static/Self_Logo_Header.svg'} alt="self inc logo" />
              </ImageLink>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6">Self</Typography>
            <Typography variant='caption' className={styles.rightDateText}>Feb 2022 &mdash; Present</Typography>
            <SpecialDivider className={styles.rightDateText}/>
            <Position title={'Staff Software Engineer'} date={'Mar 2024 to Present'} description={(
              <ul>
                <li>Lead Engineer of the Marketplace team leading a full stack team of developers on first and third party cross-sell.</li>
                <li>Ownership of the Offers, Eligibility and Promotions (OEP) platform used in the App and Website.</li>
                <li>Ownership over the "For you" tab where customers can browse curated first and third party product offers.</li>
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
                <img width={'32px'} height={'32px'} src={'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e4/c1/c8/e4c1c8da-da07-f5e6-f30f-a2c80b13eedc/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/256x256bb.jpg'} alt="capital one logo" />
              </ImageLink>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6">Capital One</Typography>
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
              <img width={'32px'} height={'26px'} style={{ marginTop: '3px' }} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Texas_A%26M_University_logo.svg/494px-Texas_A%26M_University_logo.svg.png'} alt="capital one logo" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6">Texas A&M University (InfoLab)</Typography>
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