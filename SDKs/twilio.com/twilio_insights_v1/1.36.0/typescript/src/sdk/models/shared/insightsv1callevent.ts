import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EventEnumTwilioEdgeEnum } from "./eventenumtwilioedgeenum";
import { EventEnumLevelEnum } from "./eventenumlevelenum";


export class InsightsV1CallEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=call_sid" })
  callSid?: string;

  @Metadata({ data: "json, name=carrier_edge" })
  carrierEdge?: any;

  @Metadata({ data: "json, name=client_edge" })
  clientEdge?: any;

  @Metadata({ data: "json, name=edge" })
  edge?: EventEnumTwilioEdgeEnum;

  @Metadata({ data: "json, name=group" })
  group?: string;

  @Metadata({ data: "json, name=level" })
  level?: EventEnumLevelEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sdk_edge" })
  sdkEdge?: any;

  @Metadata({ data: "json, name=sip_edge" })
  sipEdge?: any;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;
}
