import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostApiV1GenevaActionsBillingEnvironmentIdStateChangesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class PostApiV1GenevaActionsBillingEnvironmentIdStateChangesRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  createEnvironmentStateChangeBody?: shared.CreateEnvironmentStateChangeBody;

  @Metadata({ data: "request, media_type=application/json" })
  createEnvironmentStateChangeBody1?: shared.CreateEnvironmentStateChangeBody;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  createEnvironmentStateChangeBody2?: shared.CreateEnvironmentStateChangeBody;

  @Metadata({ data: "request, media_type=text/json" })
  createEnvironmentStateChangeBody3?: shared.CreateEnvironmentStateChangeBody;
}


export class PostApiV1GenevaActionsBillingEnvironmentIdStateChangesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostApiV1GenevaActionsBillingEnvironmentIdStateChangesPathParams;

  @Metadata()
  request: PostApiV1GenevaActionsBillingEnvironmentIdStateChangesRequests;
}


export class PostApiV1GenevaActionsBillingEnvironmentIdStateChangesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  environmentStateChange?: shared.EnvironmentStateChange;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
