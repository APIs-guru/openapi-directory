import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchPayCodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=PayCodeId" })
  payCodeId: string;
}


export class PatchPayCodeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PatchPayCodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchPayCodePathParams;

  @Metadata()
  headers: PatchPayCodeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PayCode;
}


export class PatchPayCodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  payCode?: shared.PayCode;

  @Metadata()
  statusCode: number;
}
