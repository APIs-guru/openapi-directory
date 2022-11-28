import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FantasyDefenseSeasonStatsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class FantasyDefenseSeasonStatsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: FantasyDefenseSeasonStatsFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class FantasyDefenseSeasonStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FantasyDefenseSeasonStatsPathParams;
}


export class FantasyDefenseSeasonStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fantasyDefenseSeasons?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
