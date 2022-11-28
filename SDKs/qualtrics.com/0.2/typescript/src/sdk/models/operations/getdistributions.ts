import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDistributionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=surveyId" })
  surveyId: string;
}


export class GetDistributionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDistributionsQueryParams;
}


export class GetDistributionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  distributionsResponse?: shared.DistributionsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
