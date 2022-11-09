import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeletePayCodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=PayCodeId" })
  payCodeId: string;
}


export class DeletePayCodeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class DeletePayCodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeletePayCodePathParams;

  @Metadata()
  headers: DeletePayCodeHeaders;
}


export class DeletePayCodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;
}
