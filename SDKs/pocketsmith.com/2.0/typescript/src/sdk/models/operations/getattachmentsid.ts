import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAttachmentsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetAttachmentsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAttachmentsIdPathParams;
}


export class GetAttachmentsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attachment?: shared.Attachment;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
