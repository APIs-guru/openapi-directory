import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMenuSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetMenu200ApplicationJsonResult extends SpeakeasyBase {
    childs?: Map<string, any>[];
    icon?: string;
    label?: string;
    name?: string;
    url?: string;
}
export declare class GetMenu200ApplicationJson extends SpeakeasyBase {
    result?: GetMenu200ApplicationJsonResult[];
}
export declare class GetMenu401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetMenuRequest extends SpeakeasyBase {
    security: GetMenuSecurity;
}
export declare class GetMenuResponse extends SpeakeasyBase {
    contentType: string;
    getMenu200ApplicationJsonObject?: GetMenu200ApplicationJson;
    getMenu401ApplicationJsonObject?: GetMenu401ApplicationJson;
    statusCode: number;
}
