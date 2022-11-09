import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProjectsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}

export enum GetProjectsDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetProjectsSortEnum {
    Date = "date"
,    Default = "default"
,    ModifiedTime = "modified_time"
,    Name = "name"
}


export class GetProjectsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetProjectsDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetProjectsSortEnum;
}


export class GetProjectsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetProjectsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProjectsPathParams;

  @Metadata()
  queryParams: GetProjectsQueryParams;

  @Metadata()
  security: GetProjectsSecurity;
}


export class GetProjectsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;

  @Metadata({ elemType: shared.Project })
  projects?: shared.Project[];
}
