import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * ApplicationGetResponse defines the schema for `/application/get`
**/
export declare class ApplicationGetRequest extends SpeakeasyBase {
    applicationId: string;
    clientId: string;
    secret: string;
}
