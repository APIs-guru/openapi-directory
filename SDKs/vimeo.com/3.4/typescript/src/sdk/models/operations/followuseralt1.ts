import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FollowUserAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=follow_user_id" })
  followUserId: number;
}


export class FollowUserAlt1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class FollowUserAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: FollowUserAlt1PathParams;

  @Metadata()
  security: FollowUserAlt1Security;
}


export class FollowUserAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;
}
