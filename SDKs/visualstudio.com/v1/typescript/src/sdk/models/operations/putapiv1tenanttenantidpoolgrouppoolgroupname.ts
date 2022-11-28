import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolGroupName" })
  poolGroupName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantId" })
  tenantId: string;
}


export class PutApiV1TenantTenantIdPoolGroupPoolGroupNameRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  createPoolGroupBody?: shared.CreatePoolGroupBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  createPoolGroupBody1?: shared.CreatePoolGroupBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  createPoolGroupBody2?: shared.CreatePoolGroupBody;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  createPoolGroupBody3?: shared.CreatePoolGroupBody;
}


export class PutApiV1TenantTenantIdPoolGroupPoolGroupNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams;

  @SpeakeasyMetadata()
  request?: PutApiV1TenantTenantIdPoolGroupPoolGroupNameRequests;
}


export class PutApiV1TenantTenantIdPoolGroupPoolGroupNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
