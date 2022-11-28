import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserTagsTagIdShowsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tag_id" })
  tagId: number;
}

export enum GetUserTagsTagIdShowsEmbedEnum {
    Show = "show"
}


export class GetUserTagsTagIdShowsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embed" })
  embed?: GetUserTagsTagIdShowsEmbedEnum;
}


export class GetUserTagsTagIdShowsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserTagsTagIdShowsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUserTagsTagIdShowsQueryParams;
}


export class GetUserTagsTagIdShowsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TagInstance })
  tagInstances?: shared.TagInstance[];
}
