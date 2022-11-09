import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteApiV1TenantTenantIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantId" })
  tenantId: string;
}


export class DeleteApiV1TenantTenantIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteApiV1TenantTenantIdPathParams;
}


export class DeleteApiV1TenantTenantIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
