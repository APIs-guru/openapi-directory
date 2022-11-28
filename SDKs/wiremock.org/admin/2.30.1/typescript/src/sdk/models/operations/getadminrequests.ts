import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAdminRequestsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;
}


export class GetAdminRequestsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAdminRequestsQueryParams;
}


export class GetAdminRequestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
