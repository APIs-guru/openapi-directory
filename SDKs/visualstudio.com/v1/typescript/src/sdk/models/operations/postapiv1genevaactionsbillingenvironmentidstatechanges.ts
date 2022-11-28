import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostApiV1GenevaActionsBillingEnvironmentIdStateChangesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class PostApiV1GenevaActionsBillingEnvironmentIdStateChangesRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  createEnvironmentStateChangeBody?: shared.CreateEnvironmentStateChangeBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  createEnvironmentStateChangeBody1?: shared.CreateEnvironmentStateChangeBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  createEnvironmentStateChangeBody2?: shared.CreateEnvironmentStateChangeBody;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  createEnvironmentStateChangeBody3?: shared.CreateEnvironmentStateChangeBody;
}


export class PostApiV1GenevaActionsBillingEnvironmentIdStateChangesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostApiV1GenevaActionsBillingEnvironmentIdStateChangesPathParams;

  @SpeakeasyMetadata()
  request: PostApiV1GenevaActionsBillingEnvironmentIdStateChangesRequests;
}


export class PostApiV1GenevaActionsBillingEnvironmentIdStateChangesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  environmentStateChange?: shared.EnvironmentStateChange;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
