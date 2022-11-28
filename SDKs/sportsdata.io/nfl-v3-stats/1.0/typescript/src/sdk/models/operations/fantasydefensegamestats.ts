import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FantasyDefenseGameStatsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class FantasyDefenseGameStatsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: FantasyDefenseGameStatsFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class FantasyDefenseGameStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FantasyDefenseGameStatsPathParams;
}


export class FantasyDefenseGameStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fantasyDefenseGames?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
