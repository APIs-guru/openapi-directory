import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CampaignsRemovePathParams extends SpeakeasyBase {
    accountId: string;
    campaignId: string;
}
export declare class CampaignsRemoveSecurity extends SpeakeasyBase {
    sakariAuth: shared.SchemeSakariAuth;
}
export declare class CampaignsRemove200ApplicationJson extends SpeakeasyBase {
    success?: boolean;
}
export declare class CampaignsRemoveRequest extends SpeakeasyBase {
    pathParams: CampaignsRemovePathParams;
    security: CampaignsRemoveSecurity;
}
export declare class CampaignsRemoveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    campaignsRemove200ApplicationJsonObject?: CampaignsRemove200ApplicationJson;
}
