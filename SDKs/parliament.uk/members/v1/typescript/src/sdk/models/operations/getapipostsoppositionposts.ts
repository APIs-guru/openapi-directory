import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiPostsOppositionPostsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=departmentId" })
  departmentId?: number;
}


export class GetApiPostsOppositionPostsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiPostsOppositionPostsQueryParams;
}


export class GetApiPostsOppositionPostsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.GovernmentOppositionPostItem })
  governmentOppositionPostItems?: shared.GovernmentOppositionPostItem[];

  @SpeakeasyMetadata()
  statusCode: number;
}
