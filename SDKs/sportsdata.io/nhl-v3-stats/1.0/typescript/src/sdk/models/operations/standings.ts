import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum StandingsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class StandingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: StandingsFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class StandingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StandingsPathParams;
}


export class StandingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  standings?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
