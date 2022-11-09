import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAlertsAlertIdAttachmentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=alertId" })
  alertId: string;
}


export class GetAlertsAlertIdAttachmentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAlertsAlertIdAttachmentsPathParams;
}


export class GetAlertsAlertIdAttachmentsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AlertAttachmentInfo })
  alertAttachmentInfos?: shared.AlertAttachmentInfo[];

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;
}
