import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FollowUsersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class FollowUsersRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=users" })
  users: string[];
}


export class FollowUsersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class FollowUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FollowUsersPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: FollowUsersRequestBody;

  @SpeakeasyMetadata()
  security: FollowUsersSecurity;
}


export class FollowUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;
}
