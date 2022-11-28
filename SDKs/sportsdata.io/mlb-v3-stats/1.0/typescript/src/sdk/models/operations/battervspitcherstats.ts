import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BatterVsPitcherStatsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class BatterVsPitcherStatsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: BatterVsPitcherStatsFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=hitterid" })
  hitterid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pitcherid" })
  pitcherid: string;
}


export class BatterVsPitcherStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BatterVsPitcherStatsPathParams;
}


export class BatterVsPitcherStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerSeasons?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
