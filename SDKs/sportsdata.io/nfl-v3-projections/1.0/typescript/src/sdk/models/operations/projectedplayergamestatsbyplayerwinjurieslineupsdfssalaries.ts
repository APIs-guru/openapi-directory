import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playerid" })
  playerid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams;
}


export class ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerGameProjection?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
