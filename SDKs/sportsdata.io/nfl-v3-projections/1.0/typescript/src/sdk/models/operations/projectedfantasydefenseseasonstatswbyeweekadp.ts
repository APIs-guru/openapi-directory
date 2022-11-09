import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ProjectedFantasyDefenseSeasonStatsWByeWeekAdpFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class ProjectedFantasyDefenseSeasonStatsWByeWeekAdpPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ProjectedFantasyDefenseSeasonStatsWByeWeekAdpFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class ProjectedFantasyDefenseSeasonStatsWByeWeekAdpRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProjectedFantasyDefenseSeasonStatsWByeWeekAdpPathParams;
}


export class ProjectedFantasyDefenseSeasonStatsWByeWeekAdpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fantasyDefenseSeasonProjections?: any[];

  @Metadata()
  statusCode: number;
}
