import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAssetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteAssetSecurity extends SpeakeasyBase {
    developerKey: shared.SchemeDeveloperKey;
}
export declare class DeleteAssetRequest extends SpeakeasyBase {
    pathParams: DeleteAssetPathParams;
    security: DeleteAssetSecurity;
}
export declare class DeleteAssetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
