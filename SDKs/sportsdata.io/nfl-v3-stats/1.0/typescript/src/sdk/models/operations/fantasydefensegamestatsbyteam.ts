import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FantasyDefenseGameStatsByTeamFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class FantasyDefenseGameStatsByTeamPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: FantasyDefenseGameStatsByTeamFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team" })
  team: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class FantasyDefenseGameStatsByTeamRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FantasyDefenseGameStatsByTeamPathParams;
}


export class FantasyDefenseGameStatsByTeamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fantasyDefenseGame?: any;

  @Metadata()
  statusCode: number;
}
