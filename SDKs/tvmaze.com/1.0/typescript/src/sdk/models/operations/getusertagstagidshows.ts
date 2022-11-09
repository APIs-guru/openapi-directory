import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserTagsTagIdShowsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tag_id" })
  tagId: number;
}

export enum GetUserTagsTagIdShowsEmbedEnum {
    Show = "show"
}


export class GetUserTagsTagIdShowsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=embed" })
  embed?: GetUserTagsTagIdShowsEmbedEnum;
}


export class GetUserTagsTagIdShowsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUserTagsTagIdShowsPathParams;

  @Metadata()
  queryParams: GetUserTagsTagIdShowsQueryParams;
}


export class GetUserTagsTagIdShowsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TagInstance })
  tagInstances?: shared.TagInstance[];
}
