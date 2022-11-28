import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSearchVersionNumberStructuredGeocodeExtPathParams extends SpeakeasyBase {
    ext: shared.ExtEnum;
    versionNumber: number;
}
export declare class GetSearchVersionNumberStructuredGeocodeExtQueryParams extends SpeakeasyBase {
    countryCode: string;
    countrySecondarySubdivision?: string;
    countrySubdivision?: string;
    countryTertiarySubdivision?: string;
    crossStreet?: string;
    extendedPostalCodesFor?: string;
    language?: string;
    limit?: number;
    municipality?: string;
    municipalitySubdivision?: string;
    ofs?: number;
    postalCode?: string;
    streetName?: string;
    streetNumber?: string;
}
export declare class GetSearchVersionNumberStructuredGeocodeExtRequest extends SpeakeasyBase {
    pathParams: GetSearchVersionNumberStructuredGeocodeExtPathParams;
    queryParams: GetSearchVersionNumberStructuredGeocodeExtQueryParams;
}
export declare class GetSearchVersionNumberStructuredGeocodeExtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
