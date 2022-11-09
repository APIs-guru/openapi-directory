import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAdminRequestsRequestIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=requestId" })
  requestId: string;
}


export class DeleteAdminRequestsRequestIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAdminRequestsRequestIdPathParams;
}


export class DeleteAdminRequestsRequestIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
