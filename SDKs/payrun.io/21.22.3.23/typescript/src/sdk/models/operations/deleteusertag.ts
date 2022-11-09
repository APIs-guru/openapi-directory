import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteUserTagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=TagId" })
  tagId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=UserId" })
  userId: string;
}


export class DeleteUserTagHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class DeleteUserTagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteUserTagPathParams;

  @Metadata()
  headers: DeleteUserTagHeaders;
}


export class DeleteUserTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;
}
