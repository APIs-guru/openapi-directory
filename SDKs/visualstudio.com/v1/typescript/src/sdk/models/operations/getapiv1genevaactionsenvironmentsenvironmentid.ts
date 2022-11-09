import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiV1GenevaActionsEnvironmentsEnvironmentIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class GetApiV1GenevaActionsEnvironmentsEnvironmentIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiV1GenevaActionsEnvironmentsEnvironmentIdPathParams;
}


export class GetApiV1GenevaActionsEnvironmentsEnvironmentIdResponse extends SpeakeasyBase {
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
