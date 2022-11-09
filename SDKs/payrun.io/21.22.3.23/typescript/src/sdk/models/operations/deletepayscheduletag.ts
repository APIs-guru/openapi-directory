import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeletePayScheduleTagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=PayScheduleId" })
  payScheduleId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=TagId" })
  tagId: string;
}


export class DeletePayScheduleTagHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class DeletePayScheduleTagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeletePayScheduleTagPathParams;

  @Metadata()
  headers: DeletePayScheduleTagHeaders;
}


export class DeletePayScheduleTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;
}
