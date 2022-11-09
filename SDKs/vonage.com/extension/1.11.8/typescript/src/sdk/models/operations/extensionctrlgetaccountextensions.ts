import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExtensionCtrlGetAccountExtensionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=account_id" })
  accountId: string;
}


export class ExtensionCtrlGetAccountExtensionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=location_id" })
  locationId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login_name" })
  loginName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=phone_number" })
  phoneNumber?: string;
}


export class ExtensionCtrlGetAccountExtensionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ExtensionCtrlGetAccountExtensionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExtensionCtrlGetAccountExtensionsPathParams;

  @Metadata()
  queryParams: ExtensionCtrlGetAccountExtensionsQueryParams;

  @Metadata()
  security: ExtensionCtrlGetAccountExtensionsSecurity;
}


export class ExtensionCtrlGetAccountExtensionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  endUserRouteHalResponse?: shared.EndUserRouteHalResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationErrorsResponse?: shared.ValidationErrorsResponse;
}
