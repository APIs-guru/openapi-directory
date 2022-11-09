import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StoryIdFilePostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdFilePostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=include_outline" })
  includeOutline?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=obsolete_id" })
  obsoleteId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=replace_existing" })
  replaceExisting?: boolean;
}


export class StoryIdFilePostRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StoryIdFilePostPathParams;

  @Metadata()
  queryParams: StoryIdFilePostQueryParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: any;
}


export class StoryIdFilePostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  problemDetail?: any;

  @Metadata()
  story?: shared.Story;
}
