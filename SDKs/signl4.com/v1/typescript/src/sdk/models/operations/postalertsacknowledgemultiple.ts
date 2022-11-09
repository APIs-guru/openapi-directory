import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAlertsAcknowledgeMultipleRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  changeAlertStatusMultipleInfo?: shared.ChangeAlertStatusMultipleInfo;

  @Metadata({ data: "request, media_type=application/json" })
  changeAlertStatusMultipleInfo1?: shared.ChangeAlertStatusMultipleInfo;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  changeAlertStatusMultipleInfo2?: shared.ChangeAlertStatusMultipleInfo;

  @Metadata({ data: "request, media_type=text/json" })
  changeAlertStatusMultipleInfo3?: shared.ChangeAlertStatusMultipleInfo;
}


export class PostAlertsAcknowledgeMultipleRequest extends SpeakeasyBase {
  @Metadata()
  request?: PostAlertsAcknowledgeMultipleRequests;
}


export class PostAlertsAcknowledgeMultipleResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;
}
