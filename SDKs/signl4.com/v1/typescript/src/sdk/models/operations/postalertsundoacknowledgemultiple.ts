import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAlertsUndoAcknowledgeMultipleRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  changeAlertStatusMultipleInfo?: shared.ChangeAlertStatusMultipleInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  changeAlertStatusMultipleInfo1?: shared.ChangeAlertStatusMultipleInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  changeAlertStatusMultipleInfo2?: shared.ChangeAlertStatusMultipleInfo;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  changeAlertStatusMultipleInfo3?: shared.ChangeAlertStatusMultipleInfo;
}


export class PostAlertsUndoAcknowledgeMultipleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: PostAlertsUndoAcknowledgeMultipleRequests;
}


export class PostAlertsUndoAcknowledgeMultipleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  statusCode: number;
}
