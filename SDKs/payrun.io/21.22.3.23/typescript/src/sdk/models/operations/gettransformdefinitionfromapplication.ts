import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTransformDefinitionFromApplicationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TransformDefinitionId" })
  transformDefinitionId: string;
}


export class GetTransformDefinitionFromApplicationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetTransformDefinitionFromApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTransformDefinitionFromApplicationPathParams;

  @SpeakeasyMetadata()
  headers: GetTransformDefinitionFromApplicationHeaders;
}


export class GetTransformDefinitionFromApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  transformDefinition?: shared.TransformDefinition;
}
