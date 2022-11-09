import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersIdAttachmentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetUsersIdAttachmentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=unassigned" })
  unassigned?: number;
}


export class GetUsersIdAttachmentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersIdAttachmentsPathParams;

  @Metadata()
  queryParams: GetUsersIdAttachmentsQueryParams;
}


export class GetUsersIdAttachmentsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Attachment })
  attachments?: shared.Attachment[];

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
