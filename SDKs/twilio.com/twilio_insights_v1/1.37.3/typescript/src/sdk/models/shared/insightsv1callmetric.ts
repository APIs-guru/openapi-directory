import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricEnumStreamDirectionEnum } from "./metricenumstreamdirectionenum";
import { MetricEnumTwilioEdgeEnum } from "./metricenumtwilioedgeenum";



export class InsightsV1CallMetric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=call_sid" })
  callSid?: string;

  @SpeakeasyMetadata({ data: "json, name=carrier_edge" })
  carrierEdge?: any;

  @SpeakeasyMetadata({ data: "json, name=client_edge" })
  clientEdge?: any;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: MetricEnumStreamDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=edge" })
  edge?: MetricEnumTwilioEdgeEnum;

  @SpeakeasyMetadata({ data: "json, name=sdk_edge" })
  sdkEdge?: any;

  @SpeakeasyMetadata({ data: "json, name=sip_edge" })
  sipEdge?: any;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;
}
