import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProjectedPlayerSeasonStatsByPlayerFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class ProjectedPlayerSeasonStatsByPlayerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ProjectedPlayerSeasonStatsByPlayerFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playerid" })
  playerid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class ProjectedPlayerSeasonStatsByPlayerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProjectedPlayerSeasonStatsByPlayerPathParams;
}


export class ProjectedPlayerSeasonStatsByPlayerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerSeasonProjection?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
