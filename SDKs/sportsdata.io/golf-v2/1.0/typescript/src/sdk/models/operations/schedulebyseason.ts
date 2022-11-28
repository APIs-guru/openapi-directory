import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ScheduleBySeasonFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class ScheduleBySeasonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ScheduleBySeasonFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class ScheduleBySeasonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ScheduleBySeasonPathParams;
}


export class ScheduleBySeasonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tournaments?: any[];
}
