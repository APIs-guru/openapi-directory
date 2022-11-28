import { SpeakeasyBase } from "../../../internal/utils";
export declare class DatasetColumnsPut extends SpeakeasyBase {
    columnName: string;
    description?: string;
    expression?: string;
    filterable?: boolean;
    groupby?: boolean;
    id?: number;
    isActive?: boolean;
    isDttm?: boolean;
    pythonDateFormat?: string;
    type?: string;
    uuid?: string;
    verboseName?: string;
}
