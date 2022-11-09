import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CashinPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=betId" })
  betId: string;
}


export class CashinQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cashInValue" })
  cashInValue: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cashinBetDelayId" })
  cashinBetDelayId: string;
}


export class CashinHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=apiKey" })
  apiKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=apiSecret" })
  apiSecret: string;

  @Metadata({ data: "header, style=simple;explode=false;name=apiTicket" })
  apiTicket: string;
}


export class CashinRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CashinPathParams;

  @Metadata()
  queryParams: CashinQueryParams;

  @Metadata()
  headers: CashinHeaders;
}


export class CashinResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  cashInResponse?: shared.CashInResponse;

  @Metadata()
  errors?: shared.Errors;
}
