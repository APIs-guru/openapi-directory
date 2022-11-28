import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAdminRequestsRequestIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=requestId" })
  requestId: string;
}


export class GetAdminRequestsRequestIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAdminRequestsRequestIdPathParams;
}


export class GetAdminRequestsRequestIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
