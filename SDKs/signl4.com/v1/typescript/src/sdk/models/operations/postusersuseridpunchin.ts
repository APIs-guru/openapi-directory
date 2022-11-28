import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostUsersUserIdPunchInPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class PostUsersUserIdPunchInRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostUsersUserIdPunchInPathParams;
}


export class PostUsersUserIdPunchInResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userDutyInfo?: shared.UserDutyInfo;
}
