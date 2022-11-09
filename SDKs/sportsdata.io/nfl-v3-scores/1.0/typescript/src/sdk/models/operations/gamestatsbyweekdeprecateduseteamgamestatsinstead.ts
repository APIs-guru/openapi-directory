import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GameStatsByWeekDeprecatedUseTeamGameStatsInsteadFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class GameStatsByWeekDeprecatedUseTeamGameStatsInsteadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GameStatsByWeekDeprecatedUseTeamGameStatsInsteadFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class GameStatsByWeekDeprecatedUseTeamGameStatsInsteadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GameStatsByWeekDeprecatedUseTeamGameStatsInsteadPathParams;
}


export class GameStatsByWeekDeprecatedUseTeamGameStatsInsteadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  games?: any[];

  @Metadata()
  statusCode: number;
}
