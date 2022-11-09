import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetProjectsAlt1DirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetProjectsAlt1SortEnum {
    Date = "date"
,    Default = "default"
,    ModifiedTime = "modified_time"
,    Name = "name"
}


export class GetProjectsAlt1QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetProjectsAlt1DirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetProjectsAlt1SortEnum;
}


export class GetProjectsAlt1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetProjectsAlt1Request extends SpeakeasyBase {
  @Metadata()
  queryParams: GetProjectsAlt1QueryParams;

  @Metadata()
  security: GetProjectsAlt1Security;
}


export class GetProjectsAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;

  @Metadata({ elemType: shared.Project })
  projects?: shared.Project[];
}
