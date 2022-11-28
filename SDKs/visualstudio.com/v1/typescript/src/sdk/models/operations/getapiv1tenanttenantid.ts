import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiV1TenantTenantIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantId" })
  tenantId: string;
}


export class GetApiV1TenantTenantIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiV1TenantTenantIdPathParams;
}


export class GetApiV1TenantTenantIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tenantInfoResult?: shared.TenantInfoResult;
}
