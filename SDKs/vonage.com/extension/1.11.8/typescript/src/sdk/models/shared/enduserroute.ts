import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Did } from "./did";
import { Line } from "./line";
import { BasicUser } from "./basicuser";



export class EndUserRoute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=block_caller_id" })
  blockCallerId?: boolean;

  @SpeakeasyMetadata({ data: "json, name=caller_id" })
  callerId?: string;

  @SpeakeasyMetadata({ data: "json, name=dids", elemType: Did })
  dids?: Did[];

  @SpeakeasyMetadata({ data: "json, name=dnd_enabled" })
  dndEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=extension_handsets", elemType: Line })
  extensionHandsets?: Line[];

  @SpeakeasyMetadata({ data: "json, name=extension_number" })
  extensionNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=location_id" })
  locationId?: number;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: BasicUser;

  @SpeakeasyMetadata({ data: "json, name=vtt_enabled" })
  vttEnabled?: boolean;
}
