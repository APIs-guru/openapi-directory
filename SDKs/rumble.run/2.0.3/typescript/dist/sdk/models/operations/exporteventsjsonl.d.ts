import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExportEventsJsonlQueryParams extends SpeakeasyBase {
    fields?: string;
    search?: string;
}
export declare class ExportEventsJsonlSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class ExportEventsJsonlRequest extends SpeakeasyBase {
    queryParams: ExportEventsJsonlQueryParams;
    security: ExportEventsJsonlSecurity;
}
export declare class ExportEventsJsonlResponse extends SpeakeasyBase {
    contentType: string;
    events?: shared.Event[];
    statusCode: number;
}
