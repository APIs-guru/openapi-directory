import { SpeakeasyBase } from "../../../internal/utils";
export declare class TransformDefinitionTransformDefinition extends SpeakeasyBase {
    active?: boolean;
    contentType?: string;
    definition?: string;
    definitionType?: string;
    readonly?: boolean;
    supportedReports?: string;
    taxYear?: number;
    title?: string;
    version?: string;
}
export declare class TransformDefinition extends SpeakeasyBase {
    transformDefinition?: TransformDefinitionTransformDefinition;
}
