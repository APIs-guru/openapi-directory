import { SpeakeasyBase } from "../../../internal/utils";
import { CheckDetails } from "./checkdetails";
/**
 * Represents a list of background check details
**/
export declare class CheckDetailsOutput extends SpeakeasyBase {
    details: CheckDetails[];
    next?: string;
    self: string;
}
