import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProjectVideosPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}

export enum GetProjectVideosDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetProjectVideosSortEnum {
    Alphabetical = "alphabetical"
,    Date = "date"
,    Default = "default"
,    Duration = "duration"
,    LastUserActionEventDate = "last_user_action_event_date"
}


export class GetProjectVideosQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetProjectVideosDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetProjectVideosSortEnum;
}


export class GetProjectVideosSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetProjectVideosRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProjectVideosPathParams;

  @Metadata()
  queryParams: GetProjectVideosQueryParams;

  @Metadata()
  security: GetProjectVideosSecurity;
}


export class GetProjectVideosResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;

  @Metadata({ elemType: shared.Video })
  videos?: shared.Video[];
}
