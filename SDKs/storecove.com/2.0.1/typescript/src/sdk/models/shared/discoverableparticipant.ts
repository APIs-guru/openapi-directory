import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DiscoverableParticipantDocumentTypesEnum {
    Invoice = "invoice",
    Creditnote = "creditnote",
    InvoiceResponse = "invoice_response",
    Order = "order",
    OrderResponse = "order_response",
    DespatchNotification = "despatch_notification",
    ProductCatalogue = "product_catalogue"
}


// DiscoverableParticipant
/** 
 * A participant to be discovered.
**/
export class DiscoverableParticipant extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentTypes" })
  documentTypes?: DiscoverableParticipantDocumentTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier: string;

  @SpeakeasyMetadata({ data: "json, name=metaScheme" })
  metaScheme?: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=scheme" })
  scheme: string;
}
