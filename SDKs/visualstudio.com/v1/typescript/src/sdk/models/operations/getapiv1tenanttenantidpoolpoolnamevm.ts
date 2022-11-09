import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiV1TenantTenantIdPoolPoolNameVmPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=poolName" })
  poolName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantId" })
  tenantId: string;
}


export class GetApiV1TenantTenantIdPoolPoolNameVmRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiV1TenantTenantIdPoolPoolNameVmPathParams;
}


export class GetApiV1TenantTenantIdPoolPoolNameVmResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.VmResult })
  vmResults?: shared.VmResult[];
}
