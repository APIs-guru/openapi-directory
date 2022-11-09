import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BatterVsPitcherStatsFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class BatterVsPitcherStatsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: BatterVsPitcherStatsFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=hitterid" })
  hitterid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pitcherid" })
  pitcherid: string;
}


export class BatterVsPitcherStatsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BatterVsPitcherStatsPathParams;
}


export class BatterVsPitcherStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerSeasons?: any[];

  @Metadata()
  statusCode: number;
}
