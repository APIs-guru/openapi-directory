import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAnnotationLayerPkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetAnnotationLayerPkQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetItemSchema;
}


export class GetAnnotationLayerPkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetAnnotationLayerPk200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetAnnotationLayerPk200ApplicationJsonLabelColumns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetAnnotationLayerPk200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description_columns" })
  descriptionColumns?: GetAnnotationLayerPk200ApplicationJsonDescriptionColumns;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=label_columns" })
  labelColumns?: GetAnnotationLayerPk200ApplicationJsonLabelColumns;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: shared.AnnotationLayerRestApiGet;

  @SpeakeasyMetadata({ data: "json, name=show_columns" })
  showColumns?: string[];

  @SpeakeasyMetadata({ data: "json, name=show_title" })
  showTitle?: string;
}


export class GetAnnotationLayerPk400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerPk401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerPk404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerPk422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerPk500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerPkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAnnotationLayerPkPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAnnotationLayerPkQueryParams;

  @SpeakeasyMetadata()
  security: GetAnnotationLayerPkSecurity;
}


export class GetAnnotationLayerPkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getAnnotationLayerPk200ApplicationJsonObject?: GetAnnotationLayerPk200ApplicationJson;

  @SpeakeasyMetadata()
  getAnnotationLayerPk400ApplicationJsonObject?: GetAnnotationLayerPk400ApplicationJson;

  @SpeakeasyMetadata()
  getAnnotationLayerPk401ApplicationJsonObject?: GetAnnotationLayerPk401ApplicationJson;

  @SpeakeasyMetadata()
  getAnnotationLayerPk404ApplicationJsonObject?: GetAnnotationLayerPk404ApplicationJson;

  @SpeakeasyMetadata()
  getAnnotationLayerPk422ApplicationJsonObject?: GetAnnotationLayerPk422ApplicationJson;

  @SpeakeasyMetadata()
  getAnnotationLayerPk500ApplicationJsonObject?: GetAnnotationLayerPk500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
