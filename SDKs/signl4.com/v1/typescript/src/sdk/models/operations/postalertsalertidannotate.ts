import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAlertsAlertIdAnnotatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=alertId" })
  alertId: string;
}


export class PostAlertsAlertIdAnnotateRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  alertAnnotationInfo?: shared.AlertAnnotationInfo;

  @Metadata({ data: "request, media_type=application/json" })
  alertAnnotationInfo1?: shared.AlertAnnotationInfo;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  alertAnnotationInfo2?: shared.AlertAnnotationInfo;

  @Metadata({ data: "request, media_type=text/json" })
  alertAnnotationInfo3?: shared.AlertAnnotationInfo;
}


export class PostAlertsAlertIdAnnotateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostAlertsAlertIdAnnotatePathParams;

  @Metadata()
  request?: PostAlertsAlertIdAnnotateRequests;
}


export class PostAlertsAlertIdAnnotateResponse extends SpeakeasyBase {
  @Metadata()
  alertAnnotationInfo?: shared.AlertAnnotationInfo;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;
}
