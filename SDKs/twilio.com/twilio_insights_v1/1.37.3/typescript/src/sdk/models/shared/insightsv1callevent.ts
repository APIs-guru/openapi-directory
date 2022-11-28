import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventEnumTwilioEdgeEnum } from "./eventenumtwilioedgeenum";
import { EventEnumLevelEnum } from "./eventenumlevelenum";



export class InsightsV1CallEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=call_sid" })
  callSid?: string;

  @SpeakeasyMetadata({ data: "json, name=carrier_edge" })
  carrierEdge?: any;

  @SpeakeasyMetadata({ data: "json, name=client_edge" })
  clientEdge?: any;

  @SpeakeasyMetadata({ data: "json, name=edge" })
  edge?: EventEnumTwilioEdgeEnum;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "json, name=level" })
  level?: EventEnumLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sdk_edge" })
  sdkEdge?: any;

  @SpeakeasyMetadata({ data: "json, name=sip_edge" })
  sipEdge?: any;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;
}
