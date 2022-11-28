import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteApiV1TenantTenantIdPoolPoolNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolName" })
  poolName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantId" })
  tenantId: string;
}


export class DeleteApiV1TenantTenantIdPoolPoolNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteApiV1TenantTenantIdPoolPoolNamePathParams;
}


export class DeleteApiV1TenantTenantIdPoolPoolNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
