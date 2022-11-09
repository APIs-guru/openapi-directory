import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExtensionCtrlGetAccountExtensionByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=account_id" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=extension_number" })
  extensionNumber: number;
}


export class ExtensionCtrlGetAccountExtensionByIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ExtensionCtrlGetAccountExtensionByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExtensionCtrlGetAccountExtensionByIdPathParams;

  @Metadata()
  security: ExtensionCtrlGetAccountExtensionByIdSecurity;
}


export class ExtensionCtrlGetAccountExtensionByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  endUserRouteHalResponse?: shared.EndUserRouteHalResponse;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
