import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlayerTournamentProjectedStatsWDraftkingsSalariesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class PlayerTournamentProjectedStatsWDraftkingsSalariesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerTournamentProjectedStatsWDraftkingsSalariesFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tournamentid" })
  tournamentid: string;
}


export class PlayerTournamentProjectedStatsWDraftkingsSalariesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlayerTournamentProjectedStatsWDraftkingsSalariesPathParams;
}


export class PlayerTournamentProjectedStatsWDraftkingsSalariesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerTournamentProjections?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
