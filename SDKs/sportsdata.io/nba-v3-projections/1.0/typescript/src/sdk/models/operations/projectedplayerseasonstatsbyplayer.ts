import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ProjectedPlayerSeasonStatsByPlayerFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class ProjectedPlayerSeasonStatsByPlayerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ProjectedPlayerSeasonStatsByPlayerFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=playerid" })
  playerid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class ProjectedPlayerSeasonStatsByPlayerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProjectedPlayerSeasonStatsByPlayerPathParams;
}


export class ProjectedPlayerSeasonStatsByPlayerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerSeasonProjection?: any;

  @Metadata()
  statusCode: number;
}
