import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVodSeasonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" })
  ondemandId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season_id" })
  seasonId: number;
}


export class GetVodSeasonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVodSeasonPathParams;
}


export class GetVodSeasonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata()
  onDemandSeason?: shared.OnDemandSeason;
}
