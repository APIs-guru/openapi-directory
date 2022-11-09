import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutPayCodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=PayCodeId" })
  payCodeId: string;
}


export class PutPayCodeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PutPayCodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutPayCodePathParams;

  @Metadata()
  headers: PutPayCodeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PayCode;
}


export class PutPayCodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  payCode?: shared.PayCode;

  @Metadata()
  statusCode: number;
}
