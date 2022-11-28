import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAlertsAlertIdAcknowledgePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alertId" })
  alertId: string;
}


export class PostAlertsAlertIdAcknowledgeRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  changeAlertStatusInfo?: shared.ChangeAlertStatusInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  changeAlertStatusInfo1?: shared.ChangeAlertStatusInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  changeAlertStatusInfo2?: shared.ChangeAlertStatusInfo;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  changeAlertStatusInfo3?: shared.ChangeAlertStatusInfo;
}


export class PostAlertsAlertIdAcknowledgeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostAlertsAlertIdAcknowledgePathParams;

  @SpeakeasyMetadata()
  request?: PostAlertsAlertIdAcknowledgeRequests;
}


export class PostAlertsAlertIdAcknowledgeResponse extends SpeakeasyBase {
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
