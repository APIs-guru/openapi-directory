import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPersonasIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetPersonasIdQueryParams extends SpeakeasyBase {
    expand?: string[];
    fields?: string[];
}
export declare class GetPersonasIdRequest extends SpeakeasyBase {
    pathParams: GetPersonasIdPathParams;
    queryParams: GetPersonasIdQueryParams;
}
export declare class GetPersonasIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: shared.Error;
    persona?: shared.Persona;
    statusCode: number;
}
