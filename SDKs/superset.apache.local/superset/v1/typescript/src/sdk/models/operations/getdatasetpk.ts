import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDatasetPkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetDatasetPkQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetItemSchema;
}


export class GetDatasetPkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDatasetPkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDatasetPkPathParams;

  @Metadata()
  queryParams: GetDatasetPkQueryParams;

  @Metadata()
  security: GetDatasetPkSecurity;
}


export class GetDatasetPk200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetDatasetPk200ApplicationJsonLabelColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetDatasetPk200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=description_columns" })
  descriptionColumns?: GetDatasetPk200ApplicationJsonDescriptionColumns;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=label_columns" })
  labelColumns?: GetDatasetPk200ApplicationJsonLabelColumns;

  @Metadata({ data: "json, name=result" })
  result?: shared.DatasetRestApiGet;

  @Metadata({ data: "json, name=show_columns" })
  showColumns?: string[];

  @Metadata({ data: "json, name=show_title" })
  showTitle?: string;
}


export class GetDatasetPk400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetPk401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetPk404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetPk422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetPk500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetPkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDatasetPk200ApplicationJsonObject?: GetDatasetPk200ApplicationJson;

  @Metadata()
  getDatasetPk400ApplicationJsonObject?: GetDatasetPk400ApplicationJson;

  @Metadata()
  getDatasetPk401ApplicationJsonObject?: GetDatasetPk401ApplicationJson;

  @Metadata()
  getDatasetPk404ApplicationJsonObject?: GetDatasetPk404ApplicationJson;

  @Metadata()
  getDatasetPk422ApplicationJsonObject?: GetDatasetPk422ApplicationJson;

  @Metadata()
  getDatasetPk500ApplicationJsonObject?: GetDatasetPk500ApplicationJson;

  @Metadata()
  statusCode: number;
}
