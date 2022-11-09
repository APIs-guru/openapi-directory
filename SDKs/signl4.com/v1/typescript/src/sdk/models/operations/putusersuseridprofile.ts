import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutUsersUserIdProfilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class PutUsersUserIdProfileRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  userProfile?: shared.UserProfile;

  @Metadata({ data: "request, media_type=application/json" })
  userProfile1?: shared.UserProfile;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  userProfile2?: shared.UserProfile;

  @Metadata({ data: "request, media_type=text/json" })
  userProfile3?: shared.UserProfile;
}


export class PutUsersUserIdProfileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutUsersUserIdProfilePathParams;

  @Metadata()
  request?: PutUsersUserIdProfileRequests;
}


export class PutUsersUserIdProfileResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;

  @Metadata()
  userInfo?: shared.UserInfo;
}
