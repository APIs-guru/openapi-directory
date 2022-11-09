import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteModelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=modelId" })
  modelId: string;
}


export class DeleteModelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class DeleteModelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteModelPathParams;

  @Metadata()
  security: DeleteModelSecurity;
}


export class DeleteModelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deletionResponse?: shared.DeletionResponse;

  @Metadata()
  statusCode: number;
}
