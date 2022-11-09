import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetEventsTypeEnum {
    All = "all",
    Clicks = "clicks",
    Contacts = "contacts"
}
export declare class GetEventsQueryParams extends SpeakeasyBase {
    company?: string;
    deal?: string;
    nexttoken?: string;
    queryexecutionid?: string;
    site?: string;
    type?: GetEventsTypeEnum;
}
export declare class GetEventsRequest extends SpeakeasyBase {
    queryParams: GetEventsQueryParams;
}
export declare class GetEventsResponse extends SpeakeasyBase {
    contentType: string;
    eventRecords?: shared.EventRecord[];
    statusCode: number;
}
