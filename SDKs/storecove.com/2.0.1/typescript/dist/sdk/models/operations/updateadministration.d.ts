import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateAdministrationPathParams extends SpeakeasyBase {
    id: number;
    legalEntityId: number;
}
export declare class UpdateAdministrationRequest extends SpeakeasyBase {
    pathParams: UpdateAdministrationPathParams;
    request: any;
}
export declare class UpdateAdministrationResponse extends SpeakeasyBase {
    administration?: any;
    contentType: string;
    statusCode: number;
}
