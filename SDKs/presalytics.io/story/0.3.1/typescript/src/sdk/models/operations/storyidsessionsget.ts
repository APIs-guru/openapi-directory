import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StoryIdSessionsGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdSessionsGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=include_relationships" })
  includeRelationships?: boolean;
}


export class StoryIdSessionsGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StoryIdSessionsGetPathParams;

  @Metadata()
  queryParams: StoryIdSessionsGetQueryParams;
}


export class StoryIdSessionsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  problemDetail?: any;

  @Metadata({ elemType: shared.Session })
  sessions?: shared.Session[];
}
