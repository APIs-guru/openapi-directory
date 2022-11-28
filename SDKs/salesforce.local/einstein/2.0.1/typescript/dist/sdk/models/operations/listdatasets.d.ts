import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDatasetsQueryParams extends SpeakeasyBase {
    count?: string;
    global?: boolean;
    offset?: string;
}
export declare class ListDatasetsSecurity extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class ListDatasetsRequest extends SpeakeasyBase {
    queryParams: ListDatasetsQueryParams;
    security: ListDatasetsSecurity;
}
export declare class ListDatasetsResponse extends SpeakeasyBase {
    contentType: string;
    datasetList?: shared.DatasetList;
    statusCode: number;
}
