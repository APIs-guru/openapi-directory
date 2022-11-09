import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Did } from "./did";
import { Line } from "./line";
import { BasicUser } from "./basicuser";
export declare class EndUserRoute extends SpeakeasyBase {
    blockCallerId?: boolean;
    callerId?: string;
    dids?: Did[];
    dndEnabled?: boolean;
    extensionHandsets?: Line[];
    extensionNumber?: string;
    locationId?: number;
    user?: BasicUser;
    vttEnabled?: boolean;
}
