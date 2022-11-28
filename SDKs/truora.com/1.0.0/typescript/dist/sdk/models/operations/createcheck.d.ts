import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateCheckTruoraPriorityEnum {
    Low = "low",
    Medium = "medium",
    High = "high"
}
export declare class CreateCheckHeaders extends SpeakeasyBase {
    truoraPriority?: CreateCheckTruoraPriorityEnum;
}
export declare class CreateCheckSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class CreateCheckRequest extends SpeakeasyBase {
    headers: CreateCheckHeaders;
    request: shared.CreateCheckInput;
    security: CreateCheckSecurity;
}
export declare class CreateCheckResponse extends SpeakeasyBase {
    checkOutput?: shared.CheckOutput;
    contentType: string;
    error?: any;
    statusCode: number;
}
