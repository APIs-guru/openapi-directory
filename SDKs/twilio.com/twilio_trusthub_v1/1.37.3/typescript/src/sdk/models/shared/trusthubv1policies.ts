import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TrusthubV1Policies extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=requirements" })
  requirements?: any;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
