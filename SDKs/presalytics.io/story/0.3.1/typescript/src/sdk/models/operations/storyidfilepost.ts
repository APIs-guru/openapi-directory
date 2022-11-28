import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StoryIdFilePostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdFilePostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_outline" })
  includeOutline?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=obsolete_id" })
  obsoleteId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=replace_existing" })
  replaceExisting?: boolean;
}


export class StoryIdFilePostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StoryIdFilePostPathParams;

  @SpeakeasyMetadata()
  queryParams: StoryIdFilePostQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: any;
}


export class StoryIdFilePostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  problemDetail?: any;

  @SpeakeasyMetadata()
  story?: shared.Story;
}
