import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ArticleGetMeasureUnitsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class ArticleGetMeasureUnitsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ArticleGetMeasureUnitsQueryParams;
}


export class ArticleGetMeasureUnitsResponse extends SpeakeasyBase {
  @Metadata()
  apiResponse?: shared.ApiResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  defaultResponseDtoOfStatusDto?: shared.DefaultResponseDtoOfStatusDto;

  @Metadata()
  statusCode: number;
}
