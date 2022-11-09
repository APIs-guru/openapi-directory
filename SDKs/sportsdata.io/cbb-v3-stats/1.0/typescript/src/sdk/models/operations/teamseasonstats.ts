import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TeamSeasonStatsFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class TeamSeasonStatsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: TeamSeasonStatsFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class TeamSeasonStatsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamSeasonStatsPathParams;
}


export class TeamSeasonStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamSeasons?: any[];
}
