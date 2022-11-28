import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCustomerPathParams extends SpeakeasyBase {
    account: number;
}
export declare class GetCustomer200ApplicationJson extends SpeakeasyBase {
    address?: string;
    balance?: number;
    city?: string;
    companyName?: string;
    companyWebsite?: string;
    country?: string;
    creditlimit?: string;
    email?: string;
    fax?: string;
    firstname?: string;
    lastname?: string;
    phone?: string;
    postcode?: string;
    state?: string;
    username?: number;
}
export declare class GetCustomerRequest extends SpeakeasyBase {
    pathParams: GetCustomerPathParams;
}
export declare class GetCustomerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getCustomer200ApplicationJsonObject?: GetCustomer200ApplicationJson;
}
