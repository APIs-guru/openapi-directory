import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DepositSwitchCreateRequestOptions } from "./depositswitchcreaterequestoptions";
export declare enum DepositSwitchCreateRequestCountryCodeEnum {
    Us = "US",
    Ca = "CA"
}
/**
 * DepositSwitchCreateRequest defines the request schema for `/deposit_switch/create`
**/
export declare class DepositSwitchCreateRequest extends SpeakeasyBase {
    clientId?: string;
    countryCode?: DepositSwitchCreateRequestCountryCodeEnum;
    options?: DepositSwitchCreateRequestOptions;
    secret?: string;
    targetAccessToken: string;
    targetAccountId: string;
}
