import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVmPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetVmQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: number;
}


export class GetVmSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetVmRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVmPathParams;

  @Metadata()
  queryParams: GetVmQueryParams;

  @Metadata()
  security: GetVmSecurity;
}


export class GetVmResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  baseVirtualMachine?: shared.BaseVirtualMachine;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
