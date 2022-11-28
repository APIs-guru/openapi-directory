import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UserApiGetMessagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=messageId" })
  messageId: number;
}


export class UserApiGetMessageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserApiGetMessagePathParams;
}


export class UserApiGetMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userMessageContract?: shared.UserMessageContract;
}
