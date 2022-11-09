import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCategoriesTeamIdCategoryIdMetricsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=categoryId" })
  categoryId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class GetCategoriesTeamIdCategoryIdMetricsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCategoriesTeamIdCategoryIdMetricsPathParams;
}


export class GetCategoriesTeamIdCategoryIdMetricsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  categoryMetrics?: shared.CategoryMetrics;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;
}
