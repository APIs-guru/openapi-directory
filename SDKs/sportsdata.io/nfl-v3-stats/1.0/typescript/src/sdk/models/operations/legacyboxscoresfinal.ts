import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LegacyBoxScoresFinalFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class LegacyBoxScoresFinalPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: LegacyBoxScoresFinalFormatEnum;
}


export class LegacyBoxScoresFinalRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LegacyBoxScoresFinalPathParams;
}


export class LegacyBoxScoresFinalResponse extends SpeakeasyBase {
  @Metadata()
  boxScores?: any[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
