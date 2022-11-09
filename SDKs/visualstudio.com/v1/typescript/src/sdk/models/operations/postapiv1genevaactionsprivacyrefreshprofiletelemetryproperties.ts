import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  refreshProfileTelemetryPropertiesRequest?: shared.RefreshProfileTelemetryPropertiesRequest;

  @Metadata({ data: "request, media_type=application/json" })
  refreshProfileTelemetryPropertiesRequest1?: shared.RefreshProfileTelemetryPropertiesRequest;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  refreshProfileTelemetryPropertiesRequest2?: shared.RefreshProfileTelemetryPropertiesRequest;

  @Metadata({ data: "request, media_type=text/json" })
  refreshProfileTelemetryPropertiesRequest3?: shared.RefreshProfileTelemetryPropertiesRequest;
}


export class PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRequest extends SpeakeasyBase {
  @Metadata()
  request: PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRequests;
}


export class PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  refreshProfileTelemetryPropertiesResponse?: shared.RefreshProfileTelemetryPropertiesResponse;

  @Metadata()
  statusCode: number;
}
