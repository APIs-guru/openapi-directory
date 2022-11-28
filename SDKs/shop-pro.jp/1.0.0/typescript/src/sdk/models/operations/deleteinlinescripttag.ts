import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteInlineScriptTagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=inlineScriptTagId" })
  inlineScriptTagId: number;
}


export class DeleteInlineScriptTagSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteInlineScriptTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteInlineScriptTagPathParams;

  @SpeakeasyMetadata()
  security: DeleteInlineScriptTagSecurity;
}


export class DeleteInlineScriptTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
