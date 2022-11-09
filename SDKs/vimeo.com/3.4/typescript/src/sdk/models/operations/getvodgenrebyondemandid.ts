import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVodGenreByOndemandIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=genre_id" })
  genreId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" })
  ondemandId: number;
}


export class GetVodGenreByOndemandIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVodGenreByOndemandIdPathParams;
}


export class GetVodGenreByOndemandIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata()
  onDemandGenre?: shared.OnDemandGenre;
}
