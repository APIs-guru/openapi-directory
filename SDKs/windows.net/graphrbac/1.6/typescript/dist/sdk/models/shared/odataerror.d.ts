import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorMessage } from "./errormessage";
/**
 * Active Directory OData error information.
**/
export declare class OdataError extends SpeakeasyBase {
    code?: string;
    message?: ErrorMessage;
}
