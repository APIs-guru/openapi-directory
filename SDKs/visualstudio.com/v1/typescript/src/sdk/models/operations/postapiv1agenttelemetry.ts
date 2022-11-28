import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostApiV1AgentTelemetryRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json", elemType: shared.TelemetryData })
  telemetryData?: shared.TelemetryData[];

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.TelemetryData })
  telemetryData1?: shared.TelemetryData[];

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json", elemType: shared.TelemetryData })
  telemetryData2?: shared.TelemetryData[];

  @SpeakeasyMetadata({ data: "request, media_type=text/json", elemType: shared.TelemetryData })
  telemetryData3?: shared.TelemetryData[];
}


export class PostApiV1AgentTelemetryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: PostApiV1AgentTelemetryRequests;
}


export class PostApiV1AgentTelemetryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
