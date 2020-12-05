import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/restaurant/${id}`,
  ADD_REVIEW: `${CONFIG.BASE_URL}/review`,
  IMAGE: (pictureId, size) => `${CONFIG.BASE_URL}/images/${size}/${pictureId}`,
};

export default API_ENDPOINT;
