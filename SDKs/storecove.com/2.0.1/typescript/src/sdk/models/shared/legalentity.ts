import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CountryEnum } from "./countryenum";

export enum LegalEntityDocumentTypeEnum {
    Invoice = "invoice"
,    InvoiceResponse = "invoice_response"
}


export class LegalEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=advertisements" })
  advertisements?: LegalEntityDocumentTypeEnum[];

  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=country" })
  country?: CountryEnum;

  @Metadata({ data: "json, name=county" })
  county?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=line1" })
  line1?: string;

  @Metadata({ data: "json, name=line2" })
  line2?: string;

  @Metadata({ data: "json, name=party_name" })
  partyName?: string;

  @Metadata({ data: "json, name=peppol_identifiers" })
  peppolIdentifiers?: any[];

  @Metadata({ data: "json, name=public" })
  public?: boolean;

  @Metadata({ data: "json, name=tenant_id" })
  tenantId?: string;

  @Metadata({ data: "json, name=zip" })
  zip?: string;
}
