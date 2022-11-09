import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=poolGroupName" })
  poolGroupName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantId" })
  tenantId: string;
}


export class PutApiV1TenantTenantIdPoolGroupPoolGroupNameRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  createPoolGroupBody?: shared.CreatePoolGroupBody;

  @Metadata({ data: "request, media_type=application/json" })
  createPoolGroupBody1?: shared.CreatePoolGroupBody;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  createPoolGroupBody2?: shared.CreatePoolGroupBody;

  @Metadata({ data: "request, media_type=text/json" })
  createPoolGroupBody3?: shared.CreatePoolGroupBody;
}


export class PutApiV1TenantTenantIdPoolGroupPoolGroupNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams;

  @Metadata()
  request?: PutApiV1TenantTenantIdPoolGroupPoolGroupNameRequests;
}


export class PutApiV1TenantTenantIdPoolGroupPoolGroupNameResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
