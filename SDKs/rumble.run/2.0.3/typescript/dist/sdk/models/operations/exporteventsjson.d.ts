import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExportEventsJsonQueryParams extends SpeakeasyBase {
    fields?: string;
    search?: string;
}
export declare class ExportEventsJsonSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class ExportEventsJsonRequest extends SpeakeasyBase {
    queryParams: ExportEventsJsonQueryParams;
    security: ExportEventsJsonSecurity;
}
export declare class ExportEventsJsonResponse extends SpeakeasyBase {
    contentType: string;
    events?: shared.Event[];
    statusCode: number;
}
