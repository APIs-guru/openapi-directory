import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutUsersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutUsersIdRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=always_show_base_currency" })
  alwaysShowBaseCurrency?: boolean;

  @Metadata({ data: "json, name=base_currency_code" })
  baseCurrencyCode?: string;

  @Metadata({ data: "json, name=beta_user" })
  betaUser?: boolean;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=time_zone" })
  timeZone?: string;

  @Metadata({ data: "json, name=week_start_day" })
  weekStartDay?: number;
}


export class PutUsersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutUsersIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PutUsersIdRequestBody;
}


export class PutUsersIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;

  @Metadata()
  user?: shared.User;
}
