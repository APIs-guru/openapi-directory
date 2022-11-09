import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TeamGameStatsByWeekFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class TeamGameStatsByWeekPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: TeamGameStatsByWeekFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class TeamGameStatsByWeekRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamGameStatsByWeekPathParams;
}


export class TeamGameStatsByWeekResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamGames?: any[];
}
