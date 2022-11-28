import { SpeakeasyBase } from "../../../internal/utils";
export declare class Database extends SpeakeasyBase {
    allowMultiSchemaMetadataFetch?: boolean;
    allowsCostEstimate?: boolean;
    allowsSubquery?: boolean;
    allowsVirtualTableExplore?: boolean;
    backend?: string;
    exploreDatabaseId?: number;
    id?: number;
    name?: string;
}
