import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AddRestrictionsV1RequestBodyEncryptionAlgorithmEnum {
    Aes128 = "AES-128",
    Aes256 = "AES-256"
}
export declare class AddRestrictionsV1RequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class AddRestrictionsV1RequestBody extends SpeakeasyBase {
    allowAccessibility?: boolean;
    allowAssembleDocument?: boolean;
    allowChangeContent?: boolean;
    allowCommentAndFillForm?: boolean;
    allowCopyContent?: boolean;
    allowFillForm?: boolean;
    allowPrint?: boolean;
    allowPrintHighResolution?: boolean;
    encryptionAlgorithm?: AddRestrictionsV1RequestBodyEncryptionAlgorithmEnum;
    file: AddRestrictionsV1RequestBodyFile;
    ownerPassword: string;
    userPassword?: string;
}
export declare class AddRestrictionsV14XxApplicationProblemPlusJson extends SpeakeasyBase {
    errors?: Map<string, any>;
    status?: number;
    title?: string;
    type?: string;
}
export declare class AddRestrictionsV1Request extends SpeakeasyBase {
    request: AddRestrictionsV1RequestBody;
}
export declare class AddRestrictionsV1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    addRestrictionsV1200ApplicationPdfBinaryString?: Uint8Array;
    addRestrictionsV14XxApplicationProblemPlusJsonObject?: AddRestrictionsV14XxApplicationProblemPlusJson;
}
