import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAlertsAlertIdAttachmentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alertId" })
  alertId: string;
}


export class GetAlertsAlertIdAttachmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAlertsAlertIdAttachmentsPathParams;
}


export class GetAlertsAlertIdAttachmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AlertAttachmentInfo })
  alertAttachmentInfos?: shared.AlertAttachmentInfo[];

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  statusCode: number;
}
