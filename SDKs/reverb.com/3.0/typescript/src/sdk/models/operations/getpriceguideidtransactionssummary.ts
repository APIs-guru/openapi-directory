import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPriceguideIdTransactionsSummaryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPriceguideIdTransactionsSummaryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=condition" })
  condition?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number_of_months" })
  numberOfMonths?: number;
}


export class GetPriceguideIdTransactionsSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPriceguideIdTransactionsSummaryPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPriceguideIdTransactionsSummaryQueryParams;
}


export class GetPriceguideIdTransactionsSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
