import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayerTournamentProjectedStatsWDraftkingsSalariesFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class PlayerTournamentProjectedStatsWDraftkingsSalariesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerTournamentProjectedStatsWDraftkingsSalariesFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tournamentid" })
  tournamentid: string;
}


export class PlayerTournamentProjectedStatsWDraftkingsSalariesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayerTournamentProjectedStatsWDraftkingsSalariesPathParams;
}


export class PlayerTournamentProjectedStatsWDraftkingsSalariesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerTournamentProjections?: any[];

  @Metadata()
  statusCode: number;
}
