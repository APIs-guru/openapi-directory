import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=poolGroupName" })
  poolGroupName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantId" })
  tenantId: string;
}


export class DeleteApiV1TenantTenantIdPoolGroupPoolGroupNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams;
}


export class DeleteApiV1TenantTenantIdPoolGroupPoolGroupNameResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
