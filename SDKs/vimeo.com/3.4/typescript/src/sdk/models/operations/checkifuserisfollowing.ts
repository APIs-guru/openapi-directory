import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CheckIfUserIsFollowingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=follow_user_id" })
  followUserId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class CheckIfUserIsFollowingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CheckIfUserIsFollowingPathParams;
}


export class CheckIfUserIsFollowingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;
}
