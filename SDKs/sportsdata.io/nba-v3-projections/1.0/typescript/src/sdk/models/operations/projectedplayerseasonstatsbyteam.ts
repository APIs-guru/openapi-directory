import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ProjectedPlayerSeasonStatsByTeamFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class ProjectedPlayerSeasonStatsByTeamPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ProjectedPlayerSeasonStatsByTeamFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team" })
  team: string;
}


export class ProjectedPlayerSeasonStatsByTeamRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProjectedPlayerSeasonStatsByTeamPathParams;
}


export class ProjectedPlayerSeasonStatsByTeamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerSeasonProjections?: any[];

  @Metadata()
  statusCode: number;
}
