import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayerTournamentStatsByPlayerFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class PlayerTournamentStatsByPlayerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerTournamentStatsByPlayerFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=playerid" })
  playerid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tournamentid" })
  tournamentid: string;
}


export class PlayerTournamentStatsByPlayerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayerTournamentStatsByPlayerPathParams;
}


export class PlayerTournamentStatsByPlayerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerTournament?: any;

  @Metadata()
  statusCode: number;
}
