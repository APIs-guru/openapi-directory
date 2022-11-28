import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAlertsAcknowledgeMultipleRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  changeAlertStatusMultipleInfo?: shared.ChangeAlertStatusMultipleInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  changeAlertStatusMultipleInfo1?: shared.ChangeAlertStatusMultipleInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  changeAlertStatusMultipleInfo2?: shared.ChangeAlertStatusMultipleInfo;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  changeAlertStatusMultipleInfo3?: shared.ChangeAlertStatusMultipleInfo;
}


export class PostAlertsAcknowledgeMultipleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: PostAlertsAcknowledgeMultipleRequests;
}


export class PostAlertsAcknowledgeMultipleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  statusCode: number;
}
