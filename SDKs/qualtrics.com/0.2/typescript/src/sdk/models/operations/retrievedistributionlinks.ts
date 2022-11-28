import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RetrievedistributionlinksPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DistributionId" })
  distributionId: string;
}


export class RetrievedistributionlinksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=surveyId" })
  surveyId: string;
}


export class RetrievedistributionlinksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RetrievedistributionlinksPathParams;

  @SpeakeasyMetadata()
  queryParams: RetrievedistributionlinksQueryParams;
}


export class RetrievedistributionlinksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  retrieveDistributionLinksResponse?: shared.RetrieveDistributionLinksResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
