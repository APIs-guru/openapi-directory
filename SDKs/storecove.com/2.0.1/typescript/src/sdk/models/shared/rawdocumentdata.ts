import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RawDocumentDataParseStrategyEnum {
    Ubl = "ubl",
    Cii = "cii",
    Idoc = "idoc"
}


// RawDocumentData
/** 
 * A document to send, in base64 encoded format.
**/
export class RawDocumentData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=document" })
  document: string;

  @SpeakeasyMetadata({ data: "json, name=documentTypeId" })
  documentTypeId?: string;

  @SpeakeasyMetadata({ data: "json, name=parse" })
  parse?: boolean;

  @SpeakeasyMetadata({ data: "json, name=parseStrategy" })
  parseStrategy?: RawDocumentDataParseStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=processId" })
  processId?: string;
}
