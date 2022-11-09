import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ProjectedFantasyDefenseGameStatsWDfsSalariesFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class ProjectedFantasyDefenseGameStatsWDfsSalariesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ProjectedFantasyDefenseGameStatsWDfsSalariesFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class ProjectedFantasyDefenseGameStatsWDfsSalariesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProjectedFantasyDefenseGameStatsWDfsSalariesPathParams;
}


export class ProjectedFantasyDefenseGameStatsWDfsSalariesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fantasyDefenseGameProjections?: any[];

  @Metadata()
  statusCode: number;
}
