import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAnnotationLayerInfoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetInfoSchema;
}


export class GetAnnotationLayerInfoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetAnnotationLayerInfoRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAnnotationLayerInfoQueryParams;

  @Metadata()
  security: GetAnnotationLayerInfoSecurity;
}


export class GetAnnotationLayerInfo200ApplicationJsonFiltersColumnName extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=operator" })
  operator?: string;
}


export class GetAnnotationLayerInfo200ApplicationJsonFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name", elemType: operations.GetAnnotationLayerInfo200ApplicationJsonFiltersColumnName })
  columnName?: GetAnnotationLayerInfo200ApplicationJsonFiltersColumnName[];
}


export class GetAnnotationLayerInfo200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=add_columns" })
  addColumns?: Map<string, any>;

  @Metadata({ data: "json, name=edit_columns" })
  editColumns?: Map<string, any>;

  @Metadata({ data: "json, name=filters" })
  filters?: GetAnnotationLayerInfo200ApplicationJsonFilters;

  @Metadata({ data: "json, name=permissions" })
  permissions?: string[];
}


export class GetAnnotationLayerInfo400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerInfo401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerInfo422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerInfo500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getAnnotationLayerInfo200ApplicationJsonObject?: GetAnnotationLayerInfo200ApplicationJson;

  @Metadata()
  getAnnotationLayerInfo400ApplicationJsonObject?: GetAnnotationLayerInfo400ApplicationJson;

  @Metadata()
  getAnnotationLayerInfo401ApplicationJsonObject?: GetAnnotationLayerInfo401ApplicationJson;

  @Metadata()
  getAnnotationLayerInfo422ApplicationJsonObject?: GetAnnotationLayerInfo422ApplicationJson;

  @Metadata()
  getAnnotationLayerInfo500ApplicationJsonObject?: GetAnnotationLayerInfo500ApplicationJson;

  @Metadata()
  statusCode: number;
}
