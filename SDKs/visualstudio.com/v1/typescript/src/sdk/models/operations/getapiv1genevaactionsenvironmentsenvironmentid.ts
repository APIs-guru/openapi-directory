import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiV1GenevaActionsEnvironmentsEnvironmentIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class GetApiV1GenevaActionsEnvironmentsEnvironmentIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiV1GenevaActionsEnvironmentsEnvironmentIdPathParams;
}


export class GetApiV1GenevaActionsEnvironmentsEnvironmentIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  cloudEnvironmentResult?: shared.CloudEnvironmentResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
