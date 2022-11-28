import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TaxonomyDestinationsHeaders extends SpeakeasyBase {
    acceptLanguage: string;
}
export declare class TaxonomyDestinations200ApplicationJsonData extends SpeakeasyBase {
    defaultCurrencyCode?: string;
    destinationId?: number;
    destinationName?: string;
    destinationType?: shared.DestinationTypeEnum;
    destinationUrlName?: string;
    iataCode?: string;
    latitude?: number;
    longitude?: number;
    lookupId?: string;
    parentId?: number;
    selectable?: boolean;
    sortOrder?: number;
    timeZone?: string;
}
export declare class TaxonomyDestinations200ApplicationJson extends SpeakeasyBase {
    data?: TaxonomyDestinations200ApplicationJsonData[];
    dateStamp?: string;
    errorCodes?: string[];
    errorMessage?: any[];
    errorMessageText?: string;
    errorName?: string;
    errorReference?: string;
    errorType?: string;
    extraInfo?: Map<string, any>;
    extraObject?: Map<string, any>;
    success?: boolean;
    totalCount?: number;
    vmid?: string;
}
export declare class TaxonomyDestinationsRequest extends SpeakeasyBase {
    headers: TaxonomyDestinationsHeaders;
}
export declare class TaxonomyDestinationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taxonomyDestinations200ApplicationJsonObject?: TaxonomyDestinations200ApplicationJson;
}
