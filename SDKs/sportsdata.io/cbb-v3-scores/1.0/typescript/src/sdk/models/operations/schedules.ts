import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SchedulesFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class SchedulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: SchedulesFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class SchedulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SchedulesPathParams;
}


export class SchedulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  games?: any[];

  @Metadata()
  statusCode: number;
}
