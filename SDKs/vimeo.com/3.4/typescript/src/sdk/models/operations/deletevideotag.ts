import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteVideoTagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=word" })
  word: string;
}


export class DeleteVideoTagSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteVideoTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteVideoTagPathParams;

  @SpeakeasyMetadata()
  security: DeleteVideoTagSecurity;
}


export class DeleteVideoTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
