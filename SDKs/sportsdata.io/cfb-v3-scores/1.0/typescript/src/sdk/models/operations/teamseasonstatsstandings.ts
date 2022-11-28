import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TeamSeasonStatsStandingsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class TeamSeasonStatsStandingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: TeamSeasonStatsStandingsFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class TeamSeasonStatsStandingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamSeasonStatsStandingsPathParams;
}


export class TeamSeasonStatsStandingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teamSeasons?: any[];
}
