import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Did } from "./did";
import { Line } from "./line";
import { BasicUser } from "./basicuser";


export class EndUserRoute extends SpeakeasyBase {
  @Metadata({ data: "json, name=block_caller_id" })
  blockCallerId?: boolean;

  @Metadata({ data: "json, name=caller_id" })
  callerId?: string;

  @Metadata({ data: "json, name=dids", elemType: shared.Did })
  dids?: Did[];

  @Metadata({ data: "json, name=dnd_enabled" })
  dndEnabled?: boolean;

  @Metadata({ data: "json, name=extension_handsets", elemType: shared.Line })
  extensionHandsets?: Line[];

  @Metadata({ data: "json, name=extension_number" })
  extensionNumber?: string;

  @Metadata({ data: "json, name=location_id" })
  locationId?: number;

  @Metadata({ data: "json, name=user" })
  user?: BasicUser;

  @Metadata({ data: "json, name=vtt_enabled" })
  vttEnabled?: boolean;
}
