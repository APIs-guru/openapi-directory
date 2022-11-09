import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ScoresBySeasonFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class ScoresBySeasonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ScoresBySeasonFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class ScoresBySeasonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ScoresBySeasonPathParams;
}


export class ScoresBySeasonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  scores?: any[];

  @Metadata()
  statusCode: number;
}
