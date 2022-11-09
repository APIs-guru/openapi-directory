import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCommentsAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}

export enum GetCommentsAlt1DirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}


export class GetCommentsAlt1QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetCommentsAlt1DirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetCommentsAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCommentsAlt1PathParams;

  @Metadata()
  queryParams: GetCommentsAlt1QueryParams;
}


export class GetCommentsAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Comment })
  comments?: shared.Comment[];
}
