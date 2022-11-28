import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutApiV1TenantTenantIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantId" })
  tenantId: string;
}


export class PutApiV1TenantTenantIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutApiV1TenantTenantIdPathParams;
}


export class PutApiV1TenantTenantIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
