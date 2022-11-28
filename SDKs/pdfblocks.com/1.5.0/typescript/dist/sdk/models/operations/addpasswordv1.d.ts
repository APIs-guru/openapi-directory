import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AddPasswordV1RequestBodyEncryptionAlgorithmEnum {
    Aes128 = "AES-128",
    Aes256 = "AES-256"
}
export declare class AddPasswordV1RequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class AddPasswordV1RequestBody extends SpeakeasyBase {
    encryptionAlgorithm?: AddPasswordV1RequestBodyEncryptionAlgorithmEnum;
    file: AddPasswordV1RequestBodyFile;
    password: string;
}
export declare class AddPasswordV14XxApplicationProblemPlusJson extends SpeakeasyBase {
    errors?: Map<string, any>;
    status?: number;
    title?: string;
    type?: string;
}
export declare class AddPasswordV1Request extends SpeakeasyBase {
    request: AddPasswordV1RequestBody;
}
export declare class AddPasswordV1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    addPasswordV1200ApplicationPdfBinaryString?: Uint8Array;
    addPasswordV14XxApplicationProblemPlusJsonObject?: AddPasswordV14XxApplicationProblemPlusJson;
}
