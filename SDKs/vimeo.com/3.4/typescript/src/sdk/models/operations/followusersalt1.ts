import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FollowUsersAlt1RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=users" })
  users: string[];
}


export class FollowUsersAlt1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class FollowUsersAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: FollowUsersAlt1RequestBody;

  @SpeakeasyMetadata()
  security: FollowUsersAlt1Security;
}


export class FollowUsersAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;
}
