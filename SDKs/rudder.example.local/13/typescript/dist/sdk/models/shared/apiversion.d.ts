import { SpeakeasyBase } from "../../../internal/utils";
export declare class ApiVersionAll extends SpeakeasyBase {
    status: any;
    version: number;
}
export declare class ApiVersion extends SpeakeasyBase {
    all?: ApiVersionAll[];
    latest?: number;
}
