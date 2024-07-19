import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------
const koreaTimeSlots = ['06:00', '06:30', '07:00', '07:30', '08:00'];

export const users = [...Array(24)].map((_, index) => ({
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.person.fullName(),
  company: faker.string.uuid(),

  status: sample(koreaTimeSlots),
  role: sample(['픽업', '픽업', '배달', '배달', '배달', '배달', '배달', '배달', '배달', '배달']),
}));
