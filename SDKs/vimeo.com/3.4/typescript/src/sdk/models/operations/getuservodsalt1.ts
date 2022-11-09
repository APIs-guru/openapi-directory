import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetUserVodsAlt1DirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetUserVodsAlt1FilterEnum {
    Film = "film"
,    Series = "series"
}

export enum GetUserVodsAlt1SortEnum {
    Added = "added"
,    Alphabetical = "alphabetical"
,    Date = "date"
,    ModifiedTime = "modified_time"
,    Name = "name"
,    PublishTime = "publish.time"
,    Rating = "rating"
}


export class GetUserVodsAlt1QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetUserVodsAlt1DirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetUserVodsAlt1FilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetUserVodsAlt1SortEnum;
}


export class GetUserVodsAlt1Request extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUserVodsAlt1QueryParams;
}


export class GetUserVodsAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata({ elemType: shared.OnDemandPage })
  onDemandPages?: shared.OnDemandPage[];
}
