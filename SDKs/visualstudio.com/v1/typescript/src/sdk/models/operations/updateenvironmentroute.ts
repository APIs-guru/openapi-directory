import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateEnvironmentRoutePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class UpdateEnvironmentRouteRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  environmentRegistrationCallbackBody?: shared.EnvironmentRegistrationCallbackBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  environmentRegistrationCallbackBody1?: shared.EnvironmentRegistrationCallbackBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  environmentRegistrationCallbackBody2?: shared.EnvironmentRegistrationCallbackBody;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  environmentRegistrationCallbackBody3?: shared.EnvironmentRegistrationCallbackBody;
}


export class UpdateEnvironmentRouteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateEnvironmentRoutePathParams;

  @SpeakeasyMetadata()
  request?: UpdateEnvironmentRouteRequests;
}


export class UpdateEnvironmentRouteResponse extends SpeakeasyBase {
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
