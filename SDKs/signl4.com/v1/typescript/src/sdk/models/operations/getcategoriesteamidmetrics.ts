import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCategoriesTeamIdMetricsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class GetCategoriesTeamIdMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCategoriesTeamIdMetricsPathParams;
}


export class GetCategoriesTeamIdMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata({ elemType: shared.CategoryMetrics })
  categoryMetrics?: shared.CategoryMetrics[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  statusCode: number;
}
