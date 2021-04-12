import { getUsers, updateUser, removeUser, addUser } from '../services/api';
export default {
  namespace: 'users',
  state: [],
  reducers: {
    delete(state, { payload: id }) {
      let a = state.filter((item) => item.key != id);
      return a;
    },
    save(state, { payload: user }) {
      let index = state.findIndex((item) => item.key == user.key);
      if (index < 0) {
        let maxKey = Math.max.apply(
          Math,
          state.map((item) => {
            return item.key;
          }),
        );
        maxKey = maxKey + 1 + '';
        state.push({ ...user, key: maxKey, tags: [] });
      } else {
        state.splice(index, 1, user);
      }
      return state;
    },
    init(state, { payload: users }) {
      return users;
    },
  },
  effects: {
    *getUsers({}, { call, put }) {
      const res = yield call(getUsers);
      console.log(res);
      yield put({
        type: 'init',
        payload: res,
      });
    },
    *removeUser({ payload: id }, { call, put }) {
      yield call(removeUser, id);
      yield put({ type: 'getUsers' });
    },
    *saveUser({ payload: user }, { call, put, select }) {
      let users = yield select((state) => state.users);
      let index = users.findIndex((item) => item.key == user.key);
      if (index < 0) {
        let maxKey = Math.max.apply(
          Math,
          users.map((item) => {
            return item.key;
          }),
        );
        maxKey = maxKey + 1 + '';
        yield call(addUser, {
          ...user,
          key: maxKey,
          tags: [],
        });
      } else {
        yield call(updateUser, user.key, user);
      }
      yield put({ type: 'getUsers' });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/list') {
          dispatch({ type: 'getUsers' });
        }
      });
    },
  },
};
