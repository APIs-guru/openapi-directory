import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  refreshProfileTelemetryPropertiesRequest?: shared.RefreshProfileTelemetryPropertiesRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  refreshProfileTelemetryPropertiesRequest1?: shared.RefreshProfileTelemetryPropertiesRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  refreshProfileTelemetryPropertiesRequest2?: shared.RefreshProfileTelemetryPropertiesRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  refreshProfileTelemetryPropertiesRequest3?: shared.RefreshProfileTelemetryPropertiesRequest;
}


export class PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRequests;
}


export class PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  refreshProfileTelemetryPropertiesResponse?: shared.RefreshProfileTelemetryPropertiesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
