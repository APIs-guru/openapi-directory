import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTagsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page[size]" })
  pageSize?: number;
}


export class GetTagsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTagsQueryParams;
}


export class GetTagsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listTagsResponse?: shared.ListTagsResponse;

  @Metadata()
  statusCode: number;
}
