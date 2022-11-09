import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GamesMoviesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GamesMoviesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GamesMoviesReadPathParams;
}


export class GamesMoviesReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  movie?: shared.Movie;

  @Metadata()
  statusCode: number;
}
