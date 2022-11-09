import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayerGameStatsByTeamFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class PlayerGameStatsByTeamPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerGameStatsByTeamFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team" })
  team: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class PlayerGameStatsByTeamRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayerGameStatsByTeamPathParams;
}


export class PlayerGameStatsByTeamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerGames?: any[];

  @Metadata()
  statusCode: number;
}
