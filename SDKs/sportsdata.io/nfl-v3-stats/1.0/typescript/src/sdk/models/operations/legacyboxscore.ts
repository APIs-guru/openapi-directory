import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LegacyBoxScoreFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class LegacyBoxScorePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: LegacyBoxScoreFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=hometeam" })
  hometeam: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class LegacyBoxScoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LegacyBoxScorePathParams;
}


export class LegacyBoxScoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  boxScore?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
