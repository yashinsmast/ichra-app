const axios = require('axios');
const IDEON_API_KEY = 'YOUR_IDEON_API_KEY';

const createGroupAndQuote = async (censusData) => {
  const headers = { Authorization: `Bearer ${IDEON_API_KEY}` };

  const groupResponse = await axios.post('https://platform.ideonapi.com/v1/groups', {
    group_name: 'My Test Group',
    effective_date: '2025-01-01',
  }, { headers });

  const groupId = groupResponse.data.group_id;

  for (const member of censusData) {
    await axios.post(`https://platform.ideonapi.com/v1/groups/${groupId}/members`, {
      first_name: member.FirstName,
      last_name: member.LastName,
      zip_code: member.ZipCode,
      date_of_birth: member.DOB,
      gender: member.Gender,
    }, { headers });
  }

  const quoteResponse = await axios.post(`https://platform.ideonapi.com/v1/groups/${groupId}/quotes`, {}, { headers });

  return quoteResponse.data;
};

module.exports = { createGroupAndQuote };