import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVnicPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetVnicQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: number;
}


export class GetVnicSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetVnicRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVnicPathParams;

  @Metadata()
  queryParams: GetVnicQueryParams;

  @Metadata()
  security: GetVnicSecurity;
}


export class GetVnicResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  baseVnic?: shared.BaseVnic;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
