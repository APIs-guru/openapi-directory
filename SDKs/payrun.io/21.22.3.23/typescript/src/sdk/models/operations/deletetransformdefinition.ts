import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteTransformDefinitionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=TransformDefinitionId" })
  transformDefinitionId: string;
}


export class DeleteTransformDefinitionHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class DeleteTransformDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteTransformDefinitionPathParams;

  @Metadata()
  headers: DeleteTransformDefinitionHeaders;
}


export class DeleteTransformDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;
}
