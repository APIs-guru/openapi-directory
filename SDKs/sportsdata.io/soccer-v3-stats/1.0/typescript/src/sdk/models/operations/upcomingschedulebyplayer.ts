import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UpcomingScheduleByPlayerFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class UpcomingScheduleByPlayerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: UpcomingScheduleByPlayerFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playerid" })
  playerid: string;
}


export class UpcomingScheduleByPlayerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpcomingScheduleByPlayerPathParams;
}


export class UpcomingScheduleByPlayerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  games?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
