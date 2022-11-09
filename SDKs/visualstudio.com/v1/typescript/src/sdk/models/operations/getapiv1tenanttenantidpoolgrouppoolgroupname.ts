import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=poolGroupName" })
  poolGroupName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantId" })
  tenantId: string;
}


export class GetApiV1TenantTenantIdPoolGroupPoolGroupNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams;
}


export class GetApiV1TenantTenantIdPoolGroupPoolGroupNameResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  poolGroupResult?: shared.PoolGroupResult;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
