import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ValidateBetslipQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=expanded" })
  expanded?: string;
}


export class ValidateBetslipHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=apiKey" })
  apiKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=apiSecret" })
  apiSecret: string;
}


export class ValidateBetslipRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ValidateBetslipQueryParams;

  @Metadata()
  headers: ValidateBetslipHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BetSlipRequest;
}


export class ValidateBetslipResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  betSlipResponse?: shared.BetSlipResponse;
}
