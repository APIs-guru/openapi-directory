import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPersonasQueryParams extends SpeakeasyBase {
    count?: number;
    expand?: string[];
    fields?: string[];
    name?: string;
    page?: number;
}
export declare class GetPersonas200ApplicationJsonLinks extends SpeakeasyBase {
    self?: shared.Link;
}
export declare class GetPersonas200ApplicationJson extends SpeakeasyBase {
    links?: GetPersonas200ApplicationJsonLinks;
    meta?: shared.Pagination;
    items?: shared.Persona[];
}
export declare class GetPersonasRequest extends SpeakeasyBase {
    queryParams: GetPersonasQueryParams;
}
export declare class GetPersonasResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    getPersonas200ApplicationJsonObject?: GetPersonas200ApplicationJson;
    statusCode: number;
}
