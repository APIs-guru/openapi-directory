import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetNameQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: number;
}


export class GetNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNamePathParams;

  @Metadata()
  queryParams: GetNameQueryParams;

  @Metadata()
  security: GetNameSecurity;
}


export class GetNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  entityName?: shared.EntityName;

  @Metadata()
  statusCode: number;
}
