import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUsersIdAttachmentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetUsersIdAttachmentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unassigned" })
  unassigned?: number;
}


export class GetUsersIdAttachmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUsersIdAttachmentsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUsersIdAttachmentsQueryParams;
}


export class GetUsersIdAttachmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Attachment })
  attachments?: shared.Attachment[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
