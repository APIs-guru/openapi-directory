import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolName" })
  poolName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantId" })
  tenantId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vmName" })
  vmName: string;
}


export class PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopPathParams;
}


export class PostApiV1TenantTenantIdPoolPoolNameVmVmNameStopResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
