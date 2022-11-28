import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CountryEnum } from "./countryenum";


export enum LegalEntityDocumentTypeEnum {
    Invoice = "invoice",
    InvoiceResponse = "invoice_response"
}


export class LegalEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertisements" })
  advertisements?: LegalEntityDocumentTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: CountryEnum;

  @SpeakeasyMetadata({ data: "json, name=county" })
  county?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=line1" })
  line1?: string;

  @SpeakeasyMetadata({ data: "json, name=line2" })
  line2?: string;

  @SpeakeasyMetadata({ data: "json, name=party_name" })
  partyName?: string;

  @SpeakeasyMetadata({ data: "json, name=peppol_identifiers" })
  peppolIdentifiers?: any[];

  @SpeakeasyMetadata({ data: "json, name=public" })
  public?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tenant_id" })
  tenantId?: string;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip?: string;
}
