import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UpcomingScheduleByPlayerFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class UpcomingScheduleByPlayerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: UpcomingScheduleByPlayerFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=playerid" })
  playerid: string;
}


export class UpcomingScheduleByPlayerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpcomingScheduleByPlayerPathParams;
}


export class UpcomingScheduleByPlayerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  games?: any[];

  @Metadata()
  statusCode: number;
}
