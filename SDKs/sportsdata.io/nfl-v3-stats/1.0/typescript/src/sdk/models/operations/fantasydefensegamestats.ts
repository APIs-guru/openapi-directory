import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FantasyDefenseGameStatsFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class FantasyDefenseGameStatsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: FantasyDefenseGameStatsFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class FantasyDefenseGameStatsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FantasyDefenseGameStatsPathParams;
}


export class FantasyDefenseGameStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fantasyDefenseGames?: any[];

  @Metadata()
  statusCode: number;
}
