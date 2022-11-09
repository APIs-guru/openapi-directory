import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCommentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}

export enum GetCommentsDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}


export class GetCommentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetCommentsDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetCommentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCommentsPathParams;

  @Metadata()
  queryParams: GetCommentsQueryParams;
}


export class GetCommentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Comment })
  comments?: shared.Comment[];
}
