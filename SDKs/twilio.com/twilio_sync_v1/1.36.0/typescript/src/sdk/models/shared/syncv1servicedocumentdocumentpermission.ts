import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SyncV1ServiceDocumentDocumentPermission extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=document_sid" })
  documentSid?: string;

  @Metadata({ data: "json, name=identity" })
  identity?: string;

  @Metadata({ data: "json, name=manage" })
  manage?: boolean;

  @Metadata({ data: "json, name=read" })
  read?: boolean;

  @Metadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=write" })
  write?: boolean;
}
