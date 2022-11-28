import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListSupportedCountriesV1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    supportedCountriesResponse?: shared.SupportedCountriesResponse;
}
