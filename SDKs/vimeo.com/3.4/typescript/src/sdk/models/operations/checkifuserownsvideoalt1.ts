import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CheckIfUserOwnsVideoAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class CheckIfUserOwnsVideoAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: CheckIfUserOwnsVideoAlt1PathParams;
}


export class CheckIfUserOwnsVideoAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata()
  video?: shared.Video;
}
