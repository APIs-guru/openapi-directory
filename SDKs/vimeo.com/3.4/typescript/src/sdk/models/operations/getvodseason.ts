import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVodSeasonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" })
  ondemandId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season_id" })
  seasonId: number;
}


export class GetVodSeasonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVodSeasonPathParams;
}


export class GetVodSeasonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata()
  onDemandSeason?: shared.OnDemandSeason;
}
