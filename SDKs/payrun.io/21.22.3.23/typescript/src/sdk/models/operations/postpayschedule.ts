import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostPaySchedulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;
}


export class PostPayScheduleHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PostPayScheduleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostPaySchedulePathParams;

  @Metadata()
  headers: PostPayScheduleHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PaySchedule;
}


export class PostPayScheduleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  link?: shared.Link;

  @Metadata()
  statusCode: number;
}
