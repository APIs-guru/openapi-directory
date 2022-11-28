import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutAccountsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutAccountsIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency_code" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class PutAccountsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutAccountsIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutAccountsIdRequestBody;
}


export class PutAccountsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  account?: shared.Account;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
