import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPayeesV4QueryParams extends SpeakeasyBase {
    disabled?: boolean;
    displayName?: string;
    email?: string;
    ofacStatus?: shared.OfacStatusEnum;
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
export declare class ListPayeesV4Request extends SpeakeasyBase {
    queryParams: ListPayeesV4QueryParams;
}
export declare class ListPayeesV4Response extends SpeakeasyBase {
    contentType: string;
    pagedPayeeResponse2?: shared.PagedPayeeResponse2;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
