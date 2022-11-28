import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPatientManagementLookupTypesResponse extends SpeakeasyBase {
    contentType: string;
    lookupTypes?: shared.LookupType[];
    statusCode: number;
}
