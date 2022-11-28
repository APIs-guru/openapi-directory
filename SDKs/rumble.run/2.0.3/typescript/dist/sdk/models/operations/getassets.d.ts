import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAssetsQueryParams extends SpeakeasyBase {
    search?: string;
}
export declare class GetAssetsSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetAssetsRequest extends SpeakeasyBase {
    queryParams: GetAssetsQueryParams;
    security: GetAssetsSecurity;
}
export declare class GetAssetsResponse extends SpeakeasyBase {
    assets?: shared.Asset[];
    contentType: string;
    statusCode: number;
}
