import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolName" })
  poolName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantId" })
  tenantId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vmName" })
  vmName: string;
}


export class DeleteApiV1TenantTenantIdPoolPoolNameVmVmNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams;
}


export class DeleteApiV1TenantTenantIdPoolPoolNameVmVmNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
