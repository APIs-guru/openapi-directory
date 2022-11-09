import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutApiV1TenantTenantIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantId" })
  tenantId: string;
}


export class PutApiV1TenantTenantIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutApiV1TenantTenantIdPathParams;
}


export class PutApiV1TenantTenantIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
