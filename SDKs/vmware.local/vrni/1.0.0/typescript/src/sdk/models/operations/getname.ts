import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetNameQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: number;
}


export class GetNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNamePathParams;

  @SpeakeasyMetadata()
  queryParams: GetNameQueryParams;

  @SpeakeasyMetadata()
  security: GetNameSecurity;
}


export class GetNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  entityName?: shared.EntityName;

  @SpeakeasyMetadata()
  statusCode: number;
}
