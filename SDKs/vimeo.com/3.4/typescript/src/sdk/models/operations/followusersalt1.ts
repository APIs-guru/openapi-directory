import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FollowUsersAlt1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=users" })
  users: string[];
}


export class FollowUsersAlt1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class FollowUsersAlt1Request extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: FollowUsersAlt1RequestBody;

  @Metadata()
  security: FollowUsersAlt1Security;
}


export class FollowUsersAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;
}
