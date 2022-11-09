import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ProjectedPlayerSeasonStatsFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class ProjectedPlayerSeasonStatsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ProjectedPlayerSeasonStatsFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class ProjectedPlayerSeasonStatsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProjectedPlayerSeasonStatsPathParams;
}


export class ProjectedPlayerSeasonStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerSeasonProjections?: any[];

  @Metadata()
  statusCode: number;
}
