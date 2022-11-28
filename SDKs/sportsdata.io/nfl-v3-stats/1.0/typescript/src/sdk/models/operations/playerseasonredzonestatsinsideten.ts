import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlayerSeasonRedZoneStatsInsideTenFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class PlayerSeasonRedZoneStatsInsideTenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerSeasonRedZoneStatsInsideTenFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class PlayerSeasonRedZoneStatsInsideTenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlayerSeasonRedZoneStatsInsideTenPathParams;
}


export class PlayerSeasonRedZoneStatsInsideTenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerSeasonRedZones?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
