import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ScoresByDateFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class ScoresByDatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ScoresByDateFormatEnum;
}


export class ScoresByDateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ScoresByDatePathParams;
}


export class ScoresByDateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  scores?: any[];

  @Metadata()
  statusCode: number;
}
