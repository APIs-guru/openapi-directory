import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAnnotationLayerInfoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetInfoSchema;
}


export class GetAnnotationLayerInfoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetAnnotationLayerInfo200ApplicationJsonFiltersColumnName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator?: string;
}


export class GetAnnotationLayerInfo200ApplicationJsonFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column_name", elemType: GetAnnotationLayerInfo200ApplicationJsonFiltersColumnName })
  columnName?: GetAnnotationLayerInfo200ApplicationJsonFiltersColumnName[];
}


export class GetAnnotationLayerInfo200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add_columns" })
  addColumns?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=edit_columns" })
  editColumns?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: GetAnnotationLayerInfo200ApplicationJsonFilters;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: string[];
}


export class GetAnnotationLayerInfo400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerInfo401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerInfo422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerInfo500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAnnotationLayerInfoQueryParams;

  @SpeakeasyMetadata()
  security: GetAnnotationLayerInfoSecurity;
}


export class GetAnnotationLayerInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getAnnotationLayerInfo200ApplicationJsonObject?: GetAnnotationLayerInfo200ApplicationJson;

  @SpeakeasyMetadata()
  getAnnotationLayerInfo400ApplicationJsonObject?: GetAnnotationLayerInfo400ApplicationJson;

  @SpeakeasyMetadata()
  getAnnotationLayerInfo401ApplicationJsonObject?: GetAnnotationLayerInfo401ApplicationJson;

  @SpeakeasyMetadata()
  getAnnotationLayerInfo422ApplicationJsonObject?: GetAnnotationLayerInfo422ApplicationJson;

  @SpeakeasyMetadata()
  getAnnotationLayerInfo500ApplicationJsonObject?: GetAnnotationLayerInfo500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
