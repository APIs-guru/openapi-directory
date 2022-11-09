import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayerSeasonSplitStatsFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}

export enum PlayerSeasonSplitStatsSplitEnum {
    L = "L"
,    R = "R"
,    S = "S"
}


export class PlayerSeasonSplitStatsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerSeasonSplitStatsFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=split" })
  split: PlayerSeasonSplitStatsSplitEnum;
}


export class PlayerSeasonSplitStatsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayerSeasonSplitStatsPathParams;
}


export class PlayerSeasonSplitStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerSeasons?: any[];

  @Metadata()
  statusCode: number;
}
