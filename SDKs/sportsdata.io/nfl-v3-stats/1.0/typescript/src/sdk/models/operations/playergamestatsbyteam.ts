import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlayerGameStatsByTeamFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class PlayerGameStatsByTeamPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerGameStatsByTeamFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team" })
  team: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class PlayerGameStatsByTeamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlayerGameStatsByTeamPathParams;
}


export class PlayerGameStatsByTeamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerGames?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
