import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteModelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modelId" })
  modelId: string;
}


export class DeleteModelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class DeleteModelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteModelPathParams;

  @SpeakeasyMetadata()
  security: DeleteModelSecurity;
}


export class DeleteModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deletionResponse?: shared.DeletionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
