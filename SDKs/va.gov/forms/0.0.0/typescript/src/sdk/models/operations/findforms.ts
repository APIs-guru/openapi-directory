import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FindFormsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class FindFormsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class FindForms200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: any[];
}


export class FindFormsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: FindFormsQueryParams;

  @SpeakeasyMetadata()
  security: FindFormsSecurity;
}


export class FindFormsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  findForms200ApplicationJsonObject?: FindForms200ApplicationJson;

  @SpeakeasyMetadata()
  findForms401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  findForms429ApplicationJsonAny?: any;
}
