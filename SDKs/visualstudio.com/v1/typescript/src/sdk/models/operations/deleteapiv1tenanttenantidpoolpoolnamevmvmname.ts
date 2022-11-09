import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=poolName" })
  poolName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantId" })
  tenantId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=vmName" })
  vmName: string;
}


export class DeleteApiV1TenantTenantIdPoolPoolNameVmVmNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteApiV1TenantTenantIdPoolPoolNameVmVmNamePathParams;
}


export class DeleteApiV1TenantTenantIdPoolPoolNameVmVmNameResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
