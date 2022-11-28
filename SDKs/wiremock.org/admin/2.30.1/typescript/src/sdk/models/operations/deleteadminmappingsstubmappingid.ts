import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAdminMappingsStubMappingIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stubMappingId" })
  stubMappingId: string;
}


export class DeleteAdminMappingsStubMappingIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAdminMappingsStubMappingIdPathParams;
}


export class DeleteAdminMappingsStubMappingIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
