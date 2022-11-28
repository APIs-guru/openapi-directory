import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CheckIfUserIsFollowingAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=follow_user_id" })
  followUserId: number;
}


export class CheckIfUserIsFollowingAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CheckIfUserIsFollowingAlt1PathParams;
}


export class CheckIfUserIsFollowingAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
