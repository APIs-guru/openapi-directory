import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LegacyBoxScoresLiveFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class LegacyBoxScoresLivePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: LegacyBoxScoresLiveFormatEnum;
}


export class LegacyBoxScoresLiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LegacyBoxScoresLivePathParams;
}


export class LegacyBoxScoresLiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  boxScores?: any[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
