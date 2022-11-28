import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiV1TenantTenantIdPoolPoolNameVmPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolName" })
  poolName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantId" })
  tenantId: string;
}


export class GetApiV1TenantTenantIdPoolPoolNameVmRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiV1TenantTenantIdPoolPoolNameVmPathParams;
}


export class GetApiV1TenantTenantIdPoolPoolNameVmResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.VmResult })
  vmResults?: shared.VmResult[];
}
