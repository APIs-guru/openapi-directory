import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RawDocumentDataParseStrategyEnum {
    Ubl = "ubl"
,    Cii = "cii"
,    Idoc = "idoc"
}


// RawDocumentData
/** 
 * A document to send, in base64 encoded format.
**/
export class RawDocumentData extends SpeakeasyBase {
  @Metadata({ data: "json, name=document" })
  document: string;

  @Metadata({ data: "json, name=documentTypeId" })
  documentTypeId?: string;

  @Metadata({ data: "json, name=parse" })
  parse?: boolean;

  @Metadata({ data: "json, name=parseStrategy" })
  parseStrategy?: RawDocumentDataParseStrategyEnum;

  @Metadata({ data: "json, name=processId" })
  processId?: string;
}
