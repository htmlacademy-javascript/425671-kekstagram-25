const FAKE_POSTS = 25;
const MAX_TRIES = 1000000;
const HASHTAG_REGEX = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const HASHTAG_MIN_SYMBOLS = 2;
const HASHTAG_MAX_SYMBOLS = 20;
const HASHTAG_MAX_NUMBER = 5;
const COMMENT_MAX_SYMBOLS = 140;

export {
  FAKE_POSTS,
  MAX_TRIES,
  HASHTAG_REGEX,
  HASHTAG_MIN_SYMBOLS,
  HASHTAG_MAX_SYMBOLS,
  HASHTAG_MAX_NUMBER,
  COMMENT_MAX_SYMBOLS,
};
