import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StoryIdGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=full" })
  full?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_outline" })
  includeOutline?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_relationships" })
  includeRelationships?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=refresh_cache" })
  refreshCache?: boolean;
}


export class StoryIdGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StoryIdGetPathParams;

  @Metadata()
  queryParams: StoryIdGetQueryParams;
}


export class StoryIdGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  problemDetail?: any;

  @Metadata()
  story?: shared.Story;
}
