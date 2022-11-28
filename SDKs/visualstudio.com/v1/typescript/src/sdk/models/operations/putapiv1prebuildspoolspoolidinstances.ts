import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutApiV1PrebuildsPoolsPoolIdInstancesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolId" })
  poolId: string;
}


export class PutApiV1PrebuildsPoolsPoolIdInstancesRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  createEnvironmentPoolResourceBody?: shared.CreateEnvironmentPoolResourceBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  createEnvironmentPoolResourceBody1?: shared.CreateEnvironmentPoolResourceBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  createEnvironmentPoolResourceBody2?: shared.CreateEnvironmentPoolResourceBody;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  createEnvironmentPoolResourceBody3?: shared.CreateEnvironmentPoolResourceBody;
}


export class PutApiV1PrebuildsPoolsPoolIdInstancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutApiV1PrebuildsPoolsPoolIdInstancesPathParams;

  @SpeakeasyMetadata()
  request?: PutApiV1PrebuildsPoolsPoolIdInstancesRequests;
}


export class PutApiV1PrebuildsPoolsPoolIdInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
