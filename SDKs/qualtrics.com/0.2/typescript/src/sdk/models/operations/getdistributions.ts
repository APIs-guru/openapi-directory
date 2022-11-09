import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDistributionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=surveyId" })
  surveyId: string;
}


export class GetDistributionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDistributionsQueryParams;
}


export class GetDistributionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  distributionsResponse?: shared.DistributionsResponse;

  @Metadata()
  statusCode: number;
}
