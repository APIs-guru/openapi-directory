import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTransformDefinitionFromApplicationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=TransformDefinitionId" })
  transformDefinitionId: string;
}


export class GetTransformDefinitionFromApplicationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetTransformDefinitionFromApplicationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTransformDefinitionFromApplicationPathParams;

  @Metadata()
  headers: GetTransformDefinitionFromApplicationHeaders;
}


export class GetTransformDefinitionFromApplicationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;

  @Metadata()
  transformDefinition?: shared.TransformDefinition;
}
