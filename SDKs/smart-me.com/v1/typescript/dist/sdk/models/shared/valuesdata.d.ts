import { SpeakeasyBase } from "../../../internal/utils";
import { ValueData } from "./valuedata";
/**
 * API Container for a Meter Value
**/
export declare class ValuesData extends SpeakeasyBase {
    date?: Date;
    deviceId?: string;
    values?: ValueData[];
}
