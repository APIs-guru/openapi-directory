import { SpeakeasyBase } from "../../../internal/utils";
import { Campaign } from "./campaign";
export declare class CampaignsResponseError extends SpeakeasyBase {
    code?: string;
    message?: string;
}
export declare class CampaignsResponsePagination extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    totalCount?: number;
}
export declare class CampaignsResponse extends SpeakeasyBase {
    data?: Campaign[];
    error?: CampaignsResponseError;
    pagination?: CampaignsResponsePagination;
    success?: boolean;
}
