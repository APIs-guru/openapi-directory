import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StoryGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=include_outline" })
  includeOutline?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_relationships" })
  includeRelationships?: boolean;
}


export class StoryGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: StoryGetQueryParams;
}


export class StoryGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  problemDetail?: any;

  @Metadata({ elemType: shared.Story })
  stories?: shared.Story[];
}
