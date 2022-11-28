import { SpeakeasyBase } from "../../../internal/utils";
import { MetricEnumStreamDirectionEnum } from "./metricenumstreamdirectionenum";
import { MetricEnumTwilioEdgeEnum } from "./metricenumtwilioedgeenum";
export declare class InsightsV1CallMetric extends SpeakeasyBase {
    accountSid?: string;
    callSid?: string;
    carrierEdge?: any;
    clientEdge?: any;
    direction?: MetricEnumStreamDirectionEnum;
    edge?: MetricEnumTwilioEdgeEnum;
    sdkEdge?: any;
    sipEdge?: any;
    timestamp?: string;
}
