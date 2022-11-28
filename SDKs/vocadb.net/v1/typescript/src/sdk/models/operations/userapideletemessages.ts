import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserApiDeleteMessagesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class UserApiDeleteMessagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=messageId" })
  messageId: number[];
}


export class UserApiDeleteMessagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserApiDeleteMessagesPathParams;

  @SpeakeasyMetadata()
  queryParams: UserApiDeleteMessagesQueryParams;
}


export class UserApiDeleteMessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
