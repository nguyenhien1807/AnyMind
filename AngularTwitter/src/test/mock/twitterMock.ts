import {Twitter} from '../../app/model/twitter';
import {Account} from '../../app/model/account';

export const longTweet = new Twitter(
  new Account(
    'HoloViews',
    '/HoloViews',
    862790019806842880),
  new Date('15 May 2018'),
  [
    '#Python',
    '#DataViz',
    '#ThirdHashTags'
  ],
  254,
  1,
  117,
  'Very pleased to announce the 1.10 release of HoloViews! Includes JupyterLab support, ' +
  'new plot types including Sankey diagrams, Hex Binning, Violins, Chord plots, TriMesh and drawing tools');

export const shortTweet = new Twitter(
  new Account('HoloViews', '/HoloViews', 862790019806842880),
  new Date('15 May 2018'),
  [
    '#Python',
    '#DataViz'
  ],
  0,
  0,
  0,
  'Very pleased to announce the 1.10 release');
