import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ScheduleBySeasonFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class ScheduleBySeasonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ScheduleBySeasonFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class ScheduleBySeasonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ScheduleBySeasonPathParams;
}


export class ScheduleBySeasonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tournaments?: any[];
}
