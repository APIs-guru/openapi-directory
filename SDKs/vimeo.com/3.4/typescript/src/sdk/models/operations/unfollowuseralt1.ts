import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UnfollowUserAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=follow_user_id" })
  followUserId: number;
}


export class UnfollowUserAlt1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class UnfollowUserAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UnfollowUserAlt1PathParams;

  @SpeakeasyMetadata()
  security: UnfollowUserAlt1Security;
}


export class UnfollowUserAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
