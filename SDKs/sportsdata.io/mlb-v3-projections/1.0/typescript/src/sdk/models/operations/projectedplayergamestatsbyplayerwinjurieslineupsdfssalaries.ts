import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=playerid" })
  playerid: string;
}


export class ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams;
}


export class ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerGameProjections?: any[];

  @Metadata()
  statusCode: number;
}
