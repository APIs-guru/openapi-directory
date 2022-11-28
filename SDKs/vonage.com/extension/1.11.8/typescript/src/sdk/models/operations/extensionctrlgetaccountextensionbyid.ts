import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExtensionCtrlGetAccountExtensionByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account_id" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=extension_number" })
  extensionNumber: number;
}


export class ExtensionCtrlGetAccountExtensionByIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ExtensionCtrlGetAccountExtensionByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExtensionCtrlGetAccountExtensionByIdPathParams;

  @SpeakeasyMetadata()
  security: ExtensionCtrlGetAccountExtensionByIdSecurity;
}


export class ExtensionCtrlGetAccountExtensionByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  endUserRouteHalResponse?: shared.EndUserRouteHalResponse;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
