import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WeekLastCompletedFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class WeekLastCompletedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: WeekLastCompletedFormatEnum;
}


export class WeekLastCompletedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: WeekLastCompletedPathParams;
}


export class WeekLastCompletedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  weekLastCompleted200ApplicationJsonInteger?: number;
}
