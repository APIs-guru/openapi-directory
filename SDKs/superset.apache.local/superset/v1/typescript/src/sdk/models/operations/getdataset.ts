import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDatasetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetListSchema;
}


export class GetDatasetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDatasetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDatasetQueryParams;

  @Metadata()
  security: GetDatasetSecurity;
}


export class GetDataset200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetDataset200ApplicationJsonLabelColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetDataset200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=description_columns" })
  descriptionColumns?: GetDataset200ApplicationJsonDescriptionColumns;

  @Metadata({ data: "json, name=ids" })
  ids?: string[];

  @Metadata({ data: "json, name=label_columns" })
  labelColumns?: GetDataset200ApplicationJsonLabelColumns;

  @Metadata({ data: "json, name=list_columns" })
  listColumns?: string[];

  @Metadata({ data: "json, name=list_title" })
  listTitle?: string;

  @Metadata({ data: "json, name=order_columns" })
  orderColumns?: string[];

  @Metadata({ data: "json, name=result", elemType: shared.DatasetRestApiGetList })
  result?: shared.DatasetRestApiGetList[];
}


export class GetDataset400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDataset401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDataset422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDataset500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDataset200ApplicationJsonObject?: GetDataset200ApplicationJson;

  @Metadata()
  getDataset400ApplicationJsonObject?: GetDataset400ApplicationJson;

  @Metadata()
  getDataset401ApplicationJsonObject?: GetDataset401ApplicationJson;

  @Metadata()
  getDataset422ApplicationJsonObject?: GetDataset422ApplicationJson;

  @Metadata()
  getDataset500ApplicationJsonObject?: GetDataset500ApplicationJson;

  @Metadata()
  statusCode: number;
}
