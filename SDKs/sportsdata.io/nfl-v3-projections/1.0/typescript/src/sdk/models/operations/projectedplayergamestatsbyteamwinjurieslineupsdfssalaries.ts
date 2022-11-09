import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team" })
  team: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesPathParams;
}


export class ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerGameProjections?: any[];

  @Metadata()
  statusCode: number;
}
