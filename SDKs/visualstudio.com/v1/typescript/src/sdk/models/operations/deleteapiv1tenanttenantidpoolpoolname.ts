import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteApiV1TenantTenantIdPoolPoolNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=poolName" })
  poolName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantId" })
  tenantId: string;
}


export class DeleteApiV1TenantTenantIdPoolPoolNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteApiV1TenantTenantIdPoolPoolNamePathParams;
}


export class DeleteApiV1TenantTenantIdPoolPoolNameResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
