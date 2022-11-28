import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolGroupName" })
  poolGroupName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantId" })
  tenantId: string;
}


export class GetApiV1TenantTenantIdPoolGroupPoolGroupNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiV1TenantTenantIdPoolGroupPoolGroupNamePathParams;
}


export class GetApiV1TenantTenantIdPoolGroupPoolGroupNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  poolGroupResult?: shared.PoolGroupResult;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
