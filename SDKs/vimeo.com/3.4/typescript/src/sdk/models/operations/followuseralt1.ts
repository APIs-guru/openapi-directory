import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FollowUserAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=follow_user_id" })
  followUserId: number;
}


export class FollowUserAlt1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class FollowUserAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FollowUserAlt1PathParams;

  @SpeakeasyMetadata()
  security: FollowUserAlt1Security;
}


export class FollowUserAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
