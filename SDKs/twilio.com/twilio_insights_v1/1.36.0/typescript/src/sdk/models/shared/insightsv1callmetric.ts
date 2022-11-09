import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MetricEnumStreamDirectionEnum } from "./metricenumstreamdirectionenum";
import { MetricEnumTwilioEdgeEnum } from "./metricenumtwilioedgeenum";


export class InsightsV1CallMetric extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=call_sid" })
  callSid?: string;

  @Metadata({ data: "json, name=carrier_edge" })
  carrierEdge?: any;

  @Metadata({ data: "json, name=client_edge" })
  clientEdge?: any;

  @Metadata({ data: "json, name=direction" })
  direction?: MetricEnumStreamDirectionEnum;

  @Metadata({ data: "json, name=edge" })
  edge?: MetricEnumTwilioEdgeEnum;

  @Metadata({ data: "json, name=sdk_edge" })
  sdkEdge?: any;

  @Metadata({ data: "json, name=sip_edge" })
  sipEdge?: any;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;
}
