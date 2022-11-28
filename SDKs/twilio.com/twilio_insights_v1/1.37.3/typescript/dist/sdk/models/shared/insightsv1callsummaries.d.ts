import { SpeakeasyBase } from "../../../internal/utils";
import { CallSummariesEnumAnsweredByEnum } from "./callsummariesenumansweredbyenum";
import { CallSummariesEnumCallStateEnum } from "./callsummariesenumcallstateenum";
import { CallSummariesEnumCallTypeEnum } from "./callsummariesenumcalltypeenum";
import { CallSummariesEnumProcessingStateEnum } from "./callsummariesenumprocessingstateenum";
export declare class InsightsV1CallSummaries extends SpeakeasyBase {
    accountSid?: string;
    answeredBy?: CallSummariesEnumAnsweredByEnum;
    attributes?: any;
    callSid?: string;
    callState?: CallSummariesEnumCallStateEnum;
    callType?: CallSummariesEnumCallTypeEnum;
    carrierEdge?: any;
    clientEdge?: any;
    connectDuration?: number;
    createdTime?: Date;
    duration?: number;
    endTime?: Date;
    from?: any;
    processingState?: CallSummariesEnumProcessingStateEnum;
    properties?: any;
    sdkEdge?: any;
    sipEdge?: any;
    startTime?: Date;
    tags?: string[];
    to?: any;
    trust?: any;
    url?: string;
}
