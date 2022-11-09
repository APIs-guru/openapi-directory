import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FantasyDefenseSeasonStatsByTeamFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class FantasyDefenseSeasonStatsByTeamPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: FantasyDefenseSeasonStatsByTeamFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team" })
  team: string;
}


export class FantasyDefenseSeasonStatsByTeamRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FantasyDefenseSeasonStatsByTeamPathParams;
}


export class FantasyDefenseSeasonStatsByTeamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fantasyDefenseSeason?: any;

  @Metadata()
  statusCode: number;
}
