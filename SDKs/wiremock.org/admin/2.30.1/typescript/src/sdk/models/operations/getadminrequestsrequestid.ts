import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAdminRequestsRequestIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=requestId" })
  requestId: string;
}


export class GetAdminRequestsRequestIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAdminRequestsRequestIdPathParams;
}


export class GetAdminRequestsRequestIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
