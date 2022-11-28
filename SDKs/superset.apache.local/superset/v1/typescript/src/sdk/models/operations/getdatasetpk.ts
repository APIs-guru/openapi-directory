import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDatasetPkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetDatasetPkQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetItemSchema;
}


export class GetDatasetPkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDatasetPk200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetDatasetPk200ApplicationJsonLabelColumns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetDatasetPk200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description_columns" })
  descriptionColumns?: GetDatasetPk200ApplicationJsonDescriptionColumns;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=label_columns" })
  labelColumns?: GetDatasetPk200ApplicationJsonLabelColumns;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: shared.DatasetRestApiGet;

  @SpeakeasyMetadata({ data: "json, name=show_columns" })
  showColumns?: string[];

  @SpeakeasyMetadata({ data: "json, name=show_title" })
  showTitle?: string;
}


export class GetDatasetPk400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetPk401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetPk404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetPk422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetPk500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetPkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDatasetPkPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDatasetPkQueryParams;

  @SpeakeasyMetadata()
  security: GetDatasetPkSecurity;
}


export class GetDatasetPkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDatasetPk200ApplicationJsonObject?: GetDatasetPk200ApplicationJson;

  @SpeakeasyMetadata()
  getDatasetPk400ApplicationJsonObject?: GetDatasetPk400ApplicationJson;

  @SpeakeasyMetadata()
  getDatasetPk401ApplicationJsonObject?: GetDatasetPk401ApplicationJson;

  @SpeakeasyMetadata()
  getDatasetPk404ApplicationJsonObject?: GetDatasetPk404ApplicationJson;

  @SpeakeasyMetadata()
  getDatasetPk422ApplicationJsonObject?: GetDatasetPk422ApplicationJson;

  @SpeakeasyMetadata()
  getDatasetPk500ApplicationJsonObject?: GetDatasetPk500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
