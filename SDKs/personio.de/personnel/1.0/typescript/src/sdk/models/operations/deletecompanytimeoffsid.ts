import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteCompanyTimeOffsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteCompanyTimeOffsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteCompanyTimeOffsIdPathParams;
}


export class DeleteCompanyTimeOffsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  response?: shared.Response;

  @Metadata()
  statusCode: number;
}
