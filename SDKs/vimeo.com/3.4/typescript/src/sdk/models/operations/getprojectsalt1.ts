import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetProjectsAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetProjectsAlt1SortEnum {
    Date = "date",
    Default = "default",
    ModifiedTime = "modified_time",
    Name = "name"
}


export class GetProjectsAlt1QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetProjectsAlt1DirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetProjectsAlt1SortEnum;
}


export class GetProjectsAlt1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetProjectsAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetProjectsAlt1QueryParams;

  @SpeakeasyMetadata()
  security: GetProjectsAlt1Security;
}


export class GetProjectsAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata({ elemType: shared.Project })
  projects?: shared.Project[];
}
