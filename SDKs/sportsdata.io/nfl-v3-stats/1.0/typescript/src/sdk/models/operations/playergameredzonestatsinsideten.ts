import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlayerGameRedZoneStatsInsideTenFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class PlayerGameRedZoneStatsInsideTenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerGameRedZoneStatsInsideTenFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class PlayerGameRedZoneStatsInsideTenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlayerGameRedZoneStatsInsideTenPathParams;
}


export class PlayerGameRedZoneStatsInsideTenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerGameRedZones?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
