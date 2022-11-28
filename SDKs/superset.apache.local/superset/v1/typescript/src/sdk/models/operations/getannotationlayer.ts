import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAnnotationLayerQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetListSchema;
}


export class GetAnnotationLayerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetAnnotationLayer200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetAnnotationLayer200ApplicationJsonLabelColumns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetAnnotationLayer200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=description_columns" })
  descriptionColumns?: GetAnnotationLayer200ApplicationJsonDescriptionColumns;

  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "json, name=label_columns" })
  labelColumns?: GetAnnotationLayer200ApplicationJsonLabelColumns;

  @SpeakeasyMetadata({ data: "json, name=list_columns" })
  listColumns?: string[];

  @SpeakeasyMetadata({ data: "json, name=list_title" })
  listTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=order_columns" })
  orderColumns?: string[];

  @SpeakeasyMetadata({ data: "json, name=result", elemType: shared.AnnotationLayerRestApiGetList })
  result?: shared.AnnotationLayerRestApiGetList[];
}


export class GetAnnotationLayer400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayer401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayer422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayer500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAnnotationLayerQueryParams;

  @SpeakeasyMetadata()
  security: GetAnnotationLayerSecurity;
}


export class GetAnnotationLayerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getAnnotationLayer200ApplicationJsonObject?: GetAnnotationLayer200ApplicationJson;

  @SpeakeasyMetadata()
  getAnnotationLayer400ApplicationJsonObject?: GetAnnotationLayer400ApplicationJson;

  @SpeakeasyMetadata()
  getAnnotationLayer401ApplicationJsonObject?: GetAnnotationLayer401ApplicationJson;

  @SpeakeasyMetadata()
  getAnnotationLayer422ApplicationJsonObject?: GetAnnotationLayer422ApplicationJson;

  @SpeakeasyMetadata()
  getAnnotationLayer500ApplicationJsonObject?: GetAnnotationLayer500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
