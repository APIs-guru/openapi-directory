import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAlertsAlertIdAttachmentsAttachmentIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alertId" })
  alertId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attachmentId" })
  attachmentId: string;
}


export class GetAlertsAlertIdAttachmentsAttachmentIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scale" })
  scale?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width" })
  width?: number;
}


export class GetAlertsAlertIdAttachmentsAttachmentIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAlertsAlertIdAttachmentsAttachmentIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAlertsAlertIdAttachmentsAttachmentIdQueryParams;
}


export class GetAlertsAlertIdAttachmentsAttachmentIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  getAlertsAlertIdAttachmentsAttachmentId200ApplicationJsonBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  getAlertsAlertIdAttachmentsAttachmentId200TextJsonBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  getAlertsAlertIdAttachmentsAttachmentId200TextPlainBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
