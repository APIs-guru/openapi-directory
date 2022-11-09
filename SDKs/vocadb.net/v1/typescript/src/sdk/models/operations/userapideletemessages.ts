import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserApiDeleteMessagesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class UserApiDeleteMessagesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=messageId" })
  messageId: number[];
}


export class UserApiDeleteMessagesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UserApiDeleteMessagesPathParams;

  @Metadata()
  queryParams: UserApiDeleteMessagesQueryParams;
}


export class UserApiDeleteMessagesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
