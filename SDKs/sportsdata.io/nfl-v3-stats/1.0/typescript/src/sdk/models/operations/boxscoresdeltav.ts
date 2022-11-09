import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BoxScoresDeltaVFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}

export enum BoxScoresDeltaVPlayerstoincludeEnum {
    All = "all"
,    Fantasy = "fantasy"
,    Idp = "idp"
}


export class BoxScoresDeltaVPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: BoxScoresDeltaVFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=minutes" })
  minutes: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=playerstoinclude" })
  playerstoinclude: BoxScoresDeltaVPlayerstoincludeEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class BoxScoresDeltaVRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BoxScoresDeltaVPathParams;
}


export class BoxScoresDeltaVResponse extends SpeakeasyBase {
  @Metadata()
  boxScoreV3s?: any[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
