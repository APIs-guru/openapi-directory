import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProjectVideosAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;
}

export enum GetProjectVideosAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetProjectVideosAlt1SortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Default = "default",
    Duration = "duration",
    LastUserActionEventDate = "last_user_action_event_date"
}


export class GetProjectVideosAlt1QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetProjectVideosAlt1DirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetProjectVideosAlt1SortEnum;
}


export class GetProjectVideosAlt1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetProjectVideosAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectVideosAlt1PathParams;

  @SpeakeasyMetadata()
  queryParams: GetProjectVideosAlt1QueryParams;

  @SpeakeasyMetadata()
  security: GetProjectVideosAlt1Security;
}


export class GetProjectVideosAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata({ elemType: shared.Video })
  videos?: shared.Video[];
}
