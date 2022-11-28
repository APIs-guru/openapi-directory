import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutApiV1GenevaActionsEnvironmentsEnvironmentIdArchivePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class PutApiV1GenevaActionsEnvironmentsEnvironmentIdArchiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutApiV1GenevaActionsEnvironmentsEnvironmentIdArchivePathParams;
}


export class PutApiV1GenevaActionsEnvironmentsEnvironmentIdArchiveResponse extends SpeakeasyBase {
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
