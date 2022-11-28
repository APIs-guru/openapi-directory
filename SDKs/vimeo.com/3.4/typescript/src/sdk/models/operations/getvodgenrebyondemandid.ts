import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVodGenreByOndemandIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=genre_id" })
  genreId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" })
  ondemandId: number;
}


export class GetVodGenreByOndemandIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVodGenreByOndemandIdPathParams;
}


export class GetVodGenreByOndemandIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata()
  onDemandGenre?: shared.OnDemandGenre;
}
