import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProjectVideosAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;
}

export enum GetProjectVideosAlt1DirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetProjectVideosAlt1SortEnum {
    Alphabetical = "alphabetical"
,    Date = "date"
,    Default = "default"
,    Duration = "duration"
,    LastUserActionEventDate = "last_user_action_event_date"
}


export class GetProjectVideosAlt1QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetProjectVideosAlt1DirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetProjectVideosAlt1SortEnum;
}


export class GetProjectVideosAlt1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetProjectVideosAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProjectVideosAlt1PathParams;

  @Metadata()
  queryParams: GetProjectVideosAlt1QueryParams;

  @Metadata()
  security: GetProjectVideosAlt1Security;
}


export class GetProjectVideosAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;

  @Metadata({ elemType: shared.Video })
  videos?: shared.Video[];
}
