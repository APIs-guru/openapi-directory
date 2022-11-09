import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateHookPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=hook_id" })
  hookId: string;
}


export class UpdateHookSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class UpdateHookRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateHookPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: shared.CreateHookInput;

  @Metadata()
  security: UpdateHookSecurity;
}


export class UpdateHookResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: any;

  @Metadata()
  statusCode: number;
}
