import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentBillingInfo } from "./environmentbillinginfo";
export declare class EnvironmentStateChange extends SpeakeasyBase {
    environment?: EnvironmentBillingInfo;
    id?: string;
    newValue?: number;
    oldValue?: number;
    partitionKey?: string;
    time?: Date;
}
