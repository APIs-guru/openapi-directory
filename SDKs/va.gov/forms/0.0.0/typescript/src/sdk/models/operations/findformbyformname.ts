import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FindFormByFormNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=form_name" })
  formName: string;
}


export class FindFormByFormNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class FindFormByFormNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FindFormByFormNamePathParams;

  @Metadata()
  security: FindFormByFormNameSecurity;
}


export class FindFormByFormName200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: any;
}


export class FindFormByFormName404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors: any[];
}


export class FindFormByFormNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  findFormByFormName200ApplicationJsonObject?: FindFormByFormName200ApplicationJson;

  @Metadata()
  findFormByFormName401ApplicationJsonAny?: any;

  @Metadata()
  findFormByFormName404ApplicationJsonObject?: FindFormByFormName404ApplicationJson;

  @Metadata()
  findFormByFormName429ApplicationJsonAny?: any;
}
