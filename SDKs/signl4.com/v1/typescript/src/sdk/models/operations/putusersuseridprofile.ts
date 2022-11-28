import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutUsersUserIdProfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class PutUsersUserIdProfileRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  userProfile?: shared.UserProfile;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  userProfile1?: shared.UserProfile;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  userProfile2?: shared.UserProfile;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  userProfile3?: shared.UserProfile;
}


export class PutUsersUserIdProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutUsersUserIdProfilePathParams;

  @SpeakeasyMetadata()
  request?: PutUsersUserIdProfileRequests;
}


export class PutUsersUserIdProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userInfo?: shared.UserInfo;
}
