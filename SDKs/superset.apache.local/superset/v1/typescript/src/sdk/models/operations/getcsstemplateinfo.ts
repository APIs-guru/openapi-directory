import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCssTemplateInfoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetInfoSchema;
}


export class GetCssTemplateInfoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetCssTemplateInfo200ApplicationJsonFiltersColumnName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator?: string;
}


export class GetCssTemplateInfo200ApplicationJsonFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column_name", elemType: GetCssTemplateInfo200ApplicationJsonFiltersColumnName })
  columnName?: GetCssTemplateInfo200ApplicationJsonFiltersColumnName[];
}


export class GetCssTemplateInfo200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add_columns" })
  addColumns?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=edit_columns" })
  editColumns?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: GetCssTemplateInfo200ApplicationJsonFilters;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: string[];
}


export class GetCssTemplateInfo400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetCssTemplateInfo401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetCssTemplateInfo422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetCssTemplateInfo500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetCssTemplateInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCssTemplateInfoQueryParams;

  @SpeakeasyMetadata()
  security: GetCssTemplateInfoSecurity;
}


export class GetCssTemplateInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCssTemplateInfo200ApplicationJsonObject?: GetCssTemplateInfo200ApplicationJson;

  @SpeakeasyMetadata()
  getCssTemplateInfo400ApplicationJsonObject?: GetCssTemplateInfo400ApplicationJson;

  @SpeakeasyMetadata()
  getCssTemplateInfo401ApplicationJsonObject?: GetCssTemplateInfo401ApplicationJson;

  @SpeakeasyMetadata()
  getCssTemplateInfo422ApplicationJsonObject?: GetCssTemplateInfo422ApplicationJson;

  @SpeakeasyMetadata()
  getCssTemplateInfo500ApplicationJsonObject?: GetCssTemplateInfo500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
