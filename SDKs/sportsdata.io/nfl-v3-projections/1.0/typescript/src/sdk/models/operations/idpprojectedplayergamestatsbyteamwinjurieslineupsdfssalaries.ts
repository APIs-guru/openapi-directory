import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team" })
  team: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesPathParams;
}


export class IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerGameProjections?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
