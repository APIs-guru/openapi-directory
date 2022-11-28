import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://proxy.twilio.com"];
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
     * createMessageInteraction - Create a new message Interaction to send directly from your system to one [Participant](https://www.twilio.com/docs/proxy/api/participant).  The `inbound` properties for the Interaction will always be empty.
    **/
    createMessageInteraction(req: operations.CreateMessageInteractionRequest, config?: AxiosRequestConfig): Promise<operations.CreateMessageInteractionResponse>;
    /**
     * createParticipant - Add a new Participant to the Session
    **/
    createParticipant(req: operations.CreateParticipantRequest, config?: AxiosRequestConfig): Promise<operations.CreateParticipantResponse>;
    /**
     * createPhoneNumber - Add a Phone Number to a Service's Proxy Number Pool.
    **/
    createPhoneNumber(req: operations.CreatePhoneNumberRequest, config?: AxiosRequestConfig): Promise<operations.CreatePhoneNumberResponse>;
    /**
     * createService - Create a new Service for Twilio Proxy
    **/
    createService(req: operations.CreateServiceRequest, config?: AxiosRequestConfig): Promise<operations.CreateServiceResponse>;
    /**
     * createSession - Create a new Session
    **/
    createSession(req: operations.CreateSessionRequest, config?: AxiosRequestConfig): Promise<operations.CreateSessionResponse>;
    /**
     * createShortCode - Add a Short Code to the Proxy Number Pool for the Service.
    **/
    createShortCode(req: operations.CreateShortCodeRequest, config?: AxiosRequestConfig): Promise<operations.CreateShortCodeResponse>;
    /**
     * deleteInteraction - Delete a specific Interaction.
    **/
    deleteInteraction(req: operations.DeleteInteractionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInteractionResponse>;
    /**
     * deleteParticipant - Delete a specific Participant. This is a soft-delete. The participant remains associated with the session and cannot be re-added. Participants are only permanently deleted when the [Session](https://www.twilio.com/docs/proxy/api/session) is deleted.
    **/
    deleteParticipant(req: operations.DeleteParticipantRequest, config?: AxiosRequestConfig): Promise<operations.DeleteParticipantResponse>;
    /**
     * deletePhoneNumber - Delete a specific Phone Number from a Service.
    **/
    deletePhoneNumber(req: operations.DeletePhoneNumberRequest, config?: AxiosRequestConfig): Promise<operations.DeletePhoneNumberResponse>;
    /**
     * deleteService - Delete a specific Service.
    **/
    deleteService(req: operations.DeleteServiceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteServiceResponse>;
    /**
     * deleteSession - Delete a specific Session.
    **/
    deleteSession(req: operations.DeleteSessionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSessionResponse>;
    /**
     * deleteShortCode - Delete a specific Short Code from a Service.
    **/
    deleteShortCode(req: operations.DeleteShortCodeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteShortCodeResponse>;
    /**
     * fetchInteraction - Retrieve a list of Interactions for a given [Session](https://www.twilio.com/docs/proxy/api/session).
    **/
    fetchInteraction(req: operations.FetchInteractionRequest, config?: AxiosRequestConfig): Promise<operations.FetchInteractionResponse>;
    fetchMessageInteraction(req: operations.FetchMessageInteractionRequest, config?: AxiosRequestConfig): Promise<operations.FetchMessageInteractionResponse>;
    /**
     * fetchParticipant - Fetch a specific Participant.
    **/
    fetchParticipant(req: operations.FetchParticipantRequest, config?: AxiosRequestConfig): Promise<operations.FetchParticipantResponse>;
    /**
     * fetchPhoneNumber - Fetch a specific Phone Number.
    **/
    fetchPhoneNumber(req: operations.FetchPhoneNumberRequest, config?: AxiosRequestConfig): Promise<operations.FetchPhoneNumberResponse>;
    /**
     * fetchService - Fetch a specific Service.
    **/
    fetchService(req: operations.FetchServiceRequest, config?: AxiosRequestConfig): Promise<operations.FetchServiceResponse>;
    /**
     * fetchSession - Fetch a specific Session.
    **/
    fetchSession(req: operations.FetchSessionRequest, config?: AxiosRequestConfig): Promise<operations.FetchSessionResponse>;
    /**
     * fetchShortCode - Fetch a specific Short Code.
    **/
    fetchShortCode(req: operations.FetchShortCodeRequest, config?: AxiosRequestConfig): Promise<operations.FetchShortCodeResponse>;
    /**
     * listInteraction - Retrieve a list of all Interactions for a Session. A maximum of 100 records will be returned per page.
    **/
    listInteraction(req: operations.ListInteractionRequest, config?: AxiosRequestConfig): Promise<operations.ListInteractionResponse>;
    listMessageInteraction(req: operations.ListMessageInteractionRequest, config?: AxiosRequestConfig): Promise<operations.ListMessageInteractionResponse>;
    /**
     * listParticipant - Retrieve a list of all Participants in a Session.
    **/
    listParticipant(req: operations.ListParticipantRequest, config?: AxiosRequestConfig): Promise<operations.ListParticipantResponse>;
    /**
     * listPhoneNumber - Retrieve a list of all Phone Numbers in the Proxy Number Pool for a Service. A maximum of 100 records will be returned per page.
    **/
    listPhoneNumber(req: operations.ListPhoneNumberRequest, config?: AxiosRequestConfig): Promise<operations.ListPhoneNumberResponse>;
    /**
     * listService - Retrieve a list of all Services for Twilio Proxy. A maximum of 100 records will be returned per page.
    **/
    listService(req: operations.ListServiceRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceResponse>;
    /**
     * listSession - Retrieve a list of all Sessions for the Service. A maximum of 100 records will be returned per page.
    **/
    listSession(req: operations.ListSessionRequest, config?: AxiosRequestConfig): Promise<operations.ListSessionResponse>;
    /**
     * listShortCode - Retrieve a list of all Short Codes in the Proxy Number Pool for the Service. A maximum of 100 records will be returned per page.
    **/
    listShortCode(req: operations.ListShortCodeRequest, config?: AxiosRequestConfig): Promise<operations.ListShortCodeResponse>;
    /**
     * updatePhoneNumber - Update a specific Proxy Number.
    **/
    updatePhoneNumber(req: operations.UpdatePhoneNumberRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePhoneNumberResponse>;
    /**
     * updateService - Update a specific Service.
    **/
    updateService(req: operations.UpdateServiceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServiceResponse>;
    /**
     * updateSession - Update a specific Session.
    **/
    updateSession(req: operations.UpdateSessionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSessionResponse>;
    /**
     * updateShortCode - Update a specific Short Code.
    **/
    updateShortCode(req: operations.UpdateShortCodeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateShortCodeResponse>;
}
export {};
