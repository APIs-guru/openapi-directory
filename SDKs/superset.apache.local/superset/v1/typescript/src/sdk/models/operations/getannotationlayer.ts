import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAnnotationLayerQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetListSchema;
}


export class GetAnnotationLayerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetAnnotationLayerRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAnnotationLayerQueryParams;

  @Metadata()
  security: GetAnnotationLayerSecurity;
}


export class GetAnnotationLayer200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetAnnotationLayer200ApplicationJsonLabelColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetAnnotationLayer200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=description_columns" })
  descriptionColumns?: GetAnnotationLayer200ApplicationJsonDescriptionColumns;

  @Metadata({ data: "json, name=ids" })
  ids?: string[];

  @Metadata({ data: "json, name=label_columns" })
  labelColumns?: GetAnnotationLayer200ApplicationJsonLabelColumns;

  @Metadata({ data: "json, name=list_columns" })
  listColumns?: string[];

  @Metadata({ data: "json, name=list_title" })
  listTitle?: string;

  @Metadata({ data: "json, name=order_columns" })
  orderColumns?: string[];

  @Metadata({ data: "json, name=result", elemType: shared.AnnotationLayerRestApiGetList })
  result?: shared.AnnotationLayerRestApiGetList[];
}


export class GetAnnotationLayer400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayer401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayer422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayer500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getAnnotationLayer200ApplicationJsonObject?: GetAnnotationLayer200ApplicationJson;

  @Metadata()
  getAnnotationLayer400ApplicationJsonObject?: GetAnnotationLayer400ApplicationJson;

  @Metadata()
  getAnnotationLayer401ApplicationJsonObject?: GetAnnotationLayer401ApplicationJson;

  @Metadata()
  getAnnotationLayer422ApplicationJsonObject?: GetAnnotationLayer422ApplicationJson;

  @Metadata()
  getAnnotationLayer500ApplicationJsonObject?: GetAnnotationLayer500ApplicationJson;

  @Metadata()
  statusCode: number;
}
