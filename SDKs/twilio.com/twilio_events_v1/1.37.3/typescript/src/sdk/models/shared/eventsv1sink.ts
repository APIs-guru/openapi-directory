import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SinkEnumSinkTypeEnum } from "./sinkenumsinktypeenum";
import { SinkEnumStatusEnum } from "./sinkenumstatusenum";



export class EventsV1Sink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=sink_configuration" })
  sinkConfiguration?: any;

  @SpeakeasyMetadata({ data: "json, name=sink_type" })
  sinkType?: SinkEnumSinkTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SinkEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
