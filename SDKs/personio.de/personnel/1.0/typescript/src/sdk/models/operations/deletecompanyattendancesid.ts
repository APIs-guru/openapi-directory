import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteCompanyAttendancesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteCompanyAttendancesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteCompanyAttendancesIdPathParams;
}


export class DeleteCompanyAttendancesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  response?: shared.Response;

  @SpeakeasyMetadata()
  statusCode: number;
}
