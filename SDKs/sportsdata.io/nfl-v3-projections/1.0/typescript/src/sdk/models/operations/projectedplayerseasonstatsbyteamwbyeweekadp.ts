import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProjectedPlayerSeasonStatsByTeamWByeWeekAdpFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class ProjectedPlayerSeasonStatsByTeamWByeWeekAdpPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ProjectedPlayerSeasonStatsByTeamWByeWeekAdpFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team" })
  team: string;
}


export class ProjectedPlayerSeasonStatsByTeamWByeWeekAdpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProjectedPlayerSeasonStatsByTeamWByeWeekAdpPathParams;
}


export class ProjectedPlayerSeasonStatsByTeamWByeWeekAdpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerSeasonProjections?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
