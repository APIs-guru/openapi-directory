import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserVodsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}

export enum GetUserVodsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetUserVodsFilterEnum {
    Film = "film",
    Series = "series"
}

export enum GetUserVodsSortEnum {
    Added = "added",
    Alphabetical = "alphabetical",
    Date = "date",
    ModifiedTime = "modified_time",
    Name = "name",
    PublishTime = "publish.time",
    Rating = "rating"
}


export class GetUserVodsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetUserVodsDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetUserVodsFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetUserVodsSortEnum;
}


export class GetUserVodsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserVodsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUserVodsQueryParams;
}


export class GetUserVodsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata({ elemType: shared.OnDemandPage })
  onDemandPages?: shared.OnDemandPage[];
}
