import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutUsersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutUsersIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=always_show_base_currency" })
  alwaysShowBaseCurrency?: boolean;

  @SpeakeasyMetadata({ data: "json, name=base_currency_code" })
  baseCurrencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=beta_user" })
  betaUser?: boolean;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=time_zone" })
  timeZone?: string;

  @SpeakeasyMetadata({ data: "json, name=week_start_day" })
  weekStartDay?: number;
}


export class PutUsersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutUsersIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutUsersIdRequestBody;
}


export class PutUsersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  user?: shared.User;
}
