import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetListSchemaFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=col" })
  col: string;

  @Metadata({ data: "json, name=opr" })
  opr: string;

  @Metadata({ data: "json, name=value" })
  value: any;
}

export enum GetListSchemaKeysEnum {
    ListColumns = "list_columns"
,    OrderColumns = "order_columns"
,    LabelColumns = "label_columns"
,    DescriptionColumns = "description_columns"
,    ListTitle = "list_title"
,    None = "none"
}

export enum GetListSchemaOrderDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}


export class GetListSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=columns" })
  columns?: string[];

  @Metadata({ data: "json, name=filters", elemType: shared.GetListSchemaFilters })
  filters?: GetListSchemaFilters[];

  @Metadata({ data: "json, name=keys" })
  keys?: GetListSchemaKeysEnum[];

  @Metadata({ data: "json, name=order_column" })
  orderColumn?: string;

  @Metadata({ data: "json, name=order_direction" })
  orderDirection?: GetListSchemaOrderDirectionEnum;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;
}
