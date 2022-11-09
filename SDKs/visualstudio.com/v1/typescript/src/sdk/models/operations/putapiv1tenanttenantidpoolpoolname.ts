import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutApiV1TenantTenantIdPoolPoolNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=poolName" })
  poolName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantId" })
  tenantId: string;
}


export class PutApiV1TenantTenantIdPoolPoolNameRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  createOrUpdatePoolBody?: shared.CreateOrUpdatePoolBody;

  @Metadata({ data: "request, media_type=application/json" })
  createOrUpdatePoolBody1?: shared.CreateOrUpdatePoolBody;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  createOrUpdatePoolBody2?: shared.CreateOrUpdatePoolBody;

  @Metadata({ data: "request, media_type=text/json" })
  createOrUpdatePoolBody3?: shared.CreateOrUpdatePoolBody;
}


export class PutApiV1TenantTenantIdPoolPoolNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutApiV1TenantTenantIdPoolPoolNamePathParams;

  @Metadata()
  request?: PutApiV1TenantTenantIdPoolPoolNameRequests;
}


export class PutApiV1TenantTenantIdPoolPoolNameResponse extends SpeakeasyBase {
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
