import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteModel1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=modelId" })
  modelId: string;
}


export class DeleteModel1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class DeleteModel1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteModel1PathParams;

  @Metadata()
  security: DeleteModel1Security;
}


export class DeleteModel1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deletionResponse?: shared.DeletionResponse;

  @Metadata()
  statusCode: number;
}
