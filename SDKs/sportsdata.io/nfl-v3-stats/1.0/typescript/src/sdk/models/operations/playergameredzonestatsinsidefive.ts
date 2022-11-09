import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayerGameRedZoneStatsInsideFiveFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class PlayerGameRedZoneStatsInsideFivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerGameRedZoneStatsInsideFiveFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class PlayerGameRedZoneStatsInsideFiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayerGameRedZoneStatsInsideFivePathParams;
}


export class PlayerGameRedZoneStatsInsideFiveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerGameRedZones?: any[];

  @Metadata()
  statusCode: number;
}
