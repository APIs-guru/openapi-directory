import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayerSeasonRedZoneStatsInsideFiveFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class PlayerSeasonRedZoneStatsInsideFivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerSeasonRedZoneStatsInsideFiveFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class PlayerSeasonRedZoneStatsInsideFiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayerSeasonRedZoneStatsInsideFivePathParams;
}


export class PlayerSeasonRedZoneStatsInsideFiveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerSeasonRedZones?: any[];

  @Metadata()
  statusCode: number;
}
