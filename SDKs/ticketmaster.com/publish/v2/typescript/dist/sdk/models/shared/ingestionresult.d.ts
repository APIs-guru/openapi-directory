import { SpeakeasyBase } from "../../../internal/utils";
export declare enum IngestionResultStatusEnum {
    Error = "Error",
    SuccessWarning = "SuccessWarning",
    Success = "Success"
}
/**
 * This class defines the IngestionResult on the Publish API
**/
export declare class IngestionResult extends SpeakeasyBase {
    id?: string;
    ignoredProperties?: Map<string, Map<string, any>>;
    invalidProperties?: Map<string, Map<string, any>>;
    invalidValues?: Map<string, Map<string, any>>;
    missingProperties?: Map<string, Map<string, any>>;
    status: IngestionResultStatusEnum;
    unknownProperties?: Map<string, Map<string, any>>;
}
