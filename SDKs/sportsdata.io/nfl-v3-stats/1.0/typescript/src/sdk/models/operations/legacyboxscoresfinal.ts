import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LegacyBoxScoresFinalFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class LegacyBoxScoresFinalPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: LegacyBoxScoresFinalFormatEnum;
}


export class LegacyBoxScoresFinalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LegacyBoxScoresFinalPathParams;
}


export class LegacyBoxScoresFinalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  boxScores?: any[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
