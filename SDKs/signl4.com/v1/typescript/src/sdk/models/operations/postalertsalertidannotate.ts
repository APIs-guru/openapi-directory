import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAlertsAlertIdAnnotatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alertId" })
  alertId: string;
}


export class PostAlertsAlertIdAnnotateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  alertAnnotationInfo?: shared.AlertAnnotationInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  alertAnnotationInfo1?: shared.AlertAnnotationInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  alertAnnotationInfo2?: shared.AlertAnnotationInfo;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  alertAnnotationInfo3?: shared.AlertAnnotationInfo;
}


export class PostAlertsAlertIdAnnotateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostAlertsAlertIdAnnotatePathParams;

  @SpeakeasyMetadata()
  request?: PostAlertsAlertIdAnnotateRequests;
}


export class PostAlertsAlertIdAnnotateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  alertAnnotationInfo?: shared.AlertAnnotationInfo;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  statusCode: number;
}
