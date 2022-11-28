import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProjectsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}

export enum GetProjectsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetProjectsSortEnum {
    Date = "date",
    Default = "default",
    ModifiedTime = "modified_time",
    Name = "name"
}


export class GetProjectsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetProjectsDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetProjectsSortEnum;
}


export class GetProjectsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetProjectsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProjectsQueryParams;

  @SpeakeasyMetadata()
  security: GetProjectsSecurity;
}


export class GetProjectsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata({ elemType: shared.Project })
  projects?: shared.Project[];
}
