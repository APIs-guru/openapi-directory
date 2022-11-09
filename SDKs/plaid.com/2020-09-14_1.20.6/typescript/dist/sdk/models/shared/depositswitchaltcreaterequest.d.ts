import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DepositSwitchCreateRequestOptions } from "./depositswitchcreaterequestoptions";
export declare enum DepositSwitchAltCreateRequestCountryCodeEnum {
    Us = "US",
    Ca = "CA"
}
/**
 * DepositSwitchAltCreateRequest defines the request schema for `/deposit_switch/alt/create`
**/
export declare class DepositSwitchAltCreateRequest extends SpeakeasyBase {
    clientId?: string;
    countryCode?: DepositSwitchAltCreateRequestCountryCodeEnum;
    options?: DepositSwitchCreateRequestOptions;
    secret?: string;
    targetAccount: Map<string, any>;
    targetUser: Map<string, any>;
}
