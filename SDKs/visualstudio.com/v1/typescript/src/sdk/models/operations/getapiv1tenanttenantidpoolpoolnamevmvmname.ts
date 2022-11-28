import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolName" })
  poolName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantId" })
  tenantId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vmName" })
  vmName: string;
}


export class GetApiV1TenantTenantIdPoolPoolNameVmVmNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams;
}


export class GetApiV1TenantTenantIdPoolPoolNameVmVmNameResponse extends SpeakeasyBase {
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
