import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlayerSeasonRedZoneStatsInsideFiveFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class PlayerSeasonRedZoneStatsInsideFivePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerSeasonRedZoneStatsInsideFiveFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class PlayerSeasonRedZoneStatsInsideFiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlayerSeasonRedZoneStatsInsideFivePathParams;
}


export class PlayerSeasonRedZoneStatsInsideFiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerSeasonRedZones?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
