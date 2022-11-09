import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteCompanyAttendancesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteCompanyAttendancesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteCompanyAttendancesIdPathParams;
}


export class DeleteCompanyAttendancesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  response?: shared.Response;

  @Metadata()
  statusCode: number;
}
