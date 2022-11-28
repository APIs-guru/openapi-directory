import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteAdministrationPathParams extends SpeakeasyBase {
    id: number;
    legalEntityId: number;
}
export declare class DeleteAdministrationRequest extends SpeakeasyBase {
    pathParams: DeleteAdministrationPathParams;
}
export declare class DeleteAdministrationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
