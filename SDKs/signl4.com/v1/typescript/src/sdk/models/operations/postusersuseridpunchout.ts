import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostUsersUserIdPunchOutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class PostUsersUserIdPunchOutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostUsersUserIdPunchOutPathParams;
}


export class PostUsersUserIdPunchOutResponse extends SpeakeasyBase {
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
