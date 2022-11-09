import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayerSeasonRedZoneStatsFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class PlayerSeasonRedZoneStatsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerSeasonRedZoneStatsFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class PlayerSeasonRedZoneStatsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayerSeasonRedZoneStatsPathParams;
}


export class PlayerSeasonRedZoneStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerSeasonRedZones?: any[];

  @Metadata()
  statusCode: number;
}
