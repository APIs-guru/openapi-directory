import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://supersim.twilio.com"];
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
     * createEsimProfile - Order an eSIM Profile.
    **/
    createEsimProfile(req: operations.CreateEsimProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateEsimProfileResponse>;
    /**
     * createFleet - Create a Fleet
    **/
    createFleet(req: operations.CreateFleetRequest, config?: AxiosRequestConfig): Promise<operations.CreateFleetResponse>;
    /**
     * createIpCommand - Send an IP Command to a Super SIM.
    **/
    createIpCommand(req: operations.CreateIpCommandRequest, config?: AxiosRequestConfig): Promise<operations.CreateIpCommandResponse>;
    /**
     * createNetworkAccessProfile - Create a new Network Access Profile
    **/
    createNetworkAccessProfile(req: operations.CreateNetworkAccessProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkAccessProfileResponse>;
    /**
     * createNetworkAccessProfileNetwork - Add a Network resource to the Network Access Profile resource.
    **/
    createNetworkAccessProfileNetwork(req: operations.CreateNetworkAccessProfileNetworkRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkAccessProfileNetworkResponse>;
    /**
     * createSim - Register a Super SIM to your Account
    **/
    createSim(req: operations.CreateSimRequest, config?: AxiosRequestConfig): Promise<operations.CreateSimResponse>;
    /**
     * createSmsCommand - Send SMS Command to a Sim.
    **/
    createSmsCommand(req: operations.CreateSmsCommandRequest, config?: AxiosRequestConfig): Promise<operations.CreateSmsCommandResponse>;
    /**
     * deleteNetworkAccessProfileNetwork - Remove a Network resource from the Network Access Profile resource's.
    **/
    deleteNetworkAccessProfileNetwork(req: operations.DeleteNetworkAccessProfileNetworkRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkAccessProfileNetworkResponse>;
    /**
     * fetchEsimProfile - Fetch an eSIM Profile.
    **/
    fetchEsimProfile(req: operations.FetchEsimProfileRequest, config?: AxiosRequestConfig): Promise<operations.FetchEsimProfileResponse>;
    /**
     * fetchFleet - Fetch a Fleet instance from your account.
    **/
    fetchFleet(req: operations.FetchFleetRequest, config?: AxiosRequestConfig): Promise<operations.FetchFleetResponse>;
    /**
     * fetchIpCommand - Fetch IP Command instance from your account.
    **/
    fetchIpCommand(req: operations.FetchIpCommandRequest, config?: AxiosRequestConfig): Promise<operations.FetchIpCommandResponse>;
    /**
     * fetchNetwork - Fetch a Network resource.
    **/
    fetchNetwork(req: operations.FetchNetworkRequest, config?: AxiosRequestConfig): Promise<operations.FetchNetworkResponse>;
    /**
     * fetchNetworkAccessProfile - Fetch a Network Access Profile instance from your account.
    **/
    fetchNetworkAccessProfile(req: operations.FetchNetworkAccessProfileRequest, config?: AxiosRequestConfig): Promise<operations.FetchNetworkAccessProfileResponse>;
    /**
     * fetchNetworkAccessProfileNetwork - Fetch a Network Access Profile resource's Network resource.
    **/
    fetchNetworkAccessProfileNetwork(req: operations.FetchNetworkAccessProfileNetworkRequest, config?: AxiosRequestConfig): Promise<operations.FetchNetworkAccessProfileNetworkResponse>;
    /**
     * fetchSim - Fetch a Super SIM instance from your account.
    **/
    fetchSim(req: operations.FetchSimRequest, config?: AxiosRequestConfig): Promise<operations.FetchSimResponse>;
    /**
     * fetchSmsCommand - Fetch SMS Command instance from your account.
    **/
    fetchSmsCommand(req: operations.FetchSmsCommandRequest, config?: AxiosRequestConfig): Promise<operations.FetchSmsCommandResponse>;
    /**
     * listBillingPeriod - Retrieve a list of Billing Periods for a Super SIM.
    **/
    listBillingPeriod(req: operations.ListBillingPeriodRequest, config?: AxiosRequestConfig): Promise<operations.ListBillingPeriodResponse>;
    /**
     * listEsimProfile - Retrieve a list of eSIM Profiles.
    **/
    listEsimProfile(req: operations.ListEsimProfileRequest, config?: AxiosRequestConfig): Promise<operations.ListEsimProfileResponse>;
    /**
     * listFleet - Retrieve a list of Fleets from your account.
    **/
    listFleet(req: operations.ListFleetRequest, config?: AxiosRequestConfig): Promise<operations.ListFleetResponse>;
    /**
     * listIpCommand - Retrieve a list of IP Commands from your account.
    **/
    listIpCommand(req: operations.ListIpCommandRequest, config?: AxiosRequestConfig): Promise<operations.ListIpCommandResponse>;
    /**
     * listNetwork - Retrieve a list of Network resources.
    **/
    listNetwork(req: operations.ListNetworkRequest, config?: AxiosRequestConfig): Promise<operations.ListNetworkResponse>;
    /**
     * listNetworkAccessProfile - Retrieve a list of Network Access Profiles from your account.
    **/
    listNetworkAccessProfile(req: operations.ListNetworkAccessProfileRequest, config?: AxiosRequestConfig): Promise<operations.ListNetworkAccessProfileResponse>;
    /**
     * listNetworkAccessProfileNetwork - Retrieve a list of Network Access Profile resource's Network resource.
    **/
    listNetworkAccessProfileNetwork(req: operations.ListNetworkAccessProfileNetworkRequest, config?: AxiosRequestConfig): Promise<operations.ListNetworkAccessProfileNetworkResponse>;
    /**
     * listSettingsUpdate - Retrieve a list of Settings Updates.
    **/
    listSettingsUpdate(req: operations.ListSettingsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ListSettingsUpdateResponse>;
    /**
     * listSim - Retrieve a list of Super SIMs from your account.
    **/
    listSim(req: operations.ListSimRequest, config?: AxiosRequestConfig): Promise<operations.ListSimResponse>;
    /**
     * listSimIpAddress - Retrieve a list of IP Addresses for the given Super SIM.
    **/
    listSimIpAddress(req: operations.ListSimIpAddressRequest, config?: AxiosRequestConfig): Promise<operations.ListSimIpAddressResponse>;
    /**
     * listSmsCommand - Retrieve a list of SMS Commands from your account.
    **/
    listSmsCommand(req: operations.ListSmsCommandRequest, config?: AxiosRequestConfig): Promise<operations.ListSmsCommandResponse>;
    /**
     * listUsageRecord - List UsageRecords
    **/
    listUsageRecord(req: operations.ListUsageRecordRequest, config?: AxiosRequestConfig): Promise<operations.ListUsageRecordResponse>;
    /**
     * updateFleet - Updates the given properties of a Super SIM Fleet instance from your account.
    **/
    updateFleet(req: operations.UpdateFleetRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFleetResponse>;
    /**
     * updateNetworkAccessProfile - Updates the given properties of a Network Access Profile in your account.
    **/
    updateNetworkAccessProfile(req: operations.UpdateNetworkAccessProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkAccessProfileResponse>;
    /**
     * updateSim - Updates the given properties of a Super SIM instance from your account.
    **/
    updateSim(req: operations.UpdateSimRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSimResponse>;
}
export {};
