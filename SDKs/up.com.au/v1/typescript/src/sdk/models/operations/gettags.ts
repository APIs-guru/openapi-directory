import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTagsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page[size]" })
  pageSize?: number;
}


export class GetTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTagsQueryParams;
}


export class GetTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listTagsResponse?: shared.ListTagsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
