import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateAdministrationPathParams extends SpeakeasyBase {
    legalEntityId: number;
}
export declare class CreateAdministrationRequest extends SpeakeasyBase {
    pathParams: CreateAdministrationPathParams;
    request: any;
}
export declare class CreateAdministrationResponse extends SpeakeasyBase {
    administration?: any;
    contentType: string;
    errorModels?: any[];
    statusCode: number;
}
