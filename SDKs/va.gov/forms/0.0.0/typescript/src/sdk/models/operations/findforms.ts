import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FindFormsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class FindFormsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class FindFormsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: FindFormsQueryParams;

  @Metadata()
  security: FindFormsSecurity;
}


export class FindForms200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: any[];
}


export class FindFormsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  findForms200ApplicationJsonObject?: FindForms200ApplicationJson;

  @Metadata()
  findForms401ApplicationJsonAny?: any;

  @Metadata()
  findForms429ApplicationJsonAny?: any;
}
