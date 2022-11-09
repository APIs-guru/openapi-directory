import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SmsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=debug" })
  debug?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=delay" })
  delay?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=details" })
  details?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=flash" })
  flash?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=foreign_id" })
  foreignId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=json" })
  json?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=label" })
  label?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=no_reload" })
  noReload?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=performance_tracking" })
  performanceTracking?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=return_msg_id" })
  returnMsgId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=udh" })
  udh?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=unicode" })
  unicode?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=utf8" })
  utf8?: number;
}


export class SmsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SmsQueryParams;
}


export class Sms200ApplicationJsonMessages extends SpeakeasyBase {
  @Metadata({ data: "json, name=encoding" })
  encoding?: string;

  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_text" })
  errorText?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=messages" })
  messages?: string[];

  @Metadata({ data: "json, name=parts" })
  parts?: number;

  @Metadata({ data: "json, name=price" })
  price?: number;

  @Metadata({ data: "json, name=recipient" })
  recipient?: string;

  @Metadata({ data: "json, name=sender" })
  sender?: string;

  @Metadata({ data: "json, name=success" })
  success?: boolean;

  @Metadata({ data: "json, name=text" })
  text?: string;
}

export enum Sms200ApplicationJsonSmsTypeEnum {
    Economy = "economy"
,    Direct = "direct"
}


export class Sms200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=balance" })
  balance?: number;

  @Metadata({ data: "json, name=debug" })
  debug?: string;

  @Metadata({ data: "json, name=messages", elemType: operations.Sms200ApplicationJsonMessages })
  messages?: Sms200ApplicationJsonMessages[];

  @Metadata({ data: "json, name=sms_type" })
  smsType?: Sms200ApplicationJsonSmsTypeEnum;

  @Metadata({ data: "json, name=success" })
  success?: string;

  @Metadata({ data: "json, name=total_price" })
  totalPrice?: number;
}


export class SmsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  sms200ApplicationJsonObject?: Sms200ApplicationJson;

  @Metadata()
  statusCode: number;
}
