import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTagFromUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=TagId" })
  tagId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=UserId" })
  userId: string;
}


export class GetTagFromUserHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetTagFromUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTagFromUserPathParams;

  @Metadata()
  headers: GetTagFromUserHeaders;
}


export class GetTagFromUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;

  @Metadata()
  tag?: shared.Tag;
}
