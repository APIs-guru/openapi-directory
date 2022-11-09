import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAlertsAlertIdAcknowledgePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=alertId" })
  alertId: string;
}


export class PostAlertsAlertIdAcknowledgeRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  changeAlertStatusInfo?: shared.ChangeAlertStatusInfo;

  @Metadata({ data: "request, media_type=application/json" })
  changeAlertStatusInfo1?: shared.ChangeAlertStatusInfo;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  changeAlertStatusInfo2?: shared.ChangeAlertStatusInfo;

  @Metadata({ data: "request, media_type=text/json" })
  changeAlertStatusInfo3?: shared.ChangeAlertStatusInfo;
}


export class PostAlertsAlertIdAcknowledgeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostAlertsAlertIdAcknowledgePathParams;

  @Metadata()
  request?: PostAlertsAlertIdAcknowledgeRequests;
}


export class PostAlertsAlertIdAcknowledgeResponse extends SpeakeasyBase {
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
