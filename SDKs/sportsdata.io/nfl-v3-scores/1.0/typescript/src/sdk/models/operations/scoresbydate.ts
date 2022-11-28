import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ScoresByDateFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class ScoresByDatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ScoresByDateFormatEnum;
}


export class ScoresByDateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ScoresByDatePathParams;
}


export class ScoresByDateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  scores?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
