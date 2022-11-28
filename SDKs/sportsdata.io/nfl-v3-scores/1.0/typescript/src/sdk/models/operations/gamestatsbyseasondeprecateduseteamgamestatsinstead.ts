import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadPathParams;
}


export class GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  games?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
