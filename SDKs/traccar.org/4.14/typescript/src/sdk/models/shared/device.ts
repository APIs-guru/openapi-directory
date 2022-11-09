import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Device extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, any>;

  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=contact" })
  contact?: string;

  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "json, name=geofenceIds" })
  geofenceIds?: number[];

  @Metadata({ data: "json, name=groupId" })
  groupId?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=lastUpdate" })
  lastUpdate?: Date;

  @Metadata({ data: "json, name=model" })
  model?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=phone" })
  phone?: string;

  @Metadata({ data: "json, name=positionId" })
  positionId?: number;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=uniqueId" })
  uniqueId?: string;
}
