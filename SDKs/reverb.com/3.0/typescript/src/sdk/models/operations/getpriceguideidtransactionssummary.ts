import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPriceguideIdTransactionsSummaryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPriceguideIdTransactionsSummaryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=condition" })
  condition?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=number_of_months" })
  numberOfMonths?: number;
}


export class GetPriceguideIdTransactionsSummaryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPriceguideIdTransactionsSummaryPathParams;

  @Metadata()
  queryParams: GetPriceguideIdTransactionsSummaryQueryParams;
}


export class GetPriceguideIdTransactionsSummaryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
