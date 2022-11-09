import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LineCombinationsBySeasonFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class LineCombinationsBySeasonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: LineCombinationsBySeasonFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class LineCombinationsBySeasonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LineCombinationsBySeasonPathParams;
}


export class LineCombinationsBySeasonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamLines?: any[];
}
