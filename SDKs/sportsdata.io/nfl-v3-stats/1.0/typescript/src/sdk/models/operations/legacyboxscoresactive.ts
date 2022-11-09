import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LegacyBoxScoresActiveFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class LegacyBoxScoresActivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: LegacyBoxScoresActiveFormatEnum;
}


export class LegacyBoxScoresActiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LegacyBoxScoresActivePathParams;
}


export class LegacyBoxScoresActiveResponse extends SpeakeasyBase {
  @Metadata()
  boxScores?: any[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
