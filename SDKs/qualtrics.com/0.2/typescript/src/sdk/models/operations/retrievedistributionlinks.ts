import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrievedistributionlinksPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=DistributionId" })
  distributionId: string;
}


export class RetrievedistributionlinksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=surveyId" })
  surveyId: string;
}


export class RetrievedistributionlinksRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrievedistributionlinksPathParams;

  @Metadata()
  queryParams: RetrievedistributionlinksQueryParams;
}


export class RetrievedistributionlinksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  retrieveDistributionLinksResponse?: shared.RetrieveDistributionLinksResponse;

  @Metadata()
  statusCode: number;
}
