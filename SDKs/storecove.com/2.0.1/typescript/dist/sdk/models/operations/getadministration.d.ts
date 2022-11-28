import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAdministrationPathParams extends SpeakeasyBase {
    id: number;
    legalEntityId: number;
}
export declare class GetAdministrationRequest extends SpeakeasyBase {
    pathParams: GetAdministrationPathParams;
}
export declare class GetAdministrationResponse extends SpeakeasyBase {
    administration?: any;
    contentType: string;
    statusCode: number;
}
