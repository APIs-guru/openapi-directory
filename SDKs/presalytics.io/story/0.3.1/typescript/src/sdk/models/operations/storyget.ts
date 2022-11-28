import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StoryGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_outline" })
  includeOutline?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_relationships" })
  includeRelationships?: boolean;
}


export class StoryGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: StoryGetQueryParams;
}


export class StoryGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  problemDetail?: any;

  @SpeakeasyMetadata({ elemType: shared.Story })
  stories?: shared.Story[];
}
