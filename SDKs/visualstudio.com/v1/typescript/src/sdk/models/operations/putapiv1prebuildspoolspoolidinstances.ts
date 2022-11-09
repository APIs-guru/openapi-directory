import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutApiV1PrebuildsPoolsPoolIdInstancesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=poolId" })
  poolId: string;
}


export class PutApiV1PrebuildsPoolsPoolIdInstancesRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  createEnvironmentPoolResourceBody?: shared.CreateEnvironmentPoolResourceBody;

  @Metadata({ data: "request, media_type=application/json" })
  createEnvironmentPoolResourceBody1?: shared.CreateEnvironmentPoolResourceBody;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  createEnvironmentPoolResourceBody2?: shared.CreateEnvironmentPoolResourceBody;

  @Metadata({ data: "request, media_type=text/json" })
  createEnvironmentPoolResourceBody3?: shared.CreateEnvironmentPoolResourceBody;
}


export class PutApiV1PrebuildsPoolsPoolIdInstancesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutApiV1PrebuildsPoolsPoolIdInstancesPathParams;

  @Metadata()
  request?: PutApiV1PrebuildsPoolsPoolIdInstancesRequests;
}


export class PutApiV1PrebuildsPoolsPoolIdInstancesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
