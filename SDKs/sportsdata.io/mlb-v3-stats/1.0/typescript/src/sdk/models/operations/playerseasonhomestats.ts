import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlayerSeasonHomeStatsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class PlayerSeasonHomeStatsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerSeasonHomeStatsFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class PlayerSeasonHomeStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlayerSeasonHomeStatsPathParams;
}


export class PlayerSeasonHomeStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerSeasons?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
