import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FantasyDefenseSeasonStatsFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class FantasyDefenseSeasonStatsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: FantasyDefenseSeasonStatsFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class FantasyDefenseSeasonStatsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FantasyDefenseSeasonStatsPathParams;
}


export class FantasyDefenseSeasonStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fantasyDefenseSeasons?: any[];

  @Metadata()
  statusCode: number;
}
