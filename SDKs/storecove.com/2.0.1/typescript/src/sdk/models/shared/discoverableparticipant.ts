import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DiscoverableParticipantDocumentTypesEnum {
    Invoice = "invoice"
,    Creditnote = "creditnote"
,    InvoiceResponse = "invoice_response"
,    Order = "order"
,    OrderResponse = "order_response"
,    DespatchNotification = "despatch_notification"
,    ProductCatalogue = "product_catalogue"
}


// DiscoverableParticipant
/** 
 * A participant to be discovered.
**/
export class DiscoverableParticipant extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentTypes" })
  documentTypes?: DiscoverableParticipantDocumentTypesEnum[];

  @Metadata({ data: "json, name=identifier" })
  identifier: string;

  @Metadata({ data: "json, name=metaScheme" })
  metaScheme?: string;

  @Metadata({ data: "json, name=network" })
  network?: string;

  @Metadata({ data: "json, name=scheme" })
  scheme: string;
}
