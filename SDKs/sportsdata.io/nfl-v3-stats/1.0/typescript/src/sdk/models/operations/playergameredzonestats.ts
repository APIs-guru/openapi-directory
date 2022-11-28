import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlayerGameRedZoneStatsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class PlayerGameRedZoneStatsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerGameRedZoneStatsFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class PlayerGameRedZoneStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlayerGameRedZoneStatsPathParams;
}


export class PlayerGameRedZoneStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerGameRedZones?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
