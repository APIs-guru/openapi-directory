import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExtensionCtrlGetAccountExtensionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account_id" })
  accountId: string;
}


export class ExtensionCtrlGetAccountExtensionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location_id" })
  locationId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login_name" })
  loginName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=phone_number" })
  phoneNumber?: string;
}


export class ExtensionCtrlGetAccountExtensionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ExtensionCtrlGetAccountExtensionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExtensionCtrlGetAccountExtensionsPathParams;

  @SpeakeasyMetadata()
  queryParams: ExtensionCtrlGetAccountExtensionsQueryParams;

  @SpeakeasyMetadata()
  security: ExtensionCtrlGetAccountExtensionsSecurity;
}


export class ExtensionCtrlGetAccountExtensionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  endUserRouteHalResponse?: shared.EndUserRouteHalResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationErrorsResponse?: shared.ValidationErrorsResponse;
}
