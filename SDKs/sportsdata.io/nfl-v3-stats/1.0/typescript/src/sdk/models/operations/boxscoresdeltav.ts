import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BoxScoresDeltaVFormatEnum {
    Xml = "XML",
    Json = "JSON"
}

export enum BoxScoresDeltaVPlayerstoincludeEnum {
    All = "all",
    Fantasy = "fantasy",
    Idp = "idp"
}


export class BoxScoresDeltaVPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: BoxScoresDeltaVFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=minutes" })
  minutes: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playerstoinclude" })
  playerstoinclude: BoxScoresDeltaVPlayerstoincludeEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class BoxScoresDeltaVRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BoxScoresDeltaVPathParams;
}


export class BoxScoresDeltaVResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  boxScoreV3s?: any[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
