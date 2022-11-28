import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetListSchemaFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=col" })
  col: string;

  @SpeakeasyMetadata({ data: "json, name=opr" })
  opr: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: any;
}

export enum GetListSchemaKeysEnum {
    ListColumns = "list_columns",
    OrderColumns = "order_columns",
    LabelColumns = "label_columns",
    DescriptionColumns = "description_columns",
    ListTitle = "list_title",
    None = "none"
}

export enum GetListSchemaOrderDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}


export class GetListSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columns" })
  columns?: string[];

  @SpeakeasyMetadata({ data: "json, name=filters", elemType: GetListSchemaFilters })
  filters?: GetListSchemaFilters[];

  @SpeakeasyMetadata({ data: "json, name=keys" })
  keys?: GetListSchemaKeysEnum[];

  @SpeakeasyMetadata({ data: "json, name=order_column" })
  orderColumn?: string;

  @SpeakeasyMetadata({ data: "json, name=order_direction" })
  orderDirection?: GetListSchemaOrderDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;
}
