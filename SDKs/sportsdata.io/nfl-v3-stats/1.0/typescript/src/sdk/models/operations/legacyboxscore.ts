import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LegacyBoxScoreFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class LegacyBoxScorePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: LegacyBoxScoreFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=hometeam" })
  hometeam: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class LegacyBoxScoreRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LegacyBoxScorePathParams;
}


export class LegacyBoxScoreResponse extends SpeakeasyBase {
  @Metadata()
  boxScore?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
