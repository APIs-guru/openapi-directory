import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GamesYoutubeReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GamesYoutubeReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GamesYoutubeReadPathParams;
}


export class GamesYoutubeReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  youtube?: shared.Youtube;
}
