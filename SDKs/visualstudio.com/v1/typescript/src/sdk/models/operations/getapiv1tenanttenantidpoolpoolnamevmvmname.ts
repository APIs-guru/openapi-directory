import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=poolName" })
  poolName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantId" })
  tenantId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=vmName" })
  vmName: string;
}


export class GetApiV1TenantTenantIdPoolPoolNameVmVmNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams;
}


export class GetApiV1TenantTenantIdPoolPoolNameVmVmNameResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  vmResult?: shared.VmResult;
}
