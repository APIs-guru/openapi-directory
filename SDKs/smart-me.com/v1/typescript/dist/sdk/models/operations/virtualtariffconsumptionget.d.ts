import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VirtualTariffConsumptionGetQueryParams extends SpeakeasyBase {
    endDate: Date;
    folderId: string;
    startDate: Date;
}
export declare class VirtualTariffConsumptionGetRequest extends SpeakeasyBase {
    queryParams: VirtualTariffConsumptionGetQueryParams;
}
export declare class VirtualTariffConsumptionGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    virtualTariffConsumptionData?: shared.VirtualTariffConsumptionData[];
}
