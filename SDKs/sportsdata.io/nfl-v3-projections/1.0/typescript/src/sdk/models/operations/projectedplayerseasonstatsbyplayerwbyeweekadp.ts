import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playerid" })
  playerid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpPathParams;
}


export class ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerSeasonProjection?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
