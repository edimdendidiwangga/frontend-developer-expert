import CONFIG from '../globals/config';

const CacheHelper = {
  async cachingAppShell(requests) {
    const cache = await this._openCache();
    cache.addAll(requests);
  },

  async deleteOldCache() {
    const cacheNames = await caches.keys();
    cacheNames
      .filter((name) => name !== CONFIG.CACHE_NAME)
      .map((filteredName) => caches.delete(filteredName));
  },

  async revalidateCache(request) {
    const response = await caches.match(request);

    if (response) {
      return response;
    }
    return this._fetchRequest(request);
  },

  async _openCache() {
    return caches.open(CONFIG.CACHE_NAME);
  },

  async _fetchRequest(request) {
    const response = await fetch(request);

    const responseCache = await this._addCache(request, response);
    if (responseCache) {
      return responseCache;
    }
    return response;
  },

  async _addCache(request, response) {
    const cache = await this._openCache();
    cache.put(request, response.clone());
    return response;
  },
};

export default CacheHelper;
