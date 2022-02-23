const DELAY: number = 100;

export const api = {
  like: async (id: string) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id) {
          const storage = localStorage.getItem('useLikeToggle');
          const likes = storage ? storage.split(',') : null;
          if (!likes) {
            localStorage.setItem('useLikeToggle', id);
          } else if (likes.includes(id)) {
            // do nothing, already liked
          } else {
            localStorage.setItem('useLikeToggle', `${likes},${id}`);
          }
          resolve(true);
        } else {
          reject();
        }
      }, DELAY);
    });
  },
  unlike: async (id: string) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id) {
          const likes = localStorage.getItem('useLikeToggle')?.split(',');
          if (likes && likes.includes(id)) {
            const newLikes = likes.filter((item) => item !== id).join(',');
            localStorage.setItem('useLikeToggle', newLikes);
          }
          resolve(true);
        } else {
          reject();
        }
      }, DELAY);
    });
  },
  getStatus: async (id: string) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id) {
          const likes = localStorage.getItem('useLikeToggle')?.split(',');
          const status = likes && likes.includes(id) ? true : false;
          resolve(status);
        } else {
          reject();
        }
      }, DELAY);
    });
  }
};
