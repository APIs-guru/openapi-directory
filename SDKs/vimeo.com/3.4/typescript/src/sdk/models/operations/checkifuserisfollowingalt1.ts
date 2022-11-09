import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CheckIfUserIsFollowingAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=follow_user_id" })
  followUserId: number;
}


export class CheckIfUserIsFollowingAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: CheckIfUserIsFollowingAlt1PathParams;
}


export class CheckIfUserIsFollowingAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;
}
