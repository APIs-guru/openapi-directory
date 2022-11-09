import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CurrentWeekFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class CurrentWeekPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: CurrentWeekFormatEnum;
}


export class CurrentWeekRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CurrentWeekPathParams;
}


export class CurrentWeekResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  currentWeek200ApplicationJsonInteger?: number;

  @Metadata()
  statusCode: number;
}
