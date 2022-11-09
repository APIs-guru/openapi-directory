import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GraphQlRequest extends SpeakeasyBase {
    operationName?: string;
    query: string;
    variables?: Map<string, any>;
}
