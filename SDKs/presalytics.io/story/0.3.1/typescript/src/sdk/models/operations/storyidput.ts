import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StoryIdPutPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdPutQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_outline" })
  includeOutline?: boolean;
}


export class StoryIdPutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StoryIdPutPathParams;

  @SpeakeasyMetadata()
  queryParams: StoryIdPutQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Story;
}


export class StoryIdPutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  problemDetail?: any;

  @SpeakeasyMetadata()
  story?: shared.Story;
}
