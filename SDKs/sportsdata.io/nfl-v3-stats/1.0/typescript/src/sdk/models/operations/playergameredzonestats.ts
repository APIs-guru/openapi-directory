import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayerGameRedZoneStatsFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class PlayerGameRedZoneStatsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerGameRedZoneStatsFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class PlayerGameRedZoneStatsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayerGameRedZoneStatsPathParams;
}


export class PlayerGameRedZoneStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerGameRedZones?: any[];

  @Metadata()
  statusCode: number;
}
