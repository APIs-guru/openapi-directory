import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UserApiGetMessagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=messageId" })
  messageId: number;
}


export class UserApiGetMessageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UserApiGetMessagePathParams;
}


export class UserApiGetMessageResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  userMessageContract?: shared.UserMessageContract;
}
