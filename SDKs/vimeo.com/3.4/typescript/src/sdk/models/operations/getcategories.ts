import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetCategoriesDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetCategoriesSortEnum {
    LastVideoFeaturedTime = "last_video_featured_time"
,    Name = "name"
}


export class GetCategoriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetCategoriesDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetCategoriesSortEnum;
}


export class GetCategoriesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCategoriesQueryParams;
}


export class GetCategoriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Category })
  categories?: shared.Category[];
}
