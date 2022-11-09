import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayerGameRedZoneStatsInsideTenFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class PlayerGameRedZoneStatsInsideTenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerGameRedZoneStatsInsideTenFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class PlayerGameRedZoneStatsInsideTenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayerGameRedZoneStatsInsideTenPathParams;
}


export class PlayerGameRedZoneStatsInsideTenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerGameRedZones?: any[];

  @Metadata()
  statusCode: number;
}
