import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDatasets1QueryParams extends SpeakeasyBase {
    count?: string;
    global?: boolean;
    offset?: string;
}
export declare class ListDatasets1Security extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class ListDatasets1Request extends SpeakeasyBase {
    queryParams: ListDatasets1QueryParams;
    security: ListDatasets1Security;
}
export declare class ListDatasets1Response extends SpeakeasyBase {
    contentType: string;
    datasetList?: shared.DatasetList;
    statusCode: number;
}
