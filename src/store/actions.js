export const SERVICES_LIST_REQUESTED = 'SERVICES_LIST_REQUESTED';
export const SERVICES_LIST_SUCCEEDED = 'SERVICES_LIST_SUCCEEDED';
export const SERVICES_LIST_FAILED = 'SERVICES_LIST_FAILED';

export const SERVICE_DETAILS_REQUESTED = 'SERVICE_DETAILS_REQUESTED';
export const SERVICE_DETAILS_SUCCEEDED = 'SERVICE_DETAILS_SUCCEEDED';
export const SERVICE_DETAILS_FAILED = 'SERVICE_DETAILS_FAILED';

export const servicesListRequested = () => ({ type: SERVICES_LIST_REQUESTED });
export const servicesListSucceeded = (items) => ({
  type: SERVICES_LIST_SUCCEEDED,
  payload: { items },
});
export const servicesListFailed = (error) => ({
  type: SERVICES_LIST_FAILED,
  payload: { error },
});

export const serviceDetailsRequested = (id) => ({
  type: SERVICE_DETAILS_REQUESTED,
  payload: { id },
});
export const serviceDetailsSucceeded = (item) => ({
  type: SERVICE_DETAILS_SUCCEEDED,
  payload: { item },
});
export const serviceDetailsFailed = (error) => ({
  type: SERVICE_DETAILS_FAILED,
  payload: { error },
});