import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SinkEnumSinkTypeEnum } from "./sinkenumsinktypeenum";
import { SinkEnumStatusEnum } from "./sinkenumstatusenum";


export class EventsV1Sink extends SpeakeasyBase {
  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=sink_configuration" })
  sinkConfiguration?: any;

  @Metadata({ data: "json, name=sink_type" })
  sinkType?: SinkEnumSinkTypeEnum;

  @Metadata({ data: "json, name=status" })
  status?: SinkEnumStatusEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
