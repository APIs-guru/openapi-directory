import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlayerGameRedZoneStatsInsideFiveFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class PlayerGameRedZoneStatsInsideFivePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerGameRedZoneStatsInsideFiveFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class PlayerGameRedZoneStatsInsideFiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlayerGameRedZoneStatsInsideFivePathParams;
}


export class PlayerGameRedZoneStatsInsideFiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerGameRedZones?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
