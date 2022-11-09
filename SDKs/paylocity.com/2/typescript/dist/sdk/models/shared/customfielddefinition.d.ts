import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CustomFieldDefinitionValues extends SpeakeasyBase {
    code?: string;
    description?: string;
}
export declare class CustomFieldDefinition extends SpeakeasyBase {
    category?: string;
    defaultValue?: string;
    isRequired?: boolean;
    label?: string;
    type?: string;
    values?: CustomFieldDefinitionValues[];
}
