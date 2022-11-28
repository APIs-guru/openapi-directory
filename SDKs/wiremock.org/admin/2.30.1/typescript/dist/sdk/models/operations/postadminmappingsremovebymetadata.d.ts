import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAdminMappingsRemoveByMetadataRequestBodyStringEquals extends SpeakeasyBase {
    caseInsensitive?: boolean;
    equalTo: boolean;
}
export declare class PostAdminMappingsRemoveByMetadataRequestBodyStringContains extends SpeakeasyBase {
    contains: string;
}
export declare class PostAdminMappingsRemoveByMetadataRequestBodyRegularExpressionMatch extends SpeakeasyBase {
    matches: string;
}
export declare class PostAdminMappingsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch extends SpeakeasyBase {
    doesNotMatch: string;
}
export declare class PostAdminMappingsRemoveByMetadataRequestBodyJsonEquals extends SpeakeasyBase {
    equalToJson: string;
}
export declare class PostAdminMappingsRemoveByMetadataRequestBodyJsonPathMatch extends SpeakeasyBase {
    ignoreArrayOrder?: boolean;
    ignoreExtraElements?: boolean;
    matchesJsonPath: string;
}
export declare class PostAdminMappingsRemoveByMetadataRequestBodyXmlEquality extends SpeakeasyBase {
    equalToXml: string;
}
export declare class PostAdminMappingsRemoveByMetadataRequestBodyXPathMatch extends SpeakeasyBase {
    matchesXpath: string;
    namespaces?: Map<string, any>;
    valuePattern?: Map<string, any>;
}
export declare class PostAdminMappingsRemoveByMetadataRequest extends SpeakeasyBase {
    request?: any;
}
export declare class PostAdminMappingsRemoveByMetadataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
