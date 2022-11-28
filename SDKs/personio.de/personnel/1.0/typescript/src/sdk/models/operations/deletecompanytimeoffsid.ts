import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteCompanyTimeOffsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteCompanyTimeOffsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteCompanyTimeOffsIdPathParams;
}


export class DeleteCompanyTimeOffsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  response?: shared.Response;

  @SpeakeasyMetadata()
  statusCode: number;
}
