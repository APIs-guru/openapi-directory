import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WeekLastCompletedFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class WeekLastCompletedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: WeekLastCompletedFormatEnum;
}


export class WeekLastCompletedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: WeekLastCompletedPathParams;
}


export class WeekLastCompletedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  weekLastCompleted200ApplicationJsonInteger?: number;
}
