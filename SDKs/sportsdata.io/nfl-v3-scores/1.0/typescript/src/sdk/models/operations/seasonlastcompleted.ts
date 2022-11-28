import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SeasonLastCompletedFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class SeasonLastCompletedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: SeasonLastCompletedFormatEnum;
}


export class SeasonLastCompletedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SeasonLastCompletedPathParams;
}


export class SeasonLastCompletedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  seasonLastCompleted200ApplicationJsonInteger?: number;

  @SpeakeasyMetadata()
  statusCode: number;
}
