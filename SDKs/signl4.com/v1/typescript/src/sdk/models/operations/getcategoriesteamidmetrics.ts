import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCategoriesTeamIdMetricsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class GetCategoriesTeamIdMetricsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCategoriesTeamIdMetricsPathParams;
}


export class GetCategoriesTeamIdMetricsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata({ elemType: shared.CategoryMetrics })
  categoryMetrics?: shared.CategoryMetrics[];

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;
}
