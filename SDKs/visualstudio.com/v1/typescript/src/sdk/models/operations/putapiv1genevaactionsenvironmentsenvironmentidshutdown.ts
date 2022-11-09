import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutApiV1GenevaActionsEnvironmentsEnvironmentIdShutdownPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class PutApiV1GenevaActionsEnvironmentsEnvironmentIdShutdownRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutApiV1GenevaActionsEnvironmentsEnvironmentIdShutdownPathParams;
}


export class PutApiV1GenevaActionsEnvironmentsEnvironmentIdShutdownResponse extends SpeakeasyBase {
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
