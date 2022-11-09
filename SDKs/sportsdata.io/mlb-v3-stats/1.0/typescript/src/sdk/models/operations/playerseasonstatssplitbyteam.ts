import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayerSeasonStatsSplitByTeamFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class PlayerSeasonStatsSplitByTeamPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerSeasonStatsSplitByTeamFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class PlayerSeasonStatsSplitByTeamRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayerSeasonStatsSplitByTeamPathParams;
}


export class PlayerSeasonStatsSplitByTeamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerSeasons?: any[];

  @Metadata()
  statusCode: number;
}
