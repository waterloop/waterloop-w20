import postings from './postings';
import server from './server';
import sponsors from './sponsors';
import teams from './teams';
import blogs from './blogs';

export default {
  postings: postings(server),
  teams: teams(server),
  sponsors: sponsors(server),
  blogs:  blogs(server)
};
