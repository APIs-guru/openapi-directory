import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAnnotationLayerPkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetAnnotationLayerPkQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetItemSchema;
}


export class GetAnnotationLayerPkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetAnnotationLayerPkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAnnotationLayerPkPathParams;

  @Metadata()
  queryParams: GetAnnotationLayerPkQueryParams;

  @Metadata()
  security: GetAnnotationLayerPkSecurity;
}


export class GetAnnotationLayerPk200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetAnnotationLayerPk200ApplicationJsonLabelColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetAnnotationLayerPk200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=description_columns" })
  descriptionColumns?: GetAnnotationLayerPk200ApplicationJsonDescriptionColumns;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=label_columns" })
  labelColumns?: GetAnnotationLayerPk200ApplicationJsonLabelColumns;

  @Metadata({ data: "json, name=result" })
  result?: shared.AnnotationLayerRestApiGet;

  @Metadata({ data: "json, name=show_columns" })
  showColumns?: string[];

  @Metadata({ data: "json, name=show_title" })
  showTitle?: string;
}


export class GetAnnotationLayerPk400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerPk401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerPk404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerPk422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerPk500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerPkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getAnnotationLayerPk200ApplicationJsonObject?: GetAnnotationLayerPk200ApplicationJson;

  @Metadata()
  getAnnotationLayerPk400ApplicationJsonObject?: GetAnnotationLayerPk400ApplicationJson;

  @Metadata()
  getAnnotationLayerPk401ApplicationJsonObject?: GetAnnotationLayerPk401ApplicationJson;

  @Metadata()
  getAnnotationLayerPk404ApplicationJsonObject?: GetAnnotationLayerPk404ApplicationJson;

  @Metadata()
  getAnnotationLayerPk422ApplicationJsonObject?: GetAnnotationLayerPk422ApplicationJson;

  @Metadata()
  getAnnotationLayerPk500ApplicationJsonObject?: GetAnnotationLayerPk500ApplicationJson;

  @Metadata()
  statusCode: number;
}
