import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAdminRequestsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;
}


export class GetAdminRequestsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAdminRequestsQueryParams;
}


export class GetAdminRequestsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
