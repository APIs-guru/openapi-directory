import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiPostsOppositionPostsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=departmentId" })
  departmentId?: number;
}


export class GetApiPostsOppositionPostsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiPostsOppositionPostsQueryParams;
}


export class GetApiPostsOppositionPostsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.GovernmentOppositionPostItem })
  governmentOppositionPostItems?: shared.GovernmentOppositionPostItem[];

  @Metadata()
  statusCode: number;
}
