import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateHookPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=hook_id" })
  hookId: string;
}


export class UpdateHookSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class UpdateHookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateHookPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: shared.CreateHookInput;

  @SpeakeasyMetadata()
  security: UpdateHookSecurity;
}


export class UpdateHookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
