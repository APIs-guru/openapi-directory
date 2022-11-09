import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TeamGameStatsFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class TeamGameStatsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: TeamGameStatsFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class TeamGameStatsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamGameStatsPathParams;
}


export class TeamGameStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamGames?: any[];
}
