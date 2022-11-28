import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlayerSeasonSplitStatsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}

export enum PlayerSeasonSplitStatsSplitEnum {
    L = "L",
    R = "R",
    S = "S"
}


export class PlayerSeasonSplitStatsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerSeasonSplitStatsFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=split" })
  split: PlayerSeasonSplitStatsSplitEnum;
}


export class PlayerSeasonSplitStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlayerSeasonSplitStatsPathParams;
}


export class PlayerSeasonSplitStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerSeasons?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
