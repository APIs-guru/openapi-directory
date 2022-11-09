import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostApiV1AgentTelemetryRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json", elemType: shared.TelemetryData })
  telemetryData?: shared.TelemetryData[];

  @Metadata({ data: "request, media_type=application/json", elemType: shared.TelemetryData })
  telemetryData1?: shared.TelemetryData[];

  @Metadata({ data: "request, media_type=application/json-patch+json", elemType: shared.TelemetryData })
  telemetryData2?: shared.TelemetryData[];

  @Metadata({ data: "request, media_type=text/json", elemType: shared.TelemetryData })
  telemetryData3?: shared.TelemetryData[];
}


export class PostApiV1AgentTelemetryRequest extends SpeakeasyBase {
  @Metadata()
  request?: PostApiV1AgentTelemetryRequests;
}


export class PostApiV1AgentTelemetryResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
