import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlayerSeasonThirdDownStatsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class PlayerSeasonThirdDownStatsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerSeasonThirdDownStatsFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class PlayerSeasonThirdDownStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlayerSeasonThirdDownStatsPathParams;
}


export class PlayerSeasonThirdDownStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerSeasonThirdDowns?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
