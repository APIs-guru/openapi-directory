import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PreviewSyncServiceSyncMapSyncMapItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=data" })
  data?: any;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=map_sid" })
  mapSid?: string;

  @Metadata({ data: "json, name=revision" })
  revision?: string;

  @Metadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
