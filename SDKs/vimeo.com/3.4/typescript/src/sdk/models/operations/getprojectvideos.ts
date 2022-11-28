import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProjectVideosPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}

export enum GetProjectVideosDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetProjectVideosSortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Default = "default",
    Duration = "duration",
    LastUserActionEventDate = "last_user_action_event_date"
}


export class GetProjectVideosQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetProjectVideosDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetProjectVideosSortEnum;
}


export class GetProjectVideosSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetProjectVideosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectVideosPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProjectVideosQueryParams;

  @SpeakeasyMetadata()
  security: GetProjectVideosSecurity;
}


export class GetProjectVideosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata({ elemType: shared.Video })
  videos?: shared.Video[];
}
