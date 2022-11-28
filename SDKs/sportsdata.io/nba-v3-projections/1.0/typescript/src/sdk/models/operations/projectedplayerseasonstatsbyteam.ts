import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProjectedPlayerSeasonStatsByTeamFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class ProjectedPlayerSeasonStatsByTeamPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ProjectedPlayerSeasonStatsByTeamFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team" })
  team: string;
}


export class ProjectedPlayerSeasonStatsByTeamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProjectedPlayerSeasonStatsByTeamPathParams;
}


export class ProjectedPlayerSeasonStatsByTeamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerSeasonProjections?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
