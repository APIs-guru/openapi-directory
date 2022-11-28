import { SpeakeasyBase } from "../../../internal/utils";
import { Metric } from "./metric";
export declare class Meta extends SpeakeasyBase {
    metrics?: Metric[];
    puid?: string;
    requestPath?: Map<string, string>;
    routing?: Map<string, number>;
    tags?: Map<string, any>;
}
