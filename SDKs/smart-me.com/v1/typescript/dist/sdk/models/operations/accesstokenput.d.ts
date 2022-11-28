import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccessTokenPutRequests extends SpeakeasyBase {
    accessTokenToPut?: shared.AccessTokenToPut;
    accessTokenToPut1?: shared.AccessTokenToPut;
    accessTokenToPut2?: shared.AccessTokenToPut;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class AccessTokenPutRequest extends SpeakeasyBase {
    request: AccessTokenPutRequests;
}
export declare class AccessTokenPutResponse extends SpeakeasyBase {
    accessTokenPut200ApplicationJsonString?: string;
    accessTokenPut200ApplicationXmlString?: string;
    accessTokenPut200TextJsonString?: string;
    accessTokenPut200TextXmlString?: string;
    contentType: string;
    statusCode: number;
}
