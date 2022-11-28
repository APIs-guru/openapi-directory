import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetListSchemaFilters extends SpeakeasyBase {
    col: string;
    opr: string;
    value: any;
}
export declare enum GetListSchemaKeysEnum {
    ListColumns = "list_columns",
    OrderColumns = "order_columns",
    LabelColumns = "label_columns",
    DescriptionColumns = "description_columns",
    ListTitle = "list_title",
    None = "none"
}
export declare enum GetListSchemaOrderDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class GetListSchema extends SpeakeasyBase {
    columns?: string[];
    filters?: GetListSchemaFilters[];
    keys?: GetListSchemaKeysEnum[];
    orderColumn?: string;
    orderDirection?: GetListSchemaOrderDirectionEnum;
    page?: number;
    pageSize?: number;
}
