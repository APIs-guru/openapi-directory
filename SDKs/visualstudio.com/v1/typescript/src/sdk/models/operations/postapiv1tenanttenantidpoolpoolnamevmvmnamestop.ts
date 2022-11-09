import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=poolName" })
  poolName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantId" })
  tenantId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=vmName" })
  vmName: string;
}


export class PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopPathParams;
}


export class PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
