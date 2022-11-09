import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchedulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class ScheduleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SchedulePathParams;
}


export class ScheduleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  schedules?: any[];

  @Metadata()
  statusCode: number;
}
