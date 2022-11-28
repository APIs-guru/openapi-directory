import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVodGenresByOndemandIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" })
  ondemandId: number;
}


export class GetVodGenresByOndemandIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVodGenresByOndemandIdPathParams;
}


export class GetVodGenresByOndemandIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata({ elemType: shared.OnDemandGenre })
  onDemandGenres?: shared.OnDemandGenre[];
}
