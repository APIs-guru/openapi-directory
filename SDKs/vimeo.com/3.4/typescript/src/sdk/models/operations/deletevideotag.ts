import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteVideoTagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=word" })
  word: string;
}


export class DeleteVideoTagSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteVideoTagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteVideoTagPathParams;

  @Metadata()
  security: DeleteVideoTagSecurity;
}


export class DeleteVideoTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;
}
