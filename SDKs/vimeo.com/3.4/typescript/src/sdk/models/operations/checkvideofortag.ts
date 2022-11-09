import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CheckVideoForTagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=word" })
  word: string;
}


export class CheckVideoForTagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CheckVideoForTagPathParams;
}


export class CheckVideoForTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata()
  tag?: shared.Tag;
}
