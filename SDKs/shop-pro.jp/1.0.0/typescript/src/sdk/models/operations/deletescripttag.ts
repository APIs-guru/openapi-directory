import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteScriptTagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scriptTagId" })
  scriptTagId: number;
}


export class DeleteScriptTagSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteScriptTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteScriptTagPathParams;

  @SpeakeasyMetadata()
  security: DeleteScriptTagSecurity;
}


export class DeleteScriptTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
