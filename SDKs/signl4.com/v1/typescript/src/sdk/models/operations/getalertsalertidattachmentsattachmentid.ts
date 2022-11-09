import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAlertsAlertIdAttachmentsAttachmentIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=alertId" })
  alertId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=attachmentId" })
  attachmentId: string;
}


export class GetAlertsAlertIdAttachmentsAttachmentIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=height" })
  height?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=scale" })
  scale?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=width" })
  width?: number;
}


export class GetAlertsAlertIdAttachmentsAttachmentIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAlertsAlertIdAttachmentsAttachmentIdPathParams;

  @Metadata()
  queryParams: GetAlertsAlertIdAttachmentsAttachmentIdQueryParams;
}


export class GetAlertsAlertIdAttachmentsAttachmentIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  getAlertsAlertIdAttachmentsAttachmentId200ApplicationJsonBinaryString?: Uint8Array;

  @Metadata()
  getAlertsAlertIdAttachmentsAttachmentId200TextJsonBinaryString?: Uint8Array;

  @Metadata()
  getAlertsAlertIdAttachmentsAttachmentId200TextPlainBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
