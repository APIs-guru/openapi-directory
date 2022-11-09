import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ProjectedPlayerSeasonStatsByTeamWByeWeekAdpFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class ProjectedPlayerSeasonStatsByTeamWByeWeekAdpPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ProjectedPlayerSeasonStatsByTeamWByeWeekAdpFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team" })
  team: string;
}


export class ProjectedPlayerSeasonStatsByTeamWByeWeekAdpRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProjectedPlayerSeasonStatsByTeamWByeWeekAdpPathParams;
}


export class ProjectedPlayerSeasonStatsByTeamWByeWeekAdpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerSeasonProjections?: any[];

  @Metadata()
  statusCode: number;
}
