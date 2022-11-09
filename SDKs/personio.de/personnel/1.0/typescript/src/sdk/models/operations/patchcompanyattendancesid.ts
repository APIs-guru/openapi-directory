import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchCompanyAttendancesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PatchCompanyAttendancesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchCompanyAttendancesIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateAttendancePeriodRequest;
}


export class PatchCompanyAttendancesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  response?: shared.Response;

  @Metadata()
  statusCode: number;
}
