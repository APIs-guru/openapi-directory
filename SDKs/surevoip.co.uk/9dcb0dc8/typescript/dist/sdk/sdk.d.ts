import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.surevoip.co.uk", "https://sandbox.surevoip.co.uk"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * deleteCustomersAccountAnnouncementsAnnouncementId - Delete an announcement audio file
    **/
    deleteCustomersAccountAnnouncementsAnnouncementId(req: operations.DeleteCustomersAccountAnnouncementsAnnouncementIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomersAccountAnnouncementsAnnouncementIdResponse>;
    /**
     * get - List global resources
    **/
    get(req: operations.GetRequest, config?: AxiosRequestConfig): Promise<operations.GetResponse>;
    /**
     * getAnnouncements - List global announcements
    **/
    getAnnouncements(config?: AxiosRequestConfig): Promise<operations.GetAnnouncementsResponse>;
    /**
     * getAreacodes - List areacodes
    **/
    getAreacodes(config?: AxiosRequestConfig): Promise<operations.GetAreacodesResponse>;
    /**
     * getBilling - List global billing detail
    **/
    getBilling(config?: AxiosRequestConfig): Promise<operations.GetBillingResponse>;
    /**
     * getCalls - Validate a phone number by calling it once
    **/
    getCalls(req: operations.GetCallsRequest, config?: AxiosRequestConfig): Promise<operations.GetCallsResponse>;
    /**
     * getCharges - List charges
    **/
    getCharges(config?: AxiosRequestConfig): Promise<operations.GetChargesResponse>;
    /**
     * getContacts - List contacts
    **/
    getContacts(config?: AxiosRequestConfig): Promise<operations.GetContactsResponse>;
    /**
     * getCustomers - List all customers or find your own account
    **/
    getCustomers(config?: AxiosRequestConfig): Promise<operations.GetCustomersResponse>;
    /**
     * getCustomersAccountAnnouncements - List of announcement audio files
    **/
    getCustomersAccountAnnouncements(req: operations.GetCustomersAccountAnnouncementsRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomersAccountAnnouncementsResponse>;
    /**
     * getCustomersAccountAnnouncementsAnnouncementId - Represents an announcement audio file
    **/
    getCustomersAccountAnnouncementsAnnouncementId(req: operations.GetCustomersAccountAnnouncementsAnnouncementIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomersAccountAnnouncementsAnnouncementIdResponse>;
    /**
     * getFaxes - List global ongoing faxes
    **/
    getFaxes(config?: AxiosRequestConfig): Promise<operations.GetFaxesResponse>;
    /**
     * getHosted - List Hosted VoIP domains
    **/
    getHosted(config?: AxiosRequestConfig): Promise<operations.GetHostedResponse>;
    /**
     * getIpAddress - Return the IP address from where your API request originated
    **/
    getIpAddress(config?: AxiosRequestConfig): Promise<operations.GetIpAddressResponse>;
    /**
     * getMobile - List mobile accounts
    **/
    getMobile(config?: AxiosRequestConfig): Promise<operations.GetMobileResponse>;
    /**
     * getNumbers - List available SureVoIP Ofcom number allocations for purchase
    **/
    getNumbers(config?: AxiosRequestConfig): Promise<operations.GetNumbersResponse>;
    /**
     * getNumbersAreacodes - Search available numbers by areacode
     *
     * You can search by area name, area code or filter using both.
     *
    **/
    getNumbersAreacodes(config?: AxiosRequestConfig): Promise<operations.GetNumbersAreacodesResponse>;
    /**
     * getPartners - List SureVoIP Partner accounts
    **/
    getPartners(config?: AxiosRequestConfig): Promise<operations.GetPartnersResponse>;
    /**
     * getPorting - List ported numbers
    **/
    getPorting(config?: AxiosRequestConfig): Promise<operations.GetPortingResponse>;
    /**
     * getServiceStatus - List all Service Status messages
    **/
    getServiceStatus(config?: AxiosRequestConfig): Promise<operations.GetServiceStatusResponse>;
    /**
     * getSip - List all SIP accounts
    **/
    getSip(config?: AxiosRequestConfig): Promise<operations.GetSipResponse>;
    /**
     * getSms - List SMS
    **/
    getSms(config?: AxiosRequestConfig): Promise<operations.GetSmsResponse>;
    /**
     * getSupportIpAddress - Return the IP address from where your API request originated
    **/
    getSupportIpAddress(config?: AxiosRequestConfig): Promise<operations.GetSupportIpAddressResponse>;
    /**
     * getSupportServiceStatus - List all Service Status messages
    **/
    getSupportServiceStatus(config?: AxiosRequestConfig): Promise<operations.GetSupportServiceStatusResponse>;
    /**
     * getTopups - List all account credit topups
    **/
    getTopups(config?: AxiosRequestConfig): Promise<operations.GetTopupsResponse>;
    /**
     * postAnnouncements - Add a new announcement audio file
    **/
    postAnnouncements(req: operations.PostAnnouncementsRequest, config?: AxiosRequestConfig): Promise<operations.PostAnnouncementsResponse>;
    /**
     * postCalls - Create phone calls with or without announcements and scheduled hangups
    **/
    postCalls(req: operations.PostCallsRequest, config?: AxiosRequestConfig): Promise<operations.PostCallsResponse>;
    /**
     * postCharges - Create charges for invoices
    **/
    postCharges(config?: AxiosRequestConfig): Promise<operations.PostChargesResponse>;
    /**
     * postSupportEcho - Return your POSTed data for testing
    **/
    postSupportEcho(config?: AxiosRequestConfig): Promise<operations.PostSupportEchoResponse>;
    /**
     * getCustomer - Represents a customer
    **/
    getCustomer(req: operations.GetCustomerRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomerResponse>;
}
export {};
