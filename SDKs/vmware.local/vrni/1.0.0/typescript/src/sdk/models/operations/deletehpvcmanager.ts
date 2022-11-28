import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteHpvcManagerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteHpvcManagerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class DeleteHpvcManagerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteHpvcManagerPathParams;

  @SpeakeasyMetadata()
  security: DeleteHpvcManagerSecurity;
}


export class DeleteHpvcManagerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
