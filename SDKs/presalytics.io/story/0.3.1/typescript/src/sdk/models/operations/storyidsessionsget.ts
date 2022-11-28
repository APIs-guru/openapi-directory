import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StoryIdSessionsGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdSessionsGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_relationships" })
  includeRelationships?: boolean;
}


export class StoryIdSessionsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StoryIdSessionsGetPathParams;

  @SpeakeasyMetadata()
  queryParams: StoryIdSessionsGetQueryParams;
}


export class StoryIdSessionsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  problemDetail?: any;

  @SpeakeasyMetadata({ elemType: shared.Session })
  sessions?: shared.Session[];
}
