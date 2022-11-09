import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateEnvironmentRoutePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class UpdateEnvironmentRouteRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  environmentRegistrationCallbackBody?: shared.EnvironmentRegistrationCallbackBody;

  @Metadata({ data: "request, media_type=application/json" })
  environmentRegistrationCallbackBody1?: shared.EnvironmentRegistrationCallbackBody;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  environmentRegistrationCallbackBody2?: shared.EnvironmentRegistrationCallbackBody;

  @Metadata({ data: "request, media_type=text/json" })
  environmentRegistrationCallbackBody3?: shared.EnvironmentRegistrationCallbackBody;
}


export class UpdateEnvironmentRouteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateEnvironmentRoutePathParams;

  @Metadata()
  request?: UpdateEnvironmentRouteRequests;
}


export class UpdateEnvironmentRouteResponse extends SpeakeasyBase {
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
