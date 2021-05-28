import { PostingLong, PostingShort } from 'postings';
import { AxiosResponse } from 'axios';
import { Server } from 'server';

const getPostings = (server: Server) => (joinTeamName: boolean = false): Promise<AxiosResponse<PostingShort[]>> => server.get('/api/postings');
const getPostingById = (server: Server) => (id: number, joinTeamName: boolean = false): Promise<AxiosResponse<PostingLong>> => server.get(`/api/postings/${id}`).then((res: AxiosResponse<PostingLong>) => {
  console.log(res);
  return res;
});

export default (server: Server) => ({
  getPostingById: getPostingById(server),
  getPostings: getPostings(server),
});
