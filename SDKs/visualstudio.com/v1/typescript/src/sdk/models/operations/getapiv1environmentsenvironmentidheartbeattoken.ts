import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiV1EnvironmentsEnvironmentIdHeartbeattokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class GetApiV1EnvironmentsEnvironmentIdHeartbeattokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiV1EnvironmentsEnvironmentIdHeartbeattokenPathParams;
}


export class GetApiV1EnvironmentsEnvironmentIdHeartbeattokenResponse extends SpeakeasyBase {
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
