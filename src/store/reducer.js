import {
  SERVICES_LIST_REQUESTED,
  SERVICES_LIST_SUCCEEDED,
  SERVICES_LIST_FAILED,
  SERVICE_DETAILS_REQUESTED,
  SERVICE_DETAILS_SUCCEEDED,
  SERVICE_DETAILS_FAILED,
} from './actions';

const initialState = {
  list: {
    items: [],
    loading: false,
    error: null,
  },
  details: {
    item: null,
    loading: false,
    error: null,
  },
};

export default function servicesReducer(state = initialState, action) {
  switch (action.type) {
    case SERVICES_LIST_REQUESTED:
      return {
        ...state,
        list: { ...state.list, loading: true, error: null },
      };
    case SERVICES_LIST_SUCCEEDED:
      return {
        ...state,
        list: { items: action.payload.items, loading: false, error: null },
      };
    case SERVICES_LIST_FAILED:
      return {
        ...state,
        list: { ...state.list, loading: false, error: action.payload.error },
      };

    case SERVICE_DETAILS_REQUESTED:
      return {
        ...state,
        details: { item: null, loading: true, error: null },
      };
    case SERVICE_DETAILS_SUCCEEDED:
      return {
        ...state,
        details: { item: action.payload.item, loading: false, error: null },
      };
    case SERVICE_DETAILS_FAILED:
      return {
        ...state,
        details: { ...state.details, loading: false, error: action.payload.error },
      };

    default:
      return state;
  }
}