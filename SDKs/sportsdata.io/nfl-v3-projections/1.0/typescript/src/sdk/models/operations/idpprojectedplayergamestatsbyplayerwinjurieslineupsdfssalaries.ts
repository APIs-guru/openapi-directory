import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playerid" })
  playerid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams;
}


export class IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerGameProjection?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
