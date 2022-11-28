import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolName" })
  poolName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantId" })
  tenantId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vmName" })
  vmName: string;
}


export class PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartPathParams;
}


export class PostApiV1TenantTenantIdPoolPoolNameVmVmNameStartResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
