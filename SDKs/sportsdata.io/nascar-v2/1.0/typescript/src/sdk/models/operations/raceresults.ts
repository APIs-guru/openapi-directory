import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RaceResultsFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class RaceResultsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: RaceResultsFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=raceid" })
  raceid: string;
}


export class RaceResultsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RaceResultsPathParams;
}


export class RaceResultsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  raceResult?: any;

  @Metadata()
  statusCode: number;
}
