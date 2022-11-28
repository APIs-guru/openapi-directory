import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetCategoriesDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetCategoriesSortEnum {
    LastVideoFeaturedTime = "last_video_featured_time",
    Name = "name"
}


export class GetCategoriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetCategoriesDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetCategoriesSortEnum;
}


export class GetCategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCategoriesQueryParams;
}


export class GetCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Category })
  categories?: shared.Category[];
}
