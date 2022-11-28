import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetUserVodsAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetUserVodsAlt1FilterEnum {
    Film = "film",
    Series = "series"
}

export enum GetUserVodsAlt1SortEnum {
    Added = "added",
    Alphabetical = "alphabetical",
    Date = "date",
    ModifiedTime = "modified_time",
    Name = "name",
    PublishTime = "publish.time",
    Rating = "rating"
}


export class GetUserVodsAlt1QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetUserVodsAlt1DirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetUserVodsAlt1FilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetUserVodsAlt1SortEnum;
}


export class GetUserVodsAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUserVodsAlt1QueryParams;
}


export class GetUserVodsAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata({ elemType: shared.OnDemandPage })
  onDemandPages?: shared.OnDemandPage[];
}
