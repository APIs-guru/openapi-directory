import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TeamSeasonStatsStandingsFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class TeamSeasonStatsStandingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: TeamSeasonStatsStandingsFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class TeamSeasonStatsStandingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamSeasonStatsStandingsPathParams;
}


export class TeamSeasonStatsStandingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamSeasons?: any[];
}
