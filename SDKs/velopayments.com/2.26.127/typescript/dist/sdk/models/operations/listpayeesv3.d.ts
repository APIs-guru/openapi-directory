import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPayeesV3QueryParams extends SpeakeasyBase {
    disabled?: boolean;
    displayName?: string;
    email?: string;
    onboardedStatus?: shared.OnboardedStatusEnum;
    page?: number;
    pageSize?: number;
    payeeCountry?: string;
    payeeType?: shared.PayeeTypeEnum;
    payorId: string;
    remoteId?: string;
    sort?: string;
    watchlistStatus?: shared.WatchlistStatusEnum;
}
export declare class ListPayeesV3Request extends SpeakeasyBase {
    queryParams: ListPayeesV3QueryParams;
}
export declare class ListPayeesV3Response extends SpeakeasyBase {
    contentType: string;
    pagedPayeeResponse?: shared.PagedPayeeResponse;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
