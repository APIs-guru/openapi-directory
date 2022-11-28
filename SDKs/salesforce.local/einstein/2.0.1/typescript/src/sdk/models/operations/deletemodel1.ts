import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteModel1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modelId" })
  modelId: string;
}


export class DeleteModel1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class DeleteModel1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteModel1PathParams;

  @SpeakeasyMetadata()
  security: DeleteModel1Security;
}


export class DeleteModel1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deletionResponse?: shared.DeletionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
