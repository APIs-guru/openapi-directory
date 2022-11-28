import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SummaryEnumAnsweredByEnum } from "./summaryenumansweredbyenum";
import { SummaryEnumCallStateEnum } from "./summaryenumcallstateenum";
import { SummaryEnumCallTypeEnum } from "./summaryenumcalltypeenum";
import { SummaryEnumProcessingStateEnum } from "./summaryenumprocessingstateenum";



export class InsightsV1CallSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=annotation" })
  annotation?: any;

  @SpeakeasyMetadata({ data: "json, name=answered_by" })
  answeredBy?: SummaryEnumAnsweredByEnum;

  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: any;

  @SpeakeasyMetadata({ data: "json, name=call_sid" })
  callSid?: string;

  @SpeakeasyMetadata({ data: "json, name=call_state" })
  callState?: SummaryEnumCallStateEnum;

  @SpeakeasyMetadata({ data: "json, name=call_type" })
  callType?: SummaryEnumCallTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=carrier_edge" })
  carrierEdge?: any;

  @SpeakeasyMetadata({ data: "json, name=client_edge" })
  clientEdge?: any;

  @SpeakeasyMetadata({ data: "json, name=connect_duration" })
  connectDuration?: number;

  @SpeakeasyMetadata({ data: "json, name=created_time" })
  createdTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=end_time" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: any;

  @SpeakeasyMetadata({ data: "json, name=processing_state" })
  processingState?: SummaryEnumProcessingStateEnum;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: any;

  @SpeakeasyMetadata({ data: "json, name=sdk_edge" })
  sdkEdge?: any;

  @SpeakeasyMetadata({ data: "json, name=sip_edge" })
  sipEdge?: any;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: any;

  @SpeakeasyMetadata({ data: "json, name=trust" })
  trust?: any;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
