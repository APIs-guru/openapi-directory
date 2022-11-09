import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadPathParams;
}


export class GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  games?: any[];

  @Metadata()
  statusCode: number;
}
