import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlayerSeasonStatsByTeamFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class PlayerSeasonStatsByTeamPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerSeasonStatsByTeamFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team" })
  team: string;
}


export class PlayerSeasonStatsByTeamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlayerSeasonStatsByTeamPathParams;
}


export class PlayerSeasonStatsByTeamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerSeasons?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
