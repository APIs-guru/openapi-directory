import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserVodsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}

export enum GetUserVodsDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetUserVodsFilterEnum {
    Film = "film"
,    Series = "series"
}

export enum GetUserVodsSortEnum {
    Added = "added"
,    Alphabetical = "alphabetical"
,    Date = "date"
,    ModifiedTime = "modified_time"
,    Name = "name"
,    PublishTime = "publish.time"
,    Rating = "rating"
}


export class GetUserVodsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetUserVodsDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetUserVodsFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetUserVodsSortEnum;
}


export class GetUserVodsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUserVodsPathParams;

  @Metadata()
  queryParams: GetUserVodsQueryParams;
}


export class GetUserVodsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata({ elemType: shared.OnDemandPage })
  onDemandPages?: shared.OnDemandPage[];
}
