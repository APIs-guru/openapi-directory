import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum StandingsFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class StandingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: StandingsFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class StandingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StandingsPathParams;
}


export class StandingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  standings?: any[];

  @Metadata()
  statusCode: number;
}
