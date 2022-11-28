import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAdminRequestsRemoveByMetadataRequestBodyStringEquals extends SpeakeasyBase {
    caseInsensitive?: boolean;
    equalTo: boolean;
}
export declare class PostAdminRequestsRemoveByMetadataRequestBodyStringContains extends SpeakeasyBase {
    contains: string;
}
export declare class PostAdminRequestsRemoveByMetadataRequestBodyRegularExpressionMatch extends SpeakeasyBase {
    matches: string;
}
export declare class PostAdminRequestsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch extends SpeakeasyBase {
    doesNotMatch: string;
}
export declare class PostAdminRequestsRemoveByMetadataRequestBodyJsonEquals extends SpeakeasyBase {
    equalToJson: string;
}
export declare class PostAdminRequestsRemoveByMetadataRequestBodyJsonPathMatch extends SpeakeasyBase {
    ignoreArrayOrder?: boolean;
    ignoreExtraElements?: boolean;
    matchesJsonPath: string;
}
export declare class PostAdminRequestsRemoveByMetadataRequestBodyXmlEquality extends SpeakeasyBase {
    equalToXml: string;
}
export declare class PostAdminRequestsRemoveByMetadataRequestBodyXPathMatch extends SpeakeasyBase {
    matchesXpath: string;
    namespaces?: Map<string, any>;
    valuePattern?: Map<string, any>;
}
export declare class PostAdminRequestsRemoveByMetadataRequest extends SpeakeasyBase {
    request?: any;
}
export declare class PostAdminRequestsRemoveByMetadataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
