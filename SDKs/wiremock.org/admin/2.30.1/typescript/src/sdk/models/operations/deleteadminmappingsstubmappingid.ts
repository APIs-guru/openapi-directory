import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAdminMappingsStubMappingIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=stubMappingId" })
  stubMappingId: string;
}


export class DeleteAdminMappingsStubMappingIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAdminMappingsStubMappingIdPathParams;
}


export class DeleteAdminMappingsStubMappingIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
