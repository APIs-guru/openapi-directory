import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SummaryEnumCallStateEnum } from "./summaryenumcallstateenum";
import { SummaryEnumCallTypeEnum } from "./summaryenumcalltypeenum";
import { SummaryEnumProcessingStateEnum } from "./summaryenumprocessingstateenum";


export class InsightsV1CallSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=annotation" })
  annotation?: any;

  @Metadata({ data: "json, name=attributes" })
  attributes?: any;

  @Metadata({ data: "json, name=call_sid" })
  callSid?: string;

  @Metadata({ data: "json, name=call_state" })
  callState?: SummaryEnumCallStateEnum;

  @Metadata({ data: "json, name=call_type" })
  callType?: SummaryEnumCallTypeEnum;

  @Metadata({ data: "json, name=carrier_edge" })
  carrierEdge?: any;

  @Metadata({ data: "json, name=client_edge" })
  clientEdge?: any;

  @Metadata({ data: "json, name=connect_duration" })
  connectDuration?: number;

  @Metadata({ data: "json, name=created_time" })
  createdTime?: Date;

  @Metadata({ data: "json, name=duration" })
  duration?: number;

  @Metadata({ data: "json, name=end_time" })
  endTime?: Date;

  @Metadata({ data: "json, name=from" })
  from?: any;

  @Metadata({ data: "json, name=processing_state" })
  processingState?: SummaryEnumProcessingStateEnum;

  @Metadata({ data: "json, name=properties" })
  properties?: any;

  @Metadata({ data: "json, name=sdk_edge" })
  sdkEdge?: any;

  @Metadata({ data: "json, name=sip_edge" })
  sipEdge?: any;

  @Metadata({ data: "json, name=start_time" })
  startTime?: Date;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=to" })
  to?: any;

  @Metadata({ data: "json, name=trust" })
  trust?: any;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
