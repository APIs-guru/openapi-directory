import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://events.twilio.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * createSink - Create a new Sink
    **/
    createSink(req: operations.CreateSinkRequest, config?: AxiosRequestConfig): Promise<operations.CreateSinkResponse>;
    /**
     * createSinkTest - Create a new Sink Test Event for the given Sink.
    **/
    createSinkTest(req: operations.CreateSinkTestRequest, config?: AxiosRequestConfig): Promise<operations.CreateSinkTestResponse>;
    /**
     * createSinkValidate - Validate that a test event for a Sink was received.
    **/
    createSinkValidate(req: operations.CreateSinkValidateRequest, config?: AxiosRequestConfig): Promise<operations.CreateSinkValidateResponse>;
    /**
     * createSubscribedEvent - Create a new Subscribed Event type for the subscription
    **/
    createSubscribedEvent(req: operations.CreateSubscribedEventRequest, config?: AxiosRequestConfig): Promise<operations.CreateSubscribedEventResponse>;
    /**
     * createSubscription - Create a new Subscription.
    **/
    createSubscription(req: operations.CreateSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.CreateSubscriptionResponse>;
    /**
     * deleteSink - Delete a specific Sink.
    **/
    deleteSink(req: operations.DeleteSinkRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSinkResponse>;
    /**
     * deleteSubscribedEvent - Remove an event type from a subscription.
    **/
    deleteSubscribedEvent(req: operations.DeleteSubscribedEventRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubscribedEventResponse>;
    /**
     * deleteSubscription - Delete a specific Subscription.
    **/
    deleteSubscription(req: operations.DeleteSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubscriptionResponse>;
    /**
     * fetchEventType - Fetch a specific Event Type.
    **/
    fetchEventType(req: operations.FetchEventTypeRequest, config?: AxiosRequestConfig): Promise<operations.FetchEventTypeResponse>;
    /**
     * fetchSchema - Fetch a specific schema with its nested versions.
    **/
    fetchSchema(req: operations.FetchSchemaRequest, config?: AxiosRequestConfig): Promise<operations.FetchSchemaResponse>;
    /**
     * fetchSchemaVersion - Fetch a specific schema and version.
    **/
    fetchSchemaVersion(req: operations.FetchSchemaVersionRequest, config?: AxiosRequestConfig): Promise<operations.FetchSchemaVersionResponse>;
    /**
     * fetchSink - Fetch a specific Sink.
    **/
    fetchSink(req: operations.FetchSinkRequest, config?: AxiosRequestConfig): Promise<operations.FetchSinkResponse>;
    /**
     * fetchSubscribedEvent - Read an Event for a Subscription.
    **/
    fetchSubscribedEvent(req: operations.FetchSubscribedEventRequest, config?: AxiosRequestConfig): Promise<operations.FetchSubscribedEventResponse>;
    /**
     * fetchSubscription - Fetch a specific Subscription.
    **/
    fetchSubscription(req: operations.FetchSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.FetchSubscriptionResponse>;
    /**
     * listEventType - Retrieve a paginated list of all the available Event Types.
    **/
    listEventType(req: operations.ListEventTypeRequest, config?: AxiosRequestConfig): Promise<operations.ListEventTypeResponse>;
    /**
     * listSchemaVersion - Retrieve a paginated list of versions of the schema.
    **/
    listSchemaVersion(req: operations.ListSchemaVersionRequest, config?: AxiosRequestConfig): Promise<operations.ListSchemaVersionResponse>;
    /**
     * listSink - Retrieve a paginated list of Sinks belonging to the account used to make the request.
    **/
    listSink(req: operations.ListSinkRequest, config?: AxiosRequestConfig): Promise<operations.ListSinkResponse>;
    /**
     * listSubscribedEvent - Retrieve a list of all Subscribed Event types for a Subscription.
    **/
    listSubscribedEvent(req: operations.ListSubscribedEventRequest, config?: AxiosRequestConfig): Promise<operations.ListSubscribedEventResponse>;
    /**
     * listSubscription - Retrieve a paginated list of Subscriptions belonging to the account used to make the request.
    **/
    listSubscription(req: operations.ListSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.ListSubscriptionResponse>;
    /**
     * updateSink - Update a specific Sink
    **/
    updateSink(req: operations.UpdateSinkRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSinkResponse>;
    /**
     * updateSubscribedEvent - Update an Event for a Subscription.
    **/
    updateSubscribedEvent(req: operations.UpdateSubscribedEventRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSubscribedEventResponse>;
    /**
     * updateSubscription - Update a Subscription.
    **/
    updateSubscription(req: operations.UpdateSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSubscriptionResponse>;
}
export {};
