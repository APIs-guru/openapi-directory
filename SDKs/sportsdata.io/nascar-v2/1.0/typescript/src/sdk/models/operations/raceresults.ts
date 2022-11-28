import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RaceResultsFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class RaceResultsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: RaceResultsFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=raceid" })
  raceid: string;
}


export class RaceResultsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RaceResultsPathParams;
}


export class RaceResultsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  raceResult?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
