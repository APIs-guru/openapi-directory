import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiPostsGovernmentPostsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=departmentId" })
  departmentId?: number;
}


export class GetApiPostsGovernmentPostsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiPostsGovernmentPostsQueryParams;
}


export class GetApiPostsGovernmentPostsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.GovernmentOppositionPostItem })
  governmentOppositionPostItems?: shared.GovernmentOppositionPostItem[];

  @SpeakeasyMetadata()
  statusCode: number;
}
