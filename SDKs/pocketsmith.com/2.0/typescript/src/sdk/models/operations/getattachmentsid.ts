import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAttachmentsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetAttachmentsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAttachmentsIdPathParams;
}


export class GetAttachmentsIdResponse extends SpeakeasyBase {
  @Metadata()
  attachment?: shared.Attachment;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
