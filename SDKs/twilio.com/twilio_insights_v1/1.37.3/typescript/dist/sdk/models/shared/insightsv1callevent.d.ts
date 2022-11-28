import { SpeakeasyBase } from "../../../internal/utils";
import { EventEnumTwilioEdgeEnum } from "./eventenumtwilioedgeenum";
import { EventEnumLevelEnum } from "./eventenumlevelenum";
export declare class InsightsV1CallEvent extends SpeakeasyBase {
    accountSid?: string;
    callSid?: string;
    carrierEdge?: any;
    clientEdge?: any;
    edge?: EventEnumTwilioEdgeEnum;
    group?: string;
    level?: EventEnumLevelEnum;
    name?: string;
    sdkEdge?: any;
    sipEdge?: any;
    timestamp?: string;
}
