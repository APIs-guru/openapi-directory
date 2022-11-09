import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LegacyBoxScoresLiveFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class LegacyBoxScoresLivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: LegacyBoxScoresLiveFormatEnum;
}


export class LegacyBoxScoresLiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LegacyBoxScoresLivePathParams;
}


export class LegacyBoxScoresLiveResponse extends SpeakeasyBase {
  @Metadata()
  boxScores?: any[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
