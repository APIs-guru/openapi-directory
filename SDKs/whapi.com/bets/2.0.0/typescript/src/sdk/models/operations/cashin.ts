import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CashinPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=betId" })
  betId: string;
}


export class CashinQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cashInValue" })
  cashInValue: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cashinBetDelayId" })
  cashinBetDelayId: string;
}


export class CashinHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=apiKey" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=apiSecret" })
  apiSecret: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=apiTicket" })
  apiTicket: string;
}


export class CashinRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CashinPathParams;

  @SpeakeasyMetadata()
  queryParams: CashinQueryParams;

  @SpeakeasyMetadata()
  headers: CashinHeaders;
}


export class CashinResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  cashInResponse?: shared.CashInResponse;

  @SpeakeasyMetadata()
  errors?: shared.Errors;
}
