import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchApiV1TenantTenantIdPoolPoolNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolName" })
  poolName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantId" })
  tenantId: string;
}


export class PatchApiV1TenantTenantIdPoolPoolNameRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  createOrUpdatePoolBody?: shared.CreateOrUpdatePoolBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  createOrUpdatePoolBody1?: shared.CreateOrUpdatePoolBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  createOrUpdatePoolBody2?: shared.CreateOrUpdatePoolBody;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  createOrUpdatePoolBody3?: shared.CreateOrUpdatePoolBody;
}


export class PatchApiV1TenantTenantIdPoolPoolNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchApiV1TenantTenantIdPoolPoolNamePathParams;

  @SpeakeasyMetadata()
  request?: PatchApiV1TenantTenantIdPoolPoolNameRequests;
}


export class PatchApiV1TenantTenantIdPoolPoolNameResponse extends SpeakeasyBase {
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
