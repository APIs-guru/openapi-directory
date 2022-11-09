import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetGroupVideoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class GetGroupVideoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGroupVideoPathParams;
}


export class GetGroupVideoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata()
  video?: shared.Video;
}
