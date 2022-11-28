import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GameStatsByWeekDeprecatedUseTeamGameStatsInsteadFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class GameStatsByWeekDeprecatedUseTeamGameStatsInsteadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GameStatsByWeekDeprecatedUseTeamGameStatsInsteadFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class GameStatsByWeekDeprecatedUseTeamGameStatsInsteadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GameStatsByWeekDeprecatedUseTeamGameStatsInsteadPathParams;
}


export class GameStatsByWeekDeprecatedUseTeamGameStatsInsteadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  games?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
