import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RawDocumentDataParseStrategyEnum {
    Ubl = "ubl",
    Cii = "cii",
    Idoc = "idoc"
}
/**
 * A document to send, in base64 encoded format.
**/
export declare class RawDocumentData extends SpeakeasyBase {
    document: string;
    documentTypeId?: string;
    parse?: boolean;
    parseStrategy?: RawDocumentDataParseStrategyEnum;
    processId?: string;
}
