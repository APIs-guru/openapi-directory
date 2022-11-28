import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Position extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accuracy" })
  accuracy?: number;

  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=altitude" })
  altitude?: number;

  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=course" })
  course?: number;

  @SpeakeasyMetadata({ data: "json, name=deviceId" })
  deviceId?: number;

  @SpeakeasyMetadata({ data: "json, name=deviceTime" })
  deviceTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=fixTime" })
  fixTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=outdated" })
  outdated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: string;

  @SpeakeasyMetadata({ data: "json, name=serverTime" })
  serverTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=speed" })
  speed?: number;

  @SpeakeasyMetadata({ data: "json, name=valid" })
  valid?: boolean;
}
