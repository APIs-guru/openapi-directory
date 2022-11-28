import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutApiV1TenantTenantIdPoolPoolNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolName" })
  poolName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantId" })
  tenantId: string;
}


export class PutApiV1TenantTenantIdPoolPoolNameRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  createOrUpdatePoolBody?: shared.CreateOrUpdatePoolBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  createOrUpdatePoolBody1?: shared.CreateOrUpdatePoolBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  createOrUpdatePoolBody2?: shared.CreateOrUpdatePoolBody;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  createOrUpdatePoolBody3?: shared.CreateOrUpdatePoolBody;
}


export class PutApiV1TenantTenantIdPoolPoolNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutApiV1TenantTenantIdPoolPoolNamePathParams;

  @SpeakeasyMetadata()
  request?: PutApiV1TenantTenantIdPoolPoolNameRequests;
}


export class PutApiV1TenantTenantIdPoolPoolNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  poolResult?: shared.PoolResult;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
