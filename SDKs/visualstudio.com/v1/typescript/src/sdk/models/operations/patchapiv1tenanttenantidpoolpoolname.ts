import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchApiV1TenantTenantIdPoolPoolNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=poolName" })
  poolName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantId" })
  tenantId: string;
}


export class PatchApiV1TenantTenantIdPoolPoolNameRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  createOrUpdatePoolBody?: shared.CreateOrUpdatePoolBody;

  @Metadata({ data: "request, media_type=application/json" })
  createOrUpdatePoolBody1?: shared.CreateOrUpdatePoolBody;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  createOrUpdatePoolBody2?: shared.CreateOrUpdatePoolBody;

  @Metadata({ data: "request, media_type=text/json" })
  createOrUpdatePoolBody3?: shared.CreateOrUpdatePoolBody;
}


export class PatchApiV1TenantTenantIdPoolPoolNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchApiV1TenantTenantIdPoolPoolNamePathParams;

  @Metadata()
  request?: PatchApiV1TenantTenantIdPoolPoolNameRequests;
}


export class PatchApiV1TenantTenantIdPoolPoolNameResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  poolResult?: shared.PoolResult;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
