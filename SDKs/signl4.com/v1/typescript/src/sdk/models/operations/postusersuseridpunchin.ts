import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostUsersUserIdPunchInPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class PostUsersUserIdPunchInRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostUsersUserIdPunchInPathParams;
}


export class PostUsersUserIdPunchInResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;

  @Metadata()
  userDutyInfo?: shared.UserDutyInfo;
}
