import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiPostsGovernmentPostsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=departmentId" })
  departmentId?: number;
}


export class GetApiPostsGovernmentPostsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiPostsGovernmentPostsQueryParams;
}


export class GetApiPostsGovernmentPostsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.GovernmentOppositionPostItem })
  governmentOppositionPostItems?: shared.GovernmentOppositionPostItem[];

  @Metadata()
  statusCode: number;
}
