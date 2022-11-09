import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVodGenrePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=genre_id" })
  genreId: string;
}


export class GetVodGenreRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVodGenrePathParams;
}


export class GetVodGenreResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata()
  onDemandGenre?: shared.OnDemandGenre;
}
