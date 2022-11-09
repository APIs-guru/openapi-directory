import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GamesYoutubeReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GamesYoutubeReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GamesYoutubeReadPathParams;
}


export class GamesYoutubeReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  youtube?: shared.Youtube;
}
