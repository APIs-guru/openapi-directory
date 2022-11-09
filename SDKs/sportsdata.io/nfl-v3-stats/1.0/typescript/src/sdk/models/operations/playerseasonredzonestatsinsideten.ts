import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayerSeasonRedZoneStatsInsideTenFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class PlayerSeasonRedZoneStatsInsideTenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerSeasonRedZoneStatsInsideTenFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class PlayerSeasonRedZoneStatsInsideTenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayerSeasonRedZoneStatsInsideTenPathParams;
}


export class PlayerSeasonRedZoneStatsInsideTenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerSeasonRedZones?: any[];

  @Metadata()
  statusCode: number;
}
