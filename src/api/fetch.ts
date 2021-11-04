enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

enum ResponseType {
  JSON = 'JSON',
  TEXT = 'TEXT',
}

const service = async (
  method: Method,
  {
    url = '',
    type = ResponseType.JSON,
    body = undefined,
    parameters = undefined,
  },
): Promise<any> => {
  const headers = {
    'Content-type': 'application/json; charset=UTF-8',
  };
  const config = { method, headers, body: '' };
  let finalUrl = url;

  if (parameters) {
    const urlParameters = new URLSearchParams(parameters).toString();
    finalUrl = `${finalUrl}?${urlParameters}`;
  }

  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(finalUrl, config);

  if (type === ResponseType.JSON) {
    return await response?.json();
  }

  return await response?.text();
};

const putMethod = (params: any) => service(Method.PUT, params);
const postMethod = (params: any) => service(Method.POST, params);
const getMethod = (params: any) => service(Method.GET, params);
const deleteMethod = (params: any) => service(Method.DELETE, params);

export default {
  put: putMethod,
  post: postMethod,
  get: getMethod,
  delete: deleteMethod,
};
