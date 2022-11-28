import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FindFormByFormNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=form_name" })
  formName: string;
}


export class FindFormByFormNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class FindFormByFormName200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: any;
}


export class FindFormByFormName404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors: any[];
}


export class FindFormByFormNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FindFormByFormNamePathParams;

  @SpeakeasyMetadata()
  security: FindFormByFormNameSecurity;
}


export class FindFormByFormNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  findFormByFormName200ApplicationJsonObject?: FindFormByFormName200ApplicationJson;

  @SpeakeasyMetadata()
  findFormByFormName401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  findFormByFormName404ApplicationJsonObject?: FindFormByFormName404ApplicationJson;

  @SpeakeasyMetadata()
  findFormByFormName429ApplicationJsonAny?: any;
}
