import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutApiV1GenevaActionsEnvironmentsEnvironmentIdArchivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class PutApiV1GenevaActionsEnvironmentsEnvironmentIdArchiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutApiV1GenevaActionsEnvironmentsEnvironmentIdArchivePathParams;
}


export class PutApiV1GenevaActionsEnvironmentsEnvironmentIdArchiveResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  cloudEnvironmentResult?: shared.CloudEnvironmentResult;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
