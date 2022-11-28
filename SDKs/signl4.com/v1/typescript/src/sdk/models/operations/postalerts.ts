import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAlertsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  raiseAlertInfo?: shared.RaiseAlertInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  raiseAlertInfo1?: shared.RaiseAlertInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  raiseAlertInfo2?: shared.RaiseAlertInfo;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  raiseAlertInfo3?: shared.RaiseAlertInfo;
}


export class PostAlertsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: PostAlertsRequests;
}


export class PostAlertsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  alertInfo?: shared.AlertInfo;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  statusCode: number;
}
