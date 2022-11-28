import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAlertsAlertIdClosePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alertId" })
  alertId: string;
}


export class PostAlertsAlertIdCloseRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  changeAlertStatusInfo?: shared.ChangeAlertStatusInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  changeAlertStatusInfo1?: shared.ChangeAlertStatusInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  changeAlertStatusInfo2?: shared.ChangeAlertStatusInfo;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  changeAlertStatusInfo3?: shared.ChangeAlertStatusInfo;
}


export class PostAlertsAlertIdCloseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostAlertsAlertIdClosePathParams;

  @SpeakeasyMetadata()
  request?: PostAlertsAlertIdCloseRequests;
}


export class PostAlertsAlertIdCloseResponse extends SpeakeasyBase {
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
