import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolName" })
  poolName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantId" })
  tenantId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vmName" })
  vmName: string;
}


export class PutApiV1TenantTenantIdPoolPoolNameVmVmNameRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  claimVmBody?: shared.ClaimVmBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  claimVmBody1?: shared.ClaimVmBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  claimVmBody2?: shared.ClaimVmBody;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  claimVmBody3?: shared.ClaimVmBody;
}


export class PutApiV1TenantTenantIdPoolPoolNameVmVmNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams;

  @SpeakeasyMetadata()
  request?: PutApiV1TenantTenantIdPoolPoolNameVmVmNameRequests;
}


export class PutApiV1TenantTenantIdPoolPoolNameVmVmNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  vmResult?: shared.VmResult;
}
