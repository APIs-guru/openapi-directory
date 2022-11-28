import { SpeakeasyBase } from "../../../internal/utils";
import { LiabilitiesGetRequestOptions } from "./liabilitiesgetrequestoptions";
/**
 * LiabilitiesGetRequest defines the request schema for `/liabilities/get`
**/
export declare class LiabilitiesGetRequest extends SpeakeasyBase {
    accessToken: string;
    clientId?: string;
    options?: LiabilitiesGetRequestOptions;
    secret?: string;
}
