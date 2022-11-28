import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SchedulesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class SchedulesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: SchedulesFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class SchedulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SchedulesPathParams;
}


export class SchedulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  games?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
