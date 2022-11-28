import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesPathParams;
}


export class IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerGameProjections?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
