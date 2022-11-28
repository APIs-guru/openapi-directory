import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAdminRequestsRequestIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=requestId" })
  requestId: string;
}


export class DeleteAdminRequestsRequestIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAdminRequestsRequestIdPathParams;
}


export class DeleteAdminRequestsRequestIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
