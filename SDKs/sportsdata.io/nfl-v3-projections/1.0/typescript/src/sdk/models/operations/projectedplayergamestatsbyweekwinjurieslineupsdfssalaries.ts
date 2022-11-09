import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesPathParams;
}


export class ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerGameProjections?: any[];

  @Metadata()
  statusCode: number;
}
