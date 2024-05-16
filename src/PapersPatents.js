import { Typography, Link } from '@mui/material';


export const papers = [
  {
    title:
      'Techniques to determine relationships of items in web-based content - US Patent 10,922,374',
    url: 'https://patents.google.com/patent/US10922374B1/en',
    description:
      'Embodiments may generally be directed components and techniques to receive and process an indication of a web-based search performed for an item of a plurality of items and determine a co-occurrence matrix comprising rows and columns having entries associated with the plurality of items. Each of the entries of the co-occurrence matrix may indicate a number of co-occurrences of two of the plurality items. Embodiments also include techniques to determine related pairs of the plurality of items based on the number of co-occurrences for each entry and a relationship threshold value indicating two of the items are related and provide an indication of each item of the plurality of items that is related to the item searched based on the related pairs determination.',
    authors:
      <><strong>H Hooshmand</strong>, G Dagley, J Hoover, S Wylie, M Price, Q Tang</>,
    year: '2021',
  },
  {
    title:
      'Offering automobile recommendations from generic features learned from natural language inputs - US Patent 10,867,338',
    url: 'https://patents.google.com/patent/US10867338B2/en',
    description:
      'Various embodiments are generally directed to techniques to provide specific vehicle recommendations to generic user requests. A method for providing the specific vehicle recommendation includes: receiving a generic automobile request from a user, applying a machine learning model (MLM) trained by a corpus of reviews to the received request, and generating, by the MLM, a recommendation for at least one specific automobile feature based on the generic automobile request.',
    authors:
      <>M Price, S Wylie, <strong>H Hooshmand</strong>, J Hoover, G Dagley, Q Tang</>,
    year: '2020',
  },
  {
    title: 'Behavioral data analytics platform - US Patent App. 16/387,181',
    url: 'https://patents.google.com/patent/US20200334694A1/en',
    description:
      'A behavioral analytics platform may obtain a first data model that has been trained based on behavior data derived from historical sales data associated with a vendor and receive, from a user device, one or more interactions that request information related to one or more financing terms. The behavioral analytics platform may determine one or more financing preferences for a user of the user device based on a second data model that has been trained based on behavior data derived from the one or more interactions. The behavioral analytics platform may determine, based on the first data model and the second data model, a probability that the user of the user device and the vendor will be able to reach an agreement for an item available to purchase from the vendor and provide intelligence data related to the probability for display.',
    authors:
      <>G Dagley, <strong>H Hooshmand</strong>, J Hoover, S Wylie, M Price, Q Tang</>,
    year: '2020',
  },

  {
    title:
      'System and method for maintaining user session continuity across multiple devices and/or multiple platforms - US Patent 10,673,958',
    url: 'https://patents.google.com/patent/US10673958B1/en',
    description:
      'A session continuity platform may detect a user action during a first user session associated with a first user device, wherein the first user session is associated with a first platform. The session continuity platform may determine identification information of a user associated with the user session. The session continuity platform may determine a continuity record identifier associated with the identification information. The session continuity platform may obtain, based on the continuity record identifier, activity data from a plurality of continuity records of a distributed ledger. The session continuity platform may determine, based on the activity data, activity information associated with the user action and the second user session. The session continuity platform may cause the first user device to present the activity information via a display of the user device.',
    authors:
      <>Stephen Wylie, Qiaochu Tang, Micah Price, Jason Hoover, Geoffrey Dagley, <strong>Habeeb Hooshmand</strong></>,
    year: '2020',
  },
  {
    title: 'An exploration of H-1B visa applications in the United States',
    url: 'https://arxiv.org/abs/1806.03368',
    description:
      'The H-1B visa program is a very important tool for US-based businesses and educational institutes to recruit foreign talent. While the ultimate decision to certify an application lies with the United States Department of Labor, there are signals that can be used to determine whether an application is likely to be certified or denied. In this paper we first perform a data-driven exploratory analysis. We then leverage the features to train several classifiers and compare their performance. Finally, we discuss the implications of this work and future work that can be done in this area.',
    authors:
      <><strong>Habeeb Hooshmand</strong>, Joseph Martinsen, Jonathan Arauco, Alishah Dholasaniya, Bhavik Bhatt</>,
    year: '2018',
  },
];

const PapersPatents = () => {
  return (
    <>
      {papers.map((paper) => (
        <section style={{ marginBottom: '16px' }}>
          <Typography variant='h6'>
            <Link href={paper.url} target="_blank" rel="noopener noreferrer">{paper.title}</Link>
          </Typography>
          <Typography variant='body1'>{paper.year} &mdash; {paper.authors}</Typography>
          <Typography variant="body2">{paper.description}</Typography>
        </section>
      ))}
      <Typography variant='subtitle1'>
          Check out my all my patents and papers on <Link href="https://scholar.google.com/citations?user=iP66x48AAAAJ" target="_blank" rel="noopener noreferrer">Google Scholar</Link>.
        </Typography>
    </>
  )
}

export default PapersPatents