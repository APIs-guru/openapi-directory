import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolGroupName" })
  poolGroupName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantId" })
  tenantId: string;
}


export class PatchApiV1TenantTenantIdPoolGroupPoolGroupNameRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  updatePoolGroupBody?: shared.UpdatePoolGroupBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  updatePoolGroupBody1?: shared.UpdatePoolGroupBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  updatePoolGroupBody2?: shared.UpdatePoolGroupBody;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  updatePoolGroupBody3?: shared.UpdatePoolGroupBody;
}


export class PatchApiV1TenantTenantIdPoolGroupPoolGroupNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams;

  @SpeakeasyMetadata()
  request?: PatchApiV1TenantTenantIdPoolGroupPoolGroupNameRequests;
}


export class PatchApiV1TenantTenantIdPoolGroupPoolGroupNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
