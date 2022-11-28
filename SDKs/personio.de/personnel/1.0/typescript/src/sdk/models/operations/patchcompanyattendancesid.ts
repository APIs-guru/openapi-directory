import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchCompanyAttendancesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PatchCompanyAttendancesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchCompanyAttendancesIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateAttendancePeriodRequest;
}


export class PatchCompanyAttendancesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  response?: shared.Response;

  @SpeakeasyMetadata()
  statusCode: number;
}
