import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class Get1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class Get1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class Get1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: Get1PathParams;

  @SpeakeasyMetadata()
  security: Get1Security;
}


export class Get1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deletionResponse?: shared.DeletionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
