import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { BookingServices } from "./bookingservices";
import { DeprecatedServices } from "./deprecatedservices";
import { GeneralServices } from "./generalservices";
import { ProductServices } from "./productservices";
import { TaxonomyServices } from "./taxonomyservices";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://viatorapi.viator.com/service", "https://viatorapi.sandbox.viator.com/service"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    bookingServices: BookingServices;
    deprecatedServices: DeprecatedServices;
    generalServices: GeneralServices;
    productServices: ProductServices;
    taxonomyServices: TaxonomyServices;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
