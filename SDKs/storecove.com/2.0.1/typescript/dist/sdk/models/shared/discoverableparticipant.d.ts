import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DiscoverableParticipantDocumentTypesEnum {
    Invoice = "invoice",
    Creditnote = "creditnote",
    InvoiceResponse = "invoice_response",
    Order = "order",
    OrderResponse = "order_response",
    DespatchNotification = "despatch_notification",
    ProductCatalogue = "product_catalogue"
}
/**
 * A participant to be discovered.
**/
export declare class DiscoverableParticipant extends SpeakeasyBase {
    documentTypes?: DiscoverableParticipantDocumentTypesEnum[];
    identifier: string;
    metaScheme?: string;
    network?: string;
    scheme: string;
}
