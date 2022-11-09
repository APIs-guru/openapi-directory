import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=poolGroupName" })
  poolGroupName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantId" })
  tenantId: string;
}


export class PatchApiV1TenantTenantIdPoolGroupPoolGroupNameRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  updatePoolGroupBody?: shared.UpdatePoolGroupBody;

  @Metadata({ data: "request, media_type=application/json" })
  updatePoolGroupBody1?: shared.UpdatePoolGroupBody;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  updatePoolGroupBody2?: shared.UpdatePoolGroupBody;

  @Metadata({ data: "request, media_type=text/json" })
  updatePoolGroupBody3?: shared.UpdatePoolGroupBody;
}


export class PatchApiV1TenantTenantIdPoolGroupPoolGroupNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams;

  @Metadata()
  request?: PatchApiV1TenantTenantIdPoolGroupPoolGroupNameRequests;
}


export class PatchApiV1TenantTenantIdPoolGroupPoolGroupNameResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
