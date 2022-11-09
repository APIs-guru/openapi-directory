import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FollowUsersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class FollowUsersRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=users" })
  users: string[];
}


export class FollowUsersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class FollowUsersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FollowUsersPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: FollowUsersRequestBody;

  @Metadata()
  security: FollowUsersSecurity;
}


export class FollowUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;
}
