import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutAccountsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutAccountsIdRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency_code" })
  currencyCode?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class PutAccountsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutAccountsIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PutAccountsIdRequestBody;
}


export class PutAccountsIdResponse extends SpeakeasyBase {
  @Metadata()
  account?: shared.Account;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
