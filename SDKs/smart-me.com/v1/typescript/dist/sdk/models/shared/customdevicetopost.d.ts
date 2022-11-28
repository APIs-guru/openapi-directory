import { SpeakeasyBase } from "../../../internal/utils";
import { CustomDeviceValues } from "./customdevicevalues";
/**
 * Container Class for the Web API
**/
export declare class CustomDeviceToPost extends SpeakeasyBase {
    id?: string;
    name?: string;
    serial?: number;
    valueDate?: Date;
    values?: CustomDeviceValues[];
}
