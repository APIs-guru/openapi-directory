import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://events.twilio.com",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
  };
}


export class SDK {
  defaultClient?: AxiosInstance;
  securityClient?: AxiosInstance;
  security?: any;
  serverURL: string;

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this.serverURL == "") {
      this.serverURL = Servers[0];
    }

    if (!this.defaultClient) {
      this.defaultClient = axios.create({ baseURL: this.serverURL });
    }

    if (!this.securityClient) {
      if (this.security) {
        this.securityClient = CreateSecurityClient(
          this.defaultClient,
          this.security
        );
      } else {
        this.securityClient = this.defaultClient;
      }
    }
  }
  
  // CreateSink - Create a new Sink
  CreateSink(
    req: operations.CreateSinkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSinkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSinkRequest(req);
    }
    
    let baseURL: string = operations.CREATESINK_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Sinks";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateSinkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.eventsV1Sink = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateSinkTest - Create a new Sink Test Event for the given Sink.
  CreateSinkTest(
    req: operations.CreateSinkTestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSinkTestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSinkTestRequest(req);
    }
    
    let baseURL: string = operations.CREATESINKTEST_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Sinks/{Sid}/Test", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateSinkTestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.eventsV1SinkSinkTest = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateSinkValidate - Validate that a test event for a Sink was received.
  CreateSinkValidate(
    req: operations.CreateSinkValidateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSinkValidateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSinkValidateRequest(req);
    }
    
    let baseURL: string = operations.CREATESINKVALIDATE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Sinks/{Sid}/Validate", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateSinkValidateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.eventsV1SinkSinkValidate = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateSubscribedEvent - Create a new Subscribed Event type for the subscription
  CreateSubscribedEvent(
    req: operations.CreateSubscribedEventRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSubscribedEventResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSubscribedEventRequest(req);
    }
    
    let baseURL: string = operations.CREATESUBSCRIBEDEVENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Subscriptions/{SubscriptionSid}/SubscribedEvents", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateSubscribedEventResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.eventsV1SubscriptionSubscribedEvent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateSubscription - Create a new Subscription.
  CreateSubscription(
    req: operations.CreateSubscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSubscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSubscriptionRequest(req);
    }
    
    let baseURL: string = operations.CREATESUBSCRIPTION_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Subscriptions";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateSubscriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.eventsV1Subscription = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteSink - Delete a specific Sink.
  DeleteSink(
    req: operations.DeleteSinkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSinkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSinkRequest(req);
    }
    
    let baseURL: string = operations.DELETESINK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Sinks/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSinkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteSubscribedEvent - Remove an event type from a subscription.
  DeleteSubscribedEvent(
    req: operations.DeleteSubscribedEventRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSubscribedEventResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSubscribedEventRequest(req);
    }
    
    let baseURL: string = operations.DELETESUBSCRIBEDEVENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Subscriptions/{SubscriptionSid}/SubscribedEvents/{Type}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSubscribedEventResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteSubscription - Delete a specific Subscription.
  DeleteSubscription(
    req: operations.DeleteSubscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSubscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSubscriptionRequest(req);
    }
    
    let baseURL: string = operations.DELETESUBSCRIPTION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Subscriptions/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSubscriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchEventType - Fetch a specific Event Type.
  FetchEventType(
    req: operations.FetchEventTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchEventTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchEventTypeRequest(req);
    }
    
    let baseURL: string = operations.FETCHEVENTTYPE_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Types/{Type}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchEventTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.eventsV1EventType = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchSchema - Fetch a specific schema with its nested versions.
  FetchSchema(
    req: operations.FetchSchemaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSchemaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSchemaRequest(req);
    }
    
    let baseURL: string = operations.FETCHSCHEMA_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Schemas/{Id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchSchemaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.eventsV1Schema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchSchemaVersion - Fetch a specific schema and version.
  FetchSchemaVersion(
    req: operations.FetchSchemaVersionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSchemaVersionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSchemaVersionRequest(req);
    }
    
    let baseURL: string = operations.FETCHSCHEMAVERSION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Schemas/{Id}/Versions/{SchemaVersion}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchSchemaVersionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.eventsV1SchemaSchemaVersion = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchSink - Fetch a specific Sink.
  FetchSink(
    req: operations.FetchSinkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSinkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSinkRequest(req);
    }
    
    let baseURL: string = operations.FETCHSINK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Sinks/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchSinkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.eventsV1Sink = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchSubscribedEvent - Read an Event for a Subscription.
  FetchSubscribedEvent(
    req: operations.FetchSubscribedEventRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSubscribedEventResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSubscribedEventRequest(req);
    }
    
    let baseURL: string = operations.FETCHSUBSCRIBEDEVENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Subscriptions/{SubscriptionSid}/SubscribedEvents/{Type}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchSubscribedEventResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.eventsV1SubscriptionSubscribedEvent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FetchSubscription - Fetch a specific Subscription.
  FetchSubscription(
    req: operations.FetchSubscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSubscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSubscriptionRequest(req);
    }
    
    let baseURL: string = operations.FETCHSUBSCRIPTION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Subscriptions/{Sid}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FetchSubscriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.eventsV1Subscription = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListEventType - Retrieve a paginated list of all the available Event Types.
  ListEventType(
    req: operations.ListEventTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListEventTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListEventTypeRequest(req);
    }
    
    let baseURL: string = operations.LISTEVENTTYPE_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Types";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListEventTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listEventTypeResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListSchemaVersion - Retrieve a paginated list of versions of the schema.
  ListSchemaVersion(
    req: operations.ListSchemaVersionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSchemaVersionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSchemaVersionRequest(req);
    }
    
    let baseURL: string = operations.LISTSCHEMAVERSION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Schemas/{Id}/Versions", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListSchemaVersionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listSchemaVersionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListSink - Retrieve a paginated list of Sinks belonging to the account used to make the request.
  ListSink(
    req: operations.ListSinkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSinkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSinkRequest(req);
    }
    
    let baseURL: string = operations.LISTSINK_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Sinks";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListSinkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listSinkResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListSubscribedEvent - Retrieve a list of all Subscribed Event types for a Subscription.
  ListSubscribedEvent(
    req: operations.ListSubscribedEventRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSubscribedEventResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSubscribedEventRequest(req);
    }
    
    let baseURL: string = operations.LISTSUBSCRIBEDEVENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Subscriptions/{SubscriptionSid}/SubscribedEvents", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListSubscribedEventResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listSubscribedEventResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListSubscription - Retrieve a paginated list of Subscriptions belonging to the account used to make the request.
  ListSubscription(
    req: operations.ListSubscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSubscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSubscriptionRequest(req);
    }
    
    let baseURL: string = operations.LISTSUBSCRIPTION_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Subscriptions";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListSubscriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listSubscriptionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateSink - Update a specific Sink
  UpdateSink(
    req: operations.UpdateSinkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSinkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSinkRequest(req);
    }
    
    let baseURL: string = operations.UPDATESINK_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Sinks/{Sid}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateSinkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.eventsV1Sink = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateSubscribedEvent - Update an Event for a Subscription.
  UpdateSubscribedEvent(
    req: operations.UpdateSubscribedEventRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSubscribedEventResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSubscribedEventRequest(req);
    }
    
    let baseURL: string = operations.UPDATESUBSCRIBEDEVENT_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Subscriptions/{SubscriptionSid}/SubscribedEvents/{Type}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateSubscribedEventResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.eventsV1SubscriptionSubscribedEvent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateSubscription - Update a Subscription.
  UpdateSubscription(
    req: operations.UpdateSubscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSubscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSubscriptionRequest(req);
    }
    
    let baseURL: string = operations.UPDATESUBSCRIPTION_SERVERS[0];
    const url: string = utils.GenerateURL(baseURL, "/v1/Subscriptions/{Sid}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateSubscriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.eventsV1Subscription = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
