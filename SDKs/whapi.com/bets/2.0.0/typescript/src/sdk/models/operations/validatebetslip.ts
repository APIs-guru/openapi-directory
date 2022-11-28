import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ValidateBetslipQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expanded" })
  expanded?: string;
}


export class ValidateBetslipHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=apiKey" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=apiSecret" })
  apiSecret: string;
}


export class ValidateBetslipRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ValidateBetslipQueryParams;

  @SpeakeasyMetadata()
  headers: ValidateBetslipHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BetSlipRequest;
}


export class ValidateBetslipResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  betSlipResponse?: shared.BetSlipResponse;
}
