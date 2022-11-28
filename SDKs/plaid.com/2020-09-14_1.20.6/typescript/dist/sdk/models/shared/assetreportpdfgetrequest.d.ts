import { SpeakeasyBase } from "../../../internal/utils";
/**
 * AssetReportPDFGetRequest defines the request schema for `/asset_report/pdf/get`
**/
export declare class AssetReportPdfGetRequest extends SpeakeasyBase {
    assetReportToken: string;
    clientId?: string;
    secret?: string;
}
