import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team" })
  team: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesPathParams;
}


export class ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerGameProjections?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
