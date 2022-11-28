import { SpeakeasyBase } from "../../../internal/utils";
import { CountryEnum } from "./countryenum";
export declare enum LegalEntityDocumentTypeEnum {
    Invoice = "invoice",
    InvoiceResponse = "invoice_response"
}
export declare class LegalEntity extends SpeakeasyBase {
    advertisements?: LegalEntityDocumentTypeEnum[];
    city?: string;
    country?: CountryEnum;
    county?: string;
    id?: number;
    line1?: string;
    line2?: string;
    partyName?: string;
    peppolIdentifiers?: any[];
    public?: boolean;
    tenantId?: string;
    zip?: string;
}
