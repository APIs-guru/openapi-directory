import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCssTemplateInfoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetInfoSchema;
}


export class GetCssTemplateInfoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetCssTemplateInfoRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCssTemplateInfoQueryParams;

  @Metadata()
  security: GetCssTemplateInfoSecurity;
}


export class GetCssTemplateInfo200ApplicationJsonFiltersColumnName extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=operator" })
  operator?: string;
}


export class GetCssTemplateInfo200ApplicationJsonFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name", elemType: operations.GetCssTemplateInfo200ApplicationJsonFiltersColumnName })
  columnName?: GetCssTemplateInfo200ApplicationJsonFiltersColumnName[];
}


export class GetCssTemplateInfo200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=add_columns" })
  addColumns?: Map<string, any>;

  @Metadata({ data: "json, name=edit_columns" })
  editColumns?: Map<string, any>;

  @Metadata({ data: "json, name=filters" })
  filters?: GetCssTemplateInfo200ApplicationJsonFilters;

  @Metadata({ data: "json, name=permissions" })
  permissions?: string[];
}


export class GetCssTemplateInfo400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetCssTemplateInfo401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetCssTemplateInfo422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetCssTemplateInfo500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetCssTemplateInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getCssTemplateInfo200ApplicationJsonObject?: GetCssTemplateInfo200ApplicationJson;

  @Metadata()
  getCssTemplateInfo400ApplicationJsonObject?: GetCssTemplateInfo400ApplicationJson;

  @Metadata()
  getCssTemplateInfo401ApplicationJsonObject?: GetCssTemplateInfo401ApplicationJson;

  @Metadata()
  getCssTemplateInfo422ApplicationJsonObject?: GetCssTemplateInfo422ApplicationJson;

  @Metadata()
  getCssTemplateInfo500ApplicationJsonObject?: GetCssTemplateInfo500ApplicationJson;

  @Metadata()
  statusCode: number;
}
