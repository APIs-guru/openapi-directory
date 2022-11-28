import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreatePeppolIdentifierPathParams extends SpeakeasyBase {
    legalEntityId: number;
}
export declare class CreatePeppolIdentifierRequest extends SpeakeasyBase {
    pathParams: CreatePeppolIdentifierPathParams;
    request: any;
}
export declare class CreatePeppolIdentifierResponse extends SpeakeasyBase {
    contentType: string;
    errorModels?: any[];
    peppolIdentifier?: any;
    statusCode: number;
}
