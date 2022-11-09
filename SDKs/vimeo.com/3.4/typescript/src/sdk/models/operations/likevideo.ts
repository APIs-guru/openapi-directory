import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LikeVideoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class LikeVideoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class LikeVideoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LikeVideoPathParams;

  @Metadata()
  security: LikeVideoSecurity;
}


export class LikeVideoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;
}
