import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteApiV1TenantTenantIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantId" })
  tenantId: string;
}


export class DeleteApiV1TenantTenantIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteApiV1TenantTenantIdPathParams;
}


export class DeleteApiV1TenantTenantIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
