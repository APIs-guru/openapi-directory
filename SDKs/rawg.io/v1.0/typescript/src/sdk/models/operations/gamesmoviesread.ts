import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GamesMoviesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GamesMoviesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GamesMoviesReadPathParams;
}


export class GamesMoviesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  movie?: shared.Movie;

  @SpeakeasyMetadata()
  statusCode: number;
}
