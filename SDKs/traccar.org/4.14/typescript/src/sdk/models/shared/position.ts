import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Position extends SpeakeasyBase {
  @Metadata({ data: "json, name=accuracy" })
  accuracy?: number;

  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=altitude" })
  altitude?: number;

  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, any>;

  @Metadata({ data: "json, name=course" })
  course?: number;

  @Metadata({ data: "json, name=deviceId" })
  deviceId?: number;

  @Metadata({ data: "json, name=deviceTime" })
  deviceTime?: Date;

  @Metadata({ data: "json, name=fixTime" })
  fixTime?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;

  @Metadata({ data: "json, name=network" })
  network?: Map<string, any>;

  @Metadata({ data: "json, name=outdated" })
  outdated?: boolean;

  @Metadata({ data: "json, name=protocol" })
  protocol?: string;

  @Metadata({ data: "json, name=serverTime" })
  serverTime?: Date;

  @Metadata({ data: "json, name=speed" })
  speed?: number;

  @Metadata({ data: "json, name=valid" })
  valid?: boolean;
}
