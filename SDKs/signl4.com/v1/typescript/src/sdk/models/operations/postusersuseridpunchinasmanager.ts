import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostUsersUserIdPunchInAsManagerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class PostUsersUserIdPunchInAsManagerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostUsersUserIdPunchInAsManagerPathParams;
}


export class PostUsersUserIdPunchInAsManagerResponse extends SpeakeasyBase {
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
