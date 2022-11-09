import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTransactionsIdAttachmentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetTransactionsIdAttachmentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTransactionsIdAttachmentsPathParams;
}


export class GetTransactionsIdAttachmentsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Attachment })
  attachments?: shared.Attachment[];

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
