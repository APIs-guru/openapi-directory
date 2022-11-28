import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAlertsAlertIdUndoAcknowledgePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alertId" })
  alertId: string;
}


export class PostAlertsAlertIdUndoAcknowledgeRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  changeAlertStatusInfo?: shared.ChangeAlertStatusInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  changeAlertStatusInfo1?: shared.ChangeAlertStatusInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  changeAlertStatusInfo2?: shared.ChangeAlertStatusInfo;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  changeAlertStatusInfo3?: shared.ChangeAlertStatusInfo;
}


export class PostAlertsAlertIdUndoAcknowledgeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostAlertsAlertIdUndoAcknowledgePathParams;

  @SpeakeasyMetadata()
  request?: PostAlertsAlertIdUndoAcknowledgeRequests;
}


export class PostAlertsAlertIdUndoAcknowledgeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  overviewAlert?: shared.OverviewAlert;

  @SpeakeasyMetadata()
  statusCode: number;
}
