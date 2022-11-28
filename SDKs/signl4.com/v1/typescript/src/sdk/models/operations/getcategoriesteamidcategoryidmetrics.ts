import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCategoriesTeamIdCategoryIdMetricsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=categoryId" })
  categoryId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class GetCategoriesTeamIdCategoryIdMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCategoriesTeamIdCategoryIdMetricsPathParams;
}


export class GetCategoriesTeamIdCategoryIdMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  categoryMetrics?: shared.CategoryMetrics;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  statusCode: number;
}
