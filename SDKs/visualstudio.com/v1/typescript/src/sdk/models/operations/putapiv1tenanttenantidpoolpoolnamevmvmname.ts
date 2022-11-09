import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=poolName" })
  poolName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantId" })
  tenantId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=vmName" })
  vmName: string;
}


export class PutApiV1TenantTenantIdPoolPoolNameVmVmNameRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  claimVmBody?: shared.ClaimVmBody;

  @Metadata({ data: "request, media_type=application/json" })
  claimVmBody1?: shared.ClaimVmBody;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  claimVmBody2?: shared.ClaimVmBody;

  @Metadata({ data: "request, media_type=text/json" })
  claimVmBody3?: shared.ClaimVmBody;
}


export class PutApiV1TenantTenantIdPoolPoolNameVmVmNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams;

  @Metadata()
  request?: PutApiV1TenantTenantIdPoolPoolNameVmVmNameRequests;
}


export class PutApiV1TenantTenantIdPoolPoolNameVmVmNameResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  vmResult?: shared.VmResult;
}
