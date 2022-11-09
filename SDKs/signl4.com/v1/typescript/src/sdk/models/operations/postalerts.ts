import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAlertsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  raiseAlertInfo?: shared.RaiseAlertInfo;

  @Metadata({ data: "request, media_type=application/json" })
  raiseAlertInfo1?: shared.RaiseAlertInfo;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  raiseAlertInfo2?: shared.RaiseAlertInfo;

  @Metadata({ data: "request, media_type=text/json" })
  raiseAlertInfo3?: shared.RaiseAlertInfo;
}


export class PostAlertsRequest extends SpeakeasyBase {
  @Metadata()
  request?: PostAlertsRequests;
}


export class PostAlertsResponse extends SpeakeasyBase {
  @Metadata()
  alertInfo?: shared.AlertInfo;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;
}
