import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlayerSeasonRedZoneStatsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class PlayerSeasonRedZoneStatsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerSeasonRedZoneStatsFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class PlayerSeasonRedZoneStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlayerSeasonRedZoneStatsPathParams;
}


export class PlayerSeasonRedZoneStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerSeasonRedZones?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
