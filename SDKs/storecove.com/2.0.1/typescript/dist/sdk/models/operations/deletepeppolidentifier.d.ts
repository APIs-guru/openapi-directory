import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeletePeppolIdentifierPathParams extends SpeakeasyBase {
    identifier: string;
    legalEntityId: number;
    scheme: string;
    superscheme: string;
}
export declare class DeletePeppolIdentifierRequest extends SpeakeasyBase {
    pathParams: DeletePeppolIdentifierPathParams;
}
export declare class DeletePeppolIdentifierResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
