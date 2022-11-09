import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNsxManagerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetNsxManagerQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: number;
}


export class GetNsxManagerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetNsxManagerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNsxManagerPathParams;

  @Metadata()
  queryParams: GetNsxManagerQueryParams;

  @Metadata()
  security: GetNsxManagerSecurity;
}


export class GetNsxManagerResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  baseEntity?: shared.BaseEntity;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
