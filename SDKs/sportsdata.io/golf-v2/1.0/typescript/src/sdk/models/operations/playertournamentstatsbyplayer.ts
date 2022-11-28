import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlayerTournamentStatsByPlayerFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class PlayerTournamentStatsByPlayerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerTournamentStatsByPlayerFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playerid" })
  playerid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tournamentid" })
  tournamentid: string;
}


export class PlayerTournamentStatsByPlayerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlayerTournamentStatsByPlayerPathParams;
}


export class PlayerTournamentStatsByPlayerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerTournament?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
