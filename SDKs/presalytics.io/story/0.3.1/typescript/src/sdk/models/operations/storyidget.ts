import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StoryIdGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=full" })
  full?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_outline" })
  includeOutline?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_relationships" })
  includeRelationships?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=refresh_cache" })
  refreshCache?: boolean;
}


export class StoryIdGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StoryIdGetPathParams;

  @SpeakeasyMetadata()
  queryParams: StoryIdGetQueryParams;
}


export class StoryIdGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  problemDetail?: any;

  @SpeakeasyMetadata()
  story?: shared.Story;
}
